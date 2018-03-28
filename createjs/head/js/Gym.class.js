(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.ershuai = function() {
	this.initialize(img.ershuai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,530);// helper functions:

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


(lib.yuan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqqKqQkbkaAAmQQAAmPEbkbQEbkbGPAAQGQAAEaEbQEcEbAAGPQAAGQkcEaQkaEcmQAAQmPAAkbkcg");
	mask.setTransform(96.6,96.6);

	// 图层 2
	this.instance = new lib.ershuai();
	this.instance.parent = this;
	this.instance.setTransform(-336,-165);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yuan, new cjs.Rectangle(0,0,193.1,193.1), null);


// stage content:
(lib.gym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.yuan();
	this.instance.parent = this;
	this.instance.setTransform(371.2,398.3,1.208,1.208,0,0,0,96.7,96.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:96.5,regY:96.5,scaleX:1.2,scaleY:1.2,x:379.5,y:390.8},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:387.9,y:383.4},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:396,y:375.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:404,y:367.8},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:411.5,y:359.6},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:418.6,y:351},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:425.3,y:342},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:431.2,y:332.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:436.1,y:322.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:439.6,y:311.8},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:441.1,y:300.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:440.1,y:289.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:436.3,y:279.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:430,y:269.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:422.1,y:262},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:413.2,y:255.4},0).wait(1).to({scaleX:1,scaleY:1,x:403.5,y:249.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:393.5,y:244.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:383.1,y:240.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:372.5,y:237},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:361.8,y:233.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:351,y:231},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:339.8,y:228.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:328.7,y:225},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:317.3,y:223.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:305.8,y:224.2},0).wait(1).to({scaleX:1,scaleY:1,x:287,y:226.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:268.6,y:231.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:250.5,y:236.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:232.8,y:243.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:215.6,y:251.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:199,y:261},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:183.3,y:271.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:169.3,y:284.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:159.7,y:300.7},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:164.9,y:318},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:185.7,y:334.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:209.3,y:346.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:234.5,y:355},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:260.6,y:360.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:287,y:363.4},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:313.6,y:364.4},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:340.2,y:363.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:366.7,y:361.6},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:393.1,y:358.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:419.3,y:353.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:445.2,y:347.2},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:458.6,y:343},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:471.4,y:337.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:479.3,y:327.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:472.3,y:317.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:464.8,y:307.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:456.9,y:298.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:448.6,y:289},0).wait(1).to({scaleX:1,scaleY:1,x:439.9,y:280.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:430.6,y:272.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:420.9,y:264.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:410.8,y:257.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:400.3,y:251},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:389.3,y:245.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:378.1,y:240.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:366.5,y:236.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:354.6,y:232.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:342.5,y:230.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:330.3,y:228.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:318.1,y:227.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:305.7,y:227.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:293.4,y:227.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:281.1,y:229.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:269,y:231.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:257,y:234.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:245.2,y:238},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:233.6,y:242.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:222.3,y:247.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:211.3,y:252.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:200.6,y:259},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:190.4,y:265.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:180.6,y:273.4},0).wait(1).to({scaleX:1,scaleY:1,x:171.4,y:281.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:162.9,y:290.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:155.3,y:300.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:175.9,y:315.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:197.7,y:329.2},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:220.7,y:340.6},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:244.7,y:349.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:269.4,y:356.9},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:294.6,y:361.9},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:320.1,y:364.7},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:345.7,y:365.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:371.4,y:364.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:396.9,y:361.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:422,y:355.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:439.3,y:349.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:455.6,y:341.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:468.8,y:329},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:471.3,y:311.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:466.2,y:302.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:458.8,y:295.7},0).wait(1).to({scaleX:1,scaleY:1,x:450.2,y:290.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:441.1,y:285.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:431.5,y:282},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:421.7,y:279},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:411.8,y:276.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:401.8,y:274.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:391.7,y:272.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:381.6,y:271.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:371.5,y:270.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:361.3,y:269.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:351.1,y:268.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:340.9,y:268.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:330.7,y:268.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:320.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:310.2,y:268.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:300,y:269},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:289.8,y:269.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:279.6,y:270.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:269.5,y:271.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:259.3,y:272.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:249.1,y:274.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:239.1,y:275.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:229,y:277.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:214.8,y:281.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:200.9,y:285.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:187.3,y:291.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:174.6,y:298.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:163,y:307.9},0).wait(1).to({scaleX:1,scaleY:1,x:153,y:318.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:144.6,y:330.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:137.7,y:343.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:149.3,y:362.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:161.1,y:380.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:174.6,y:398.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:191.4,y:412.2},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:211.6,y:420.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:233,y:425.3},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:254.9,y:427.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:276.9,y:427},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:298.7,y:425.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:320.4,y:421.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:341.8,y:417.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:363,y:411.3},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:383.8,y:404.4},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:404.2,y:396.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:424.1,y:387.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:443.3,y:376.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:456.7,y:367},0).wait(1).to({scaleX:1,scaleY:1,x:468.5,y:355.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:476.4,y:341.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:476.1,y:325.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168.7,603.2,966.1,640.1);
// library properties:
lib.properties = {
	width: 640,
	height: 1042,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ershuai.jpg?1489492622033", id:"ershuai"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;