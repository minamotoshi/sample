/****************************************************************************
*	@Copyright(c)	2016,保定无双软件
*	@desc	体育场
*	@date	2016-7-19
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Stadium.class.js
*	@modify	null
******************************************************************************/
Stadium = {};
	
Stadium.main = function(canvas){
	var _this = this;
	var VER = "1.0.2";
	
	var __stats = null,//	状态
		__camera = null,	//摄像头
		__scene = null,	//场景
		__renderer = null,	//渲染器
		__room = null;	//运动空间
	var _persons = [];	//碰撞物体,这里是所有人物
	var _controls = null;//控制器
		
	var _queue = null,	//载体
		_files = [
			//声音
			{id:"alexsu", src:"sound/alexsu.mp3"},
			{id:"parkgan", src:"sound/parkgan.mp3"},
			//
			{id:"sound_pop", src:"images/sound_pop.png"},
			{id:"sound_point", src:"images/sound_point.png"},
			{id:"sound_volume", src:"images/sound_volume.png"},
			//图片
			{id:"stadium", src:"images/stadium.jpg"},
			{id:"person1", src:"images/person1.png"},
			{id:"person2", src:"images/person2.png"}
		];
	/**
	 *	预先加载
	 */
	this.preload = function(progress, complete){
		_queue = new createjs.LoadQueue(true);
		_queue.loadManifest(_files);
		createjs.Sound.registerSounds(_files);
		_queue.on("progress", function(e){if(progress)progress(e);}, this);//资源载入中
		_queue.on("complete", function(e){if(complete){complete(e)}else{_this.start()} }, this);//资源载入完毕
	};
	/**
	 *	初始化
	 */
	this.init = function(canvas){
		__camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
		//__camera.position.z = 50;
		
		__scene = new THREE.Scene();
		
		__room = new THREE.Object3D();//空间
		//Cylinder.__room.position.z = -100;
		
		__scene.add(__room);
		
		__renderer = new THREE.WebGLRenderer();
		//__renderer = new THREE.CanvasRenderer();
		__renderer.setPixelRatio( window.devicePixelRatio );
		__renderer.setSize( window.innerWidth, window.innerHeight );
		canvas.appendChild( __renderer.domElement );//渲染元素放入需要的位置
		//__stats = new Stats();
		//canvas.appendChild( Cylinder.__stats.dom );
		window.addEventListener( 'resize', onWindowResize, false );
		animate();
	};
	/**
	 *	开始
	 */
	this.start = function(){
		__room.add(getStadium());
		var person1 = getPerson(1);
		var person2 = getPerson(2);
		person1.position.x = 100;
		person1.position.z = 80;
		person2.position.x = 100;
		person2.position.z = -120;
		person1.lookAt(new THREE.Vector3( 0, 0, 0 ));
		person2.lookAt(new THREE.Vector3( 0, 0, 0 ));
		__room.add(person1, person2)
		_this.control();
	};
	/**
	 *	控制
	 */
	this.control = function(){
		__renderer.domElement.addEventListener("click", soundClick);
		__renderer.domElement.addEventListener("touchend", soundClick);
		if (Device.isIos() || Device.isAndroid()) {
			_controls = new THREE.DeviceOrientationControls( __camera);
		}else {
			_controls = new THREE.AntiMeshControls( __camera, __renderer.domElement );
		}
	};
	/**
	 *	获取运动场mesh
	 */
	function getStadium(){
		var texture = new THREE.Texture( _queue.getResult("stadium"));
		texture.needsUpdate = true;
		var geometry = new THREE.SphereGeometry( 500, 60, 40 );
		
		var material = new THREE.MeshBasicMaterial();
		//material.side = THREE.DoubleSide;	//双面
		material.side = THREE.BackSide;	//背面
		material.map = texture;	//图片
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.name = "stadium";
		return mesh;
	}
	/**
	 *	获取人物mesh
	 */
	function getPerson(num){
		if(isNaN(num)) num = Math.floor(1 + Math.random() * 2);
		var id = "person" + num;
		var texture = new THREE.Texture( _queue.getResult(id));
		texture.needsUpdate = true;
		var geometry = new THREE.PlaneGeometry( 64, 110 );
		
		var material = new THREE.MeshBasicMaterial();
		material.transparent = true;
		material.side = THREE.DoubleSide;	//双面
		material.map = texture;	//图片
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.name = id;
		
		var soundPop = getSoundPop();
		soundPop.position.x = 10;
		soundPop.position.z = 10;
		soundPop.soundID = num==1?"alexsu":"parkgan";
		mesh.add(soundPop);
		return mesh;
	}
	function getSoundPop(){
		var id = "sound_pop";
		var texture = new THREE.Texture( _queue.getResult(id));
		texture.needsUpdate = true;
		/*
		var geometry = new THREE.PlaneGeometry( 21.8, 6.7 );
		
		var material = new THREE.MeshBasicMaterial();
		material.transparent = true;
		material.side = THREE.DoubleSide;	//双面
		material.map = texture;	//图片
		
		var mesh = new THREE.Mesh();
		mesh.geometry = geometry;
		mesh.material = material;
		mesh.name = id;
		
		var point = new THREE.Mesh();
		point.geometry = geometry;
		point.material = new THREE.MeshBasicMaterial({map:new THREE.Texture( _queue.getResult("sound_point"))});
		point.position.y = -1;
		mesh.add(point);
		*/
		var sprite = new THREE.Sprite(new THREE.SpriteMaterial( { map: texture, color: 0xffffff, fog: true } ));
		sprite.scale.x = 20;
		sprite.scale.y = 10;
		_persons.push(sprite);
		return sprite;
	}
	function point3DToScreen2D(point3D){
		var screenX = 0;
		var screenY = 0;
		var inputX = point3D.x - __camera.position.x;
		var inputY = point3D.y - __camera.position.y;
		var inputZ = point3D.z - __camera.position.z;
		var aspectRatio = __renderer.domElement.width / __renderer.domElement.height;
		screenX = inputX / (-inputZ * Math.tan(__camera.fov/2));
		screenY = (inputY * aspectRatio) / (-inputZ * Math.tan(__camera.fov / 2));
		screenX = screenX * __renderer.domElement.width;
		screenY = __renderer.domElement.height * (1-screenY);
		return {x: screenX, y: screenY};
	}
	function createVector(x, y, z, camera, width, height) {
		var p = new THREE.Vector3(x, y, z);
		var vector = p.project(camera);
		vector.x = (vector.x + 1) / 2 * width;
		vector.y = -(vector.y - 1) / 2 * height;
		return vector;
		}
	/**
	 *	人物点击
	 */
	function soundClick(e){
		var x = e.clientX||e.changedTouches[0].clientX;
		var y = e.clientY||e.changedTouches[0].clientY;
		var sound = hitTest(x, y);
		if(sound){
			createjs.Sound.stop();
			createjs.Sound.play(sound.object.soundID);
			var obj = {};
			obj.x = sound.object.position.x;
			obj.y = sound.object.position.y;
			obj.z = sound.object.position.z;
			var pt = point3DToScreen2D(obj);
			console.log(x, y, pt, createVector(obj.x, obj.y,obj.z,__camera,__renderer.domElement.width,__renderer.domElement.height));
		}
	}
	/**
	 *	碰撞检测
	 */
	function hitTest(x, y){
		// update the mouse variable
		var mouse = { x: 0, y: 0 };
		mouse.x = ( x / __renderer.domElement.clientWidth ) * 2 - 1;
		mouse.y = - ( y / __renderer.domElement.clientHeight ) * 2 + 1;
		var raycaster = new THREE.Raycaster();
		raycaster.setFromCamera( mouse, __camera );
		var intersects = raycaster.intersectObjects( _persons, true);
		if ( intersects.length > 0 ){
			return intersects[0];
		}
		return false;
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
		//__stats.update();
		if(_controls)_controls.update();
		__renderer.render( __scene, __camera );
	}
	
	_this.init(canvas);
};

Stadium.main.prototype.constructor = Stadium.main;
