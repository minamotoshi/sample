(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,381);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,483);


(lib.gezi = function() {
	this.initialize(img.gezi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,443,29);


(lib.HITECH = function() {
	this.initialize(img.HITECH);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,20);


(lib.ICON1 = function() {
	this.initialize(img.ICON1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,388,95);


(lib.ICON2 = function() {
	this.initialize(img.ICON2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,89);


(lib.ICON3 = function() {
	this.initialize(img.ICON3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.ICON4 = function() {
	this.initialize(img.ICON4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,51);


(lib.ICON5 = function() {
	this.initialize(img.ICON5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,24);


(lib.ICON6 = function() {
	this.initialize(img.ICON6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,72);


(lib.ICON7 = function() {
	this.initialize(img.ICON7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,570,175);


(lib.jiantou = function() {
	this.initialize(img.jiantou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,79);


(lib.LRRM = function() {
	this.initialize(img.LRRM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.lefttiao = function() {
	this.initialize(img.lefttiao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,405);


(lib.more = function() {
	this.initialize(img.more);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,89);


(lib.RRRM = function() {
	this.initialize(img.RRRM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,26);


(lib.righttiao = function() {
	this.initialize(img.righttiao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,208);


(lib.SHD = function() {
	this.initialize(img.SHD);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,29);


(lib.text1 = function() {
	this.initialize(img.text1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,36);


(lib.text2 = function() {
	this.initialize(img.text2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,36);


(lib.text3 = function() {
	this.initialize(img.text3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,36);


(lib.text4 = function() {
	this.initialize(img.text4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,36);


(lib.text5 = function() {
	this.initialize(img.text5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,34);


(lib.text6 = function() {
	this.initialize(img.text6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,36);


(lib.text7 = function() {
	this.initialize(img.text7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,36);


(lib.text8 = function() {
	this.initialize(img.text8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,36);


(lib.text9 = function() {
	this.initialize(img.text9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,387,261);


(lib.topkuang = function() {
	this.initialize(img.topkuang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,401,119);


(lib.waikuang = function() {
	this.initialize(img.waikuang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,879);


(lib.xian = function() {
	this.initialize(img.xian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,93);


(lib.xuxian = function() {
	this.initialize(img.xuxian);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,419,19);


(lib.zhong = function() {
	this.initialize(img.zhong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,405,76);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ICON3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.713,0.713);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件93, new cjs.Rectangle(0,0,50.7,50.7), null);


(lib.元件91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ICON2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.713,0.713);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件91, new cjs.Rectangle(0,0,64.9,63.5), null);


(lib.元件84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.jiantou();
	this.instance.parent = this;
	this.instance.setTransform(78,79,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件84, new cjs.Rectangle(0,0,78,79), null);


(lib.元件83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.jiantou();
	this.instance.parent = this;
	this.instance.setTransform(0,79,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83, new cjs.Rectangle(0,0,78,79), null);


(lib.元件82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.jiantou();
	this.instance.parent = this;
	this.instance.setTransform(78,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件82, new cjs.Rectangle(0,0,78,79), null);


(lib.元件81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.righttiao();
	this.instance.parent = this;
	this.instance.setTransform(-10,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件81, new cjs.Rectangle(-10,-104,20,208), null);


(lib.元件80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.lefttiao();
	this.instance.parent = this;
	this.instance.setTransform(-20,-202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件80, new cjs.Rectangle(-20,-202.5,40,405), null);


(lib.元件79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件79, new cjs.Rectangle(0,0,295,483), null);


(lib.元件78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(295,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件78, new cjs.Rectangle(0,0,295,483), null);


(lib.元件77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件77, new cjs.Rectangle(0,0,67,381), null);


(lib.元件76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(67,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件76, new cjs.Rectangle(0,0,67,381), null);


(lib.元件75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.LRRM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件75, new cjs.Rectangle(0,0,25,25), null);


(lib.元件74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.RRRM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件74, new cjs.Rectangle(0,0,26,26), null);


(lib.元件73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xuxian();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件73, new cjs.Rectangle(0,0,419,19), null);


(lib.元件72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xian();
	this.instance.parent = this;
	this.instance.setTransform(0,93,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件72, new cjs.Rectangle(0,0,91,93), null);


(lib.元件71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xian();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件71, new cjs.Rectangle(0,0,91,93), null);


(lib.元件70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xian();
	this.instance.parent = this;
	this.instance.setTransform(91,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件70, new cjs.Rectangle(0,0,91,93), null);


(lib.元件69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xian();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件69, new cjs.Rectangle(0,0,91,93), null);


(lib.元件68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.more();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件68, new cjs.Rectangle(0,0,26,89), null);


(lib.元件67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#15FFFF").s().p("AhUAJIAAgRICpAAIAAARg");
	this.shape.setTransform(8.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件67, new cjs.Rectangle(0,0,16.9,1.9), null);


(lib.元件66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.SHD();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件66, new cjs.Rectangle(0,0,27,29), null);


(lib.元件65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.gezi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件65, new cjs.Rectangle(0,0,443,29), null);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件61, new cjs.Rectangle(0,0,263,36), null);


(lib.元件60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件60, new cjs.Rectangle(0,0,176,36), null);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(0,0,199,36), null);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EghABARIm9nDMAAFgxJIjAi8IAOjLIFplyMAABg2mIIyo1MA4kAAAIIvI5MgADA2rIFxFpIAGDLIi2C9MgAEAxGIm2G8IgIDHMhB4AAAg");
	this.shape.setTransform(274.5,430.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件57, new cjs.Rectangle(0,0,549,860.7), null);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.gezi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件56, new cjs.Rectangle(0,0,443,29), null);


(lib.元件55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ICON5();
	this.instance.parent = this;
	this.instance.setTransform(0,3,0.713,0.713);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件55, new cjs.Rectangle(0,3,17.1,17.1), null);


(lib.元件54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ICON4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.713,0.713);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件54, new cjs.Rectangle(0,0,35.7,36.4), null);


(lib.元件50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Au1AyQgVAAgPgPQgOgPAAgUQAAgUAOgPQAPgOAVAAIdrAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAg");
	this.shape.setTransform(100,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件50, new cjs.Rectangle(0,0,200,10), null);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoAA5QjVgYAAghQAAggDVgYQDVgXErAAQEsAADVAXQDVAYgBAgQABAhjVAYQjVAXksAAQkrAAjVgXg");
	this.shape.setTransform(72.6,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(0,0,145.1,16), null);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件39, new cjs.Rectangle(0,0,247,36), null);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件38, new cjs.Rectangle(0,0,400,34), null);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.HITECH();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件37, new cjs.Rectangle(0,0,200,20), null);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.topkuang();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件36, new cjs.Rectangle(0,0,401,119), null);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.zhong();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件35, new cjs.Rectangle(0,0,405,76), null);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(0,0,154,36), null);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ICON7();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.699,0.699);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(0,0,398.7,122.4), null);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件32, new cjs.Rectangle(0,0,313,36), null);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text8();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件31, new cjs.Rectangle(0,0,246,36), null);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.text9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件30, new cjs.Rectangle(0,0,387,261), null);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ICON6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件29, new cjs.Rectangle(0,0,367,72), null);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.ICON1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件28, new cjs.Rectangle(0,0,388,95), null);


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.more();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件25, new cjs.Rectangle(0,0,26,89), null);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#15FFFF").s().p("AhUAJIAAgRICpAAIAAARg");
	this.shape.setTransform(8.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件24, new cjs.Rectangle(0,0,16.9,1.9), null);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.SHD();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件23, new cjs.Rectangle(0,0,27,29), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.RRRM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(0,0,26,26), null);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.LRRM();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(0,0,25,25), null);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xian();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(0,0,91,93), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.waikuang();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,305,879), null);


(lib.元件90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_75 = function() {
		this.gotoAndPlay(2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(75).call(this.frame_75).wait(1));

	// 图层 4
	this.instance = new lib.元件55();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-14.3,4.626,4.626,0,0,0,4.8,7.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(1).to({regX:8.6,regY:11.6,scaleX:4.27,scaleY:4.27,x:2.1,y:2.6,alpha:0.1},0).wait(1).to({scaleX:3.91,scaleY:3.91,x:2,y:2.3,alpha:0.2},0).wait(1).to({scaleX:3.55,scaleY:3.55,y:2,alpha:0.3},0).wait(1).to({scaleX:3.2,scaleY:3.2,x:1.9,y:1.8,alpha:0.4},0).wait(1).to({scaleX:2.84,scaleY:2.84,x:1.8,y:1.5,alpha:0.5},0).wait(1).to({scaleX:2.48,scaleY:2.48,y:1.2,alpha:0.6},0).wait(1).to({scaleX:2.12,scaleY:2.12,x:1.7,y:0.9,alpha:0.7},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:1.6,y:0.7,alpha:0.8},0).wait(1).to({scaleX:1.41,scaleY:1.41,y:0.4,alpha:0.9},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:1.5,y:0.1,alpha:1},0).wait(4).to({x:1.4},0).wait(5).to({x:1.3},0).wait(5).to({x:1.2},0).wait(5).to({x:1.1},0).wait(5).to({x:1},0).wait(2).to({scaleX:1.36,scaleY:1.36,y:0.3,alpha:0.9},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:0.9,y:0.5,alpha:0.8},0).wait(1).to({scaleX:1.99,scaleY:1.99,y:0.7,alpha:0.7},0).wait(1).to({scaleX:2.31,scaleY:2.31,x:0.8,y:0.9,alpha:0.6},0).wait(1).to({scaleX:2.62,scaleY:2.62,y:1.1,alpha:0.5},0).wait(1).to({scaleX:2.94,scaleY:2.94,x:0.7,y:1.2,alpha:0.4},0).wait(1).to({scaleX:3.25,scaleY:3.25,x:0.6,y:1.4,alpha:0.3},0).wait(1).to({scaleX:3.57,scaleY:3.57,y:1.6,alpha:0.2},0).wait(1).to({scaleX:3.88,scaleY:3.88,x:0.5,y:1.8,alpha:0.1},0).wait(1).to({scaleX:4.2,scaleY:4.2,y:2,alpha:0},0).wait(1));

	// 图层 3
	this.instance_1 = new lib.元件54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.6,-10.6,3.019,3.019,0,0,0,16,15);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(1).to({regX:17.8,regY:18.2,scaleX:2.82,scaleY:2.82,x:0.1,y:-0.8,alpha:0.1},0).wait(1).to({scaleX:2.63,scaleY:2.63,x:0.2,y:-0.6,alpha:0.2},0).wait(1).to({scaleX:2.43,scaleY:2.43,x:0.4,y:-0.5,alpha:0.3},0).wait(1).to({scaleX:2.23,scaleY:2.23,x:0.5,y:-0.4,alpha:0.4},0).wait(1).to({scaleX:2.04,scaleY:2.04,x:0.6,y:-0.3,alpha:0.5},0).wait(1).to({scaleX:1.84,scaleY:1.84,x:0.8,y:-0.2,alpha:0.6},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:0.9,y:-0.1,alpha:0.7},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:1.1,y:0.1,alpha:0.8},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:1.2,y:0.2,alpha:0.9},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:1.4,y:0.3,alpha:1},0).wait(1).to({alpha:0.999},0).wait(1).to({alpha:0.998},0).wait(2).to({alpha:0.997},0).wait(1).to({x:1.3,alpha:0.996},0).wait(1).to({alpha:0.995},0).wait(1).to({y:0.4,alpha:0.994},0).wait(2).to({alpha:0.993},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.99},0).wait(2).to({alpha:0.989},0).wait(1).to({x:1.2,alpha:0.988},0).wait(1).to({alpha:0.987},0).wait(1).to({y:0.5,alpha:0.986},0).wait(2).to({alpha:0.985},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.983},0).wait(1).to({alpha:0.982},0).wait(2).to({alpha:0.981},0).wait(1).to({x:1.1,alpha:0.98},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:0.4,alpha:0.882},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:1.2,alpha:0.784},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:0.3,alpha:0.686},0).wait(1).to({scaleX:1.81,scaleY:1.81,y:0.2,alpha:0.588},0).wait(1).to({scaleX:2,scaleY:2,y:0.1,alpha:0.49},0).wait(1).to({scaleX:2.19,scaleY:2.19,y:0,alpha:0.392},0).wait(1).to({scaleX:2.38,scaleY:2.38,x:1.3,y:-0.1,alpha:0.294},0).wait(1).to({scaleX:2.57,scaleY:2.57,y:-0.2,alpha:0.196},0).wait(1).to({scaleX:2.75,scaleY:2.75,y:-0.3,alpha:0.098},0).wait(1).to({scaleX:2.94,scaleY:2.94,y:-0.4,alpha:0},0).to({_off:true},1).wait(10));

	// 图层 2
	this.instance_2 = new lib.元件93();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5.8,-0.4,2.13,2.13,0,0,0,21.8,24.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(1).to({regX:25.3,regY:25.3,scaleX:2.02,scaleY:2.02,x:1.6,y:0.6,alpha:0.1},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:1.7,alpha:0.2},0).wait(1).to({scaleX:1.81,scaleY:1.81,alpha:0.3},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:1.8,alpha:0.4},0).wait(1).to({scaleX:1.59,scaleY:1.59,alpha:0.5},0).wait(1).to({scaleX:1.49,scaleY:1.49,alpha:0.6},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:1.9,alpha:0.7},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.8},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:1},0).wait(2).to({alpha:0.999},0).wait(2).to({alpha:0.998},0).wait(3).to({alpha:0.997},0).wait(2).to({alpha:0.996},0).wait(3).to({alpha:0.995},0).wait(2).to({alpha:0.994},0).wait(3).to({alpha:0.993},0).wait(2).to({alpha:0.992},0).wait(3).to({alpha:0.991},0).wait(2).to({alpha:0.99},0).wait(2).to({scaleX:1.17,scaleY:1.17,x:2.3,alpha:0.891},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:2.7,y:0.7,alpha:0.792},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:3.1,alpha:0.693},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:3.5,y:0.8,alpha:0.594},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:3.9,y:0.9,alpha:0.495},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:4.3,alpha:0.396},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:4.6,y:1,alpha:0.297},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:5,alpha:0.198},0).wait(1).to({scaleX:2.04,scaleY:2.04,x:5.4,y:1.1,alpha:0.099},0).wait(1).to({scaleX:2.14,scaleY:2.14,x:5.8,y:1.2,alpha:0},0).to({_off:true},1).wait(20));

	// 图层 1
	this.instance_3 = new lib.元件91();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.3,-0.3,1.837,1.837,0,0,0,31.9,29.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:32.5,regY:31.7,scaleX:1.75,scaleY:1.75,x:1.3,y:3.5,alpha:0.111},0).wait(1).to({scaleX:1.66,scaleY:1.66,y:3.2,alpha:0.222},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:1.2,y:2.9,alpha:0.333},0).wait(1).to({scaleX:1.47,scaleY:1.47,y:2.7,alpha:0.444},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:1.1,y:2.4,alpha:0.556},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:1,y:2.1,alpha:0.667},0).wait(1).to({scaleX:1.2,scaleY:1.2,y:1.8,alpha:0.778},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:0.9,y:1.5,alpha:0.889},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:1.2,alpha:1},0).wait(1).to({alpha:0.971},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.886},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.771},0).wait(1).to({alpha:0.743},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.686},0).wait(1).to({alpha:0.657},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.543},0).wait(1).to({alpha:0.514},0).wait(1).to({alpha:0.486},0).wait(1).to({alpha:0.457},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.343},0).wait(1).to({alpha:0.314},0).wait(1).to({alpha:0.286},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:1.4,alpha:0.257},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:1,y:1.6,alpha:0.229},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:1.7,alpha:0.2},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:1.1,y:1.9,alpha:0.171},0).wait(1).to({scaleX:1.39,scaleY:1.39,y:2.1,alpha:0.143},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:1.2,y:2.2,alpha:0.114},0).wait(1).to({scaleX:1.54,scaleY:1.54,y:2.4,alpha:0.086},0).wait(1).to({scaleX:1.62,scaleY:1.62,y:2.6,alpha:0.057},0).wait(1).to({scaleX:1.69,scaleY:1.69,x:1.3,y:2.7,alpha:0.029},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:1.4,y:2.9,alpha:0},0).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件50();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,100,5);
	this.instance.alpha = 0;
	this.instance.filters = [new cjs.BlurFilter(47, 20, 1)];
	this.instance.cache(-2,-2,204,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-25,304,58);


