/**
 *	水波功能
 */
var Water = {
	VER: "1.0.0",//版本号
	_loader : null,//载入
	
	__stage : null,//场景
	__loading: null,//载入动画
	
	__water: null,//水
	
	_vertexes: null,//波动数组
	_diffPt: null,
	_autoDiff: 0,
	_offset: 0,
	
	CREST: 15,
	VERTEX_NUM : 250,
	HEAD_IMG_MAX_HEIGHT : 1000,
	
	OUT_EXT : "image/jpeg",
	/**
	 *	初始化
	 */
	init : function(){
		Water.__stage = new createjs.Stage("waterCanvas");//场景
		createjs.Ticker.setFPS(60);//帧频
		createjs.Ticker.addEventListener("tick", Water.__stage);//按照帧频更新
		Water.__water = new createjs.Shape();
		Water.__stage.addChild(Water.__water);
		var width = 400;
		var height = 200;
		Water._vertexes = new Array();
		for(var i = 0;i <= Water.VERTEX_NUM; i++){
			Water._vertexes[i] = new Vertex(width / Water.VERTEX_NUM * i, height, height);
		}
		Water._diffPt = new Array();
		for(var i = 0;i <= Water.VERTEX_NUM; i++){
			Water._diffPt[i] = 0;
		}
		createjs.Ticker.addEventListener("tick", function(e){
			Water.wave();
		});
	},
	setOffset: function(offset){
		var cur = Water.VERTEX_NUM / 2 + offset;
		if(cur < 0) cur = 0;
		if(cur > Water.VERTEX_NUM) cur = Water.VERTEX_NUM;
		Water._offset = Math.floor(cur);
		Water._autoDiff = 1000;
	},
	wave: function(){
		Water._autoDiff -= Water._autoDiff * 0.9;
		Water._diffPt[Water._offset] = Water._autoDiff;
		for(var i=Water._offset-1;i>0;i--){
			var d = Water._offset-i;
			if(d > Water.CREST) d = Water.CREST;
			Water._diffPt[i] -= (Water._diffPt[i]-Water._diffPt[i+1])*(1-0.01*d);
		}
		for(var i=Water._offset+1;i<Water.VERTEX_NUM;i++){
			var d = i-Water._offset;
			if(d > Water.CREST) d = Water.CREST;
			Water._diffPt[i] -= (Water._diffPt[i]-Water._diffPt[i-1])*(1-0.01*d);
		}
				
		for(var k in Water._vertexes){
			Water._vertexes[k].updateY(Water._diffPt[k]);
		}
		
		var g = new createjs.Graphics();
		g.beginFill("#6ca0f6").moveTo(0, 400)
		for(var k in Water._vertexes){
			g.lineTo(Water._vertexes[k].x, Water._vertexes[k].y);
		}
		g.lineTo(400, 400).lineTo(0, 400);
		Water.__water.graphics = g;
	},
	update: function(){
		
	}
	
};


function Vertex(x,y,baseY){
	this.baseY = baseY;
	this.x = x;
	this.y = y;
	this.vy = 0;
	this.targetY = 0;
	this.friction = 0.15;
	this.deceleration = 0.95;
}
		
Vertex.prototype.updateY = function(diffVal){
	this.targetY = diffVal + this.baseY;
	this.vy += this.targetY - this.y
	this.y += this.vy * this.friction;
	this.vy *= this.deceleration;
}
