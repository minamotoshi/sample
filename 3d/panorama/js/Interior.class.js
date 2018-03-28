/****************************************************************************
*	@Copyright(c)	2016,保定无双软件
*	@desc	内景
*	@date	2016-7-19
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Interior.class.js
*	@modify	null
******************************************************************************/
Interior = {};
	
Interior.main = function(canvas){
	var _this = this;
	var VER = "1.1.0";
	
	var __stats = null,//	状态
		__camera = null,	//摄像头
		__scene = null,	//场景
		__renderer = null,	//渲染器
		__room = null;	//运动空间
	
	var _controls = null;//控制器
		
	var _queue = null,	//载体
		_files = [
			{id:"panorama", src:"images/xima.jpg"}
		];
	/**
	 *	预先加载
	 */
	this.preload = function(progress, complete){
		_queue = new createjs.LoadQueue(true);
		_queue.loadManifest(_files);
		_queue.on("progress", function(e){if(progress)progress(e);}, this);//资源载入中
		_queue.on("complete", function(e){if(complete){complete(e)}else{_this.start()} }, this);//资源载入完毕
	};
	/**
	 *	初始化
	 */
	this.init = function(canvas){
		__camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );//摄像头
		
		__scene = new THREE.Scene();//场景
		
		__room = new THREE.Object3D();//空间
		
		__scene.add(__room);
		
		__renderer = new THREE.WebGLRenderer();//渲染器
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
		__room.add(getPanorama());
		imageChange();
		_this.control();
	};
	/**
	 *	控制
	 */
	this.control = function(){
		if (Device.isIos() || Device.isAndroid()) {
			_controls = new THREE.DeviceOrientationControls( __camera);
		}else {
			_controls = new THREE.AntiMeshControls( __camera, __renderer.domElement );
		}
	};
	/**
	 *	图片转换
	 */
	function imageChange(){
		//拖放图片换图
		__renderer.domElement.addEventListener( 'dragover', function ( event ) {
			event.preventDefault();
			event.dataTransfer.dropEffect = 'copy';
		}, false );
		__renderer.domElement.addEventListener( 'dragenter', function ( event ) {
			__renderer.domElement.style.opacity = 0.5;
		}, false );
		__renderer.domElement.addEventListener( 'dragleave', function ( event ) {
			__renderer.domElement.style.opacity = 1;
		}, false );
		__renderer.domElement.addEventListener( 'drop', function ( event ) {
			event.preventDefault();
			var reader = new FileReader();
			reader.addEventListener( 'load', function ( event ) {
				var img = new Image();
				img.src = event.target.result
				setPanorama(img);
			}, false );
			reader.readAsDataURL( event.dataTransfer.files[ 0 ] );
			__renderer.domElement.style.opacity = 1;
		}, false );
		//手机摇晃换图
		if(window.DeviceMotionEvent){  
			var shake = 4000,
				last_update = 0,
				count = 0,
				x=y=z=last_x=last_y=last_z=0;
			window.addEventListener("devicemotion", function(e){
				var acceleration = e.accelerationIncludingGravity,  
					currTime = new Date().valueOf(),  
					diffTime = currTime - last_update;  
				if(diffTime > 100){
					last_update = currTime;
					x = acceleration.x;
					y = acceleration.y;
					z = acceleration.z;
					var speed = Math.abs(x+y+z-last_x-last_y-last_z)/diffTime*10000
					if(speed > shake){
						fileImageLoad();
					}
					last_x = x;
					last_y = y;
					last_z = z;
				}
			},false);
		}
		//点击触发
		window.document.getElementById("operate").addEventListener("click", function(e){
			fileImageLoad();
		},false);
		//document.onclick = function(){fileImageLoad()};
	};
	/**
	 *	载入图片
	 */
	function fileImageLoad(){
		var input = document.createElement("input");
		input.name = "browseImage";
		input.type = "file";
		input.accept = "image/*";
		input.addEventListener("change", function(e){
			var reader = new FileReader();
			reader.onload = function(e){
				var img =  new Image();
				img.src = e.target.result;
				setPanorama(img);
			}
			reader.readAsDataURL(e.target.files[0]);
		}, false);
		input.click();
	}
	/**
	 *	获取运动场mesh
	 */
	function getPanorama(){
		var id = "panorama";
		var texture = new THREE.Texture( _queue.getResult(id));
		texture.needsUpdate = true;
		var geometry = new THREE.SphereGeometry( 500, 60, 40 );
		
		var material = new THREE.MeshBasicMaterial();
		//material.side = THREE.DoubleSide;	//双面
		material.side = THREE.BackSide;	//背面
		material.map = texture;	//图片
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.name = id;
		return mesh;
	}
	/**
	 *	换图片
	 */
	function setPanorama(img){
		var mesh = __room.getObjectByName("panorama");
		var texture = new THREE.Texture( img );
		texture.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial();
		material.side = THREE.BackSide;	//背面
		material.map = texture;	//图片
		mesh.material = material;
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

Interior.main.prototype.constructor = Interior.main;
