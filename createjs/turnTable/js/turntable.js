//1.0.6更改:弹窗样式修改 
//1.0.5更改:弹窗样式修改 及添加动画效果
//1.0.4更改:增加页面跳转功能



/*全局*/
var Turntable = {
	/*常量*/
	VER:'1.0.6',	//版本号
	FPS:60,	//FPS
	STAGE_WIDTH:500,	//舞台宽
	STAGE_HEIGHT:500,	//舞台高
	TABLE_RADIUS:100,	//转盘半径
	TABLECONTAINER_X:250,//转盘容器位置的x y值
	TABLECONTAINER_Y:250,
	
	/*变量*/
	__stage: null,	//场景
	__tableContainer: null,		//转盘容器
	__pointerContainer: null,	//指针容器
	_prize: null,	//奖品项目json数据
	/**
	 *	初始化
	 */
	init: function(){
		Turntable.__stage = new createjs.Stage('turntable');		//创建舞台 设置宽高
		Turntable.__stage.canvas.width = Turntable.STAGE_WIDTH;
		Turntable.__stage.canvas.height = Turntable.STAGE_HEIGHT;
		createjs.Ticker.setFPS = Turntable.FPS;   //帧频
		createjs.Ticker.addEventListener('tick',Turntable.__stage);   //按照帧频更新舞台
		createjs.Touch.enable(Turntable.__stage);	//启用touch
		/****奖品数据*****/
		Turntable._prize = [
			{ "rotate":"26" , "prize":"奖品一" },
			{ "rotate":"88" , "prize":"奖品二" },
			{ "rotate":"137" , "prize": "奖品三" },
			{ "rotate":"185" , "prize": "奖品四" },
			{ "rotate":"235" , "prize": "奖品五" },
			{ "rotate":"287" , "prize": "奖品六" },
			{ "rotate":"337" , "prize": "奖品七" }
		];
		/*******************/
		
		Turntable.__tableContainer = new createjs.Container();	//创建转盘容器 并设置容器位置
		Turntable.__tableContainer.x = Turntable.TABLECONTAINER_X;
		Turntable.__tableContainer.y = Turntable.TABLECONTAINER_Y;
		
		Turntable.__pointerContainer = new createjs.Container();	//创建指针容器
		Turntable.__pointerContainer.x = Turntable.TABLECONTAINER_X;
		Turntable.__pointerContainer.y = Turntable.TABLECONTAINER_X;
		
		/**
	 	 *	转盘图片及指针
	 	 */
		var bitmapTable = new createjs.Bitmap("images/turntable.png"); //转盘图片
		bitmapTable.x = -225;
		bitmapTable.y = -225;
		
		var bitmapPointer = new createjs.Bitmap("images/pointer.png");	//指针图片
		bitmapPointer.x = -94;
		bitmapPointer.y = -124;
		
		Turntable.__tableContainer.addChild(bitmapTable);	//将图片添加进container中
		Turntable.__pointerContainer.addChild(bitmapPointer);
		Turntable.__stage.addChild(Turntable.__tableContainer, Turntable.__pointerContainer);	//将container添加进stage中
		
		Turntable.__pointerContainer.on("click",Turntable.lotoClick);		//为指针图片container添加click侦听事件,并执行start方法
		
	},
	/**
	 *	点击抽奖按钮
	 */
	lotoClick: function(e){
		
		console.log(e);
		Turntable.__pointerContainer.removeAllEventListeners("click");
		/*
		$ajax({
			url: "xxxxxx",
			success : function(obj){
				obj.code;
				Turntable.start(obj.data);
			}
		});
		*/
		
		Turntable.start(1); //几等奖 0为一等奖 1为二等奖 以此类推
	},
	/**
	 *	旋转开始
	 */
	start: function(prizeID){
		//if(prizeID == null) {prizeID = Math.floor(Math.random() * Turntable._prize.length + 1)-1}; 
		if(prizeID == null){
			alert('活动已过期，谢谢您的参与！');
			return;
		} 
		console.log(prizeID);
		
		//var result = Turntable._prize[prizeID].prize;	//中奖结果
		//console.log(result);
		
		var correct = Math.random() * 10 -5; //修正转盘停止角度
		var finalRotate = Math.round(parseInt( Turntable._prize[prizeID].rotate ) + correct); //转盘停止角度
		finalRotate += 360 * 6;	//转动6圈+对应奖项的转动度数
		
		console.log(finalRotate);
		
		createjs.Tween.get(Turntable.__tableContainer).to({rotation:finalRotate}, 6000, createjs.Ease.quintInOut).call(Turntable.roteComplete,[prizeID]);    //动画过程6000ms 增加转完回调函数
		//注:若需要将转盘转动改为指针转动,则需把上一行代码中"Turntable.__tableContainer"替换为"Turntable.__pointerContainer"即可实现
		//改为指针转动后,由于转动方向依然是顺时针,所以还需更改/****奖品数据*****/中 对应奖项的角度"rotate"

	},
	/**
	 *	转完回调
	 */
	roteComplete:function(prizeID){
		console.log(prizeID);
		document.getElementById('box'+(prizeID+1)).style.display = 'block';	 //实现动画结束后弹窗功能
		document.getElementById('box'+(prizeID+1)).className = "active01 box";	//添加动画功能对应的class "active01"
		//window.location.href=prizeID + ".html";			//实现动画结束后跳转页面功能
	},

	
	end: null
};