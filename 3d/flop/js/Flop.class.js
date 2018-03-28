/****************************************************************************
*	@Copyright(c)	2016,保定无双软件
*	@desc	考记忆
*	@date	2016-11-14
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Flop.class.js
*	@modify	null
******************************************************************************/
var Flop = {};
Flop.VER = "1.0.0";
/**
 *	预先加载
 */
Flop.Preload = {
	_queue : null,	//loder
	_images : [	//图片组
		//
		{id:"caoshuai", src:"caoshuai.jpg"},
		{id:"weisen", src:"weisen.jpg"},
		{id:"yajiao", src:"yajiao.jpg"},
		{id:"yalei", src:"yalei.jpg"},
		{id:"huxing", src:"huxing.jpg"},
		{id:"jiaqi", src:"jiaqi.jpg"},
		{id:"zhangzhen", src:"zhangzhen.jpg"},
		{id:"yufei", src:"yufei.jpg"},
		{id:"logo", src:"logo.png"}
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
		//this._queue.loadManifest(this._fonts, false, "fonts/");
		//this._queue.loadManifest(this._objs, false, "models/");
		//this._queue.loadManifest(this._sounds, false, "sounds/");
		//createjs.Sound.registerSounds(this._sounds);
	},
	/**
	 *	加载
	 */
	load : function(progress, complete){
		if(!this._queue) Flop.Preload.init();
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
Flop.Event = {
	GAME_START:	"gameStart",
	GAME_OVER:	"gameOver",
	GAME_SCORE:	"gameScore",
	FLOP_START:	"flopStart",
	FLOP_END:	"flopEnd",
	STAGE_CLEAR:	"stageClear",
	SCORE_ADD:	"scoreAdd"
};
/**
 *	关卡
 */
Flop.kStage = [
	{
		style: [0,0,1,1],
		place:	[
			[1,1],
			[1,1]
		]
	},
	{
		style: [2,2,2,2,3,3,4,4],
		place:	[
			[1,1,1],
			[1,0,1],
			[1,1,1]
		]
	},
	{
		style: [5,5,5,5,6,6,6,6,7,7,7,7,0,0,1,1],
		place:	[
			[1,1,1,1],
			[1,1,1,1],
			[1,1,1,1],
			[1,1,1,1]
		]
	}
];
/**
 *	主体
 */
Flop.main = function(container){
	var _this = this;
	
	var WIDTH = 0,
		HEIGHT = 0;
	var __camera = null,	//摄像头
		__scene = null,	//场景
		__renderer = null;	//渲染器
	var __game = null;	//游戏
	var _controls = null;	//控制器
	var _raycaster = new THREE.Raycaster(),	//射线
		_objects = [],	//检测元素
		_enable = true;	//允许操作
	var _compare = [],	//对比的元素
		_act = 0;	//行动次数
	var _cards = [];	//卡牌数组
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
		
		__renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});	//渲染器
		//__renderer.autoClear = false;
		__renderer.setPixelRatio( window.devicePixelRatio );
		__renderer.setSize( WIDTH, HEIGHT );
		//__renderer.setClearColor( 0xf0f0f0 );
		//__renderer.setClearAlpha(0.0);
		container.appendChild( __renderer.domElement );//渲染元素放入需要的位置
	};
	/**
	 *	启动
	 */
	_this.launch = function(){
		__camera.position.z = 10;
		__game = new THREE.Object3D();
		__scene.add(__game);
		for(var k in Flop.Preload._images){
			_cards[k] = Flop.Preload._images[k].id;
		}
		_this.control();
		animate();
	};
	/**
	 *	显示
	 */
	_this.show = function(index) {
		while (__game.children.length > 0) {
			//清空之前的数据
			__game.remove(__game.children[0]);
		}
		_act = 0;
		var style = [];
		style = style.concat(Flop.kStage[index].style);
		var place = Flop.kStage[index].place;
		for(var i in place){
			for(var j in place[i]){
				var exist = place[i][j];
				if(exist){
					var k = parseInt(Math.random() * style.length);
					var index = style.splice(k, 1);
					var card = new Flop.Card(_cards[index]);
					card.position.x = j - place[i].length/2;
					card.position.y = i - place.length/2;
					card.flop(false, true);
					__game.add(card);
					_objects.push(card);
				}
			}
		}
	}
	/**
	 *	获取行动次数
	 */
	_this.getAct = function(){
		return _act;
	};
	/**
	 *	控制
	 */
	_this.control = function(){
		//_controls = new THREE.TrackballControls( __camera, __renderer.domElement );
		__renderer.domElement.addEventListener( 'click', onClick, false );
		__renderer.domElement.addEventListener( 'touchstart', onTouchStart, false );
	};
	/**
	 *	点击
	 */
	function onClick( e ) {
		event.preventDefault();
		hitTest( e.clientX, e.clientY );
	}
	function onTouchStart (e) {
		event.preventDefault();
		hitTest( e.touches[0].clientX, e.touches[0].clientY );
	}
	/**
	 *	点击检测
	 */
	function hitTest( x, y ) {
		if(_compare.length >= 2) return;
		var mouse = {};
		mouse.x = ( x / window.innerWidth ) * 2 - 1;
		mouse.y = - ( y / window.innerHeight ) * 2 + 1;

		_raycaster.setFromCamera( mouse, __camera );
		var intersects = _raycaster.intersectObjects( _objects );
		if ( intersects.length > 0 ) {
			var obj = intersects[ 0 ].object;
			if(_compare.length == 1){
				if(_compare[0].id == obj.id) return;
			}
			obj.addEventListener(Flop.Event.FLOP_END, onFlopEnd);
			obj.flop(true);
			_compare.push(obj);
		}
	}
	/**
	 *	卡片旋转完毕
	 */
	function onFlopEnd(e) {
		if(_compare.length == 2)compare();
	}
	/**
	 *	对比
	 */
	function compare() {
		var a = _compare[0];
		var b = _compare[1];
		_act++;
		if(a.getID() == b.getID()){
			a.bingo();
			b.bingo();
			for(var k in _objects){
				if(a.id == _objects[k].id){
					_objects.splice(k,1);
					break;
				}
			}
			for(var k in _objects){
				if(b.id == _objects[k].id){
					_objects.splice(k,1);
					break;
				}
			}
			if(_objects.length == 0){
				_this.dispatchEvent({ type: Flop.Event.STAGE_CLEAR });
			}
		}else{
			a.flop(false);
			b.flop(false);
		}
		_compare = [];
	}
	/**
	 *	动画
	 */
	function animate() {
		requestAnimationFrame( animate );
		if(_controls)_controls.update();
		TWEEN.update();
		__renderer.render( __scene, __camera );
	}
	_this.init(container);
};

