/**
 *	3d视频
 */
var PanoVideo = {
	VER: "1.0.1", //版本号

	__scene: null, //场景
	__camera: null, //摄像机

	_video: null, //视频
	__projector: null,

	_controls: null, //控制器
	__renderer: null, //渲染器

	_touchParam: {},
	_target: new THREE.Vector3(),
	_lon: 0,
	_lat: 0,
	_phi: 0,
	_theta: 0,
	/**
	 *	创建视频
	 */
	createVideo: function(url) {
		$("#loadingPop").hide();
		$("#loadingPop").width($(document).width());
		$("#loadingPop").height($(document).height());
		$("#controllor").width($(document).width());
		$("#controllor").height($(document).height());
		$("#messagePop").height($(document).height());
		var video = PanoVideo._video = document.createElement('video');
		video.width = 640;
		video.height = 360;
		//video.autoplay = true;
		video.loop = true;
		video.preload = "auto";
		video.src = url;
		video.addEventListener("loadstart", PanoVideo.videoCallback);
		video.addEventListener("progress", PanoVideo.videoCallback);
		video.addEventListener("suspend", function(e) {
			PanoVideo.videoCallback(e);

		});
		$("#controllor :button").one("click", function(e) {
			var controllType = $(this).attr('data-controll');
			if(controllType == 'touch'){
				PanoVideo.touchInit();//触摸
			} else if (controllType == 'mouse') { // 鼠标
				PanoVideo.mouseInit();//触摸
			} else{
				PanoVideo.gravityInit();//重力
			}
			PanoVideo._video.play();
			$("#controllor").hide();
			$("#loadingPop").show();
		});
		video.addEventListener("stalled", PanoVideo.videoCallback);
		video.addEventListener("waiting", PanoVideo.videoCallback);
		video.addEventListener("canplay", PanoVideo.videoCallback);
		video.addEventListener("canplaythrough", PanoVideo.videoCallback);
		video.addEventListener("abort", PanoVideo.videoCallback);
		video.addEventListener("error", function(e) {
			console.log(e);
			for (var k in e) {
				$('#messagePop').append(k + ":" + e[k] + "<br/>");
			}
		});
		video.addEventListener("ended", PanoVideo.videoCallback);
		video.addEventListener("playing", function(e) {
			PanoVideo.videoCallback(e);
			$("#loadingPop").hide()
		});

		video.addEventListener("durationchange", PanoVideo.videoCallback);
		video.addEventListener("emptied", PanoVideo.videoCallback);
		video.addEventListener("oadeddata", PanoVideo.videoCallback);
		video.addEventListener("loadedmetadata", PanoVideo.videoCallback);
		video.addEventListener("pause", PanoVideo.videoCallback);
		video.addEventListener("play", PanoVideo.videoCallback);
		video.addEventListener("ratechange", PanoVideo.videoCallback);
		video.addEventListener("readystatechange", PanoVideo.videoCallback);
		video.addEventListener("seeked", PanoVideo.videoCallback);
		video.addEventListener("seeking", function(e) {
			PanoVideo.videoCallback(e);
			$("#loadingPop").hide();
		});
		//video.addEventListener("timeupdate", PanoVideo.videoCallback);
		video.addEventListener("volumechange", PanoVideo.videoCallback);

	},
	
	
	inlinePlay: function() {
		makeVideoPlayableInline(PanoVideo._video);
	},
	/**
	 *	视频事件
	 */
	videoCallback: function(e) {
		console.log(e.type);
		// $('#messagePop').append(e.type + "<br/>");
	},
	/**
	 *	初始化
	 */
	init: function() {
		PanoVideo.__camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100); //初始化摄像机
		PanoVideo.__camera.target = PanoVideo._target = new THREE.Vector3(0, 0, 0);
		PanoVideo.__scene = new THREE.Scene(); //初始化场景

		var geometry = new THREE.SphereGeometry(500, 60, 40);
		geometry.scale(-1, 1, 1);
		// console.log(PanoVideo._video);
		var texture = new THREE.VideoTexture(PanoVideo._video);
		texture.minFilter = THREE.LinearFilter;
		var material = new THREE.MeshBasicMaterial({
			map: texture
		});
		var mesh = new THREE.Mesh(geometry, material);
		PanoVideo.__scene.add(mesh);

		PanoVideo.__renderer = new THREE.WebGLRenderer(); //初始化渲染器
		PanoVideo.__renderer.setPixelRatio(window.devicePixelRatio);
		PanoVideo.__renderer.setSize(window.innerWidth, window.innerHeight);
		var container = document.getElementById("container");
		container.appendChild(PanoVideo.__renderer.domElement); //渲染元素放入需要的位置
		//container.appendChild( PanoVideo._video);
		window.addEventListener('resize', PanoVideo.onWindowResize, false);
		PanoVideo.animate();
	},
	onWindowResize: function() {
		PanoVideo.__camera.aspect = window.innerWidth / window.innerHeight;
		PanoVideo.__camera.updateProjectionMatrix();
		PanoVideo.__renderer.setSize(window.innerWidth, window.innerHeight);
	},
	/**
	 *	触摸初始化
	 */
	touchInit: function() {
		document.addEventListener('touchstart', PanoVideo.onTouchStart, false);
		document.addEventListener('touchmove', PanoVideo.onTouchMove, false);
	},
	onTouchStart: function(e) {
		//e.preventDefault();
		var touch = e.touches[0];
		PanoVideo._touchParam.x = touch.screenX;
		PanoVideo._touchParam.y = touch.screenY;
	},
	onTouchMove: function(e) {
		//e.preventDefault();
		var touch = e.touches[0];
		PanoVideo._lon -= (touch.screenX - PanoVideo._touchParam.x) * 0.1;
		PanoVideo._lat += (touch.screenY - PanoVideo._touchParam.y) * 0.1;
		PanoVideo._touchParam.x = touch.screenX;
		PanoVideo._touchParam.y = touch.screenY;
	},
	mouseInit: function() {
		document.addEventListener('mousedown', this.onDocumentMouseDown, false);
		document.addEventListener('mousewheel', this.onDocumentMouseWheel, false);
	},
	onDocumentMouseDown: function(event) {
		event.preventDefault();
		document.addEventListener('mousemove', PanoVideo.onDocumentMouseMove, false);
		document.addEventListener('mouseup', PanoVideo.onDocumentMouseUp, false);
	},
	onDocumentMouseMove: function(event) {
		var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
		PanoVideo._lon -= movementX * 0.1;
		PanoVideo._lat += movementY * 0.1;
	},
	onDocumentMouseUp: function(event) {
		document.removeEventListener('mousemove', PanoVideo.onDocumentMouseMove);
		document.removeEventListener('mouseup', PanoVideo.onDocumentMouseUp);
	},
	onDocumentMouseWheel: function(event) {
		PanoVideo.__camera.fov -= event.wheelDeltaY * 0.05;
		if (PanoVideo.__camera.fov < 10) PanoVideo.__camera.fov = 10;
		if (PanoVideo.__camera.fov >99) PanoVideo.__camera.fov = 99;
		console.log(PanoVideo.__camera.fov)
		PanoVideo.__camera.updateProjectionMatrix();
	},
	/**
	 *	重力初始化
	 */
	gravityInit: function(){
		PanoVideo._controls = new THREE.CustomDeviceOrientation( PanoVideo.__camera );//重力感应
		document.addEventListener( 'touchstart', PanoVideo.onScaleStart, false );
		document.addEventListener( 'touchmove', PanoVideo.onScaleExe, false );
	},
	onScaleStart: function ( e ) {
		e.preventDefault();
		var x0 = e.touches[ 0 ].screenX;
		var y0 = e.touches[ 0 ].screenY;
		var x1 = e.touches[ 1 ].screenX;
		var y1 = e.touches[ 1 ].screenY;
		PanoVideo._scaleDistance =  Math.sqrt(Math.pow((y1 - y0), 2) +  Math.pow((x1 - x0), 2));
		PanoVideo._cameraFov = PanoVideo.__camera.fov;
	},
	onScaleExe: function( e ){
		e.preventDefault();
		var x0 = e.touches[ 0 ].screenX;
		var y0 = e.touches[ 0 ].screenY;
		var x1 = e.touches[ 1 ].screenX;
		var y1 = e.touches[ 1 ].screenY;
		var scale = PanoVideo._scaleDistance / Math.sqrt(Math.pow((y1 - y0), 2) +  Math.pow((x1 - x0), 2));
		PanoVideo.__camera.fov = scale * PanoVideo._cameraFov;
	},
	/**
	 *	界面尺寸改变
	 */
	onWindowResize: function() {
		PanoVideo.__camera.aspect = window.innerWidth / window.innerHeight;
		PanoVideo.__camera.updateProjectionMatrix();
		PanoVideo.__renderer.setSize(window.innerWidth, window.innerHeight);
	},
	/**
	 *	动画
	 */
	animate: function() {
		requestAnimationFrame(PanoVideo.animate);
		if (PanoVideo._controls) { //如果控制存在用重力，不存在用触摸
			PanoVideo._controls.update();
		} else {
			PanoVideo._lat = Math.max(-85, Math.min(85, PanoVideo._lat));
			PanoVideo._phi = THREE.Math.degToRad(90 - PanoVideo._lat);
			PanoVideo._theta = THREE.Math.degToRad(PanoVideo._lon);

			PanoVideo.__camera.target.x = 500 * Math.sin(PanoVideo._phi) * Math.cos(PanoVideo._theta);
			PanoVideo.__camera.target.y = 500 * Math.cos(PanoVideo._phi);
			PanoVideo.__camera.target.z = 500 * Math.sin(PanoVideo._phi) * Math.sin(PanoVideo._theta);

			PanoVideo.__camera.lookAt(PanoVideo.__camera.target);
		}
		PanoVideo.__renderer.render(PanoVideo.__scene, PanoVideo.__camera);
	}
};