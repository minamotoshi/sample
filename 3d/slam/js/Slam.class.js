/****************************************************************************
*	@Copyright(c)	2016,保定无双软件
*	@desc	篮球
*	@date	2016-9-18
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Slam.class.js
*	@modify	null
******************************************************************************/
var Slam = {};
Slam.VER = "1.1.0";
/**
 *	事件
 */
Slam.Event = {
	GAME_START:	"gameStart",
	GAME_OVER:	"gameOver",
	GAME_SCORE:	"gameScore",
	SCORE_ADD:	"scoreAdd"
}
/**
 *	预先加载
 */
Slam.Preload = {
	_queue : null,	//loder
	_images : [	//图片组
		//
		{id:"ball", src:"ball.jpg"},
		{id:"basketry", src:"basketry.jpg"},
		{id:"floor", src:"floor.jpg"}
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
		if(!this._queue) Slam.Preload.init();
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
Slam.main = function(container){
	var _this = this;
	
	var WIDTH = 0,
		HEIGHT = 0;
	var __camera = null,	//摄像头
		__cameraTop = null,	//摄像头顶部
		__cameraLateral = null,	//摄像头侧面
		__scene = null,	//场景
		__renderer = null,	//渲染器
		__person = null,	//人
		__guide = null,	//引导
		__ball = null,	//正在投掷的篮球
		__basketry = null;	//篮筐
	var CAMERA_TOP_POSITION = new THREE.Vector3(0, 50, 8);
	var CAMERA_LATERAL_POSITION = new THREE.Vector3(40, 30, 2.25);
	var _score = 0;	//  得分
	var _power = 50;	//力量
	var _clock = null,	//时钟
		_controls = null,	//控制器
		_physics;	//物理引擎
	var __substance = null;	//指针
	var _award = 0;	//奖品

		
	/**
	 *	初始化
	 */
	_this.init = function(container){
		//WIDTH = container.clientWidth;
		//HEIGHT = container.clientHeight;
		WIDTH = window.innerWidth;
		HEIGHT = window.innerHeight;
		__camera = new THREE.PerspectiveCamera( 70, WIDTH / HEIGHT, 1, 1000 );
		__cameraTop = new THREE.PerspectiveCamera( 70, WIDTH / HEIGHT, 1, 1000 );
		__cameraTop.clip = {x: WIDTH*2/3, y: HEIGHT*2/3, width: WIDTH/3, height: HEIGHT/3};
		var clip = {x: 0, y: HEIGHT*3/4, width: WIDTH *2/3, height: HEIGHT/4};
		__cameraLateral = new THREE.PerspectiveCamera( 70, clip.width / clip.height, 1, 1000 );
		__cameraLateral.clip = clip;
		//__camera = new THREE.OrthographicCamera( WIDTH / - 50, WIDTH / 50, HEIGHT / 50, HEIGHT / - 50, 1, 1000 );
		__scene = new THREE.Scene();	//场景
		
		var light = new THREE.AmbientLight( 0xffffff ) 	//环境光
		__scene.add( light );
		var light = new THREE.DirectionalLight( 0xffffff, 1 );
		light.position.set( -10, 40, 10 );
		light.castShadow = true;
		__scene.add( light );
		
		__renderer = new THREE.WebGLRenderer();	//渲染器
		__renderer.antialias = true;
		__renderer.autoClear = false;
		__renderer.setClearColor( 0xffffff );
		__renderer.setPixelRatio( window.devicePixelRatio );
		__renderer.setSize( WIDTH, HEIGHT );
		container.appendChild( __renderer.domElement );//渲染元素放入需要的位置
	};
	/**
	 *	启动
	 */
	_this.launch = function(){
		_clock = new THREE.Clock();
		__person = new Slam.Person();
		var stands = new Slam.Stands();
		__person.position.z = 80;
		//__person.position.z = 40;
		//__person.position.y = 30;
		
		//__camera.lookAt(stands.getBasketry().position);
		
		__guide = new Slam.Guide();
		__scene.add(__person, stands, __guide);
		_physics =  new Slam.Physics();
		__basketry = stands.getBasketry();
		_physics.addBody(stands.createFloorPhysics());
		_physics.addBody(stands.createBoardPhysics());
		_physics.addBody(stands.createBasketryPhysics());
		_physics.addBody(stands.createPillarPhysics());
		
		location();
		
		__cameraTop.position.copy(CAMERA_TOP_POSITION);
		__cameraTop.lookAt(__basketry.position);
		
		__cameraLateral.position.copy(CAMERA_LATERAL_POSITION);
		__cameraLateral.lookAt(__basketry.position);
		
		_this.control();
		animate();
	};
	/**
	 *	开始
	 */
	_this.start = function(){
		
	};
	/**
	 *	改变投篮位置
	 */
	_this.left = function(){
		__person.translateX(-1);
		location();
		
	};
	_this.right = function(){
		__person.translateX(1);
		location();
		
	};
	_this.front = function(){
		__person.translateZ(-1);
		location();
	};
	_this.back = function(){
		__person.translateZ(1);
		location();
	};
	function location() {
		__camera.position.copy(__person.getEye());
		_power = __person.getEye().distanceTo(__basketry.position) * 2/3;
		__camera.lookAt(__basketry.position);
		__camera.rotation.z = 0;
	}
	/**
	 *	控制
	 */
	_this.control = function(){
		__renderer.domElement.addEventListener("touchstart", onTouchStart, false);
		__renderer.domElement.addEventListener("touchmove", onTouchMove, false);
		__renderer.domElement.addEventListener("touchend", onTouchEnd, false);
		__renderer.domElement.addEventListener("mousedown", onMouseDown, false);
		__renderer.domElement.addEventListener("mouseup", onMouseUp, false);
		return;
		_controls = new THREE.OrbitControls( __camera, __renderer.domElement );
		_controls.enableDamping = true;
		_controls.dampingFactor = 0.25;
		_controls.enableZoom = false;
	};
	function onTouchStart(e) {
		e.preventDefault();
		var vec = rayIntersectPlane(e.touches[0].clientX, e.touches[0].clientY, __person.getHand().z);
		__guide.origin(vec);
		__guide.pos(vec);
	}
	function onTouchMove(e) {
		e.preventDefault();
		var vec = rayIntersectPlane(e.touches[0].clientX, e.touches[0].clientY, __person.getHand().z);
		__guide.pos(vec);
	}
	function onTouchEnd(e) {
		e.preventDefault();
		var rota = __guide.getRota();
		var ball = new Slam.Ball();
		ball.position.copy(__person.getHand());
		//ball.position.set(0,40,2.25);
		__scene.add(ball);
		ball.createPhysics();
		_physics.add(ball);
		
		//return;
		var r = _power;
		var theta = rota.theta;
		var phi = rota.phi;
		var x = r*Math.sin(theta)*Math.cos(phi);
		var y = -r*Math.sin(theta)*Math.sin(phi);
		var z = -r*Math.cos(theta);
		//console.log("theta=" + theta * 180 / Math.PI);
		//console.log("phi=" + phi * 180 / Math.PI);
		//console.log("x=" + x);
		//console.log("y=" + y);
		//console.log("z=" + z);
		ball.shoot(__basketry.position, new THREE.Vector3(y, x, z));
	}
	/**
	 *	鼠标
	 */
	function onMouseDown(e) {
		e.preventDefault();
		var vec = rayIntersectPlane(e.clientX, e.clientY, __person.getHand().z);
		__guide.origin(vec);
		__guide.pos(vec);
		__renderer.domElement.addEventListener("mousemove", onMouseMove, false);
	}
	function onMouseMove(e) {
		e.preventDefault();
		var vec = rayIntersectPlane(e.clientX, e.clientY, __person.getHand().z);
		__guide.pos(vec);
	}
	function onMouseUp(e) {
		e.preventDefault();
		__renderer.domElement.removeEventListener("mousemove", onMouseMove, false);
		var rota = __guide.getRota();
		var ball = new Slam.Ball();
		ball.position.copy(__person.getHand());
		__scene.add(ball);
		ball.createPhysics();
		_physics.add(ball);
		var r = _power;
		var theta = rota.theta;
		var phi = rota.phi;
		var x = r*Math.sin(theta)*Math.cos(phi);
		var y = -r*Math.sin(theta)*Math.sin(phi);
		var z = -r*Math.cos(theta);
		ball.shoot(__basketry.position, new THREE.Vector3(y, x, z));
	}
	/**
	 *	射线过面交点
	 */
	function rayIntersectPlane(x, y, w){
		var coords = {};
		coords.x = (x /WIDTH) * 2 - 1;
		coords.y = -(y /HEIGHT) * 2 + 1;
		
		var ray = new THREE.Ray();
		ray.origin.setFromMatrixPosition( __camera.matrixWorld );
		ray.direction.set( coords.x, coords.y, 0.5 ).unproject( __camera ).sub( ray.origin ).normalize();
		
		var plane = new THREE.Plane(new THREE.Vector3(0,0,-1), w);
		var vec = ray.intersectPlane(plane);
		return vec;
	}
	/**
	 *	动画
	 */
	function animate() {
		requestAnimationFrame( animate );
		var deltaTime = _clock.getDelta();
		if(_controls)_controls.update();
		if(_physics)_physics.update(deltaTime);
		var objs = _physics.getObjs();
		for(var k in objs){
			var obj = objs[k];
			var point = obj.shot();
			if(point == -1){
				__scene.remove(obj);
			}else if(point > 0){
				_score += point;
				var data = { score: point, total: _score};
				_this.dispatchEvent({type:Slam.Event.SCORE_ADD, data:data});
			}
		}
		
		//TWEEN.update();
		__renderer.clear();
		__renderer.setViewport(0,0, WIDTH, HEIGHT);
		__renderer.render( __scene, __camera );
		__renderer.setViewport(__cameraTop.clip.x, __cameraTop.clip.y, __cameraTop.clip.width, __cameraTop.clip.height);
		__renderer.render( __scene, __cameraTop );
		__renderer.setViewport(__cameraLateral.clip.x, __cameraLateral.clip.y, __cameraLateral.clip.width, __cameraLateral.clip.height);
		__renderer.render( __scene, __cameraLateral );
		
	}
	_this.init(container);
};

Object.assign( Slam.main.prototype, THREE.EventDispatcher.prototype);
Slam.main.prototype.constructor = Slam.main;

/**
 *	人
 */
Slam.Person = function(){
	var _this = this;
	var HEIGHT = 18,	//参数
		SEGMENTS = 20;
	
	_this.init = function(){
		THREE.Object3D.call(_this);
	};
	/**
	 *	获取眼睛位置
	 *	@param	vec	vector3
	 */
	_this.getEye = function(){
		_this.getWorldPosition(new THREE.Vector3(0,0,0));
		var vec = new THREE.Vector3(0,17,0);
		return _this.localToWorld(vec);
	};
	/**
	 *	获取手位置
	 *	@param	vec	vector3
	 */
	_this.getHand = function(){
		_this.getWorldPosition(new THREE.Vector3(0,0,0));
		var vec = new THREE.Vector3(0,15,-5);
		return _this.localToWorld(vec);
	};
	
	_this.init();
};
Slam.Person.prototype = Object.create( THREE.Object3D.prototype );
Slam.Person.prototype.constructor = Slam.Person;

/**
 *	篮球架
 */
Slam.Stands = function(){
	var _this = this;
	var FLOOR_WIDTH = 280,	//地板参数
		FLOOR_HEIGHT = 150,
		FLOOR_SEGMENTS = 1,
		FLOOR_STANDS = 120;
	var BOARD_WIDTH = 18,	//篮板参数
		BOARD_HEIGHT = 10.5,
		BOARD_LENGTH = 2;
	var BASKETRY_RADIUS = 2.25,	//篮筐参数
		BASKETRY_TORUS = 0.2,
		BASKETRY_SEGMENTS = 20;
	var PILLAR_RADIUS = 1,	//柱子参数
		PILLAR_HEIGHT = 30.5,
		PILLAR_SEGMENTS = 20;
		
	var __floor = null,	//地板
		__board = null,	//篮板
		__basketry = null,	//篮筐
		__pillar = null;	//柱子
	
	_this.init = function(){
		THREE.Object3D.call(_this);
		__floor = createFloor();
		__board = createBoard();
		__board.position.y = PILLAR_HEIGHT + BOARD_HEIGHT/2;
		__basketry = createBasketry();
		__basketry.position.y = __board.position.y - BOARD_HEIGHT * 1/3;
		__basketry.position.z = BASKETRY_RADIUS + BOARD_LENGTH;
		__pillar = createPillar();
		__pillar.position.y = PILLAR_HEIGHT/2;
		_this.add(__floor, __pillar, __board, __basketry);
	};
	/**
	 *	获取地板
	 */
	function createFloor(){
		var img = Slam.Preload.getResult("floor");
		var texture = new THREE.Texture(img);
		texture.needsUpdate = true;
		var material = new THREE.MeshStandardMaterial();
		material.map = texture;
		var geometry = new THREE.PlaneGeometry(FLOOR_WIDTH, FLOOR_HEIGHT, FLOOR_SEGMENTS, FLOOR_SEGMENTS);
		geometry.rotateX(-Math.PI/2);
		geometry.rotateY(Math.PI/2);
		geometry.translate(0, 0, FLOOR_STANDS);
		var mesh = new THREE.Mesh(geometry, material );
		return mesh;
	}
	/**
	 *	获取篮板
	 */
	function createBoard(){
		var img = Slam.Preload.getResult("basketry");
		var texture = new THREE.Texture(img);
		texture.needsUpdate = true;
		var face = new THREE.MeshStandardMaterial();
		face.needsUpdate = true;
		face.map = texture;
		var side = new THREE.MeshStandardMaterial({color:0xaaaaaa});
		var materials = [
			side,
			side,
			side,
			side,
			face,
			side
		];
		var geometry = new THREE.BoxGeometry(BOARD_WIDTH, BOARD_HEIGHT, BOARD_LENGTH);
		var mesh = new THREE.Mesh(geometry, new THREE.MultiMaterial(materials) );
		return mesh;
	}
	/**
	 *	创造篮筐
	 */
	function createBasketry() {
		var material = new THREE.MeshStandardMaterial({color:0xff6600});
		var geometry = new THREE.TorusGeometry(BASKETRY_RADIUS, BASKETRY_TORUS, BASKETRY_SEGMENTS, BASKETRY_SEGMENTS);
		geometry.rotateX(Math.PI/2);
		var mesh = new THREE.Mesh(geometry, material );
		return mesh;
	}
	/**
	 *	创造柱子
	 */
	function createPillar() {
		var material = new THREE.MeshStandardMaterial({color:0xeeeeee});
		var geometry = new THREE.CylinderGeometry(PILLAR_RADIUS, PILLAR_RADIUS, PILLAR_HEIGHT, PILLAR_SEGMENTS);
		var mesh = new THREE.Mesh(geometry, material );
		return mesh;
	}
	/**
	 *	创造物理
	 */
	_this.createFloorPhysics = function(){
		//var shape = new Ammo.btBoxShape( new Ammo.btVector3( FLOOR_WIDTH * 0.5, 0.5, FLOOR_HEIGHT * 0.5 ) );
		var shape = new Ammo.btStaticPlaneShape( new Ammo.btVector3( 0, 1, 0 ), 0);
		shape.setMargin( 0.05 );
		var mass = 0;
		var localInertia = new Ammo.btVector3( 0, 0, 0 );
		shape.calculateLocalInertia( mass, localInertia );
		var transform = new Ammo.btTransform();
		transform.setIdentity();
		var pos = __floor.position;
		transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
		var motionState = new Ammo.btDefaultMotionState( transform );
		var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
		rbInfo.set_m_restitution(0.7);
		var body = new Ammo.btRigidBody( rbInfo );
		__floor.userData.physicsBody = body;
		return body;
	};
	_this.createBoardPhysics = function(){
		var shape = new Ammo.btBoxShape( new Ammo.btVector3( BOARD_WIDTH * 0.5, BOARD_HEIGHT * 0.5, BOARD_LENGTH * 0.5 ) );
		shape.setMargin( 0.05 );
		var mass = 0;
		var localInertia = new Ammo.btVector3( 0, 0, 0 );
		shape.calculateLocalInertia( mass, localInertia );
		var transform = new Ammo.btTransform();
		transform.setIdentity();
		var pos = __board.position;
		transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
		var motionState = new Ammo.btDefaultMotionState( transform );
		var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
		rbInfo.set_m_restitution(0.4);
		var body = new Ammo.btRigidBody( rbInfo );
		__board.userData.physicsBody = body;
		return body;
	};
	_this.createBasketryPhysics = function(){
		var shape = new Ammo.btCompoundShape();
		var len = 10;
		for(var i = 0;i < len; i++){
			var transform = new Ammo.btTransform();
			var a = Math.PI * 2 * (i/len);
			//transform.setRotation(0,Math.PI/2- a,Math.PI/2,1);
			transform.setOrigin(new Ammo.btVector3( Math.cos(a) * BASKETRY_RADIUS, 0,Math.sin(a) * BASKETRY_RADIUS ));
			//var s = new Ammo.btCylinderShape( new Ammo.btVector3( BASKETRY_TORUS, BASKETRY_RADIUS, BASKETRY_TORUS ) );
			var s = new Ammo.btSphereShape(BASKETRY_TORUS);
			shape.addChildShape(transform, s);
		}
		shape.setMargin( 0.05 );
		var mass = 0;
		var localInertia = new Ammo.btVector3( 0, 0, 0 );
		shape.calculateLocalInertia( mass, localInertia );
		var transform = new Ammo.btTransform();
		transform.setIdentity();
		var pos = __basketry.position;
		transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
		var motionState = new Ammo.btDefaultMotionState( transform );
		var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
		var body = new Ammo.btRigidBody( rbInfo );
		__basketry.userData.physicsBody = body;
		return body;
	};
	_this.createPillarPhysics = function(){
		var shape = new Ammo.btCylinderShape( new Ammo.btVector3( PILLAR_RADIUS, PILLAR_HEIGHT * 0.5, PILLAR_RADIUS ) );
		shape.setMargin( 0.05 );
		var mass = 0;
		var localInertia = new Ammo.btVector3( 0, 0, 0 );
		shape.calculateLocalInertia( mass, localInertia );
		var transform = new Ammo.btTransform();
		transform.setIdentity();
		var pos = __pillar.position;
		transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
		var motionState = new Ammo.btDefaultMotionState( transform );
		var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
		rbInfo.set_m_restitution(0.2);
		var body = new Ammo.btRigidBody( rbInfo );
		__pillar.userData.physicsBody = body;
		return body;
	};
	/**
	 *	获取地板
	 */
	_this.getFloor = function(){
		return __floor;
	};
	/**
	 *	获取篮板
	 */
	_this.getBoard = function(){
		return __board;
	};
	/**
	 *	获取篮筐
	 */
	_this.getBasketry = function(){
		return __basketry;
	};
	/**
	 *	获取柱子
	 */
	_this.getPillar = function(){
		return __pillar;
	};
	
	_this.init();
};
Slam.Stands.prototype = Object.create( THREE.Object3D.prototype );
Slam.Stands.prototype.constructor = Slam.Stands;	

/**
 *	篮球
 */
Slam.Ball = function(){
	var _this = this;
	var RADIUS = 1.2,	//参数
		SEGMENTS = 20;
	var _expire = 30 * 1000;	//过期时间
	var THREE_POINT_LINE = 62.5;	//三分线
	var _point = 2;	//分数
	var _basketry = new THREE.Vector3();	//篮筐位置
	var kStatus = {
		INVALID : -1,	//失效
		NORMAL : 0,	//普通
		SHOT :1	//进球
	};
	var _status = kStatus.NORMAL;	//状态
	
	
	_this.init = function(){
		THREE.Object3D.call(_this);
		var ball = createBall();
		_this.add(ball);
		_expire += new Date().getTime();
	};
	/**
	 *	创造篮球
	 */
	function createBall(){
		var img = Slam.Preload.getResult("ball");
		var texture = new THREE.Texture(img);
		texture.needsUpdate = true;
		var material = new THREE.MeshStandardMaterial();
		material.map = texture;
		var geometry = new THREE.SphereGeometry(RADIUS, SEGMENTS, SEGMENTS);
		var mesh = new THREE.Mesh(geometry, material );
		return mesh;
	}
	/**
	 *	创造物理
	 */
	_this.createPhysics = function(){
		var shape = new Ammo.btSphereShape( RADIUS );
		shape.setMargin( 0.05 );
		var mass = 50;
		var localInertia = new Ammo.btVector3( 0, 0, 0 );
		shape.calculateLocalInertia( mass, localInertia );
		var transform = new Ammo.btTransform();
		transform.setIdentity();
		var pos = _this.position;
		transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
		var motionState = new Ammo.btDefaultMotionState( transform );
		var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
		rbInfo.set_m_restitution(1);
		
		var body = new Ammo.btRigidBody( rbInfo );
		_this.userData.physicsBody = body;
		return body;
	};
	/**
	 *	投篮
	 *	@param	basketry	vector3	篮板位置
	 *	@param	velocity	vector3	初始速度
	 */
	_this.shoot = function(basketry, velocity){
		_basketry = basketry;
		var vec = new THREE.Vector3(basketry.x, _this.y, basketry.z);
		if(_this.position.distanceTo(vec) > THREE_POINT_LINE){
			_point = 3;	//三分球判断
		}else{
			_point = 2;
		}
		_this.userData.physicsBody.setLinearVelocity( new Ammo.btVector3( velocity.x, velocity.y, velocity.z ) );
	};
	/**
	 *	进球
	 *	@return	得分
	 */
	_this.shot = function(){
		if(new Date().getTime() > _expire){
			return -1;
		}
		if(_status == kStatus.NORMAL && _this.position.distanceTo(_basketry) < 1){
			_status = kStatus.SHOT;
		}else if(_status == kStatus.SHOT && _basketry.y - _this.position.y > RADIUS){
		//}else if(_status == kStatus.SHOT){
			_status = kStatus.INVALID;
			return _point;
		}
		return 0;
	};
	
	_this.init();
};
Slam.Ball.prototype = Object.create( THREE.Object3D.prototype );
Slam.Ball.prototype.constructor = Slam.Ball;


/**
 *	引导
 */
Slam.Guide2 = function(){
	var _this = this;
	var RADIUS = 0.3,	//参数
		HEIGHT = 1,
		SEGMENTS = 20;
	var _pos = new THREE.Vector3();
	
	_this.init = function(){
		THREE.Mesh.call(_this);
		var material = new THREE.MeshStandardMaterial({ color: 0xff0000});
		material.side = THREE.DoubleSide;
		_this.material = material;
		//_this.material = new THREE.LineBasicMaterial( { color: 0xff0000, linewidth: 100 } );
		//_this.geometry = new THREE.ConeGeometry(RADIUS, HEIGHT, SEGMENTS, SEGMENTS);
		//_this.geometry.rotateX(-Math.PI/2);
	};
	_this.show = function(){
		_this.visible = true;
	};
	_this.hide = function(){
		_this.visible = false;
	};
	/**
	 *	拉伸
	 *	@param	vec	拉伸的坐标
	 */
	_this.stretch = function(vec){
		_pos = _this.worldToLocal(vec);
		//var d = _pos.distanceTo(new THREE.Vector3(0,0,0));
		var geometry = new THREE.Geometry();
		var v1 = _pos.clone();
		v1.x += RADIUS;
		var v2 = _pos.clone();
		v2.x -= RADIUS;
		var v3 = _pos.clone();
		v3.y += RADIUS;
		var v4 = _pos.clone();
		v4.y -= RADIUS;
		geometry.vertices.push(
			new THREE.Vector3( 0, 0, 0 ),
			v1,
			v2,
			v3,
			v4
		);
		var normal = new THREE.Vector3( 0, 1, 0 );
		var color = new THREE.Color( 0xffaa00 );
		geometry.faces.push(
			new THREE.Face3( 0, 1, 3, normal, color, 0),
			new THREE.Face3( 0, 1, 4, normal, color, 0 ),
			new THREE.Face3( 0, 2, 3, normal, color, 0 ),
			new THREE.Face3( 0, 2, 4, normal, color, 0 ),
			new THREE.Face3( 1, 3, 4, normal, color, 0 ),
			new THREE.Face3( 2, 3, 4, normal, color, 0 )
		);
		//var geometry = new THREE.ConeGeometry(RADIUS, d, SEGMENTS, SEGMENTS);
		//geometry.translate(v.x/2, v.y/2, v.z/2);
		//geometry.lookAt(new THREE.Vector3(0,0,0));
		_this.geometry = geometry;
	}
	_this.getPos = function(){
		return _pos;
	};
	
	_this.init();
};
//Slam.Guide.prototype = Object.create( THREE.Mesh.prototype );
//Slam.Guide.prototype.constructor = Slam.Guide;

/**
 *	引导
 */
Slam.Guide = function(){
	var _this = this;
	var RADIUS = 0.1,	//参数
		HEIGHT = 1,
		SEGMENTS = 10;
	var _origin = new THREE.Vector3(),	//原位置
		_pos = new THREE.Vector3(),	//最终位置
		_rota = {};
	
	_this.init = function(){
		THREE.Mesh.call(_this);
		var material = new THREE.MeshStandardMaterial({ color: 0xff0000});
		_this.material = material;
		_this.geometry = new THREE.ConeGeometry(RADIUS, HEIGHT, SEGMENTS, SEGMENTS);
		_this.geometry.rotateX(-Math.PI/2);
		_this.geometry.translate(0,0, -HEIGHT/2);
	};
	/**
	 *	初始位置
	 *	@param	vec	坐标
	 */
	_this.origin = function(vec){
		_origin = vec;
	};
	/**
	 *	移动位置
	 *	@param	vec	坐标
	 */
	_this.pos = function(vec){
		_pos = vec;
		_this.position.copy(_pos);
		var x = _pos.x - _origin.x;
		var y = _pos.y - _origin.y;
		if(x >= HEIGHT) x = HEIGHT;
		if(y >= HEIGHT) y = HEIGHT;
		var phi = Math.asin(x/HEIGHT);
		var theta = -Math.asin(y/HEIGHT);
		if(isNaN(phi)) phi = -Math.PI/2;
		if(isNaN(theta)) theta = Math.PI/2;
		_this.rotation.set(theta, phi, 0);
		_rota.theta = theta;
		_rota.phi = phi;
		
	};
	_this.getRota = function(){
		return _rota;
	};
	
	_this.init();
};
Slam.Guide.prototype = Object.create( THREE.Mesh.prototype );
Slam.Guide.prototype.constructor = Slam.Guide;

/**
 *	物理世界
 */
Slam.Physics = function(){
	var _this = this;
	
	var _world = null;	//物理世界
	
	var _margin = 0.05;
	var _transformAux1 = null;
	var _objs = [];
	var GRAVITY = -20;
	
	_this.init = function(){
		THREE.Object3D.call(_this);
		_transformAux1 = new Ammo.btTransform();
		var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
		var dispatcher = new Ammo.btCollisionDispatcher( collisionConfiguration );
		var broadphase = new Ammo.btDbvtBroadphase();
		var solver = new Ammo.btSequentialImpulseConstraintSolver();
		_world = new Ammo.btDiscreteDynamicsWorld( dispatcher, broadphase, solver, collisionConfiguration );
		_world.setGravity( new Ammo.btVector3( 0, GRAVITY, 0 ) );
	};
	/**
	 *	创建物理物体
	 *	@param	object	物体
	 *	@param	physicsShape	物理形状
	 *	@param	mass	冲量
	 *	@param	pos	方位
	 *	@param	quat	四元数
	 *	@param	vel	数值
	 *	@param	angVel	角度
	 *	@return	物体
	 */
	_this.createRigidBody = function( object, physicsShape, mass, pos, quat, vel, angVel ) {
		if ( pos ) {
		    object.position.copy( pos );
		}else {
		    pos = object.position;
		}
		if ( quat ) {
		    object.quaternion.copy( quat );
		}else {
		    quat = object.quaternion;
		}
		var transform = new Ammo.btTransform();
		transform.setIdentity();
		transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
		transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
		var motionState = new Ammo.btDefaultMotionState( transform );
		var localInertia = new Ammo.btVector3( 0, 0, 0 );
		physicsShape.calculateLocalInertia( mass, localInertia );
		var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, physicsShape, localInertia );
		var body = new Ammo.btRigidBody( rbInfo );
		body.setFriction( 0.5 );
		if ( vel ) {
		    body.setLinearVelocity( new Ammo.btVector3( vel.x, vel.y, vel.z ) );
		}
		if ( angVel ) {
		    body.setAngularVelocity( new Ammo.btVector3( angVel.x, angVel.y, angVel.z ) );
		}
		object.userData.physicsBody = body;
		object.userData.collided = false;
		if ( mass > 0 ) {
			body.setActivationState( 4 );
		}
		physicsWorld.addRigidBody( body );
		return body;
	};
	/**
	 *	添加物体
	 *	@param	obj	物体
	 */
	_this.add = function(obj){
		_world.addRigidBody( obj.userData.physicsBody );
		_objs.push(obj);
	};
	/**
	 *	添加身体
	 *	@param	body	物理体
	 */
	_this.addBody = function(body){
		_world.addRigidBody( body );
	};
	_this.getObjs = function(){
		return _objs;
	};
	_this.update = function(deltaTime){
		_world.stepSimulation( deltaTime, 10 );
		
		for ( var i in _objs) {
			var objThree = _objs[ i ];
			var objPhys = objThree.userData.physicsBody;
			var ms = objPhys.getMotionState();
			if ( ms ) {
				ms.getWorldTransform( _transformAux1 );
				var p = _transformAux1.getOrigin();
				var q = _transformAux1.getRotation();
				objThree.position.set( p.x(), p.y(), p.z() );
				objThree.quaternion.set( q.x(), q.y(), q.z(), q.w() );
			}
		}
	};
	_this.init();
};
Slam.Physics.prototype = Object.create( THREE.Object3D.prototype );
Slam.Physics.prototype.constructor = Slam.Physics;	

