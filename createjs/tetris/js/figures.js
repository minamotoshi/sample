function Figures(obj) {
	this.thisFigure = null;
	this.nextFigure = null;
	lineDataContainer = null;
	this.border = 2;
	this.hasOneRunning = false;
	this.runSpeed = 10;
	this.runTimes = 0;
	this.gameOver = false; // 停止游戏
	this.runCount = 0; // 下落了几个方块
	this.color = ['', '#00E3E3', '#0000E3', '#D26900', '#F9F900', '#8CEA00', '#D200D2', '#FF0000', '#984B4B'];
	this.data = [
		[
			[0, 1, 0],
			[1, 1, 1]
		],
		[
			[0, 2, 2],
			[2, 2, 0]
		],
		[
			[3, 3, 0],
			[0, 3, 3]
		],
		[
			[4, 4],
			[4, 4]
		],
		[
			[5, 0],
			[5, 0],
			[5, 5]
		],
		[
			[0, 6],
			[0, 6],
			[6, 6]
		],
		[
			[7],
			[7],
			[7],
			[7]
		],
		[
			[8, 8, 8],
			[0, 8, 0]
		]
	];
	this.maxLength = 0;
	for (var i in this.data) {
		var data = this.data[i];
		if (this.maxLength < data.length)
			this.maxLength = data.length;
		if (this.maxLength < data[0].length)
			this.maxLength = data[0].length;
	}
	this.lineData = [];
	
	this.initLineData(obj);
	this.bindEvents(obj);
}

Figures.prototype.initLineData = function(obj) {
	for (var i=0; i<config.rows; i++) {
		this.lineData[i] = [];
		for (var j=0; j<config.cols; j++) {
			this.lineData[i][j] = 0;
		}
	}
}

Figures.prototype.bindEvents = function(obj) {
	var self = this;
	window.addEventListener('keydown', function(event){
		if (self.gameOver) return;
		var e = event || window.event;
		var keyCode = e.keyCode || e.which;
		if (!self.thisFigure) return;
		switch (keyCode) {
			case 37: // left
				if (self.checkLeftLineData(obj)) {
					self.thisFigure.container.colIndex--;
					self.thisFigure.container.x -= config.pixel;
					self.thisFigure.container.posX = self.thisFigure.container.x;
				}
				break;
			case 39: // right
				if (self.checkRightLineData(obj)) {
					self.thisFigure.container.colIndex++;
					self.thisFigure.container.x += config.pixel;
					self.thisFigure.container.posX = self.thisFigure.container.x;
				}
				break;
			case 40: // down
				if (self.checkDownLineData(obj)) {
					self.thisFigure.container.rowIndex--;
					self.thisFigure.container.y += config.pixel;
					self.thisFigure.container.posY = self.thisFigure.container.y;
				}
				break;
				
			case 38: // up
				self.convertWithLineData(obj);
				break;
			default:
				break;
		}
	});
}
	
Figures.prototype.run = function(obj) {
	if (this.gameOver) {
		return;
	}
	if (!this.hasOneRunning) { // 出现一个新的
		this.hasOneRunning = true;
		this.showRandFigure(obj);
	} else {
		this.modifyRandFigure(obj);
	}
}

Figures.prototype.modifyRandFigure = function(obj) {
	if (this.runTimes++ < this.runSpeed + 30) {
		return;
	} else {
		this.runTimes = 0;
	}
	if (this.checkDownLineData(obj)) {
		this.thisFigure.container.y += config.pixel;
		this.thisFigure.container.rowIndex--;
	}
}

