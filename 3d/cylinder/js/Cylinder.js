var Cylinder = {
	VER:	"1.3.2",
	__stats:	null,//	状态
	__camera: null,	//摄像头
	__scene: null,	//场景
	__renderer: null,	//渲染器
	__room:	null,	//运动空间
	_queue:	null,	//载体
	_fileQueue:	[
		{id:"helvetiker", src:"fonts/helvetiker_regular.typeface.json"},
		{id:"bg", src:"images/map2.png"},
		//小岛
		{id:"island1", src:"images/island/1.png"},
		{id:"island2", src:"images/island/2.png"},
		{id:"island3", src:"images/island/3.png"},
		{id:"island4", src:"images/island/4.png"},
		{id:"island5", src:"images/island/5.png"},
		{id:"island6", src:"images/island/6.png"},
		//云
		{id:"cloud7", src:"images/cloud/7.png"},
		{id:"cloud8", src:"images/cloud/8.png"},
		{id:"cloud9", src:"images/cloud/9.png"},
		//海
		{id:"sea", src:"images/sea.png"}
	],	//文件
	TOUCH_UNIT : 0.3,
	_touchParam: {},
	_lon:	270,
	_lat:	0,
	_controls:	null,
	_apply:	false,
	/**
	 *	初始化
	 */
	init:	function(container){
		Cylinder.__camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 1000 );
		Cylinder.__camera.position.z = 50;
		
		Cylinder.__scene = new THREE.Scene();
		
		Cylinder.__room = new THREE.Object3D();//空间
		//Cylinder.__room.position.z = -100;
		
		Cylinder.__scene.add(Cylinder.__room);
		
		Cylinder.__renderer = new THREE.WebGLRenderer();
		//Cylinder.__renderer = new THREE.CanvasRenderer();
		Cylinder.__renderer.setPixelRatio( window.devicePixelRatio );
		Cylinder.__renderer.setSize( window.innerWidth, window.innerHeight );
		container.appendChild( Cylinder.__renderer.domElement );//渲染元素放入需要的位置
		Cylinder.__stats = new Stats();
		container.appendChild( Cylinder.__stats.dom );
		window.addEventListener( 'resize', Cylinder.onWindowResize, false );
		Cylinder.animate();
		
	},
	/**
	 *	预先加载
	 */
	preload:	function(progress, complete){
		Cylinder._queue = new createjs.LoadQueue(true);
		Cylinder._queue.loadManifest(Cylinder._fileQueue, true);
		Cylinder._queue.on("progress", function(e){if(progress)progress(e);}, this);//资源载入中
		Cylinder._queue.on("complete", function(e){Cylinder.logoShow();if(complete)complete(e);}, this);//资源载入完毕
		//Cylinder._queue.load();
	},
	/**
	 *	获取大海mesh
	 */
	getSea:	function(){
		var texture = new THREE.Texture( Cylinder._queue.getResult("sea"));
		texture.needsUpdate = true;
		texture.repeat = new THREE.Vector2( 1, 1 );
		var geometry = new THREE.CylinderGeometry( 50, 50, 110, 50,1, true, 0, Math.PI*2 );
		
		var material = new THREE.MeshBasicMaterial();
		//material.transparent = true;	//透明
		//material.side = THREE.DoubleSide;	//双面
		material.side = THREE.BackSide;	//背面
		material.map = texture;	//图片
		//material.color = 0xff0000;
		//material.opacity = 0.8;
		
		var mesh = new THREE.Mesh( geometry, material );
		mesh.name = "sea";
		//mesh.rotation.x = Math.PI/4;
		return mesh;
	},
	/**
	 *	获取小岛mesh
	 *	@param	num	小岛编号
	 */
	getIsland:	function(num){
		if(num <= 6 && num >= 1){
			
		}else {
			num = Math.floor(1 + Math.random()*6);
		} 
		var id = "island" + num;
		var img = Cylinder._queue.getResult(id);
		var texture = new THREE.Texture(img);
		texture.needsUpdate = true;
		var geometry = new THREE.PlaneGeometry( img.width/20, img.height/20 );
		//var geometry = new THREE.PlaneGeometry( 10, 10 );
		var material = new THREE.MeshBasicMaterial();
		material.transparent = true;	//透明
		//material.side = THREE.DoubleSide;	//双面
		material.map = texture;	//图片
		var mesh = new THREE.Mesh( geometry, material );
		return mesh;
	},
	/**
	 *	获取云mesh
	 *	@param	num	云编号
	 */
	getCloud:	function(num){
		if(num <= 7 && num >= 9){
			
		}else {
			num = Math.floor(7 + Math.random()*3);
		} 
		var id = "cloud" + num;
		var img = Cylinder._queue.getResult(id);
		var texture = new THREE.Texture(img);
		texture.needsUpdate = true;
		var geometry = new THREE.PlaneGeometry( img.width/5, img.height/5 );
		var material = new THREE.MeshBasicMaterial();
		material.transparent = true;	//透明
		material.side = THREE.DoubleSide;	//双面
		material.map = texture;	//图片
		var mesh = new THREE.Mesh( geometry, material );
		return mesh;
	},
	/**
	 *	获取版本号
	 */
	getVer:	function(){
		var obj = {
			font: new THREE.Font(Cylinder._queue.getResult("helvetiker")),
			size: 5,
			height: 1,
			curveSegments: 1,
			bevelThickness: 1,
			bevelSize: 1,
			bevelEnabled: false,
			material: 0,
			extrudeMaterial: 1
		};
		var geometry = new THREE.TextGeometry( "VER:" + Cylinder.VER, obj );
		geometry.computeBoundingBox();
		geometry.computeVertexNormals();
		var material = new THREE.MeshBasicMaterial( {color: "#ffffff"} );
		var mesh = new THREE.Mesh( geometry, material );
		return mesh;
	},
	/**
	 *	背景
	 */
	getBg:	function(){
		var texture = new THREE.Texture(Cylinder._queue.getResult("bg"));
		texture.needsUpdate = true;
		var geometry = new THREE.PlaneGeometry( 2000, 1100 );
		var material = new THREE.MeshBasicMaterial( {map: texture} );
		var plane = new THREE.Mesh( geometry, material );
		return plane;
	},
	/**
	 *	清空
	 */
	clearRoom:	function(){
		var arr = Cylinder.__room.children;
		for(var k in arr){
			Cylinder.__room.remove( arr[k] );
		}
	},
	/**
	 *	屏幕尺寸改变
	 */
	onWindowResize:	function(e) {
		Cylinder.__camera.aspect = window.innerWidth / window.innerHeight;
		Cylinder.__camera.updateProjectionMatrix();
		Cylinder.__renderer.setSize( window.innerWidth, window.innerHeight );
	},
	/**
	 *	动画
	 */
	animate:	function () {
		requestAnimationFrame( Cylinder.animate );
		Cylinder.__stats.update();
		TWEEN.update();
		Cylinder.roomRotate();
		Cylinder.__renderer.render( Cylinder.__scene, Cylinder.__camera );
	},
	/**
	 *	logo显示
	 */
	logoShow:	function(){
		var obj = {
			font: new THREE.Font(Cylinder._queue.getResult("helvetiker")),
			size: 10,
			height: 1,
			curveSegments: 1,
			bevelThickness: 1,
			bevelSize: 1,
			bevelEnabled: false,
			material: 0,
			extrudeMaterial: 1
		};
		var geometry = new THREE.TextGeometry( "VOGSO", obj );
		geometry.computeBoundingBox();
		geometry.computeVertexNormals();
		var material = new THREE.MeshBasicMaterial( {color: "#ffff00"} );
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = -25;
		var o3d = new THREE.Object3D();
		o3d.name = "logo";
		o3d.scale.x = 0;
		o3d.scale.y = 0;
		o3d.scale.z = 0;
		o3d.add(mesh);
		new TWEEN.Tween( o3d.rotation )
			.to( {y: Math.PI * 2}, 2000 )
			.onComplete(function(e){ Cylinder.logoHide(); })
			.start();
		new TWEEN.Tween( o3d.scale )
			.to( {x:1, y:1, z:1}, 2000 )
			//.easing( TWEEN.Easing.Exponential.InOut )
			.start();
		Cylinder.__room.add(o3d);
	},
	/**
	 *	logo隐藏
	 */
	logoHide:	function(){
		var o3d = Cylinder.__room.getObjectByName("logo");
		Cylinder.cloudShow();
		new TWEEN.Tween( o3d.scale )
			.to( {x:0, y:0, z:0}, 1000 )
			.easing( TWEEN.Easing.Quadratic.InOut )
			.onComplete(function(e){ Cylinder.roomShow(); })
			.start();
	},
	/**
	 *	空间显示
	 */
	roomShow:	function(){
		//Cylinder.clearRoom();
		//Cylinder.cloudShow();
		var sea = Cylinder.getSea();
		sea.geometry = new THREE.CylinderGeometry( 1, 1, 1, 1,1, true, 0, 0 );
		Cylinder.__room.add(sea);//海
		
		var obj = {len: 0};
		Cylinder.__camera.position.z = 50;
		new TWEEN.Tween( obj )
			.to( {len:Math.PI * 2}, 2000 )
			.easing( TWEEN.Easing.Quadratic.In)
			.onUpdate(function(e){
				var height = this.len / (Math.PI * 2) * 110;
				var radii =  this.len / (Math.PI * 2) * 50;
				sea.geometry = new THREE.CylinderGeometry( radii, radii, height, radii,1, true, Math.PI * 6/ 8, this.len );
				
			})
			.onComplete(function(e){
				Cylinder.islandShow();
				new TWEEN.Tween( Cylinder.__camera.position )
					.to( {z:0}, 2000 )
					.easing( TWEEN.Easing.Quadratic.Out )
					.start();
				new TWEEN.Tween( sea.rotation )
					.to( {y:Math.PI * 2}, 2000 )
					.easing( TWEEN.Easing.Quadratic.Out )
					.onComplete(function(e){ Cylinder.roomApply(); })
					.start();
			})
			.start();
	},
	islandShow:	function(){
		var o3d = new THREE.Object3D();
		o3d.name = "island";
		Cylinder.__room.add(o3d);
		for(var i = 0;i < 6;i++){
			var island = Cylinder.getIsland(i + 1);
			//位置
			var r = Math.PI * 2 * (i / 6);
			var target = new THREE.Vector3();
			
			target.x = Math.cos(r) * 40;
			target.y = Math.random() * 20 - 10;
			target.z = Math.sin(r) * 40;
			
			//island.rotation.x = 0;
			island.position.x = target.x;
			island.position.y = target.y;
			island.position.z = target.z;
			island.lookAt(new THREE.Vector3());
			//位移
			island.position.x = 0;
			island.position.y = 0;
			island.position.z = -40;
			var delay = 500 +100 * i;
			new TWEEN.Tween( island.position )
				.to( {x:target.x, y:target.y, z:target.z}, 2000 )
				.easing( TWEEN.Easing.Quadratic.Out )
				.start();
			//缩放
			island.scale.x = 0;
			island.scale.y = 0;
			island.scale.z = 0;
			new TWEEN.Tween( island.scale )
				.to( {x:1, y:1, z:1}, 2000 )
				.easing( TWEEN.Easing.Quadratic.Out )
				.start();
			o3d.add(island);
		}
	},
	cloudShow:	function(){
		var o3d = new THREE.Object3D();
		o3d.name = "cloud";
		Cylinder.__room.add(o3d);
		for(var i = 0;i < 10;i++){
			var mesh = Cylinder.getCloud();
			//位置
			var radii = 60;
			var r = Math.random() * Math.PI * 2;
			var target = new THREE.Vector3();
			
			target.x = Math.cos(r) * radii;
			target.y = Math.random() * 20 - 10;
			target.z = Math.sin(r) * radii;
			
			//island.rotation.x = 0;
			mesh.position.x = target.x;
			mesh.position.y = target.y;
			mesh.position.z = target.z;
			mesh.lookAt(new THREE.Vector3());
			mesh.scale.x = 0;
			mesh.scale.y = 0;
			mesh.scale.z = 0;
			new TWEEN.Tween( mesh.scale )
				.to( {x:1, y:1, z:1}, 2000 )
				.delay(Math.random() * 1000 + 500)
				//.easing( TWEEN.Easing.Quadratic.Out )
				.start();
			o3d.add(mesh);
		}
		new TWEEN.Tween( o3d.rotation )
			.to( {y:Math.PI * 2}, 3000 )
			.delay(100)
			//.easing( TWEEN.Easing.Quadratic.In )
			.start();
		o3d.scale.x = 0.5;
		o3d.scale.y = 0.5;
		o3d.scale.z = 0.5;
		new TWEEN.Tween( o3d.scale )
			.to( {x:1, y:1, z:1}, 1000 )
			.delay(200)
			.easing( TWEEN.Easing.Quadratic.In )
			.start();
	},
	/**
	 *	小岛碰撞
	 */
	islandTest:	function(x, y){
		var obj = Cylinder.hitTest(x, y);
		if(obj){
			Cylinder.islandActive( obj.object );
		}	
	},
	/**
	 *	小岛事件
	 */
	islandActive:	function(mesh){
		if(mesh.userData) TWEEN.remove(mesh.userData);
		mesh.userData = new TWEEN.Tween( mesh.scale )
			.to( {x:2, y:2, z:2}, 500 )
			.easing( TWEEN.Easing.Quadratic.Out )
			.onComplete(function(e){
				mesh.userData = new TWEEN.Tween( mesh.scale )
					.to( {x:1, y:1, z:1}, 200 )
					.easing( TWEEN.Easing.Quadratic.In )
					.start();
			})
			.start();
	},
	/**
	 *	空间功能启用
	 */
	roomApply:	function(){
		var ver = Cylinder.getVer();
		ver.position.y = 50;
		ver.rotation.x = Math.PI/2;
		Cylinder.__room.add(ver);
		Cylinder.__renderer.domElement.addEventListener("click", function(e){Cylinder.islandTest(e.clientX, e.clientY);});
		Cylinder.__renderer.domElement.addEventListener("touchend", function(e){Cylinder.islandTest(e.changedTouches[0].clientX, e.changedTouches[0].clientY);});
		Cylinder.roomControl();
	},
	/**
	 *	空间旋转
	 */
	roomRotate:	function(){
		if(!Cylinder._apply) return;
		if(Cylinder._controls)Cylinder._controls.update();	
	},
	/**
	 *	碰撞检测
	 */
	hitTest: function(x, y){
		// update the mouse variable
		var mouse = { x: 0, y: 0 };
		mouse.x = ( x / Cylinder.__renderer.domElement.clientWidth ) * 2 - 1;
		mouse.y = - ( y / Cylinder.__renderer.domElement.clientHeight ) * 2 + 1;
		var raycaster = new THREE.Raycaster();
		raycaster.setFromCamera( mouse, Cylinder.__camera );
		var intersects = raycaster.intersectObjects( Cylinder.__room.getObjectByName("island").children, true);
		if ( intersects.length > 0 ){
			return intersects[0];
		}
		return false;
	},
	/**
	 *	空间控制
	 */
	roomControl:	function(){
		//if(Cylinder._apply) return;
		Cylinder._apply = true;
		Cylinder._controls = new THREE.AntiMeshControls( Cylinder.__camera, Cylinder.__renderer.domElement );
		//Cylinder._controls = new THREE.DeviceOrientationControls( Cylinder.__camera );//重力感应
	},
	
	end:	null
};



