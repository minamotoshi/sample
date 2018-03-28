var playCanvas = {
	preload: null,
	canvas: null,
	stage: null,
	menu: null,
	clientWidth: 0,
	clientHight: 0,
	progressText: null,
	bg: null,
	menu: null,
	score: null,
	figures: null, 
	initStage: function() {
		this.initStageCSS();
		this.initStageUseCreateJs();
	},
	initStageCSS: function() {
		var canvasDom = $('#' + config.stageId);
		var canvasJsDom = canvasDom.get(0);
		canvasDom.css({
			position: "absolute",
			top: "50%",
			left: "50%",
			background: "black",
			'margin-left': -1 * canvasJsDom.offsetWidth / 2 + "px",
			'margin-top': -1 * 	canvasJsDom.offsetHeight / 2 + "px"
		});
	},
	initStageUseCreateJs: function() {
		var self =this;
		// 创建舞台
		this.stage = new createjs.Stage(config.stageId);
		// 设置帧率
		createjs.Ticker.setFPS(60);
		// 设置监听帧回调，每一帧都会执行
		createjs.Ticker.addEventListener("tick", function(event) {
			self.handleTick(self, event);
		});
		// canvas原生js对象
		this.canvas = this.stage.canvas;
		// 保存浏览器可视范围宽和高
		this.clientWidth = this.canvas.width;
		this.clientHight = this.canvas.height;
		// 预加载资源
		this.startPreload();
	},
	handleTick: function(self, event) {
		if (self.figures) {
			self.figures.run(self);
		}
		self.stage.update();
	},
	startPreload: function() {
		var self = this;
		var progressText = this.progressText = new createjs.Text("", "12px Arial", "#dd4814");
		progressText.x = (this.clientWidth - progressText.getMeasuredWidth()) / 2 - 50;
		progressText.y = 20;
		this.stage.addChild(progressText);
		
		// 预加载进度条
		var preload = this.preload = new createjs.LoadQueue(true);
		
		preload.installPlugin(createjs.Sound); // 音频插件
		
		preload.on("fileload", function(event) {
			self.handleFileLoad(self, event);
		});
		preload.on("progress", function(event){
			self.handleFileProgress(self, event);
		});
		preload.on("complete", function(event) {
			self.handleComplete(self, event);
		});
		preload.on("error", function(event){
			self.handleErrorComplete(self, event);
		});
		
		// 开始预加载资源
		preload.loadManifest(config.manifest);
	},
	//处理单个文件加载
	handleFileLoad: function(self, event) {
		console.log("文件类型: " + event.item.type + "；路径：" + event.item.src);
		if (event.item.id == "logo") {
			console.log("logo图片已成功加载");
		}
	},
	handleErrorComplete: function(self, event) {
		console.log("加载失败: ", event.data.src);
	},
	handleFileProgress: function(self, event) {
		self.progressText.text = "已加载 " + (self.preload.progress * 100 | 0) + " %";
		self.stage.update();
	},
	handleComplete: function(self, event) {
		self.stage.removeChild(self.progressText);
		console.log("已加载完毕全部资源");
		self.main(self);
	},
	main: function(self) {
		self.bg   = new Bg(self);
		self.menu = new Menu(self);
		self.score = new Score(self);
		self.figures = new Figures(self);
	}
};

$(function() {
	playCanvas.initStage();
});
