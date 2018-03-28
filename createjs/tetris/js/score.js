function Score(obj) {
	this.marginX = 20;
	this.marginY = 40;
	this.score = 0;
	this.lines = 0;
	this.gameOverContainer = null;
	this.scoreMap = {
		0: 0,
		1: 10, // 消除1行得10分
		2: 30, // 消除2行得30分
		3: 60, 
		4: 100 
	}
	this.initScore(obj);
}

Score.prototype.initScore = function(obj) {
	var posX = this.marginX + obj.bg.rightX + obj.menu.margin;
	var posY = obj.menu.scoreTopY + this.marginY;
	var text = new createjs.Text("行数：", "20px Arial", "#000000");
	text.x = posX;
	text.y = posY;
	obj.stage.addChild(text);
	
	
	var posX = this.marginX + obj.bg.rightX + obj.menu.margin + 80;
	var posY = obj.menu.scoreTopY + this.marginY;
	var text = new createjs.Text("0", "20px Arial", "#000000");
	text.x = posX;
	text.y = posY;
	obj.stage.addChild(text);
	this.lineText = text;
	
	var posX = this.marginX + obj.bg.rightX + obj.menu.margin;
	var posY = obj.menu.scoreTopY + this.marginY + 50;
	var text = new createjs.Text("得分：", "20px Arial", "#000000");
	text.x = posX;
	text.y = posY;
	obj.stage.addChild(text);
	
	
	var posX = this.marginX + obj.bg.rightX + obj.menu.margin + 80;
	var posY = obj.menu.scoreTopY + this.marginY + 50;
	var text = new createjs.Text("0", "20px 微软雅黑", "#000000");
	text.x = posX;
	text.y = posY;
	obj.stage.addChild(text);
	this.scoreText = text;
}

Score.prototype.addLine = function(lines, maxLength) {
	var score = this.scoreMap[lines % maxLength];
	this.lines += lines;
	this.lineText.text = this.lines;
	this.score += score;
	this.scoreText.text = this.score;
}

Score.prototype.showGameOver = function(obj) {
	var container = new createjs.Container();
	var border = 2;
	var posX = 100;
	var posY = 80;
	var width = 400;
	var height = 300;
	
	var shape = new createjs.Shape();
	shape.graphics.beginFill("#000000").drawRect(0, 0, obj.clientWidth, obj.clientHight);
	shape.alpha = 0.5;
	container.addChild(shape);
	
	shape = new createjs.Shape();
	shape.graphics.beginFill("#750000").drawRect(posX, posY, width, height);
	shape.graphics.beginFill("#E0E0E0").drawRect(posX + border, posY + border, width - border * 2, height - border * 2);
	container.addChild(shape);
	
	var text = new createjs.Text("Game Over!", "40px Arial", "red");
	text.x = posX + width / 2 - 100;
	text.y = posY + height / 2 - 30;
	container.addChild(text);
	obj.stage.addChild(container);
	
	this.gameOverContainer = container;
}
