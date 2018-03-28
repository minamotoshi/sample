/**
 *	画图功能
 */
var Draw = {
	VER: "1.6.2",//版本号
	_loader : null,//载入
	
	__stage : null,//场景
	__loading: null,//载入动画
	
	__logo: null,//logo
	__shirt : null,//球衣
	__shirtConatiner: null,//球衣载体
	_shirtNumbers: null,//球衣号码
	_imgParam : null,//图片参数
	
	__arrowLeft: null,//左箭头
	__arrowRight: null,//右箭头
	
	__tips: null,//提示
	
	__confirm: null,//确认按钮
	__lookout: null,//查看球衣
	__browse: null,//上传
	__reupload: null,//重新上传
	
	_saveClick: null,//保存点击
	
	_firstBrowse: false,//第一次浏览
	__fileInput : null,//图片浏览容器
	
	HEAD_IMG_MAX_WIDTH : 1000,
	HEAD_IMG_MAX_HEIGHT : 1000,
	
	OUT_EXT : "image/jpeg",
	/**
	 *	初始化
	 */
	init : function(){
		Draw.__stage = new createjs.Stage("drawCanvas");//场景
		createjs.Ticker.setFPS(60);//帧频
		//createjs.Ticker.addEventListener("tick", Draw.__stage);//按照帧频更新
		//loading
		Draw.loadingInit();//载入动画
		Draw.preload();
	},
	/**
	 *	界面初始化
	 */
	surfaceInit: function(){
		var bg = new createjs.Bitmap(Draw._loader.getResult("bg"));//球衣背景
		bg.on("dblclick", Draw.showVersion);
		Draw.__logo = new createjs.Bitmap(Draw._loader.getResult("logo"));//logo
		Draw.__logo.visible = false;
		
		Draw._shirtNumbers = [1,5,8,9,10,12,18,23];
		
		Draw.__shirtConatiner = new createjs.Container();//球衣载体
		Draw.__shirtConatiner.x = 622;
		Draw.__shirtConatiner.y = 868;
		var shirt = new custom.Shirt(Draw._shirtNumbers[0]);//自定义类
		shirt.name = "shirt";
		Draw.__shirtConatiner.addChild(shirt);
		Draw.__shirt = shirt;
		
		Draw._imgParam = {
			scale : 1,
			rote : 0
		};
		//按钮
		Draw.__arrowLeft = new createjs.Container();//左箭头
		Draw.__arrowLeft.addChild(new createjs.Bitmap(Draw._loader.getResult("arrow_left")));
		Draw.__arrowRight = new createjs.Container();//右箭头
		Draw.__arrowRight.addChild(new createjs.Bitmap(Draw._loader.getResult("arrow_right")));
		Draw.__confirm = new createjs.Container();//确认
		Draw.__confirm.addChild(new createjs.Bitmap(Draw._loader.getResult("confirm")));
		Draw.__lookout = new createjs.Container();//查看球衣
		Draw.__lookout.addChild(new createjs.Bitmap(Draw._loader.getResult("lookout")));
		Draw.__browse = new createjs.Container();//上传
		Draw.__browse.addChild(new createjs.Bitmap(Draw._loader.getResult("browse")));
		Draw.__reupload = new createjs.Container();//再上传
		Draw.__reupload.addChild(new createjs.Bitmap(Draw._loader.getResult("reupload")));
		
		Draw.__tips = new createjs.Container();//提示
		var tips_bg = new createjs.Bitmap(Draw._loader.getResult("tips_bg"));//背景
		tips_bg.x = -130;
		tips_bg.y = -117;
		Draw.__tips.addChild(tips_bg);
		var tipsChange = new createjs.Bitmap(Draw._loader.getResult("tips_change"));//选球衣
		tipsChange.name = "change";
		tipsChange.x = -75;
		tipsChange.y = -70;
		Draw.__tips.addChild(tipsChange);
		var tipsOperate = new createjs.Bitmap(Draw._loader.getResult("tips_operate"));//画图
		tipsOperate.name = "operate";
		tipsOperate.x = -94;
		tipsOperate.y = -69;
		Draw.__tips.addChild(tipsOperate);
		Draw.__tips.x = 362;
		Draw.__tips.y = 415;
		
		Draw.__fileInput = document.createElement("input");//浏览文件元素
		Draw.__fileInput.name = "browseImage";
		Draw.__fileInput.type = "file";
		Draw.__fileInput.accept = "image/*";
		Draw.__fileInput.addEventListener("change", Draw.onBrowse, false);
		
		var ver = new createjs.Text("Ver:" + Draw.VER, "50px Arial", "#ff7700");
		ver.name = "version";
		ver.visible = false;
		Draw.__stage.addChild(bg, Draw.__logo, ver, Draw.__tips, Draw.__shirtConatiner, Draw.__reupload, Draw.__browse, Draw.__lookout, Draw.__confirm, Draw.__arrowRight, Draw.__arrowLeft);
		Draw.showReady();
	},
	loadingInit: function(){
		Draw.__loading = new createjs.Container();//载入动画
		Draw.__loading.x = 621;
		Draw.__loading.y = 1104;
		
		var bg = new createjs.Shape();
		bg.graphics.beginFill("rgba(0,0,0,0.5)").drawRect(-621,-1104, 1242, 2208);
		// border
		var border = new createjs.Shape();
		border.graphics.f().s("#FFF1C0").ss(5,1,1).p("EgzxgDbMBnjAAAQBcAABABAQBBBBAABaIAAAAQAABbhBBBQhABAhcAAMhnjAAAQhbAAhBhAQhBhBAAhbIAAAAQAAhaBBhBQBBhABbAAg");
		// shade
		var shade0 = new createjs.Shape();
		shade0.graphics.f("rgba(176,83,3,0.4)").s().p("EAzwADDMhnfAAAIgBAAQhbgEg2g6IAAgBQgzg3gBhNQABhLAzg2QA2g7BbgGIABAAMBnfAAAIABAAQBfAFA1A8QAxA1gBBMQABBPgxA2IAAAAQg1A6heAEIgBAAIgBAAgEgzuACRMBndAAAQBIgDApgrIAAAAQAjgoAAg7QAAg4gjgnQgpgthIgEMhncAAAQhGAEgqAtQgmAoABA3QgBA5AmApIAAAAQAqAsBFADg");
		var shade1 = new createjs.Shape();
		shade1.graphics.f("rgba(176,83,3,0.8)").s().p("EAzxADcMhnhAAAIgCAAQhlgFg9hCQg5g+gBhXQABhVA5g9QA9hDBlgGIACAAMBnhAAAIACAAQBqAGA7BDIAAAAQA3A8AABWQgBBZg2A8Qg8BChpAFIgBAAIgBAAgEAzwADDIACAAQBegEA1g6IAAAAQAxg2gBhPQABhMgxg1Qg1g8hfgFIgBAAMhnfAAAIgBAAQhbAGg2A7QgzA2gBBLQABBNAzA3IAAABQA2A6BbAEIABAAg");
		var shade2 = new createjs.Shape();
		shade2.graphics.f("#B05303").s().p("EgzwAD1QhygFhEhLQhBhFAAhgQAAheBBhFQBFhMBxgFMBnhAAAQB1AFBEBMQA+BEAABfQAABqhHBFQhGBEhqACgEAzxADcIACAAQBpgFA8hCQA2g8ABhZQAAhWg3g8IAAAAQg7hDhqgGIgCAAMhnhAAAIgCAAQhlAGg9BDQg5A9gBBVQABBXA5A+QA9BCBlAFIACAAg");
		// mask (mask)
		var g = new createjs.Graphics();
		g.drawRoundRect(0,0, 707,44,20,20,20,20);
		var mask = new createjs.Shape(g);
		mask.name = "progress";
		mask.x = -354;
		mask.y = -22;
		var loadingbar = new createjs.MovieClip(null, 0, true, {});
		loadingbar.x = -354;
		var loadingbarBg = new createjs.Shape();
		loadingbarBg.graphics.lf(["#FF9C00","#FFEB8C"],[0,1],0,24.6,0,-24.4).s().p("Egy9ADyQhxAAhRhHQhQhHAAhkIAAAAQAAhjBQhHQBRhIBxAAMBl8AAAQBxAABRBIQBPBHAABjIAAAAQAABkhPBHQhRBHhxAAg");
		loadingbarBg.x = 354;
		this.shape = new createjs.Shape();
		this.shape.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.1,24,-14.1,-7.8).s().p("AljDnIHNnNID5AAInMHNg");
		this.shape.setTransform(629.7,-1);
	
		this.shape_1 = new createjs.Shape();
		this.shape_1.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.2,24.1,-14.2,-7.7).s().p("AliDmIHLnLID5AAInKHLg");
		this.shape_1.setTransform(304.6,-0.9);
	
		this.shape_2 = new createjs.Shape();
		this.shape_2.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.2,24.1,-14.2,-7.7).s().p("AlhDmIHKnLID5AAInKHLg");
		this.shape_2.setTransform(466.2,-0.9);
	
		this.shape_3 = new createjs.Shape();
		this.shape_3.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.2,24.1,-14.2,-7.7).s().p("AlhDmIHKnLID6AAInLHLg");
		this.shape_3.setTransform(575.3,-0.9);
	
		this.shape_4 = new createjs.Shape();
		this.shape_4.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.1,24,-14.1,-7.8).s().p("AljDnIHNnNID5AAInMHNg");
		this.shape_4.setTransform(521.6,-1);
	
		this.shape_5 = new createjs.Shape();
		this.shape_5.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-47.6,45,-47.6,13.2).s().p("AgUgSIAAgCIApAAIgVAVIgUAUg");
		this.shape_5.setTransform(446,-22);
	
		this.shape_6 = new createjs.Shape();
		this.shape_6.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-13.1,24.1,-13.1,-7.7).s().p("AlWDmIHKnLIDPAAIAAApIAUgUIAAACImzG0g");
		this.shape_6.setTransform(411.5,-0.9);
	
		this.shape_7 = new createjs.Shape();
		this.shape_7.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.1,24,-14.1,-7.8).s().p("AliDnIHMnNID6AAInNHNg");
		this.shape_7.setTransform(359,-1);
	
		this.shape_8 = new createjs.Shape();
		this.shape_8.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-13.2,23.1,-13.2,-8.6).s().p("AlaDeIG7m7ID6AAIm7G7g");
		this.shape_8.setTransform(140.9,-0.1);
	
		this.shape_9 = new createjs.Shape();
		this.shape_9.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.1,24,-14.1,-7.8).s().p("AliDnIHMnNID6AAInNHNg");
		this.shape_9.setTransform(250.9,-1);
	
		this.shape_10 = new createjs.Shape();
		this.shape_10.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.2,24.1,-14.2,-7.7).s().p("AliDmIHLnLID5AAInKHLg");
		this.shape_10.setTransform(195.5,-0.9);
	
		this.shape_11 = new createjs.Shape();
		this.shape_11.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-13.4,23.3,-13.4,-8.4).s().p("AlaDeIG7m7ID6AAIm7G7g");
		this.shape_11.setTransform(86.6,-0.1);
	
		this.shape_12 = new createjs.Shape();
		this.shape_12.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-16.8,23.7,-16.8,-8).s().p("AjsDYIAAgGIgNAAIAAgUIglAAIAAgUIgYAAIAAgOIFzlzID6AAImvGvg");
		this.shape_12.setTransform(36.4,-0.7);
	
		this.shape_13 = new createjs.Shape();
		this.shape_13.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-39.8,37.2,-39.8,5.5).s().p("AhSArIAoAAIgoAogAAkhSIAvAAIgvAvg");
		this.shape_13.setTransform(10,-14);
	
		this.shape_14 = new createjs.Shape();
		this.shape_14.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-7.6,23,-7.6,-8.8).s().p("AkfDaIG0m0IAnAAIAAAfIAyAAIAABQIAyAAIlGFFg");
		this.shape_14.setTransform(676.8,0.3);
	
		this.shape_15 = new createjs.Shape();
		this.shape_15.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.6,24.5,-14.6,-7.3).s().p("AleDiIHDnDID6AAInDHDg");
		this.shape_15.setTransform(108.5,0.1);
	
		this.shape_16 = new createjs.Shape();
		this.shape_16.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.5,24.4,-14.5,-7.4).s().p("AlfDjIHFnFID6AAInFHFg");
		this.shape_16.setTransform(162.9,0);
	
		this.shape_17 = new createjs.Shape();
		this.shape_17.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.5,24.4,-14.5,-7.4).s().p("AlfDjIHFnFID6AAInFHFg");
		this.shape_17.setTransform(54.8,0);
	
		this.shape_18 = new createjs.Shape();
		this.shape_18.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-29.4,28.6,-29.4,-3.1).s().p("Ai2C4IAAglIgUAAIAAiuICdicID4AAIlwFvg");
		this.shape_18.setTransform(20.3,-4);
	
		this.shape_19 = new createjs.Shape();
		this.shape_19.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.6,24.5,-14.6,-7.3).s().p("AleDiIHDnDID6AAInDHDg");
		this.shape_19.setTransform(596.5,0.1);
	
		this.shape_20 = new createjs.Shape();
		this.shape_20.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.5,24.4,-14.5,-7.4).s().p("AlfDjIHFnFID6AAInFHFg");
		this.shape_20.setTransform(650.9,0);
	
		this.shape_21 = new createjs.Shape();
		this.shape_21.graphics.lf(["#FFD616","#FFFAE5"],[0,1],1.3,18.8,1.3,-12.9).s().p("Ai/CpIFSlSIAAAoIAtAAIAACjIiHCHg");
		this.shape_21.setTransform(688.7,5.8);
	
		this.shape_22 = new createjs.Shape();
		this.shape_22.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.6,24.5,-14.6,-7.2).s().p("AldDiIHCnCID5AAInCHCg");
		this.shape_22.setTransform(542.9,-0.1);
	
		this.shape_23 = new createjs.Shape();
		this.shape_23.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.7,24.6,-14.7,-7.1).s().p("AlcDhIHAnAID5AAInAHAg");
		this.shape_23.setTransform(487.5,0);
	
		this.shape_24 = new createjs.Shape();
		this.shape_24.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-13.6,24.6,-13.6,-7.1).s().p("AlRDhIHAnAIDPAAIAAAoIAUgUIAAACImpGqg");
		this.shape_24.setTransform(432.8,0);
	
		this.shape_25 = new createjs.Shape();
		this.shape_25.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.6,24.5,-14.6,-7.2).s().p("AldDiIHCnCID5AAInCHCg");
		this.shape_25.setTransform(380.3,-0.1);
	
		this.shape_26 = new createjs.Shape();
		this.shape_26.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.5,24.4,-14.5,-7.4).s().p("AlfDjIHFnFID6AAInFHFg");
		this.shape_26.setTransform(272,0);
	
		this.shape_27 = new createjs.Shape();
		this.shape_27.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.7,24.6,-14.7,-7.1).s().p("AlcDhIHAnAID5AAInAHAg");
		this.shape_27.setTransform(325.9,0);
	
		this.shape_28 = new createjs.Shape();
		this.shape_28.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.6,24.5,-14.6,-7.3).s().p("AleDiIHDnDID6AAInDHDg");
		this.shape_28.setTransform(216.6,0.1);
	
		this.shape_29 = new createjs.Shape();
		this.shape_29.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-20.3,24.5,-20.3,-7.3).s().p("AirDiIAAgfIgyAAIAAgJIgNAAIAAgKIgTAAIAAgJIgFAAIAAgRIgOAAIAAgcIgVAAIAAgKIFSlRID5AAInDHDg");
		this.shape_29.setTransform(29.5,0.1);
	
		this.shape_30 = new createjs.Shape();
		this.shape_30.graphics.lf(["#FFD616","#FFFAE5"],[0,1],11.5,10.8,11.5,-20.9).s().p("AhZBZICyiyIAAA+IgeAAIAAA/IgxAAIAAAhIgwAAIAAAUg");
		this.shape_30.setTransform(696.7,13.8);
	
		this.shape_31 = new createjs.Shape();
		this.shape_31.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-11.8,24.4,-11.8,-7.4).s().p("AlDDjIHEnFIBWAAIAAAZIA/AAIAAAdIAvAAImPGPg");
		this.shape_31.setTransform(666.4,0);
	
		this.shape_32 = new createjs.Shape();
		this.shape_32.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-13.4,24.5,-13.4,-7.3).s().p("AlSDiIHDnDIDOAAIAAApIAUgUIAAACImsGsg");
		this.shape_32.setTransform(450.9,0.1);
	
		this.shape_33 = new createjs.Shape();
		this.shape_33.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.6,24.5,-14.6,-7.3).s().p("AleDiIHDnDID6AAInDHDg");
		this.shape_33.setTransform(344,0.1);
	
		this.shape_34 = new createjs.Shape();
		this.shape_34.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.5,24.4,-14.5,-7.4).s().p("AlfDjIHFnFID6AAInFHFg");
		this.shape_34.setTransform(290.3,0);
	
		this.shape_35 = new createjs.Shape();
		this.shape_35.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.6,24.5,-14.6,-7.3).s().p("AleDiIHDnDID6AAInDHDg");
		this.shape_35.setTransform(234.9,0.1);
	
		this.shape_36 = new createjs.Shape();
		this.shape_36.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-15.5,24.5,-15.5,-7.3).s().p("Aj/DiIAAgSIhWAAIGxmxID6AAInDHDg");
		this.shape_36.setTransform(46.7,0.1);
	
		this.shape_37 = new createjs.Shape();
		this.shape_37.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-36.1,33.5,-36.1,1.7).s().p("AiHBNIAIAAIAAhIIALAAIAAgNIAQAAIAAgnIAgAAIAAgSIASAAIAAgbIArAAIAAgOIAUAAIAAgMIBOAAIAAgRIAtAAIkPEPg");
		this.shape_37.setTransform(13.7,-9.1);
	
		this.shape_38 = new createjs.Shape();
		this.shape_38.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-4.9,21.9,-4.9,-9.9).s().p("Aj/DKIGTmTIAAAMIA1AAIAAAwIAhAAIAAA8IAWAAIAAAWIkGEFg");
		this.shape_38.setTransform(681.6,2.5);
	
		this.shape_39 = new createjs.Shape();
		this.shape_39.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-26.2,26.8,-26.2,-5).s().p("AiqDAIgOAAIAAgdIgyiSIDdjbID4AAImVGVg");
		this.shape_39.setTransform(23.5,-2.8);
	
		this.shape_40 = new createjs.Shape();
		this.shape_40.graphics.lf(["#FFD616","#FFFAE5"],[0,1],5.7,16.6,5.7,-15.1).s().p("AicCdIE5k5IAADBIgRAAIAAAoIgjAAIAAAZIgZAAIAAAcIgyAAIAAAUIgZAAIAAAHg");
		this.shape_40.setTransform(690.7,7.3);
	
		this.shape_41 = new createjs.Shape();
		this.shape_41.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-13.8,24.1,-13.8,-7.7).s().p("AldDmIHLnLIBwAAIAAAJICAAAInCHCg");
		this.shape_41.setTransform(655.7,0.1);
	
		this.shape_42 = new createjs.Shape();
		this.shape_42.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.2,24.1,-14.2,-7.7).s().p("AlhDmIHKnLID6AAInLHLg");
		this.shape_42.setTransform(547,0.1);
	
		this.shape_43 = new createjs.Shape();
		this.shape_43.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-13.1,24.1,-13.1,-7.7).s().p("AlWDmIHKnLIDPAAIAAApIAUgUIAAACIm0G0g");
		this.shape_43.setTransform(492.3,0.1);
	
		this.shape_44 = new createjs.Shape();
		this.shape_44.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.2,24.1,-14.2,-7.7).s().p("AlhDmIHKnLID6AAInLHLg");
		this.shape_44.setTransform(385.4,0.1);
	
		this.shape_45 = new createjs.Shape();
		this.shape_45.graphics.lf(["#FFD616","#FFFAE5"],[0,1],-14.1,24,-14.1,-7.8).s().p("AliDnIHMnNID6AAInNHNg");
		this.shape_45.setTransform(222.6,0);
	
		loadingbar.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:195.5,y:-0.9}},{t:this.shape_9,p:{x:250.9,y:-1}},{t:this.shape_8},{t:this.shape_7,p:{x:359,y:-1}},{t:this.shape_6},{t:this.shape_5,p:{x:446,y:-22}},{t:this.shape_4,p:{x:521.6,y:-1}},{t:this.shape_3,p:{x:575.3,y:-0.9}},{t:this.shape_2},{t:this.shape_1,p:{x:304.6,y:-0.9}},{t:this.shape,p:{x:629.7,y:-1}}]}).to({state:[{t:this.shape_28,p:{x:216.6}},{t:this.shape_27},{t:this.shape_26,p:{x:272}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_5,p:{x:466.8,y:-20.6}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:650.9}},{t:this.shape_19,p:{x:596.5}},{t:this.shape_18},{t:this.shape_17,p:{x:54.8}},{t:this.shape_16,p:{x:162.9}},{t:this.shape_15,p:{x:108.5}}]},1).to({state:[{t:this.shape_35,p:{x:234.9}},{t:this.shape_34,p:{x:290.3}},{t:this.shape_33,p:{x:344}},{t:this.shape_26,p:{x:398.4}},{t:this.shape_32,p:{x:450.9}},{t:this.shape_5,p:{x:485,y:-20.6}},{t:this.shape_28,p:{x:505.6}},{t:this.shape_20,p:{x:561}},{t:this.shape_19,p:{x:614.7}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_17,p:{x:73.1}},{t:this.shape_16,p:{x:181.2}},{t:this.shape_15,p:{x:126.8}}]},1).to({state:[{t:this.shape_35,p:{x:256.9}},{t:this.shape_34,p:{x:312.3}},{t:this.shape_26,p:{x:420.4}},{t:this.shape_32,p:{x:472.9}},{t:this.shape_5,p:{x:507,y:-20.6}},{t:this.shape_33,p:{x:366}},{t:this.shape_20,p:{x:583}},{t:this.shape_38},{t:this.shape_28,p:{x:636.7}},{t:this.shape_19,p:{x:527.6}},{t:this.shape_37},{t:this.shape_17,p:{x:95.1}},{t:this.shape_15,p:{x:148.8}},{t:this.shape_36},{t:this.shape_16,p:{x:203.2}}]},1).to({state:[{t:this.shape_45},{t:this.shape_9,p:{x:331.7,y:0}},{t:this.shape_10,p:{x:276.3,y:0.1}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_5,p:{x:526.8,y:-21}},{t:this.shape_4,p:{x:439.8,y:0}},{t:this.shape_42},{t:this.shape_41},{t:this.shape,p:{x:602.4,y:0}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_3,p:{x:65.2,y:0.1}},{t:this.shape_1,p:{x:168.2,y:0.1}},{t:this.shape_7,p:{x:114.5,y:0}}]},1).wait(1));
		loadingbar.timeline.addTween(createjs.Tween.get(loadingbarBg).wait(5));
		
		loadingbar.mask = mask;
		// track
		var track = new createjs.Shape();
		track.graphics.rf(["#B74D00","#A23500"],[0,1],0,0,0,0,0,353.8).s().p("EgzwADcQhcAAhBhAQhAhBgBhbIAAAAQABhaBAhBQBBhABcAAMBnhAAAQBcAABBBAQBBBBAABaIAAAAQAABbhBBBQhBBAhcAAg");
		Draw.__loading.addChild(bg, track, loadingbar, mask, shade0, shade1, shade2, border);
		
		Draw.__stage.addChild(Draw.__loading);
		Draw.__stage.update();
	},
	/**
	 *	预加载
	 */
	preload : function(){
		var manifest = [
			{src:"images/logo.png", id:"logo"},
			{src:"images/arrow_left.png", id:"arrow_left"},
			{src:"images/arrow_right.png", id:"arrow_right"},
			{src:"images/bg.jpg", id:"bg"},
			{src:"images/browse.jpg", id:"browse"},
			{src:"images/lookout.png", id:"lookout"},
			{src:"images/confirm.png", id:"confirm"},
			{src:"images/number_1.png", id:"number_1"},
			{src:"images/number_10.png", id:"number_10"},
			{src:"images/number_12.png", id:"number_12"},
			{src:"images/number_18.png", id:"number_18"},
			{src:"images/number_23.png", id:"number_23"},
			{src:"images/number_5.png", id:"number_5"},
			{src:"images/number_8.png", id:"number_8"},
			{src:"images/number_9.png", id:"number_9"},
			{src:"images/reupload.png", id:"reupload"},
			{src:"images/shirt.png", id:"shirt"},
			{src:"images/tips_bg.png", id:"tips_bg"},
			{src:"images/tips_change.png", id:"tips_change"},
			{src:"images/tips_operate.png", id:"tips_operate"}
		];
		Draw._loader = new createjs.LoadQueue(true);
		Draw._loader.loadManifest(manifest, true);
		
		Draw._loader.on("progress", Draw.loadingProgress, this);
		Draw._loader.on("complete", Draw.loadingComplete, this);
		
	},
	/**
	 *	过程
	 *	@param	img	图片数据
	 */
	loadingProgress: function(e){
		Draw.__loading.getChildByName("progress").scaleX = e.progress;
		Draw.__stage.update();
	},
	/**
	 *	完成
	 *	@param	img	图片数据
	 */
	loadingComplete : function(e){
		Draw.__loading.visible = false;
		Draw.surfaceInit();
	},
	/**
	 *	显示版本号
	 */
	showVersion : function(e){
		var ver = Draw.__stage.getChildByName("version");
		ver.visible = !ver.visible;
		ver.x = e.stageX;
		ver.y = e.stageY;
		Draw.__stage.update();
	},
	/**
	 *	设置保存点击事件
	 *	@param	fun	方法
	 */
	setSaveClick : function(fun){
		Draw._saveClick = fun;
	},
	/**
	 *	获取球衣号码
	 *	@param	offset	偏移
	 */
	getShirtNumber : function(offset){
		var index = 0;
		for(var k in Draw._shirtNumbers){
			if(Draw._shirtNumbers[k] == Draw.__shirt.getNumber()){
				index = parseInt(k);
				break;
			}
		}
		var n = index + offset;
		if(n < 0) n = Draw._shirtNumbers.length + n;
		if(n >= Draw._shirtNumbers.length) n = n - Draw._shirtNumbers.length - 1;
		return Draw._shirtNumbers[n];
	},
	/**
	 *	准备界面
	 */
	showReady : function(){
		Draw.__tips.visible = false;
		Draw.__arrowLeft.visible = false;
		Draw.__arrowRight.visible = false;
		Draw.__lookout.visible = true;
		Draw.__confirm.visible = true;
		Draw.__browse.visible = false;
		Draw.__reupload.visible = false;
		Draw.__lookout.x = 37;
		Draw.__lookout.y = 1704;
		Draw.__confirm.x = 649;
		Draw.__confirm.y = 1704;
		Draw.__lookout.on("click", function(e){Draw.showSelect();}, null, true);
		Draw.__confirm.removeAllEventListeners("click");
		Draw.__confirm.on("click", function(e){Draw.showDraw();}, null, true);
		Draw.__stage.update();
	},
	/**
	 *	选择界面
	 */
	showSelect : function(){
		Draw.__tips.visible = true;
		Draw.__tips.getChildByName("change").visible = true;
		Draw.__tips.getChildByName("operate").visible = false;
		Draw.__tips.scaleX = Draw.__tips.scaleY = Draw.__tips.alpha = 0;
		createjs.Tween.get(Draw.__tips).to({scaleX:1, scaleY:1, alpha:1}, 500, createjs.Ease.backOut).on("change", function(){Draw.__stage.update()});
		Draw.__arrowLeft.visible = true;
		Draw.__arrowRight.visible = true;
		Draw.__lookout.visible = false;
		Draw.__confirm.visible = true;
		Draw.__browse.visible = false;
		Draw.__reupload.visible = false;
		Draw.__arrowLeft.x = 128;
		Draw.__arrowRight.x = 993;
		Draw.__arrowRight.y = Draw.__arrowLeft.y = 811;
		Draw.__confirm.x = 341;
		Draw.__confirm.y = 1704;
		Draw.__confirm.removeAllEventListeners("click");
		Draw.__confirm.on("click", function(e){Draw.showDraw();Draw.shirtAct.off();}, null, true);
		Draw.shirtAct.on();
		Draw.__stage.update();
	},
	/**
	 *	画图界面
	 */
	showDraw : function(){
		Draw.__tips.visible = false;
		Draw.__arrowLeft.visible = false;
		Draw.__arrowRight.visible = false;
		Draw.__lookout.visible = false;
		Draw.__confirm.visible = false;
		Draw.__browse.visible = true;
		Draw.__reupload.visible = false;
		Draw.__browse.x = 223;
		Draw.__browse.y = 1692;
		Draw._firstBrowse = true;
		Draw.__browse.on("click", function(e){Draw.browse();}, null, false);
		Draw.__stage.update();
	},
	/**
	 *	画图界面运行中
	 */
	showDrawing : function(){
		Draw.imgAct();
		Draw.__logo.visible = true;
		Draw.__tips.visible = true;
		Draw.__tips.getChildByName("change").visible = false;
		Draw.__tips.getChildByName("operate").visible = true;
		Draw.__tips.scaleX = Draw.__tips.scaleY = Draw.__tips.alpha = 0;
		createjs.Tween.get(Draw.__tips).to({scaleX:1, scaleY:1, alpha:1}, 500, createjs.Ease.backOut).on("change", function(){Draw.__stage.update()});
		Draw.__arrowLeft.visible = false;
		Draw.__arrowRight.visible = false;
		Draw.__lookout.visible = false;
		Draw.__confirm.visible = true;
		Draw.__browse.visible = false;
		Draw.__reupload.visible = true;
		Draw.__confirm.x = 649;
		Draw.__reupload.x = 37;
		Draw.__confirm.y = Draw.__reupload.y = 1704;
		Draw.__reupload.on("click", function(e){Draw.browse();});
		Draw.__confirm.removeAllEventListeners("click");
		Draw.__confirm.on("click",
			function(e){
				Draw.__reupload.removeAllEventListeners("click");
				if(Draw._saveClick) Draw._saveClick(e);
			}, null, true);
		Draw.__stage.update();
	},
	
	/**
	 *	球衣行为
	 */
	shirtAct: {
		_pos: null,
		__left: null,
		__right: null,
		/**
		 *	开启
		 */
		on: function(){
			var target = window.document.getElementById("drawCanvas");
			target.addEventListener("touchstart", Draw.shirtAct.touchstart);
			target.addEventListener("touchend", Draw.shirtAct.touchend);
			target.addEventListener("touchmove", Draw.shirtAct.touchmove);
			Draw.shirtAct._pos = new Object();
			Draw.shirtAct._pos.x = 0;
			var bound = Draw.__shirt.getBounds();
			Draw.shirtAct._pos.width = bound.width;
		},
		/**
		 *	关闭
		 */
		off: function(){
			console.log("off");
			var target = window.document.getElementById("drawCanvas");
			target.removeEventListener("touchstart", Draw.shirtAct.touchstart);
			target.removeEventListener("touchend", Draw.shirtAct.touchend);
			target.removeEventListener("touchmove", Draw.shirtAct.touchmove);
		},
		/**
		 *	移动准备
		 */
		moveInit: function(){
			Draw.shirtAct.__left = new custom.Shirt(Draw.getShirtNumber(-1));
			Draw.shirtAct.__left.x = Draw.__shirt.x - Draw.shirtAct._pos.width;
			Draw.shirtAct.__right = new custom.Shirt(Draw.getShirtNumber(1));
			Draw.shirtAct.__right.x = Draw.__shirt.x + Draw.shirtAct._pos.width;
			Draw.__shirtConatiner.addChild(Draw.shirtAct.__left, Draw.shirtAct.__right);
		},
		/**
		 *	移动
		 */
		moving: function(){
			var total = Draw.__shirtConatiner.numChildren;
			for(var n = 0; n < total; n++){
				var c = Draw.__shirtConatiner.getChildAt(n);
				var factor = ( Draw.shirtAct._pos.width/2 + Math.abs(Math.abs(c.x) - Draw.shirtAct._pos.width)/2) / Draw.shirtAct._pos.width;
				c.scaleX = c.scaleY = factor;
				c.alpha = factor;
			}
			Draw.__stage.update();
		},
		/**
		 *	移动结束
		 */
		moveEnd: function(){
			if(Draw.shirtAct.__left) { Draw.__shirtConatiner.removeChild(Draw.shirtAct.__left)};
			if(Draw.shirtAct.__right) { Draw.__shirtConatiner.removeChild(Draw.shirtAct.__right)};
		},
		/**
		 *	触摸开始
		 */
		touchstart: function(ev){
			console.log(ev);
			//ev.preventDefault();
			Draw.shirtAct._pos.x = ev.touches[0].clientX;
			//Draw.shirtAct._pos.y = ev.touches[0].clientY;
			Draw.shirtAct.moveInit();
			Draw.shirtAct.moving();
		},
		/**
		 *	触摸结束
		 */
		touchend: function(ev){
			var total = Draw.__shirtConatiner.numChildren;
			while(Draw.__shirtConatiner.numChildren > 1){
				var c0 = Draw.__shirtConatiner.getChildAt(0);
				var c1 = Draw.__shirtConatiner.getChildAt(1);
				if(Math.abs(c0.x) < Math.abs(c1.x)){
					Draw.__shirtConatiner.removeChild(c1);
				}else{
					Draw.__shirtConatiner.removeChild(c0);
				}
			}
			var shirt = Draw.__shirtConatiner.getChildAt(0);
			Draw.__shirt = shirt;
			createjs.Tween.get(shirt).to({x:0}, 100).call(Draw.shirtAct.complete).on("change", Draw.shirtAct.change);
			Draw.shirtAct.moveInit();
		},
		/**
		 *	触摸移动
		 */
		touchmove: function(ev){
			Draw.__shirt.x = (ev.touches[0].clientX - Draw.shirtAct._pos.x) * (ev.target.width / ev.target.clientWidth);
			Draw.shirtAct.__left.x = Draw.__shirt.x - Draw.shirtAct._pos.width;
			Draw.shirtAct.__right.x = Draw.__shirt.x + Draw.shirtAct._pos.width;
			Draw.shirtAct.moving();
		},
		/**
		 *	动画改变
		 */
		change: function(e){
			Draw.shirtAct.moving();
			Draw.__stage.update();
		},
		/**
		 *	动画结束
		 */
		complete: function(e){
			Draw.shirtAct.moveEnd();
		}
	},
	/**
	 *	图片行为
	 */
	imgAct : function(){
		//按下
		touch.on('#drawCanvas', 'touchstart', function(ev){
			ev.preventDefault();
		});
		//松开
		touch.on('#drawCanvas', 'touchend', function(ev){
			Draw.__shirt.maskOn();
			Draw.__stage.update();
		});
		//拖动
		touch.on('#drawCanvas', 'drag', function(ev){
			Draw.__shirt.move(ev);
			Draw.__shirt.maskOff();
			Draw.__stage.update();
		});
		//停止拖动
		touch.on('#drawCanvas', 'dragend', function(ev){
			Draw.__shirt.restore();
			Draw.__shirt.maskOn();
			Draw.__stage.update();
		});
		//旋转
		touch.on('#drawCanvas', 'rotate', function(ev){
			var totalAngle = Draw._imgParam.rote + ev.rotation;
			if(ev.fingerStatus === 'end'){
				Draw._imgParam.rote += ev.rotation;
				Draw.__shirt.maskOn();
				Draw.__stage.update();
			}
			Draw.__shirt.rote(totalAngle);
			Draw.__shirt.maskOff();
			Draw.__stage.update();
		});
		//缩放
		touch.on('#drawCanvas', 'pinch', function(ev){
			var currentScale = ev.scale - 1;
			currentScale = Draw._imgParam.scale + currentScale;
			if(currentScale > 2) currentScale = 2;
			if(currentScale < 0.2) currentScale = 0.2;
			Draw.__shirt.scale(currentScale);
			Draw.__shirt.maskOff();
			Draw.__stage.update();
		});
		//停止缩放
		touch.on('#drawCanvas', 'pinchend', function(ev){
			Draw._imgParam.scale = Draw.__shirt.getScale();
			Draw.__shirt.maskOn();
			Draw.__stage.update();
		});
	},
	/**
	 *	浏览图片
	 */
	browse : function(){
		Draw.__fileInput.click();
	},
	/**
	 *	图片浏览事件
	 *	@param	e	
	 */
	onBrowse : function(e){
		var file = e.target.files[0];
		var reader = new FileReader();
		reader.onload = function(e){
			var img =  new Image();
			img.onload = Draw.onImageLoad;
			img.src = e.target.result;
		}
		reader.readAsDataURL(file);
		if(Draw._firstBrowse) {
			Draw._firstBrowse = false;
			Draw.showDrawing();
		}
	},
	/**
	 *	图片加载完毕
	 *	@param	e	
	 */
	onImageLoad : function(e){
		var img = Draw.compress(e.target);
		if(img){
			Draw.__shirt.setImg(img);
			Draw.__stage.update();
		}
	},
	/**
	 *	压缩图片
	 */
	compress : function(source){
		var width = source.naturalWidth;
		var height = source.naturalHeight;
		if(width <= Draw.HEAD_IMG_MAX_WIDTH && height <= Draw.HEAD_IMG_MAX_HEIGHT){
			return source;
		}
		var xScale = Draw.HEAD_IMG_MAX_WIDTH / width;
		var yScale = Draw.HEAD_IMG_MAX_HEIGHT / height;
		var scale = xScale<yScale?xScale:yScale;
		width *= scale;
		height *= scale;
		var pattern = /image\/(.*);/i;
		var arr = pattern.exec(source.src);
		var mime_type = arr[0];
		var cvs = document.createElement('canvas');
		//naturalWidth真实图片的宽度
		cvs.width = width;
		cvs.height = height;
		var ctx = cvs.getContext("2d").drawImage(source, 0, 0, source.naturalWidth, source.naturalHeight, 0,0, width, height);
		var data = cvs.toDataURL(mime_type, 1);
		var img = new Image();
		img.onload = Draw.onImageLoad;
		img.src = data;
		return false;
	},
	/**
	 *	保存
	 */
	save : function(){
		Draw.__lookout.visible = false;
		Draw.__confirm.visible = false;
		Draw.__browse.visible = false;
		Draw.__reupload.visible = false;
		Draw.__tips.visible = false;
		Draw.__logo.visible = true;
		Draw.__stage.update();
		var data = Draw.__stage.canvas.toDataURL(Draw.OUT_EXT);
		Draw.__loading.visible = true;
		Draw.__stage.swapChildrenAt(Draw.__stage.getChildIndex(Draw.__loading), Draw.__stage.numChildren - 1);
		createjs.Ticker.addEventListener("tick", Draw.__stage);
		return data;
	}
};