Figures.prototype.updateLineData = function(obj) {
	var data = this.thisFigure.data;
	var rows = data.length;
	var cols = data[0].length;
	var colIndex = this.thisFigure.container.colIndex;
	var rowIndex = this.thisFigure.container.rowIndex;
	for (var i=0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			if (data[i][j]) {
				var lX = rowIndex - i;
				var lY = colIndex + j;
				if (lX >= config.rows - 1) {
					obj.score.showGameOver(obj);
					this.gameOver = true;
					return;
				}
				this.lineData[lX][lY] = data[i][j];
			}
		}
	}
	var newLineData = [];
	var lines = 0;
	for (var i in this.lineData) {
		for (var j=0; j<this.lineData[i].length; j++) {
			if (!this.lineData[i][j]) {
				newLineData.push(this.lineData[i]);
				break;
			}
		}
		if (j == this.lineData[i].length) { // 满格得分
			lines++;
		} 
	}
	if (lines > 0) {
		obj.score.addLine(lines, this.maxLength);
		for (var i=newLineData.length - 1; i < this.lineData.length; i++) {
			newLineData[i] = [];
			for (var j=0; j<this.lineData[0].length; j++) {
				newLineData[i][j] = 0;
			}
		}
	}
		
	this.lineData = newLineData;
	this.showLineDataContainer(obj);
	// for (var i in this.lineData) {
	// 	var d = this.lineData[i];
	// 	console.log(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8],d[9]);
	// }
	
}

Figures.prototype.showLineDataContainer = function(obj) {
	var lineData = this.lineData;
	var container = new createjs.Container();
	for (var i in lineData) {
		for (var j in lineData[i]) {
			var colorIndex = lineData[i][j];
			if (!colorIndex) continue;
			var shape = new createjs.Shape();
			var posX = obj.bg.containerStartX + parseInt(j) * config.pixel;
			var posY = obj.bg.containerStopY - (parseInt(i)+1) * config.pixel;
			var width = config.pixel;
			var height = config.pixel;
			var border = this.border;
			shape.graphics.beginFill("#000000").drawRect(posX, posY, width, height);
			shape.graphics.beginFill(this.color[colorIndex]).drawRect(posX + border, posY + border, width - border * 2, height - border * 2);
			container.addChild(shape);
		}
	}
	if (this.lineDataContainer) {
		obj.stage.removeChild(this.lineDataContainer);
	}
	this.lineDataContainer = container;
	obj.stage.addChild(this.lineDataContainer);
	obj.stage.removeChild(this.thisFigure.container);
}

Figures.prototype.dataBeCovered = function(newFigure) {
	var data = newFigure.data;
	var baseRowIndex = newFigure.container.rowIndex;
	var baseColIndex = newFigure.container.colIndex;
	for (var i in data) {
		for (var j in data[i]) {
			var rowIndex = baseRowIndex - parseInt(i);
			var colIndex = baseColIndex + parseInt(j);
			if (this.lineData[rowIndex][colIndex]) {
				return true;
			}
		}
	}
}

Figures.prototype.convertWithLineData = function(obj) {
	var figure = this.thisFigure;
	var rowIndex = figure.container.rowIndex;
	var colIndex = figure.container.colIndex;
	var data = figure.data;
	var rows = data.length;
	var cols = data[0].length;
	var newData = [];
	for (var j = 0; j < cols;j++) {
		var tmpArr = [];
		for (var i = rows - 1; i >= 0; i--) {
			tmpArr.push(data[i][j]);
		}
		newData[j] = tmpArr;
	}
	var container = this.createFigureContainer(newData);
	container = this.setPositionByData(obj, figure, container, data, newData);
	var newFigure = this.getFigureByContainer(container, newData, figure.index);
	if (this.dataBeCovered(newFigure)) {
		return;
	}
	this.thisFigure = newFigure;
	obj.stage.removeChild(figure.container);
	obj.stage.addChild(newFigure.container);
}

