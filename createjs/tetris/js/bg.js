function Bg(obj) {
	this.margin = 5;
	this.initBackground(obj);
	this.initContainer(obj);
}

Bg.prototype.initBackground = function(obj) {
	var bgImg = obj.preload.getResult("bg");
	var bg = new createjs.Bitmap(bgImg);
	bg.scaleX = obj.clientWidth / bgImg.width;
	bg.scaleY = obj.clientHight / bgImg.height;
	obj.stage.addChild(bg);
}

Bg.prototype.initContainer = function(obj) {
	var shape = new createjs.Shape();
	var posX, posY;
	posX = posY = this.margin;
	var border = 2;
	var width = config.cols * config.pixel + border*2;
	var height = config.rows * config.pixel + border*2;
	shape.graphics.beginFill("#9393FF").drawRect(posX, posY, width, height);
	shape.graphics.beginFill("#ECECFF").drawRect(posX + border, posY + border, width - border * 2, height - border * 2);
	obj.stage.addChild(shape);
	this.rightX = posX + width;
	this.rightY = posY + height;
	this.containerStartX = posX + border;
	this.containerStopX = posX + width - border;
	this.containerStartY = posY + border;
	this.containerStopY = posY + height - border;
}
