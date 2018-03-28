/****************************************************************************
*	@Copyright(c)	2016,保定无双软件
*	@desc	赛车
*	@date	2016-8-25
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Rush.class.js
*	@modify	null
******************************************************************************/
var Rush = {};
Rush.VER = "1.0.3";
/**
 *	枚举，类型
 */
Rush.kType = {
	DRAG: 0,
	GRAVITY: 1
}
Rush.Event = {
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
Rush.Preload = {
	_queue : null,	//loder
	_images : [	//图片组
		//
		{id:"caoshuai", src:"caoshuai.jpg"},
		{id:"weisen", src:"weisen.jpg"},
		{id:"road", src:"road.jpg"},
		{id:"finish", src:"finish.png"},
		{id:"start", src:"start.jpg"},
		{id:"landscape", src:"landscape.png"},
		{id:"grass", src:"grass.png"},
		{id:"yufei", src:"yufei.jpg"}
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
		this._queue.loadManifest(this._fonts, false, "fonts/");
		this._queue.loadManifest(this._objs, false, "obj/");
		//this._queue.loadManifest(this._sounds, false, "sounds/");
		createjs.Sound.registerSounds(this._sounds);
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

Rush.main = function(container){
	var _this = this;
	
	var __stats = null,//	状态
		__camera = null,	//摄像头
		__scene = null,	//场景
		__effect = null,	//效果
		__renderer = null;	//渲染器
	var __car = null,	//汽车
		__bg = null;	//背景
		__cakes = null;	//月饼
	var _ready = null;
	var _score = 0;	//积分
	var _casters = [];	//碰撞物体
	var _controls = null;//控制器
	var _pos = 0,
		_motion = false,	//行动
		_distance = 2000;
		
	/**
	 *	初始化
	 */
	_this.init = function(container){
		__camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
		//__camera.position.z = 10;
		//__camera.rotation.x = -30;
		
		__scene = new THREE.Scene();	//场景
		__scene.fog = new THREE.Fog( 0xffffff, 0, 750 );
		//__scene.background = 0x0000ff;
		
		var light = new THREE.AmbientLight( 0xffffff ) 	//环境光
		__scene.add( light );
		
		__renderer = new THREE.WebGLRenderer();	//渲染器
		__renderer.antialias = true
		__renderer.setClearColor( 0xffffff );
		__renderer.setPixelRatio( window.devicePixelRatio );
		__renderer.setSize( window.innerWidth, window.innerHeight );
		container.appendChild( __renderer.domElement );//渲染元素放入需要的位置
		__effect = new THREE.StereoEffect(__renderer);
		__effect.setSize( window.innerWidth, window.innerHeight );
		
		_score = 0;	//分数
		
		__stats = new Stats();	//状态
		container.appendChild( __stats.dom );
		window.addEventListener( 'resize', onWindowResize, false );
	};
	/**
	 *	启动
	 */
	_this.launch = function(){
		__bg = new Rush.Background();
		__bg.createCake();
		__camera.position.y = 10;
		__camera.position.z = 10;
		__car = new Rush.Car();
		__car.addEventListener(Rush.Event.CAR_LOADED, function(e){ ready() });
		__scene.add(__bg, __car);
		_this.control();
		animate();
	};
	/**
	 *	开始
	 */
	_this.start = function(){
		_motion = true;
		_ready.stop();
		__car.startUp();
	}
	/**
	 *	结束
	 */
	_this.end = function(){
		_motion = false;
	}
	function ready(){
		var obj = {rotation:0};
		_ready = new TWEEN.Tween( obj )
			.to( {rotation:Math.PI*2}, 5000 )
			.onUpdate(function(e){
				__camera.position.x = 10 * Math.cos(obj.rotation);
				__camera.position.y = 2;
				__camera.position.z = 10 * Math.sin(obj.rotation);
				//__camera.up = new THREE.Vector3( 0, 0, 0 );
				__camera.lookAt(__car.position);
				//__camera.rotation.y = -obj.rotation;
				//__camera.rotation.x = 0;
				//__camera.rotation.z = 0;
			})
			.repeat(Infinity)
			.start();
		_this.dispatchEvent({ type: Rush.Event.ROAD_READY});
	}
	/**
	 *	控制
	 */
	_this.control = function(){
		document.addEventListener( 'keydown', onKeyDown, false );
		//document.addEventListener( 'keyup', onKeyUp, false );
		window.addEventListener( 'deviceorientation', onGravity, false);
	}
	function onKeyDown( event ) {
		switch ( event.keyCode ) {
			case 38: // up
			case 87: // w
				
				break;
			case 37: // left
			case 65: // a
				if(_motion)__car.left(1);
				break;
			case 40: // down
			case 83: // s
				
				break;
			case 39: // right
			case 68: // d
				if(_motion)__car.right(1);
				break;
			case 32: // space
				
				break;
		}
	}
	function onGravity(e){
		if(!_motion) return;
		var r = e.gamma;
		var v = r / 100;
		if(r > 0)__car.right(v);
		if(r < 0)__car.left(v);
	}
	/**
	 *	月饼吃掉
	 */
	function onCakeAte(e){
		var cake = e.target;
		_score++;
		_this.dispatchEvent({ type: Rush.Event.SCORE_ADD, data: _score});
	}
	/**
	 *	页面重置
	 */
	function onWindowResize() {
		__camera.aspect = window.innerWidth / window.innerHeight;
		__camera.updateProjectionMatrix();
		__renderer.setSize( window.innerWidth, window.innerHeight );
	}
	/**
	 *	动画
	 */
	function animate() {
		requestAnimationFrame( animate );
		if(__stats)__stats.update();
		//if(_controls)_controls.update();
		__car.move();
		if(_motion){
			__car.setCamera(__camera);
			if(__bg.checkFinish(__car)){
				_this.end();
			}
			var cake = __bg.checkCoke(__car);
			if(cake) cake.addEventListener(Rush.Event.CAKE_ATE, onCakeAte);
		}
		TWEEN.update();
		__renderer.render( __scene, __camera );
		//__effect.render(__scene, __camera);
	}
	_this.init(container);
};

Object.assign( Rush.main.prototype, THREE.EventDispatcher.prototype);
Rush.main.prototype.constructor = Rush.main;


/**
 *	背景
 */
Rush.Background = function(){
	var _this = this;
	var _caster = [];
	var WIDTH = 20,
		HEIGHT = 2000;
	var __finish = null,
		__cakes = null;
	/**
	 *	初始化
	 */
	_this.init = function(){
		THREE.Object3D.call(_this);
		var grass = createGrass();//草地
		grass.position.y = -1;
		grass.position.z = -HEIGHT /2;
		var road = createRoad();//道路
		road.position.z = -HEIGHT /2;
		var leftLandscape = createLandscape();
		leftLandscape.position.z = -HEIGHT /2;
		leftLandscape.position.x = 15;
		var rightLandscape = createLandscape();
		rightLandscape.position.z = -HEIGHT /2;
		rightLandscape.position.x = -15;
		createTree();//大树
		var start = createStart();//开始
		start.position.y = 0.01;
		__finish = new Rush.Finish();//结束
		__finish.position.z = -HEIGHT;
		__cakes = new THREE.Object3D();//月饼
		_this.add(grass, road, leftLandscape, rightLandscape, start, __finish, __cakes);
		//_this.add(start, __finish, __cakes);
	}
	/**
	 *	创建月饼
	 */
	_this.createCake = function(){
		for(var i = 0; i < 20; i++){
			var cake = new Rush.Cake();
			cake.position.z = -100 * (i + 0.5);
			cake.position.x = Math.random() * 16 - 8;
			__cakes.add(cake);
		}
	}
	/**
	 *	检测吃月饼
	 *	@param	car	汽车
	 */
	_this.checkCoke = function(car){
		for(var k in __cakes.children){
			var cake = __cakes.children[k];
			var dis = car.position.distanceTo(cake.position);
			if(dis < 3){
				cake.eat();
				return cake;
			}
		}
		return false;
	};
	/**
	 *	检测终点
	 *	@param	car	汽车
	 */
	_this.checkFinish = function(car){
		return __finish.position.z > car.position.z;
	};
	/**
	 *	创造草地
	 */
	function createGrass(){
		var img = Rush.Preload.getResult("grass");
		var texture = new THREE.Texture(img);
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( HEIGHT/2, HEIGHT/2 );
		texture.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial();
		material.side = THREE.FrontSide;	//双面
		material.map = texture;	//图片
		var geometry = new THREE.PlaneGeometry( HEIGHT*2, HEIGHT*2, 1, 1 );
		geometry.rotateX( -Math.PI / 2 );
		var mesh = new THREE.Mesh( geometry, material );
		return mesh;	
	}
	/**
	 *	创造公路
	 */
	function createRoad(){
		var img = Rush.Preload.getResult("road");
		var texture = new THREE.Texture(img);
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( WIDTH/10, HEIGHT/10 );
		texture.needsUpdate = true;
		var material = new THREE.MeshLambertMaterial();
		material.side = THREE.FrontSide;	//双面
		material.map = texture;	//图片
		var geometry = new THREE.PlaneGeometry( WIDTH, HEIGHT*2, 1, 1 );
		geometry.rotateX( -Math.PI / 2 );
		
		var mesh = new THREE.Mesh( geometry, material );
		return mesh;	
	}
	/**
	 *	创造风景
	 */
	function createLandscape(){
		var img = Rush.Preload.getResult("landscape");
		var texture = new THREE.Texture(img);
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( 30, 1 );
		texture.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial();
		material.transparent = true;
		material.side = THREE.DoubleSide;	//双面
		material.map = texture;	//图片
		var geometry = new THREE.PlaneGeometry( HEIGHT*2, WIDTH, 1, 1 );
		geometry.rotateY( -Math.PI / 2 );
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.y = WIDTH/2;
		return mesh;	
	}
	function createTree(){
		var loader = new THREE.OBJLoader();
		var material = new THREE.MeshBasicMaterial( { color: 0xb65209 } );
		loader.load( "obj/tree.obj", function ( object ) {
			object.children[0].material = material;
			object.position.x = 12;
			object.position.z = -40;
			object.scale.set( 10,10,10 );
			console.log(object);
			_this.add( object);
		} );
	}
	/**
	 *	创造开始
	 */
	function createStart(){
		var img = Rush.Preload.getResult("start");
		var texture = new THREE.Texture(img);
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( 1, 3 );
		texture.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial();
		material.map = texture;	//图片
		var geometry = new THREE.PlaneGeometry( WIDTH, WIDTH, 1, 1 );
		geometry.rotateX( -Math.PI / 2 );
		var mesh = new THREE.Mesh( geometry, material );
		return mesh;	
	}
	/**
	 *	创造终点
	 */
	function createFinish(){
		var obj = {
			font: new THREE.Font(Rush.Preload.getResult("helvetiker")),
			size: 5,
			height: 1,
			curveSegments: 1,
			bevelThickness: 1,
			bevelSize: 1,
			bevelEnabled: false,
			material: 0,
			extrudeMaterial: 1
		};
		var geometry = new THREE.TextGeometry( "FINISH", obj );
		//geometry.rotateX( Math.PI / 2 );	
		geometry.computeBoundingBox();
		geometry.computeVertexNormals();
		var material = new THREE.MeshBasicMaterial( {color: 0xff6600} );
		var mesh = new THREE.Mesh( geometry, material );
		var finish = new THREE.Object3D();
		finish.add(mesh);
		return finish;
	};
	
	_this.init();
};
Rush.Background.prototype = Object.create( THREE.Object3D.prototype );
Rush.Background.prototype.constructor = Rush.Background;

/**
 *	终点
 */
Rush.Finish = function(){
	var _this = this;
	
	var BANNER_WIDTH = 28,	//旗子尺寸
		BANNER_HEIGHT = 4,
		BANNER_Y = 6;
	var POLE_HEIGHT = 16,	//旗杆参数
		POLE_RADII = 0.2,
		POLE_SEGMENTS = 10,
		POLE_COLOR = 0xffffff,
		CHAPITER_RADII = 0.3,
		CHAPITER_SEGMENTS = 20;
	/**
	 *	初始化
	 */
	_this.init = function(){
		THREE.Object3D.call(_this);
		var banner = createBanner();
		banner.position.y = BANNER_Y;
		var poleLeft = createPole();
		poleLeft.position.x = -BANNER_WIDTH /2;
		var poleRight = createPole();
		poleRight.position.x = BANNER_WIDTH /2;
		_this.add(banner, poleLeft, poleRight);
	};
	/**
	 *	创建旗子
	 */
	function createBanner(){
		var img = Rush.Preload.getResult("finish");
		var texture = new THREE.Texture(img);
		texture.needsUpdate = true;
		//texture.repeat.set( 3, 3 );
		//texture.offset.set(-1,-1);
		var material = new THREE.MeshBasicMaterial();
		material.map = texture;
		material.side = THREE.DoubleSide;
		var materials = [
			//new THREE.MeshBasicMaterial({color:0xff0000}),
			material
		];
		var geometry = new THREE.PlaneGeometry( BANNER_WIDTH, BANNER_HEIGHT, 1, 1 );
		var mesh = new THREE.Mesh( geometry, new THREE.MultiMaterial(materials) );
		return mesh;
	}
	/**
	 *	创建旗杆
	 */
	function createPole(){
		var pole = new THREE.Mesh(new THREE.CylinderGeometry(POLE_RADII, POLE_RADII, POLE_HEIGHT, POLE_SEGMENTS,1), new THREE.MeshStandardMaterial({color:POLE_COLOR}));
		var chapiter = new THREE.Mesh(new THREE.SphereGeometry(CHAPITER_RADII, CHAPITER_SEGMENTS, CHAPITER_SEGMENTS), new THREE.MeshStandardMaterial({color:POLE_COLOR}));
		chapiter.position.y = POLE_HEIGHT/2;
		var obj = new THREE.Object3D();
		obj.add(pole, chapiter);
		return obj;
	}
	_this.init();
};
Rush.Finish.prototype = Object.create( THREE.Object3D.prototype );
Rush.Finish.prototype.constructor = Rush.Finish;	
/**
 *	汽车
 */
Rush.Car = function(){
	var _this = this;
	var LENGTH = 2,	//长宽高
		WIDTH = 2,
		HEIGHT = 2;
	var LEFT_LIMIT = -9,	//限制
		RIGHT_LIMIT = 8;
	var _cameraOffser = {
		x : 0,
		y : 10,
		z : 15
	};
	var _speed = {
		x : 0,
		y : 0,
		z : -1
	};
	var _motion = false;	//运动
	
	_this.init = function(){
		THREE.Object3D.call(_this);
		
		var loaderCTM = new THREE.CTMLoader();
		loaderCTM.loadParts( "obj/camaro/camaro.js", loaded, { useWorker: true } );
		
		var light = new THREE.PointLight( 0xffffff, 1 );
		light.position.set( -2, 5, -5 );
		light.position.multiplyScalar( 30 );
		_this.add( light );
		
		var light = new THREE.PointLight( 0xffffff, 0.75 );
		light.position.set( 12, 5, 5 );
		light.position.multiplyScalar( 30 );
		_this.add( light );
	}
	function loaded(geometries, materials){
		var position = new THREE.Vector3( -105, -78, -30 );
		var scale = new THREE.Vector3( 30, 30, 30 );

		for ( var i = 0; i < materials.length; i ++ ) {
			var m = materials[ i ];
			if ( m.name.indexOf( "Body" ) !== -1 ) {
				var mm = new THREE.MeshStandardMaterial();
				mm.color.setHex( 0xff0000 );
				mm.lightMap = m.map;
				//mm.envMap = textureCube;
				mm.metalness = 0.5;
				mm.roughness = 0.3;
				materials[ i ] = mm;
			} else if ( m.name.indexOf( "tire_car" ) !== -1 ) {
				var mm = new THREE.MeshStandardMaterial();
				mm.color.setHex( 0x000000 );
				mm.lightMap = m.map;
				mm.metalness = 0.1;
				mm.roughness = 0.9;
				materials[ i ] = mm;
			} else if ( m.name.indexOf( "mirror" ) !== -1 ) {
				var mm = new THREE.MeshStandardMaterial();
				mm.color.setHex( 0x808080 );
				mm.lightMap = m.map;
				//mm.envMap = textureCube;
				mm.metalness = 0.9;
				mm.roughness = 0.5;
				materials[ i ] = mm;
			} else if ( m.name.indexOf( "glass" ) !== -1 ) {
				var mm = new THREE.MeshStandardMaterial();
				mm.color.copy( m.color );
//						mm.lightMap = m.map;
				//mm.envMap = textureCube;
				mm.metalness = 1;
				mm.roughtness = 0.1;
				mm.opacity = m.opacity;
				mm.transparent = true;
				materials[ i ] = mm;
			} 
			materials[ i ].side = THREE.DoubleSide;
		}
		
		var container = new THREE.Object3D();
		container.scale.x = container.scale.y = container.scale.z = 0.05;
		container.position.y = 1.29;
		container.rotation.y = Math.PI;
		_this.add(container);
		for ( var i = 0; i < geometries.length -1; i ++ ) {
			var mesh = new THREE.Mesh( geometries[ i ], materials[ i ] );
			mesh.position.copy( position );
			mesh.scale.copy( scale )
			container.add( mesh );
		}
		_this.dispatchEvent({ type: Rush.Event.CAR_LOADED });
	}
	/**
	 *	启动
	 */
	_this.startUp = function(){
		_motion = true;
	};
	/**
	 *	是否运动
	 */
	_this.isMotion = function(){
		return _motion;
	};
	/**
	 *	移动
	 */
	_this.move = function(){
		if(!_motion) return;
		_this.translateZ(_speed.z);
	};
	/**
	 *	向左
	 */
	_this.left = function(v){
		v = -Math.abs(v);
		_this.translateX(v);
		if(_this.position.x < LEFT_LIMIT)_this.position.x = LEFT_LIMIT;
	};
	/**
	 *	向右
	 */
	_this.right = function(v){
		v = Math.abs(v);
		_this.translateX(v);
		if(_this.position.x > RIGHT_LIMIT)_this.position.x = RIGHT_LIMIT;
	};
	/**
	 *	移动
	 */
	_this.setCamera = function(camera){
		camera.position.x = 0;
		camera.position.y = _this.position.y + _cameraOffser.y;
		camera.position.z = _this.position.z + _cameraOffser.z;
		camera.lookAt(_this.position);
	};
	
	_this.init();
};
Rush.Car.prototype = Object.create( THREE.Object3D.prototype );
Rush.Car.prototype.constructor = Rush.Car;

/**
 *	月饼
 */
Rush.Cake = function(){
	var _this = this;
	var RADIUS = 2,
		HEIGHT = 1,
		SEGMENTS = 10;
	var _ate = false;
	
	_this.init = function(){
		THREE.Object3D.call(_this);
		_ate = false;
		var cake = createCake();
		cake.position.y = RADIUS;
		new TWEEN.Tween( cake.rotation )
			.to( {x:0, y:2 * Math.PI, z:0}, 2000 )
			.repeat(Infinity)
			.start();
		_this.add(cake);
	}
	/**
	 *	吃掉
	 */
	_this.eat = function(){
		if(_ate) return;
		_ate = true;
		new TWEEN.Tween( _this.position )
			.to( {y:6}, 100 )
			.easing( TWEEN.Easing.Quadratic.InOut )
			.onComplete(function(e){
				_this.parent.remove(_this);
				_this.dispatchEvent({ type: Rush.Event.CAKE_ATE });
			})
			.start();
	};
	/**
	 *	创造月饼
	 */
	function createCake(){
		var geometry = new THREE.CylinderBufferGeometry( RADIUS, RADIUS, HEIGHT,SEGMENTS);
		geometry.rotateX( - Math.PI / 2 );
		geometry.rotateZ( - Math.PI / 2 );	
		var materials = [
			new THREE.MeshBasicMaterial({color:0xff5500}),
			getMaterial("weisen"),
			getMaterial("caoshuai")
		];
		var mesh = new THREE.Mesh( geometry, new THREE.MultiMaterial(materials) );
		return mesh;	
	}
	/**
	 *	获取材质
	 */
	function getMaterial(id){
		var img = Rush.Preload.getResult(id);
		var texture = new THREE.Texture(img);
		texture.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial();
		material.map = texture;	//图片
		return material;
	}
	_this.init();
};
Rush.Cake.prototype = Object.create( THREE.Object3D.prototype );
Rush.Cake.prototype.constructor = Rush.Cake;