/****************************************************************************
*	@Copyright(c)	2017,保定无双软件
*	@desc	换头像
*	@date	2017-3-14
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Head.class.js
*	@modify	null
******************************************************************************/
Head = {};
Head.VER = "1.0.0";

Head.Event = {
	START:	"gameStart",
	OVER:	"gameOver",
	CLEAR:	"gameClear"
};

/**
 *	预先加载
 */
Head.Preload = {
	_queue : null,	//loder
	_images : [	//图片组
		{id:"ershuai", src:"ershuai.jpg"}
	],
	/**
	 *	初始化
	 */
	init : function(){
		this._queue = new createjs.LoadQueue(true);
		this._queue.loadManifest(this._images, false, "images/");
	},
	/**
	 *	加载
	 */
	load : function(progress, complete, fileLoaded){
		if(progress)this._queue.on("progress", progress, this);//资源载入中
		if(complete)this._queue.on("complete", complete, this);//资源载入完毕
		if(fileLoaded)this._queue.on("fileload", fileLoaded, this);//文件载入完毕
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
Head.main = function(canvas){
	var _this = this;
	
	var FPS = 25;	//帧频
	
	var __game = null;	//游戏载体
	var __head = null,	//头像
		__video = null,	//视频
		__bitmap = null;

	var _data = [],	//数据
		_row = 3,
		_col = 3;
		
	/**
	 *	游戏初始化
	 */
	_this.init = function(canvas, video){
		_this.Stage_constructor(canvas);//继承stage
		createjs.Ticker.setFPS(FPS);	//帧频
		createjs.Ticker.addEventListener('tick', _this);	//按照帧频更新舞台
		createjs.Touch.enable(_this);	//启用tauch
		__video = video;
		video.addEventListener("play", onVideoPlay);
		__game = new createjs.Container();
		_this.addChild(__game);
		__bitmap = new createjs.Bitmap();
		__bitmap.image = video;
		__head = new lib.gym(createjs.MovieClip.INDEPENDENT, 0, false);
		__head.visible = false;
		__game.addChild(__bitmap, __head);
		_this.on("tick", onTick)
		_this.update();
	};
	/**
	 *	游戏开始
	 */
	_this.start = function(){
		
	};
	function onVideoPlay (e) {
		__head.visible = true;
	}
	function onTick (e) {
		var frame = __video.currentTime * FPS;
		__head.gotoAndStop(frame);
	}
	
	this.init(canvas, video);
};
Head.main.prototype = createjs.extend(Head.main, createjs.Stage);
Head.main = createjs.promote(Head.main, "Stage");