var custom = {};
(function(){
	"use strict";
	/**
	 *	构造函数
	 */
	function Shirt(number){
		this.Container_constructor();
		var shirt = new createjs.Bitmap(Draw._loader.getResult("shirt"));//球衣背景
		shirt.x = -386;
		shirt.y = -575;
		this._number = number;
		var shirtNumber = new createjs.Bitmap(Draw._loader.getResult("number_"+ number));
		shirtNumber.x = 34;
		shirtNumber.y = 218;
		this.__mask = new createjs.Shape();//遮罩
		this.__mask.graphics.f("#FFD2B2").s().p("Am3LDQhbhmhNiJIg6h0QjKqGEFllQBniOClhKQCQhCCbACQHMAFCwEJQBJBtAkCnQAZByATDPQAgFsjmEfQiYC8jbBwQhlAthhAAQjcAAjKjhg");
		this.__mask.x = -2;
		this.__mask.y = -445;
		this.__img = new createjs.Container();//头像
		
		this.maskOn();
		this.addChild(shirt, shirtNumber, this.__mask, this.__img);
	}
	var p = createjs.extend(Shirt, createjs.Container);
	p.__mask = null;
	p.__img = null;
	p._number = 0;
	/**
	 *	获取球衣号码
	 */
	p.getNumber = function(){
		return this._number;
	},
	/**
	 *	设置图片
	 *	@param	img	图片数据
	 */
	p.setImg = function(img){
		while ( this.__img.numChildren ) {
			this.__img.removeChildAt(0);
		}
		var bit = new createjs.Bitmap(img);
		var colorMatrix = new createjs.ColorMatrix();
		colorMatrix.adjustBrightness(48);
		var colorMatrixFilter = new createjs.ColorMatrixFilter(colorMatrix);
		bit.filters = [colorMatrixFilter];
		bit.cache(0, 0, img.width, img.height);
		this.__img.regX = img.width / 2;
		this.__img.regY = img.height / 2;
		this.__img.x = this.__mask.x;
		this.__img.y = this.__mask.y;
		this.__img.addChild(bit);
		
	},
	/**
	 *	移动
	 *	@param	p	点
	 */
	p.move = function(pt){
		this.__img.x = this.__mask.x + pt.x;
		this.__img.y = this.__mask.y + pt.y;
	},
	/**
	 *	还原
	 */
	p.restore = function(){
		var gp = this.localToGlobal(this.__mask.x, this.__mask.y);
		var pt = this.__img.globalToLocal(gp.x, gp.y);
		this.__img.regX = pt.x;
		this.__img.regY = pt.y;
		this.__img.x = this.__mask.x;
		this.__img.y = this.__mask.y;
	},
	/**
	 *	缩放
	 *	@param	factor	系数
	 */
	p.scale = function(factor){
		this.__img.scaleX = this.__img.scaleY = factor;
	},
	/**
	 *	获取缩放系数
	 */
	p.getScale = function(){
		return this.__img.scaleX;
	},
	/**
	 *	旋转
	 *	@param	factor	系数
	 */
	p.rote = function(factor){
		this.__img.rotation = factor;
	},
	/**
	 *	遮罩关闭
	 */
	p.maskOff = function(){
		this.__img.mask = null;
		this.__img.alpha = 0.5;
	}
	/**
	 *	遮罩打开
	 */
	p.maskOn = function(){
		this.__img.mask = this.__mask;
		this.__img.alpha = 1;
	}
	custom.Shirt = createjs.promote(Shirt, "Container");
})();
