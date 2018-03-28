function Menu(obj) {
	this.margin = 5;
	this.initNextBg(obj);
	this.initScoreBg(obj);
}

Menu.prototype.initNextBg = function(obj) {
	var posX = this.margin + obj.bg.rightX;
	var posY = obj.bg.margin;
	
	var shape = new createjs.Shape();
	var border = 2;
	var width = obj.clientWidth - obj.bg.rightX - this.margin * 2;
	var height = 200;
	shape.graphics.beginFill("#9393FF").drawRect(posX, posY, width, height);
	shape.graphics.beginFill("#ECECFF").drawRect(posX + border, posY + border, width - border * 2, height - border * 2);
	obj.stage.addChild(shape);
	this.nexgBgShape = shape;
	this.nextBgRightY = posY + height;
	this.nextBgStartX = posX + border;
	this.nextBgStartY = posY + border;
	// 下一个方块位置
	this.nextContainerX = posX + border + 100;
	this.nextContainerY = posY + border + 40;
}

Menu.prototype.initScoreBg = function(obj) {
	var posX = this.margin + obj.bg.rightX;
	var posY = this.nextBgRightY + this.margin;
	
	var shape = new createjs.Shape();
	var border = 2;
	var width = obj.clientWidth - obj.bg.rightX - this.margin * 2;
	var height = 200;
	shape.graphics.beginFill("#9393FF").drawRect(posX, posY, width, height);
	shape.graphics.beginFill("#ECECFF").drawRect(posX + border, posY + border, width - border * 2, height - border * 2);
	obj.stage.addChild(shape);
	this.nexgScoreShape = shape;
	this.scoreTopY = posY;
	this.scoreRightY = posY + height;
}
