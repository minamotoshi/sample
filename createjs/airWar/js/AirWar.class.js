var AirWar = {};
AirWar.VER = "1.1.0";	//版本号
/**
 *	预先加载
 */
AirWar.Preload = {
	_queue : null,	//loder
	_images : [		//图片组
		{"src": "bg.jpg",id: "bg"},
		{"src": "aircraft1.png",id: "aircraft1"},
		{"src": "aircraft2.png",id: "aircraft2"},
		{"src": "aircraft_die1.png",id: "aircraft_die1"},
		{"src": "aircraft_die2.png",id: "aircraft_die2"},
		{"src": "aircraft_die3.png",id: "aircraft_die3"},
		{"src": "aircraft_die4.png",id: "aircraft_die4"},
		{"src": "bullet1.png",id: "bullet1"},
		{"src": "bullet2.png",id: "bullet2"},
		{"src": "enemy1.png",id: "enemy1"},
		{"src": "enemy2.png",id: "enemy2"},
		{"src": "enemy3.png",id: "enemy3"},
		{"src": "enemy2_hurt.png",id: "enemy2_hurt"},
		{"src": "enemy1_die1.png",id: "enemy1_die1"},
		{"src": "enemy1_die2.png",id: "enemy1_die2"},
		{"src": "enemy1_die3.png",id: "enemy1_die3"},
		{"src": "enemy2_die1.png",id: "enemy2_die1"},
		{"src": "enemy2_die2.png",id: "enemy2_die2"},
		{"src": "enemy2_die3.png",id: "enemy2_die3"},
		{"src": "enemy2_die4.png",id: "enemy2_die4"},
		{"src": "enemy3_hurt.png",id: "enemy3_hurt"},
		{"src": "enemy3_die1.png",id: "enemy3_die1"},
		{"src": "enemy3_die2.png",id: "enemy3_die2"},
		{"src": "enemy3_die3.png",id: "enemy3_die3"},
		{"src": "enemy3_die4.png",id: "enemy3_die4"},
		{"src": "enemy3_die5.png",id: "enemy2_die5"},
		{"src": "enemy3_die6.png",id: "enemy2_die6"},
		{"src": "prop1.png",id: "prop2"},
		{"src": "prop2.png",id: "prop3"},
		{"src": "prop3.png",id: "prop4"}
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
 *	主函数
 */
AirWar.main = function(canvas){
	var _this = this;
	
	var FPS = 60;			//帧频
	
//	var __stage = new createjs.Stage(canvas); //场景
	_this.Stage_constructor(canvas);//继承stage

	var __bg = null,	    		//背景
		__craft = null, 			//战斗机
		__scoreBox = null,			//分数
		__bulletContainer = null,	//子弹层
		__enemyContainer = null,	//敌机层
		__propContainer = null;		//道具层
		
	var _pos = 0,			//实际位置
		_speed = 5, 		//背景图运动速度
		_score = 10;		//每次增加的分数
	
	var WIDTH = canvas.width,
		HEIGHT = canvas.height;
	
	var CRAFT_X = 235,		//战斗机初始位置的x
		CRAFT_Y = 700,		//战斗机初始位置的y
		BULLET_X = 233,		//子弹初始位置的x
		BULLET_Y = 600,		//子弹初始位置的y
		SCOREBOX_X = 30,	//分数的x
		SCOREBOX_Y = 10;	//分数的y
	
	var _enemyPos = 0,				//敌机的出现位置
		_enemySpeed = 0,			//根据游戏难易度,增加敌机的速度值
		_bulletPos = 0,				//子弹的出现位置
		_propTime = new Date().getTime()+1000*20,	//道具首次出现的时间
		ENEMYPOS_DURATION = 200,					//敌机出现位置的间隔
		BULLET_DURATION = 15,						//子弹出现位置的间隔
		PROPSHOW_DURATION = 1000*20,				//道具出现的间隔
		LEVEL2 = 300,		//分数达到300,LEVEL2
		LEVEL3 = 600,		//分数达到600,LEVEL3
		LEVEL4 = 1000;		//分数达到1000,LEVEL4
		
	/**
	 *	初始化
	 */
	_this.init = function(){
		createjs.Ticker.setFPS = FPS;	//帧频
		createjs.Ticker.addEventListener("tick", _this);	//按照帧频更新舞台
		createjs.Touch.enable(_this);	//启用touch	
	};
	/**
	 *	重置
	 */
	_this.reset = function(){
		
		_this.removeAllChildren();
		
		var img = AirWar.Preload.getResult("bg");
		var width = _this.canvas.width;
		var height = _this.canvas.height;
		
		__bg = new createjs.Container();	//背景图
		__bg.name = "bg";
		
		var bgImg01 = new createjs.Bitmap(img);
		bgImg01.x = 0;
		bgImg01.y = 0;
		
		var bgImg02 = new createjs.Bitmap(img);
		bgImg02.x = 0;
		bgImg02.y = -height;
		__bg.addChild(bgImg01,bgImg02);		
		
		__craft = new AirWar.AirCraft();	//战斗机
		__craft.x = CRAFT_X;
		__craft.y = CRAFT_Y;
		
		
		__craft.on("pressmove", pressMove);	//战斗机移动
	
		__scoreBox = new AirWar.Score();	//分数
		__scoreBox.x = SCOREBOX_X;
		__scoreBox.y = SCOREBOX_Y;
		
		__bulletContainer = new createjs.Container();  //子弹层
		
		__enemyContainer = new createjs.Container();   //敌机层
		
		__propContainer = new createjs.Container();    //道具层
		
		_this.addChild(__bg, __bulletContainer, __enemyContainer,__propContainer,__craft,__scoreBox);	//添加到stage内
		
		_this.on("tick", tick);
		
		
		__craft.on(AirWar.Event.CRAFT_DEAD,function(){  //战斗机和敌机相撞，结束stage更新
			_this.removeChild(__craft);
			
			_this.tickEnabled = false;	//停止更新舞台
			console.log("dead");
			_this.gameOver();	//发出游戏结束事件
		});
		
		
	};

	/**
	 *	游戏结束事件
	 */
	_this.gameOver = function(){
		var evt = new createjs.Event(AirWar.Event.GAME_OVER);
		_this.dispatchEvent(evt);
	};
	/**
	 *	分数
	 */
	_this.score = function(){
		return __scoreBox;
	};
	/**
	 *	背景图运动
	 */
	_this.bgScroll = function(e){
		if(_pos < 0){
			_pos = 0;
		}
		_pos += _speed;	
		if(_pos%850 == 0){
			__bg.y = 0;
		}
		__bg.y += _speed;
	};
	/**
	 *	战斗机发射子弹
	 */
	_this.fire = function(){
		
		if(_pos>_bulletPos){
			_bulletPos = _pos + BULLET_DURATION;
			
			var arr = __craft.getBullet();	//获取子弹
			for(var k in arr){
				if(isNaN(k))continue;
				var bullet = arr[k];
				__bulletContainer.addChild(bullet);
			}
			
		}
		
	};
	/**
	 *	难度提升
	 */
	function changeLevel(){
		
		if(_this.score().totalScore() >= LEVEL2 && _this.score().totalScore()<LEVEL3){
			_enemySpeed = 1;
			ENEMYPOS_DURATION = 100;
		}else if(_this.score().totalScore() >= LEVEL3 && _this.score().totalScore()<LEVEL4){
			_enemySpeed = 2;
			ENEMYPOS_DURATION = 50;
		}else if(_this.score().totalScore() >= LEVEL4){
			_enemySpeed = 3;
			ENEMYPOS_DURATION = 35;
		}
		
	}
	/**
	 *	道具出现
	 */
	function propAppear(){
		var t = new Date().getTime();
		
		if(t>_propTime){
			_propTime = t + PROPSHOW_DURATION; 
			
			var prop = new AirWar.Prop();
			prop.name = "prop";
			
			prop.on(AirWar.Event.PROP_HIDE,function(){
				__propContainer.removeChild(prop);
			});
			
			prop.x = Math.random()*WIDTH;
			prop.y = 0;
			
			__propContainer.addChild(prop);
		}
		
	}
	/**
	 *	战斗机移动位置
	 */
	function pressMove(e){
		var craft = e.currentTarget;	//获得其监听器触发了事件的那个元素
		craft.x = e.stageX;
		craft.y = e.stageY;
	}
	/**
	 *	子弹与敌机的碰撞检测
	 *	@param	obj	敌机
	 */
	function hit(obj){

		var i = 0;
		while(i < __bulletContainer.numChildren){
			
			var bullet = __bulletContainer.getChildAt(i);
			var coord = bullet.getCoord();
			var p = obj.globalToLocal(coord.x, coord.y);
			var flag = obj.hitTest(p.x, p.y);  
			
			if(flag){  //击中
				
				obj.attacked(bullet.getPower()); //击中敌机后的状态
				if(!obj.getEnemyData().dead){	 //敌机未死时,才可以移除子弹
					__bulletContainer.removeChild(bullet);
				}
				
				return true;
			}
			i++;
		}
		return false;
	}
		
	/**
	 *	敌机出现
	 */
	function enemyAppear(){
		
		if(_pos > _enemyPos){
			//若得分达到界限分数LEVEL等级上升后,敌机出现数量变多
			changeLevel();
			
			_enemyPos = _pos + ENEMYPOS_DURATION;
			
//			var enemy = new AirWar.Enemy(AirWar.kEnemyType.SMALL);  //只发小型敌机
			
			var enemy = new AirWar.Enemy();	   //随机敌机类型
			
			enemy.on(AirWar.Event.ENEMY_DEAD, function(){	//接受死亡事件
				__enemyContainer.removeChild(enemy);
				_this.score().increase(enemy.getScore());	//计数器增加总分值
				
			});
			
			enemy.name = "enemy";
			
			enemy.x = Math.random() * (WIDTH - enemy.getEnemyData().width);
			
			__enemyContainer.addChild(enemy);
		}
		
	}
	
	/**
	 *	tick
	 */
	function tick(e){
		
		_this.bgScroll(); 		//背景图移动
		if(!__craft.isDead()){	
			_this.fire();		//若战斗机未死亡,发射子弹	
		};	  
		enemyAppear();	    	//敌机出现
		
		propAppear();			//道具出现
		
		//子弹向上移动
		var i = 0;
		while(i < __bulletContainer.numChildren){
			var bullet = __bulletContainer.getChildAt(i);
			bullet.move();	//子弹移动
			
			if(bullet.y < 0 || bullet.x<0 || bullet.x>WIDTH){
				__bulletContainer.removeChild(bullet);
			}else{
				
				i++;
			}
		
		}
		//敌机向下移动
		var j = 0;
		while(j < __enemyContainer.numChildren){
			var enemy = __enemyContainer.getChildAt(j);
			if(enemy.y > _this.canvas.height){
				__enemyContainer.removeChild(enemy);
			}else {
				
				changeLevel();	//若得分达到界限分数后,敌机速度上升
				
				enemy.move(_enemySpeed);	//敌机移动
				
				//若敌机没有死亡,子弹和敌机碰撞检测
				if(!enemy.getEnemyData().dead){   
					hit(enemy); 	//敌机碰撞子弹
				}
				__craft.hit(enemy); //敌机碰撞战斗机
				j++;
			}
			
		}
		//道具向下移动
		var k = 0;
		while(k < __propContainer.numChildren){
			var prop = __propContainer.getChildAt(k);
			
			prop.move(WIDTH,HEIGHT);	//道具移动

			if(prop.hitProp(__craft)){	//若战斗机碰撞到道具,重新设置子弹样式,并移除道具
				__craft.setBullet(prop.getPropType(), 25000);
			   __propContainer.removeChild(prop);
			}
			k++;
			
		}
		
	}
	
	_this.init();
};
AirWar.main.prototype = createjs.extend(AirWar.main, createjs.Stage);
AirWar.main = createjs.promote(AirWar.main, "Stage");

/*************************************/
/**
 *	敌机类型
 */
AirWar.kEnemyType = {
	SMALL: 1,	//小型飞机
	MEDIUM:	2,	//中型敌机
	BIG: 3		//大型飞机
};
/**
 *	子弹威力值
 */
AirWar.kBulletPowerType = {
	SMALL: 1,	//小子弹
	BIG: 2		//大子弹
};
/**
 *	子弹类型
 */
AirWar.kBulletType = {
	ONE: 1,	    //子弹类型1:竖直线形,威力值1
	TWO: 2,		//子弹类型2:竖直线形,威力值2
	THREE: 3,	//子弹类型3:双排,威力值2
	FOUR: 4		//子弹类型4:三叉,威力值2
};
/**
 *	自定义事件
 */
AirWar.Event = {
	ENEMY_DEAD: "enemyDead",	//敌机死亡事件
	CRAFT_DEAD: "craftDead",	//战斗机死亡事件
	GAME_OVER: "gameOver",		//游戏结束事件
	PROP_HIDE: "propHide"		//道具消失事件
};
/*************************************/
/**
 *	战斗机本身
 */
AirWar.AirCraft = function(){

	var _this = this;
	_this.Container_constructor();	//调用父类的构造函数
		
	var __craft;	//战斗机实体
		
	var _width,		//战斗机的宽
		_height;	//战斗机的高
		
	var dieSpeed = 20,					//战斗机的死亡速度
		_dieTime = dieSpeed*4,			//战斗机的死亡动画播放时间
		_animationTime = dieSpeed*4;	//战斗机的死亡动画时间变量
		
	var _flareExpire = 0,		//战斗机自身火焰动画的过期时间
		FLARE_DURATION = 200,	//战斗机自身火焰动画的间隔
		_craftFlare = 1;		//战斗机自身火焰动画的图片变量
		
	var _dead = false;			//死亡状态,默认未死:false
		
	var _bulletType,	//子弹类型
		_bulletExpire;	//子弹过期时间
		
		
	/**
	 *	初始化
	 */
	_this.init = function(){
		_dead = false;
		
		var image = AirWar.Preload.getResult("aircraft1");
		var bit = new createjs.Bitmap();
		bit.name = "bit";
		
		bit.x = -image.width / 2;
		bit.y = -image.height / 2;
		
		__craft = new createjs.Container();
		__craft.addChild(bit);
		__craft.x = 0;
		__craft.y = 0;
		
		_this.setImage(image);
		
		_width = image.width;
		_height = image.height;
		_this.setBullet(AirWar.kBulletType.ONE);//初始化,默认设置子弹类型1
		_this.addChild(__craft);
		_this.on("tick", tick);
	};
	/**
	 *	设置图片
	 */
	_this.setImage = function(image){
		var bit = __craft.getChildByName("bit");
		bit.image = image;
	};
	/**
	 *	战斗机发出子弹的位置
	 */
	_this.getGunCoord = function(){
		var img = AirWar.Preload.getResult("aircraft1");
		var obj = {};
		obj.x = img.width / 2;
		obj.y = img.height / 2;
		
		return obj;
	};
	/**
	 *	获取坐标
	 */
	_this.getCoord = function(){
		var p = {};
		p.x = _this.x ;
		p.y = _this.y ;
		return p;
	};
	/**
	 *	战斗机与敌机的碰撞检测
	 *	@param	obj	敌机
	 */
	_this.hit = function(obj){
			
		if(_dead) return false;
		var coord = _this.getCoord();
		var p = obj.globalToLocal(coord.x,coord.y);		
		
		var flag = false;
		
		var k = Math.atan2(p.y,p.x); //斜率
		var cos = Math.cos(k);
		var sin = Math.sin(k);
		var rSpeed = 1;		//碰撞范围半径增长值
		
		var x = p.x;
		var y = p.y;
		
		for(var i=0;i<20;i++){
			x -= rSpeed * cos;
			y -= rSpeed * sin;
			flag = obj.hitTest(x,y);
			if(flag){
				break;
			}
		}
		if(flag){
			_this.die(); //战斗机死亡状态变为已死
			console.log("hit");
			return true;
		}
		
		return false;
	};
	/**
	 *	战斗机死亡
	 */
	_this.die = function(){
		_dead = true;
	};
	/**
	 *	获取战斗机数据
	 */
	_this.isDead = function(){
		return _dead;
	};
	
	/**
	 *	设置子弹样式
	 *	@param	type	类型
	 *	@param	expire	过期
	 */
	_this.setBullet = function(type, expire){
		if(!type){type = AirWar.kBulletType.ONE};
		if(!expire){expire = 0};
		_bulletType = type;
		_bulletExpire = new Date().getTime() + expire;
	};
	/**
	 *	获取子弹,返回值子弹数组
	 */
	_this.getBullet = function(){
		if(_bulletType != AirWar.kBulletType.ONE && new Date().getTime() > _bulletExpire){
			_this.setBullet(AirWar.kBulletType.ONE);
		}
		var arr = [];
		switch(_bulletType){
			case AirWar.kBulletType.ONE:
				var bullet = new AirWar.Bullet(AirWar.kBulletPowerType.SMALL);
				bullet.x = _this.x;
				bullet.y = _this.y - _this.getGunCoord().y;
				
				arr.push(bullet);
				break;
			case AirWar.kBulletType.TWO:
				var bullet = new AirWar.Bullet(AirWar.kBulletPowerType.BIG);
				bullet.x = _this.x;
				bullet.y = _this.y - _this.getGunCoord().y;
				
				arr.push(bullet);
				break;
			case AirWar.kBulletType.THREE:
				var bullet1 = new AirWar.Bullet(AirWar.kBulletPowerType.BIG);
				var bullet2 = new AirWar.Bullet(AirWar.kBulletPowerType.BIG);
				
				bullet1.x = _this.x - _this.getGunCoord().x*2/3;
				bullet1.y = _this.y - _this.getGunCoord().y/5;
				
				bullet2.x = _this.x + _this.getGunCoord().x*2/3;
				bullet2.y = _this.y - _this.getGunCoord().y/5;
				
				arr.push(bullet1,bullet2);
				break;
			case AirWar.kBulletType.FOUR:
				var bullet1 = new AirWar.Bullet(AirWar.kBulletPowerType.BIG);
				var bullet2 = new AirWar.Bullet(AirWar.kBulletPowerType.BIG);
				var bullet3 = new AirWar.Bullet(AirWar.kBulletPowerType.BIG);
				
				bullet1.rotation = -30;
				var speedX1 = Math.sin(-30*Math.PI/180)*bullet1.getSpeed();
				var speedY1 = Math.cos(-30*Math.PI/180)*bullet1.getSpeed();
				
				bullet1.x = _this.x - _this.getGunCoord().x*2/3;
				bullet1.y = _this.y - _this.getGunCoord().y/5;
				bullet1.setSpeed(speedX1,speedY1);				
				
				bullet2.x = _this.x;
				bullet2.y = _this.y - _this.getGunCoord().y;
				
				bullet3.rotation = 30;
				var speedX3 = Math.sin(30*Math.PI/180)*bullet1.getSpeed();
				var speedY3 = Math.cos(30*Math.PI/180)*bullet1.getSpeed();
				
				bullet3.x = _this.x + _this.getGunCoord().x*2/3;
				bullet3.y = _this.y - _this.getGunCoord().y/5;
				bullet3.setSpeed(speedX3,speedY3);
				
				arr.push(bullet1,bullet2,bullet3);
				break;
			default:
				break;
		}
		
		return arr;
	};
	/**
	 *	战斗机的火苗运动效果
	 */
	function flyMoive(){
		var t = new Date().getTime();
		if(t > _flareExpire){
			var image = AirWar.Preload.getResult("aircraft" + _craftFlare);
			_this.setImage(image);
			_craftFlare = _craftFlare==1?2:1;
			_flareExpire = t + FLARE_DURATION;
		}
	}
	/**
	 *	死亡动画
	 */
	function dieMoive(){
		var dieTime = _dieTime;
		if (_animationTime <= dieSpeed) {
			deadEvent();			//发送死亡事件
			return;
		}
		var dieModel = AirWar.Preload.getResult("aircraft_die" + (Math.round((dieTime - _animationTime) / dieSpeed) + 1));
		_this.setImage(dieModel);   //换图片
		_animationTime -= 4;
		console.log("dieMoiving");
	}
	/**
	 *	战斗机死亡后发死亡事件
	 */
	function deadEvent(){
		var evt = new createjs.Event(AirWar.Event.CRAFT_DEAD);
		_this.dispatchEvent(evt);
	};
	
	/**
	 *	战斗机更新 tick
	 */
	function tick(e){
		
		if(_dead){
			dieMoive();	//战斗机死亡动画
		}else{
			flyMoive();	//战斗机飞行火苗效果
		}
	}
	_this.init();
};
AirWar.AirCraft.prototype = createjs.extend(AirWar.AirCraft, createjs.Container); //继承container
AirWar.AirCraft = createjs.promote(AirWar.AirCraft, "Container");   //继承container
/**
 *	计分器
 */
AirWar.Score = function(){
	
	var _this = this;
	var _score = 0;		//	分数
	_this.Container_constructor();
	/**
	 *	初始化
	 */
	_this.init = function(){
		
		var text = new createjs.Text(_score, "28px Arial", "#000");
		text.x = 0;
		text.y = 0;
		
		_this.addChild(text);
	};
	/**
	 *	分数增加
	 */
	_this.increase = function(score){
		_this.removeAllChildren();
		_score += score;
		var text = new createjs.Text(_score, "28px Arial", "#000");
		text.name = "text";
		text.x = 0;
		text.y = 0;
		
		_this.addChild(text);
	};
	/**
	 *	分数减少  目前未用到
	 */
	_this.reduce = function(){
		_this.removeAllChildren();
		_score -= 10;
		if(_score<0){
			_score = 0;
		}
		
		var text = new createjs.Text(_score, "28px Arial", "#000");
		text.name = "text";
		text.x = 0;
		text.y = 0;
		
		_this.addChild(text);
	};
	/**
	 *	总分数
	 */
	_this.totalScore = function(){
		return _score;
	};

	_this.init();
};
AirWar.Score.prototype = createjs.extend(AirWar.Score,createjs.Container);
AirWar.Score = createjs.promote(AirWar.Score,"Container");
/**
 *	子弹
 */
AirWar.Bullet = function(type){
	var _this = this;
	_this.Container_constructor();
		
	var _type;			//子弹威力值类型
	var __bullet;		//子弹实体
	var image;			//子弹图片
		
	var _speedY = 30,	//子弹竖直方向的运动速度
		_speedX = 0,	//子弹水平方向的运动速度
		_power;			//子弹的威力值
		
	var _width,			//子弹的宽
		_height;		//子弹的高
	
	/**
	 *	初始化
	 */
	_this.init = function(type){
		if(!type){type = AirWar.kBulletPowerType.SMALL};	//默认是普通子弹
		
		_type = type;
		
		switch(type){
			case AirWar.kBulletPowerType.SMALL:
				_power = 1;		//小子弹
				break;
			case AirWar.kBulletPowerType.BIG:
				_power = 2;		//大子弹
				break;	
		}
		
		image = AirWar.Preload.getResult("bullet"+type);
		
		var bit = new createjs.Bitmap();
		bit.name = "bit";
		
		__bullet = new createjs.Container();
		__bullet.addChild(bit);
		__bullet.x = 0;
		__bullet.y = 0;
		
		_this.setImage(image);
		
		_width = image.width;
		_height = image.height;
		
		bit.x = -_width/2;
		bit.y = -_height/2;
		
		_this.addChild(__bullet);
	};
	/**
	 *	设置图片
	 */
	_this.setImage = function(image){
		var bit = __bullet.getChildByName("bit");
		bit.image = image;
	};
	/**
	 *	获取子弹的速度
	 */
	_this.getSpeed = function(){
		return _speedY;	
	};
	/**
	 *	设置子弹运动的速度
	 */
	_this.setSpeed = function(speedX,speedY){
		_speedX = speedX;
		_speedY = speedY;
	}
	/**
	 *	子弹运动
	 */
	_this.move = function(){
		_this.y -= _speedY;	//子弹竖直方向运动
		_this.x += _speedX;	//子弹水平方向运动
	};
	/**
	 *	获取坐标
	 */
	_this.getCoord = function(){
		var p = {};
		p.x = _this.x;
		p.y = _this.y;
		return p;
	};
	/**
	 *	获取子弹威力值
	 */
	_this.getPower = function(){
		return _power;
	};
	/**
	 *	获取子弹宽度
	 */
	_this.getWidth = function(){
		return _width;
	};
	
	_this.init(type);
};
AirWar.Bullet.prototype = createjs.extend(AirWar.Bullet,createjs.Container);
AirWar.Bullet = createjs.promote(AirWar.Bullet,"Container");

/**
 *	敌机
 */
AirWar.Enemy = function(type){
	var _this = this;
	_this.Container_constructor();
	
	_this.name = "enemy";
	var typeArr = [1,1,1,2,2,3];	//敌机类型出现数组
	
	var __enemy; 		//敌机实体
	var image;	 		//图片	
	
	var dieSpeed = 20;  //死亡动画播放速度
	
	var _type,			//敌机的种类
		_hp,			//敌机的当前血量
		_score,			//敌机的分值
		_width,			//敌机的宽度
		_height,		//敌机的高度
		_maxSpeed,		//敌机的速度
		_fullHp,		//敌机的满血血量
		_dieTime,		//敌机的死亡时间	
		_animationTime,	//敌机的死亡动画播放时间
		_moiveStatus,	//敌机的死亡动画状态,默认未播完:false
		_dead;			//敌机的死亡状态,默认未死：false

	/**
	 *	初始化
	 */
	_this.init = function(type){
		var typeNum = Math.round(Math.random()*(typeArr.length-1));
//		Math.round(Math.random()*(3-1))+1};
		if(!type) {type = typeArr[typeNum]};
		
		_type = type;
		//敌机种类属性
		switch(type){
			case AirWar.kEnemyType.SMALL:      //小型敌机
				_hp = 1;
				_fullHp = 1;
				_maxSpeed = 5;
				_score = 10;
				_dieTime = dieSpeed * 3;
				_animationTime = dieSpeed * 3;
				_dead = false;
				_moiveStatus = false;
				break;
			case AirWar.kEnemyType.MEDIUM:		//中型敌机
				_hp = 8;
				_fullHp = 8;
				_maxSpeed = 2;
				_score = 20;
				_dieTime = dieSpeed * 4;
				_animationTime = dieSpeed * 4;
				_dead = false;
				_moiveStatus = false;
				break;
			case AirWar.kEnemyType.BIG:			//大型敌机
				_hp = 18;
				_fullHp = 18;
				_maxSpeed = 1;
				_score = 30;
				_dieTime = dieSpeed * 6;
				_animationTime = dieSpeed * 6;
				_dead = false;
				_moiveStatus = false;
				break;
		}
		
		image = AirWar.Preload.getResult("enemy"+type);
		
		var bit = new createjs.Bitmap();
		bit.name = "bit";
		
		__enemy = new createjs.Container();
		__enemy.addChild(bit);
		_this.setImage(image);
		
		_width = image.width;
		_height = image.height;
		
		__enemy.x = 0;
		__enemy.y = -_height/2;
		
		
		bit.x = 0;
		bit.y = 0;
		_this.addChild(__enemy);
	};
	
	/**
	 *	设置图片
	 */
	_this.setImage = function(image){
		var bit = __enemy.getChildByName("bit");
		bit.image = image;
	};
	/**
	 * 获取敌机的数据
	 */
	_this.getEnemyData = function(){
		var data = {};
		data.dead = _dead;
		data.width = _width;
		data.maxSpeed = _maxSpeed;
		return data;
	};
	/**
	 *	敌机向下运动
	 */
	_this.move = function(item){
		_this.y += _maxSpeed+item;
//		console.log(_maxSpeed+item);
	};
	/**
	 *	敌机被击中
	 */
	_this.attacked = function(bulletPower){
		_hp -= parseInt(bulletPower);
		
		if(_hp <= 0){		//敌机死亡
			_hp = 0;
			_dead = true;	//已死
			_this.die(); 	//死亡动画函数执行
			
			return;
		}
		
		if(_hp < _fullHp/3){	//受伤状态图片
			
			if(_type == AirWar.kEnemyType.MEDIUM || _type == AirWar.kEnemyType.BIG){
				var imgHurt = AirWar.Preload.getResult("enemy"+_type+"_hurt");
				_this.setImage(imgHurt);
			}
			
		}
		
	};
	/**
	 *	死亡动画执行
	 */
	_this.die =function(){
		_this.on("tick",dieMoive);
	};
	/**
	 *	死亡动画
	 */
	function dieMoive(){
		var dieTime = _dieTime;
		if (_animationTime <= dieSpeed) {
			_moiveStatus = true;	//动画播放完毕
			deadEvent();			//发送死亡事件
			return;
		}
		var dieModel = AirWar.Preload.getResult("enemy" +_type + "_die" + (Math.round((dieTime - _animationTime) / dieSpeed) + 1));
		_this.setImage(dieModel);   //换图片
		_animationTime -= 8;
	}
	/**
	 *	获取敌机分值
	 */
	_this.getScore = function(){
		return _score;
	};
	/**
	 *	敌机死亡后发死亡事件
	 */
	function deadEvent(){
		var evt = new createjs.Event(AirWar.Event.ENEMY_DEAD);
		evt.data = _dead;
		_this.dispatchEvent(evt);
	};	
	
	_this.init(type);
};
AirWar.Enemy.prototype = createjs.extend(AirWar.Enemy,createjs.Container);
AirWar.Enemy = createjs.promote(AirWar.Enemy,"Container");

/**
 *	道具
 */
AirWar.Prop = function(type){
	var _this = this;
	_this.Container_constructor();
		
	var __prop;		//道具实体
	var image;		//图片
	var _type;		//道具类型
		
	var _width,
		_height;
		
	var	_speedX = 10,	//道具水平方向速度
		_a = 0.49,		//道具竖直方向加速度
		_speedY = 1;	//道具竖直方向初速度
		
	var _propHideTime = new Date().getTime()+1000*10;	//道具经过一段时间,然后消失的过期时间
	var	PROPHIDE_EXPIRE = 1000*5;		//道具消失时间的间隔

	/**
	 *	初始化
	 */
	_this.init = function(type){
//		if(!type){type = 4};
		type = Math.round(Math.random()*(4-2)+2);
		_type = type;
		
		image = AirWar.Preload.getResult("prop"+type);
		var bit = new createjs.Bitmap();
		bit.name = "bit";
	
		__prop = new createjs.Container();
		__prop.addChild(bit);
		
		_this.setImage(image);
		
		__prop.x = 0;
		__prop.y = 0;
		
		_width = image.width;
		_height = image.height;
		
		bit.x = -_width/2;
		bit.y = -_height/2;
		
		_this.addChild(__prop);	
	};
	/**
	 *	设置图片
	 */
	_this.setImage = function(image){
		var bit = __prop.getChildByName("bit");
		bit.image = image;
	};
	
	/**
	 *	道具运动
	 */
	_this.move = function(width,height){
		moveX(width);
		moveY(height);
	};
	/**
	 *	获取坐标
	 */
	_this.getCoord = function(){
		var p = {};
		p.x = _this.x;
		p.y = _this.y;
		return p;
	};
	/**
	 *	战斗机与道具的碰撞检测
	 *	@param	obj 战斗机
	 */
	_this.hitProp = function(obj){
		if(obj.isDead()) return false;
		var coord = _this.getCoord();
		var p = obj.globalToLocal(coord.x,coord.y);
		var flag = obj.hitTest(p.x,p.y);
		if(flag){
			
			console.log("get");
			return true;
		}
		return false;
	};
	/**
	 *	获取道具的类型
	 */
	_this.getPropType = function(){
		return _type;
	};
	/**
	 *	道具水平方向运动
	 */
	function moveX(width){
		_this.x+=_speedX;
		if(_this.x >= width){
			_speedX = -_speedX;
			_this.x = width;
			hide();
		}
		if(_this.x <= 0){
			_speedX = -_speedX;
			_this.x = 0;
			hide();
		}
	}
	/**
	 *	道具竖直方向运动
	 */
	function moveY(height){
		_speedY += _a;
		_this.y += _speedY;
		if(_this.y >= height){
			_speedY += _a;
			_speedY = -_speedY;
			_this.y = height;
			hide();
		}
		if(_this.y <= 0){
			_speedY += _a;
			_speedY = -_speedY;
			_this.y = 0;
			hide();
		}	
	}
	/**
	 *	道具隔一段时间后消失
	 */
	function hide(){
		var t = new Date().getTime();
	
		if( t>_propHideTime){
			_propHideTime = t + PROPHIDE_EXPIRE;
			hideEvent();
		}
	}
	/**
	 *	道具消失发事件
	 */
	function hideEvent(){
		var evt = new createjs.Event(AirWar.Event.PROP_HIDE);
		_this.dispatchEvent(evt);
	}
	
	_this.init(type);
};
AirWar.Prop.prototype = createjs.extend(AirWar.Prop,createjs.Container);
AirWar.Prop = createjs.promote(AirWar.Prop,"Container");