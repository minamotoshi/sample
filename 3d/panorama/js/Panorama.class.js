/**
 *	全景
 */
var Panorama = {
	VER:	"1.2.0",//版本号
	
	__scene:	null,//场景
	__camera:	null,//摄像机
	__cube:	null,//立方体
	_side:	null,//六个面
	
	_controls:	null,//控制器
	__renderer:	null,//渲染器
	
	_mode:	null,//模式
	_render:	null,//渲染方式
	
	_scaleDistance:	0,
	_cameraFov:	0,
	
	_touchParam:	{},
	_target:	new THREE.Vector3(),
	_lon:	90,
	_lat:	0,
	_phi:	0,
	_theta:	0,
	
	CUBE_RADII:	512,//方盒半径
	ADDTION_RADII:	400,//附加半径
	
	_targetList: [],
	
	/**
	 *	初始化
	 *	@param	mode	模式，默认触摸，gravity重力
	 *	@param	render	渲染器，默认触摸，css3，canvas，webgl
	 */
	init : function(mode, render){
		Panorama._mode = mode;
		Panorama._render = render;
		Panorama._sides = {
			right: {
				position: [ -Panorama.CUBE_RADII, 0, 0 ],
				rotation: [ 0, Math.PI / 2, 0 ]
			},
			left: {
				position: [ Panorama.CUBE_RADII, 0, 0 ],
				rotation: [ 0, -Math.PI / 2, 0 ]
			},
			top: {
				position: [ 0,  Panorama.CUBE_RADII, 0 ],
				rotation: [ Math.PI / 2, 0, Math.PI ]
			},
			bottom: {
				position: [ 0, -Panorama.CUBE_RADII, 0 ],
				rotation: [ - Math.PI / 2, 0, Math.PI ]
			},
			back: {
				position: [ 0, 0,  Panorama.CUBE_RADII ],
				rotation: [ 0, Math.PI, 0 ]
			},
			front: {
				position: [ 0, 0, -Panorama.CUBE_RADII ],
				rotation: [ 0, 0, 0 ]
			}
		};
		Panorama.__camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );//初始化摄像机
		Panorama.__scene = new THREE.Scene();//初始化场景
		Panorama.__cube = new THREE.Object3D();//初始化方盒，我们的视角在方盒内部，方盒就好比是背景
		Panorama.__scene.add( Panorama.__cube );
		if(render == "css3" || render == null) Panorama.__renderer = new THREE.CSS3DRenderer();//初始化渲染器
		else if(render == "canvas") Panorama.__renderer = new THREE.CanvasRenderer();//初始化渲染器
		else if(render == "webgl") Panorama.__renderer = new THREE.WebGLRenderer();//初始化渲染器
		Panorama.__renderer.setSize( window.innerWidth, window.innerHeight );
		var container = document.getElementById("container");
		container.appendChild( Panorama.__renderer.domElement );//渲染元素放入需要的位置
		window.addEventListener( 'resize', Panorama.onWindowResize, false );
		if(mode == "gravity" || mode == 1){
			Panorama.gravityInit();//重力
		}else{
			Panorama.touchInit();//触摸
		}
		Panorama.animate();//动画
	},
	/**
	 *	设置方盒
	 */
	setCube: function(list){
		if(Panorama._render == "css3"){
			var len = list.length;
			for(var i = 0;i < len; i++){
				var img = list[i].getElementsByTagName("img")[0];
				//var obj = new THREE.CSS3DObject(img);
				var obj = new THREE.CSS3DObject(list[i]);
				list[i].style.width = Panorama.CUBE_RADII * 2 + 2 + "px";
				list[i].style.height = Panorama.CUBE_RADII * 2 + 2 + "px";
				var key = list[i].getAttribute("pos");//根据pos决定方盒的上下左右前后
				obj.position.fromArray(Panorama._sides[key].position);
				obj.rotation.fromArray(Panorama._sides[key].rotation);
				Panorama.__cube.add(obj);
			}
		}else{
			var materials = [
				Panorama.loadTexture(list[0].getElementsByTagName("img")[0].src), // right
				Panorama.loadTexture(list[1].getElementsByTagName("img")[0].src), // left
				Panorama.loadTexture(list[2].getElementsByTagName("img")[0].src), // top
				Panorama.loadTexture(list[3].getElementsByTagName("img")[0].src), // bottom
				Panorama.loadTexture(list[4].getElementsByTagName("img")[0].src), // back
				Panorama.loadTexture(list[5].getElementsByTagName("img")[0].src) // front
			];
			var mesh = new THREE.Mesh(new THREE.BoxGeometry(300, 300, 300, 7, 7, 7), new THREE.MeshFaceMaterial(materials));
			mesh.scale.x = -1;
			Panorama.__cube.add(mesh);
		}
	},
	loadTexture: function(path) {
		var texture = new THREE.Texture(this.texture_placeholder);
		var material = new THREE.MeshBasicMaterial({
			map: texture,
			overdraw: 0.5
		});
		var image = new Image();
		image.onload = function() {

			texture.image = this;
			texture.needsUpdate = true;

		};
		image.src = path;
		return material;
	},
	/**
	 *	设置附加
	 */
	addElement: function(list){
		var len = list.length;
		for(var i = 0;i < len; i++){
			var phi = list[i].getAttribute("sphere_phi");
			phi = 90 - phi;
			phi = phi * Math.PI / 180;
			var theta = list[i].getAttribute("sphere_theta");
			theta = 90 - theta;//球坐标是从顶端算角度，我们是按照地球的纬度
			theta = theta * Math.PI / 180;
			//var r = (i / len) * 2 * Math.PI;
			//r = Math.PI - r;//从里到外看，所以需要正好相反的弧度
			//phi = Math.PI - phi;
			var obj = new THREE.CSS3DObject(list[i]);
			//var obj = new THREE.CSS3DSprite(list[i]);
			//球体坐标系的xyz对应3d建模的为zxy
			//var x = Panorama.ADDTION_RADII * Math.sin(theta) * Math.cos(phi);
			//var y = Panorama.ADDTION_RADII * Math.sin(theta) * Math.sin(phi);
			//var z = Panorama.ADDTION_RADII * Math.cos(theta);
			var z = Panorama.ADDTION_RADII * Math.cos(phi) * Math.sin(theta);
			var x = Panorama.ADDTION_RADII * Math.sin(phi) * Math.sin(theta);
			var y = Panorama.ADDTION_RADII * Math.cos(theta);
			obj.position.fromArray([ x, y, z ]);
			phi = Math.PI + phi;//转成正常角度，否则还是从外到里看的
			obj.rotation.fromArray([ 0, phi, 0 ]);
			//obj.lookAt(Panorama._target);
			Panorama.__cube.add(obj);
			Panorama._targetList.push(obj);
		}
	},
	/**
	 *	碰撞检测
	 */
	hitTest: function(x, y, width, height){
		// update the mouse variable
		var mouse = { x: 0, y: 0 };
		mouse.x = ( x / width ) * 2 - 1;
		mouse.y = - ( y / height ) * 2 + 1;
		var raycaster = new THREE.Raycaster();
		raycaster.setFromCamera( mouse, Panorama.__camera );
		var intersects = raycaster.intersectObjects( Panorama._targetList, true);
		if ( intersects.length > 0 ){
			return intersects[0];
		}
		return false;
	},
	/**
	 *	重力初始化
	 */
	gravityInit: function(){
		Panorama._controls = new THREE.CustomDeviceOrientation( Panorama.__camera );//重力感应
		document.addEventListener( 'touchstart', Panorama.onScaleStart, false );
		document.addEventListener( 'touchmove', Panorama.onScaleExe, false );
	},
	onScaleStart: function ( e ) {
		e.preventDefault();
		var x0 = e.touches[ 0 ].screenX;
		var y0 = e.touches[ 0 ].screenY;
		var x1 = e.touches[ 1 ].screenX;
		var y1 = e.touches[ 1 ].screenY;
		Panorama._scaleDistance =  Math.sqrt(Math.pow((y1 - y0), 2) +  Math.pow((x1 - x0), 2));
		Panorama._cameraFov = Panorama.__camera.fov;
	},
	onScaleExe: function( e ){
		e.preventDefault();
		var x0 = e.touches[ 0 ].screenX;
		var y0 = e.touches[ 0 ].screenY;
		var x1 = e.touches[ 1 ].screenX;
		var y1 = e.touches[ 1 ].screenY;
		var scale = Panorama._scaleDistance / Math.sqrt(Math.pow((y1 - y0), 2) +  Math.pow((x1 - x0), 2));
		Panorama.__camera.fov = scale * Panorama._cameraFov;
	},
	
	/**
	 *	触摸初始化
	 */
	touchInit: function(){
		document.addEventListener( 'touchstart', Panorama.onTouchStart, false );
		document.addEventListener( 'touchmove', Panorama.onTouchMove, false );
		document.addEventListener( 'mousewheel', Panorama.onDocumentMouseWheel, false );
		document.addEventListener( 'mousedown', Panorama.onDocumentMouseDown, false );
	},
	onTouchStart: function ( e ) {
		//e.preventDefault();
		var touch = e.touches[ 0 ];
		Panorama._touchParam.x = touch.screenX;
		Panorama._touchParam.y = touch.screenY;
	},
	onTouchMove: function ( e ) {
		//e.preventDefault();
		var touch = e.touches[ 0 ];
		Panorama._lon -= ( touch.screenX - Panorama._touchParam.x ) * 0.1;
		Panorama._lat += ( touch.screenY - Panorama._touchParam.y ) * 0.1;
		Panorama._touchParam.x = touch.screenX;
		Panorama._touchParam.y = touch.screenY;
	},
	onDocumentMouseWheel: function ( event ) {
		console.log(event);
		Panorama.__camera.fov -= event.wheelDeltaY * 0.05;
		Panorama.__camera.updateProjectionMatrix();
	},
	onDocumentMouseDown:	function ( event ) {
		event.preventDefault();
		document.addEventListener( 'mousemove', Panorama.onDocumentMouseMove, false );
		document.addEventListener( 'mouseup', Panorama.onDocumentMouseUp, false );

	},
	onDocumentMouseMove:	function ( event ) {
		var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
		Panorama._lon -= movementX * 0.1;
		Panorama._lat += movementY * 0.1;
	},
	onDocumentMouseUp:	function ( event ) {
		document.removeEventListener( 'mousemove', Panorama.onDocumentMouseMove );
		document.removeEventListener( 'mouseup', Panorama.onDocumentMouseUp );
	},
	/**
	 *	界面尺寸改变
	 */
	onWindowResize: function(){
		Panorama.__camera.aspect = window.innerWidth / window.innerHeight;
		Panorama.__camera.updateProjectionMatrix();
		Panorama.__renderer.setSize( window.innerWidth, window.innerHeight );
	},
	/**
	 *	动画
	 */
	animate: function () {
		requestAnimationFrame( Panorama.animate );
		if(Panorama._controls){//如果控制存在用重力，不存在用触摸
			Panorama._controls.update();
		}else{
			Panorama._lat = Math.max( - 85, Math.min( 85, Panorama._lat ) );
			Panorama._phi = THREE.Math.degToRad( 90 - Panorama._lat );
			Panorama._theta = THREE.Math.degToRad( Panorama._lon );
	
			Panorama._target.x = Math.sin( Panorama._phi ) * Math.cos( Panorama._theta );
			Panorama._target.y = Math.cos( Panorama._phi );
			Panorama._target.z = Math.sin( Panorama._phi ) * Math.sin( Panorama._theta );
	
			Panorama.__camera.lookAt( Panorama._target );		
		}
		Panorama.__renderer.render( Panorama.__scene, Panorama.__camera );
	}
};

