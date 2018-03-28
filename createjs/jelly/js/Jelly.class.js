/****************************************************************************
*	@Copyright(c)	2017,保定无双软件
*	@desc	动画
*	@date	2017-10-30
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Jelly.class.js
*	@modify	null
******************************************************************************/
Jelly = {};
Jelly.VER = "2.0.0";

Jelly.Event = {
	VIDEO_ENDED:	"videoEnded",
	START:	"gameStart",
	OVER:	"gameOver"
};

/**
 *	预先加载
 */
Jelly.Preload = {
	_queue : null,	//loder
	_images : [	//图片组
		{id:"accept", src:"accept.png"},
		{id:"reject", src:"reject.png"},
		{id:"bg", src:"bg.jpg"},
		{id:"title", src:"title.png"},
		{id:"info", src:"info.png"},
		{id:"remind", src:"remind.png"},
		{id:"skip", src:"skip.png"},
		{id:"flip_deg", src:"flip_deg.png"},
		{id:"flip_handset", src:"flip_handset.png"},
		{id:"fliptext", src:"fliptext.png"}
	],
	_sounds : [	//声音组
		{"src": "ring.mp3", id: "ring"}
	],
	/**
	 *	初始化
	 */
	init : function(){
		this._queue = new createjs.LoadQueue(true);
		//this._queue.loadManifest(this._images, false, "res/");
		//this._queue.loadManifest(this._videos, false, "media/");
		//createjs.Sound.registerSounds(this._sounds);
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
Jelly.main = function(canvas){
	"use strict";
	var _this = this;
	
	var FPS = 60;	//帧频
	var WIDTH = 700,
		HEIGHT = 500;
	var SIMULATION_RATE = 30;
	var __game = null,	//游戏载体
		__surface = null;	//界面
	var _mouse = null,	//鼠标
		_lastTick = new Date().getTime();	//最后一个
	/**
	 *	游戏初始化
	 */
	_this.init = function(canvas){
		_this.Stage_constructor(canvas);//继承stage
		WIDTH = canvas.width;
		HEIGHT = canvas.height;
		createjs.Ticker.framerate = FPS;	//帧频
		createjs.Ticker.addEventListener('tick', _this);	//按照帧频更新舞台
		createjs.Touch.enable(_this);	//启用tauch
		__game = new createjs.Container();
		var area = new createjs.Shape();
		area.graphics.f("#000000").drawRect(0,0, WIDTH, HEIGHT).ef();
		//__game.hitArea = area;
		__surface = new createjs.Container();
		__game.on('tick', onTick);
		_mouse = {
			pos : new Vec2(0,0),
			stage : new Vec2(0,0),
			down : true
		};
		_this.addChild(__game, __surface);
	};
	/**
	 *	启动
	 */
	_this.launch = function(options){
		__game.on("pressmove", onPressMove);
		_this.on("stagemousemove", onPressMove);
		options.forEach(option => {
			var island = new Jelly.Island(option);
			__game.addChild(island);
		});
	};
	function onPressMove (e) {
		_mouse.stage.set(e.stageX, e.stageY);
		e.preventDefault();
	}
	function onMouseDown (e) {
		e.preventDefault();
		_mouse.stage.set(e.stageX, e.stageY);
		_mouse.down = true;
		//console.log(_mouse);
	}
	function onPressUp (e) {
		e.preventDefault();
		_mouse.down = false;
	}
	function onTick (e) {
		var current = new Date().getTime();
		var needed = (SIMULATION_RATE/1000)*(current-_lastTick);
		while (needed-- >= 0) {
			update();
		}
		_lastTick = current;
		render();
	}
	function update () {
		var arr = __game.children;
		for(var i = 0, len = arr.length;i < len;i++){
			var island = arr[i];
			var p = island.globalToLocal(_mouse.stage.x, _mouse.stage.y);
			_mouse.pos.set(p.x, p.y);
			island.update(_mouse);
		}
	}
	function render () {
		var arr = __game.children;
		for(var i = 0, len = arr.length;i < len;i++){
			var island = arr[i];
			island.render();
		}
	}
	this.init(canvas);
};
Jelly.main.prototype = createjs.extend(Jelly.main, createjs.Stage);
Jelly.main = createjs.promote(Jelly.main, "Stage");
/**
 *	二维坐标
 */
function Vec2(x, y) {
	this.x = x;
	this.y = y;
}
Vec2.prototype.set = function(x, y) {
	this.x = x;
	this.y = y;
	return this;
};
Vec2.prototype.copy = function(v) {
	return this.set(v.x, v.y);
};
Vec2.prototype.translate = function(x, y) {
	return this.set(this.x + x, this.y + y);
};
Vec2.prototype.scale = function(v) {
	return this.set(this.x * v, this.y * v);
};
Vec2.prototype.distance = function(o) {
	var dx = this.x - o.x, dy = this.y - o.y;
	return Math.sqrt(dx * dx + dy * dy);
};

/**
 *	水母点
 */
class Dot {
  constructor(x,y,neihgbourhood){
    this.originalX = x;
    this.originalY = y;

    this.startY = y;
    this.startX = x;
    this.step = 0;

    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.friction = 0.3;
    this.radius = 4;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.float = 0;
    this.speedIsland = 0;
    this.spring = 0.09;
    this.alpha = 1;
    this.color = "transparent";//rgba(255,0,0,1)
    this.lineWidth = 0;
    this.neighbors = [];
    this.neihgbourhood = neihgbourhood;
    
  }

  move(m){
    let centerBall = {x:m.pos.x,y:m.pos.y,radius: this.neihgbourhood};

    // let radius = m.down?150:100;
    let radius = this.neihgbourhood;
    // var minDist = 180;
    // this.x += 1;
    // console.log(m.pos);

    let dx = - m.pos.x + this.x;
    let dy = - m.pos.y + this.y;
    var minDist = this.radius + radius;
    let dist = Math.sqrt(dx*dx + dy*dy);
    


    if(dist<minDist) {
      this.float = 0;

      var angle = Math.atan2(dy,dx),
        tx = centerBall.x + Math.cos(angle)*minDist,
        ty = centerBall.y + Math.sin(angle)*minDist;

      this.vx += (tx - this.x)/10;
      this.vy += (ty - this.y)/10;

    }

    this.vx *= this.friction;
    this.vy *= this.friction;

    if ( this.motion ) {
      
      if ( this.route == 'vertical' ) {
        this.originalY = this.startY + this.backlash * Math.sin(this.step);
      } 
      else if ( this.route == 'horizontal' ) {
        this.originalX = this.startX + this.backlash * Math.cos(this.step);
      } 
      else {
        this.originalX = this.startX + this.backlash * Math.cos(this.step);
        this.originalY = this.startY + this.backlash * Math.sin(this.step);
      }
      this.step += this.speedIsland;
    }

    // begin spir
    this.springBack();
  
    if(this.float>0){
      this.x = this.originalX + this.lastFloat*Math.sin(Math.PI*this.float/this.lastFloat);
      this.y = this.originalY + this.lastFloat*Math.sin(2*Math.PI*this.float/this.lastFloat);
      // this.vx = 0;
      this.float = this.float - 1/30;
    }

    this.x += this.vx;
    this.y += this.vy;
    // console.log(this.float);
  }

  floatMe(amount){
    // console.log('fl');
    if(this.float<0.1){
      this.float = amount;
      this.lastFloat = amount;
    }
   
  }

  floatMotion( amount, speed, backlash, route) {

    if ( amount ){
      this.motion = amount;
      this.speedIsland = speed;
      this.backlash = backlash;
      this.route = route;
    }
   
  }

  
  addNeighbor(n, c, s) {
    var dist = Math.sqrt((n.x - this.x)*(n.x - this.x) + (n.y - this.y)*(n.y - this.y))
    this.neighbors.push({
      point: n,
      x: n.x,
      y: n.y,
      vx: n.vx,
      vy: n.vy,
      dist: dist,
      compress: c,
      strength: s
    });
  }

  addAcrossNeighbor(n) {
    this.addNeighbor(n, 1, 1);
  }

  setNeighbors(p, n) {
    this.addNeighbor(p, 30, 0.5);
  }

  

  springBack(){
    var dx1 = this.originalX - this.x;
    var dy1 = this.originalY - this.y;

    dx1 *= this.spring;
    dy1 *= this.spring;

    this.vx += dx1;
    this.vy += dy1;

  }

  think() {
      
      for (var i = 0, len = this.neighbors.length; i < len; i++) {
        // console.log(this.neighbors);
        var n = this.neighbors[i];
        var dx = this.x - n.x;
        var dy = this.y - n.y;

        var d = Math.sqrt(dx * dx + dy * dy);
        var a = (n.dist - d) / d * n.strength;
        if (d < n.dist) {
          a /= n.compress;
        }
        var ox = dx * a*this.friction;
        var oy = dy * a*this.friction;

        this.vx += ox;
        this.vy += oy;

        n.point.vx -= ox;
        n.point.vy -= oy;
      }
    };
}


/**
 *	水母岛
 *	@svg	svg
 */
Jelly.Island = function(opt) {
	"use strict";
	var _this = this;
	var SCALE = 150,
	
		NEIGHBOR_DIST = 30,
		
		MAX_ACROSS_NEIGHBOR_DIST = 50,
		SIMULATION_RATE = 60;
	var _points = [],
		_scale = 33,
		_float = 3,
		_strokeFlag = false,
		_speed = 0.01,
		_motion = false,
		_route = "vertical",
		_backlash = 50,
		
		_radius = 100,
		_index = 0,
		_isShake = false,	//抖动
		_isMotion = false,	//运动
		_color = null;
	var __shape = null;	//矢量
	
	_this.init = function(opt){
		_this.Container_constructor();	//构造
		__shape = new createjs.Shape();
		var svg = opt.path;
		_this.addChild(__shape);
		_color = svg.attr("fill");
		var length = svg.getTotalLength();
		var unit = length / opt.points;
		_float = opt.float;
		
		if(opt.hasOwnProperty("motion")){
			_motion = opt.motion;
		}
		if(opt.hasOwnProperty("speed")){
			_speed = opt.speed;
		}
		if(opt.hasOwnProperty("route")){
			_route = opt.route;
		}
		if(opt.hasOwnProperty("backlash")){
			_backlash = opt.backlash;
		}
		for (var i = 1; i < length; i+= unit) {
			var o = svg.getPointAtLength(Math.floor(i));
			//_points.push(new Jelly.Point(o.x, o.y));
			_points.push(new Dot(o.x, o.y, _radius));
		}
		buildNeighbours(_points);
	};
	function buildNeighbours(dots){
		for (var i = 0, len = dots.length; i < len; i++) {
			var jp = dots[i];
			var pi = i === 0 ? len - 1 : i - 1;
			var ni = i === len - 1 ? 0 : i + 1;
			jp.setNeighbors(dots[pi], dots[ni]);
			for (var j = 0; j < len; j++) {
				var ojp = dots[j];
				var curdist = Math.sqrt((ojp.x - jp.x)*(ojp.x - jp.x) + (ojp.y - jp.y)*(ojp.y - jp.y));
				if (
					ojp !== jp && ojp !== dots[pi] && ojp !== dots[ni] &&
					curdist <= NEIGHBOR_DIST
				) {
					jp.addAcrossNeighbor(ojp);
				}
			}
		}
	}
	function floatEffect(){
		_points.forEach(dot=>{
			if(parseInt(dot.x)==parseInt(dot.originalX) && parseInt(dot.y)==parseInt(dot.originalY)  ){
				dot.floatMe(_float + _float * Math.random()*2);
				if (_motion) {
					dot.floatMotion(_motion, _speed, _backlash, _route);
				}
			}
		})
	}
	/**
	 *	渲染
	 */
	_this.render = function(){
		__shape.graphics.c().f(_color);
		//__shape.graphics.mt(_points[0].pos.x, _points[0].pos.y);
		var len = _points.length;
		for(var i = 0;i <= len;++i){
			var p0 = _points[i+0 >= len ? i+0-len : i+0];
			var p1 = _points[i+1 >= len ? i+1-len : i+1];
			__shape.graphics.qt(p0.x, p0.y, (p0.x+p1.x) * 0.5, (p0.y+p1.y) * 0.5);
		}
		__shape.graphics.cp().ef();
	};
	/**
	 *	更新
	 *	@param	mouse
	 */
	_this.update = function(mouse) {
		floatEffect();
		var i, len = _points.length;
		for (i = 0; i < len; i++) _points[i].think();
		for (i = 0; i < len; i++) _points[i].move(mouse);
	};
	/**
	 *	获取坐标集合
	 *	@return	点坐标
	 */
	_this.getPoints = function(){
		return _points;
	};
	_this.init(opt);
};
Jelly.Island.prototype = createjs.extend(Jelly.Island, createjs.Container);
Jelly.Island = createjs.promote(Jelly.Island, "Container");

