/****************************************************************************
*	@Copyright(c)	2016,保定无双软件
*	@desc	颜色
*	@date	2017-1-13
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Color.class.js
*	@modify	null
******************************************************************************/
Color = {};
Color.VER = "1.0.0";

/**
 *	预先加载
 */
Color.Preload = {
	_queue : null,	//loder
	_images : [	//图片组
		{id:"game", src:"pokemon.jpg"}
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
 *	事件
 */
Color.Event = {
	GAME_START:	"gameStart",
	GAME_OVER:	"gameOver",
	GAME_CLEAR:	"gameClear",
	GAME_SCORE:	"gameScore",
	GAME_SCORE_SHOW:	"gameScoreShow"
};

/**
 *	主函数
 */
Color.main = function(canvas){
	var _this = this;
	
	_this.Stage_constructor(canvas);
	var FPS = 60,	//场景参数
		WIDTH = canvas.width,
		HEIGHT = canvas.height;
	
	var __game = null,	//游戏
		__ready = null;	//准备
		
	var __bg = null,	//背景
		__person = null,	//人物
		__road = null,	//道路
		__score = null,	//计分器
		__controller = null;	//控制台
	var ROAD_X = 0,	//原件参数
		ROAD_Y = 340,
		SCORE_X = 96,
		SCORE_Y = 215,
		PERSON_X = 320,
		PERSON_Y = 951,
		CONTROLLER_X = 320,
		CONTROLLER_Y = 893;
		
	var _speed = 0,	//速度
		_pos = 0,	//实际位置
		_distance = 10000,	//距离
		_expire = 0,	//过期时间
		_score = 0;	//积分
	
	var _itemPos = 0,	//道具出现位置
		ITEM_DURATION = 200;
	/**
	 *	初始化
	 */
	_this.init = function(){
		createjs.Ticker.setFPS = FPS;	//帧频
		createjs.Ticker.addEventListener('tick', _this);	//按照帧频更新舞台
		createjs.Touch.enable(_this);	//启用tauch	
		_this.ready();
	};
	
	
	/**
	 *	游戏准备
	 */
	_this.ready = function(){
		__game = new createjs.Container();
		var image = Color.Preload.getResult("game");
		var bit = new createjs.Bitmap(image);
		__game.addChild(bit);
		
		var matrix = new createjs.ColorMatrix();
		matrix.adjustSaturation(-100);
		__game.filters = [
			new createjs.ColorMatrixFilter(matrix)
		];
		__game.cache(0, 0, image.width, image.height);
		_this.addChild(__game);
	};
	/**
	 *	游戏最终
	 */
	_this.end = function(){
		
	};
	/**
	 *	游戏开始
	 */
	_this.start = function(){
		__game.saturation = -100;
		var t = createjs.Tween.get(__game, {override:true}).to({saturation:0}, 5000);
		t.on("change", onChange);
	};
	/**
	 *	游戏结束
	 */
	_this.over = function(){
		
	};
	function onChange (e) {
		var matrix = new createjs.ColorMatrix();
		matrix.adjustSaturation(e.target.target.saturation);
		__game.filters = [
			new createjs.ColorMatrixFilter(matrix)
		];
		__game.updateCache();
	}
	_this.init();
};
Color.main.prototype = createjs.extend(Color.main, createjs.Stage);
Color.main = createjs.promote(Color.main, "Stage");