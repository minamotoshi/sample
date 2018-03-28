/****************************************************************************
*	@Copyright(c)	2016,保定无双软件
*	@desc	一镜到底
*	@date	2016-11-14
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Gene.class.js
*	@modify	null
******************************************************************************/
var Gene = {};
Gene.VER = "1.0.0";
/**
 *	预先加载
 */
Gene.Preload = {
	_queue : null,	//loder
	_images : [
		{id:"bg", src:"bg.jpg"}
	],
	_gallerys : [	//图片组
		//
		{id:"cloud2", src:"cloud2.png"},
		{id:"cube1", src:"cube1.png"},
		{id:"cube2", src:"cube2.png"},
		{id:"pyramid", src:"pyramid.png"},
		{id:"sphinx", src:"sphinx.png"},
		
		{id:"train", src:"train.png"},
		{id:"glow", src:"glow.png"},
		{id:"building", src:"building.png"},
		{id:"bridge", src:"bridge.png"},
		{id:"balloon1", src:"balloon1.png"},
		{id:"balloon2", src:"balloon2.png"},
		{id:"track", src:"track.png"},
		{id:"tunnel2", src:"tunnel2.png"},
		
		//{id:"earth", src:"earth.png"},
		{id:"light", src:"light.png"},
		{id:"tunnel1", src:"tunnel1.png"},
		{id:"line1", src:"line1.png"},
		{id:"chair", src:"chair.png"},

		{id:"greatwall", src:"greatwall.png"},
		{id:"lion", src:"lion.png"},
		{id:"taj_mahal", src:"taj_mahal.png"},
		{id:"road", src:"road.png"},
		{id:"cloud3", src:"cloud3.png"},
		
		//1
		{id:"brain", src:"brain.png"},	//大脑
		{id:"brain_border", src:"brain_border.png"},	//大脑边框
		{id:"debris", src:"debris.png"},	//碎片
		{id:"gear1", src:"gear1.png"},	//齿轮1
		{id:"gear2", src:"gear2.png"},	//齿轮2
		//{id:"glass1", src:"glass1.png"},	//玻璃1
		{id:"pipe1", src:"pipe1.png"},	//管子1
		{id:"pipe2", src:"pipe2.png"},	//管子2
		{id:"line2", src:"line2.png"},	//线条2
		
		//2
		{id:"wire", src:"wire.png"},	//线框
		{id:"glass2", src:"glass2.png"},	//玻璃2
		{id:"manipulator1", src:"manipulator1.png"},	//机械手1
		{id:"relation", src:"relation.png"},	//关系网
		{id:"screen1", src:"screen1.png"},	//触摸屏
		{id:"screen2", src:"screen2.png"},	//触摸屏
		{id:"body3", src:"body3.png"},	//人体3
		
		//3
		{id:"robot1", src:"robot1.png"},	//机器人
		{id:"arm", src:"arm.png"},	//机械臂
		{id:"manipulator2", src:"manipulator2.png"},	//机械手2
		{id:"keyboard1", src:"keyboard1.png"},	//键盘1
		{id:"magic_cube", src:"magic_cube.png"},	//魔方
		{id:"hexagon1", src:"hexagon1.png"},	//六边形1
		{id:"hexagon2", src:"hexagon2.png"},	//六边形2
		{id:"hexagon3", src:"hexagon3.png"},	//六边形3
		{id:"cloud1", src:"cloud1.png"},	//云彩
		
		//4
		{id:"robot2", src:"robot2.png"},	//机器人
		{id:"bias_light", src:"bias_light.png"},	//背景光
		{id:"tree", src:"tree.png"},	//树杈光
		{id:"vertical_light1", src:"vertical_light1.png"},	//竖光1
		{id:"vertical_light2", src:"vertical_light2.png"},	//竖光2
		{id:"cloud3", src:"cloud3.png"},	//云3
		
		//1
		{id:"hexagon4", src:"hexagon4.png"},	//六边形4
		{id:"hexagon5", src:"hexagon5.png"},	//六边形5
		{id:"hexagon6", src:"hexagon6.png"},	//六边形6
		{id:"dna1", src:"dna1.png"},	//基因链1
		{id:"genetic1", src:"genetic1.png"},	//基因链接1
		{id:"keyboard2", src:"keyboard2.png"},	//键盘2
		{id:"body1", src:"body1.png"},	//人体1
		{id:"microscope", src:"microscope.png"},	//显微镜
		//2
		{id:"virus1", src:"virus1.png"},	//病毒1
		{id:"virus2", src:"virus2.png"},	//病毒2
		{id:"dna2", src:"dna2.png"},	//基因链2
		{id:"genetic2", src:"genetic2.png"},	//基因链接2
		{id:"aperture", src:"aperture.png"},	//光圈
		{id:"mesa", src:"mesa.png"},	//台面
		{id:"mesa1", src:"mesa1.png"},	//小台面
		{id:"shape", src:"shape.png"},	//形状
		//3
		//{id:"body4", src:"body4.png"},	//人体4
		//{id:"dna3", src:"dna3.png"},	//基因链3
		//{id:"genetic3", src:"genetic3.png"},	//基因球
		//{id:"mars", src:"mars.png"},	//火星
		{id:"pill", src:"pill.png"},	//药丸
		//{id:"cross", src:"cross.png"},	//十字架
		{id:"polygon1", src:"polygon1.png"},	//多边形1
		//{id:"polygon2", src:"polygon2.png"},	//多边形2

		//4-1
		{id:"jh", src:"jh.png"},	//几何
		{id:"sj1", src:"sj1.png"},	//三角一
		{id:"sj2", src:"sj2.png"},	//三角二
		{id:"xq1", src:"xq1.png"},	//星球一
		{id:"ys1", src:"ys1.png"},	//陨石1
		{id:"ys2", src:"ys2.png"},	//陨石2
		{id:"ys3", src:"ys3.png"},	//陨石3
		{id:"ys4", src:"ys4.png"},	//陨石4
		{id:"ys5", src:"ys5.png"},	//陨石5
		{id:"ys6", src:"ys6.png"},	//陨石6
		{id:"ys7", src:"ys7.png"},	//陨石7

		//4-2
		{id:"fc1", src:"fc1.png"},	//飞船1
		{id:"fc2", src:"fc2.png"},	//飞船2
		{id:"fd1", src:"fd1.png"},	//飞碟1
		{id:"fd2", src:"fd2.png"},	//飞碟2
		{id:"gq1", src:"gq1.png"},	//光圈1
		{id:"hx1", src:"hx1.png"},	//火星1
		{id:"jh2", src:"jh2.png"},	//几何2
		{id:"yhy1", src:"yhy1.png"},	//宇航员1
		{id:"yhy2", src:"yhy2.png"},	//宇航员2

		//4-3
		{id:"fc3", src:"fc3.png"},	//飞船3
		{id:"gq2", src:"gq2.png"},	//光圈2
		{id:"gq3", src:"gq3.png"},	//光圈3
		{id:"gs1", src:"gs1.png"},	//光束1
		{id:"gs2", src:"gs2.png"},	//光束2
		{id:"gx", src:"gx.png"},	//光线
		{id:"hx2", src:"hx2.png"},	//火星2
		{id:"hxc1", src:"hxc1.png"},	//火星车1
		{id:"hxc2", src:"hxc2.png"},	//火星车2
		{id:"tyn", src:"tyn.png"},	//太阳能
		{id:"yhy3", src:"yhy3.png"},	//宇航员3

		//5
		{id:"wz", src:"wz.png"},	//文字


		//5-1
		{id:"bj", src:"bj.jpg"},	//背景
		{id:"kouhao", src:"kouhao.png"},	//口号
		{id:"ren", src:"ren.png"}	//人


	],
	_fonts : [	//字体
		{id:"helvetiker", src:"helvetiker_regular.typeface.json"}
	],
	_models : [	//模型
		
	],
	_sounds : [	//声音
	],
	/**
	 *	初始化
	 */
	init : function(){
		this._queue = new createjs.LoadQueue(true);
		this._queue.loadManifest(this._images, false, "textures/");
		//this._queue.loadManifest(this._images, false, "http://mat1.gtimg.com/tech/images/lw/live/insider/");
	},
	ready : function(){
		this._queue.loadManifest(this._gallerys, false, "textures/");
		//this._queue.loadManifest(this._gallerys, false, "http://mat1.gtimg.com/tech/images/lw/live/insider/");
		//this._queue.loadManifest(this._fonts, false, "fonts/");
		//this._queue.loadManifest(this._objs, false, "models/");
		//this._queue.loadManifest(this._sounds, false, "sounds/");
		//createjs.Sound.registerSounds(this._sounds);
	},
	/**
	 *	加载
	 */
	load : function(progress, complete){
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
 *	事件
 */
Gene.Event = {
	GAME_START:	"gameStart",
	GAME_INIT:	"gameInit",
	GAME_OVER:	"gameOver",
	MOVE_FINISH:	"moveFinish",
	SLOGAN_CLICK:	"sloganClick"
};

/**
 *	主体
 */
Gene.main = function(container){
	var _this = this;
	
	var WIDTH = 0,
		HEIGHT = 0;
	var __camera = null,	//摄像头
		__scene = null,	//场景
		__renderer = null;	//渲染器
	var __stats = null;	//状态
	var __game = null;	//游戏
	var __bg = null,	//背景
		__gallery = null,	//画廊
		__person = null;	//角色自身
	var _galleryArr = [],	//画廊数据
		_galleryIndex = 0;
	var _raycaster = new THREE.Raycaster(),	//射线
		_checkObjs = [];	//检测元素
	var _bjPositionZ = 0,	//换背景位置
		_bjFlag = false;	//换图片
	var _startFlag = false;	//开始
	var _audio = null;	//声音
	var _controls = null;	//控制器
	var _touch = null;
	var VISUAL_MIN = 1,	//可视范围
		VISUAL_OPACITY = 7000;
		VISUAL_MAX = 8000;
	/**
	 *	初始化
	 */
	_this.init = function(container){
		//WIDTH = container.clientWidth;
		//HEIGHT = container.clientHeight;
		WIDTH = window.innerWidth;
		HEIGHT = window.innerHeight;
		__camera = new THREE.PerspectiveCamera( 70, WIDTH / HEIGHT, VISUAL_MIN, VISUAL_MAX );
		__scene = new THREE.Scene();	//场景
		var bg = new THREE.Texture(Gene.Preload.getResult("bg"));
		//var bg = new THREE.TextureLoader().load( "textures/bg.jpg" );
		bg.needsUpdate = true;
		__scene.background = bg;
		//var fog = new THREE.Fog(0x000000, VISUAL_MIN, VISUAL_MAX);
		//__scene.fog = fog;
		
		var light = new THREE.AmbientLight( 0xffffff ) 	//环境光
		__scene.add( light );
		
		__renderer = new THREE.WebGLRenderer({canvas:container});	//渲染器
		__renderer.setPixelRatio( window.devicePixelRatio );
		__renderer.setSize( WIDTH, HEIGHT );
		__renderer.setClearColor( 0xffffff);
		//声音
		_audio = document.createElement("audio");
		//_audio.src = "http://mat1.gtimg.com/tech/images/lw/live/insider/images/bg.mp3";
		_audio.src = "sounds/bg.mp3";
		_audio.loop = true;
		//_audio.autoplay = true;
		
		//__stats = new Stats();
		//document.body.appendChild(__stats.dom);
	};
	/**
	 *	启动
	 */
	_this.launch = function(){
		//__camera.position.z = 50;
		__game = new THREE.Object3D();
		__scene.add(__game);
		__person = new Gene.Person();
		__gallery = new THREE.Object3D();
		__game.add(__gallery);
		_this.control();
		animate();
	};
	/**
	 *	 游戏设置
	 *	@param	str	数据
	 *	@param	speed	速度
	 *	@param	unit	滑动单位
	 *	@param	gap	间距
	 */
	_this.setup = function(str, speed, unit, scope_min, scope_max, scope_bj) {
		var len = __gallery.children.length;
		for (var i =0; i<len;i++) {
			__gallery.remove(__gallery.children[0]);
		}
		var arr = typeof(str)=="string"?JSON.parse(str):str;
		_galleryArr = arr;
		_galleryIndex = 0;
		__person.setScope(scope_min, scope_max);
		_bjPositionZ = scope_bj;
		__person.setAuto(speed);
		__person.setUnit(unit);
		__person.pauseAuto();
		__person.addEventListener(Gene.Event.MOVE_FINISH, onMoveFinish);
	};
	/**
	 *	 游戏开始
	 */
	_this.start = function() {
		__person.resumeAuto();
		_startFlag = true;
		for(var k in __gallery.children){
			if(isNaN(k)) continue;
			var obj = __gallery.children[k];
			obj.fadeIn();
		}
	};
	/**
	 *	 背景音乐播放
	 */
	_this.audioPlay = function(){
		_audio.play();
	};
	function galleryCreate () {
		if(_galleryIndex >= _galleryArr.length){
			return;
		}
		var obj = _galleryArr[_galleryIndex];
		var g = new Gene.Gallery(obj.id);
		g.position.x = parseInt(obj.x);
		g.position.y = parseInt(obj.y);
		g.position.z = parseInt(obj.z);
		if(obj.hasOwnProperty("rotate")) g.rotation.z = obj.rotate * (Math.PI / 180);
		if(obj.hasOwnProperty("scale")) g.scale.x = g.scale.y = g.scale.z = obj.scale;
		if(obj.hasOwnProperty("flip")){
			if(obj.flip == "h"){
				g.scale.x = - g.scale.x;
			}
			if(obj.flip == "v"){
				g.scale.y = - g.scale.y;
			}
		}
		if(obj.hasOwnProperty("href")){
			g.setHref(obj.href);
			_checkObjs.push(g);
		}
		//g.fadeIn();
		if(!_startFlag){
			g.opacity(0);
		}
		__gallery.add(g);
		_galleryIndex++;
	}
	/**
	 *	控制
	 */
	_this.control = function(){
		//_controls = new THREE.TrackballControls( __camera, __renderer.domElement );
		document.addEventListener( 'keydown', onKeyDown, false );
		//__renderer.domElement.addEventListener( 'click', onClick, false );
		__renderer.domElement.addEventListener( 'touchstart', onTouchStart, false );
		__renderer.domElement.addEventListener( 'touchmove', onTouchMove, false );
		__renderer.domElement.addEventListener( 'touchend', onTouchEnd, false );
		
		__renderer.domElement.addEventListener( 'mousedown', onMouseDown, false );
		
		__renderer.domElement.addEventListener( 'click', onClick, false );
		
	};
	/**
	 *	点击
	 */
	function onClick( e ) {
		event.preventDefault();
		hitTest( e.clientX, e.clientY );
	}
	/**
	 *	移动到终点
	 */
	function onMoveFinish (e) {
		for (var k in _checkObjs) {
			if(isNaN(k)) continue;
			_checkObjs[k].remind();
		}
	}
	/**
	 *	点击检测
	 */
	function hitTest( x, y ) {
		var mouse = {};
		mouse.x = ( x / window.innerWidth ) * 2 - 1;
		mouse.y = - ( y / window.innerHeight ) * 2 + 1;

		_raycaster.setFromCamera( mouse, __camera );
		var intersects = _raycaster.intersectObjects( _checkObjs );
		if ( intersects.length > 0 ) {
			var obj = intersects[ 0 ].object;
			_this.dispatchEvent({ type: Gene.Event.SLOGAN_CLICK, href: obj.getHref() });
		}
	}
	function onKeyDown( event ) {
		switch ( event.keyCode ) {
			case 38: // up
			case 87: // w
				__person.forward();
				break;
			case 37: // left
			case 65: // a
				
				break;
			case 40: // down
			case 83: // s
				__person.back();
				break;
			case 39: // right
			case 68: // d
				
				break;
			case 32: // space
				
				break;
		}
	}
	/**
	 *	拖动开始
	 */
	function onTouchStart (e) {
		event.preventDefault();
		hitTest( e.touches[0].clientX, e.touches[0].clientY );
		_touch = e.touches[0].clientY;
		__person.pauseAuto();
	}
	/**
	 *	拖动
	 */
	function onTouchMove (e) {
		event.preventDefault();
		if(_touch){
			var step = _touch - e.touches[0].clientY;
			__person.step(step);
			galleryCheck();
		}
		_touch = e.touches[0].clientY;
	
	}
	/**
	 *	拖动结束
	 */
	function onTouchEnd (e) {
		event.preventDefault();
		__person.resumeAuto();
		_touch = null;
	}
	
	/**
	 *	拖动开始
	 */
	function onMouseDown (e) {
		event.preventDefault();
		_touch = e.clientY;
		__renderer.domElement.addEventListener( 'mousemove', onMouseMove, false );
		__renderer.domElement.addEventListener( 'mouseup', onMouseUp, false );
		__person.pauseAuto();
	}
	/**
	 *	拖动
	 */
	function onMouseMove (e) {
		event.preventDefault();
		if(_touch){
			var step = _touch - e.clientY;
			__person.step(step);
			galleryCheck();
		}
		_touch = e.clientY;
	}
	/**
	 *	拖动结束
	 */
	function onMouseUp (e) {
		event.preventDefault();
		__person.resumeAuto();
		_touch = null;
		__renderer.domElement.removeEventListener( 'mousemove', onMouseMove, false );
		__renderer.domElement.removeEventListener( 'mouseup', onMouseUp, false );
	}
	/**
	 *	照片墙检测
	 */
	function galleryCheck () {
		if(!_bjFlag && __person.position.z < _bjPositionZ){
			_bjFlag = true;
			var bg = new THREE.Texture(Gene.Preload.getResult("bj"));
			bg.needsUpdate = true;
			__scene.background = bg;
		}
		if(_bjFlag && __person.position.z > _bjPositionZ){
			_bjFlag = false;
			var bg = new THREE.Texture(Gene.Preload.getResult("bg"));
			bg.needsUpdate = true;
			__scene.background = bg;
		}
	}
	/**
	 *	动画
	 */
	function animate() {
		requestAnimationFrame( animate );
		if(__stats)__stats.update();
		if(_controls)_controls.update();
		TWEEN.update();
		__person.eyeCamera(__camera);
		galleryCheck();
		galleryCreate();
		__renderer.render( __scene, __camera );
	}
	_this.init(container);
};

Object.assign( Gene.main.prototype, THREE.EventDispatcher.prototype);
Gene.main.prototype.constructor = Gene.main;

/**
 *	图画	
 */
Gene.Gallery = function(id) {
	var _this = this;
	var WIDTH = 100,	//几何体参数
		HEIGHT = 100,
		DEPTH = 100,
		SEGMENTS = 1;
	var DURATION = 1000;
	var _href = null;
	
	_this.init = function(id){
		THREE.Mesh.call(_this);
		var image = Gene.Preload.getResult(id);
		var geometry = new THREE.PlaneGeometry( image.width, image.height, SEGMENTS, SEGMENTS );
		var texture = new THREE.Texture(image);
		texture.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial({transparent: true});
		material.side = THREE.DoubleSide;
		material.map = texture;
		_this.material = material;
		_this.geometry = geometry;
	};
	/**
	 *	淡入效果	
	 */
	_this.fadeIn = function(){
		_this.material.opacity = 0;
		new TWEEN.Tween( _this.material )
			.to( {opacity:1}, DURATION )
			.start();
	};
	/**
	 *	透明度	
	 */
	_this.opacity = function(val){
		_this.material.opacity = val;
	};
	/**
	 *	提醒	
	 */
	_this.remind = function(){
		var param = _this.scale.x * 1.15;
		new TWEEN.Tween( _this.scale )
			.to( {x:param, y:param, z:param}, DURATION )
			.repeat(Infinity)
			.yoyo(true)
			.easing( TWEEN.Easing.Quadratic.InOut )
			.start();
	};
	/**
	 *	设置连接
	 */
	_this.setHref = function(href){
		_href = href;
	};
	_this.getHref = function(){
		return _href;
	};
	_this.init(id);
};
Gene.Gallery.prototype = Object.create( THREE.Mesh.prototype );
Gene.Gallery.prototype.constructor = Gene.Gallery;

/**
 *	人物	
 */
Gene.Person = function() {
	var _this = this;
	var WIDTH = 100,	//几何体参数
		HEIGHT = 100,
		DEPTH = 100,
		SEGMENTS = 1;
	var _scope = {min:0, max:0};
	var _speed = 0,	//速度
		_autoSpeed = 0,	//自动速度
		_unit = 1,	//拖拽单位
		_acceleration = 0,	//加速度
		_finish = false,	//终点
		_journey = 0;	//路程
	
	_this.init = function(){
		THREE.Object3D.call(_this);
	};
	/**
	 *	前进
	 */
	_this.forward = function(){
		_this.step(-_speed);
	};
	/**
	 *	后退
	 */
	_this.back = function(){
		_this.step(_speed);
	};
	/**
	 *	步骤
	 */
	_this.step = function(step){
		_acceleration = step;
		_this.position.z += step * _unit;
	};
	/**
	 *	设置速度
	 *	@param	num	速度值
	 */
	_this.setSpeed = function(num){
		_speed = num;
	};
	/**
	 *	设置单位
	 *	@param	num	速度值
	 */
	_this.setUnit = function(num){
		_unit = num;
	};
	/**
	 *	设定范围
	 */
	_this.setScope = function(min, max){
		min = parseInt(min);
		max = parseInt(max);
		_this.position.z = _journey = min;
		_scope.min = min;
		_scope.max = max;
	};
	/**
	 *	设定自动
	 */
	_this.setAuto = function(speed){
		_autoSpeed = parseInt(speed);
		_this.resumeAuto();
	};
	/**
	 *	暂停自动
	 */
	_this.pauseAuto = function(){
		_this.setSpeed(0);
	};
	/**
	 *	恢复自动
	 */
	_this.resumeAuto = function(){
		if(_this.position.z <= _journey)
			_this.setSpeed(_autoSpeed);
	};
	/**
	 *	摄像头眼
	 */
	_this.eyeCamera = function(camera){
		if(_speed > 0) _this.forward();
		if(Math.abs(_acceleration) < 1) 
			_acceleration = 0;
		else
			_acceleration *= 97/100;
		_this.position.z +=_acceleration;
		if(_this.position.z < _journey) _journey = _this.position.z;
		if(_this.position.z > _scope.min){
			_speed = _acceleration = 0;
			_this.position.z = _scope.min;
		}
		if(_this.position.z < _scope.max){
			_this.position.z = _scope.max;
			_speed = _acceleration = 0;
			if(!_finish){
				_finish = true;
				_this.dispatchEvent({ type: Gene.Event.MOVE_FINISH });
			}
		}
		camera.position.copy(_this.position);
		camera.rotation.copy(_this.rotation);
	};
	_this.init();
};
Gene.Person.prototype = Object.create( THREE.Object3D.prototype );
Gene.Person.prototype.constructor = Gene.Person;