Figures.prototype.setPositionByData = function(obj, figure, container, data, newData) {
	var minRowIndex = newData.length - 1;
	var maxColIndex = config.cols - newData[0].length;
	container.rowIndex = figure.container.rowIndex - parseInt((data.length - newData.length) / 2);
	container.minRowIndex = minRowIndex;
	if (container.rowIndex >= config.rows - 1) {
		container.rowIndex = config.rows - 1;
		container.minRowIndex = minRowIndex;
	} else if (container.rowIndex < minRowIndex) {
		container.rowIndex = minRowIndex;
	}
	
	container.colIndex = figure.container.colIndex + parseInt((data[0].length - newData[0].length) / 2);
	container.maxColIndex = maxColIndex;
	if (container.colIndex > maxColIndex) {
		container.colIndex = maxColIndex;
	} else if (container.colIndex < 0) {
		container.colIndex = 0;
	}
	container.x = container.posX = obj.bg.containerStartX + container.colIndex * config.pixel;
	container.y = container.posY = obj.bg.containerStartY + (config.rows - 1 - container.rowIndex ) * config.pixel;
	return container;
}

Figures.prototype.checkRightLineData = function(obj) {
	var figure = this.thisFigure;
	var rowIndex = figure.container.rowIndex;
	var colIndex = figure.container.colIndex;
	if (colIndex >= figure.container.maxColIndex) {
		return false;
	}
	var rows = figure.data.length;
	var cols = figure.data[0].length;
	var rightIndex = figure.rightIndex;
	var baseIndex = figure.container.colIndex;
	var m = 0;
	for (var i = rowIndex; i >= rowIndex - rows + 1; i--) {
		var index = m++;
		if (rightIndex[index] < 0) continue; 
		if (baseIndex + rightIndex[index] >= config.cols - 1) return false; // 到最右边了
		var rightColIndex = baseIndex + rightIndex[index] + 1;
		if (this.lineData[i][rightColIndex]) {
			return false; // 右边有方格了
		}
	}
	return true;
}

Figures.prototype.checkLeftLineData = function(obj) {
	var figure = this.thisFigure;
	var rowIndex = figure.container.rowIndex;
	var colIndex = figure.container.colIndex;
	if (colIndex <= 0) {
		return false;
	}
	var rows = figure.data.length;
	var cols = figure.data[0].length;
	var leftIndex = figure.leftIndex;
	var baseIndex = figure.container.colIndex;
	var m = 0;
	for (var i = rowIndex; i >= rowIndex - rows + 1; i--) {
		var index = m++;
		if (leftIndex[index] >= cols) continue; 
		if (baseIndex + leftIndex[index] == 0) return false; // 到左边了
		var leftColIndex = baseIndex - 1 + leftIndex[index];
		if (this.lineData[i][leftColIndex]) return false; // 左边有方格了
	}
	return true;
}

// 往下落的时候检查是否到底
Figures.prototype.checkDownLineData = function(obj) {
	var figure = this.thisFigure;
	var rows = figure.data.length;
	var cols = figure.data[0].length;
	var bottomIndex = figure.bottomIndex;
	var rowIndex = figure.container.rowIndex;
	var colIndex = figure.container.colIndex;
	var runningFlag = true;
	if (rowIndex <= figure.container.minRowIndex) {
		runningFlag = false;
	} else {
		for (var j = colIndex; j <= colIndex + cols - 1; j++) {
			var index = j - colIndex;
			if (bottomIndex[index] == -1) continue; // 这一列没有实体方块
			var nextLineIndex = rowIndex - bottomIndex[index] - 1;
			if (nextLineIndex < 0) {
				runningFlag = false;
				break;
			}
			if (this.lineData[nextLineIndex][j]) { // 下一行的这一列已经有方块
				runningFlag = false;
				break;
			}
		}
	}
	
	if (runningFlag == false) {
		this.hasOneRunning = false;
		this.updateLineData(obj);
		this.runCount++;
		if (this.runCount > 99999999) 			
			this.gameOver = true;
		return false; // 结束往下运动
	}
	return true;
}
// 出现一个随机方块和下一个随机方块
Figures.prototype.showRandFigure = function(obj) {
	if (this.thisFigure == null) {
		this.thisFigure = this.getRandFigure(obj);
	} else {
		if (this.nextFigure) {
			obj.stage.removeChild(this.nextFigure.container);
		}
		this.thisFigure = this.nextFigure;
	}
	this.thisFigure.container.x = this.thisFigure.container.posX;
	this.thisFigure.container.y = this.thisFigure.container.posY;
	obj.stage.addChild(this.thisFigure.container);
	
	this.nextFigure = this.getRandFigure(obj);
	this.nextFigure.container.x = obj.menu.nextContainerX;
	this.nextFigure.container.y = obj.menu.nextContainerY;
	obj.stage.addChild(this.nextFigure.container);
}

