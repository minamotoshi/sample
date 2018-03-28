/**
 *	水波功能
 */
var Water = {
	VER: "1.0.0",//版本号
	_loader : null,//载入
	
	__stage : null,//场景
	__loading: null,//载入动画
	
	__cup: null,//杯子
	__water: null,//水
	__mask: null,//遮罩
	
	_level: 0,//水位
	
	_vertexes: null,//波动数组
	_diffPt: null,
	_autoDiff: 0,
	_offset: 0,
	
	WIDTH: 400,
	HEIGHT: 400,
	
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
		Water.__cup = new createjs.Shape();
		Water.__cup.graphics.beginFill("#ffff00").beginStroke("#000000").moveTo(0, Water.HEIGHT).lineTo(Water.WIDTH, Water.HEIGHT).lineTo(Water.WIDTH, 0).lineTo(0, 0).lineTo(0, Water.HEIGHT);
		Water.__water = new createjs.Shape();
		Water.__water.graphics.beginFill("#0000ff").moveTo(0, Water.HEIGHT).lineTo(Water.WIDTH, Water.HEIGHT).lineTo(Water.WIDTH, 0).lineTo(0, 0).lineTo(0, Water.HEIGHT);
		Water.__mask = new createjs.Shape();
		Water.__mask.graphics.beginFill("#ff0000").moveTo(0, Water.HEIGHT).lineTo(Water.WIDTH, Water.HEIGHT).lineTo(Water.WIDTH, 0).lineTo(50, 50).lineTo(0, Water.HEIGHT);
		Water.__water.mask = Water.__mask;
		//Water.__mask.mask = Water.__water;
		Water.__stage.addChild(Water.__cup, Water.__mask, Water.__water);
	},
	tilt: function(h, v){
		Water.__water.graphics.beginFill("#0000ff").moveTo(0, Water.HEIGHT).lineTo(Water.WIDTH, Water.HEIGHT).lineTo(Water.WIDTH, 0).lineTo(0, 0).lineTo(0, Water.HEIGHT);
		
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
