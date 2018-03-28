/*全局*/

var Erase = {
	/*常量*/
	VER:'1.0.0',	//版本号
	FPS:60,	//FPS
	STAGE_WIDTH:600,	//舞台宽
	STAGE_HEIGHT:900,	//舞台高
	OPERATE_WIDTH:500,	//操作区宽
	OPERATE_HEIGHT:520,	//操作区高
	OPERATE_X:70,	//操作区水平位置
	OPERATE_Y:240,	//操作区垂直位置
	TOUCH_START_SCALE:1,	//图片容器初始比例
	TOUCH_START_ROTE:0,	//图片容器初始角度

	/*变量*/
	__stage: null,	//场景
	__operate: null,	//操作
	__drawPanel: null,	//绘画
	__shapeGraphic: null,	//绘画图形
	_oldPt: null,
	_oldMidPt: null,
	__file: null,	//文件
	_penSize: null,	//画笔大小变量
	_isOperateTouch: false,//是否操作区可touch
	
	/**
	 *	初始化
	 */
	init: function(){
		Erase.__stage = new createjs.Stage('erase');
		Erase.__stage.canvas.width = Erase.STAGE_WIDTH;
		Erase.__stage.canvas.height = Erase.STAGE_HEIGHT;
		createjs.Ticker.setFPS = Erase.FPS;   //帧频
		//createjs.Ticker.addEventListener('tick',Erase.__stage);   //按照帧频更新舞台
		createjs.Touch.enable(Erase.__stage);//启用tauch
		var bg = new createjs.Shape();
		bg.graphics.beginFill("#aaaaaa").drawRect(0, 0, Erase.STAGE_WIDTH, Erase.STAGE_HEIGHT);
		bg.name = "bg";
		Erase.__stage.addChild(bg);
		Erase.operateInit();//运行操作区初始化函数
	},
	/**
	 *	操作区域初始化
	 */
	operateInit: function(){
		var img = new Image();
		img.onload = function(){
			Erase.updateCacheImage(true);
		}
		img.src = "images/operateBg.jpg";
		
		Erase.__operate = new createjs.Container();	//创建操作区容器
		Erase.__operate.x = Erase.OPERATE_X;	//操作区域位置	
		Erase.__operate.y = Erase.OPERATE_Y;
		
		Erase.__drawPanel = new createjs.Container();//绘画面板
		Erase.__drawPanel.x = Erase.__operate.x;
		Erase.__drawPanel.y = Erase.__operate.y;
		
		Erase.__stage.addChild(Erase.__operate);
		/*背景图片*/
		var bg = new createjs.Bitmap();//操作区灰色添加图片区域
		bg.image = img;
		bg.name = "bg";
		bg.x = 0;
		bg.y = 0;
		
		var imgMask = new createjs.Shape();//遮罩层
		imgMask.graphics.beginFill("#ffffff").drawRect(0,0, Erase.OPERATE_WIDTH, Erase.OPERATE_HEIGHT);
		
		var imgCase = new createjs.Container();	//用户照片区域容器
		imgCase.name = 'imgCase';	//创建新的container容器，左原点放置于操作区的中心处
		imgCase.x = Erase.OPERATE_WIDTH/2;
		imgCase.y = Erase.OPERATE_HEIGHT/2;
		imgCase.mask = imgMask;
		
		Erase.__operate.addChild(bg, imgCase);
		Erase.updateCacheImage(false);
		
		/*文件选择区域*/
		Erase.__file = document.createElement('input');	//创建input
		Erase.__file.name = 'fileScan';	//input的名称
		Erase.__file.type = 'file';	//input的类型 
		Erase.__file.accept = 'image/*';	//选择文件的路径
		Erase.__file.addEventListener('change', Erase.fileChange, true);
	},
	
	/**
	 *	图片改变
	 *	@param	e
	 */
	fileChange: function(e){
		var fileNum = e.target.files.length;
		if(fileNum == 0) return;
		var file = e.target.files[0];
		var reader = new FileReader();	//根据W3C的定义，FileReader接口提供了读取文件的方法和包含读取结果的事件模型。
		reader.onload = function(e){	//文件读取成功完成时触发
			var img = new Image();	//创建一个Image对象
			//img.crossOrigin = '';
			img.onload = Erase.fileImageLoaded;	//当图像装载完毕的时候就会调用这个句柄
			img.src = e.target.result;	//src属性一定要写到 onload 的后面,否则程序在IE中会出错;result返回的最后一个值来自哪个事件
		}
		reader.readAsDataURL(file);	//将文件读取为 DataURL
	},
	/**
	 *	设置笔触
	 *	@param	size	尺寸
	 */
	setPenSize: function(size){
		Erase._penSize = size;
	},
	/**
	 *	绘画状态
	 */
	drawState: function(){
		Erase.__operate.on("mousedown", function(e){
			//console.log(e);
			Erase.__shapeGraphic = new createjs.Shape();
			Erase.__drawPanel.addChild(Erase.__shapeGraphic);
			Erase._oldMidPt = Erase._oldPt = Erase.__drawPanel.globalToLocal(e.stageX, e.stageY);
			Erase.__shapeGraphic.graphics.beginStroke("#000000").setStrokeStyle(Erase._penSize,"round","round").moveTo(Erase._oldPt.x, Erase._oldPt.y);
			Erase.updateCacheImage(true);
		}, false);
		Erase.__operate.on("pressmove", function(e){
			//console.log(e);
			var pt = Erase.__drawPanel.globalToLocal(e.stageX, e.stageY);
			var midPoint = new createjs.Point(Erase._oldPt.x + pt.x >> 1, Erase._oldPt.y + pt.y >> 1);
			Erase.__shapeGraphic.graphics.beginStroke("#000000").setStrokeStyle(Erase._penSize,"round","round").moveTo(midPoint.x, midPoint.y).curveTo(Erase._oldPt.x, Erase._oldPt.y, Erase._oldMidPt.x, Erase._oldMidPt.y);
			Erase._oldPt.x = pt.x;
			Erase._oldPt.y = pt.y;

			Erase._oldMidPt.x = midPoint.x;
			Erase._oldMidPt.y = midPoint.y;
			Erase.updateCacheImage(true);
		}, false);
		Erase.__operate.on("pressup", function(e){
			if(Erase.__shapeGraphic){
				Erase.__shapeGraphic.graphics.endStroke();
				Erase.__shapeGraphic = null;
			}
			Erase.updateCacheImage(true);
		}, false);
	},
	/**
	 *	撤销
	 */
	undo: function(){
		var num = Erase.__drawPanel.numChildren;
		if(num == 0) return;
		Erase.__drawPanel.removeChildAt(num - 1);
		Erase.updateCacheImage(true);
	},
	/**
	 *	更新图片
	 */
	updateCacheImage: function(update) {
		Erase.__drawPanel.filters = [new createjs.ColorFilter(1,1,1,-1, 0,0,0, 255)];
		if (update) {
			Erase.__drawPanel.updateCache();
		} else {
			Erase.__drawPanel.cache(0, 0, Erase.OPERATE_WIDTH, Erase.OPERATE_HEIGHT);
		}
		var maskFilter = new createjs.AlphaMaskFilter(Erase.__drawPanel.cacheCanvas);

		Erase.__operate.filters = [maskFilter];
		if (update) {
			Erase.__operate.updateCache();
		} else {
			Erase.__operate.cache(0, 0, Erase.OPERATE_WIDTH, Erase.OPERATE_HEIGHT);
		}
		Erase.__stage.update();
	},
	/**
	 *	将图片放入container中
	 */
	fileImageLoaded: function(e){
		//console.log(e);
		var imgCase = Erase.__operate.getChildByName('imgCase');	//找到存放用户照片的container容器
		imgCase.removeAllChildren();	//移除原先的照片
		var bitmap = new createjs.Bitmap();	//新建用户图片图像
		var htmlImg = e.target;	//e.target 是目标对象,就是事件源;
		bitmap.image = htmlImg;	//用户最后选中的照片存入bitmap
		imgCase.regX = 0;	//还原照片容器初始注册点位置
		imgCase.regY = 0;
		imgCase.scaleX = imgCase.scaleY = Erase.TOUCH_START_SCALE;//还原照片容器初始比例
		imgCase.rotation = Erase.TOUCH_START_ROTE;//还原照片容器初始角度
		bitmap.x = -htmlImg.width/2;     
		bitmap.y = -htmlImg.height/2;	
		imgCase.addChild(bitmap);
		Erase.updateCacheImage(true);
	},	
	/**
	 *	浏览图片的方法
	 */
	browse: function(){
		Erase.__file.click();	//点击文档
	},
	/**
	 *	保存
	 */
	save: function(){
		var bg = Erase.__stage.getChildByName("bg");
		bg.visible = false;
		Erase.__stage.cache(Erase.OPERATE_X, Erase.OPERATE_Y, Erase.OPERATE_WIDTH, Erase.OPERATE_HEIGHT);
		var data = Erase.__stage.getCacheDataURL();
		bg.visible = true;
		return data;
	},
	end: null
};

