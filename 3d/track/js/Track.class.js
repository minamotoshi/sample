/****************************************************************************
*	@Copyright(c)	2016,保定无双软件
*	@desc	轨道
*	@date	2016-10-18
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Track.class.js
*	@modify	null
******************************************************************************/
var Track = {};
Track.VER = "1.0.0";
/**
 *	事件
 */
Track.Event = {
	GAME_START:	"gameStart",
	GAME_OVER:	"gameOver",
	GAME_SCORE:	"gameScore",
	MTL_LOADED:	"mtlLoaded",
	OBJ_LOADED:	"objLoaded",
	MODEL_LOADED:	"modeLoaded",
	CAR_LOADED:	"carLoaded",
	SCORE_ADD:	"scoreAdd"
};
Track.kBarricadeType = {
	"BLOCK" : "models/mtl/block/",
	"CONE" : "models/mtl/cone/"
};	//类型
Track.STEPS = 300;
/**
 *	预先加载
 */
Track.Preload = {
	_queue : null,	//loder
	_images : [	//图片组
		{id:"road", src:"road.jpg"}
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
		if(!this._queue) Track.Preload.init();
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
Track.main = function(container){
	var _this = this;
	
	var WIDTH = 0,
		HEIGHT = 0;
	var STEP = -100;	//一步
	var __camera = null,	//摄像头
		__scene = null,	//场景
		__renderer = null,	//渲染器
		__bg = null;	//背景
	var _clock = null,	//时钟
		_controls = null;	//控制器
	var _index;	
	var _route = [];
	var __road = null,
		__car = null;	//汽车
	var _pos = null;
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
		__renderer.setPixelRatio( window.devicePixelRatio );
		__renderer.setSize( WIDTH, HEIGHT );
		__renderer.setClearColor( 0x0000ff );
		container.appendChild( __renderer.domElement );//渲染元素放入需要的位置
	};
	/**
	 *	启动
	 */
	_this.launch = function(){
		_clock = new THREE.Clock();
		__camera.position.z = 10;
		__car = new Track.Car('obj/car/', true);
		__scene.add(__car);
		__car.addEventListener(Track.Event.CAR_LOADED, function(e){_this.show()});
	};
	/**
	 *	显示
	 */
	_this.show = function(){
		__road = new Track.Road();
		__scene.add(__road);
		//_route = road.getRoute();
		_index = 0;
		_this.control();
		animate();
	};
	function motion(){
		if(_index < _route.length - Track.STEPS/2){
			__car.position.copy(_route[_index]);
			//__car.position.y+=1;
			if(_index+1 < _route.length)__car.lookAt(_route[_index + 1]);
			var p = __car.getTail();
			__camera.position.copy(p);
			__camera.lookAt(_route[_index]);
			_index++;
		}else{
			_route = _route.concat(__road.route(STEP));
		}
	}
	
	/**
	 *	控制
	 */
	_this.control = function(){
		//_controls = new THREE.TrackballControls( __camera, __renderer.domElement );
		__renderer.domElement.addEventListener("touchstart", onTouchStart, false);
		__renderer.domElement.addEventListener("touchmove", onTouchMove, false);
		__renderer.domElement.addEventListener("touchend", onTouchEnd, false);
	};
	function onTouchStart(e) {
		e.preventDefault();
		_pos = e.touches[0].clientX;
	}
	function onTouchMove(e) {
		e.preventDefault();
		var dis = _pos - e.touches[0].clientX;
		if(dis < -10){
			__car.left();
		}else if(dis > 10){
			__car.right();
		}else{
			__car.reset();
		}
	}
	function onTouchEnd(e) {
		e.preventDefault();
		__car.reset();
	}
	/**
	 *	动画
	 */
	function animate() {
		requestAnimationFrame( animate );
		var deltaTime = _clock.getDelta();
		if(_controls)_controls.update();
		//TWEEN.update();
		if(!isNaN(_index)) motion();
		if(__car)__car.update();
		__renderer.render( __scene, __camera );
	}
	_this.init(container);
};

Object.assign( Track.main.prototype, THREE.EventDispatcher.prototype);
Track.main.prototype.constructor = Track.main;

/**
 *	道路
 */
Track.Road = function(dis){
	var _this = this;
	var RADIUS = 18,	//参数
		WIDTH = 4,	//路宽
		GAP = 3;	//移动大小
	var _vec = new THREE.Vector3(0,0,0);
	
	_this.init = function(){
		THREE.Object3D.call(_this);
	};
	
	_this.route = function(dis) {
		if(_this.children.length > 2){
			_this.remove(_this.children[0]);
		}
		var start = new THREE.Vector3();
		start.copy(_vec);
		_vec.z += dis;
		var r = Math.random() * Math.PI*2;
		_vec.x += Math.cos(r) * RADIUS;
		_vec.y += Math.sin(r) * RADIUS;
		var arr = draw(start, _vec);
		
		//纹理
		var texture = new THREE.Texture(Track.Preload.getResult("road"));
		texture.needsUpdate = true;
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( 1, 10 );
		//材质
		var material = new THREE.MeshBasicMaterial( { color : 0xffffff } );
		material.map = texture;
		//几何体
		var geometry = new THREE.Geometry();
		var normal = new THREE.Vector3( 0, 1, 0 );
		var color = new THREE.Color( 0xffaa00 );
		var vertice = new Array();
		geometry.faceVertexUvs[0] = [];
		for(var k in arr){
			var v = arr[k];
			var left = new THREE.Vector3();
			left.copy(v);
			left.x-=WIDTH;
			var right = new THREE.Vector3();
			right.copy(v);
			right.x+=WIDTH;
			geometry.vertices.push(left, right);
			if(k>0){
				geometry.faces.push( new THREE.Face3( k*2, k*2-2, k*2-1, normal, color, 0 ));
				geometry.faceVertexUvs[0].push([
			        new THREE.Vector2(0 ,k/arr.length),
			        new THREE.Vector2(0 ,(k-1)/arr.length),
			        new THREE.Vector2(1 ,(k-1)/arr.length)
			    ]);
				geometry.faces.push( new THREE.Face3( k*2, k*2-1, k*2+1, normal, color, 0 ));
				geometry.faceVertexUvs[0].push([
			        new THREE.Vector2(0 ,k/arr.length),
			        new THREE.Vector2(1 ,(k-1)/arr.length),
			        new THREE.Vector2(1 ,k/arr.length)
			    ]);
			}
		}
		geometry.uvsNeedUpdate = true;
		var mesh = new THREE.Mesh(geometry, material );
		_this.add(mesh);
		
		var left = 0,
			right = 0;
		if(Math.random() > 0.5){
			left = GAP;
			right = 0;
		}else{
			left = 0;
			right = GAP;
		}
		var block = new Track.Barricade(Track.kBarricadeType.BLOCK);
		block.position.copy(start);
		block.position.x -= left;
		mesh.add(block);
		var cone = new Track.Barricade(Track.kBarricadeType.CONE);
		cone.position.copy(start);
		cone.position.x += right;
		mesh.add(cone);
		arr.pop();
		return arr;
	}
	
	function draw(start, end){
		var z = end.z - start.z;
		var p1 = new THREE.Vector3(start.x, start.y, start.z + Math.random()*z/2 + z/2);
		var p2 = new THREE.Vector3(end.x, end.y, end.z - Math.random()*z/2 - z/2);
		
		var curve = new THREE.CubicBezierCurve3(
			start,
			p1,
			p2,
			end
		);
		var arr = curve.getPoints( Track.STEPS );
		
		return arr;
	}
	_this.init();
};
Track.Road.prototype = Object.create( THREE.Object3D.prototype );
Track.Road.prototype.constructor = Track.Road;

/**
 *	汽车
 */

Track.Car = function(url){
	var _this = this;
	var __car = null;
	var GAP = 2;
	var _mixers = [];
	var _clock = new THREE.Clock();
	
	_this.init = function(url){
		THREE.Object3D.call(_this);
		//__car = new Track.FbxModel("models/fbx/xsi_man_skinning.fbx");
		//__car = new Track.FbxModel("models/fbx/headset.FBX");
		//__car = new Track.FbxModel("models/fbx/2.FBX");
		__car = new Track.MtlModel("models/mtl/car/");
		__car.addEventListener(Track.Event.MODEL_LOADED, carLoaded);
		//__car.rotateY(Math.PI);
		//__car.translateY(0.8);
		__car.scale.x = __car.scale.y = __car.scale.z = 0.01;
		_this.add(__car);
		//var bbox = new THREE.BoundingBoxHelper( __car, 0xff0000 );
		//bbox.update();
		//_this.add( bbox );
	};
	_this.getTail = function(){
		return _this.localToWorld(new THREE.Vector3(1,4,-10));
	};
	_this.left = function(){
		__car.position.x = -GAP;
	};
	_this.right = function(){
		__car.position.x = GAP;
	};
	_this.reset = function(){
		__car.position.x = 0;
	};
	function carLoaded (e) {
		if(e.hasOwnProperty("mixers")){
			_mixers = e.mixers;
		}
		_this.dispatchEvent({ type: Track.Event.CAR_LOADED});
	}
	/**
	 *	 更新
	 */
	_this.update = function() {
		if ( _mixers.length > 0 ) {
			for ( var i = 0; i < _mixers.length; i ++ ) {
				_mixers[ i ].update( _clock.getDelta() );
			}
		}
	}
	_this.init(url);
};
Track.Car.prototype = Object.create( THREE.Object3D.prototype );
Track.Car.prototype.constructor = Track.Car;

/**
 *	路障
 */
Track.Barricade = function(type){
	var _this = this;
	
	_this.init = function(type){
		THREE.Object3D.call(_this);
		var obj = new Track.MtlModel(type);
		obj.scale.x = obj.scale.y = obj.scale.z = 0.001;
		_this.add(obj);
	};
	
	_this.init(type);
};
Track.Barricade.prototype = Object.create( THREE.Object3D.prototype );
Track.Barricade.prototype.constructor = Track.Barricade;


/**
 *	 模型
 */
Track.MtlModel = function(url, loading){
	var _this = this;
	var FONT_SIZE = 12,
		FONT_FAMILY = "Georgia";
	var NAME_Y = 15,
		TALK_Y = 20;
	
	_this.init = function(url){
		THREE.Object3D.call(_this);
		var mtlLoader = new THREE.MTLLoader();
		mtlLoader.setPath( url );
		mtlLoader.load( 'main.mtl', mtlLoad, mtlProgress, mtlError);
	};
	/**
	 *	mtl加载
	 */
	function mtlLoad (e) {
		e.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials( e );
		objLoader.setPath( url );
		objLoader.load( 'main.obj', objLoad, objProgress, objError);
		_this.dispatchEvent({ type: Track.Event.MTL_LOADED});
	}
	function mtlProgress (e) {
		if(!loading) return;
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
		_this.add(e);
		_this.dispatchEvent({ type: Track.Event.OBJ_LOADED});
		_this.dispatchEvent({ type: Track.Event.MODEL_LOADED});
	}
	function objProgress (e) {
		if(!loading) return;
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
Track.MtlModel.prototype = Object.create( THREE.Object3D.prototype );
Track.MtlModel.prototype.constructor = Track.MtlModel;



/**
 *	 模型
 */
Track.FbxModel = function(url){
	var _this = this;
	var _mixers = [];
	var FONT_SIZE = 12,
		FONT_FAMILY = "Georgia";
	var NAME_Y = 15,
		TALK_Y = 20;
	
	_this.init = function(url){
		THREE.Object3D.call(_this);
		
		var manager = new THREE.LoadingManager();
		manager.onProgress = function( item, loaded, total ) {
			console.log( item, loaded, total );
		};
		var loader = new THREE.FBXLoader( manager );
		loader.load( url, onload, onProgress, onError );
		
	};
	function onload (object) {
		object.traverse( onTraverse);
		_this.add( object );
		var e = { type: Track.Event.MODEL_LOADED};
		if ( _mixers.length > 0 ) {
			e.mixers = _mixers;
		}
		_this.dispatchEvent(e);
	}
	function onTraverse(child) {
		if ( child instanceof THREE.Mesh ) {
			// pass
		}
		if ( child instanceof THREE.SkinnedMesh ) {
			if ( child.geometry.animations !== undefined || child.geometry.morphAnimations !== undefined ) {
				child.mixer = new THREE.AnimationMixer( child );
				
				_mixers.push( child.mixer );
				var action = child.mixer.clipAction( child.geometry.animations[ 0 ] );
				action.play();
			}
		}
	}
	function onProgress (e) {
		if(!loading) return;
		var sprite = _this.getObjectByName('tips');
		if(sprite) _this.remove(sprite);
		var per = Math.floor(e.loaded / e.total * 1000) /10;
		var str = "材质载入中……" + per + "%";
		sprite = _this.getTextSprite(str);
		sprite.name = "tips";
		_this.add(sprite);
	}
	function onError (e) {
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
Track.FbxModel.prototype = Object.create( THREE.Object3D.prototype );
Track.FbxModel.prototype.constructor = Track.FbxModel;

