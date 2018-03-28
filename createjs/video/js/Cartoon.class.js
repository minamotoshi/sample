/****************************************************************************
*	@Copyright(c)	2017,保定无双软件
*	@desc	动画
*	@date	2017-4-17
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Cartoon.class.js
*	@modify	null
******************************************************************************/
Cartoon = {};
Cartoon.VER = "1.0.0";

Cartoon.Event = {
	END_SOON:	"endSoon",
	START:	"gameStart",
	OVER:	"gameOver"
};

/**
 *	预先加载
 */
Cartoon.Preload = {
	_queue : null,	//loder
	_images : [	//图片组
		
	],
	/**
	 *	初始化
	 */
	init : function(){
		this._queue = new createjs.LoadQueue(true);
		this._queue.loadManifest(this._images, false, "res/");
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
 *	主类，继承create.Stage
 *	@param	canvas	主体或者名称
 */
Cartoon.main = function(canvas){
	var _this = this;
	
	var FPS = 25;	//帧频
	
	var __game = null,	//游戏载体
		__surface = null;	//界面
	var __video = null,	//视频
		__ball = null,	//篮球
		__bitmap = null;
	var _isEndSoon = true;	//即将结束
	var _ballLis = null;	//篮球侦听
	var _isVideoPlaying = false,	//loading状态
		_isLoadingComplete = false;
	/**
	 *	游戏初始化
	 */
	_this.init = function(canvas, video){
		_this.Stage_constructor(canvas);//继承stage
		createjs.Ticker.setFPS(FPS);	//帧频
		createjs.Ticker.addEventListener('tick', _this);	//按照帧频更新舞台
		createjs.Touch.enable(_this);	//启用tauch
		__video = video;
		__video.addEventListener("error", function(e){
			console.log(e);
			alert("视频错误，请刷新！");
		});
		__game = new createjs.Container();
		var bg = new createjs.Shape();
		bg.graphics.beginFill("#000000").drawRect(0, 0, canvas.width, canvas.height);
		_this.addChild(bg, __game);
		__bitmap = new createjs.Bitmap();
		__bitmap.image = video;
		__game.addChild(__bitmap);
		_this.resize();
		_this.on("tick", onTick)
	};
	_this.launch = function(){
		
	};
	_this.start = function(){
		__video.play();
	};
	_this.resize = function(){
		if(__video.width > __video.height && canvas.width < canvas.height){
			__bitmap.scaleX = __bitmap.scaleY = canvas.height / __video.width;
			__bitmap.x = canvas.width;
			__bitmap.rotation = 90;
		}else{
			__bitmap.scaleX = __bitmap.scaleY = canvas.width / __video.width;
			__bitmap.x = 0;
			__bitmap.rotation = 0;
		}
	};
	function onTick (e) {
		var frame = __video.currentTime * FPS;
		console.log(__bitmap.width);
	}
	this.init(canvas, video);
};
Cartoon.main.prototype = createjs.extend(Cartoon.main, createjs.Stage);
Cartoon.main = createjs.promote(Cartoon.main, "Stage");