(lib.元件86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AjlPVIAAyIIHLAAIAASIg");
	var mask_graphics_1 = new cjs.Graphics().p("AjlPVIAA11IHLAAIAAV1g");
	var mask_graphics_2 = new cjs.Graphics().p("AjlPVIAA5aIHLAAIAAZag");
	var mask_graphics_3 = new cjs.Graphics().p("AjlPVIAA81IHLAAIAAc1g");
	var mask_graphics_4 = new cjs.Graphics().p("AjlQFMAAAggJIHLAAMAAAAgJg");
	var mask_graphics_5 = new cjs.Graphics().p("AjlRdMAAAgi5IHLAAMAAAAi5g");
	var mask_graphics_6 = new cjs.Graphics().p("AjlPVIAA9yIHLAAIAAdyg");
	var mask_graphics_7 = new cjs.Graphics().p("AjlPVIAA43IHLAAIAAY3g");
	var mask_graphics_8 = new cjs.Graphics().p("AjlPVIAA0KIHLAAIAAUKg");
	var mask_graphics_9 = new cjs.Graphics().p("AjlPVIAA0rIHLAAIAAUrg");
	var mask_graphics_10 = new cjs.Graphics().p("AjlPVIAA2dIHLAAIAAWdg");
	var mask_graphics_11 = new cjs.Graphics().p("AjlPVIAA4JIHLAAIAAYJg");
	var mask_graphics_12 = new cjs.Graphics().p("AjlPVIAA5xIHLAAIAAZxg");
	var mask_graphics_13 = new cjs.Graphics().p("AjlPVIAA6qIHLAAIAAaqg");
	var mask_graphics_14 = new cjs.Graphics().p("AjlPVIAA4yIHLAAIAAYyg");
	var mask_graphics_15 = new cjs.Graphics().p("AjlPVIAA4tIHLAAIAAYtg");
	var mask_graphics_16 = new cjs.Graphics().p("AjlPVIAA65IHLAAIAAa5g");
	var mask_graphics_17 = new cjs.Graphics().p("AjlPVIAA9AIHLAAIAAdAg");
	var mask_graphics_18 = new cjs.Graphics().p("AjlPhIAA/BIHLAAIAAfBg");
	var mask_graphics_19 = new cjs.Graphics().p("AjlQeMAAAgg7IHLAAMAAAAg7g");
	var mask_graphics_20 = new cjs.Graphics().p("AjlRZMAAAgixIHLAAMAAAAixg");
	var mask_graphics_21 = new cjs.Graphics().p("AjlSSMAAAgkjIHLAAMAAAAkjg");
	var mask_graphics_22 = new cjs.Graphics().p("AjlTIMAAAgmPIHLAAMAAAAmPg");
	var mask_graphics_23 = new cjs.Graphics().p("AjlT7MAAAgn1IHLAAMAAAAn1g");
	var mask_graphics_24 = new cjs.Graphics().p("AjlUtMAAAgpZIHLAAMAAAApZg");
	var mask_graphics_25 = new cjs.Graphics().p("AjlVdMAAAgq5IHLAAMAAAAq5g");
	var mask_graphics_26 = new cjs.Graphics().p("AjlWKMAAAgsTIHLAAMAAAAsTg");
	var mask_graphics_27 = new cjs.Graphics().p("AjlW2MAAAgtrIHLAAMAAAAtrg");
	var mask_graphics_28 = new cjs.Graphics().p("AjlXUMAAAgunIHLAAMAAAAung");
	var mask_graphics_29 = new cjs.Graphics().p("AjlV6MAAAgrzIHLAAMAAAArzg");
	var mask_graphics_30 = new cjs.Graphics().p("AjlUjMAAAgpFIHLAAMAAAApFg");
	var mask_graphics_31 = new cjs.Graphics().p("AjlTPMAAAgmdIHLAAMAAAAmdg");
	var mask_graphics_32 = new cjs.Graphics().p("AjlR9MAAAgj5IHLAAMAAAAj5g");
	var mask_graphics_33 = new cjs.Graphics().p("AjlQtMAAAghZIHLAAMAAAAhZg");
	var mask_graphics_34 = new cjs.Graphics().p("AjlPfIAA+9IHLAAIAAe9g");
	var mask_graphics_35 = new cjs.Graphics().p("AjlPVIAA8jIHLAAIAAcjg");
	var mask_graphics_36 = new cjs.Graphics().p("AjlPVIAA6MIHLAAIAAaMg");
	var mask_graphics_37 = new cjs.Graphics().p("AjlPVIAA32IHLAAIAAX2g");
	var mask_graphics_38 = new cjs.Graphics().p("AjlPVIAA1iIHLAAIAAVig");
	var mask_graphics_39 = new cjs.Graphics().p("AjlPVIAAzOIHLAAIAATOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_1,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_2,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_3,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_4,x:3.2,y:93.3}).wait(1).to({graphics:mask_graphics_5,x:3.2,y:84.4}).wait(1).to({graphics:mask_graphics_6,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_7,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_8,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_9,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_10,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_11,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_12,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_13,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_14,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_15,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_16,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_17,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_18,x:3.2,y:96.9}).wait(1).to({graphics:mask_graphics_19,x:3.2,y:90.7}).wait(1).to({graphics:mask_graphics_20,x:3.2,y:84.8}).wait(1).to({graphics:mask_graphics_21,x:3.2,y:79.2}).wait(1).to({graphics:mask_graphics_22,x:3.2,y:73.8}).wait(1).to({graphics:mask_graphics_23,x:3.2,y:68.6}).wait(1).to({graphics:mask_graphics_24,x:3.2,y:63.6}).wait(1).to({graphics:mask_graphics_25,x:3.2,y:58.9}).wait(1).to({graphics:mask_graphics_26,x:3.2,y:54.3}).wait(1).to({graphics:mask_graphics_27,x:3.2,y:49.9}).wait(1).to({graphics:mask_graphics_28,x:3.2,y:47}).wait(1).to({graphics:mask_graphics_29,x:3.2,y:56}).wait(1).to({graphics:mask_graphics_30,x:3.2,y:64.7}).wait(1).to({graphics:mask_graphics_31,x:3.2,y:73.1}).wait(1).to({graphics:mask_graphics_32,x:3.2,y:81.3}).wait(1).to({graphics:mask_graphics_33,x:3.2,y:89.3}).wait(1).to({graphics:mask_graphics_34,x:3.2,y:97.1}).wait(1).to({graphics:mask_graphics_35,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_36,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_37,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_38,x:3.2,y:98.1}).wait(1).to({graphics:mask_graphics_39,x:3.2,y:98.1}).wait(1));

	// 图层 1
	this.instance = new lib.元件81();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,80.1,20,23.9);


(lib.元件85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Aj6VCIAAwXIH1AAIAAQXg");
	var mask_graphics_1 = new cjs.Graphics().p("Aj6VCIAA1yIH1AAIAAVyg");
	var mask_graphics_2 = new cjs.Graphics().p("Aj6VCIAA7CIH1AAIAAbCg");
	var mask_graphics_3 = new cjs.Graphics().p("Aj6VCMAAAggHIH1AAMAAAAgHg");
	var mask_graphics_4 = new cjs.Graphics().p("Aj6VCMAAAgipIH1AAMAAAAipg");
	var mask_graphics_5 = new cjs.Graphics().p("Aj6VCIAA+vIH1AAIAAevg");
	var mask_graphics_6 = new cjs.Graphics().p("Aj6VCIAA+XIH1AAIAAeXg");
	var mask_graphics_7 = new cjs.Graphics().p("Aj6VCMAAAghRIH1AAMAAAAhRg");
	var mask_graphics_8 = new cjs.Graphics().p("Aj6VCMAAAgkEIH1AAMAAAAkEg");
	var mask_graphics_9 = new cjs.Graphics().p("Aj6VCMAAAgmwIH1AAMAAAAmwg");
	var mask_graphics_10 = new cjs.Graphics().p("Aj6VCMAAAgpWIH1AAMAAAApWg");
	var mask_graphics_11 = new cjs.Graphics().p("Aj6V7MAAAgr1IH1AAMAAAAr1g");
	var mask_graphics_12 = new cjs.Graphics().p("Aj6XIMAAAguPIH1AAMAAAAuPg");
	var mask_graphics_13 = new cjs.Graphics().p("Aj6YTMAAAgwlIH1AAMAAAAwlg");
	var mask_graphics_14 = new cjs.Graphics().p("Aj6ZXMAAAgytIH1AAMAAAAytg");
	var mask_graphics_15 = new cjs.Graphics().p("Aj6YvMAAAgxdIH1AAMAAAAxdg");
	var mask_graphics_16 = new cjs.Graphics().p("Aj6YHMAAAgwNIH1AAMAAAAwNg");
	var mask_graphics_17 = new cjs.Graphics().p("Aj6XiMAAAgvDIH1AAMAAAAvDg");
	var mask_graphics_18 = new cjs.Graphics().p("Aj6W9MAAAgt5IH1AAMAAAAt5g");
	var mask_graphics_19 = new cjs.Graphics().p("Aj6WbMAAAgs1IH1AAMAAAAs1g");
	var mask_graphics_20 = new cjs.Graphics().p("Aj6V5MAAAgrxIH1AAMAAAArxg");
	var mask_graphics_21 = new cjs.Graphics().p("Aj6VZMAAAgqxIH1AAMAAAAqxg");
	var mask_graphics_22 = new cjs.Graphics().p("Aj6VfMAAAgq9IH1AAMAAAAq9g");
	var mask_graphics_23 = new cjs.Graphics().p("Aj6XAMAAAgt/IH1AAMAAAAt/g");
	var mask_graphics_24 = new cjs.Graphics().p("Aj6YeMAAAgw7IH1AAMAAAAw7g");
	var mask_graphics_25 = new cjs.Graphics().p("Aj6Z4MAAAgzvIH1AAMAAAAzvg");
	var mask_graphics_26 = new cjs.Graphics().p("Aj6bPMAAAg2dIH1AAMAAAA2dg");
	var mask_graphics_27 = new cjs.Graphics().p("Aj6cjMAAAg5FIH1AAMAAAA5Fg");
	var mask_graphics_28 = new cjs.Graphics().p("Aj6dzMAAAg7lIH1AAMAAAA7lg");
	var mask_graphics_29 = new cjs.Graphics().p("Aj6fBMAAAg+BIH1AAMAAAA+Bg");
	var mask_graphics_30 = new cjs.Graphics().p("EgD6AgNMAAAhAZIH1AAMAAABAZg");
	var mask_graphics_31 = new cjs.Graphics().p("EgD6AhVMAAAhCpIH1AAMAAABCpg");
	var mask_graphics_32 = new cjs.Graphics().p("Aj6fgMAAAg+/IH1AAMAAAA+/g");
	var mask_graphics_33 = new cjs.Graphics().p("Aj6dYMAAAg6vIH1AAMAAAA6vg");
	var mask_graphics_34 = new cjs.Graphics().p("Aj6bUMAAAg2nIH1AAMAAAA2ng");
	var mask_graphics_35 = new cjs.Graphics().p("Aj6ZTMAAAgylIH1AAMAAAAylg");
	var mask_graphics_36 = new cjs.Graphics().p("Aj6XWMAAAgurIH1AAMAAAAurg");
	var mask_graphics_37 = new cjs.Graphics().p("Aj6VbMAAAgq1IH1AAMAAAAq1g");
	var mask_graphics_38 = new cjs.Graphics().p("Aj6VCMAAAgnEIH1AAMAAAAnEg");
	var mask_graphics_39 = new cjs.Graphics().p("Aj6VCMAAAgjYIH1AAMAAAAjYg");
	var mask_graphics_40 = new cjs.Graphics().p("Aj6VCIAA/vIH1AAIAAfvg");
	var mask_graphics_41 = new cjs.Graphics().p("Aj6VCIAA8JIH1AAIAAcJg");
	var mask_graphics_42 = new cjs.Graphics().p("Aj6VCIAA4lIH1AAIAAYlg");
	var mask_graphics_43 = new cjs.Graphics().p("Aj6VCIAA1DIH1AAIAAVDg");
	var mask_graphics_44 = new cjs.Graphics().p("Aj6VCIAAxhIH1AAIAARhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_1,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_2,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_3,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_4,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_5,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_6,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_7,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_8,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_9,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_10,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_11,x:-5.1,y:128.8}).wait(1).to({graphics:mask_graphics_12,x:-5.1,y:121.1}).wait(1).to({graphics:mask_graphics_13,x:-5.1,y:113.7}).wait(1).to({graphics:mask_graphics_14,x:-5.1,y:106.8}).wait(1).to({graphics:mask_graphics_15,x:-5.1,y:110.9}).wait(1).to({graphics:mask_graphics_16,x:-5.1,y:114.8}).wait(1).to({graphics:mask_graphics_17,x:-5.1,y:118.6}).wait(1).to({graphics:mask_graphics_18,x:-5.1,y:122.2}).wait(1).to({graphics:mask_graphics_19,x:-5.1,y:125.7}).wait(1).to({graphics:mask_graphics_20,x:-5.1,y:129}).wait(1).to({graphics:mask_graphics_21,x:-5.1,y:132.3}).wait(1).to({graphics:mask_graphics_22,x:-5.1,y:131.7}).wait(1).to({graphics:mask_graphics_23,x:-5.1,y:121.9}).wait(1).to({graphics:mask_graphics_24,x:-5.1,y:112.6}).wait(1).to({graphics:mask_graphics_25,x:-5.1,y:103.5}).wait(1).to({graphics:mask_graphics_26,x:-5.1,y:94.8}).wait(1).to({graphics:mask_graphics_27,x:-5.1,y:86.5}).wait(1).to({graphics:mask_graphics_28,x:-5.1,y:78.4}).wait(1).to({graphics:mask_graphics_29,x:-5.1,y:70.6}).wait(1).to({graphics:mask_graphics_30,x:-5.1,y:63.1}).wait(1).to({graphics:mask_graphics_31,x:-5.1,y:55.8}).wait(1).to({graphics:mask_graphics_32,x:-5.1,y:67.5}).wait(1).to({graphics:mask_graphics_33,x:-5.1,y:81.1}).wait(1).to({graphics:mask_graphics_34,x:-5.1,y:94.4}).wait(1).to({graphics:mask_graphics_35,x:-5.1,y:107.2}).wait(1).to({graphics:mask_graphics_36,x:-5.1,y:119.8}).wait(1).to({graphics:mask_graphics_37,x:-5.1,y:132.1}).wait(1).to({graphics:mask_graphics_38,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_39,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_40,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_41,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_42,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_43,x:-5.1,y:134.6}).wait(1).to({graphics:mask_graphics_44,x:-5.1,y:134.6}).wait(1));

	// 图层 1
	this.instance = new lib.元件80();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,164.5,40,38);


(lib.元件62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件29();
	this.instance.parent = this;
	this.instance.setTransform(131.8,49.7,0.718,0.718,0,0,0,183.6,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件62, new cjs.Rectangle(0,23.8,263.4,51.7), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件29();
	this.instance.parent = this;
	this.instance.setTransform(131.8,49.7,0.718,0.718,0,0,0,183.6,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件48, new cjs.Rectangle(0,23.8,263.4,51.7), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件84();
	this.instance.parent = this;
	this.instance.setTransform(6,72.5,1,1,0,0,0,39,39.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:8.6,y:69.9,alpha:0.071},0).wait(1).to({x:11.2,y:67.3,alpha:0.143},0).wait(1).to({x:13.8,y:64.7,alpha:0.214},0).wait(1).to({x:16.4,y:62.2,alpha:0.286},0).wait(1).to({x:19,y:59.6,alpha:0.357},0).wait(1).to({x:21.6,y:57,alpha:0.429},0).wait(1).to({x:24.2,y:54.4,alpha:0.5},0).wait(1).to({x:26.7,y:51.8,alpha:0.571},0).wait(1).to({x:29.3,y:49.2,alpha:0.643},0).wait(1).to({x:31.9,y:46.7,alpha:0.714},0).wait(1).to({x:34.5,y:44.1,alpha:0.786},0).wait(1).to({x:37.1,y:41.5,alpha:0.857},0).wait(1).to({x:39.6,y:39,alpha:0.929},0).wait(1).to({x:42.2,y:36.4,alpha:1},0).wait(1).to({x:44.8,y:33.8,alpha:0.933},0).wait(1).to({x:47.4,y:31.2,alpha:0.867},0).wait(1).to({x:50,y:28.6,alpha:0.8},0).wait(1).to({x:52.6,y:26,alpha:0.733},0).wait(1).to({x:55.1,y:23.4,alpha:0.667},0).wait(1).to({x:57.7,y:20.9,alpha:0.6},0).wait(1).to({x:60.3,y:18.3,alpha:0.533},0).wait(1).to({x:62.9,y:15.7,alpha:0.467},0).wait(1).to({x:65.5,y:13.1,alpha:0.4},0).wait(1).to({x:68.1,y:10.5,alpha:0.333},0).wait(1).to({x:70.7,y:7.9,alpha:0.267},0).wait(1).to({x:73.2,y:5.4,alpha:0.2},0).wait(1).to({x:75.8,y:2.8,alpha:0.133},0).wait(1).to({x:78.4,y:0.2,alpha:0.067},0).wait(1).to({x:81,y:-2.4,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,33,78,79);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件83();
	this.instance.parent = this;
	this.instance.setTransform(72,72.5,1,1,0,0,0,39,39.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:69.7,y:70.2,alpha:0.071},0).wait(1).to({x:67.3,y:67.8,alpha:0.143},0).wait(1).to({x:65,y:65.5,alpha:0.214},0).wait(1).to({x:62.6,y:63.1,alpha:0.286},0).wait(1).to({x:60.3,y:60.8,alpha:0.357},0).wait(1).to({x:57.9,y:58.4,alpha:0.429},0).wait(1).to({x:55.6,y:56.1,alpha:0.5},0).wait(1).to({x:53.2,y:53.7,alpha:0.571},0).wait(1).to({x:50.9,y:51.4,alpha:0.643},0).wait(1).to({x:48.6,y:49.1,alpha:0.714},0).wait(1).to({x:46.2,y:46.7,alpha:0.786},0).wait(1).to({x:43.9,y:44.4,alpha:0.857},0).wait(1).to({x:41.5,y:42,alpha:0.929},0).wait(1).to({x:39.2,y:39.7,alpha:1},0).wait(1).to({x:36.9,y:37.4,alpha:0.933},0).wait(1).to({x:34.5,y:35,alpha:0.867},0).wait(1).to({x:32.2,y:32.7,alpha:0.8},0).wait(1).to({x:29.8,y:30.3,alpha:0.733},0).wait(1).to({x:27.5,y:28,alpha:0.667},0).wait(1).to({x:25.2,y:25.7,alpha:0.6},0).wait(1).to({x:22.8,y:23.3,alpha:0.533},0).wait(1).to({x:20.5,y:21,alpha:0.467},0).wait(1).to({x:18.1,y:18.6,alpha:0.4},0).wait(1).to({x:15.8,y:16.3,alpha:0.333},0).wait(1).to({x:13.4,y:13.9,alpha:0.267},0).wait(1).to({x:11.1,y:11.6,alpha:0.2},0).wait(1).to({x:8.7,y:9.2,alpha:0.133},0).wait(1).to({x:6.4,y:6.9,alpha:0.067},0).wait(1).to({x:4,y:4.5,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33,33,78,79);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件82();
	this.instance.parent = this;
	this.instance.setTransform(-48,-47.6,1,1,0,0,0,39,39.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-45.3,y:-44.9,alpha:0.071},0).wait(1).to({x:-42.6,y:-42.2,alpha:0.143},0).wait(1).to({x:-39.8,y:-39.5,alpha:0.214},0).wait(1).to({x:-37.1,y:-36.8,alpha:0.286},0).wait(1).to({x:-34.4,y:-34.1,alpha:0.357},0).wait(1).to({x:-31.7,y:-31.4,alpha:0.429},0).wait(1).to({x:-28.9,y:-28.7,alpha:0.5},0).wait(1).to({x:-26.2,y:-26,alpha:0.571},0).wait(1).to({x:-23.5,y:-23.3,alpha:0.643},0).wait(1).to({x:-20.8,y:-20.7,alpha:0.714},0).wait(1).to({x:-18,y:-18,alpha:0.786},0).wait(1).to({x:-15.3,y:-15.3,alpha:0.857},0).wait(1).to({x:-12.6,y:-12.6,alpha:0.929},0).wait(1).to({x:-9.9,y:-9.9,alpha:1},0).wait(1).to({x:-7.1,y:-7.2,alpha:0.933},0).wait(1).to({x:-4.4,y:-4.5,alpha:0.867},0).wait(1).to({x:-1.7,y:-1.8,alpha:0.8},0).wait(1).to({x:1,y:0.9,alpha:0.733},0).wait(1).to({x:3.8,y:3.6,alpha:0.667},0).wait(1).to({x:6.5,y:6.2,alpha:0.6},0).wait(1).to({x:9.2,y:8.9,alpha:0.533},0).wait(1).to({x:11.9,y:11.6,alpha:0.467},0).wait(1).to({x:14.7,y:14.3,alpha:0.4},0).wait(1).to({x:17.4,y:17,alpha:0.333},0).wait(1).to({x:20.1,y:19.7,alpha:0.267},0).wait(1).to({x:22.8,y:22.4,alpha:0.2},0).wait(1).to({x:25.6,y:25.1,alpha:0.133},0).wait(1).to({x:28.3,y:27.8,alpha:0.067},0).wait(1).to({x:31,y:30.4,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-87.1,78,79);


// stage content:
(lib.FLchuanye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// progressText1
	this.progressText1 = new cjs.Text("100%", "12px 'Arial'", "#00CCFF");
	this.progressText1.name = "progressText1";
	this.progressText1.textAlign = "right";
	this.progressText1.lineHeight = 15;
	this.progressText1.parent = this;
	this.progressText1.setTransform(261.2,856.2);
	this.progressText1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.progressText1).wait(105).to({_off:false},0).wait(393));

	// progressText2
	this.progressText2 = new cjs.Text("100%", "12px 'Arial'", "#00CCFF");
	this.progressText2.name = "progressText2";
	this.progressText2.textAlign = "right";
	this.progressText2.lineHeight = 15;
	this.progressText2.parent = this;
	this.progressText2.setTransform(261.2,796.2);
	this.progressText2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.progressText2).wait(105).to({_off:false},0).wait(393));

	// progressText3
	this.progressText3 = new cjs.Text("100%", "12px 'Arial'", "#00CCFF");
	this.progressText3.name = "progressText3";
	this.progressText3.textAlign = "right";
	this.progressText3.lineHeight = 15;
	this.progressText3.parent = this;
	this.progressText3.setTransform(410.1,856.2);
	this.progressText3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.progressText3).wait(105).to({_off:false},0).wait(393));

	// progressText4
	this.progressText4 = new cjs.Text("100%", "12px 'Arial'", "#00CCFF");
	this.progressText4.name = "progressText4";
	this.progressText4.textAlign = "right";
	this.progressText4.lineHeight = 15;
	this.progressText4.parent = this;
	this.progressText4.setTransform(410.1,796.2);
	this.progressText4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.progressText4).wait(105).to({_off:false},0).wait(393));

	// 图层 69
	this.instance = new lib.元件56();
	this.instance.parent = this;
	this.instance.setTransform(320.5,754.5,1,1,0,0,0,221.5,14.5);
	this.instance._off = true;

	this.instance_1 = new lib.gezi();
	this.instance_1.parent = this;
	this.instance_1.setTransform(99,740);

	this.instance_2 = new lib.元件65();
	this.instance_2.parent = this;
	this.instance_2.setTransform(320.5,754.5,1,1,0,0,0,221.5,14.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},136).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},344).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(136).to({_off:false},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({_off:true},1).wait(355));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 61
	this.instance_3 = new lib.元件37();
	this.instance_3.parent = this;
	this.instance_3.setTransform(319.7,113.2,1,1,0,0,0,100,10);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(136).to({_off:false},0).wait(352).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 62
	this.instance_4 = new lib.元件89();
	this.instance_4.parent = this;
	this.instance_4.setTransform(319.7,113.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(136).to({_off:false},0).wait(362));

	// 图层 59
	this.instance_5 = new lib.元件36();
	this.instance_5.parent = this;
	this.instance_5.setTransform(320,531,1,1,0,0,0,200.5,59.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(105).to({_off:false},0).wait(1).to({y:530.9,alpha:0.167},0).wait(1).to({y:530.8,alpha:0.333},0).wait(1).to({y:530.7,alpha:0.5},0).wait(1).to({y:530.6,alpha:0.667},0).wait(1).to({y:530.5,alpha:0.833},0).wait(1).to({y:530.4,alpha:1},0).wait(1).to({y:515.7},0).wait(1).to({y:500.9},0).wait(1).to({y:486.2},0).wait(1).to({y:471.4},0).wait(1).to({y:456.6},0).wait(1).to({y:441.9},0).wait(1).to({y:427.1},0).wait(1).to({y:412.4},0).wait(1).to({y:397.6},0).wait(1).to({y:382.9},0).wait(1).to({y:368.1},0).wait(1).to({y:353.3},0).wait(1).to({y:338.6},0).wait(1).to({y:323.8},0).wait(1).to({y:309.1},0).wait(1).to({y:294.3},0).wait(1).to({y:279.5},0).wait(1).to({y:264.8},0).wait(1).to({y:250},0).wait(1).to({y:235.3},0).wait(1).to({y:220.5},0).wait(1).to({y:205.8},0).wait(1).to({y:191},0).wait(354).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 58
	this.instance_6 = new lib.元件35();
	this.instance_6.parent = this;
	this.instance_6.setTransform(322.8,493,1,1,0,0,0,202.5,38);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).wait(1).to({y:493.2,alpha:0.167},0).wait(1).to({y:493.4,alpha:0.333},0).wait(1).to({y:493.6,alpha:0.5},0).wait(1).to({y:493.8,alpha:0.667},0).wait(1).to({y:494,alpha:0.833},0).wait(1).to({y:494.1,alpha:1},0).wait(1).to({y:504.2},0).wait(1).to({y:514.2},0).wait(1).to({y:524.3},0).wait(1).to({y:534.3},0).wait(1).to({y:544.3},0).wait(1).to({y:554.4},0).wait(1).to({y:564.4},0).wait(1).to({y:574.4},0).wait(1).to({y:584.5},0).wait(1).to({y:594.5},0).wait(1).to({y:604.6},0).wait(1).to({y:614.6},0).wait(1).to({y:624.6},0).wait(1).to({y:634.7},0).wait(1).to({y:644.7},0).wait(1).to({y:654.7},0).wait(1).to({y:664.8},0).wait(1).to({y:674.8},0).wait(1).to({y:684.9},0).wait(1).to({y:694.9},0).wait(1).to({y:704.9},0).wait(1).to({y:715},0).wait(1).to({y:725},0).wait(354).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 60
	this.instance_7 = new lib.元件49();
	this.instance_7.parent = this;
	this.instance_7.setTransform(320,472.7,0.25,0.25,0,180,0,72.4,8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;
	this.instance_7.filters = [new cjs.BlurFilter(176, 8, 1)];
	this.instance_7.cache(-2,-2,149,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(105).to({_off:false},0).wait(1).to({regX:72.5,scaleX:0.75,scaleY:0.75,x:320.1,y:472.6,alpha:0.167},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:472.7,alpha:0.333},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:320.2,y:472.6,alpha:0.5},0).wait(1).to({scaleX:2.26,scaleY:2.26,y:472.7,alpha:0.667},0).wait(1).to({scaleX:2.77,scaleY:2.77,x:320.3,y:472.6,alpha:0.833},0).wait(1).to({scaleX:3.27,scaleY:3.27,y:472.7,alpha:1},0).wait(1).to({scaleX:4,scaleY:4,x:320.4,alpha:0.75},0).wait(1).to({scaleX:4.73,scaleY:4.73,x:320.5,alpha:0.5},0).wait(1).to({scaleX:5.46,scaleY:5.46,x:320.6,alpha:0.25},0).wait(1).to({scaleX:6.19,scaleY:6.19,x:320.7,alpha:0},0).wait(383));

	// 图层 57
	this.instance_8 = new lib.元件33();
	this.instance_8.parent = this;
	this.instance_8.setTransform(319.6,856.4,1,1,0,0,0,199.3,61.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(102).to({_off:false},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(379).to({regX:213.3,regY:90.4,x:333.6,y:885.6},0).wait(1).to({regX:199.3,regY:61.2,x:319.6,y:856.4,alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 65
	this.instance_9 = new lib.元件90();
	this.instance_9.parent = this;
	this.instance_9.setTransform(321.5,840.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(483).to({_off:false},0).wait(15));

	// 图层 55
	this.instance_10 = new lib.元件28();
	this.instance_10.parent = this;
	this.instance_10.setTransform(314.1,916,0.718,0.718,0,0,0,194,47.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(91).to({_off:false},0).wait(1).to({regY:47.5,x:314,y:911.5,alpha:0.111},0).wait(1).to({y:907.1,alpha:0.222},0).wait(1).to({y:902.6,alpha:0.333},0).wait(1).to({y:898.2,alpha:0.444},0).wait(1).to({y:893.7,alpha:0.556},0).wait(1).to({y:889.3,alpha:0.667},0).wait(1).to({y:884.8,alpha:0.778},0).wait(1).to({y:880.4,alpha:0.889},0).wait(1).to({y:875.9,alpha:1},0).wait(1).to({regY:47.6,y:876},0).wait(386).to({x:314.1},0).wait(1).to({regY:47.5,x:314,y:875.9,alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 54
	this.instance_11 = new lib.元件48();
	this.instance_11.parent = this;
	this.instance_11.setTransform(314,762.4,1,1,0,0,0,131.7,37.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.元件29();
	this.instance_12.parent = this;
	this.instance_12.setTransform(314.1,814.6,0.718,0.718,0,0,0,183.6,36.1);

	this.instance_13 = new lib.元件62();
	this.instance_13.parent = this;
	this.instance_13.setTransform(323.3,820.6,1,1,0,0,0,141,55.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},91).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},386).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(91).to({_off:false},0).wait(1).to({regY:49.6,y:778.9,alpha:0.111},0).wait(1).to({y:783.4,alpha:0.222},0).wait(1).to({y:787.8,alpha:0.333},0).wait(1).to({y:792.3,alpha:0.444},0).wait(1).to({y:796.7,alpha:0.556},0).wait(1).to({y:801.2,alpha:0.667},0).wait(1).to({y:805.6,alpha:0.778},0).wait(1).to({y:810.1,alpha:0.889},0).wait(1).to({y:814.5,alpha:1},0).to({_off:true},1).wait(397));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(487).to({_off:false},0).wait(1).to({regX:131.7,regY:49.6,x:314,y:814.5,alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 64 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_430 = new cjs.Graphics().p("EAI3Az3QgXgYAAghIAAmZQAAgiAXgYQAYgXAiAAQAhAAAYAXQAYAYAAAiIAAGZQAAAhgYAYQgYAYghAAQgiAAgYgYg");
	var mask_graphics_431 = new cjs.Graphics().p("EAIeAz3QghgYAAghIAAmZQAAgiAhgYQAjgXAwAAQAwAAAiAXQAjAYAAAiIAAGZQAAAhgjAYQgiAYgwAAQgwAAgjgYg");
	var mask_graphics_432 = new cjs.Graphics().p("EAIFAz3QgsgYAAghIAAmZQAAgiAsgYQAtgXA/AAQA/AAAtAXQAtAYAAAiIAAGZQAAAhgtAYQgtAYg/AAQg/AAgtgYg");
	var mask_graphics_433 = new cjs.Graphics().p("EAHsAz3Qg2gYAAghIAAmZQAAgiA2gYQA4gXBOAAQBNAAA3AXQA4AYAAAiIAAGZQAAAhg4AYQg3AYhNAAQhOAAg4gYg");
	var mask_graphics_434 = new cjs.Graphics().p("EAHTAz3QhBgYAAghIAAmZQAAgiBBgYQBCgXBdAAQBcAABBAXQBCAYAAAiIAAGZQAAAhhCAYQhBAYhcAAQhdAAhCgYg");
	var mask_graphics_435 = new cjs.Graphics().p("EAG6Az3QhLgYAAghIAAmZQAAgiBLgYQBNgXBrAAQBrAABMAXQBMAYAAAiIAAGZQAAAhhMAYQhMAYhrAAQhrAAhNgYg");
	var mask_graphics_436 = new cjs.Graphics().p("EAGhAz3QhWgYAAghIAAmZQAAgiBWgYQBXgXB6AAQB6AABWAXQBXAYAAAiIAAGZQAAAhhXAYQhWAYh6AAQh6AAhXgYg");
	var mask_graphics_437 = new cjs.Graphics().p("EAGIAz3QhggYAAghIAAmZQAAgiBggYQBigXCJAAQCIAABgAXQBiAYAAAiIAAGZQAAAhhiAYQhgAYiIAAQiJAAhigYg");
	var mask_graphics_438 = new cjs.Graphics().p("EAFvAz3QhqgYAAghIAAmZQAAgiBqgYQBsgXCYAAQCXAABqAXQBtAYAAAiIAAGZQAAAhhtAYQhqAYiXAAQiYAAhsgYg");
	var mask_graphics_439 = new cjs.Graphics().p("EAFWAz3Qh1gYAAghIAAmZQAAgiB1gYQB3gXCmAAQCmAAB1AXQB3AYAAAiIAAGZQAAAhh3AYQh1AYimAAQimAAh3gYg");
	var mask_graphics_440 = new cjs.Graphics().p("EAE9Az3Qh/gYAAghIAAmZQAAgiB/gYQCBgXC1AAQC1AAB/AXQCCAYAAAiIAAGZQAAAhiCAYQh/AYi1AAQi1AAiBgYg");
	var mask_graphics_441 = new cjs.Graphics().p("EAEkAz3QiKgYAAghIAAmZQAAgiCKgYQCMgXDDAAQDEAACJAXQCNAYAAAiIAAGZQAAAhiNAYQiJAYjEAAQjDAAiMgYg");
	var mask_graphics_442 = new cjs.Graphics().p("EAEKAz3QiTgYAAghIAAmZQAAgiCTgYQCXgXDTAAQDSAACUAXQCWAYAAAiIAAGZQAAAhiWAYQiUAYjSAAQjTAAiXgYg");
	var mask_graphics_443 = new cjs.Graphics().p("EADxAz3QiegYAAghIAAmZQAAgiCegYQCigXDhAAQDhAACeAXQChAYAAAiIAAGZQAAAhihAYQieAYjhAAQjhAAiigYg");
	var mask_graphics_444 = new cjs.Graphics().p("EADYAz3QiogYAAghIAAmZQAAgiCogYQCsgXDwAAQDwAACoAXQCsAYAAAiIAAGZQAAAhisAYQioAYjwAAQjwAAisgYg");
	var mask_graphics_445 = new cjs.Graphics().p("EAC/Az3QiygYAAghIAAmZQAAgiCygYQC3gXD+AAQD/AACzAXQC2AYAAAiIAAGZQAAAhi2AYQizAYj/AAQj+AAi3gYg");
	var mask_graphics_446 = new cjs.Graphics().p("EACmAz3Qi8gYAAghIAAmZQAAgiC8gYQDBgXEOAAQENAAC9AXQDBAYAAAiIAAGZQAAAhjBAYQi9AYkNAAQkOAAjBgYg");
	var mask_graphics_447 = new cjs.Graphics().p("EACNAz3QjGgYAAghIAAmZQAAgiDGgYQDMgXEcAAQEcAADHAXQDMAYAAAiIAAGZQAAAhjMAYQjHAYkcAAQkcAAjMgYg");
	var mask_graphics_448 = new cjs.Graphics().p("EAB0Az3QjRgYAAghIAAmZQAAgiDRgYQDWgXErAAQErAADSAXQDWAYAAAiIAAGZQAAAhjWAYQjSAYkrAAQkrAAjWgYg");
	var mask_graphics_449 = new cjs.Graphics().p("EABbAz3QjbgYAAghIAAmZQAAgiDbgYQDhgXE5AAQE6AADcAXQDhAYAAAiIAAGZQAAAhjhAYQjcAYk6AAQk5AAjhgYg");
	var mask_graphics_450 = new cjs.Graphics().p("EABCAz3QjmgYAAghIAAmZQAAgiDmgYQDrgXFIAAQFJAADmAXQDrAYAAAiIAAGZQAAAhjrAYQjmAYlJAAQlIAAjrgYg");
	var mask_graphics_451 = new cjs.Graphics().p("EAApAz3QjwgYAAghIAAmZQAAgiDwgYQD1gXFYAAQFXAADwAXQD2AYAAAiIAAGZQAAAhj2AYQjwAYlXAAQlYAAj1gYg");
	var mask_graphics_452 = new cjs.Graphics().p("EAAQAz3Qj6gYAAghIAAmZQAAgiD6gYQEAgXFmAAQFmAAD7AXQEAAYAAAiIAAGZQAAAhkAAYQj7AYlmAAQlmAAkAgYg");
	var mask_graphics_453 = new cjs.Graphics().p("EgAJAz3QkFgYAAghIAAmZQAAgiEFgYQEKgXF1AAQF1AAEFAXQELAYAAAiIAAGZQAAAhkLAYQkFAYl1AAQl1AAkKgYg");
	var mask_graphics_454 = new cjs.Graphics().p("EgAiAz3QkPgYAAghIAAmZQAAgiEPgYQEVgXGDAAQGEAAEPAXQEWAYAAAiIAAGZQAAAhkWAYQkPAYmEAAQmDAAkVgYg");
	var mask_graphics_455 = new cjs.Graphics().p("EgA7Az3QkagYAAghIAAmZQAAgiEagYQEfgXGSAAQGTAAEaAXQEgAYAAAiIAAGZQAAAhkgAYQkaAYmTAAQmSAAkfgYg");
	var mask_graphics_456 = new cjs.Graphics().p("EgBUAz3QkkgYAAghIAAmZQAAgiEkgYQEqgXGhAAQGhAAEkAXQErAYAAAiIAAGZQAAAhkrAYQkkAYmhAAQmhAAkqgYg");
	var mask_graphics_457 = new cjs.Graphics().p("EgBtAz3QkvgYAAghIAAmZQAAgiEvgYQE0gXGwAAQGwAAEuAXQE1AYAAAiIAAGZQAAAhk1AYQkuAYmwAAQmwAAk0gYg");
	var mask_graphics_458 = new cjs.Graphics().p("EgCGAz3Qk5gYAAghIAAmZQAAgiE5gYQE/gXG+AAQG+AAE6AXQE/AYAAAiIAAGZQAAAhk/AYQk6AYm+AAQm+AAk/gYg");
	var mask_graphics_459 = new cjs.Graphics().p("EgCfAz3QlDgYAAghIAAmZQAAgiFDgYQFJgXHNAAQHNAAFEAXQFKAYAAAiIAAGZQAAAhlKAYQlEAYnNAAQnNAAlJgYg");
	var mask_graphics_460 = new cjs.Graphics().p("EgC4Az3QlOgYAAghIAAmZQAAgiFOgYQFUgXHcAAQHbAAFOAXQFVAYAAAiIAAGZQAAAhlVAYQlOAYnbAAQncAAlUgYg");
	var mask_graphics_461 = new cjs.Graphics().p("EgDRAz3QlYgYAAghIAAmZQAAgiFYgYQFegXHrAAQHqAAFZAXQFfAYAAAiIAAGZQAAAhlfAYQlZAYnqAAQnrAAlegYg");
	var mask_graphics_462 = new cjs.Graphics().p("EgDqAz3QljgYAAghIAAmZQAAgiFjgYQFpgXH5AAQH5AAFjAXQFqAYAAAiIAAGZQAAAhlqAYQljAYn5AAQn5AAlpgYg");
	var mask_graphics_463 = new cjs.Graphics().p("EgEDAz3QltgYAAghIAAmZQAAgiFtgYQFzgXIIAAQIIAAFtAXQF1AYAAAiIAAGZQAAAhl1AYQltAYoIAAQoIAAlzgYg");
	var mask_graphics_464 = new cjs.Graphics().p("EgEcAz3Ql4gYAAghIAAmZQAAgiF4gYQF+gXIWAAQIXAAF3AXQGAAYAAAiIAAGZQAAAhmAAYQl3AYoXAAQoWAAl+gYg");
	var mask_graphics_465 = new cjs.Graphics().p("EgE2Az3QmBgYAAghIAAmZQAAgiGBgYQGJgXImAAQIlAAGCAXQGJAYAAAiIAAGZQAAAhmJAYQmCAYolAAQomAAmJgYg");
	var mask_graphics_466 = new cjs.Graphics().p("EgFPAz3QmLgYAAghIAAmZQAAgiGLgYQGUgXI0AAQI0AAGMAXQGUAYAAAiIAAGZQAAAhmUAYQmMAYo0AAQo0AAmUgYg");
	var mask_graphics_467 = new cjs.Graphics().p("EgFoAz3QmWgYAAghIAAmZQAAgiGWgYQGegXJDAAQJDAAGWAXQGfAYAAAiIAAGZQAAAhmfAYQmWAYpDAAQpDAAmegYg");
	var mask_graphics_468 = new cjs.Graphics().p("EgGBAz3QmggYAAghIAAmZQAAgiGggYQGpgXJRAAQJSAAGhAXQGpAYAAAiIAAGZQAAAhmpAYQmhAYpSAAQpRAAmpgYg");
	var mask_graphics_469 = new cjs.Graphics().p("EgGaAz3QmrgYAAghIAAmZQAAgiGrgYQGzgXJhAAQJgAAGrAXQG0AYAAAiIAAGZQAAAhm0AYQmrAYpgAAQphAAmzgYg");
	var mask_graphics_470 = new cjs.Graphics().p("EgGzAz3Qm1gYAAghIAAmZQAAgiG1gYQG+gXJvAAQJvAAG1AXQG/AYAAAiIAAGZQAAAhm/AYQm1AYpvAAQpvAAm+gYg");
	var mask_graphics_471 = new cjs.Graphics().p("EgHMAz3QnAgYAAghIAAmZQAAgiHAgYQHJgXJ9AAQJ+AAHAAXQHJAYAAAiIAAGZQAAAhnJAYQnAAYp+AAQp9AAnJgYg");
	var mask_graphics_472 = new cjs.Graphics().p("EgHlAz3QnKgYAAghIAAmZQAAgiHKgYQHTgXKMAAQKNAAHKAXQHUAYAAAiIAAGZQAAAhnUAYQnKAYqNAAQqMAAnTgYg");
	var mask_graphics_473 = new cjs.Graphics().p("EgH+Az3QnUgYAAghIAAmZQAAgiHUgYQHegXKaAAQKcAAHUAXQHeAYAAAiIAAGZQAAAhneAYQnUAYqcAAQqaAAnegYg");
	var mask_graphics_474 = new cjs.Graphics().p("EgIXAz3QnfgYAAghIAAmZQAAgiHfgYQHogXKqAAQKqAAHfAXQHoAYAAAiIAAGZQAAAhnoAYQnfAYqqAAQqqAAnogYg");
	var mask_graphics_475 = new cjs.Graphics().p("EgIwAz3QnpgYAAghIAAmZQAAgiHpgYQHzgXK4AAQK5AAHpAXQHzAYAAAiIAAGZQAAAhnzAYQnpAYq5AAQq4AAnzgYg");
	var mask_graphics_476 = new cjs.Graphics().p("EgJKAz3QnzgYAAghIAAmZQAAgiHzgYQH+gXLHAAQLIAAHzAXQH+AYAAAiIAAGZQAAAhn+AYQnzAYrIAAQrHAAn+gYg");
	var mask_graphics_477 = new cjs.Graphics().p("EgJjAz3Qn9gYAAghIAAmZQAAgiH9gYQIJgXLVAAQLXAAH9AXQIJAYAAAiIAAGZQAAAhoJAYQn9AYrXAAQrVAAoJgYg");
	var mask_graphics_478 = new cjs.Graphics().p("EgJ8Az3QoIgYAAghIAAmZQAAgiIIgYQITgXLlAAQLlAAIIAXQITAYAAAiIAAGZQAAAhoTAYQoIAYrlAAQrlAAoTgYg");
	var mask_graphics_479 = new cjs.Graphics().p("EgKVAz3QoSgYAAghIAAmZQAAgiISgYQIegXLzAAQL0AAISAXQIeAYAAAiIAAGZQAAAhoeAYQoSAYr0AAQrzAAoegYg");
	var mask_graphics_480 = new cjs.Graphics().p("EgKuAz3QodgYAAghIAAmZQAAgiIdgYQIogXMCAAQMDAAIcAXQIpAYAAAiIAAGZQAAAhopAYQocAYsDAAQsCAAoogYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(430).to({graphics:mask_graphics_430,x:70.6,y:334.3}).wait(1).to({graphics:mask_graphics_431,x:74.2,y:334.3}).wait(1).to({graphics:mask_graphics_432,x:77.8,y:334.3}).wait(1).to({graphics:mask_graphics_433,x:81.4,y:334.3}).wait(1).to({graphics:mask_graphics_434,x:84.9,y:334.3}).wait(1).to({graphics:mask_graphics_435,x:88.5,y:334.3}).wait(1).to({graphics:mask_graphics_436,x:92.1,y:334.3}).wait(1).to({graphics:mask_graphics_437,x:95.7,y:334.3}).wait(1).to({graphics:mask_graphics_438,x:99.3,y:334.3}).wait(1).to({graphics:mask_graphics_439,x:102.9,y:334.3}).wait(1).to({graphics:mask_graphics_440,x:106.5,y:334.3}).wait(1).to({graphics:mask_graphics_441,x:110.1,y:334.3}).wait(1).to({graphics:mask_graphics_442,x:113.6,y:334.3}).wait(1).to({graphics:mask_graphics_443,x:117.2,y:334.3}).wait(1).to({graphics:mask_graphics_444,x:120.8,y:334.3}).wait(1).to({graphics:mask_graphics_445,x:124.4,y:334.3}).wait(1).to({graphics:mask_graphics_446,x:128,y:334.3}).wait(1).to({graphics:mask_graphics_447,x:131.6,y:334.3}).wait(1).to({graphics:mask_graphics_448,x:135.2,y:334.3}).wait(1).to({graphics:mask_graphics_449,x:138.8,y:334.3}).wait(1).to({graphics:mask_graphics_450,x:142.3,y:334.3}).wait(1).to({graphics:mask_graphics_451,x:145.9,y:334.3}).wait(1).to({graphics:mask_graphics_452,x:149.5,y:334.3}).wait(1).to({graphics:mask_graphics_453,x:153.1,y:334.3}).wait(1).to({graphics:mask_graphics_454,x:156.7,y:334.3}).wait(1).to({graphics:mask_graphics_455,x:160.3,y:334.3}).wait(1).to({graphics:mask_graphics_456,x:163.9,y:334.3}).wait(1).to({graphics:mask_graphics_457,x:167.4,y:334.3}).wait(1).to({graphics:mask_graphics_458,x:171,y:334.3}).wait(1).to({graphics:mask_graphics_459,x:174.6,y:334.3}).wait(1).to({graphics:mask_graphics_460,x:178.2,y:334.3}).wait(1).to({graphics:mask_graphics_461,x:181.8,y:334.3}).wait(1).to({graphics:mask_graphics_462,x:185.4,y:334.3}).wait(1).to({graphics:mask_graphics_463,x:189,y:334.3}).wait(1).to({graphics:mask_graphics_464,x:192.6,y:334.3}).wait(1).to({graphics:mask_graphics_465,x:196.1,y:334.3}).wait(1).to({graphics:mask_graphics_466,x:199.7,y:334.3}).wait(1).to({graphics:mask_graphics_467,x:203.3,y:334.3}).wait(1).to({graphics:mask_graphics_468,x:206.9,y:334.3}).wait(1).to({graphics:mask_graphics_469,x:210.5,y:334.3}).wait(1).to({graphics:mask_graphics_470,x:214.1,y:334.3}).wait(1).to({graphics:mask_graphics_471,x:217.7,y:334.3}).wait(1).to({graphics:mask_graphics_472,x:221.3,y:334.3}).wait(1).to({graphics:mask_graphics_473,x:224.8,y:334.3}).wait(1).to({graphics:mask_graphics_474,x:228.4,y:334.3}).wait(1).to({graphics:mask_graphics_475,x:232,y:334.3}).wait(1).to({graphics:mask_graphics_476,x:235.6,y:334.3}).wait(1).to({graphics:mask_graphics_477,x:239.2,y:334.3}).wait(1).to({graphics:mask_graphics_478,x:242.8,y:334.3}).wait(1).to({graphics:mask_graphics_479,x:246.4,y:334.3}).wait(1).to({graphics:mask_graphics_480,x:250,y:334.3}).wait(18));

	// 图层 63
	this.instance_14 = new lib.text9();
	this.instance_14.parent = this;
	this.instance_14.setTransform(125,401);

	this.instance_15 = new lib.元件30();
	this.instance_15.parent = this;
	this.instance_15.setTransform(318,642.9,1,1,0,0,0,193,242);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},430).to({state:[{t:this.instance_15}]},57).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(487).to({_off:false},0).wait(1).to({regX:193.5,regY:130.5,scaleX:1.11,scaleY:1.11,x:317.5,y:518.4,alpha:0.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:316.7,y:505.5,alpha:0.8},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:315.8,y:492.5,alpha:0.7},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:314.9,y:479.5,alpha:0.6},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:314,y:466.6,alpha:0.5},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:313.2,y:453.6,alpha:0.4},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:312.3,y:440.7,alpha:0.3},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:311.4,y:427.7,alpha:0.2},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:310.5,y:414.8,alpha:0.1},0).wait(1).to({scaleX:2.1,scaleY:2.1,x:309.6,y:401.8,alpha:0},0).wait(1));

	// 图层 52 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_392 = new cjs.Graphics().p("EAM9Av3QgXgXAAgiIAAmYQAAgiAXgYQAYgXAiAAQAhAAAYAXQAYAYAAAiIAAGYQAAAigYAXQgYAYghAAQgiAAgYgYg");
	var mask_1_graphics_393 = new cjs.Graphics().p("EAMjAv3QgjgXAAgiIAAmYQAAgiAjgYQAjgXAxAAQAxAAAiAXQAjAYAAAiIAAGYQAAAigjAXQgiAYgxAAQgxAAgjgYg");
	var mask_1_graphics_394 = new cjs.Graphics().p("EAMIAv3QgtgXAAgiIAAmYQAAgiAtgYQAugXBBAAQBAAAAuAXQAuAYAAAiIAAGYQAAAiguAXQguAYhAAAQhBAAgugYg");
	var mask_1_graphics_395 = new cjs.Graphics().p("EALtAv3Qg4gXAAgiIAAmYQAAgiA4gYQA6gXBQAAQBQAAA4AXQA5AYAAAiIAAGYQAAAig5AXQg4AYhQAAQhQAAg6gYg");
	var mask_1_graphics_396 = new cjs.Graphics().p("EALTAv3QhDgXAAgiIAAmYQAAgiBDgYQBEgXBgAAQBfAABDAXQBFAYAAAiIAAGYQAAAihFAXQhDAYhfAAQhgAAhEgYg");
	var mask_1_graphics_397 = new cjs.Graphics().p("EAK4Av3QhOgXAAgiIAAmYQAAgiBOgYQBQgXBvAAQBvAABOAXQBPAYAAAiIAAGYQAAAihPAXQhOAYhvAAQhvAAhQgYg");
	var mask_1_graphics_398 = new cjs.Graphics().p("EAKdAv3QhZgXAAgiIAAmYQAAgiBZgYQBbgXB/AAQB+AABZAXQBbAYAAAiIAAGYQAAAihbAXQhZAYh+AAQh/AAhbgYg");
	var mask_1_graphics_399 = new cjs.Graphics().p("EAKDAv3QhkgXAAgiIAAmYQAAgiBkgYQBmgXCOAAQCOAABkAXQBmAYAAAiIAAGYQAAAihmAXQhkAYiOAAQiOAAhmgYg");
	var mask_1_graphics_400 = new cjs.Graphics().p("EAJoAv3QhvgXAAgiIAAmYQAAgiBvgYQBxgXCeAAQCdAABvAXQBxAYAAAiIAAGYQAAAihxAXQhvAYidAAQieAAhxgYg");
	var mask_1_graphics_401 = new cjs.Graphics().p("EAJNAv3Qh5gXAAgiIAAmYQAAgiB5gYQB9gXCtAAQCtAAB6AXQB8AYAAAiIAAGYQAAAih8AXQh6AYitAAQitAAh9gYg");
	var mask_1_graphics_402 = new cjs.Graphics().p("EAIzAv3QiFgXAAgiIAAmYQAAgiCFgYQCHgXC9AAQC9AACEAXQCHAYAAAiIAAGYQAAAiiHAXQiEAYi9AAQi9AAiHgYg");
	var mask_1_graphics_403 = new cjs.Graphics().p("EAIYAv3QiPgXAAgiIAAmYQAAgiCPgYQCSgXDNAAQDMAACPAXQCTAYAAAiIAAGYQAAAiiTAXQiPAYjMAAQjNAAiSgYg");
	var mask_1_graphics_404 = new cjs.Graphics().p("EAH9Av3QiagXAAgiIAAmYQAAgiCagYQCegXDcAAQDcAACaAXQCdAYAAAiIAAGYQAAAiidAXQiaAYjcAAQjcAAiegYg");
	var mask_1_graphics_405 = new cjs.Graphics().p("EAHjAv3QilgXAAgiIAAmYQAAgiClgYQCogXDsAAQDrAAClAXQCpAYAAAiIAAGYQAAAiipAXQilAYjrAAQjsAAiogYg");
	var mask_1_graphics_406 = new cjs.Graphics().p("EAHIAv3QiwgXAAgiIAAmYQAAgiCwgYQC0gXD7AAQD7AACwAXQCzAYAAAiIAAGYQAAAiizAXQiwAYj7AAQj7AAi0gYg");
	var mask_1_graphics_407 = new cjs.Graphics().p("EAGtAv3Qi6gXAAgiIAAmYQAAgiC6gYQC/gXELAAQEKAAC7AXQC/AYAAAiIAAGYQAAAii/AXQi7AYkKAAQkLAAi/gYg");
	var mask_1_graphics_408 = new cjs.Graphics().p("EAGTAv3QjGgXAAgiIAAmYQAAgiDGgYQDKgXEaAAQEaAADFAXQDKAYAAAiIAAGYQAAAijKAXQjFAYkaAAQkaAAjKgYg");
	var mask_1_graphics_409 = new cjs.Graphics().p("EAF4Av3QjQgXAAgiIAAmYQAAgiDQgYQDVgXEqAAQEpAADRAXQDVAYAAAiIAAGYQAAAijVAXQjRAYkpAAQkqAAjVgYg");
	var mask_1_graphics_410 = new cjs.Graphics().p("EAFeAv3QjcgXAAgiIAAmYQAAgiDcgYQDggXE5AAQE5AADbAXQDhAYAAAiIAAGYQAAAijhAXQjbAYk5AAQk5AAjggYg");
	var mask_1_graphics_411 = new cjs.Graphics().p("EAFDAv3QjngXAAgiIAAmYQAAgiDngYQDrgXFJAAQFIAADnAXQDrAYAAAiIAAGYQAAAijrAXQjnAYlIAAQlJAAjrgYg");
	var mask_1_graphics_412 = new cjs.Graphics().p("EAEoAv3QjxgXAAgiIAAmYQAAgiDxgYQD3gXFYAAQFYAADxAXQD3AYAAAiIAAGYQAAAij3AXQjxAYlYAAQlYAAj3gYg");
	var mask_1_graphics_413 = new cjs.Graphics().p("EAEOAv3Qj9gXAAgiIAAmYQAAgiD9gYQEBgXFoAAQFnAAD9AXQEBAYAAAiIAAGYQAAAikBAXQj9AYlnAAQloAAkBgYg");
	var mask_1_graphics_414 = new cjs.Graphics().p("EADzAv3QkGgXAAgiIAAmYQAAgiEGgYQENgXF3AAQF3AAEHAXQENAYAAAiIAAGYQAAAikNAXQkHAYl3AAQl3AAkNgYg");
	var mask_1_graphics_415 = new cjs.Graphics().p("EADYAv3QkRgXAAgiIAAmYQAAgiERgYQEYgXGHAAQGGAAESAXQEYAYAAAiIAAGYQAAAikYAXQkSAYmGAAQmHAAkYgYg");
	var mask_1_graphics_416 = new cjs.Graphics().p("EAC+Av3QkcgXAAgiIAAmYQAAgiEcgYQEjgXGWAAQGWAAEdAXQEjAYAAAiIAAGYQAAAikjAXQkdAYmWAAQmWAAkjgYg");
	var mask_1_graphics_417 = new cjs.Graphics().p("EACjAv3QkngXAAgiIAAmYQAAgiEngYQEugXGmAAQGlAAEoAXQEuAYAAAiIAAGYQAAAikuAXQkoAYmlAAQmmAAkugYg");
	var mask_1_graphics_418 = new cjs.Graphics().p("EACIAv3QkxgXAAgiIAAmYQAAgiExgYQE6gXG1AAQG1AAEzAXQE5AYAAAiIAAGYQAAAik5AXQkzAYm1AAQm1AAk6gYg");
	var mask_1_graphics_419 = new cjs.Graphics().p("EABuAv3Qk9gXAAgiIAAmYQAAgiE9gYQFEgXHFAAQHEAAE+AXQFEAYAAAiIAAGYQAAAilEAXQk+AYnEAAQnFAAlEgYg");
	var mask_1_graphics_420 = new cjs.Graphics().p("EABTAv3QlHgXAAgiIAAmYQAAgiFHgYQFPgXHVAAQHUAAFIAXQFQAYAAAiIAAGYQAAAilQAXQlIAYnUAAQnVAAlPgYg");
	var mask_1_graphics_421 = new cjs.Graphics().p("EAA4Av3QlSgXAAgiIAAmYQAAgiFSgYQFbgXHkAAQHkAAFTAXQFaAYAAAiIAAGYQAAAilaAXQlTAYnkAAQnkAAlbgYg");
	var mask_1_graphics_422 = new cjs.Graphics().p("EAAeAv3QlegXAAgiIAAmYQAAgiFegYQFlgXH0AAQHzAAFeAXQFmAYAAAiIAAGYQAAAilmAXQleAYnzAAQn0AAllgYg");
	var mask_1_graphics_423 = new cjs.Graphics().p("EAADAv3QlogXAAgiIAAmYQAAgiFogYQFxgXIDAAQIDAAFpAXQFxAYAAAiIAAGYQAAAilxAXQlpAYoDAAQoDAAlxgYg");
	var mask_1_graphics_424 = new cjs.Graphics().p("EgAXAv3Ql0gXAAgiIAAmYQAAgiF0gYQF7gXITAAQISAAF0AXQF8AYAAAiIAAGYQAAAil8AXQl0AYoSAAQoTAAl7gYg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(392).to({graphics:mask_1_graphics_392,x:96.8,y:308.8}).wait(1).to({graphics:mask_1_graphics_393,x:100.5,y:308.8}).wait(1).to({graphics:mask_1_graphics_394,x:104.3,y:308.8}).wait(1).to({graphics:mask_1_graphics_395,x:108,y:308.8}).wait(1).to({graphics:mask_1_graphics_396,x:111.8,y:308.8}).wait(1).to({graphics:mask_1_graphics_397,x:115.5,y:308.8}).wait(1).to({graphics:mask_1_graphics_398,x:119.3,y:308.8}).wait(1).to({graphics:mask_1_graphics_399,x:123.1,y:308.8}).wait(1).to({graphics:mask_1_graphics_400,x:126.8,y:308.8}).wait(1).to({graphics:mask_1_graphics_401,x:130.6,y:308.8}).wait(1).to({graphics:mask_1_graphics_402,x:134.3,y:308.8}).wait(1).to({graphics:mask_1_graphics_403,x:138.1,y:308.8}).wait(1).to({graphics:mask_1_graphics_404,x:141.8,y:308.8}).wait(1).to({graphics:mask_1_graphics_405,x:145.6,y:308.8}).wait(1).to({graphics:mask_1_graphics_406,x:149.3,y:308.8}).wait(1).to({graphics:mask_1_graphics_407,x:153.1,y:308.8}).wait(1).to({graphics:mask_1_graphics_408,x:156.8,y:308.8}).wait(1).to({graphics:mask_1_graphics_409,x:160.6,y:308.8}).wait(1).to({graphics:mask_1_graphics_410,x:164.4,y:308.8}).wait(1).to({graphics:mask_1_graphics_411,x:168.1,y:308.8}).wait(1).to({graphics:mask_1_graphics_412,x:171.9,y:308.8}).wait(1).to({graphics:mask_1_graphics_413,x:175.6,y:308.8}).wait(1).to({graphics:mask_1_graphics_414,x:179.4,y:308.8}).wait(1).to({graphics:mask_1_graphics_415,x:183.1,y:308.8}).wait(1).to({graphics:mask_1_graphics_416,x:186.9,y:308.8}).wait(1).to({graphics:mask_1_graphics_417,x:190.6,y:308.8}).wait(1).to({graphics:mask_1_graphics_418,x:194.4,y:308.8}).wait(1).to({graphics:mask_1_graphics_419,x:198.1,y:308.8}).wait(1).to({graphics:mask_1_graphics_420,x:201.9,y:308.8}).wait(1).to({graphics:mask_1_graphics_421,x:205.6,y:308.8}).wait(1).to({graphics:mask_1_graphics_422,x:209.4,y:308.8}).wait(1).to({graphics:mask_1_graphics_423,x:213.2,y:308.8}).wait(1).to({graphics:mask_1_graphics_424,x:216.9,y:308.8}).wait(74));

	// 图层 51
	this.instance_16 = new lib.text8();
	this.instance_16.parent = this;
	this.instance_16.setTransform(190,570);

	this.instance_17 = new lib.元件31();
	this.instance_17.parent = this;
	this.instance_17.setTransform(313,588,1,1,0,0,0,123,18);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_16,this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},392).to({state:[{t:this.instance_17}]},95).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(487).to({_off:false},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.8},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.7},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.6},0).wait(1).to({scaleX:1.6,scaleY:1.6,alpha:0.5},0).wait(1).to({scaleX:1.72,scaleY:1.72,alpha:0.4},0).wait(1).to({scaleX:1.84,scaleY:1.84,alpha:0.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,alpha:0.2},0).wait(1).to({scaleX:2.08,scaleY:2.08,alpha:0.1},0).wait(1).to({scaleX:2.2,scaleY:2.2,alpha:0},0).wait(1));

	// 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_351 = new cjs.Graphics().p("EAJ2ArsQgXgXAAghIAAmaQAAghAXgYQAYgXAigBQAhABAYAXQAYAYAAAhIAAGaQAAAhgYAXQgYAZghAAQgiAAgYgZg");
	var mask_2_graphics_352 = new cjs.Graphics().p("EAJXArsQgkgXAAghIAAmaQAAghAkgYQAlgXA0gBQA0ABAkAXQAlAYAAAhIAAGaQAAAhglAXQgkAZg0AAQg0AAglgZg");
	var mask_2_graphics_353 = new cjs.Graphics().p("EAI4ArsQgxgXAAghIAAmaQAAghAxgYQAygXBGgBQBGABAyAXQAyAYAAAhIAAGaQAAAhgyAXQgyAZhGAAQhGAAgygZg");
	var mask_2_graphics_354 = new cjs.Graphics().p("EAIZArsQg+gXAAghIAAmaQAAghA+gYQA/gXBZgBQBYABA+AXQA/AYAAAhIAAGaQAAAhg/AXQg+AZhYAAQhZAAg/gZg");
	var mask_2_graphics_355 = new cjs.Graphics().p("EAH6ArsQhLgXAAghIAAmaQAAghBLgYQBMgXBrgBQBqABBLAXQBNAYAAAhIAAGaQAAAhhNAXQhLAZhqAAQhrAAhMgZg");
	var mask_2_graphics_356 = new cjs.Graphics().p("EAHaArsQhXgXAAghIAAmaQAAghBXgYQBagXB9gBQB9ABBYAXQBZAYAAAhIAAGaQAAAhhZAXQhYAZh9AAQh9AAhagZg");
	var mask_2_graphics_357 = new cjs.Graphics().p("EAG7ArsQhkgXAAghIAAmaQAAghBkgYQBngXCPgBQCPABBlAXQBmAYAAAhIAAGaQAAAhhmAXQhlAZiPAAQiPAAhngZg");
	var mask_2_graphics_358 = new cjs.Graphics().p("EAGcArsQhxgXAAghIAAmaQAAghBxgYQB0gXChgBQCiABBxAXQB0AYAAAhIAAGaQAAAhh0AXQhxAZiiAAQihAAh0gZg");
	var mask_2_graphics_359 = new cjs.Graphics().p("EAF9ArsQh+gXAAghIAAmaQAAghB+gYQCBgXCzgBQC0ABB+AXQCBAYAAAhIAAGaQAAAhiBAXQh+AZi0AAQizAAiBgZg");
	var mask_2_graphics_360 = new cjs.Graphics().p("EAFdArsQiLgXAAghIAAmaQAAghCLgYQCOgXDHgBQDGABCLAXQCOAYAAAhIAAGaQAAAhiOAXQiLAZjGAAQjHAAiOgZg");
	var mask_2_graphics_361 = new cjs.Graphics().p("EAE+ArsQiYgXAAghIAAmaQAAghCYgYQCbgXDZgBQDYABCYAXQCbAYAAAhIAAGaQAAAhibAXQiYAZjYAAQjZAAibgZg");
	var mask_2_graphics_362 = new cjs.Graphics().p("EAEfArsQilgXAAghIAAmaQAAghClgYQCogXDrgBQDrABCkAXQCpAYAAAhIAAGaQAAAhipAXQikAZjrAAQjrAAiogZg");
	var mask_2_graphics_363 = new cjs.Graphics().p("EAEAArsQiygXAAghIAAmaQAAghCygYQC1gXD9gBQD9ABCyAXQC1AYAAAhIAAGaQAAAhi1AXQiyAZj9AAQj9AAi1gZg");
	var mask_2_graphics_364 = new cjs.Graphics().p("EADhArsQi/gXAAghIAAmaQAAghC/gYQDCgXEPgBQEQABC+AXQDCAYAAAhIAAGaQAAAhjCAXQi+AZkQAAQkPAAjCgZg");
	var mask_2_graphics_365 = new cjs.Graphics().p("EADBArsQjKgXAAghIAAmaQAAghDKgYQDQgXEhgBQEiABDLAXQDQAYAAAhIAAGaQAAAhjQAXQjLAZkiAAQkhAAjQgZg");
	var mask_2_graphics_366 = new cjs.Graphics().p("EACiArsQjXgXAAghIAAmaQAAghDXgYQDdgXE0gBQE0ABDYAXQDcAYAAAhIAAGaQAAAhjcAXQjYAZk0AAQk0AAjdgZg");
	var mask_2_graphics_367 = new cjs.Graphics().p("EACDArsQjkgXAAghIAAmaQAAghDkgYQDqgXFGgBQFGABDlAXQDqAYAAAhIAAGaQAAAhjqAXQjlAZlGAAQlGAAjqgZg");
	var mask_2_graphics_368 = new cjs.Graphics().p("EABkArsQjxgXAAghIAAmaQAAghDxgYQD3gXFYgBQFZABDxAXQD3AYAAAhIAAGaQAAAhj3AXQjxAZlZAAQlYAAj3gZg");
	var mask_2_graphics_369 = new cjs.Graphics().p("EABEArsQj9gXAAghIAAmaQAAghD9gYQEEgXFrgBQFrABD/AXQEDAYAAAhIAAGaQAAAhkDAXQj/AZlrAAQlrAAkEgZg");
	var mask_2_graphics_370 = new cjs.Graphics().p("EAAlArsQkKgXAAghIAAmaQAAghEKgYQERgXF9gBQF+ABELAXQERAYAAAhIAAGaQAAAhkRAXQkLAZl+AAQl9AAkRgZg");
	var mask_2_graphics_371 = new cjs.Graphics().p("EAAGArsQkXgXAAghIAAmaQAAghEXgYQEegXGQgBQGPABEYAXQEeAYAAAhIAAGaQAAAhkeAXQkYAZmPAAQmQAAkegZg");
	var mask_2_graphics_372 = new cjs.Graphics().p("EgAYArsQklgXAAghIAAmaQAAghElgYQEqgXGigBQGhABElAXQEsAYAAAhIAAGaQAAAhksAXQklAZmhAAQmiAAkqgZg");
	var mask_2_graphics_373 = new cjs.Graphics().p("EgA3ArsQkygXAAghIAAmaQAAghEygYQE3gXG0gBQG0ABEyAXQE4AYAAAhIAAGaQAAAhk4AXQkyAZm0AAQm0AAk3gZg");
	var mask_2_graphics_374 = new cjs.Graphics().p("EgBXArsQk+gXAAghIAAmaQAAghE+gYQFFgXHGgBQHGABE/AXQFGAYAAAhIAAGaQAAAhlGAXQk/AZnGAAQnGAAlFgZg");
	var mask_2_graphics_375 = new cjs.Graphics().p("EgB2ArsQlLgXAAghIAAmaQAAghFLgYQFSgXHYgBQHZABFLAXQFTAYAAAhIAAGaQAAAhlTAXQlLAZnZAAQnYAAlSgZg");
	var mask_2_graphics_376 = new cjs.Graphics().p("EgCVArsQlYgXAAghIAAmaQAAghFYgYQFfgXHqgBQHrABFZAXQFfAYAAAhIAAGaQAAAhlfAXQlZAZnrAAQnqAAlfgZg");
	var mask_2_graphics_377 = new cjs.Graphics().p("EgC0ArsQllgXAAghIAAmaQAAghFlgYQFrgXH+gBQH9ABFlAXQFtAYAAAhIAAGaQAAAhltAXQllAZn9AAQn+AAlrgZg");
	var mask_2_graphics_378 = new cjs.Graphics().p("EgDUArsQlygXAAghIAAmaQAAghFygYQF5gXIQgBQIPABFyAXQF6AYAAAhIAAGaQAAAhl6AXQlyAZoPAAQoQAAl5gZg");
	var mask_2_graphics_379 = new cjs.Graphics().p("EgDzArsQl/gXAAghIAAmaQAAghF/gYQGGgXIigBQIiABF/AXQGHAYAAAhIAAGaQAAAhmHAXQl/AZoiAAQoiAAmGgZg");
	var mask_2_graphics_380 = new cjs.Graphics().p("EgESArsQmMgXAAghIAAmaQAAghGMgYQGTgXI0gBQI0ABGMAXQGUAYAAAhIAAGaQAAAhmUAXQmMAZo0AAQo0AAmTgZg");
	var mask_2_graphics_381 = new cjs.Graphics().p("EgExArsQmZgXAAghIAAmaQAAghGZgYQGggXJGgBQJHABGYAXQGhAYAAAhIAAGaQAAAhmhAXQmYAZpHAAQpGAAmggZg");
	var mask_2_graphics_382 = new cjs.Graphics().p("EgFQArsQmmgXAAghIAAmaQAAghGmgYQGtgXJZgBQJYABGmAXQGuAYAAAhIAAGaQAAAhmuAXQmmAZpYAAQpZAAmtgZg");
	var mask_2_graphics_383 = new cjs.Graphics().p("EgFwArsQmygXAAghIAAmaQAAghGygYQG7gXJrgBQJrABGyAXQG7AYAAAhIAAGaQAAAhm7AXQmyAZprAAQprAAm7gZg");
	var mask_2_graphics_384 = new cjs.Graphics().p("EgGPArsQm/gXAAghIAAmaQAAghG/gYQHIgXJ9gBQJ9ABG/AXQHJAYAAAhIAAGaQAAAhnJAXQm/AZp9AAQp9AAnIgZg");
	var mask_2_graphics_385 = new cjs.Graphics().p("EgGuArsQnMgXAAghIAAmaQAAghHMgYQHVgXKPgBQKQABHLAXQHWAYAAAhIAAGaQAAAhnWAXQnLAZqQAAQqPAAnVgZg");
	var mask_2_graphics_386 = new cjs.Graphics().p("EgHNArsQnZgXAAghIAAmaQAAghHZgYQHhgXKigBQKiABHZAXQHjAYAAAhIAAGaQAAAhnjAXQnZAZqiAAQqiAAnhgZg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(351).to({graphics:mask_2_graphics_351,x:76.9,y:282.1}).wait(1).to({graphics:mask_2_graphics_352,x:81.3,y:282.1}).wait(1).to({graphics:mask_2_graphics_353,x:85.8,y:282.1}).wait(1).to({graphics:mask_2_graphics_354,x:90.2,y:282.1}).wait(1).to({graphics:mask_2_graphics_355,x:94.7,y:282.1}).wait(1).to({graphics:mask_2_graphics_356,x:99.1,y:282.1}).wait(1).to({graphics:mask_2_graphics_357,x:103.5,y:282.1}).wait(1).to({graphics:mask_2_graphics_358,x:108,y:282.1}).wait(1).to({graphics:mask_2_graphics_359,x:112.4,y:282.1}).wait(1).to({graphics:mask_2_graphics_360,x:116.9,y:282.1}).wait(1).to({graphics:mask_2_graphics_361,x:121.3,y:282.1}).wait(1).to({graphics:mask_2_graphics_362,x:125.8,y:282.1}).wait(1).to({graphics:mask_2_graphics_363,x:130.2,y:282.1}).wait(1).to({graphics:mask_2_graphics_364,x:134.6,y:282.1}).wait(1).to({graphics:mask_2_graphics_365,x:139.1,y:282.1}).wait(1).to({graphics:mask_2_graphics_366,x:143.5,y:282.1}).wait(1).to({graphics:mask_2_graphics_367,x:148,y:282.1}).wait(1).to({graphics:mask_2_graphics_368,x:152.4,y:282.1}).wait(1).to({graphics:mask_2_graphics_369,x:156.8,y:282.1}).wait(1).to({graphics:mask_2_graphics_370,x:161.3,y:282.1}).wait(1).to({graphics:mask_2_graphics_371,x:165.7,y:282.1}).wait(1).to({graphics:mask_2_graphics_372,x:170.2,y:282.1}).wait(1).to({graphics:mask_2_graphics_373,x:174.6,y:282.1}).wait(1).to({graphics:mask_2_graphics_374,x:179.1,y:282.1}).wait(1).to({graphics:mask_2_graphics_375,x:183.5,y:282.1}).wait(1).to({graphics:mask_2_graphics_376,x:187.9,y:282.1}).wait(1).to({graphics:mask_2_graphics_377,x:192.4,y:282.1}).wait(1).to({graphics:mask_2_graphics_378,x:196.8,y:282.1}).wait(1).to({graphics:mask_2_graphics_379,x:201.3,y:282.1}).wait(1).to({graphics:mask_2_graphics_380,x:205.7,y:282.1}).wait(1).to({graphics:mask_2_graphics_381,x:210.1,y:282.1}).wait(1).to({graphics:mask_2_graphics_382,x:214.6,y:282.1}).wait(1).to({graphics:mask_2_graphics_383,x:219,y:282.1}).wait(1).to({graphics:mask_2_graphics_384,x:223.5,y:282.1}).wait(1).to({graphics:mask_2_graphics_385,x:227.9,y:282.1}).wait(1).to({graphics:mask_2_graphics_386,x:232.4,y:282.1}).wait(112));

	// 图层 49
	this.instance_18 = new lib.text7();
	this.instance_18.parent = this;
	this.instance_18.setTransform(156,514);

	this.instance_19 = new lib.元件32();
	this.instance_19.parent = this;
	this.instance_19.setTransform(312.5,532,1,1,0,0,0,156.5,18);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_18,this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},351).to({state:[{t:this.instance_19}]},136).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(487).to({_off:false},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.8},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.7},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.6},0).wait(1).to({scaleX:1.6,scaleY:1.6,alpha:0.5},0).wait(1).to({scaleX:1.72,scaleY:1.72,alpha:0.4},0).wait(1).to({scaleX:1.84,scaleY:1.84,alpha:0.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,alpha:0.2},0).wait(1).to({scaleX:2.08,scaleY:2.08,x:312.6,alpha:0.1},0).wait(1).to({scaleX:2.2,scaleY:2.2,x:312.5,alpha:0},0).wait(1));

	// 6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_324 = new cjs.Graphics().p("EAQdAnHQgYgYABgiIAAmZQgBghAYgYQAYgYAiAAQAhAAAXAYQAZAYAAAhIAAGZQAAAigZAYQgXAYghgBQgiABgYgYg");
	var mask_3_graphics_325 = new cjs.Graphics().p("EAQEAnHQgigYAAgiIAAmZQAAghAigYQAigYAxAAQAwAAAiAYQAjAYAAAhIAAGZQAAAigjAYQgiAYgwgBQgxABgigYg");
	var mask_3_graphics_326 = new cjs.Graphics().p("EAPqAnHQgsgYAAgiIAAmZQAAghAsgYQAtgYBAAAQA/AAAsAYQAuAYAAAhIAAGZQAAAiguAYQgsAYg/gBQhAABgtgYg");
	var mask_3_graphics_327 = new cjs.Graphics().p("EAPRAnHQg3gYAAgiIAAmZQAAghA3gYQA4gYBOAAQBOAAA3AYQA4AYAAAhIAAGZQAAAig4AYQg3AYhOgBQhOABg4gYg");
	var mask_3_graphics_328 = new cjs.Graphics().p("EAO3AnHQhBgYAAgiIAAmZQAAghBBgYQBDgYBdAAQBdAABBAYQBDAYAAAhIAAGZQAAAihDAYQhBAYhdgBQhdABhDgYg");
	var mask_3_graphics_329 = new cjs.Graphics().p("EAOeAnHQhMgYAAgiIAAmZQAAghBMgYQBNgYBsAAQBsAABMAYQBNAYAAAhIAAGZQAAAihNAYQhMAYhsgBQhsABhNgYg");
	var mask_3_graphics_330 = new cjs.Graphics().p("EAOEAnHQhWgYAAgiIAAmZQAAghBWgYQBYgYB7AAQB7AABWAYQBYAYAAAhIAAGZQAAAihYAYQhWAYh7gBQh7ABhYgYg");
	var mask_3_graphics_331 = new cjs.Graphics().p("EANrAnHQhhgYAAgiIAAmZQAAghBhgYQBjgYCJAAQCKAABhAYQBiAYAAAhIAAGZQAAAihiAYQhhAYiKgBQiJABhjgYg");
	var mask_3_graphics_332 = new cjs.Graphics().p("EANRAnHQhrgYAAgiIAAmZQAAghBrgYQBugYCYAAQCZAABrAYQBuAYAAAhIAAGZQAAAihuAYQhrAYiZgBQiYABhugYg");
	var mask_3_graphics_333 = new cjs.Graphics().p("EAM4AnHQh2gYAAgiIAAmZQAAghB2gYQB4gYCoAAQCnAAB2AYQB4AYAAAhIAAGZQAAAih4AYQh2AYingBQioABh4gYg");
	var mask_3_graphics_334 = new cjs.Graphics().p("EAMfAnHQiAgYAAgiIAAmZQAAghCAgYQCCgYC3AAQC2AACAAYQCDAYAAAhIAAGZQAAAiiDAYQiAAYi2gBQi3ABiCgYg");
	var mask_3_graphics_335 = new cjs.Graphics().p("EAMFAnHQiKgYAAgiIAAmZQAAghCKgYQCNgYDGAAQDFAACLAYQCNAYAAAhIAAGZQAAAiiNAYQiLAYjFgBQjGABiNgYg");
	var mask_3_graphics_336 = new cjs.Graphics().p("EALsAnHQiVgYAAgiIAAmZQAAghCVgYQCYgYDUAAQDUAACVAYQCYAYAAAhIAAGZQAAAiiYAYQiVAYjUgBQjUABiYgYg");
	var mask_3_graphics_337 = new cjs.Graphics().p("EALSAnHQifgYAAgiIAAmZQAAghCfgYQCjgYDjAAQDjAACfAYQCjAYAAAhIAAGZQAAAiijAYQifAYjjgBQjjABijgYg");
	var mask_3_graphics_338 = new cjs.Graphics().p("EAK5AnHQiqgYAAgiIAAmZQAAghCqgYQCtgYDyAAQDyAACqAYQCtAYAAAhIAAGZQAAAiitAYQiqAYjygBQjyABitgYg");
	var mask_3_graphics_339 = new cjs.Graphics().p("EAKfAnHQi0gYAAgiIAAmZQAAghC0gYQC4gYEBAAQEBAAC0AYQC4AYAAAhIAAGZQAAAii4AYQi0AYkBgBQkBABi4gYg");
	var mask_3_graphics_340 = new cjs.Graphics().p("EAKGAnHQi/gYAAgiIAAmZQAAghC/gYQDDgYEPAAQEQAAC/AYQDDAYAAAhIAAGZQAAAijDAYQi/AYkQgBQkPABjDgYg");
	var mask_3_graphics_341 = new cjs.Graphics().p("EAJsAnHQjJgYAAgiIAAmZQAAghDJgYQDOgYEfAAQEeAADJAYQDOAYAAAhIAAGZQAAAijOAYQjJAYkegBQkfABjOgYg");
	var mask_3_graphics_342 = new cjs.Graphics().p("EAJTAnHQjUgYAAgiIAAmZQAAghDUgYQDYgYEuAAQEtAADUAYQDYAYAAAhIAAGZQAAAijYAYQjUAYktgBQkuABjYgYg");
	var mask_3_graphics_343 = new cjs.Graphics().p("EAI6AnHQjegYAAgiIAAmZQAAghDegYQDigYE9AAQE8AADeAYQDjAYAAAhIAAGZQAAAijjAYQjeAYk8gBQk9ABjigYg");
	var mask_3_graphics_344 = new cjs.Graphics().p("EAIgAnHQjogYAAgiIAAmZQAAghDogYQDtgYFMAAQFLAADpAYQDtAYAAAhIAAGZQAAAijtAYQjpAYlLgBQlMABjtgYg");
	var mask_3_graphics_345 = new cjs.Graphics().p("EAIHAnHQjzgYAAgiIAAmZQAAghDzgYQD4gYFaAAQFaAADzAYQD4AYAAAhIAAGZQAAAij4AYQjzAYlagBQlaABj4gYg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(324).to({graphics:mask_3_graphics_324,x:119.2,y:252.7}).wait(1).to({graphics:mask_3_graphics_325,x:122.8,y:252.7}).wait(1).to({graphics:mask_3_graphics_326,x:126.4,y:252.7}).wait(1).to({graphics:mask_3_graphics_327,x:130,y:252.7}).wait(1).to({graphics:mask_3_graphics_328,x:133.6,y:252.7}).wait(1).to({graphics:mask_3_graphics_329,x:137.2,y:252.7}).wait(1).to({graphics:mask_3_graphics_330,x:140.8,y:252.7}).wait(1).to({graphics:mask_3_graphics_331,x:144.4,y:252.7}).wait(1).to({graphics:mask_3_graphics_332,x:148.1,y:252.7}).wait(1).to({graphics:mask_3_graphics_333,x:151.7,y:252.7}).wait(1).to({graphics:mask_3_graphics_334,x:155.3,y:252.7}).wait(1).to({graphics:mask_3_graphics_335,x:158.9,y:252.7}).wait(1).to({graphics:mask_3_graphics_336,x:162.5,y:252.7}).wait(1).to({graphics:mask_3_graphics_337,x:166.1,y:252.7}).wait(1).to({graphics:mask_3_graphics_338,x:169.7,y:252.7}).wait(1).to({graphics:mask_3_graphics_339,x:173.3,y:252.7}).wait(1).to({graphics:mask_3_graphics_340,x:177,y:252.7}).wait(1).to({graphics:mask_3_graphics_341,x:180.6,y:252.7}).wait(1).to({graphics:mask_3_graphics_342,x:184.2,y:252.7}).wait(1).to({graphics:mask_3_graphics_343,x:187.8,y:252.7}).wait(1).to({graphics:mask_3_graphics_344,x:191.4,y:252.7}).wait(1).to({graphics:mask_3_graphics_345,x:195,y:252.7}).wait(153));

	// 图层 47
	this.instance_20 = new lib.text6();
	this.instance_20.parent = this;
	this.instance_20.setTransform(236,458);

	this.instance_21 = new lib.元件34();
	this.instance_21.parent = this;
	this.instance_21.setTransform(313,476,1,1,0,0,0,77,18);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_20,this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},324).to({state:[{t:this.instance_21}]},163).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(487).to({_off:false},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.8},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.7},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.6},0).wait(1).to({scaleX:1.6,scaleY:1.6,alpha:0.5},0).wait(1).to({scaleX:1.72,scaleY:1.72,alpha:0.4},0).wait(1).to({scaleX:1.84,scaleY:1.84,alpha:0.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,alpha:0.2},0).wait(1).to({scaleX:2.08,scaleY:2.08,alpha:0.1},0).wait(1).to({scaleX:2.2,scaleY:2.2,alpha:0},0).wait(1));

	// 5 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_277 = new cjs.Graphics().p("EAHuAiaQgXgYAAghIAAmaQAAghAXgYQAXgYAhAAQAhAAAWAYQAYAYAAAhIAAGaQAAAhgYAYQgWAYghAAQghAAgXgYg");
	var mask_4_graphics_278 = new cjs.Graphics().p("EAHNAiaQgkgYAAghIAAmaQAAghAkgYQAmgYAzAAQA0AAAkAYQAlAYAAAhIAAGaQAAAhglAYQgkAYg0AAQgzAAgmgYg");
	var mask_4_graphics_279 = new cjs.Graphics().p("EAGtAiaQgygYAAghIAAmaQAAghAygYQAzgYBHAAQBGAAAyAYQAzAYAAAhIAAGaQAAAhgzAYQgyAYhGAAQhHAAgzgYg");
	var mask_4_graphics_280 = new cjs.Graphics().p("EAGMAiaQg/gYAAghIAAmaQAAghA/gYQBBgYBaAAQBaAAA/AYQBBAYAAAhIAAGaQAAAhhBAYQg/AYhaAAQhaAAhBgYg");
	var mask_4_graphics_281 = new cjs.Graphics().p("EAFsAiaQhNgYAAghIAAmaQAAghBNgYQBOgYBtAAQBtAABNAYQBOAYAAAhIAAGaQAAAhhOAYQhNAYhtAAQhtAAhOgYg");
	var mask_4_graphics_282 = new cjs.Graphics().p("EAFLAiaQhagYAAghIAAmaQAAghBagYQBcgYCAAAQCBAABaAYQBcAYAAAhIAAGaQAAAhhcAYQhaAYiBAAQiAAAhcgYg");
	var mask_4_graphics_283 = new cjs.Graphics().p("EAEqAiaQhngYAAghIAAmaQAAghBngYQBqgYCUAAQCTAABoAYQBqAYAAAhIAAGaQAAAhhqAYQhoAYiTAAQiUAAhqgYg");
	var mask_4_graphics_284 = new cjs.Graphics().p("EAEKAiaQh1gYAAghIAAmaQAAghB1gYQB3gYCnAAQCnAAB1AYQB3AYAAAhIAAGaQAAAhh3AYQh1AYinAAQinAAh3gYg");
	var mask_4_graphics_285 = new cjs.Graphics().p("EADpAiaQiCgYAAghIAAmaQAAghCCgYQCFgYC6AAQC6AACDAYQCFAYAAAhIAAGaQAAAhiFAYQiDAYi6AAQi6AAiFgYg");
	var mask_4_graphics_286 = new cjs.Graphics().p("EADIAiaQiQgYAAghIAAmaQAAghCQgYQCTgYDOAAQDNAACQAYQCTAYAAAhIAAGaQAAAhiTAYQiQAYjNAAQjOAAiTgYg");
	var mask_4_graphics_287 = new cjs.Graphics().p("EACoAiaQiegYAAghIAAmaQAAghCegYQCggYDhAAQDgAACeAYQCgAYAAAhIAAGaQAAAhigAYQieAYjgAAQjhAAiggYg");
	var mask_4_graphics_288 = new cjs.Graphics().p("EACHAiaQiqgYAAghIAAmaQAAghCqgYQCvgYDzAAQD0AACqAYQCvAYAAAhIAAGaQAAAhivAYQiqAYj0AAQjzAAivgYg");
	var mask_4_graphics_289 = new cjs.Graphics().p("EABmAiaQi3gYAAghIAAmaQAAghC3gYQC9gYEGAAQEHAAC4AYQC9AYAAAhIAAGaQAAAhi9AYQi4AYkHAAQkGAAi9gYg");
	var mask_4_graphics_290 = new cjs.Graphics().p("EABGAiaQjFgYAAghIAAmaQAAghDFgYQDKgYEaAAQEaAADFAYQDKAYAAAhIAAGaQAAAhjKAYQjFAYkaAAQkaAAjKgYg");
	var mask_4_graphics_291 = new cjs.Graphics().p("EAAlAiaQjSgYAAghIAAmaQAAghDSgYQDYgYEtAAQEtAADTAYQDYAYAAAhIAAGaQAAAhjYAYQjTAYktAAQktAAjYgYg");
	var mask_4_graphics_292 = new cjs.Graphics().p("EAAFAiaQjggYAAghIAAmaQAAghDggYQDlgYFAAAQFAAADhAYQDlAYAAAhIAAGaQAAAhjlAYQjhAYlAAAQlAAAjlgYg");
	var mask_4_graphics_293 = new cjs.Graphics().p("EgAbAiaQjugYAAghIAAmaQAAghDugYQDygYFTAAQFUAADuAYQDzAYAAAhIAAGaQAAAhjzAYQjuAYlUAAQlTAAjygYg");
	var mask_4_graphics_294 = new cjs.Graphics().p("EgA8AiaQj7gYAAghIAAmaQAAghD7gYQEAgYFnAAQFmAAD8AYQEBAYAAAhIAAGaQAAAhkBAYQj8AYlmAAQlnAAkAgYg");
	var mask_4_graphics_295 = new cjs.Graphics().p("EgBcAiaQkJgYAAghIAAmaQAAghEJgYQENgYF6AAQF6AAEJAYQEOAYAAAhIAAGaQAAAhkOAYQkJAYl6AAQl6AAkNgYg");
	var mask_4_graphics_296 = new cjs.Graphics().p("EgB9AiaQkWgYAAghIAAmaQAAghEWgYQEbgYGNAAQGNAAEXAYQEcAYAAAhIAAGaQAAAhkcAYQkXAYmNAAQmNAAkbgYg");
	var mask_4_graphics_297 = new cjs.Graphics().p("EgCeAiaQkkgYABghIAAmaQgBghEkgYQEpgYGhAAQGgAAEkAYQEqAYAAAhIAAGaQAAAhkqAYQkkAYmgAAQmhAAkpgYg");
	var mask_4_graphics_298 = new cjs.Graphics().p("EgC+AiaQkygYAAghIAAmaQAAghEygYQE3gYGzAAQGzAAExAYQE4AYAAAhIAAGaQAAAhk4AYQkxAYmzAAQmzAAk3gYg");
	var mask_4_graphics_299 = new cjs.Graphics().p("EgDfAiaQk/gYAAghIAAmaQAAghE/gYQFFgYHGAAQHHAAE+AYQFGAYAAAhIAAGaQAAAhlGAYQk+AYnHAAQnGAAlFgYg");
	var mask_4_graphics_300 = new cjs.Graphics().p("EgEAAiaQlMgYAAghIAAmaQAAghFMgYQFTgYHZAAQHaAAFMAYQFUAYAAAhIAAGaQAAAhlUAYQlMAYnaAAQnZAAlTgYg");
	var mask_4_graphics_301 = new cjs.Graphics().p("EgEgAiaQlagYAAghIAAmaQAAghFagYQFggYHtAAQHtAAFZAYQFhAYAAAhIAAGaQAAAhlhAYQlZAYntAAQntAAlggYg");
	var mask_4_graphics_302 = new cjs.Graphics().p("EgFBAiaQlngYAAghIAAmaQAAghFngYQFugYIAAAQIAAAFnAYQFvAYAAAhIAAGaQAAAhlvAYQlnAYoAAAQoAAAlugYg");
	var mask_4_graphics_303 = new cjs.Graphics().p("EgFhAiaQl1gYAAghIAAmaQAAghF1gYQF7gYITAAQITAAF1AYQF9AYAAAhIAAGaQAAAhl9AYQl1AYoTAAQoTAAl7gYg");
	var mask_4_graphics_304 = new cjs.Graphics().p("EgGCAiaQmCgYAAghIAAmaQAAghGCgYQGJgYInAAQImAAGCAYQGKAYAAAhIAAGaQAAAhmKAYQmCAYomAAQonAAmJgYg");
	var mask_4_graphics_305 = new cjs.Graphics().p("EgGjAiaQmPgYAAghIAAmaQAAghGPgYQGYgYI5AAQI5AAGQAYQGYAYAAAhIAAGaQAAAhmYAYQmQAYo5AAQo5AAmYgYg");
	var mask_4_graphics_306 = new cjs.Graphics().p("EgHDAiaQmdgYAAghIAAmaQAAghGdgYQGlgYJMAAQJNAAGdAYQGmAYAAAhIAAGaQAAAhmmAYQmdAYpNAAQpMAAmlgYg");
	var mask_4_graphics_307 = new cjs.Graphics().p("EgHkAiaQmqgYAAghIAAmaQAAghGqgYQG0gYJeAAQJgAAGrAYQGzAYAAAhIAAGaQAAAhmzAYQmrAYpgAAQpeAAm0gYg");
	var mask_4_graphics_308 = new cjs.Graphics().p("EgIFAiaQm3gYAAghIAAmaQAAghG3gYQHCgYJyAAQJzAAG4AYQHBAYAAAhIAAGaQAAAhnBAYQm4AYpzAAQpyAAnCgYg");
	var mask_4_graphics_309 = new cjs.Graphics().p("EgIlAiaQnGgYAAghIAAmaQAAghHGgYQHPgYKFAAQKGAAHFAYQHPAYAAAhIAAGaQAAAhnPAYQnFAYqGAAQqFAAnPgYg");
	var mask_4_graphics_310 = new cjs.Graphics().p("EgJGAiaQnTgYAAghIAAmaQAAghHTgYQHdgYKYAAQKaAAHSAYQHdAYAAAhIAAGaQAAAhndAYQnSAYqaAAQqYAAndgYg");
	var mask_4_graphics_311 = new cjs.Graphics().p("EgJnAiaQnggYAAghIAAmaQAAghHggYQHrgYKsAAQKsAAHgAYQHrAYAAAhIAAGaQAAAhnrAYQngAYqsAAQqsAAnrgYg");
	var mask_4_graphics_312 = new cjs.Graphics().p("EgKHAiaQnugYAAghIAAmaQAAghHugYQH4gYK/AAQLAAAHtAYQH4AYAAAhIAAGaQAAAhn4AYQntAYrAAAQq/AAn4gYg");
	var mask_4_graphics_313 = new cjs.Graphics().p("EgKoAiaQn7gYAAghIAAmaQAAghH7gYQIGgYLSAAQLTAAH7AYQIGAYAAAhIAAGaQAAAhoGAYQn7AYrTAAQrSAAoGgYg");
	var mask_4_graphics_314 = new cjs.Graphics().p("EgLIAiaQoJgYAAghIAAmaQAAghIJgYQITgYLlAAQLmAAIJAYQIUAYAAAhIAAGaQAAAhoUAYQoJAYrmAAQrlAAoTgYg");
	var mask_4_graphics_315 = new cjs.Graphics().p("EgLpAiaQoWgYAAghIAAmaQAAghIWgYQIhgYL5AAQL5AAIWAYQIhAYAAAhIAAGaQAAAhohAYQoWAYr5AAQr5AAohgYg");
	var mask_4_graphics_316 = new cjs.Graphics().p("EgMKAiaQojgYAAghIAAmaQAAghIjgYQIvgYMMAAQMMAAIkAYQIvAYAAAhIAAGaQAAAhovAYQokAYsMAAQsMAAovgYg");
	var mask_4_graphics_317 = new cjs.Graphics().p("EgMqAiaQoxgYAAghIAAmaQAAghIxgYQI9gYMeAAQMgAAIxAYQI9AYAAAhIAAGaQAAAho9AYQoxAYsgAAQseAAo9gYg");
	var mask_4_graphics_318 = new cjs.Graphics().p("EgNLAiaQo+gYAAghIAAmaQAAghI+gYQJLgYMxAAQMzAAI/AYQJKAYAAAhIAAGaQAAAhpKAYQo/AYszAAQsxAApLgYg");
	var mask_4_graphics_319 = new cjs.Graphics().p("EgNsAiaQpLgYAAghIAAmaQAAghJLgYQJZgYNFAAQNGAAJMAYQJYAYAAAhIAAGaQAAAhpYAYQpMAYtGAAQtFAApZgYg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(277).to({graphics:mask_4_graphics_277,x:62.9,y:222.6}).wait(1).to({graphics:mask_4_graphics_278,x:67.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_279,x:72.2,y:222.6}).wait(1).to({graphics:mask_4_graphics_280,x:76.9,y:222.6}).wait(1).to({graphics:mask_4_graphics_281,x:81.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_282,x:86.2,y:222.6}).wait(1).to({graphics:mask_4_graphics_283,x:90.9,y:222.6}).wait(1).to({graphics:mask_4_graphics_284,x:95.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_285,x:100.2,y:222.6}).wait(1).to({graphics:mask_4_graphics_286,x:104.9,y:222.6}).wait(1).to({graphics:mask_4_graphics_287,x:109.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_288,x:114.2,y:222.6}).wait(1).to({graphics:mask_4_graphics_289,x:118.9,y:222.6}).wait(1).to({graphics:mask_4_graphics_290,x:123.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_291,x:128.2,y:222.6}).wait(1).to({graphics:mask_4_graphics_292,x:132.8,y:222.6}).wait(1).to({graphics:mask_4_graphics_293,x:137.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_294,x:142.2,y:222.6}).wait(1).to({graphics:mask_4_graphics_295,x:146.8,y:222.6}).wait(1).to({graphics:mask_4_graphics_296,x:151.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_297,x:156.2,y:222.6}).wait(1).to({graphics:mask_4_graphics_298,x:160.8,y:222.6}).wait(1).to({graphics:mask_4_graphics_299,x:165.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_300,x:170.2,y:222.6}).wait(1).to({graphics:mask_4_graphics_301,x:174.8,y:222.6}).wait(1).to({graphics:mask_4_graphics_302,x:179.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_303,x:184.2,y:222.6}).wait(1).to({graphics:mask_4_graphics_304,x:188.8,y:222.6}).wait(1).to({graphics:mask_4_graphics_305,x:193.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_306,x:198.2,y:222.6}).wait(1).to({graphics:mask_4_graphics_307,x:202.8,y:222.6}).wait(1).to({graphics:mask_4_graphics_308,x:207.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_309,x:212.1,y:222.6}).wait(1).to({graphics:mask_4_graphics_310,x:216.8,y:222.6}).wait(1).to({graphics:mask_4_graphics_311,x:221.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_312,x:226.1,y:222.6}).wait(1).to({graphics:mask_4_graphics_313,x:230.8,y:222.6}).wait(1).to({graphics:mask_4_graphics_314,x:235.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_315,x:240.1,y:222.6}).wait(1).to({graphics:mask_4_graphics_316,x:244.8,y:222.6}).wait(1).to({graphics:mask_4_graphics_317,x:249.5,y:222.6}).wait(1).to({graphics:mask_4_graphics_318,x:254.1,y:222.6}).wait(1).to({graphics:mask_4_graphics_319,x:258.8,y:222.6}).wait(179));

	// 图层 45
	this.instance_22 = new lib.text5();
	this.instance_22.parent = this;
	this.instance_22.setTransform(122,403);

	this.instance_23 = new lib.元件38();
	this.instance_23.parent = this;
	this.instance_23.setTransform(322,420,1,1,0,0,0,200,17);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_22,this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},277).to({state:[{t:this.instance_23}]},210).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(487).to({_off:false},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.8},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.7},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.6},0).wait(1).to({scaleX:1.6,scaleY:1.6,alpha:0.5},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:322.1,alpha:0.4},0).wait(1).to({scaleX:1.84,scaleY:1.84,x:322,alpha:0.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,alpha:0.2},0).wait(1).to({scaleX:2.08,scaleY:2.08,x:322.1,alpha:0.1},0).wait(1).to({scaleX:2.2,scaleY:2.2,x:322,alpha:0},0).wait(1));

	// 4 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_245 = new cjs.Graphics().p("AM7ePQgXgXAAgiIAAmZQAAgiAXgYQAYgXAiAAQAhAAAYAXQAYAYAAAiIAAGZQAAAigYAXQgYAYghAAQgiAAgYgYg");
	var mask_5_graphics_246 = new cjs.Graphics().p("AMaePQglgXAAgiIAAmZQAAgiAlgYQAmgXA1AAQA0AAAlAXQAmAYAAAiIAAGZQAAAigmAXQglAYg0AAQg1AAgmgYg");
	var mask_5_graphics_247 = new cjs.Graphics().p("AL5ePQgzgXAAgiIAAmZQAAgiAzgYQAzgXBIAAQBJAAAyAXQA0AYAAAiIAAGZQAAAig0AXQgyAYhJAAQhIAAgzgYg");
	var mask_5_graphics_248 = new cjs.Graphics().p("ALXePQhAgXAAgiIAAmZQAAgiBAgYQBCgXBcAAQBbAABAAXQBCAYAAAiIAAGZQAAAihCAXQhAAYhbAAQhcAAhCgYg");
	var mask_5_graphics_249 = new cjs.Graphics().p("AK2ePQhNgXAAgiIAAmZQAAgiBNgYQBQgXBuAAQBvAABOAXQBPAYAAAiIAAGZQAAAihPAXQhOAYhvAAQhuAAhQgYg");
	var mask_5_graphics_250 = new cjs.Graphics().p("AKVePQhbgXAAgiIAAmZQAAgiBbgYQBdgXCDAAQCCAABbAXQBdAYAAAiIAAGZQAAAihdAXQhbAYiCAAQiDAAhdgYg");
	var mask_5_graphics_251 = new cjs.Graphics().p("AJ0ePQhpgXAAgiIAAmZQAAgiBpgYQBrgXCVAAQCWAABpAXQBrAYAAAiIAAGZQAAAihrAXQhpAYiWAAQiVAAhrgYg");
	var mask_5_graphics_252 = new cjs.Graphics().p("AJTePQh3gXAAgiIAAmZQAAgiB3gYQB5gXCoAAQCpAAB3AXQB5AYAAAiIAAGZQAAAih5AXQh3AYipAAQioAAh5gYg");
	var mask_5_graphics_253 = new cjs.Graphics().p("AIyePQiEgXAAgiIAAmZQAAgiCEgYQCGgXC9AAQC8AACEAXQCGAYAAAiIAAGZQAAAiiGAXQiEAYi8AAQi9AAiGgYg");
	var mask_5_graphics_254 = new cjs.Graphics().p("AIQePQiRgXAAgiIAAmZQAAgiCRgYQCVgXDPAAQDQAACRAXQCVAYAAAiIAAGZQAAAiiVAXQiRAYjQAAQjPAAiVgYg");
	var mask_5_graphics_255 = new cjs.Graphics().p("AHvePQifgXAAgiIAAmZQAAgiCfgYQCjgXDjAAQDiAACfAXQCjAYAAAiIAAGZQAAAiijAXQifAYjiAAQjjAAijgYg");
	var mask_5_graphics_256 = new cjs.Graphics().p("AHOePQisgXAAgiIAAmZQAAgiCsgYQCwgXD2AAQD3AACsAXQCwAYAAAiIAAGZQAAAiiwAXQisAYj3AAQj2AAiwgYg");
	var mask_5_graphics_257 = new cjs.Graphics().p("AGtePQi6gXAAgiIAAmZQAAgiC6gYQC+gXEJAAQEKAAC6AXQC+AYAAAiIAAGZQAAAii+AXQi6AYkKAAQkJAAi+gYg");
	var mask_5_graphics_258 = new cjs.Graphics().p("AGMePQjIgXAAgiIAAmZQAAgiDIgYQDMgXEdAAQEcAADIAXQDMAYAAAiIAAGZQAAAijMAXQjIAYkcAAQkdAAjMgYg");
	var mask_5_graphics_259 = new cjs.Graphics().p("AFrePQjWgXAAgiIAAmZQAAgiDWgYQDZgXEwAAQExAADVAXQDaAYAAAiIAAGZQAAAijaAXQjVAYkxAAQkwAAjZgYg");
	var mask_5_graphics_260 = new cjs.Graphics().p("AFJePQjigXAAgiIAAmZQAAgiDigYQDogXFEAAQFDAADjAXQDnAYAAAiIAAGZQAAAijnAXQjjAYlDAAQlEAAjogYg");
	var mask_5_graphics_261 = new cjs.Graphics().p("AEoePQjwgXAAgiIAAmZQAAgiDwgYQD2gXFWAAQFXAADxAXQD1AYAAAiIAAGZQAAAij1AXQjxAYlXAAQlWAAj2gYg");
	var mask_5_graphics_262 = new cjs.Graphics().p("AEHePQj+gXAAgiIAAmZQAAgiD+gYQEEgXFpAAQFrAAD9AXQEEAYAAAiIAAGZQAAAikEAXQj9AYlrAAQlpAAkEgYg");
	var mask_5_graphics_263 = new cjs.Graphics().p("ADmePQkLgXAAgiIAAmZQAAgiELgYQERgXF+AAQF9AAELAXQESAYAAAiIAAGZQAAAikSAXQkLAYl9AAQl+AAkRgYg");
	var mask_5_graphics_264 = new cjs.Graphics().p("ADFePQkYgXAAgiIAAmZQAAgiEYgYQEfgXGQAAQGRAAEZAXQEfAYAAAiIAAGZQAAAikfAXQkZAYmRAAQmQAAkfgYg");
	var mask_5_graphics_265 = new cjs.Graphics().p("ACkePQkmgXAAgiIAAmZQAAgiEmgYQEtgXGkAAQGjAAEnAXQEtAYAAAiIAAGZQAAAiktAXQknAYmjAAQmkAAktgYg");
	var mask_5_graphics_266 = new cjs.Graphics().p("ACCePQkzgXAAgiIAAmZQAAgiEzgYQE7gXG3AAQG4AAE0AXQE7AYAAAiIAAGZQAAAik7AXQk0AYm4AAQm3AAk7gYg");
	var mask_5_graphics_267 = new cjs.Graphics().p("ABhePQlAgXAAgiIAAmZQAAgiFAgYQFJgXHLAAQHKAAFCAXQFIAYAAAiIAAGZQAAAilIAXQlCAYnKAAQnLAAlJgYg");
	var mask_5_graphics_268 = new cjs.Graphics().p("ABAePQlOgXAAgiIAAmZQAAgiFOgYQFXgXHeAAQHdAAFQAXQFWAYAAAiIAAGZQAAAilWAXQlQAYndAAQneAAlXgYg");
	var mask_5_graphics_269 = new cjs.Graphics().p("AAfePQlcgXAAgiIAAmZQAAgiFcgYQFkgXHxAAQHyAAFdAXQFkAYAAAiIAAGZQAAAilkAXQldAYnyAAQnxAAlkgYg");
	var mask_5_graphics_270 = new cjs.Graphics().p("AgBePQlrgXAAgiIAAmZQAAgiFrgYQFxgXIFAAQIEAAFqAXQFzAYAAAiIAAGZQAAAilzAXQlqAYoEAAQoFAAlxgYg");
	var mask_5_graphics_271 = new cjs.Graphics().p("AgiePQl4gXAAgiIAAmZQAAgiF4gYQF/gXIXAAQIYAAF4AXQGAAYAAAiIAAGZQAAAimAAXQl4AYoYAAQoXAAl/gYg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(245).to({graphics:mask_5_graphics_245,x:96.6,y:195.9}).wait(1).to({graphics:mask_5_graphics_246,x:101.2,y:195.9}).wait(1).to({graphics:mask_5_graphics_247,x:105.9,y:195.9}).wait(1).to({graphics:mask_5_graphics_248,x:110.6,y:195.9}).wait(1).to({graphics:mask_5_graphics_249,x:115.2,y:195.9}).wait(1).to({graphics:mask_5_graphics_250,x:119.9,y:195.9}).wait(1).to({graphics:mask_5_graphics_251,x:124.6,y:195.9}).wait(1).to({graphics:mask_5_graphics_252,x:129.3,y:195.9}).wait(1).to({graphics:mask_5_graphics_253,x:133.9,y:195.9}).wait(1).to({graphics:mask_5_graphics_254,x:138.6,y:195.9}).wait(1).to({graphics:mask_5_graphics_255,x:143.3,y:195.9}).wait(1).to({graphics:mask_5_graphics_256,x:147.9,y:195.9}).wait(1).to({graphics:mask_5_graphics_257,x:152.6,y:195.9}).wait(1).to({graphics:mask_5_graphics_258,x:157.3,y:195.9}).wait(1).to({graphics:mask_5_graphics_259,x:162,y:195.9}).wait(1).to({graphics:mask_5_graphics_260,x:166.6,y:195.9}).wait(1).to({graphics:mask_5_graphics_261,x:171.3,y:195.9}).wait(1).to({graphics:mask_5_graphics_262,x:176,y:195.9}).wait(1).to({graphics:mask_5_graphics_263,x:180.7,y:195.9}).wait(1).to({graphics:mask_5_graphics_264,x:185.3,y:195.9}).wait(1).to({graphics:mask_5_graphics_265,x:190,y:195.9}).wait(1).to({graphics:mask_5_graphics_266,x:194.7,y:195.9}).wait(1).to({graphics:mask_5_graphics_267,x:199.3,y:195.9}).wait(1).to({graphics:mask_5_graphics_268,x:204,y:195.9}).wait(1).to({graphics:mask_5_graphics_269,x:208.7,y:195.9}).wait(1).to({graphics:mask_5_graphics_270,x:213.4,y:195.9}).wait(1).to({graphics:mask_5_graphics_271,x:218,y:195.9}).wait(227));

	// 图层 43
	this.instance_24 = new lib.text4();
	this.instance_24.parent = this;
	this.instance_24.setTransform(189,346);

	this.instance_25 = new lib.元件39();
	this.instance_25.parent = this;
	this.instance_25.setTransform(312.5,364,1,1,0,0,0,123.5,18);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_24,this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},245).to({state:[{t:this.instance_25}]},242).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(487).to({_off:false},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.8},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.7},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.6},0).wait(1).to({scaleX:1.6,scaleY:1.6,alpha:0.5},0).wait(1).to({scaleX:1.72,scaleY:1.72,alpha:0.4},0).wait(1).to({scaleX:1.84,scaleY:1.84,alpha:0.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,alpha:0.2},0).wait(1).to({scaleX:2.08,scaleY:2.08,alpha:0.1},0).wait(1).to({scaleX:2.2,scaleY:2.2,alpha:0},0).wait(1));

	// 3 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_217 = new cjs.Graphics().p("AO1Z0QgYgXAAgiIAAmZQAAghAYgZQAXgXAiAAQAhAAAYAXQAYAZAAAhIAAGZQAAAigYAXQgYAYghAAQgiAAgXgYg");
	var mask_6_graphics_218 = new cjs.Graphics().p("AOVZ0QgkgXAAgiIAAmZQAAghAkgZQAlgXA0AAQA0AAAkAXQAlAZAAAhIAAGZQAAAiglAXQgkAYg0AAQg0AAglgYg");
	var mask_6_graphics_219 = new cjs.Graphics().p("AN2Z0QgygXAAgiIAAmZQAAghAygZQAygXBGAAQBGAAAxAXQAzAZAAAhIAAGZQAAAigzAXQgxAYhGAAQhGAAgygYg");
	var mask_6_graphics_220 = new cjs.Graphics().p("ANWZ0Qg+gXAAgiIAAmZQAAghA+gZQBAgXBYAAQBYAAA/AXQA/AZAAAhIAAGZQAAAig/AXQg/AYhYAAQhYAAhAgYg");
	var mask_6_graphics_221 = new cjs.Graphics().p("AM3Z0QhLgXAAgiIAAmZQAAghBLgZQBMgXBrAAQBrAABLAXQBMAZAAAhIAAGZQAAAihMAXQhLAYhrAAQhrAAhMgYg");
	var mask_6_graphics_222 = new cjs.Graphics().p("AMXZ0QhXgXAAgiIAAmZQAAghBXgZQBagXB9AAQB9AABYAXQBZAZABAhIAAGZQgBAihZAXQhYAYh9AAQh9AAhagYg");
	var mask_6_graphics_223 = new cjs.Graphics().p("AL4Z0QhlgXAAgiIAAmZQAAghBlgZQBngXCPAAQCPAABlAXQBnAZAAAhIAAGZQAAAihnAXQhlAYiPAAQiPAAhngYg");
	var mask_6_graphics_224 = new cjs.Graphics().p("ALYZ0QhxgXAAgiIAAmZQAAghBxgZQB0gXCiAAQCiAABxAXQB0AZAAAhIAAGZQAAAih0AXQhxAYiiAAQiiAAh0gYg");
	var mask_6_graphics_225 = new cjs.Graphics().p("AK5Z0Qh+gXAAgiIAAmZQAAghB+gZQCBgXC0AAQC0AAB+AXQCBAZAAAhIAAGZQAAAiiBAXQh+AYi0AAQi0AAiBgYg");
	var mask_6_graphics_226 = new cjs.Graphics().p("AKZZ0QiLgXAAgiIAAmZQAAghCLgZQCPgXDGAAQDGAACMAXQCOAZAAAhIAAGZQAAAiiOAXQiMAYjGAAQjGAAiPgYg");
	var mask_6_graphics_227 = new cjs.Graphics().p("AJ6Z0QiYgXAAgiIAAmZQAAghCYgZQCbgXDZAAQDZAACYAXQCbAZAAAhIAAGZQAAAiibAXQiYAYjZAAQjZAAibgYg");
	var mask_6_graphics_228 = new cjs.Graphics().p("AJbZ0QilgXAAgiIAAmZQAAghClgZQCogXDrAAQDrAAClAXQCoAZAAAhIAAGZQAAAiioAXQilAYjrAAQjrAAiogYg");
	var mask_6_graphics_229 = new cjs.Graphics().p("AI7Z0QiygXAAgiIAAmZQAAghCygZQC2gXD9AAQD9AACyAXQC2AZAAAhIAAGZQAAAii2AXQiyAYj9AAQj9AAi2gYg");
	var mask_6_graphics_230 = new cjs.Graphics().p("AIcZ0Qi/gXAAgiIAAmZQAAghC/gZQDCgXEQAAQEQAAC+AXQDDAZAAAhIAAGZQAAAijDAXQi+AYkQAAQkQAAjCgYg");
	var mask_6_graphics_231 = new cjs.Graphics().p("AH8Z0QjLgXAAgiIAAmZQAAghDLgZQDQgXEiAAQEiAADLAXQDQAZAAAhIAAGZQAAAijQAXQjLAYkiAAQkiAAjQgYg");
	var mask_6_graphics_232 = new cjs.Graphics().p("AHdZ0QjYgXAAgiIAAmZQAAghDYgZQDdgXE0AAQE0AADZAXQDcAZAAAhIAAGZQAAAijcAXQjZAYk0AAQk0AAjdgYg");
	var mask_6_graphics_233 = new cjs.Graphics().p("AG9Z0QjlgXAAgiIAAmZQAAghDlgZQDqgXFHAAQFHAADlAXQDqAZAAAhIAAGZQAAAijqAXQjlAYlHAAQlHAAjqgYg");
	var mask_6_graphics_234 = new cjs.Graphics().p("AGeZ0QjygXAAgiIAAmZQAAghDygZQD3gXFZAAQFZAADyAXQD3AZAAAhIAAGZQAAAij3AXQjyAYlZAAQlZAAj3gYg");
	var mask_6_graphics_235 = new cjs.Graphics().p("AF+Z0Qj+gXAAgiIAAmZQAAghD+gZQEFgXFrAAQFrAAD/AXQEEAZAAAhIAAGZQAAAikEAXQj/AYlrAAQlrAAkFgYg");
	var mask_6_graphics_236 = new cjs.Graphics().p("AFfZ0QkMgXAAgiIAAmZQAAghEMgZQERgXF+AAQF+AAELAXQESAZAAAhIAAGZQAAAikSAXQkLAYl+AAQl+AAkRgYg");
	var mask_6_graphics_237 = new cjs.Graphics().p("AFAZ0QkZgXAAgiIAAmZQAAghEZgZQEegXGQAAQGQAAEYAXQEfAZAAAhIAAGZQAAAikfAXQkYAYmQAAQmQAAkegYg");
	var mask_6_graphics_238 = new cjs.Graphics().p("AEgZ0QkkgXAAgiIAAmZQAAghEkgZQEsgXGiAAQGiAAEmAXQErAZAAAhIAAGZQAAAikrAXQkmAYmiAAQmiAAksgYg");
	var mask_6_graphics_239 = new cjs.Graphics().p("AEBZ0QkygXAAgiIAAmZQAAghEygZQE4gXG1AAQG1AAEyAXQE5AZAAAhIAAGZQAAAik5AXQkyAYm1AAQm1AAk4gYg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(217).to({graphics:mask_6_graphics_217,x:108.7,y:167.6}).wait(1).to({graphics:mask_6_graphics_218,x:113.1,y:167.6}).wait(1).to({graphics:mask_6_graphics_219,x:117.6,y:167.6}).wait(1).to({graphics:mask_6_graphics_220,x:122,y:167.6}).wait(1).to({graphics:mask_6_graphics_221,x:126.4,y:167.6}).wait(1).to({graphics:mask_6_graphics_222,x:130.9,y:167.6}).wait(1).to({graphics:mask_6_graphics_223,x:135.3,y:167.6}).wait(1).to({graphics:mask_6_graphics_224,x:139.7,y:167.6}).wait(1).to({graphics:mask_6_graphics_225,x:144.1,y:167.6}).wait(1).to({graphics:mask_6_graphics_226,x:148.6,y:167.6}).wait(1).to({graphics:mask_6_graphics_227,x:153,y:167.6}).wait(1).to({graphics:mask_6_graphics_228,x:157.4,y:167.6}).wait(1).to({graphics:mask_6_graphics_229,x:161.9,y:167.6}).wait(1).to({graphics:mask_6_graphics_230,x:166.3,y:167.6}).wait(1).to({graphics:mask_6_graphics_231,x:170.7,y:167.6}).wait(1).to({graphics:mask_6_graphics_232,x:175.2,y:167.6}).wait(1).to({graphics:mask_6_graphics_233,x:179.6,y:167.6}).wait(1).to({graphics:mask_6_graphics_234,x:184,y:167.6}).wait(1).to({graphics:mask_6_graphics_235,x:188.4,y:167.6}).wait(1).to({graphics:mask_6_graphics_236,x:192.9,y:167.6}).wait(1).to({graphics:mask_6_graphics_237,x:197.3,y:167.6}).wait(1).to({graphics:mask_6_graphics_238,x:201.7,y:167.6}).wait(1).to({graphics:mask_6_graphics_239,x:206.2,y:167.6}).wait(259));

	// 图层 41
	this.instance_26 = new lib.text3();
	this.instance_26.parent = this;
	this.instance_26.setTransform(213,290);

	this.instance_27 = new lib.元件59();
	this.instance_27.parent = this;
	this.instance_27.setTransform(312.5,308,1,1,0,0,0,99.5,18);
	this.instance_27._off = true;

	var maskedShapeInstanceList = [this.instance_26,this.instance_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26}]},217).to({state:[{t:this.instance_27}]},270).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(487).to({_off:false},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.8},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.7},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.6},0).wait(1).to({scaleX:1.6,scaleY:1.6,alpha:0.5},0).wait(1).to({scaleX:1.72,scaleY:1.72,alpha:0.4},0).wait(1).to({scaleX:1.84,scaleY:1.84,alpha:0.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,alpha:0.2},0).wait(1).to({scaleX:2.08,scaleY:2.08,alpha:0.1},0).wait(1).to({scaleX:2.2,scaleY:2.2,alpha:0},0).wait(1));

	// 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_191 = new cjs.Graphics().p("AP4VjQgYgYAAghIAAmZQAAghAYgZQAXgXAiAAQAiAAAXAXQAYAZAAAhIAAGZQAAAhgYAYQgXAYgiAAQgiAAgXgYg");
	var mask_7_graphics_192 = new cjs.Graphics().p("APZVjQgkgYAAghIAAmZQAAghAkgZQAlgXAzAAQAzAAAkAXQAlAZAAAhIAAGZQAAAhglAYQgkAYgzAAQgzAAglgYg");
	var mask_7_graphics_193 = new cjs.Graphics().p("AO7VjQgwgYAAghIAAmZQAAghAwgZQAxgXBFAAQBFAAAwAXQAxAZAAAhIAAGZQAAAhgxAYQgwAYhFAAQhFAAgxgYg");
	var mask_7_graphics_194 = new cjs.Graphics().p("AOdVjQg9gYAAghIAAmZQAAghA9gZQA+gXBWAAQBWAAA9AXQA+AZAAAhIAAGZQAAAhg+AYQg9AYhWAAQhWAAg+gYg");
	var mask_7_graphics_195 = new cjs.Graphics().p("AN/VjQhJgYAAghIAAmZQAAghBJgZQBKgXBoAAQBoAABJAXQBKAZAAAhIAAGZQAAAhhKAYQhJAYhoAAQhoAAhKgYg");
	var mask_7_graphics_196 = new cjs.Graphics().p("ANgVjQhVgYAAghIAAmZQAAghBVgZQBXgXB6AAQB6AABVAXQBXAZAAAhIAAGZQAAAhhXAYQhVAYh6AAQh6AAhXgYg");
	var mask_7_graphics_197 = new cjs.Graphics().p("ANCVjQhigYAAghIAAmZQAAghBigZQBkgXCLAAQCLAABiAXQBkAZAAAhIAAGZQAAAhhkAYQhiAYiLAAQiLAAhkgYg");
	var mask_7_graphics_198 = new cjs.Graphics().p("AMkVjQhugYAAghIAAmZQAAghBugZQBwgXCdAAQCdAABuAXQBwAZAAAhIAAGZQAAAhhwAYQhuAYidAAQidAAhwgYg");
	var mask_7_graphics_199 = new cjs.Graphics().p("AMGVjQh7gYAAghIAAmZQAAghB7gZQB9gXCuAAQCuAAB7AXQB9AZAAAhIAAGZQAAAhh9AYQh7AYiuAAQiuAAh9gYg");
	var mask_7_graphics_200 = new cjs.Graphics().p("ALnVjQiGgYAAghIAAmZQAAghCGgZQCKgXDAAAQDAAACHAXQCJAZAAAhIAAGZQAAAhiJAYQiHAYjAAAQjAAAiKgYg");
	var mask_7_graphics_201 = new cjs.Graphics().p("ALJVjQiTgYAAghIAAmZQAAghCTgZQCWgXDSAAQDSAACTAXQCWAZAAAhIAAGZQAAAhiWAYQiTAYjSAAQjSAAiWgYg");
	var mask_7_graphics_202 = new cjs.Graphics().p("AKrVjQiggYAAghIAAmZQAAghCggZQCjgXDjAAQDjAACgAXQCjAZAAAhIAAGZQAAAhijAYQigAYjjAAQjjAAijgYg");
	var mask_7_graphics_203 = new cjs.Graphics().p("AKNVjQisgYAAghIAAmZQAAghCsgZQCvgXD1AAQD1AACsAXQCvAZAAAhIAAGZQAAAhivAYQisAYj1AAQj1AAivgYg");
	var mask_7_graphics_204 = new cjs.Graphics().p("AJuVjQi4gYAAghIAAmZQAAghC4gZQC8gXEHAAQEHAAC4AXQC8AZAAAhIAAGZQAAAhi8AYQi4AYkHAAQkHAAi8gYg");
	var mask_7_graphics_205 = new cjs.Graphics().p("AJQVjQjEgYAAghIAAmZQAAghDEgZQDJgXEYAAQEYAADFAXQDIAZAAAhIAAGZQAAAhjIAYQjFAYkYAAQkYAAjJgYg");
	var mask_7_graphics_206 = new cjs.Graphics().p("AIyVjQjRgYAAghIAAmZQAAghDRgZQDVgXEqAAQEqAADRAXQDVAZAAAhIAAGZQAAAhjVAYQjRAYkqAAQkqAAjVgYg");
	var mask_7_graphics_207 = new cjs.Graphics().p("AIUVjQjegYAAghIAAmZQAAghDegZQDigXE7AAQE7AADeAXQDiAZgBAhIAAGZQABAhjiAYQjeAYk7AAQk7AAjigYg");
	var mask_7_graphics_208 = new cjs.Graphics().p("AH1VjQjpgYAAghIAAmZQAAghDpgZQDvgXFNAAQFNAADqAXQDuAZAAAhIAAGZQAAAhjuAYQjqAYlNAAQlNAAjvgYg");
	var mask_7_graphics_209 = new cjs.Graphics().p("AHXVjQj2gYAAghIAAmZQAAghD2gZQD7gXFfAAQFfAAD2AXQD7AZAAAhIAAGZQAAAhj7AYQj2AYlfAAQlfAAj7gYg");
	var mask_7_graphics_210 = new cjs.Graphics().p("AG5VjQkCgYAAghIAAmZQAAghECgZQEIgXFwAAQFwAAECAXQEIAZAAAhIAAGZQAAAhkIAYQkCAYlwAAQlwAAkIgYg");
	var mask_7_graphics_211 = new cjs.Graphics().p("AGbVjQkPgYAAghIAAmZQAAghEPgZQEUgXGCAAQGCAAEOAXQEVAZAAAhIAAGZQAAAhkVAYQkOAYmCAAQmCAAkUgYg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(191).to({graphics:mask_7_graphics_191,x:115.4,y:140.3}).wait(1).to({graphics:mask_7_graphics_192,x:119.7,y:140.3}).wait(1).to({graphics:mask_7_graphics_193,x:123.9,y:140.3}).wait(1).to({graphics:mask_7_graphics_194,x:128.2,y:140.3}).wait(1).to({graphics:mask_7_graphics_195,x:132.4,y:140.3}).wait(1).to({graphics:mask_7_graphics_196,x:136.7,y:140.3}).wait(1).to({graphics:mask_7_graphics_197,x:141,y:140.3}).wait(1).to({graphics:mask_7_graphics_198,x:145.2,y:140.3}).wait(1).to({graphics:mask_7_graphics_199,x:149.5,y:140.3}).wait(1).to({graphics:mask_7_graphics_200,x:153.7,y:140.3}).wait(1).to({graphics:mask_7_graphics_201,x:158,y:140.3}).wait(1).to({graphics:mask_7_graphics_202,x:162.3,y:140.3}).wait(1).to({graphics:mask_7_graphics_203,x:166.5,y:140.3}).wait(1).to({graphics:mask_7_graphics_204,x:170.8,y:140.3}).wait(1).to({graphics:mask_7_graphics_205,x:175,y:140.3}).wait(1).to({graphics:mask_7_graphics_206,x:179.3,y:140.3}).wait(1).to({graphics:mask_7_graphics_207,x:183.6,y:140.3}).wait(1).to({graphics:mask_7_graphics_208,x:187.8,y:140.3}).wait(1).to({graphics:mask_7_graphics_209,x:192.1,y:140.3}).wait(1).to({graphics:mask_7_graphics_210,x:196.3,y:140.3}).wait(1).to({graphics:mask_7_graphics_211,x:200.6,y:140.3}).wait(287));

	// 图层 39
	this.instance_28 = new lib.text2();
	this.instance_28.parent = this;
	this.instance_28.setTransform(225,235);

	this.instance_29 = new lib.元件60();
	this.instance_29.parent = this;
	this.instance_29.setTransform(313,253,1,1,0,0,0,88,18);
	this.instance_29._off = true;

	var maskedShapeInstanceList = [this.instance_28,this.instance_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_28}]},191).to({state:[{t:this.instance_29}]},296).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(487).to({_off:false},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.8},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.7},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.6},0).wait(1).to({scaleX:1.6,scaleY:1.6,alpha:0.5},0).wait(1).to({scaleX:1.72,scaleY:1.72,alpha:0.4},0).wait(1).to({scaleX:1.84,scaleY:1.84,alpha:0.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,alpha:0.2},0).wait(1).to({scaleX:2.08,scaleY:2.08,alpha:0.1},0).wait(1).to({scaleX:2.2,scaleY:2.2,alpha:0},0).wait(1));

	// 1 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_156 = new cjs.Graphics().p("AMwRGQgXgXAAgiIAAmZQAAghAXgZQAZgXAhAAQAiAAAXAXQAYAZAAAhIAAGZQAAAigYAXQgXAYgiAAQghAAgZgYg");
	var mask_8_graphics_157 = new cjs.Graphics().p("AMORGQglgXAAgiIAAmZQAAghAlgZQAngXA1AAQA1AAAmAXQAmAZAAAhIAAGZQAAAigmAXQgmAYg1AAQg1AAgngYg");
	var mask_8_graphics_158 = new cjs.Graphics().p("ALsRGQgzgXAAgiIAAmZQAAghAzgZQA1gXBJAAQBJAAA0AXQA0AZAAAhIAAGZQAAAig0AXQg0AYhJAAQhJAAg1gYg");
	var mask_8_graphics_159 = new cjs.Graphics().p("ALKRGQhBgXAAgiIAAmZQAAghBBgZQBDgXBdAAQBdAABCAXQBCAZAAAhIAAGZQAAAihCAXQhCAYhdAAQhdAAhDgYg");
	var mask_8_graphics_160 = new cjs.Graphics().p("AKoRGQhQgXAAgiIAAmZQAAghBQgZQBRgXBxAAQBxAABQAXQBRAZAAAhIAAGZQAAAihRAXQhQAYhxAAQhxAAhRgYg");
	var mask_8_graphics_161 = new cjs.Graphics().p("AKGRGQhegXAAgiIAAmZQAAghBegZQBfgXCFAAQCFAABdAXQBgAZAAAhIAAGZQAAAihgAXQhdAYiFAAQiFAAhfgYg");
	var mask_8_graphics_162 = new cjs.Graphics().p("AJjRGQhrgXAAgiIAAmZQAAghBrgZQBugXCZAAQCZAABrAXQBuAZAAAhIAAGZQAAAihuAXQhrAYiZAAQiZAAhugYg");
	var mask_8_graphics_163 = new cjs.Graphics().p("AJBRGQh5gXAAgiIAAmZQAAghB5gZQB8gXCtAAQCtAAB5AXQB8AZAAAhIAAGZQAAAih8AXQh5AYitAAQitAAh8gYg");
	var mask_8_graphics_164 = new cjs.Graphics().p("AIfRGQiHgXAAgiIAAmZQAAghCHgZQCKgXDBAAQDBAACHAXQCKAZAAAhIAAGZQAAAiiKAXQiHAYjBAAQjBAAiKgYg");
	var mask_8_graphics_165 = new cjs.Graphics().p("AH9RGQiVgXAAgiIAAmZQAAghCVgZQCYgXDVAAQDVAACVAXQCYAZAAAhIAAGZQAAAiiYAXQiVAYjVAAQjVAAiYgYg");
	var mask_8_graphics_166 = new cjs.Graphics().p("AHbRGQikgXAAgiIAAmZQAAghCkgZQCmgXDpAAQDpAACjAXQCnAZAAAhIAAGZQAAAiinAXQijAYjpAAQjpAAimgYg");
	var mask_8_graphics_167 = new cjs.Graphics().p("AG5RGQiygXAAgiIAAmZQAAghCygZQC0gXD9AAQD9AACxAXQC1AZAAAhIAAGZQAAAii1AXQixAYj9AAQj9AAi0gYg");
	var mask_8_graphics_168 = new cjs.Graphics().p("AGWRGQi/gXAAgiIAAmZQAAghC/gZQDEgXEQAAQEQAADAAXQDDAZAAAhIAAGZQAAAijDAXQjAAYkQAAQkQAAjEgYg");
	var mask_8_graphics_169 = new cjs.Graphics().p("AF0RGQjNgXAAgiIAAmZQAAghDNgZQDSgXEkAAQEkAADNAXQDSAZAAAhIAAGZQAAAijSAXQjNAYkkAAQkkAAjSgYg");
	var mask_8_graphics_170 = new cjs.Graphics().p("AFSRGQjbgXAAgiIAAmZQAAghDbgZQDggXE4AAQE4AADbAXQDgAZAAAhIAAGZQAAAijgAXQjbAYk4AAQk4AAjggYg");
	var mask_8_graphics_171 = new cjs.Graphics().p("AEwRGQjpgXAAgiIAAmZQAAghDpgZQDugXFMAAQFMAADpAXQDuAZAAAhIAAGZQAAAijuAXQjpAYlMAAQlMAAjugYg");
	var mask_8_graphics_172 = new cjs.Graphics().p("AEORGQj3gXAAgiIAAmZQAAghD3gZQD8gXFgAAQFgAAD3AXQD8AZAAAhIAAGZQAAAij8AXQj3AYlgAAQlgAAj8gYg");
	var mask_8_graphics_173 = new cjs.Graphics().p("ADrRGQkEgXAAgiIAAmZQAAghEEgZQELgXF0AAQF0AAEFAXQELAZAAAhIAAGZQAAAikLAXQkFAYl0AAQl0AAkLgYg");
	var mask_8_graphics_174 = new cjs.Graphics().p("ADJRGQkSgXAAgiIAAmZQAAghESgZQEZgXGIAAQGIAAETAXQEZAZAAAhIAAGZQAAAikZAXQkTAYmIAAQmIAAkZgYg");
	var mask_8_graphics_175 = new cjs.Graphics().p("ACnRGQkggXAAgiIAAmZQAAghEggZQEngXGcAAQGcAAEhAXQEnAZAAAhIAAGZQAAAiknAXQkhAYmcAAQmcAAkngYg");
	var mask_8_graphics_176 = new cjs.Graphics().p("ACFRGQkugXAAgiIAAmZQAAghEugZQE1gXGwAAQGwAAEvAXQE1AZAAAhIAAGZQAAAik1AXQkvAYmwAAQmwAAk1gYg");
	var mask_8_graphics_177 = new cjs.Graphics().p("ABjRGQk8gXAAgiIAAmZQAAghE8gZQFDgXHEAAQHEAAE9AXQFDAZAAAhIAAGZQAAAilDAXQk9AYnEAAQnEAAlDgYg");
	var mask_8_graphics_178 = new cjs.Graphics().p("ABBRGQlKgXAAgiIAAmZQAAghFKgZQFRgXHYAAQHYAAFKAXQFSAZAAAhIAAGZQAAAilSAXQlKAYnYAAQnYAAlRgYg");
	var mask_8_graphics_179 = new cjs.Graphics().p("AAeRGQlXgXAAgiIAAmZQAAghFXgZQFggXHsAAQHsAAFYAXQFgAZAAAhIAAGZQAAAilgAXQlYAYnsAAQnsAAlggYg");
	var mask_8_graphics_180 = new cjs.Graphics().p("AgDRGQlngXAAgiIAAmZQAAghFngZQFugXH/AAQH/AAFnAXQFvAZAAAhIAAGZQAAAilvAXQlnAYn/AAQn/AAlugYg");
	var mask_8_graphics_181 = new cjs.Graphics().p("AglRGQl1gXAAgiIAAmZQAAghF1gZQF8gXITAAQITAAF1AXQF9AZAAAhIAAGZQAAAil9AXQl1AYoTAAQoTAAl8gYg");
	var mask_8_graphics_182 = new cjs.Graphics().p("AhHRGQmDgXAAgiIAAmZQAAghGDgZQGKgXInAAQInAAGDAXQGLAZAAAhIAAGZQAAAimLAXQmDAYonAAQonAAmKgYg");
	var mask_8_graphics_183 = new cjs.Graphics().p("AhpRGQmRgXAAgiIAAmZQAAghGRgZQGYgXI7AAQI7AAGRAXQGZAZAAAhIAAGZQAAAimZAXQmRAYo7AAQo7AAmYgYg");
	var mask_8_graphics_184 = new cjs.Graphics().p("AiMRGQmegXAAgiIAAmZQAAghGegZQGngXJPAAQJPAAGfAXQGnAZAAAhIAAGZQAAAimnAXQmfAYpPAAQpPAAmngYg");
	var mask_8_graphics_185 = new cjs.Graphics().p("AiuRGQmsgXAAgiIAAmZQAAghGsgZQG1gXJjAAQJjAAGtAXQG1AZAAAhIAAGZQAAAim1AXQmtAYpjAAQpjAAm1gYg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(156).to({graphics:mask_8_graphics_156,x:95.5,y:111.8}).wait(1).to({graphics:mask_8_graphics_157,x:100.3,y:111.8}).wait(1).to({graphics:mask_8_graphics_158,x:105.1,y:111.8}).wait(1).to({graphics:mask_8_graphics_159,x:109.9,y:111.8}).wait(1).to({graphics:mask_8_graphics_160,x:114.8,y:111.8}).wait(1).to({graphics:mask_8_graphics_161,x:119.6,y:111.8}).wait(1).to({graphics:mask_8_graphics_162,x:124.4,y:111.8}).wait(1).to({graphics:mask_8_graphics_163,x:129.2,y:111.8}).wait(1).to({graphics:mask_8_graphics_164,x:134,y:111.8}).wait(1).to({graphics:mask_8_graphics_165,x:138.8,y:111.8}).wait(1).to({graphics:mask_8_graphics_166,x:143.7,y:111.8}).wait(1).to({graphics:mask_8_graphics_167,x:148.5,y:111.8}).wait(1).to({graphics:mask_8_graphics_168,x:153.3,y:111.8}).wait(1).to({graphics:mask_8_graphics_169,x:158.1,y:111.8}).wait(1).to({graphics:mask_8_graphics_170,x:162.9,y:111.8}).wait(1).to({graphics:mask_8_graphics_171,x:167.7,y:111.8}).wait(1).to({graphics:mask_8_graphics_172,x:172.5,y:111.8}).wait(1).to({graphics:mask_8_graphics_173,x:177.4,y:111.8}).wait(1).to({graphics:mask_8_graphics_174,x:182.2,y:111.8}).wait(1).to({graphics:mask_8_graphics_175,x:187,y:111.8}).wait(1).to({graphics:mask_8_graphics_176,x:191.8,y:111.8}).wait(1).to({graphics:mask_8_graphics_177,x:196.6,y:111.8}).wait(1).to({graphics:mask_8_graphics_178,x:201.4,y:111.8}).wait(1).to({graphics:mask_8_graphics_179,x:206.2,y:111.8}).wait(1).to({graphics:mask_8_graphics_180,x:211.1,y:111.8}).wait(1).to({graphics:mask_8_graphics_181,x:215.9,y:111.8}).wait(1).to({graphics:mask_8_graphics_182,x:220.7,y:111.8}).wait(1).to({graphics:mask_8_graphics_183,x:225.5,y:111.8}).wait(1).to({graphics:mask_8_graphics_184,x:230.3,y:111.8}).wait(1).to({graphics:mask_8_graphics_185,x:235.1,y:111.8}).wait(313));

	// 图层 37
	this.instance_30 = new lib.text1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(191,177);

	this.instance_31 = new lib.元件61();
	this.instance_31.parent = this;
	this.instance_31.setTransform(322.5,195,1,1,0,0,0,131.5,18);
	this.instance_31._off = true;

	var maskedShapeInstanceList = [this.instance_30,this.instance_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30}]},156).to({state:[{t:this.instance_30}]},30).to({state:[{t:this.instance_31}]},301).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(487).to({_off:false},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,alpha:0.8},0).wait(1).to({scaleX:1.36,scaleY:1.36,alpha:0.7},0).wait(1).to({scaleX:1.48,scaleY:1.48,alpha:0.6},0).wait(1).to({scaleX:1.6,scaleY:1.6,alpha:0.5},0).wait(1).to({scaleX:1.72,scaleY:1.72,alpha:0.4},0).wait(1).to({scaleX:1.84,scaleY:1.84,alpha:0.3},0).wait(1).to({scaleX:1.96,scaleY:1.96,alpha:0.2},0).wait(1).to({scaleX:2.08,scaleY:2.08,alpha:0.1},0).wait(1).to({scaleX:2.2,scaleY:2.2,alpha:0},0).wait(1));

	// 图层 1
	this.instance_32 = new lib.元件25();
	this.instance_32.parent = this;
	this.instance_32.setTransform(600,391.5,1,1,0,0,0,13,44.5);
	this.instance_32._off = true;

	this.instance_33 = new lib.more();
	this.instance_33.parent = this;
	this.instance_33.setTransform(587,347);

	this.instance_34 = new lib.元件68();
	this.instance_34.parent = this;
	this.instance_34.setTransform(600,391.5,1,1,0,0,0,13,44.5);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32}]},116).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},360).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(116).to({_off:false},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(3).to({_off:true},1).wait(371));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 28         复制 9
	this.instance_35 = new lib.元件24();
	this.instance_35.parent = this;
	this.instance_35.setTransform(43.8,465.5,1,1,0,0,0,8.4,0.9);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(265).to({_off:false},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(209).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 28        复制 8
	this.instance_36 = new lib.元件24();
	this.instance_36.parent = this;
	this.instance_36.setTransform(43.8,454.3,1,1,0,0,0,8.4,0.9);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(250).to({_off:false},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(224).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 28       复制 7
	this.instance_37 = new lib.元件24();
	this.instance_37.parent = this;
	this.instance_37.setTransform(43.8,444.3,1,1,0,0,0,8.4,0.9);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(235).to({_off:false},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(239).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 28      复制 6
	this.instance_38 = new lib.元件24();
	this.instance_38.parent = this;
	this.instance_38.setTransform(43.8,433.9,1,1,0,0,0,8.4,0.9);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(220).to({_off:false},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(254).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 28     复制 5
	this.instance_39 = new lib.元件24();
	this.instance_39.parent = this;
	this.instance_39.setTransform(43.8,423.7,1,1,0,0,0,8.4,0.9);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(205).to({_off:false},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(269).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 28    复制 4
	this.instance_40 = new lib.元件24();
	this.instance_40.parent = this;
	this.instance_40.setTransform(43.8,413.9,1,1,0,0,0,8.4,0.9);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(190).to({_off:false},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(284).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 28   复制 3
	this.instance_41 = new lib.元件24();
	this.instance_41.parent = this;
	this.instance_41.setTransform(43.8,404.7,1,1,0,0,0,8.4,0.9);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(175).to({_off:false},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(299).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 28  复制 2
	this.instance_42 = new lib.元件24();
	this.instance_42.parent = this;
	this.instance_42.setTransform(43.8,387.7,1,1,0,0,0,8.4,0.9);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(160).to({_off:false},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(314).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 28 复制
	this.instance_43 = new lib.元件24();
	this.instance_43.parent = this;
	this.instance_43.setTransform(43.8,395.7,1,1,0,0,0,8.4,0.9);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(145).to({_off:false},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(329).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 28
	this.instance_44 = new lib.元件24();
	this.instance_44.parent = this;
	this.instance_44.setTransform(43.8,379.1,1,1,0,0,0,8.4,0.9);
	this.instance_44._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#15FFFF").s().p("AhTAJIAAgRICoAAIAAARg");
	this.shape.setTransform(43.8,379.1);

	this.instance_45 = new lib.元件67();
	this.instance_45.parent = this;
	this.instance_45.setTransform(43.8,379.1,1,1,0,0,0,8.4,0.9);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_44}]},130).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance_45}]},342).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_45}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(130).to({_off:false},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(3).to({_off:true},1).wait(353));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 27
	this.instance_46 = new lib.元件23();
	this.instance_46.parent = this;
	this.instance_46.setTransform(44.5,355.5,1,1,0,0,0,13.5,14.5);
	this.instance_46._off = true;

	this.instance_47 = new lib.SHD();
	this.instance_47.parent = this;
	this.instance_47.setTransform(31,341);

	this.instance_48 = new lib.元件66();
	this.instance_48.parent = this;
	this.instance_48.setTransform(44.5,355.5,1,1,0,0,0,13.5,14.5);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_46}]},116).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},357).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_48}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(116).to({_off:false},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(2).to({_off:true},1).wait(368));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 25
	this.instance_49 = new lib.元件86();
	this.instance_49.parent = this;
	this.instance_49.setTransform(568,388);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(81).to({_off:false},0).to({_off:true},406).wait(11));

	// 图层 23
	this.instance_50 = new lib.元件85();
	this.instance_50.parent = this;
	this.instance_50.setTransform(85,288.5);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(81).to({_off:false},0).to({_off:true},406).wait(11));

	// 图层 9
	this.instance_51 = new lib.元件18();
	this.instance_51.parent = this;
	this.instance_51.setTransform(80.5,897.5,1,1,0,0,0,39,39.5);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(81).to({_off:false},0).wait(417));

	// 图层 4
	this.instance_52 = new lib.元件17();
	this.instance_52.parent = this;
	this.instance_52.setTransform(556.6,893.5,1,1,0,0,0,39,39.5);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(81).to({_off:false},0).wait(417));

	// 图层 3
	this.instance_53 = new lib.元件16();
	this.instance_53.parent = this;
	this.instance_53.setTransform(131.1,115.4,1,1,0,0,0,19,18.8);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(81).to({_off:false},0).wait(417));

	// 图层 2
	this.instance_54 = new lib.元件16();
	this.instance_54.parent = this;
	this.instance_54.setTransform(492,133.6,1,1,0,0,180,39,39.5);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(81).to({_off:false},0).wait(417));

	// 图层 16   复制 3
	this.instance_55 = new lib.元件14();
	this.instance_55.parent = this;
	this.instance_55.setTransform(104.7,90.1,1,1,0,0,180,45.5,46.5);
	this.instance_55._off = true;

	this.instance_56 = new lib.xian();
	this.instance_56.parent = this;
	this.instance_56.setTransform(512,940,1,1,0,180,0);

	this.instance_57 = new lib.元件72();
	this.instance_57.parent = this;
	this.instance_57.setTransform(557.5,893.5,1,1,0,0,0,45.5,46.5);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_55}]},70).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},406).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_57}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(70).to({_off:false},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({_off:true},1).wait(417));
	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 16  复制 2
	this.instance_58 = new lib.元件14();
	this.instance_58.parent = this;
	this.instance_58.setTransform(560.7,894.4,1,1,0,0,180,45.5,46.5);
	this.instance_58._off = true;

	this.instance_59 = new lib.xian();
	this.instance_59.parent = this;
	this.instance_59.setTransform(35,850);

	this.instance_60 = new lib.元件71();
	this.instance_60.parent = this;
	this.instance_60.setTransform(80.5,896.5,1,1,0,0,0,45.5,46.5);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_58}]},70).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},406).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_60}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(70).to({_off:false},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({_off:true},1).wait(417));
	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 16 复制
	this.instance_61 = new lib.元件14();
	this.instance_61.parent = this;
	this.instance_61.setTransform(80.7,896,1,1,0,0,0,45.5,46.5);
	this.instance_61._off = true;

	this.instance_62 = new lib.xian();
	this.instance_62.parent = this;
	this.instance_62.setTransform(151,44,1,1,0,0,180);

	this.instance_63 = new lib.元件70();
	this.instance_63.parent = this;
	this.instance_63.setTransform(105.5,90.5,1,1,0,0,0,45.5,46.5);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_61}]},70).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},406).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(70).to({_off:false},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({_off:true},1).wait(417));
	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 16
	this.instance_64 = new lib.元件14();
	this.instance_64.parent = this;
	this.instance_64.setTransform(533.5,93.5,1,1,0,0,0,45.5,46.5);
	this.instance_64._off = true;

	this.instance_65 = new lib.xian();
	this.instance_65.parent = this;
	this.instance_65.setTransform(488,47);

	this.instance_66 = new lib.元件69();
	this.instance_66.parent = this;
	this.instance_66.setTransform(533.5,93.5,1,1,0,0,0,45.5,46.5);
	this.instance_66._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_64}]},70).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},406).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_66}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(70).to({_off:false},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({_off:true},1).wait(417));
	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 7 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_31 = new cjs.Graphics().p("EAXRBMoIAArHICjAAIAALHg");
	var mask_9_graphics_32 = new cjs.Graphics().p("EAS4BMoIAArHIIZAAIAALHg");
	var mask_9_graphics_33 = new cjs.Graphics().p("EAOgBMoIAArHIOPAAIAALHg");
	var mask_9_graphics_34 = new cjs.Graphics().p("EAKIBMoIAArHIUEAAIAALHg");
	var mask_9_graphics_35 = new cjs.Graphics().p("EAFvBMoIAArHIZ7AAIAALHg");
	var mask_9_graphics_36 = new cjs.Graphics().p("EABXBMoIAArHIfwAAIAALHg");
	var mask_9_graphics_37 = new cjs.Graphics().p("EgDABMoIAArHMAlkAAAIAALHg");
	var mask_9_graphics_38 = new cjs.Graphics().p("EgHZBMoIAArHMArbAAAIAALHg");
	var mask_9_graphics_39 = new cjs.Graphics().p("EgLxBMoIAArHMAxQAAAIAALHg");
	var mask_9_graphics_40 = new cjs.Graphics().p("EgQJBMoIAArHMA3GAAAIAALHg");
	var mask_9_graphics_41 = new cjs.Graphics().p("EgUiBMoIAArHMA88AAAIAALHg");
	var mask_9_graphics_42 = new cjs.Graphics().p("EgY6BMoIAArHMBCyAAAIAALHg");
	var mask_9_graphics_43 = new cjs.Graphics().p("EgdSBMoIAArHMBInAAAIAALHg");
	var mask_9_graphics_44 = new cjs.Graphics().p("EghqBMoIAArHMBOdAAAIAALHg");
	var mask_9_graphics_45 = new cjs.Graphics().p("EgizBMnIAArHMBOcAAAIAALHg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_9_graphics_31,x:165.2,y:490.4}).wait(1).to({graphics:mask_9_graphics_32,x:174.5,y:490.4}).wait(1).to({graphics:mask_9_graphics_33,x:183.9,y:490.4}).wait(1).to({graphics:mask_9_graphics_34,x:193.2,y:490.4}).wait(1).to({graphics:mask_9_graphics_35,x:202.6,y:490.4}).wait(1).to({graphics:mask_9_graphics_36,x:211.9,y:490.4}).wait(1).to({graphics:mask_9_graphics_37,x:221.2,y:490.4}).wait(1).to({graphics:mask_9_graphics_38,x:230.6,y:490.4}).wait(1).to({graphics:mask_9_graphics_39,x:239.9,y:490.4}).wait(1).to({graphics:mask_9_graphics_40,x:249.3,y:490.4}).wait(1).to({graphics:mask_9_graphics_41,x:258.6,y:490.4}).wait(1).to({graphics:mask_9_graphics_42,x:268,y:490.4}).wait(1).to({graphics:mask_9_graphics_43,x:277.3,y:490.4}).wait(1).to({graphics:mask_9_graphics_44,x:286.6,y:490.4}).wait(1).to({graphics:mask_9_graphics_45,x:279.3,y:490.3}).wait(453));

	// 图层 6
	this.instance_67 = new lib.xuxian();
	this.instance_67.parent = this;
	this.instance_67.setTransform(110,937);

	this.instance_68 = new lib.元件73();
	this.instance_68.parent = this;
	this.instance_68.setTransform(319.5,946.5,1,1,0,0,0,209.5,9.5);
	this.instance_68._off = true;

	var maskedShapeInstanceList = [this.instance_67,this.instance_68];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_67}]},31).to({state:[{t:this.instance_68}]},456).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_68}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 22
	this.instance_69 = new lib.元件20();
	this.instance_69.parent = this;
	this.instance_69.setTransform(571,501,1,1,0,0,0,13,13);
	this.instance_69._off = true;

	this.instance_70 = new lib.RRRM();
	this.instance_70.parent = this;
	this.instance_70.setTransform(558,488);

	this.instance_71 = new lib.元件74();
	this.instance_71.parent = this;
	this.instance_71.setTransform(571,501,1,1,0,0,0,13,13);
	this.instance_71._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_69}]},35).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},442).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_71}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(35).to({_off:false},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(453));
	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 21
	this.instance_72 = new lib.元件19();
	this.instance_72.parent = this;
	this.instance_72.setTransform(72.5,498.5,1,1,0,0,0,12.5,12.5);
	this.instance_72._off = true;

	this.instance_73 = new lib.LRRM();
	this.instance_73.parent = this;
	this.instance_73.setTransform(60,486);

	this.instance_74 = new lib.元件75();
	this.instance_74.parent = this;
	this.instance_74.setTransform(72.5,498.5,1,1,0,0,0,12.5,12.5);
	this.instance_74._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_72}]},35).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},442).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_74}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(35).to({_off:false},0).wait(1).to({alpha:0},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({_off:true},1).wait(453));
	this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 3 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_51 = new cjs.Graphics().p("AncB3IAAjtIO5AAIAADtg");
	var mask_10_graphics_52 = new cjs.Graphics().p("AncFAIAAp/IO5AAIAAJ/g");
	var mask_10_graphics_53 = new cjs.Graphics().p("AncIIIAAwPIO5AAIAAQPg");
	var mask_10_graphics_54 = new cjs.Graphics().p("AncLRIAA2hIO5AAIAAWhg");
	var mask_10_graphics_55 = new cjs.Graphics().p("AncOZIAA8xIO5AAIAAcxg");
	var mask_10_graphics_56 = new cjs.Graphics().p("AncRiMAAAgjDIO5AAMAAAAjDg");
	var mask_10_graphics_57 = new cjs.Graphics().p("AncUqMAAAgpTIO5AAMAAAApTg");
	var mask_10_graphics_58 = new cjs.Graphics().p("AncXzMAAAgvlIO5AAMAAAAvlg");
	var mask_10_graphics_59 = new cjs.Graphics().p("Anca7MAAAg11IO5AAMAAAA11g");
	var mask_10_graphics_60 = new cjs.Graphics().p("AnceEMAAAg8HIO5AAMAAAA8Hg");
	var mask_10_graphics_61 = new cjs.Graphics().p("EgHcAhMMAAAhCXIO5AAMAAABCXg");
	var mask_10_graphics_62 = new cjs.Graphics().p("EgHcAkVMAAAhIpIO5AAMAAABIpg");
	var mask_10_graphics_63 = new cjs.Graphics().p("EgHcAndMAAAhO5IO5AAMAAABO5g");
	var mask_10_graphics_64 = new cjs.Graphics().p("EgHcAqmMAAAhVLIO5AAMAAABVLg");
	var mask_10_graphics_65 = new cjs.Graphics().p("EgHcAtuMAAAhbbIO5AAMAAABbbg");
	var mask_10_graphics_66 = new cjs.Graphics().p("EgHcAw3MAAAhhtIO5AAMAAABhtg");
	var mask_10_graphics_67 = new cjs.Graphics().p("EgHcAz/MAAAhn9IO5AAMAAABn9g");
	var mask_10_graphics_68 = new cjs.Graphics().p("EgHcA3IMAAAhuPIO5AAMAAABuPg");
	var mask_10_graphics_69 = new cjs.Graphics().p("EgHcA6QMAAAh0fIO5AAMAAAB0fg");
	var mask_10_graphics_70 = new cjs.Graphics().p("EgHcA9ZMAAAh6xIO5AAMAAAB6xg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(51).to({graphics:mask_10_graphics_51,x:65.3,y:519.1}).wait(1).to({graphics:mask_10_graphics_52,x:66.2,y:522}).wait(1).to({graphics:mask_10_graphics_53,x:67.2,y:524.8}).wait(1).to({graphics:mask_10_graphics_54,x:68.1,y:527.7}).wait(1).to({graphics:mask_10_graphics_55,x:69,y:530.6}).wait(1).to({graphics:mask_10_graphics_56,x:69.9,y:533.4}).wait(1).to({graphics:mask_10_graphics_57,x:70.9,y:536.3}).wait(1).to({graphics:mask_10_graphics_58,x:71.8,y:539.1}).wait(1).to({graphics:mask_10_graphics_59,x:72.7,y:542}).wait(1).to({graphics:mask_10_graphics_60,x:73.6,y:544.9}).wait(1).to({graphics:mask_10_graphics_61,x:74.6,y:547.7}).wait(1).to({graphics:mask_10_graphics_62,x:75.5,y:550.6}).wait(1).to({graphics:mask_10_graphics_63,x:76.4,y:553.5}).wait(1).to({graphics:mask_10_graphics_64,x:77.3,y:556.3}).wait(1).to({graphics:mask_10_graphics_65,x:78.3,y:559.2}).wait(1).to({graphics:mask_10_graphics_66,x:79.2,y:562}).wait(1).to({graphics:mask_10_graphics_67,x:80.1,y:564.9}).wait(1).to({graphics:mask_10_graphics_68,x:81,y:567.8}).wait(1).to({graphics:mask_10_graphics_69,x:82,y:570.6}).wait(1).to({graphics:mask_10_graphics_70,x:82.9,y:573.5}).wait(428));

	// 图层 13 复制
	this.instance_75 = new lib._1();
	this.instance_75.parent = this;
	this.instance_75.setTransform(113,531,1,1,0,0,180);

	this.instance_76 = new lib.元件76();
	this.instance_76.parent = this;
	this.instance_76.setTransform(79.5,721.5,1,1,0,0,0,33.5,190.5);
	this.instance_76._off = true;

	var maskedShapeInstanceList = [this.instance_75,this.instance_76];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_75}]},51).to({state:[{t:this.instance_76}]},436).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_76}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 3 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_51 = new cjs.Graphics().p("AoHBoIAAjPIQPAAIAADPg");
	var mask_11_graphics_52 = new cjs.Graphics().p("AoHD6IAAnzIQPAAIAAHzg");
	var mask_11_graphics_53 = new cjs.Graphics().p("AoHGLIAAsVIQPAAIAAMVg");
	var mask_11_graphics_54 = new cjs.Graphics().p("AoHIdIAAw5IQPAAIAAQ5g");
	var mask_11_graphics_55 = new cjs.Graphics().p("AoHKvIAA1dIQPAAIAAVdg");
	var mask_11_graphics_56 = new cjs.Graphics().p("AoHNAIAA5/IQPAAIAAZ/g");
	var mask_11_graphics_57 = new cjs.Graphics().p("AoHPSIAA+jIQPAAIAAejg");
	var mask_11_graphics_58 = new cjs.Graphics().p("AoHRkMAAAgjHIQPAAMAAAAjHg");
	var mask_11_graphics_59 = new cjs.Graphics().p("AoHT1MAAAgnpIQPAAMAAAAnpg");
	var mask_11_graphics_60 = new cjs.Graphics().p("AoHWHMAAAgsNIQPAAMAAAAsNg");
	var mask_11_graphics_61 = new cjs.Graphics().p("AoHYZMAAAgwxIQPAAMAAAAwxg");
	var mask_11_graphics_62 = new cjs.Graphics().p("AoHarMAAAg1VIQPAAMAAAA1Vg");
	var mask_11_graphics_63 = new cjs.Graphics().p("AoHc8MAAAg53IQPAAMAAAA53g");
	var mask_11_graphics_64 = new cjs.Graphics().p("AoHfOMAAAg+bIQPAAMAAAA+bg");
	var mask_11_graphics_65 = new cjs.Graphics().p("EgIHAhgMAAAhC/IQPAAMAAABC/g");
	var mask_11_graphics_66 = new cjs.Graphics().p("EgIHAjxMAAAhHhIQPAAMAAABHhg");
	var mask_11_graphics_67 = new cjs.Graphics().p("EgIHAmDMAAAhMFIQPAAMAAABMFg");
	var mask_11_graphics_68 = new cjs.Graphics().p("EgIHAoVMAAAhQpIQPAAMAAABQpg");
	var mask_11_graphics_69 = new cjs.Graphics().p("EgIHAqmMAAAhVLIQPAAMAAABVLg");
	var mask_11_graphics_70 = new cjs.Graphics().p("EgIHAs4MAAAhZvIQPAAMAAABZvg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(51).to({graphics:mask_11_graphics_51,x:560.8,y:522.4}).wait(1).to({graphics:mask_11_graphics_52,x:560.8,y:528.7}).wait(1).to({graphics:mask_11_graphics_53,x:560.8,y:535}).wait(1).to({graphics:mask_11_graphics_54,x:560.8,y:541.2}).wait(1).to({graphics:mask_11_graphics_55,x:560.8,y:547.5}).wait(1).to({graphics:mask_11_graphics_56,x:560.8,y:553.8}).wait(1).to({graphics:mask_11_graphics_57,x:560.8,y:560.1}).wait(1).to({graphics:mask_11_graphics_58,x:560.8,y:566.4}).wait(1).to({graphics:mask_11_graphics_59,x:560.8,y:572.7}).wait(1).to({graphics:mask_11_graphics_60,x:560.8,y:579}).wait(1).to({graphics:mask_11_graphics_61,x:560.8,y:585.2}).wait(1).to({graphics:mask_11_graphics_62,x:560.8,y:591.5}).wait(1).to({graphics:mask_11_graphics_63,x:560.8,y:597.8}).wait(1).to({graphics:mask_11_graphics_64,x:560.8,y:604.1}).wait(1).to({graphics:mask_11_graphics_65,x:560.8,y:610.4}).wait(1).to({graphics:mask_11_graphics_66,x:560.8,y:616.7}).wait(1).to({graphics:mask_11_graphics_67,x:560.8,y:622.9}).wait(1).to({graphics:mask_11_graphics_68,x:560.8,y:629.2}).wait(1).to({graphics:mask_11_graphics_69,x:560.8,y:635.5}).wait(1).to({graphics:mask_11_graphics_70,x:560.8,y:641.8}).wait(428));

	// 图层 13
	this.instance_77 = new lib._1();
	this.instance_77.parent = this;
	this.instance_77.setTransform(528,531);

	this.instance_78 = new lib.元件77();
	this.instance_78.parent = this;
	this.instance_78.setTransform(561.5,721.5,1,1,0,0,0,33.5,190.5);
	this.instance_78._off = true;

	var maskedShapeInstanceList = [this.instance_77,this.instance_78];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_77}]},51).to({state:[{t:this.instance_78}]},436).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_78}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 2 (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_31 = new cjs.Graphics().p("AkJBiIAAjDIITAAIAADDg");
	var mask_12_graphics_32 = new cjs.Graphics().p("AkUFcIAAq3IIpAAIAAK3g");
	var mask_12_graphics_33 = new cjs.Graphics().p("AkeJWIAAyrII9AAIAASrg");
	var mask_12_graphics_34 = new cjs.Graphics().p("AkpNQIAA6fIJTAAIAAafg");
	var mask_12_graphics_35 = new cjs.Graphics().p("Ak0RKMAAAgiTIJpAAMAAAAiTg");
	var mask_12_graphics_36 = new cjs.Graphics().p("Ak+VEMAAAgqHIJ9AAMAAAAqHg");
	var mask_12_graphics_37 = new cjs.Graphics().p("AlJY+MAAAgx7IKTAAMAAAAx7g");
	var mask_12_graphics_38 = new cjs.Graphics().p("AlUc4MAAAg5vIKpAAMAAAA5vg");
	var mask_12_graphics_39 = new cjs.Graphics().p("EgFeAgyMAAAhBjIK9AAMAAABBjg");
	var mask_12_graphics_40 = new cjs.Graphics().p("EgFpAksMAAAhJXILTAAMAAABJXg");
	var mask_12_graphics_41 = new cjs.Graphics().p("EgF0AomMAAAhRLILpAAMAAABRLg");
	var mask_12_graphics_42 = new cjs.Graphics().p("EgF+AsgMAAAhY/IL9AAMAAABY/g");
	var mask_12_graphics_43 = new cjs.Graphics().p("EgGJAwaMAAAhgzIMTAAMAAABgzg");
	var mask_12_graphics_44 = new cjs.Graphics().p("EgGUA0UMAAAhonIMpAAMAAABong");
	var mask_12_graphics_45 = new cjs.Graphics().p("EgGeA4OMAAAhwbIM9AAMAAABwbg");
	var mask_12_graphics_46 = new cjs.Graphics().p("EgGpA8IMAAAh4PINTAAMAAAB4Pg");
	var mask_12_graphics_47 = new cjs.Graphics().p("EgG0BACMAAAiADINpAAMAAACADg");
	var mask_12_graphics_48 = new cjs.Graphics().p("EgG/BD8MAAAiH3IN/AAMAAACH3g");
	var mask_12_graphics_49 = new cjs.Graphics().p("EgHJBH2MAAAiPrIOTAAMAAACPrg");
	var mask_12_graphics_50 = new cjs.Graphics().p("EgHUBLwMAAAiXfIOpAAMAAACXfg");
	var mask_12_graphics_51 = new cjs.Graphics().p("EgHfBPqMAAAifTIO/AAMAAACfTg");
	var mask_12_graphics_52 = new cjs.Graphics().p("EgLyBPqMAAAifTIXlAAMAAACfTg");
	var mask_12_graphics_53 = new cjs.Graphics().p("EgQGBPqMAAAifTMAgNAAAMAAACfTg");
	var mask_12_graphics_54 = new cjs.Graphics().p("EgUZBPqMAAAifTMAozAAAMAAACfTg");
	var mask_12_graphics_55 = new cjs.Graphics().p("EgYtBPqMAAAifTMAxbAAAMAAACfTg");
	var mask_12_graphics_56 = new cjs.Graphics().p("EgdABPqMAAAifTMA6BAAAMAAACfTg");
	var mask_12_graphics_57 = new cjs.Graphics().p("EghUBPqMAAAifTMBCpAAAMAAACfTg");
	var mask_12_graphics_58 = new cjs.Graphics().p("EglnBPqMAAAifTMBLPAAAMAAACfTg");
	var mask_12_graphics_59 = new cjs.Graphics().p("Egp7BPqMAAAifTMBT3AAAMAAACfTg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_12_graphics_31,x:72.6,y:559.8}).wait(1).to({graphics:mask_12_graphics_32,x:71.9,y:559.8}).wait(1).to({graphics:mask_12_graphics_33,x:71.2,y:559.8}).wait(1).to({graphics:mask_12_graphics_34,x:70.4,y:559.8}).wait(1).to({graphics:mask_12_graphics_35,x:69.7,y:559.8}).wait(1).to({graphics:mask_12_graphics_36,x:69,y:559.8}).wait(1).to({graphics:mask_12_graphics_37,x:68.3,y:559.8}).wait(1).to({graphics:mask_12_graphics_38,x:67.6,y:559.8}).wait(1).to({graphics:mask_12_graphics_39,x:66.9,y:559.8}).wait(1).to({graphics:mask_12_graphics_40,x:66.1,y:559.8}).wait(1).to({graphics:mask_12_graphics_41,x:65.4,y:559.8}).wait(1).to({graphics:mask_12_graphics_42,x:64.7,y:559.8}).wait(1).to({graphics:mask_12_graphics_43,x:64,y:559.8}).wait(1).to({graphics:mask_12_graphics_44,x:63.3,y:559.8}).wait(1).to({graphics:mask_12_graphics_45,x:62.6,y:559.8}).wait(1).to({graphics:mask_12_graphics_46,x:61.8,y:559.8}).wait(1).to({graphics:mask_12_graphics_47,x:61.1,y:559.8}).wait(1).to({graphics:mask_12_graphics_48,x:60.4,y:559.8}).wait(1).to({graphics:mask_12_graphics_49,x:59.7,y:559.8}).wait(1).to({graphics:mask_12_graphics_50,x:59,y:559.8}).wait(1).to({graphics:mask_12_graphics_51,x:58.2,y:559.8}).wait(1).to({graphics:mask_12_graphics_52,x:58.3,y:559.8}).wait(1).to({graphics:mask_12_graphics_53,x:58.3,y:559.8}).wait(1).to({graphics:mask_12_graphics_54,x:58.2,y:559.8}).wait(1).to({graphics:mask_12_graphics_55,x:58.2,y:559.8}).wait(1).to({graphics:mask_12_graphics_56,x:58.3,y:559.8}).wait(1).to({graphics:mask_12_graphics_57,x:58.2,y:559.8}).wait(1).to({graphics:mask_12_graphics_58,x:58.2,y:559.8}).wait(1).to({graphics:mask_12_graphics_59,x:58.3,y:559.8}).wait(439));

	// 图层 8 复制
	this.instance_79 = new lib._2();
	this.instance_79.parent = this;
	this.instance_79.setTransform(341,67,1,1,0,0,180);

	this.instance_80 = new lib.元件78();
	this.instance_80.parent = this;
	this.instance_80.setTransform(193.5,308.5,1,1,0,0,0,147.5,241.5);
	this.instance_80._off = true;

	var maskedShapeInstanceList = [this.instance_79,this.instance_80];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_79}]},31).to({state:[{t:this.instance_80}]},456).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_80}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 2 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_31 = new cjs.Graphics().p("EAesArWIAAgjIWdAAIAAAjg");
	var mask_13_graphics_32 = new cjs.Graphics().p("EAerAxvIAAxWIWbAAIAARWg");
	var mask_13_graphics_33 = new cjs.Graphics().p("EAerA4HMAAAgiIIWXAAMAAAAiIg");
	var mask_13_graphics_34 = new cjs.Graphics().p("EAeqA+gMAAAgy7IWVAAMAAAAy7g");
	var mask_13_graphics_35 = new cjs.Graphics().p("EAeqBE5MAAAhDuIWSAAMAAABDug");
	var mask_13_graphics_36 = new cjs.Graphics().p("EAeqBLSMAAAhUfIWOAAMAAABUfg");
	var mask_13_graphics_37 = new cjs.Graphics().p("EAepBRrMAAAhlSIWMAAMAAABlSg");
	var mask_13_graphics_38 = new cjs.Graphics().p("EAepBYEMAAAh2FIWJAAMAAAB2Fg");
	var mask_13_graphics_39 = new cjs.Graphics().p("EAepBecMAAAiG3IWFAAMAAACG3g");
	var mask_13_graphics_40 = new cjs.Graphics().p("EAeoBk1MAAAiXqIWDAAMAAACXqg");
	var mask_13_graphics_41 = new cjs.Graphics().p("EAeoBrOMAAAiocIV/AAMAAACocg");
	var mask_13_graphics_42 = new cjs.Graphics().p("EAenBxnMAAAi5PIV9AAMAAAC5Pg");
	var mask_13_graphics_43 = new cjs.Graphics().p("EAenB4AMAAAjKCIV6AAMAAADKCg");
	var mask_13_graphics_44 = new cjs.Graphics().p("EAenB+ZMAAAja1IV2AAMAAADa1g");
	var mask_13_graphics_45 = new cjs.Graphics().p("EAemCExMAAAjrnIV0AAMAAADrng");
	var mask_13_graphics_46 = new cjs.Graphics().p("EAemCLKMAAAj8ZIVxAAMAAAD8Zg");
	var mask_13_graphics_47 = new cjs.Graphics().p("EAemCRjMAAAkNMIVtAAMAAAENMg");
	var mask_13_graphics_48 = new cjs.Graphics().p("EAelCX8MAAAkd/IVrAAMAAAEd/g");
	var mask_13_graphics_49 = new cjs.Graphics().p("EAelCeVMAAAkuyIVoAAMAAAEuyg");
	var mask_13_graphics_50 = new cjs.Graphics().p("EAekCkuMAAAk/lIVlAAMAAAE/lg");
	var mask_13_graphics_51 = new cjs.Graphics().p("EAekCrGMAAAlQXIViAAMAAAFQXg");
	var mask_13_graphics_52 = new cjs.Graphics().p("EAW/CqkMAAAlQXIfvAAMAAAFQXg");
	var mask_13_graphics_53 = new cjs.Graphics().p("EAPZCqBMAAAlQXMAp9AAAMAAAFQXg");
	var mask_13_graphics_54 = new cjs.Graphics().p("EAHzCpeMAAAlQXMA0LAAAMAAAFQXg");
	var mask_13_graphics_55 = new cjs.Graphics().p("EAAOCo7MAAAlQXMA+YAAAMAAAFQXg");
	var mask_13_graphics_56 = new cjs.Graphics().p("EgHXCoYMAAAlQXMBImAAAMAAAFQXg");
	var mask_13_graphics_57 = new cjs.Graphics().p("EgO8CoMMAAAlQXMBSzAAAMAAAFQXg");
	var mask_13_graphics_58 = new cjs.Graphics().p("EgWiCoMMAAAlQXMBdBAAAMAAAFQXg");
	var mask_13_graphics_59 = new cjs.Graphics().p("EgeHCoMMAAAlQXMBnOAAAMAAAFQXg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_13_graphics_31,x:340.1,y:277.4}).wait(1).to({graphics:mask_13_graphics_32,x:339.8,y:318.3}).wait(1).to({graphics:mask_13_graphics_33,x:339.4,y:359.1}).wait(1).to({graphics:mask_13_graphics_34,x:339.1,y:400}).wait(1).to({graphics:mask_13_graphics_35,x:338.8,y:440.9}).wait(1).to({graphics:mask_13_graphics_36,x:338.4,y:481.8}).wait(1).to({graphics:mask_13_graphics_37,x:338.1,y:522.7}).wait(1).to({graphics:mask_13_graphics_38,x:337.8,y:563.6}).wait(1).to({graphics:mask_13_graphics_39,x:337.4,y:604.4}).wait(1).to({graphics:mask_13_graphics_40,x:337.1,y:645.3}).wait(1).to({graphics:mask_13_graphics_41,x:336.7,y:686.2}).wait(1).to({graphics:mask_13_graphics_42,x:336.4,y:727.1}).wait(1).to({graphics:mask_13_graphics_43,x:336.1,y:768}).wait(1).to({graphics:mask_13_graphics_44,x:335.7,y:808.9}).wait(1).to({graphics:mask_13_graphics_45,x:335.4,y:849.7}).wait(1).to({graphics:mask_13_graphics_46,x:335.1,y:890.6}).wait(1).to({graphics:mask_13_graphics_47,x:334.7,y:931.5}).wait(1).to({graphics:mask_13_graphics_48,x:334.4,y:972.4}).wait(1).to({graphics:mask_13_graphics_49,x:334.1,y:1013.3}).wait(1).to({graphics:mask_13_graphics_50,x:333.7,y:1054.2}).wait(1).to({graphics:mask_13_graphics_51,x:333.4,y:1095.1}).wait(1).to({graphics:mask_13_graphics_52,x:350.2,y:1091.6}).wait(1).to({graphics:mask_13_graphics_53,x:367,y:1088.1}).wait(1).to({graphics:mask_13_graphics_54,x:383.8,y:1084.6}).wait(1).to({graphics:mask_13_graphics_55,x:400.6,y:1081.1}).wait(1).to({graphics:mask_13_graphics_56,x:417.5,y:1077.6}).wait(1).to({graphics:mask_13_graphics_57,x:434.3,y:1071.8}).wait(1).to({graphics:mask_13_graphics_58,x:451.1,y:1064.8}).wait(1).to({graphics:mask_13_graphics_59,x:467.9,y:1057.9}).wait(439));

	// 图层 8
	this.instance_81 = new lib._2();
	this.instance_81.parent = this;
	this.instance_81.setTransform(300,67);

	this.instance_82 = new lib.元件79();
	this.instance_82.parent = this;
	this.instance_82.setTransform(447.5,308.5,1,1,0,0,0,147.5,241.5);
	this.instance_82._off = true;

	var maskedShapeInstanceList = [this.instance_81,this.instance_82];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_81}]},31).to({state:[{t:this.instance_82}]},456).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_82}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(487).to({_off:false},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 1 (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_10 = new cjs.Graphics().p("EgF0AoWIAAhKIQCAAIAABKg");
	var mask_14_graphics_11 = new cjs.Graphics().p("EgFzAq2IAArSIQBAAIAALSg");
	var mask_14_graphics_12 = new cjs.Graphics().p("EgFyAtWIAA1ZIQBAAIAAVZg");
	var mask_14_graphics_13 = new cjs.Graphics().p("EgFyAv2IAA/hIQBAAIAAfhg");
	var mask_14_graphics_14 = new cjs.Graphics().p("EgFxAyWMAAAgpoIQBAAMAAAApog");
	var mask_14_graphics_15 = new cjs.Graphics().p("EgFwA01MAAAgzvIQBAAMAAAAzvg");
	var mask_14_graphics_16 = new cjs.Graphics().p("EgFwA3VMAAAg91IQBAAMAAAA91g");
	var mask_14_graphics_17 = new cjs.Graphics().p("EgFvA51MAAAhH9IQBAAMAAABH9g");
	var mask_14_graphics_18 = new cjs.Graphics().p("EgFuA8VMAAAhSEIQBAAMAAABSEg");
	var mask_14_graphics_19 = new cjs.Graphics().p("EgFuA+1MAAAhcMIQBAAMAAABcMg");
	var mask_14_graphics_20 = new cjs.Graphics().p("EgFtBBVMAAAhmUIQBAAMAAABmUg");
	var mask_14_graphics_21 = new cjs.Graphics().p("EgFsBD1MAAAhwbIQAAAMAAABwbg");
	var mask_14_graphics_22 = new cjs.Graphics().p("EgFsBGVMAAAh6jIQBAAMAAAB6jg");
	var mask_14_graphics_23 = new cjs.Graphics().p("EgFrBI0MAAAiEpIQBAAMAAACEpg");
	var mask_14_graphics_24 = new cjs.Graphics().p("EgFqBLUMAAAiOxIQAAAMAAACOxg");
	var mask_14_graphics_25 = new cjs.Graphics().p("EgFqBN0MAAAiY4IQBAAMAAACY4g");
	var mask_14_graphics_26 = new cjs.Graphics().p("EgFpBRhMAAAijBIQAAAMAAACjBg");
	var mask_14_graphics_27 = new cjs.Graphics().p("EgPiBRhMAAAijBIfFAAMAAACjBg");
	var mask_14_graphics_28 = new cjs.Graphics().p("EgXFBRhMAAAijBMAuLAAAMAAACjBg");
	var mask_14_graphics_29 = new cjs.Graphics().p("EgeoBRhMAAAijBMA9RAAAMAAACjBg");
	var mask_14_graphics_30 = new cjs.Graphics().p("EgmKBRhMAAAijBMBMVAAAMAAACjBg");
	var mask_14_graphics_31 = new cjs.Graphics().p("EgttBRhMAAAijBMBbbAAAMAAACjBg");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_14_graphics_10,x:65.4,y:258.2}).wait(1).to({graphics:mask_14_graphics_11,x:65.4,y:274.2}).wait(1).to({graphics:mask_14_graphics_12,x:65.5,y:290.2}).wait(1).to({graphics:mask_14_graphics_13,x:65.5,y:306.2}).wait(1).to({graphics:mask_14_graphics_14,x:65.6,y:322.2}).wait(1).to({graphics:mask_14_graphics_15,x:65.7,y:338.1}).wait(1).to({graphics:mask_14_graphics_16,x:65.7,y:354.1}).wait(1).to({graphics:mask_14_graphics_17,x:65.8,y:370.1}).wait(1).to({graphics:mask_14_graphics_18,x:65.9,y:386.1}).wait(1).to({graphics:mask_14_graphics_19,x:65.9,y:402.1}).wait(1).to({graphics:mask_14_graphics_20,x:66,y:418.1}).wait(1).to({graphics:mask_14_graphics_21,x:66,y:434.1}).wait(1).to({graphics:mask_14_graphics_22,x:66.1,y:450.1}).wait(1).to({graphics:mask_14_graphics_23,x:66.2,y:466}).wait(1).to({graphics:mask_14_graphics_24,x:66.2,y:482}).wait(1).to({graphics:mask_14_graphics_25,x:66.3,y:498}).wait(1).to({graphics:mask_14_graphics_26,x:66.3,y:506.4}).wait(1).to({graphics:mask_14_graphics_27,x:73.7,y:506.4}).wait(1).to({graphics:mask_14_graphics_28,x:66.1,y:506.4}).wait(1).to({graphics:mask_14_graphics_29,x:58.4,y:506.4}).wait(1).to({graphics:mask_14_graphics_30,x:50.7,y:506.4}).wait(1).to({graphics:mask_14_graphics_31,x:43,y:506.4}).wait(467));

	// 图层 5 复制
	this.instance_83 = new lib.元件4();
	this.instance_83.parent = this;
	this.instance_83.setTransform(198.5,489.5,1,1,0,0,180,152.5,439.5);
	this.instance_83._off = true;

	var maskedShapeInstanceList = [this.instance_83];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(10).to({_off:false},0).wait(478).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 1 (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_10 = new cjs.Graphics().p("EAMAAmbIAAhAMAyAAAAIAABAg");
	var mask_15_graphics_11 = new cjs.Graphics().p("EAM9AotIAAqDMAwwAAAIAAKDg");
	var mask_15_graphics_12 = new cjs.Graphics().p("EAN5ArAIAAzGMAvhAAAIAATGg");
	var mask_15_graphics_13 = new cjs.Graphics().p("EAO2AtTIAA8JMAuRAAAIAAcJg");
	var mask_15_graphics_14 = new cjs.Graphics().p("EAPyAvmMAAAglNMAtDAAAMAAAAlNg");
	var mask_15_graphics_15 = new cjs.Graphics().p("EAQuAx4MAAAguPMAr0AAAMAAAAuPg");
	var mask_15_graphics_16 = new cjs.Graphics().p("EARrA0LMAAAg3RMAqkAAAMAAAA3Rg");
	var mask_15_graphics_17 = new cjs.Graphics().p("EASnA2eMAAAhAVMApVAAAMAAABAVg");
	var mask_15_graphics_18 = new cjs.Graphics().p("EATkA4wMAAAhJXMAoFAAAMAAABJXg");
	var mask_15_graphics_19 = new cjs.Graphics().p("EAUgA7DMAAAhSaMAm3AAAMAAABSag");
	var mask_15_graphics_20 = new cjs.Graphics().p("EAVdA9WMAAAhbeMAlnAAAMAAABbeg");
	var mask_15_graphics_21 = new cjs.Graphics().p("EAWZA/pMAAAhkhMAkYAAAMAAABkhg");
	var mask_15_graphics_22 = new cjs.Graphics().p("EAXWBB7MAAAhtjMAjIAAAMAAABtjg");
	var mask_15_graphics_23 = new cjs.Graphics().p("EAYSBEOMAAAh2nMAh5AAAMAAAB2ng");
	var mask_15_graphics_24 = new cjs.Graphics().p("EAZPBGhMAAAh/qMAgpAAAMAAAB/qg");
	var mask_15_graphics_25 = new cjs.Graphics().p("EAaLBI0MAAAiItIfbAAMAAACItg");
	var mask_15_graphics_26 = new cjs.Graphics().p("EAbHBLGMAAAiRwIeMAAMAAACRwg");
	var mask_15_graphics_27 = new cjs.Graphics().p("EAQKBLGMAAAiRwMAsnAAAMAAACRwg");
	var mask_15_graphics_28 = new cjs.Graphics().p("EAFMBLGMAAAiRwMA7EAAAMAAACRwg");
	var mask_15_graphics_29 = new cjs.Graphics().p("EgFwBLGMAAAiRwMBJfAAAMAAACRwg");
	var mask_15_graphics_30 = new cjs.Graphics().p("EgQuBLGMAAAiRwMBX7AAAMAAACRwg");
	var mask_15_graphics_31 = new cjs.Graphics().p("EgbrBLGMAAAiRwMBmXAAAMAAACRwg");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_15_graphics_10,x:396.8,y:245.9}).wait(1).to({graphics:mask_15_graphics_11,x:394.9,y:260.5}).wait(1).to({graphics:mask_15_graphics_12,x:393,y:275.2}).wait(1).to({graphics:mask_15_graphics_13,x:391.1,y:289.9}).wait(1).to({graphics:mask_15_graphics_14,x:389.3,y:304.6}).wait(1).to({graphics:mask_15_graphics_15,x:387.4,y:319.2}).wait(1).to({graphics:mask_15_graphics_16,x:385.5,y:333.9}).wait(1).to({graphics:mask_15_graphics_17,x:383.6,y:348.6}).wait(1).to({graphics:mask_15_graphics_18,x:381.7,y:363.2}).wait(1).to({graphics:mask_15_graphics_19,x:379.9,y:377.9}).wait(1).to({graphics:mask_15_graphics_20,x:378,y:392.6}).wait(1).to({graphics:mask_15_graphics_21,x:376.1,y:407.3}).wait(1).to({graphics:mask_15_graphics_22,x:374.2,y:421.9}).wait(1).to({graphics:mask_15_graphics_23,x:372.3,y:436.6}).wait(1).to({graphics:mask_15_graphics_24,x:370.4,y:451.3}).wait(1).to({graphics:mask_15_graphics_25,x:368.6,y:466}).wait(1).to({graphics:mask_15_graphics_26,x:366.7,y:480.6}).wait(1).to({graphics:mask_15_graphics_27,x:388.9,y:480.6}).wait(1).to({graphics:mask_15_graphics_28,x:411.2,y:480.6}).wait(1).to({graphics:mask_15_graphics_29,x:433.5,y:480.6}).wait(1).to({graphics:mask_15_graphics_30,x:455.7,y:480.6}).wait(1).to({graphics:mask_15_graphics_31,x:478,y:480.6}).wait(467));

	// 图层 5
	this.instance_84 = new lib.元件4();
	this.instance_84.parent = this;
	this.instance_84.setTransform(443.1,489.5,1,1,0,0,0,152.5,439.5);
	this.instance_84._off = true;

	var maskedShapeInstanceList = [this.instance_84];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_15;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(10).to({_off:false},0).wait(478).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// 图层 14
	this.instance_85 = new lib.元件57();
	this.instance_85.parent = this;
	this.instance_85.setTransform(320.5,498.2,1,1,0,0,0,274.5,430.4);
	this.instance_85.alpha = 0;
	this.instance_85._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(70).to({_off:false},0).wait(1).to({alpha:0.03},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.27},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.301},0).wait(407).to({alpha:0.27},0).wait(1).to({alpha:0.24},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.18},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.12},0).wait(1).to({alpha:0.09},0).wait(1).to({alpha:0.06},0).wait(1).to({alpha:0.03},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 640,
	height: 1042,
	fps: 24,
	color: "#000000",
	opacity: 0.00,
	manifest:{
		//path: "http://mat1.gtimg.com/tech/images/lw/live/insider/images/",
		path: "images/",
		manifest: [
			{src:"_1.png", id:"_1"},
			{src:"_2.png", id:"_2"},
			{src:"gezi.png", id:"gezi"},
			{src:"HITECH.png", id:"HITECH"},
			{src:"ICON1.png", id:"ICON1"},
			{src:"ICON2.png", id:"ICON2"},
			{src:"ICON3.png", id:"ICON3"},
			{src:"ICON4.png", id:"ICON4"},
			{src:"ICON5.png", id:"ICON5"},
			{src:"ICON6.png", id:"ICON6"},
			{src:"ICON7.png", id:"ICON7"},
			{src:"jiantou.png", id:"jiantou"},
			{src:"LRRM.png", id:"LRRM"},
			{src:"lefttiao.png", id:"lefttiao"},
			{src:"more.png", id:"more"},
			{src:"RRRM.png", id:"RRRM"},
			{src:"righttiao.png", id:"righttiao"},
			{src:"SHD.png", id:"SHD"},
			{src:"text1.png", id:"text1"},
			{src:"text2.png", id:"text2"},
			{src:"text3.png", id:"text3"},
			{src:"text4.png", id:"text4"},
			{src:"text5.png", id:"text5"},
			{src:"text6.png", id:"text6"},
			{src:"text7.png", id:"text7"},
			{src:"text8.png", id:"text8"},
			{src:"text9.png", id:"text9"},
			{src:"topkuang.png", id:"topkuang"},
			{src:"waikuang.png", id:"waikuang"},
			{src:"xian.png", id:"xian"},
			{src:"xuxian.png", id:"xuxian"},
			{src:"zhong.png", id:"zhong"}
		],
	},
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;