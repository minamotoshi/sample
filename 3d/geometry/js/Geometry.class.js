/****************************************************************************
*	@Copyright(c)	2016,保定无双软件
*	@desc	自定义几何体
*	@date	2016-9-12
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Geometry.class.js
*	@modify	null
******************************************************************************/
var Geometry = {};
Geometry.VER = "1.0.0";
/**
 *	枚举，类型
 */
Geometry.kType = {
	DRAG: 0,
	GRAVITY: 1
}
/**
 *	事件
 */
Geometry.Event = {
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
Geometry.Preload = {
	_queue : null,	//loder
	_images : [	//图片组
		//
		{id:"caoshuai", src:"caoshuai.jpg"},
		{id:"weisen", src:"weisen.jpg"}
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
		if(!this._queue) Geometry.Preload.init();
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
Geometry.main = function(container){
	var _this = this;
	
	var WIDTH = 0,
		HEIGHT = 0;
	var __camera = null,	//摄像头
		__scene = null,	//场景
		__renderer = null;	//渲染器
	var __substance = null;	//指针
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
		__substance = createSubstance();
		__camera.position.z = 30;
		__camera.lookAt(__substance.position);
		__scene.add(__substance);
		_this.control();
		animate();
	};
	/**
	 *	开始
	 */
	_this.start = function(){
		
	}
	/**
	 *	控制
	 */
	_this.control = function(){
		_controls = new THREE.OrbitControls( __camera, __renderer.domElement );
		_controls.enableDamping = true;
		_controls.dampingFactor = 0.25;
		_controls.enableZoom = false;
	}
	function createSubstance(){
		var img = Geometry.Preload.getResult("weisen");
		$("body").append(img);
		var texture = new THREE.Texture(img);
		texture.needsUpdate = true;
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		//texture.repeat.set( 3, 3 );
		
		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( -10,  10, 10 ),
			new THREE.Vector3( -10, -10, -10 ),
			new THREE.Vector3(  10, -10, 10 ),
			new THREE.Vector3(  10, 10, -10 )
		);
		var normal = new THREE.Vector3( 0, 1, 0 );
		var color = new THREE.Color( 0xffaa00 );
		geometry.faces.push( 
			new THREE.Face3( 0, 1, 2, normal, color, 0 ),
			new THREE.Face3( 0, 2, 3, normal, color, 1 ),
			new THREE.Face3( 0, 1, 3, normal, color, 2 ),
			new THREE.Face3( 1, 2, 3, normal, color, 3 )
		);
		geometry.computeBoundingBox();

		var max = geometry.boundingBox.max,
		    min = geometry.boundingBox.min;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var faces = geometry.faces;
		geometry.faceVertexUvs[0] = [];
		for (var i = 0; i < faces.length ; i++) {
		    var v1 = geometry.vertices[faces[i].a], 
		        v2 = geometry.vertices[faces[i].b], 
		        v3 = geometry.vertices[faces[i].c];
		    geometry.faceVertexUvs[0].push([
		        new THREE.Vector2((v1.x + offset.x)/range.x ,(v1.y + offset.y)/range.y),
		        new THREE.Vector2((v2.x + offset.x)/range.x ,(v2.y + offset.y)/range.y),
		        new THREE.Vector2((v3.x + offset.x)/range.x ,(v3.y + offset.y)/range.y)
		    ]);
		}
		geometry.uvsNeedUpdate = true;
		//geometry.computeBoundingSphere();
		//geometry.computeFaceNormals();
		
		var material = new THREE.MeshBasicMaterial({shading: THREE.SmoothShading});
		material.side = THREE.DoubleSide;
		material.needsUpdate = true;
		material.map = texture;
		var materials = [
			material,
			new THREE.MeshBasicMaterial({color:0xffff00, side: THREE.DoubleSide}),
			new THREE.MeshBasicMaterial({color:0x00ff00, side: THREE.DoubleSide}),
			new THREE.MeshBasicMaterial({color:0x0000ff, side: THREE.DoubleSide})
		];
		//var mesh = new THREE.Mesh(geometry, new THREE.MultiMaterial(materials) );
		var mesh = new THREE.Mesh(geometry, material );
		return mesh;
	}
	
	/**
	 *	动画
	 */
	function animate() {
		requestAnimationFrame( animate );
		if(_controls)_controls.update();
		//TWEEN.update();
		__renderer.render( __scene, __camera );
	}
	_this.init(container);
};

Object.assign( Geometry.main.prototype, THREE.EventDispatcher.prototype);
Geometry.main.prototype.constructor = Geometry.main;

