/****************************************************************************
*	@Copyright(c)	2016,保定无双软件
*	@desc	转盘
*	@date	2016-9-7
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Turntable.class.js
*	@modify	null
******************************************************************************/
var Turntable = {};
Turntable.VER = "1.0.0";
/**
 *	枚举，类型
 */
Turntable.kType = {
	DRAG: 0,
	GRAVITY: 1
}
/**
 *	枚举，奖品
 */
Turntable.kPrize = [
	{ "rotate":"26" , "prize":"奖品一" },
	{ "rotate":"88" , "prize":"奖品二" },
	{ "rotate":"137" , "prize": "奖品三" },
	{ "rotate":"185" , "prize": "奖品四" },
	{ "rotate":"235" , "prize": "奖品五" },
	{ "rotate":"287" , "prize": "奖品六" },
	{ "rotate":"337" , "prize": "奖品七" }
];
/**
 *	事件
 */
Turntable.Event = {
	CAKE_ATE:	"cakeAte",
	CAR_LOADED:	"carLoaded",
	ROAD_READY:	"roadReady",
	ROAD_START:	"roadStart",
	ROAD_END:	"roadGoal",
	SCORE_ADD:	"scoreAdd"
}
/**
 *	预先加载
 */
Turntable.Preload = {
	_queue : null,	//loder
	_images : [	//图片组
		//
		{id:"dial", src:"dial.png"},
		{id:"guide", src:"guide.png"}
	],
	_fonts : [
		{id:"helvetiker", src:"helvetiker_regular.typeface.json"}
	],
	_objs : [
		{id:"camarojs", src:"camaro/camaro.js", type:createjs.AbstractLoader.JAVASCRIPT},
		{id:"camaroctm", src:"camaro/camaro.ctm"},
		{id:"car-ao", src:"camaro/car-ao.png"}
	],
	_sounds : [	//声音
	],
	/**
	 *	初始化
	 */
	init : function(){
		this._queue = new createjs.LoadQueue(true);
		this._queue.loadManifest(this._images, false, "images/");
		//this._queue.loadManifest(this._fonts, false, "fonts/");
		//this._queue.loadManifest(this._objs, false, "obj/");
		//this._queue.loadManifest(this._sounds, false, "sounds/");
		//createjs.Sound.registerSounds(this._sounds);
	},
	/**
	 *	加载
	 */
	load : function(progress, complete){
		if(!this._queue) Turntable.Preload.init();
		if(progress)this._queue.on("progress", progress, this);//资源载入中
		if(complete)this._queue.on("complete", complete, this);//资源载入完毕
		this._queue.load();
	},
	/**
	 *	获取loader
	 */
	getQueue : function(){
		return this._queue;
	},
	/**
	 *	获取文件实体
	 */
	getResult : function(id){
		return this._queue.getResult(id);
	}
};
/**
 *	主体
 */
Turntable.main = function(container){
	var _this = this;
	
	var WIDTH = 0,
		HEIGHT = 0;
	var __camera = null,	//摄像头
		__scene = null,	//场景
		__renderer = null;	//渲染器
	var __dial = null,	//转盘
		__guide = null;	//指针
	var _award = 0;	//奖品

		
	/**
	 *	初始化
	 */
	_this.init = function(container){
		WIDTH = container.clientWidth;
		HEIGHT = container.clientHeight;
		//__camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
		__camera = new THREE.OrthographicCamera( WIDTH / - 20, WIDTH / 20, HEIGHT / 20, HEIGHT / - 20, 1, 1000 );
		__scene = new THREE.Scene();	//场景
		
		var light = new THREE.AmbientLight( 0xffffff ) 	//环境光
		__scene.add( light );
		
		__renderer = new THREE.WebGLRenderer();	//渲染器
		__renderer.antialias = true
		__renderer.setClearColor( 0xffffff );
		__renderer.setPixelRatio( window.devicePixelRatio );
		__renderer.setSize( container.clientWidth, container.clientHeight );
		container.appendChild( __renderer.domElement );//渲染元素放入需要的位置
	};
	/**
	 *	启动
	 */
	_this.launch = function(){
		__dial = new Turntable.Dial();
		__guide = new Turntable.Guide();
		__guide.position.y = 2;
		__camera.position.y = 20;
		__camera.position.z = 30;
		__camera.lookAt(__dial.position);
		__scene.add(__dial, __guide);
		animate();
	};
	/**
	 *	开始
	 */
	_this.start = function(){
		var index = Math.floor(Math.random() * Turntable.kPrize.length);
		var rotate = Turntable.kPrize[index].rotate;
		__dial.turn(rotate);
	}
	/**
	 *	控制
	 */
	_this.control = function(){
		document.addEventListener( 'keydown', onKeyDown, false );
		//document.addEventListener( 'keyup', onKeyUp, false );
		window.addEventListener( 'deviceorientation', onGravity, false);
	}
	
	/**
	 *	动画
	 */
	function animate() {
		requestAnimationFrame( animate );
		//if(_controls)_controls.update();
		TWEEN.update();
		__renderer.render( __scene, __camera );
	}
	_this.init(container);
};