Object.assign( Flop.main.prototype, THREE.EventDispatcher.prototype);
Flop.main.prototype.constructor = Flop.main;

/**
 *	卡牌
 *	@param	id	卡牌id
 */
Flop.Card = function(id) {
	var _this = this;
	var WIDTH = 1,	//几何体参数
		HEIGHT = 1,
		DEPTH = 0.1,
		SEGMENTS = 1;
	var DURATION = 500;
	
	_this.init = function(id){
		THREE.Mesh.call(_this);
		var geometry = new THREE.BoxGeometry( WIDTH,HEIGHT,DEPTH, SEGMENTS, SEGMENTS, SEGMENTS );
		var front = getFront(id);
		var back = getBack();
		var side = getSide();
		
		var arr = [
			side,
			side,
			side,
			side,
			front,
			back		
		];
		_this.geometry = geometry;
		_this.material = new THREE.MultiMaterial(arr);
	};
	/**
	 *	获取id
	 */
	_this.getID = function(){
		return id;
	};
	/**
	 *	成功
	 */
	_this.bingo = function(){
		_this.visible = false;
	};
	/**
	 *	翻面
	 *	@param	side	true正面，flase背面
	 *	@param	strict	直接
	 */
	_this.flop =  function(side, strict){
		var rota = 0;
		if(side){
			rota = 0;
		}else{
			rota = Math.PI;
		}
		if(strict){
			_this.rotation.y = rota;
			return;
		}
		_this.dispatchEvent({ type: Flop.Event.FLOP_START });
		new TWEEN.Tween( _this.rotation )
			.to( {y:rota}, DURATION )
			.onComplete(function() {
				_this.rotation.y %= Math.PI * 2;
				_this.dispatchEvent({ type: Flop.Event.FLOP_END });
			})
			.easing( TWEEN.Easing.Quadratic.InOut )
			.start();
	};
	/**
	 *	正面
	 */
	function getFront(id){
		var texture = new THREE.Texture(Flop.Preload.getResult(id));
		texture.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial();
		material.map = texture;
		return material;
	}
	/**
	 *	背面
	 */
	function getBack(){
		var texture = new THREE.Texture(Flop.Preload.getResult("logo"));
		texture.needsUpdate = true;
		var material = new THREE.MeshBasicMaterial();
		material.map = texture;
		return material;
	}
	/**
	 *	边缘
	 */
	function getSide(){
		var material = new THREE.MeshStandardMaterial({color: 0x000000});
		return material;
	}
	_this.init(id);
};
Flop.Card.prototype = Object.create( THREE.Mesh.prototype );
Flop.Card.prototype.constructor = Flop.Card;
