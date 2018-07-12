/*----Animación contacto--------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function (lib1, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib1.webFontTxtFilters = {};

// library properties:
lib1.properties = {
	width: 950,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib1.ssMetadata = [];


lib1.webfontAvailable = function(family) {
	lib1.properties.webfonts[family] = true;
	var txtFilters = lib1.webFontTxtFilters && lib1.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib1.enve_gra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A9AC").s().p("AuwMKQh5AAhWhXQhWhVgBh6IAAvHQABh6BWhVQBXhXB5AAIdhAAQB4AABXBXQBVBVAAB6IAAPHQAAB6hVBVQhYBXh4AAgAx/HkQAABWA8A+QA9A8BWAAIdhAAQBVAAA+g8QA8g+ABhWIAArtIvwH3QhCAmhPgBQhOAAhFgnIvsn3gAxDp2Qg8A9AABWIAAB4IQVILQAyAfA4AAQA3AAAxgcIQZoMIAAh6QgBhWg8g9Qg+g+hUAAI9hAAQhWAAg+A+g");
	this.shape.setTransform(123.9,77.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.8,155.6);


(lib1.enve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,out:18});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		stage1.canvas.addEventListener("mouseover", over.bind(this));
		function over()
		{
		    this.gotoAndPlay("over");
		}

		stage1.canvas.addEventListener("mouseout", out.bind(this));
		function out()
		{
		    this.gotoAndPlay("out");
		}
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(11));

	// Layer 1
	this.instance = new lib1.enve_gra("synched",0);
	this.instance.setTransform(123.9,77.8,1,1,0,0,0,123.9,77.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:77.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:33.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-8},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:-46.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:-82.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-1.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:147.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:283.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:405.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:513.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:608.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:690.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:758},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:812.2},0).wait(1).to({scaleX:1,scaleY:1,x:852.8},0).wait(1).to({x:852.9},0).wait(1).to({x:123.9,y:-1.2,alpha:0,mode:"independent"},0).wait(1).to({y:7.7,alpha:0.111},0).wait(1).to({y:16.6,alpha:0.222},0).wait(1).to({y:25.5,alpha:0.333},0).wait(1).to({y:34.4,alpha:0.444},0).wait(1).to({y:43.3,alpha:0.556},0).wait(1).to({y:52.2,alpha:0.667},0).wait(1).to({y:61.1,alpha:0.778},0).wait(1).to({y:70,alpha:0.889},0).wait(1).to({y:78.8,alpha:1},0).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A9AC").s().p("ADKAdImTAAQgMAAgJgJQgIgIAAgMQAAgJAJgJQAIgJAMgBIGTAAQANABAIAIQAIAIAAALQAAAMgIAJQgIAIgLAAIgCAAg");
	this.shape.setTransform(117.2,83.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#20B4B6").s().p("AFsAdIrXAAQgMAAgJgJQgIgIAAgMQAAgJAJgJQAIgJAMgBILXAAQANABAIAIQAIAIAAALQAAAMgIAJQgIAIgLAAIgCAAg");
	this.shape_1.setTransform(170.9,83.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#40BFC1").s().p("AIOAdIwbAAQgMAAgJgJQgIgIAAgMQAAgJAJgJQAIgJAMgBIQbAAQAMABAJAIQAIAIAAALQAAAMgIAJQgIAIgLAAIgCAAg");
	this.shape_2.setTransform(224.6,83.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#60C9CB").s().p("AKvAdI1eAAQgMAAgIgJQgJgIAAgMQAAgKAJgIQAIgJAMgBIVfAAQANABAHAIQAJAIAAALQAAAMgJAJQgIAIgKAAIgDAAg");
	this.shape_3.setTransform(278.3,83.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#80D4D6").s().p("ANSAdI6jgBQgMAAgIgIQgJgJAAgLQAAgKAJgJQAJgJAMAAIaiAAQANAAAHAJQAJAIAAALQAAAMgJAIQgIAJgLAAIgBAAg");
	this.shape_4.setTransform(332,83.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9FDFE0").s().p("AvzAcQgMABgJgJQgIgJAAgLQAAgKAJgJQAIgIANgBIfmABQAMAAAJAIQAIAIAAALQAAAMgIAIQgKAJgMAAg");
	this.shape_5.setTransform(385.7,83.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BFEAEA").s().p("AyVAcQgMABgIgJQgJgJAAgLQAAgKAJgJQAIgIAMgBMAkrAABQAMAAAIAIQAJAIAAALQAAAMgJAIQgIAJgNAAg");
	this.shape_6.setTransform(439.4,83.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DFF4F5").s().p("A03AcQgMABgIgJQgJgJAAgLQAAgLAJgIQAJgJAMAAMApuAABQAMAAAIAIQAJAIAAALQAAAMgJAIQgJAJgMAAg");
	this.shape_7.setTransform(493,83.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("A3ZAcQgMABgIgJQgJgJAAgLQAAgLAJgIQAJgJAMAAMAuyAABQAMAAAIAIQAJAIAAALQAAAMgJAIQgJAJgMAAg");
	this.shape_8.setTransform(546.7,83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).wait(10));

	// Layer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00A9AC").s().p("ABJAdIiSAAQgLAAgJgJQgJgJAAgLQAAgKAJgJQAJgIAMgBICSAAQAMABAIAIQAJAJAAAKQAAAMgJAJQgIAIgKAAIgDAAg");
	this.shape_9.setTransform(130,68.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#20B4B6").s().p("ADrAdInVAAQgMAAgIgJQgJgJAAgLQAAgKAIgJQAKgIALgBIHVAAQAMABAIAIQAJAJAAAKQAAAMgIAJQgJAIgKAAIgCAAg");
	this.shape_10.setTransform(183.7,68.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#40BFC1").s().p("AGMAdIsXAAQgMAAgIgJQgJgJAAgLQAAgKAIgJQAJgIAMgBIMXAAQAMABAIAIQAJAJAAAKQAAAMgIAJQgIAIgLAAIgCAAg");
	this.shape_11.setTransform(237.3,68.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#60C9CB").s().p("AItAdIxaAAQgLAAgJgJQgJgJAAgLQABgKAIgJQAJgJAMAAIRZAAQANABAHAIQAJAJAAAKQABAMgJAJQgIAIgLAAIgCAAg");
	this.shape_12.setTransform(290.9,68.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#80D4D6").s().p("ALOAdI2cAAQgLAAgJgJQgJgJAAgLQAAgKAJgJQAJgJAMAAIWcAAQAMABAIAIQAJAJAAAKQAAAMgJAJQgHAIgLAAIgDAAg");
	this.shape_13.setTransform(344.5,68.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9FDFE0").s().p("ANwAdI7fAAQgLAAgJgJQgJgJAAgLQgBgLAKgIQAIgJAMAAIbfAAQAMABAJAIQAIAJAAAKQABAMgJAJQgJAIgLAAIgBAAg");
	this.shape_14.setTransform(398.2,68.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BFEAEA").s().p("AQRAdMgghAAAQgMAAgIgJQgJgJAAgLQgBgLAJgIQAJgJAMAAMAghAAAQAMABAJAIQAIAJAAAKQABAMgJAJQgIAIgMAAIgBAAg");
	this.shape_15.setTransform(451.8,68.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DFF4F5").s().p("ASyAdMgljAAAQgMAAgIgJQgJgJAAgLQgBgLAJgIQAJgJAMAAMAljAAAQAMAAAJAJQAJAIgBALQABAMgJAJQgIAIgMAAIgBAAg");
	this.shape_16.setTransform(505.4,68.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AVTAdMgqmAAAQgLAAgJgJQgJgJAAgLQAAgLAJgIQAIgJANAAMAqmAAAQAMAAAIAJQAJAIAAALQAAAMgJAJQgIAIgLAAIgCAAg");
	this.shape_17.setTransform(559,68.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},9).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).wait(10));

	// Layer 6
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A9AC").s().p("ABJAdIiSAAQgLAAgJgJQgJgJAAgLQAAgKAJgJQAJgIAMgBICSAAQAMABAIAIQAJAJAAAKQAAAMgJAJQgIAIgKAAIgDAAg");
	this.shape_18.setTransform(130,98.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#20B4B6").s().p("ADrAdInVAAQgMAAgIgJQgJgJAAgLQAAgKAIgJQAKgIALgBIHVAAQAMABAIAIQAJAJAAAKQAAAMgIAJQgJAIgKAAIgCAAg");
	this.shape_19.setTransform(183.7,98.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#40BFC1").s().p("AGMAdIsXAAQgMAAgIgJQgJgJAAgLQAAgKAIgJQAJgIAMgBIMXAAQAMABAIAIQAJAJAAAKQAAAMgIAJQgIAIgLAAIgCAAg");
	this.shape_20.setTransform(237.3,98.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#60C9CB").s().p("AItAdIxaAAQgLAAgJgJQgJgJAAgLQABgKAIgJQAJgJAMAAIRZAAQANABAHAIQAJAJAAAKQABAMgJAJQgIAIgLAAIgCAAg");
	this.shape_21.setTransform(290.9,98.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#80D4D6").s().p("ALOAdI2cAAQgLAAgJgJQgJgJAAgLQAAgKAJgJQAJgJAMAAIWcAAQAMABAIAIQAJAJAAAKQAAAMgJAJQgHAIgLAAIgDAAg");
	this.shape_22.setTransform(344.5,98.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9FDFE0").s().p("ANwAdI7fAAQgLAAgJgJQgJgJAAgLQgBgLAKgIQAIgJAMAAIbfAAQAMABAJAIQAIAJAAAKQABAMgJAJQgJAIgLAAIgBAAg");
	this.shape_23.setTransform(398.2,98.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BFEAEA").s().p("AQRAdMgghAAAQgMAAgIgJQgJgJAAgLQgBgLAJgIQAJgJAMAAMAghAAAQAMABAJAIQAIAJAAAKQABAMgJAJQgIAIgMAAIgBAAg");
	this.shape_24.setTransform(451.8,98.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DFF4F5").s().p("ASyAdMgljAAAQgMAAgIgJQgJgJAAgLQgBgLAJgIQAJgJAMAAMAljAAAQAMAAAJAJQAJAIgBALQABAMgJAJQgIAIgMAAIgBAAg");
	this.shape_25.setTransform(505.4,98.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AVTAdMgqmAAAQgLAAgJgJQgJgJAAgLQAAgLAJgIQAIgJANAAMAqmAAAQAMAAAIAJQAJAIAAALQAAAMgJAJQgIAIgLAAIgCAAg");
	this.shape_26.setTransform(559,98.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},9).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[]},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.8,155.6);


// stage content:

(lib1.con = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.enve();
	this.instance.setTransform(505,270.1,1,1,0,0,0,123.9,77.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(856.1,462.3,247.8,155.6);

})(lib1 = lib1||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib1, images, createjs, ss;

/*----Atributos Generales de las  Animaciones-----------------------------------------------------------------------------------------------------------------------------------------------*/

var canvas1, stage1, exportRoot1;
function init() {
	canvas1 = document.getElementById("con");
	handleComplete();
}
function handleComplete() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot1 = new lib1.con();
	stage1 = new createjs.Stage(canvas1);
	stage1.addChild(exportRoot1);
	//Registers the "tick" event listener.
	createjs.Ticker.setFPS(lib1.properties.fps);
	createjs.Ticker.addEventListener("tick", stage1);

	//Code to support hidpi screens and responsive scaling.
	(function(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS=1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib1.properties.width, h = lib1.properties.height;
			var iw = window.innerWidth, ih=window.innerHeight;
			var pRatio = window.devicePixelRatio, xRatio=iw/w, yRatio=ih/h, sRatio=1;
			if(isResp) {
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
					sRatio = lastS;
				}
				else if(!isScale) {
					if(iw<w || ih<h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			canvas1.width = w*pRatio*sRatio;
			canvas1.height = h*pRatio*sRatio;
			stage1.scaleX = pRatio*sRatio;
			stage1.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
		}
	})(false,'both',false,1);
}
