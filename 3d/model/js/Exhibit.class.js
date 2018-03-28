/****************************************************************************
*	@Copyright(c)	2016,保定无双软件
*	@desc	展览
*	@date	2016-10-11
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Exhibit.class.js
*	@modify	null
******************************************************************************/
var Exhibit = {};
Exhibit.VER = "1.1.0";
/**
 *	事件
 */
Exhibit.Event = {
	GAME_START:	"gameStart",
	GAME_OVER:	"gameOver",
	GAME_SCORE:	"gameScore",
	SCORE_ADD:	"scoreAdd"
}
/**
 *	预先加载
 */
Exhibit.Preload = {
	_queue : null,	//loder
	_images : [	//图片组
		{id:"hainan", src:"hainan.jpg"},
		{id:"vogso", src:"vogso.png"}
	],
	_fonts : [	//字体
		{id:"helvetiker", src:"helvetiker_regular.typeface.json"}
	],
	_objs : [	//物体模型
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
		if(!this._queue) Exhibit.Preload.init();
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
Exhibit.main = function(container){
	var _this = this;
	
	var WIDTH = 0,
		HEIGHT = 0;
	var __camera = null,	//摄像头
		__scene = null,	//场景
		__renderer = null,	//渲染器
		__bg = null;	//背景
	var _clock = null,	//时钟
		_controls = null;	//控制器

		
	/**
	 *	初始化
	 */
	_this.init = function(container){
		//WIDTH = container.clientWidth;
		//HEIGHT = container.clientHeight;
		WIDTH = window.innerWidth;
		HEIGHT = window.innerHeight;
		__camera = new THREE.PerspectiveCamera( 70, WIDTH / HEIGHT, 1, 1000 );
		__scene = new THREE.Scene();	//场景
		
		var light = new THREE.AmbientLight( 0xffffff ) 	//环境光
		__scene.add( light );
		var light = new THREE.DirectionalLight( 0xffffff, 1 );
		light.position.set( -10, 60, 10 );
		light.castShadow = true;
		__scene.add( light );
		
		__renderer = new THREE.WebGLRenderer({antialias:true});	//渲染器
		__renderer.autoClear = false;
		__renderer.setClearColor( 0x0000ff );
		__renderer.setPixelRatio( window.devicePixelRatio );
		__renderer.setSize( WIDTH, HEIGHT );
		container.appendChild( __renderer.domElement );//渲染元素放入需要的位置
	};
	/**
	 *	启动
	 */
	_this.launch = function(){
		_clock = new THREE.Clock();
		__camera.position.z = 400;
		_this.control();
		animate();
	};
	/**
	 *	显示
	 */
	_this.show = function(url){
		var bora = new Exhibit.Model(url);
		__scene.add(bora);
	};
	
	/**
	 *	控制
	 */
	_this.control = function(){
		_controls = new THREE.TrackballControls( __camera, __renderer.domElement );
	};
	
	/**
	 *	动画
	 */
	function animate() {
		requestAnimationFrame( animate );
		var deltaTime = _clock.getDelta();
		if(_controls)_controls.update();
		//TWEEN.update();
		__renderer.render( __scene, __camera );
	}
	_this.init(container);
};

Object.assign( Exhibit.main.prototype, THREE.EventDispatcher.prototype);
Exhibit.main.prototype.constructor = Exhibit.main;

/**
 *	背景
 */
Exhibit.Model = function(url){
	var _this = this;
	var RADIUS = 18,	//参数
		SEGMENTS = 20;
	var FONT_SIZE = 12,
		FONT_FAMILY = "Georgia";
	var NAME_Y = 15,
		TALK_Y = 20;
	
	_this.init = function(url){
		THREE.Object3D.call(_this);
		var mtlLoader = new THREE.MTLLoader();
		mtlLoader.setPath( url );
		mtlLoader.load( 'main.mtl', mtlLoad, mtlProgress, mtlError);
		var x = new THREE.XHRLoader();
		x.load("obj/bora/wheel.xaf", function(e){console.log(e)});
	};
	/**
	 *	mtl加载
	 */
	function mtlLoad (e) {
		console.log(e);
		e.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials( e );
		objLoader.setPath( url );
		objLoader.load( 'main.obj', objLoad, objProgress, objError);
	}
	function mtlProgress (e) {
		var sprite = _this.getObjectByName('tips');
		if(sprite) _this.remove(sprite);
		var per = Math.floor(e.loaded / e.total * 1000) /10;
		var str = "材质载入中……" + per + "%";
		sprite = _this.getTextSprite(str);
		sprite.name = "tips";
		_this.add(sprite);
	}
	function mtlError (e) {
		console.log(e);
	}
	/**
	 *	obj加载
	 */
	function objLoad (e) {
		var sprite = _this.getObjectByName('tips');
		if(sprite) _this.remove(sprite);
		console.log(e);
		_this.add(e);
	}
	function objProgress (e) {
		var sprite = _this.getObjectByName('tips');
		if(sprite) _this.remove(sprite);
		var per = Math.floor(e.loaded / e.total * 1000) /10;
		var str = "模型载入中……" + per + "%";
		sprite = _this.getTextSprite(str);
		sprite.name = "tips";
		_this.add(sprite);
	}
	function objError (e) {
		console.log(e);
	}
	/**
	 *	显示文字精灵
	 *	@param	text	文字
	 */
	_this.getTextSprite = function(text){
		var c = document.createElement('canvas');
		c.width = FONT_SIZE * (text.length + 1);
		c.height = FONT_SIZE * 3/2;
		var ctx=c.getContext("2d");
		ctx.fillStyle="#ffffff";
		ctx.fillRect(0,0,c.width,c.height);
		ctx.font = FONT_SIZE + "px " + FONT_FAMILY;
		ctx.fillStyle="#000000";
		ctx.fillText(text,FONT_SIZE*0.5,FONT_SIZE);
		var data = c.toDataURL("image/png", 1);
		var img = new Image();
		img.src = data;
		var texture = new THREE.Texture( img);
		texture.needsUpdate = true;
		var material = new THREE.SpriteMaterial( { map: texture, color: 0xffffff, fog: true } );
		var sprite = new THREE.Sprite( material );
		sprite.scale.x = c.width ;
		sprite.scale.y = c.height;
		sprite.position.y = NAME_Y;
		return sprite;
	};
	
	_this.init(url);
};
Exhibit.Model.prototype = Object.create( THREE.Object3D.prototype );
Exhibit.Model.prototype.constructor = Exhibit.Model;