Object.assign( Turntable.main.prototype, THREE.EventDispatcher.prototype);
Turntable.main.prototype.constructor = Turntable.main;


/**
 *	转盘
 */
Turntable.Dial = function(){
	var _this = this;
	var _ready = null,
		_turn = null;
	var RADIUS = 20,
		HEIGHT = 2,
		SEGMENTS = 100;
	/**
	 *	初始化
	 */
	_this.init = function(){
		THREE.Object3D.call(_this);
		
		var geometry = new THREE.CylinderBufferGeometry( RADIUS, RADIUS, HEIGHT,SEGMENTS);
		var materials = [
			new THREE.MeshPhongMaterial({color:0xff5500}),
			getMaterial("dial"),
			getMaterial("dial")
		];
		var mesh = new THREE.Mesh( geometry, new THREE.MultiMaterial(materials) );
		_this.add(mesh);
		_this.ready();
	}
	/**
	 *	准备
	 */
	_this.ready = function(){
		_ready = new TWEEN.Tween( _this.rotation )
			.to( {y:Math.PI*2}, 5000 )
			.repeat(Infinity)
			.start();
	};
	/**
	 *	转动
	 */
	_this.turn = function(rotate){
		_ready.stop();
		var r = Math.PI*2 * 10 + rotate * Math.PI /180;
		_turn = new TWEEN.Tween( _this.rotation )
			.to( {y: r}, 5000 )
			.easing( TWEEN.Easing.Quadratic.InOut)
			.start();
	};
	/**
	 *	获取材质
	 */
	function getMaterial(id){
		var img = Turntable.Preload.getResult(id);
		var texture = new THREE.Texture(img);
		texture.needsUpdate = true;
		var material = new THREE.MeshPhongMaterial();
		material.map = texture;	//图片
		return material;
	}
	
	_this.init();
};
Turntable.Dial.prototype = Object.create( THREE.Object3D.prototype );
Turntable.Dial.prototype.constructor = Turntable.Dial;

/**
 *	指针
 */
Turntable.Guide = function(){
	var _this = this;
	var NEEDLE_RADIUS = 1,	//指针参数
		NEEDLE_HEIGHT = 5,
		NEEDLE_SEGMENTS = 10,
		AXIS_RADIUS = 4,	//轴参数
		AXIS_HEIGHT = 2,
		AXIS_SEGMENTS = 10;
	/**
	 *	初始化
	 */
	_this.init = function(){
		THREE.Object3D.call(_this);
		var needle = createNeedle();
		needle.position.z = NEEDLE_HEIGHT + AXIS_RADIUS /2;
		var axis = createAxis();
		_this.add(needle, axis);
	};
	/**
	 *	创造指针
	 */
	function createNeedle(){
		var geometry = new THREE.ConeBufferGeometry(NEEDLE_RADIUS, NEEDLE_HEIGHT, NEEDLE_SEGMENTS);
		geometry.rotateX(Math.PI/2);
		var material = new THREE.MeshNormalMaterial({color:0xff0000});
		var mesh = new THREE.Mesh(geometry, material);
		return mesh;
	}
	/**
	 *	创造轴
	 */
	function createAxis() {
		var geometry = new THREE.CylinderBufferGeometry(AXIS_RADIUS, AXIS_RADIUS, AXIS_HEIGHT, AXIS_SEGMENTS);
		geometry.rotateY(Math.PI/2);
		var material = new THREE.MeshNormalMaterial({color:0xff0000});
		var img = Turntable.Preload.getResult("guide");
		var texture = new THREE.Texture(img);
		texture.needsUpdate = true;
		var face = new THREE.MeshPhongMaterial();
		face.map = texture;
		var materials = [
			new THREE.MeshPhongMaterial({color:0xff5500}),
			face,
			face
		];
		var mesh = new THREE.Mesh(geometry, new THREE.MultiMaterial(materials) );
		return mesh;
	}
	
	_this.init();
};
Turntable.Guide.prototype = Object.create( THREE.Object3D.prototype );
Turntable.Guide.prototype.constructor = Turntable.Guide;