// 获取一个随机方块
Figures.prototype.getRandFigure = function(obj) {
	var index = Math.floor(Math.random() * this.data.length);
	var data  = this.data[index];
	var container = this.getOneFigureContainer(data, index, obj);
	return this.getFigureByContainer(container, data, index);
}

Figures.prototype.getFigureByContainer = function(container, data, index) {
	var bottomIndex = [];
	// 计算每一列最下方格子的位置
	for (var j=0; j<data[0].length; j++) {
		for (var i=data.length-1; i>=0; i--) {
			if (data[i][j])
				break;
		}
		bottomIndex[j] = i;
	}
	var leftIndex = [];
	// 计算每一行左侧方格位置
	for (var i = 0; i < data.length; i++) {
		for (var j = 0; j < data[0].length; j++) {
			if (data[i][j]) {
				break;
			}
		}
		leftIndex[i] = j;
	}
	var rightIndex = [];
	// 计算每一行右侧方格位置
	for (var i = 0; i < data.length; i++) {
		for (var j = data[0].length - 1; j >= 0; j--) {
			if (data[i][j]) {
				break;
			}
		}
		rightIndex[i] = j;
	}
	return {
		index: index,
		data: data,
		container: container,
		leftIndex: leftIndex,
		rightIndex: rightIndex,
		bottomIndex: bottomIndex,
	};
}
// 获取方块出现的随机位置
Figures.prototype.getRandPos = function(obj, data) {
	var randColIndex = Math.floor(Math.random() * (config.cols - 1));
	var minRowIndex = data.length - 1;
	var maxColIndex = config.cols - data[0].length;
	if (randColIndex > maxColIndex) {
		randColIndex = maxColIndex;
	}
	var posX = obj.bg.containerStartX + randColIndex * config.pixel;
	var posY = obj.bg.containerStartY;
	return {
		x:posX, 
		y:posY, 
		colIndex: randColIndex, 
		rowIndex: config.rows - 1,
		maxColIndex: maxColIndex,
		minRowIndex: minRowIndex
	};
}

// 根据数据、方块索引获取方块的具体形状
Figures.prototype.getOneFigureContainer = function(data, index, obj) {
	var pos   = this.getRandPos(obj, data);
	var container = this.createFigureContainer(data);
	
	container.rowIndex = pos.rowIndex;
	container.colIndex = pos.colIndex;
	container.maxColIndex = pos.maxColIndex;
	container.minRowIndex = pos.minRowIndex;
	container.posX = pos.x; // 记录产生的位置
	container.posY = pos.y; // 记录产生的位置
	return container;
}

Figures.prototype.createFigureContainer = function(data) {
	var container = new createjs.Container();
	for (var i in data) {
		for (var j in data[i]) {
			var colorIndex = data[i][j];
			if (!colorIndex) {
				continue;
			}
			var posX = j * config.pixel;
			var posY = i * config.pixel;
			var shape = new createjs.Shape();
			var border = this.border;
			var width = config.pixel;
			var height = config.pixel;
			shape.graphics.beginFill("#000000").drawRect(posX, posY, width, height);
			shape.graphics.beginFill(this.color[colorIndex]).drawRect(posX + border, posY + border, width - border * 2, height - border * 2);
			container.addChild(shape);
		}
	}
	return container;
}