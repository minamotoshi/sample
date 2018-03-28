/****************************************************************************
*	@Copyright(c)	2016,保定无双软件
*	@desc	声波
*	@date	2017-2-22
*	@author	minamoto
*	@E-mail	jiangtai@wushuang.me
*	@file	js/Sonic.class.js
*	@modify	null
******************************************************************************/
Sonic = {};
Sonic.VER = "1.0.0";

Sonic.Event = {
	START:	"gameStart",
	OVER:	"gameOver",
	CLEAR:	"gameClear"
};

/**
 *	预先加载
 */
Sonic.Preload = {
	_queue : null,	//loder
	_images : [	//图片组
		{id:"game", src:"cloth.jpg"}
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
 *	主类，继承create.Stage
 *	@param	canvas	主体或者名称
 */
Sonic.main = function(canvas){
	var _this = this;
	
	var FPS = 60;	//帧频
	
	var __game = null;	//游戏载体

	var _data = [],	//数据
		_row = 3,
		_col = 3;
		
	/**
	 *	游戏初始化
	 */
	_this.init = function(canvas){
		_this.Stage_constructor(canvas);//继承stage
		createjs.Ticker.setFPS = FPS;	//帧频
		createjs.Ticker.addEventListener('tick', _this);	//按照帧频更新舞台
		createjs.Touch.enable(_this);	//启用tauch
		__game = new createjs.Container();
		_this.addChild(__game);
	};
	/**
	 *	游戏开始
	 */
	_this.start = function(){
		var bg = new createjs.Shape();
		bg.graphics.beginStroke("red").beginFill("blue").drawRect(20, 20, 100, 50);
		__game.addChild(bg);
	};
	/**
	 *	打乱
	 */
	_this.upset = function (){
		var blocks = __game.getChildByName("blocks");
		for(var k in blocks.children){
			if(isNaN(k)) continue;
			var block = blocks.children[k];
			block.borderShow();
			block.on(Jigsaw.Event.BLOCK_DRAG_START, dragStart);
			block.on(Jigsaw.Event.BLOCK_DRAG_END, dragEnd);
			block.on(Jigsaw.Event.BLOCK_BINGO, blockBingo);
		}
		var len = blocks.numChildren;
		for(var n = 0; n< 10; n++){
			var index1 = Math.floor(Math.random() * len);
			var index2 = Math.floor(Math.random() * len);
			swipeMove(blocks.getChildAt(index1), blocks.getChildAt(index2), true);
		}
	};
	/**
	 *	游戏结束
	 */
	_this.over = function(){
		var blocks = __game.getChildByName("blocks");
		for(var k in blocks.children){
			if(isNaN(k)) continue;
			var block = blocks.children[k];
			block.borderHide();
			block.relocate(true);
		}
	}
	/**
	 *	检测
	 */
	_this.check = function(){
		var blocks = __game.getChildByName("blocks");
		var bingo = true;
		for(var k in blocks.children){
			if(isNaN(k)) continue;
			var block = blocks.children[k];
			if(!block.isCorrect()){
				bingo = false;
				break;
			}
		}
		return bingo;
	};
	/**
	 *	拖动开始
	 */
	function dragStart(e){
		var block = e.currentTarget;
		var blocks = __game.getChildByName("blocks");
		blocks.setChildIndex(block, blocks.numChildren - 1);
	}
	/**
	 *	block松开事件，启用交换
	 */
	function dragEnd(e){
		var x = e.data.x,
			y = e.data.y;
		var blockDragged = e.currentTarget;
		var blocks = __game.getChildByName("blocks");
		for(var k in blocks.children){
			if(isNaN(k)) continue;
			var block = blocks.children[k];
			if(block.hit(x, y)){
				swipeMove(blockDragged, block);
				return;
			}
		}
		blockDragged.relocate();
	}
	/**
	 *	交换
	 *	@param	dragged
	 *	@param	stroked
	 */
	function swipeMove(dragged, stroked, strict){
		var row = dragged.getRow();
		var col = dragged.getCol();
		dragged.setRow(stroked.getRow());
		dragged.setCol(stroked.getCol());
		stroked.setRow(row);
		stroked.setCol(col);
		if(strict){
			dragged.relocate(true);
			stroked.relocate(true);
			return;
		}
		var blocks = __game.getChildByName("blocks");
		blocks.setChildIndex(stroked, blocks.numChildren - 1);
		dragged.relocate();
		stroked.relocate(false, 500);
	}
	/**
	 *	block正确
	 */
	function blockBingo(e){
		if(_this.check()){
			_this.over();
			var evt = new createjs.Event(Jigsaw.Event.BINGO);
			_this.dispatchEvent(evt);	
		}
	}
	
	this.init(canvas);
};
Sonic.main.prototype = createjs.extend(Sonic.main, createjs.Stage);
Sonic.main = createjs.promote(Sonic.main, "Stage");

/**
 *	录音
 *	@param	stream
 *	@param	config
 */
Sonic.Recorder = function(stream, config){
	var _this = this;
	
	var _audioInput = null,
		_recorder = null,
		_audioData = null;
		
	
	/**
	 *	初始化
	 */
	_this.init = function(stream, config){
		_this.Container_constructor();
		config = config || {};
		config.sampleBits = config.sampleBits || 8;	//采样数位 8, 16  
		config.sampleRate = config.sampleRate || (44100 / 6);	//采样率(1/6 44100)  
		
		//创建一个音频环境对象  
		audioContext = window.AudioContext || window.webkitAudioContext;
		var context = new audioContext();
		
		//将声音输入这个对像
		_audioInput = context.createMediaStreamSource(stream);
		//设置音量节点  
		var volume = context.createGain();
		_audioInput.connect(volume);
		//创建缓存，用来缓存声音
		var bufferSize = 4096;
		// 创建声音的缓存节点，createScriptProcessor方法的
		// 第二个和第三个参数指的是输入和输出都是双声道。
		_recorder = context.createScriptProcessor(bufferSize, 2, 2);
		
		_audioData = {  
			size: 0,	//录音文件长度
			buffer: [],	//录音缓存
			inputSampleRate: context.sampleRate,	//输入采样率
			inputSampleBits: 16,	//输入采样数位 8, 16
			outputSampleRate: config.sampleRate,	//输出采样率
			oututSampleBits: config.sampleBits,	//输出采样数位 8, 16
			input: function (data) {  
				this.buffer.push(new Float32Array(data));  
				this.size += data.length;  
			},
			compress: function () { //合并压缩
				//合并  
				var data = new Float32Array(this.size);  
				var offset = 0;  
				for (var i = 0; i < this.buffer.length; i++) {  
					data.set(this.buffer[i], offset);  
					offset += this.buffer[i].length;  
				}
				//压缩
				var compression = parseInt(this.inputSampleRate / this.outputSampleRate);
				var length = data.length / compression;
				var result = new Float32Array(length);
				var index = 0, j = 0;
				while (index < length) {
					result[index] = data[j];
					j += compression;
					index++;
				}  
				return result;
			},
			encodeWAV: function () {  
				var sampleRate = Math.min(this.inputSampleRate, this.outputSampleRate);  
				var sampleBits = Math.min(this.inputSampleBits, this.oututSampleBits);  
				var bytes = this.compress();  
				var dataLength = bytes.length * (sampleBits / 8);  
				var buffer = new ArrayBuffer(44 + dataLength);  
				var data = new DataView(buffer);  

				var channelCount = 1;//单声道  
				var offset = 0;  

				var writeString = function (str) {  
					for (var i = 0; i < str.length; i++) {  
						data.setUint8(offset + i, str.charCodeAt(i));  
					}
				};
				
				// 资源交换文件标识符   
				writeString('RIFF'); offset += 4;  
				// 下个地址开始到文件尾总字节数,即文件大小-8   
				data.setUint32(offset, 36 + dataLength, true); offset += 4;  
				// WAV文件标志  
				writeString('WAVE'); offset += 4;  
				// 波形格式标志   
				writeString('fmt'); offset += 4;  
				// 过滤字节,一般为 0x10 = 16   
				data.setUint32(offset, 16, true); offset += 4;  
				// 格式类别 (PCM形式采样数据)   
				data.setUint16(offset, 1, true); offset += 2;  
				// 通道数   
				data.setUint16(offset, channelCount, true); offset += 2;  
				// 采样率,每秒样本数,表示每个通道的播放速度   
				data.setUint32(offset, sampleRate, true); offset += 4;  
				// 波形数据传输率 (每秒平均字节数) 单声道×每秒数据位数×每样本数据位/8   
				data.setUint32(offset, channelCount * sampleRate * (sampleBits / 8), true); offset += 4;  
				// 快数据调整数 采样一次占用字节数 单声道×每样本的数据位数/8   
				data.setUint16(offset, channelCount * (sampleBits / 8), true); offset += 2;  
				// 每样本数据位数   
				data.setUint16(offset, sampleBits, true); offset += 2;  
				// 数据标识符   
				writeString('data'); offset += 4;  
				// 采样数据总数,即数据总大小-44   
				data.setUint32(offset, dataLength, true); offset += 4;  
				// 写入采样数据   
				if (sampleBits === 8) {  
					for (var i = 0; i < bytes.length; i++, offset++) {  
						var s = Math.max(-1, Math.min(1, bytes[i]));  
						var val = s < 0 ? s * 0x8000 : s * 0x7FFF;  
						val = parseInt(255 / (65535 / (val + 32768)));  
						data.setInt8(offset, val, true);  
					}  
				} else {  
					for (var i = 0; i < bytes.length; i++, offset += 2) {  
						var s = Math.max(-1, Math.min(1, bytes[i]));  
						data.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);  
					}  
				}
				return new Blob([data], { type: 'audio/wav' });  
			}
		};
		
		//音频采集  
		_recorder.onaudioprocess = function (e) {  
			_audioData.input(e.inputBuffer.getChannelData(0));  
			//record(e.inputBuffer.getChannelData(0));  
		}; 
	};
	//开始录音  
	_this.start = function () {  
		_audioInput.connect(_recorder);  
		_recorder.connect(context.destination);  
	};
	
	//停止  
	_this.stop = function () {  
		_recorder.disconnect();  
	};
	
	//获取音频文件  
	_this.getBlob = function () {  
		_this.stop();  
		return _audioData.encodeWAV();  
	};

	//回放  
	_this.play = function (audio) {  
		audio.src = window.URL.createObjectURL(_this.getBlob());  
	};
	
	_this.init(stream, config);
};
Sonic.Recorder.prototype = createjs.extend(Sonic.Recorder, createjs.Container);
Sonic.Recorder = createjs.promote(Sonic.Recorder, "Container");


Sonic.Recorder.throwError = function (message) {
	throw new function () { this.toString = function () { return message; };};
};
Sonic.Recorder.canRecording = (navigator.getUserMedia != null);
Sonic.Recorder.get = function (callback, config) {  
	if (callback) {  
		if (navigator.getUserMedia) {  
			navigator.getUserMedia(
				{ audio: true }, //只启用音频  
				function (stream) {
					var rec = new Sonic.Recorder(stream, config);
					callback(rec);
				},
				function (error) {
					console.log(error)
					switch (error.code || error.name) {
						case 'PERMISSION_DENIED':  
						case 'PermissionDeniedError':  
							Sonic.Recorder.throwError('用户拒绝提供信息。');  
							break;  
						case 'NOT_SUPPORTED_ERROR':  
						case 'NotSupportedError':  
							Sonic.Recorder.throwError('<a href="http://www.it165.net/edu/ewl/" target="_blank" class="keylink">浏览器</a>不支持硬件设备。');  
							break;  
						case 'MANDATORY_UNSATISFIED_ERROR':  
						case 'MandatoryUnsatisfiedError':  
							Sonic.Recorder.throwError('无法发现指定的硬件设备。');  
							break;  
						default:  
							Sonic.Recorder.throwError('无法打开麦克风。异常信息:' + (error.code || error.name));  
							break;  
					}
				}
			);
		} else {
			Sonic.Recorder.throwErr('当前<a href="http://www.it165.net/edu/ewl/" target="_blank" class="keylink">浏览器</a>不支持录音功能。'); return;  
		}
	}
};


/**
 *	单独块
 *	@param	image	图片
 *	@param	row	行
 *	@param	col	列
 */
Sonic.Block = function(image, row, col){
	var _this = this;
	_this.Container_constructor();	//构造
	
	var _width = 0,	//宽高
		_height = 0;
	var _x = 0,	//元素鼠标位置
		_y = 0;
	var _row = 0,//现在所在行
		_col = 0;//现在所在列
	var _correctRow = 0,//正确的行
		_correctCol = 0;//正确的列
	var _dragging = false;	//正在拖动
	var RELOCATE_DURATION = 100;	//运动间隔
	var INCREASE = 0.1;	//增幅
	/**
	 *	初始化
	 */
	_this.init = function(image, row, col){
		_width = image.width;
		_height = image.height;
		var bit = new createjs.Bitmap();
		bit.image = image;
		_row = _correctRow = row;
		_col = _correctCol = col;
		var shape = new createjs.Shape();
		shape.name = "border";
		shape.graphics.beginStroke("#00ffff").drawRect(0, 0, _width, _height);
		_this.addChild(bit, shape);
		_this.borderShow();
	};
	/**
	 *	边框显示
	 */
	_this.borderShow = function(){
		_this.getChildByName("border").visible = true;
		_this.on("mousedown", mousedown);
		_this.on("pressmove", pressmove);
		_this.on("pressup", pressup);
	};
	/**
	 *	边框隐藏
	 */
	_this.borderHide = function(){
		_this.getChildByName("border").visible = false;
		_this.removeAllEventListeners();
	};
	/**
	 *	根据行列重定位置
	 *	@param	strict	直接变化
	 *	@param	duration	间隔
	 */
	_this.relocate = function(strict, duration){
		if(strict){
			_this.x = _col * _width;
			_this.y = _row * _height;
			_this.scaleX = _this.scaleY = 1.0;
		}else{
			if(!duration) duration = RELOCATE_DURATION;
			createjs.Tween.get(_this, {override:true})
				.to({x:_col * _width, y:_row * _height, scaleX:1.0, scaleY:1.0}, duration, createjs.Ease.sineInOut)
				.call(relocateEnd);
		}
	};
	/**
	 *	定位完毕
	 *	@param	e
	 */
	function relocateEnd(e){
		if(_this.isCorrect()){ 
			var evt = new createjs.Event(Jigsaw.Event.BLOCK_BINGO);
			_this.dispatchEvent(evt);
		}
	}
	/**
	 *	设置行
	 *	@param	row
	 */
	_this.setRow = function(row){
		_row = row;
	};
	/**
	 *	设置列
	 *	@param	col
	 */
	_this.setCol = function(col){
		_col = col;
	};
	/**
	 *	获取行
	 *	@param	row
	 */
	_this.getRow = function(row){
		return _row;
	};
	/**
	 *	设置列
	 *	@param	col
	 */
	_this.getCol = function(col){
		return _col;
	};
	/**
	 *	是否正确
	 */
	_this.isCorrect = function(){
		return _row == _correctRow && _col == _correctCol;
	};
	/**
	 *	是否拖动中
	 */
	_this.isDragging = function(){
		return _dragging;
	};
	/**
	 *	碰撞检测
	 */
	_this.hit = function(x, y){
		if(_dragging) false;
		var p = this.globalToLocal(x, y);
		return _this.hitTest(p.x, p.y);
	};
	/**
	 *	鼠标按下
	 */
	function mousedown(e){
		e.preventDefault();
		e.stopPropagation();
		_this.scaleX = _this.scaleY = 1 + INCREASE;
		var offsetX = _width * INCREASE / 4;
		var offsetY = _height * INCREASE / 4;
		_this.x -= offsetX;
		_this.y -= offsetY;
		_dragging = true;
		var p = _this.globalToLocal(e.stageX, e.stageY);
		_x = p.x + offsetX;
		_y = p.y + offsetY;
		var evt = new createjs.Event(Jigsaw.Event.BLOCK_DRAG_START);
		evt.data = {x:e.stageX, y:e.stageY};
		_this.dispatchEvent(evt);
	}
	/**
	 *	按下拖动
	 */
	function pressmove(e){
		e.preventDefault();
		e.stopPropagation();
		_this.x = e.stageX - _x;
		_this.y = e.stageY - _y;
	}
	/**
	 *	鼠标抬起
	 */
	function pressup(e){
		_dragging = false;
		var evt = new createjs.Event(Jigsaw.Event.BLOCK_DRAG_END);
		evt.data = {x:e.stageX, y:e.stageY};
		this.dispatchEvent(evt);
	}
	_this.init(image, row, col);
};
Sonic.Block.prototype = createjs.extend(Sonic.Block, createjs.Container);
Sonic.Block = createjs.promote(Sonic.Block, "Container");

