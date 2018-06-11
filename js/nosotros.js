/*----Animación cohete/rocket--------------------------------------------------------------------------------------------------------------------------------------------------------*/


(function (lib1, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib1.webFontTxtFilters = {};

// lib1rary properties:
lib1.properties = {
	width: 950,
	height: 600,
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



(lib1.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85d100").s().p("AgbAcQgLgMAAgQQAAgPALgMQAMgLAPAAQAQAAAMALQALAMAAAPQAAAQgLAMQgMALgQAAQgPAAgMgLg");
	this.shape.setTransform(22,-24.8,2.548,2.548);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85d100").s().p("AhGBIQgegeAAgqQAAgpAegdQAegeAoAAQAqAAAdAeQAeAdAAApQAAAqgeAeQgdAdgqAAQgpAAgdgdg");
	this.shape_1.setTransform(45.2,-48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85d100").s().p("AgYAaQgMgMAAgOQAAgOAMgLQAKgLAOABQAPgBAKALQAMALAAAOQAAAOgMAMQgKALgPgBQgOABgKgLg");
	this.shape_2.setTransform(139.3,-137.4,2.548,2.548);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#85d100").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgLAPAAQAQAAAMALQALAMAAAPQABAQgMAMQgMALgQAAQgQAAgLgLg");
	this.shape_3.setTransform(68.4,-71.2,2.548,2.548);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#85d100").s().p("AhHBHQgFgFAAgHQAAgHAFgGIB1h1QAGgFAHAAQAHAAAFAFQAGAGAAAHQAAAIgGAFIh0B0QgGAGgHAAQgHAAgGgGg");
	this.shape_4.setTransform(124.5,-122.7,2.548,2.548);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#85d100").s().p("AiFGYQiRgihOh6QgYgmgPgrIgKgjQgCgIAGgIIGqnOQAgggApgRQApgRAsAAQAtAAApARQApARAfAgQAgAfARApQAQAoAAAtQAAAtgRApQgRAogfAgInKGvQgFAFgHAAgAAzk9ImjHHQAPA8AnA1QBCBbByAdIHCmoQAagbAOgiQAOghAAgmQABglgOgjQgOghgbgbQgagagjgPQgigOgmAAQhNAAg3A3g");
	this.shape_5.setTransform(19.3,-21.6,2.548,2.548);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlVDyQgXgkgOgoIgJghIGpnPQA8g8BVAAQBVAAA9A8QA7A8AABVQAABVg8A8InJGvQiLghhJh0g");
	this.shape_6.setTransform(19.3,-21.6,2.548,2.548);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlVDyQgXgkgOgoIgJghIGpnPQA8g8BVAAQBVAAA9A8QA7A8AABVQAABVg8A8InJGvQiLghhJh0g");
	this.shape_7.setTransform(19.3,-21.6,2.548,2.548);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#85d100").s().p("AkfI4Ih+h+QgMgMAAgRQgCgSAMgOIFVmrQATgWADgeQAEgyg2gxQgNgMgCgVQAAgUAPgOIFDkxQANgMATABQASAAAOANQCLCLACDIQADDGiMCLIoAHNQgNALgRAAQgVAAgNgNgAgGjkQAyBCgIBLQgFA5ghAnIk8GOIBCBCIHemvQBvhugDigQAAiHhVhqg");
	this.shape_8.setTransform(6.5,88.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkeI4Ih+h+QgNgMAAgRQgBgSALgOIAug5IEolyQATgVACgfQACgfgTgeQgMgTgUgTQgNgMgDgVQAAgVAQgNIAighIAtgpIDWjLIAegcQANgMASABQATAAANANQATASARAWIANAPQBZB7AECYIAAAJQABBggkBYQgjBVhEBEIn/HNQgOALgRAAQgUAAgNgNg");
	this.shape_9.setTransform(6.5,88.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#85d100").s().p("AisChIgygxQgEgFgBgHQAAgHAEgGIC1jGQA1g3BOAAQAmAAAiAOQAjAOAbAcQAFAFAAAGQAAAIgFAFIh4B+QgFAHgHgCQgJAAgEgFQgTgUgRABQgJAAgHADIgHAFIioCGQgFAEgGAAQgGAAgGgGgAgQhXIipC6IAbAaICch9IALgGQAQgIARABQAZgBAXARIBehkQgqgig1ABQg/AAgqArg");
	this.shape_10.setTransform(-90.4,-8.2,2.548,2.548);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Am5GcIh+h+QgNgMgBgSQAAgSAMgOIHNn+QCJiLDFAAQBhAABYAlQBZAkBEBEQAMANACASQAAASgNAOIkxFEQgOAQgTgCQgVAAgMgPQgugxgsAAQgWAAgUAKIgRALImuFWQgNAKgPAAQgSAAgOgOg");
	this.shape_11.setTransform(-90.4,-8.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#85d100").s().p("AAiCzQhugbg8hcQgTgegMgfQgGgTgCgLQgBgKAIgHICYh+QAGgEAIAAQAFABAFAGQAEAGAAAHQgBAHgGAFIiOB3QAMArAeAnQAwBABOAWIBxiTQAFgGAHgBQAHgBAGAFQAGAEABAGQABAHgEAGIh4CeQgGAHgJAAg");
	this.shape_12.setTransform(-46.4,45.6,2.548,2.548);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABaHIQkdhEiYjrQgxhLgehTQgQgwgEgcQgEgbAUgQIGFlBQAPgMATABQAQADANAOQAKANDJDJIDJDHIAKAYQAJAZgLAMIkxGUQgOASgXAAg");
	this.shape_13.setTransform(-46.6,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.6,-146.8,297.4,293.7);


(lib1.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#85d100").ss(7,1,1).p("AmlEuQA/BsB2ApQB3ArB1guQBIBPBrAXQBtAWBmgtQBrgwA4hpQA1hngThxQB9g9AuiAQAxiBg6h/Qg3h7h7g0Qh6g1h9AsQhLhChjgPQhlgQhbAqQhDAfgyA3QgvA3gWBFQhJg0hagKQhcgLhVAmQiCA6gxCGQgOAhgFAhQgSBhArBfQAFALAFAKQAsBTBPAxQBYA2BngEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACvImQhrgXhIhPQh1Auh3grQh2gpg/hsQhnAEhYg2QhPgxgshTIgKgVQgrhfAShhQAFghAOghQAxiGCCg6QBVgmBcALQBaAKBJA0QAWhFAvg3QAyg3BDgfQBbgqBlAQQBjAPBLBCQB9gsB6A1QB7A0A3B7QA6B/gxCBQguCAh9A9QATBxg1BnQg4BphrAwQhEAehHAAQgjAAglgHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.2,-59.2,162.4,118.6);


(lib1.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#85d100").ss(9,1,1).p("AmlEuQA/BsB2ApQB3ArB1guQBIBPBrAXQBtAWBmgtQBrgwA4hpQA1hngThxQB9g9AuiAQAxiBg6h/Qg3h7h7g0Qh6g1h9AsQhLhChjgPQhlgQhbAqQhDAfgyA3QgvA3gWBFQhJg0hagKQhcgLhVAmQiCA6gxCGQgOAhgFAhQgSBhArBfQAFALAFAKQAsBTBPAxQBYA2BngEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACvImQhrgXhIhPQh1Auh3grQh2gpg/hsQhnAEhYg2QhPgxgshTIgKgVQgrhfAShhQAFghAOghQAxiGCCg6QBVgmBcALQBaAKBJA0QAWhFAvg3QAyg3BDgfQBbgqBlAQQBjAPBLBCQB9gsB6A1QB7A0A3B7QA6B/gxCBQguCAh9A9QATBxg1BnQg4BphrAwQhEAehHAAQgjAAglgHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-60.3,164.4,120.6);


(lib1.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#85d100").ss(7,1,1).p("AJJjuQg1iOiFhJQiEhLiXAeQhHhuh5gwQh+gyiDAhQiKAkhXBxQhVBwAACLQiiAvhSCTQhVCOArCjQAoCeCJBYQCHBYCfgbQBLBdBzAnQB1AoB4ggQBVgWBHg4QBDg4AohOQBNBNBpAeQBsAgBtgbQCngrBXiVQAWgmAOgmQAphyggh7QgDgOgFgMQgjhqhVhLQhehTh7gQg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkMKZQhzgnhLhdQifAbiHhYQiJhYgoieQgrijBViOQBSiTCigvQAAiLBVhwQBXhxCKgkQCDghB+AyQB5AwBHBuQCXgeCEBLQCFBJA1COQB7AQBeBTQBVBLAjBqIAIAaQAgB7gpByQgOAmgWAmQhXCVinArQhtAbhsggQhpgehNhNQgoBOhDA4QhHA4hVAWQg1AOg0AAQhCAAhCgWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.9,-72.2,196,144.5);


(lib1.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#85d100").ss(3.5).p("ADGgbQAHgmgQgjQgRgkgjgTQgVgMgagCQgOgTgXgNQgsgYguAOQgwAOgYAsQgMAUgCAXQgkgDgfAQQghARgRAgQgZAsAOAuQAOAwAsAYQAfARAhgCQAOAxAsAYQAkAVAogHQApgHAcgeIADACQAsAYAwgOQAwgOAYgsQAYgrgNgvQgNgtgpgZg");
	this.shape.setTransform(0,0,2.125,2.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhHDKQgsgYgOgxQghACgfgRQgsgYgOgwQgOguAZgsQARggAhgRQAfgQAkADQACgXAMgUQAYgsAwgOQAugOAsAYQAXANAOATQAaACAVAMQAjATARAkQAQAjgHAmQApAZANAtQANAvgYArQgYAsgwAOQgwAOgsgYIgDgCQgcAegpAHQgJABgKAAQgeAAgbgPg");
	this.shape_1.setTransform(0,0,2.125,2.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-48,116.9,98.7);


(lib1.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#85d100").ss(6,1,1).p("AGchXQgBhTg9g5Qg8g7hUABQgZAAgfAJQgWg4g0gjQgzgkg9ABQhVADg5A7Qg7A8ACBUIAAABQhMAJgyA6QgzA6ABBMQABA2AcAvQAbAtAvAZIgBAcQABBTA7A7QA8A6BUgCQA3AAAvgdQAtgcAZgvQAmATAzAAQBUgBA5g8QA7g7gChUQAAgbgHgZQBBg9AAhYg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj5FbQg7g7gBhTIABgcQgvgZgbgtQgcgvgBg2QgBhMAzg6QAyg6BMgJIAAgBQgChUA7g8QA5g7BVgDQA9gBAzAkQA0AjAWA4QAfgJAZAAQBUgBA8A7QA9A5ABBTQAABYhBA9QAHAZAAAbQACBUg7A7Qg5A8hUABQgzAAgmgTQgZAvgtAcQgvAdg3AAIgHAAQhPAAg6g4g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.2,-43.3,88.5,86.7);


(lib1.fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85d100").s().p("AgrAsQgFgFAAgIQAAgHAFgFIA+g+QAFgFAHAAQAIAAAFAFQAFAFAAAIQAAAHgFAGIg+A9QgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(59.7,44.1,2.548,2.548);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85d100").s().p("AhMBNQgFgFAAgIQAAgHAFgGIB/h/QAGgFAHAAQAHAAAFAFQAGAGAAAHQAAAIgGAFIh/B/QgFAFgHAAQgIAAgFgFg");
	this.shape_1.setTransform(51.4,52.4,2.548,2.548);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85d100").s().p("AhiBkQgGgFAAgIQAAgIAGgFICsisQAFgGAIAAQAHAAAFAGQAGAFAAAHQAAAIgGAFIisCtQgGAEgHAAQgIAAgEgEg");
	this.shape_2.setTransform(30.1,42.7,2.548,2.548);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(7));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#85d100").s().p("AhKBKQgFgFAAgIQAAgGAFgGIB7h7QAFgEAIAAQAHAAAFAEQAGAGAAAIQAAAHgGAFIh6B6QgGAGgHgBQgHABgGgGg");
	this.shape_3.setTransform(20.5,20.4,2.548,2.548);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#85d100").s().p("AgsAsQgFgFAAgHQAAgHAFgGIA/g/QAGgFAHAAQAIAAAFAFQAFAGAAAHQAAAIgFAFIg/A+QgGAGgHAAQgIAAgFgGg");
	this.shape_4.setTransform(28,12.8,2.548,2.548);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.4,69.5);


(lib1.rocket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.Tween10("synched",0);
	this.instance.setTransform(148.7,146.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({rotation:0.3},0).wait(2).to({rotation:0},0).wait(2).to({rotation:-0.3},0).wait(2).to({rotation:0},0).wait(1));

	// Layer 2
	this.instance_1 = new lib1.fire();
	this.instance_1.setTransform(54,241.4,1,1,0,0,0,36.2,36.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297.4,293.7);


(lib1.cloud4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.Tween8("synched",0);
	this.instance.setTransform(77.7,-94.2);

	this.instance_1 = new lib1.Tween9("synched",0);
	this.instance_1.setTransform(77.7,752.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:752.9},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-154.5,164.4,120.6);


(lib1.cloud3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.Tween5("synched",0);
	this.instance.setTransform(94.5,-111.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:640},11).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-183.5,196,144.5);


(lib1.cloud2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// Layer 1
	this.instance = new lib1.Tween3("synched",0);
	this.instance.setTransform(54.7,46.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:650.4},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-1.7,116.9,98.4);


(lib1.cloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_71 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// Layer 1
	this.instance = new lib1.Tween1("synched",0);
	this.instance.setTransform(41.2,40.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:732.7},71).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,88.5,86.7);


// stage content:


(lib1.nosrocket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.cloud4();
	this.instance.setTransform(360.7,69.8,0.843,0.843,0,0,0,77.8,55.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// cloud 3
	this.cloud3 = new lib1.cloud3();
	this.cloud3.setTransform(675.4,33.2);

	this.timeline.addTween(cjs.Tween.get(this.cloud3).wait(1));

	// cloud 2
	this.instance_1 = new lib1.cloud2();
	this.instance_1.setTransform(176.2,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// rocket
	this.instance_2 = new lib1.rocket();
	this.instance_2.setTransform(505.9,271.3,1,1,0,0,0,148.7,146.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// cloud 1
	this.instance_3 = new lib1.cloud1();
	this.instance_3.setTransform(546.5,-43.6,1,1,0,0,0,41.2,40.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(648.9,149.7,694,568.5);

})(lib1 = lib1||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib1, images, createjs, ss;

/*----Animación cerebro/brain--------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function (lib2, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib2.webFontTxtFilters = {};

// library properties:
lib2.properties = {
	width: 950,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib2.ssMetadata = [];


lib2.webfontAvailable = function(family) {
	lib2.properties.webfonts[family] = true;
	var txtFilters = lib2.webFontTxtFilters && lib2.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib2.gearmaingraph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79b100").s().p("AhBF1QgPAAgKgLQgKgKAAgPIAAgjIgogRIgaAaQgJAKgQgBQgPABgKgKIhdheQgLgLABgOQAAgLAEgHIAGgHIAYgaIgRgnIgBgBIghAAQgPAAgLgKQgKgKAAgPIAAiDQAAgPAKgKQALgKAPAAIAfAAIASgrIgWgWQgLgKABgPQgBgOALgLIBdheQAKgKAPABQAQgBAJAKIAVAVIABAAIApgSQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIAAgcQAAgPAKgLQAKgKAPAAICDAAQAPAAAKAKQAKALAAAPIAAAdIAsATIAVgVQAKgKAPABQAPgBAKAKIBfBeQAKALgBAOQABAPgKAKIgXAVIAAADIAQAnIABACIAgAAQAKAAAHAEIAIAGQALAKAAAPIAACDQAAAPgLAKQgDAEgFACQgHAEgKAAIghAAIgSAoIAZAZQAKAKgBAPQABAPgKAKIhfBfQgKAKgPgBQgPABgKgKIgZgaIgBAAIglAPIgCACIAAAjQAAAPgKAKQgKALgPAAg");
	this.shape.setTransform(37.3,37.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.6,74.6);


(lib2.gear3graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnEAIAAgRQAAgNgJgLQgHgKgNgEIgYgKQgLgGgOADQgMABgKAJIgLALIg7g6IALgLQAKgIACgOQABgMgGgMIgKgZQgLgcgbAAIgQAAIAAhRIAOAAQAMAAAMgHQAKgIAEgNIALgaQANgZgUgWIgKgJIA7g6IAIAIQAOALAPAAQALAAAFgDIAegNQAbgKABgbIAAgNIBPAAIAAANQAAAMAIAMQAJAKAMADIAKAEIARAIQALAFANgCQANgBAJgJIAJgJIA7A7IgJAJQgJAJgCANQgCAMAFAKIAKAeQAGAMAKAIQAKAHAMAAIAPAAIAABRIgQAAQgLAAgLAIQgLAIgFALIgJAaQgGAMAAAMQADAOAJAIIALALIg7A7IgLgMQgMgMgRAAQgKAAgGAEIgbALQgLAEgJAKQgIALAAANIAAARgAhOhOQghAhAAAtQAAAuAhAhQAhAhAtAAQAuAAAhghQAighgBguQABgtgighQghghguAAQgtAAghAhg");
	this.shape.setTransform(30.2,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#79b100").s().p("AgyEuQgPAAgLgLQgKgKAAgPIAAgXIgXgJIgQAQQgKALgPAAQgQAAgJgLIhKhKQgLgKABgPQgBgPALgKIAOgPIgKgYIgUAAQgPAAgKgKQgLgKAAgPIAAhnQAAgPALgKQAKgKAPAAIATAAIAKgZIgNgOQgLgKABgPQgBgPALgKIBKhKQAJgKAQAAQAPAAAKAKIANANIAagLIAAgSQAAgPAKgKQALgLAPAAIBmAAQAPAAAKALQAKAKAAAPIAAASIAaAKIANgMQAKgKAPAAQAPAAAKAKIBKBKQALAKAAAPQAAAPgLAKIgOAOIAKAZIAUAAQAPAAAKAKQALAKgBAPIAABnQABAPgLAKQgKAKgPAAIgUAAIgKAYIAOAPQALAKAAAPQAAAPgLAKIhKBKQgKALgPAAQgPAAgKgLIgQgQIgXAJIAAAXQAAAPgKAKQgKALgPAAgAhcC/IAYAKQANAEAHAKQAJALAAANIAAARIBPAAIAAgRQAAgNAIgLQAJgKALgEIAbgLQAGgEAKAAQARAAAMAMIALAMIA7g7IgLgLQgJgIgDgOQAAgMAGgMIAJgaQAFgLALgIQALgIALAAIAQAAIAAhRIgPAAQgMAAgKgHQgKgIgGgMIgKgeQgFgKACgMQACgNAJgJIAJgJIg7g7IgJAJQgJAJgNABQgNACgLgFIgRgIIgKgEQgMgDgJgKQgIgMAAgMIAAgNIhPAAIAAANQgBAbgbAKIgeANQgFADgLAAQgPAAgOgLIgIgIIg7A6IAKAJQAUAWgNAZIgLAaQgEANgKAIQgMAHgMAAIgOAAIAABRIAQAAQAbAAALAcIAKAZQAGAMgBAMQgCAOgKAIIgLALIA7A6IALgLQAKgJAMgBIAIgBQAJAAAIAEgAhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAiAhgBAtQABAugiAhQghAhguAAQgtAAghghg");
	this.shape_1.setTransform(30.2,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,60.5);


(lib2.gear2graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrEwIAAgPQgBgoglgKIgdgMQgjgTgdAdIgKAKIg+hAIAKgIQAfgdgXgjIgLgfQgLgjgqgBIgLAAIAAhYIAKAAQApAAALgmIALgfQAVgjgdgbIgIgIIA+g/IAHAHQAMAMATABQATAFAMgHIAkgQQAjgOABgmIAAgHIBYAAIAAAHQgBArAlAJIANAFIAVAKQAOAIARgFQATgBALgMIAGgHIBAA/IgIAIQgaAaAOAhIAPAkQAOAkAlAAIANAAIAABYIgPAAQgoABgJAjIgPAfQgRAjAbAdIAKAIIhABAIgJgKQgRgQgVgBIgXAEIgfAPQglAKABAoIAAAPgAhjhkQgrAqABA6QgBA7ArAqQApApA6AAQA6AAAqgpQArgqAAg7QAAg6grgqQgqgpg6AAQg6AAgpApg");
	this.shape.setTransform(37.2,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#79b100").s().p("Ag9F0QgXAAgNgPQgOgNgBgVIAAgXIgIgDIgLgFIgTAQQgNAPgVAAQgTAAgPgPIhahaQgOgPABgTQgBgRAOgRIAQgRIgKgVIgVAAQgVgBgNgOQgPgNAAgVIAAh+QAAgUAPgOQANgOAVABIAUAAIAKgZIgPgNQgOgPABgTQgBgVAOgOIBahaQAPgNATAAQAVAAANANIAPAPIAXgKIAAgVQABgTAOgOQAPgOAVgBIB8AAQATABAPAOQAOAOgBATIAAASIAIAFIASAFIAMgMQAPgNATAAQAXAAANANIBaBaQAPAOAAAVQAAATgPAPIgQAPIAKAXIAVAAQATgBARAOQAOAOgBAUIAAB+QABAVgOANQgRAOgTABIgXAAIgIAVIAQARQAPAPAAATQAAATgPAPIhaBaQgNAOgXgBQgTABgPgOIgPgQIgXAIIAAAXQABAWgOAMQgNAPgVAAgAhuDkIAdAMQAlAKABAoIAAAPIBYAAIAAgPQgBgoAlgKIAfgPIAXgEQAVABARAQIAJAKIBAhAIgKgIQgbgdARgjIAPgfQAJgjAogBIAPAAIAAhYIgNAAQglAAgOgkIgPgkQgOghAagaIAIgIIhAg/IgGAHQgLAMgTABQgRAFgOgIIgVgKIgNgFQglgJABgrIAAgHIhYAAIAAAHQgBAmgjAOIgkAQQgMAHgTgFQgTgBgMgMIgHgHIg+A/IAIAIQAdAbgVAjIgLAfQgLAmgpAAIgKAAIAABYIALAAQAqABALAjIALAfQAXAjgfAdIgKAIIA+BAIAKgKQASgSAUAAQAMAAAOAIgAhjBmQgrgqABg8QgBg5ArgqQApgpA6AAQA6AAArApQAqAqAAA5QAAA8gqAqQgrApg6AAQg6AAgpgpg");
	this.shape_1.setTransform(37.2,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,74.6,74.4);


(lib2.gear1graph = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8FLIAAgeQAAgNgIgKQgJgLgMgFIgOgFIgSgIQgMgGgNADQgOABgIAKIgXAVIhWhXIAVgVQAIgJACgNQADgOgGgMIgPggQgDgMgMgJQgLgIgNAAIgbAAIAAh5IAZAAQANAAALgIQAMgJADgMIAPgjQAFgLgBgOQgCgOgJgKIgTgRIBWhXIASAQQALANASAAQALAAAGgDIAngQQAMgFAIgKQAIgNAAgMIAAgXIB5AAIAAAXQAAANAIAMQAJAKAMAFIAkAOQALAGAOgBQAOgCAJgKIARgRIBWBWIABABIgBABIAAgCIAAACIgSAQQgJAKgCANQgBAOAEAKIAPAmQAEAMAMAIQALAIAMAAIAaAAIAAB5IgbAAQgNAAgLAIQgLAIgEAMIgPAiQgGAMADANQABANAJAJIAVAVIhXBXIgVgVQgOgMgQAAQgJAAgHADIgjAOQgMAFgIALQgIALAAANIAAAdgAhdhdQgnAoAAA1QAAA2AnAoQAoAnA1AAQA2AAAognQAngogBg2QABg1gngoQgogng2AAQg1AAgoAng");
	this.shape.setTransform(37.3,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#79b100").s().p("AhBF1QgPAAgKgLQgKgKAAgPIAAgjIgogRIgaAaQgJAKgQgBQgPABgKgKIhdheQgLgLABgOQAAgLAEgHIAGgHIAYgaIgRgnIgBgBIghAAQgPAAgLgKQgKgKAAgPIAAiDQAAgPAKgKQALgKAPAAIAfAAIASgrIgWgWQgLgKABgPQgBgOALgLIBdheQAKgKAPABQAQgBAJAKIAVAVIABAAIApgSQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIAAgcQAAgPAKgLQAKgKAPAAICDAAQAPAAAKAKQAKALAAAPIAAAdIAsATIAVgVQAKgKAPABQAPgBAKAKIA9A9IAiAhQAKALgBAOQABAPgKAKIgQAPIgSAAIAAgnIABgBIgBgBIAAg5IAAA5IhWhWIgRARQgJAKgOACQgOABgLgGIgkgOQgMgFgJgKQgIgMAAgNIAAgXIh5AAIAAAXQAAAMgIANQgIAKgMAFIgnAQQgGADgLAAQgSAAgLgNIgSgQIhWBXIATARQAJAKACAOQABAOgFALIgPAjQgDAMgMAJQgLAIgNAAIgZAAIAAB5IAbAAQANAAALAIQAMAJADAMIAPAgQAGAMgDAOQgCANgIAJIgVAVIBWBXIAXgVQAIgKAOgBQANgDAMAGIASAIIAOAFQAMAFAJALQAIAKAAANIAAAeIB5AAIAAgdQAAgNAIgLQAIgLAMgFIAjgOQAHgDAJAAQAQAAAOAMIAVAVIBXhXIgVgVQgJgJgBgNQgDgNAGgMIAPgiQAEgMALgIQALgIANAAIAbAAIAAh5IgaAAQgMAAgLgIQgMgIgEgMIgPgmQgEgKABgOQACgNAJgKIASgQIAAAnIASAAIgHAGIAAADIAQAnIABACIAgAAQAKAAAHAEIAIAGQALAKAAAPIAACDQAAAPgLAKQgDAEgFACQgHAEgKAAIghAAIgSAoIAZAZQAKAKgBAPQABAPgKAKIhfBfQgKAKgPgBQgPABgKgKIgZgaIgBAAIglAPIgCACIAAAjQAAAPgKAKQgKALgPAAgAhdBeQgngoAAg2QAAg1AngoQAognA1AAQA2AAAoAnQAnAogBA1QABA2gnAoQgoAng2AAQg1AAgogngAEVi9g");
	this.shape_1.setTransform(37.3,37.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.6,74.6);


(lib2.exclamation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAaQgLgLAAgPQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape.setTransform(4.2,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWCFQgJgJAAgOIgKjRQAAgRAMgNQANgMAQAAQAQAAANAMQAMANAAARIgJDRQAAAOgKAJQgIAJgOAAQgMAAgKgJg");
	this.shape_1.setTransform(4.2,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.4,39.1);


(lib2.germainsign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,subover:24,over:47});

	// timeline functions:
	this.frame_0 = function() {
		stage2.canvas.addEventListener("mouseover", over.bind(this));
		function over()
		{
		    this.gotoAndPlay("over");
		}

		stage2.canvas.addEventListener("mouseout", out.bind(this));
		function out()
		{
		    this.gotoAndPlay("out");
		}
	}
	this.frame_46 = function() {
		this.gotoAndPlay("subover")
	}
	this.frame_58 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(46).call(this.frame_46).wait(12).call(this.frame_58).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAaQgLgLAAgPQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape.setTransform(4.2,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWCFQgJgJAAgOIgKjRQAAgRAMgNQANgMAQAAQAQAAANAMQAMANAAARIgJDRQAAAOgKAJQgIAJgOAAQgMAAgKgJg");
	this.shape_1.setTransform(4.2,14.3);

	this.instance = new lib2.exclamation("synched",0);
	this.instance.setTransform(4.2,19.6,1,1,0,0,0,4.2,19.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:19.5,scaleX:1.21,scaleY:1.21,x:4.3},11).to({regY:19.6,scaleX:1,scaleY:1,x:4.2},11).wait(1).to({startPosition:0},0).to({regY:19.5,scaleX:1.21,scaleY:1.21,x:4.3},11).to({regY:19.6,scaleX:1,scaleY:1,x:4.2},11).wait(1).to({regY:19.5,scaleX:1.21,scaleY:1.21,x:4.3},0).to({regY:19.6,scaleX:1,scaleY:1,x:4.2},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.4,39.1);


(lib2.gearmain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":1,"subover":13,"over":25});

	// timeline functions:
	this.frame_0 = function() {
		stage2.canvas.style.cursor = "pointer";

		stage2.canvas.addEventListener("mouseover", over.bind(this));
		function over()
		{
		    this.gotoAndPlay("over");
		}

		stage2.canvas.addEventListener("mouseout", out.bind(this));
		function out()
		{
		    this.gotoAndPlay("out");
		}
	}
	this.frame_24 = function() {
		this.gotoAndPlay("subover")
	}
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(12).call(this.frame_36).wait(1));

	// Layer 1
	this.instance = new lib2.gearmaingraph("synched",0);
	this.instance.setTransform(37.3,37.3,1,1,0,0,0,37.3,37.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({rotation:37.2},0).wait(1).to({rotation:73.5},0).wait(1).to({rotation:108.9},0).wait(1).to({rotation:143.4},0).wait(1).to({rotation:177},0).wait(1).to({rotation:209.7},0).wait(1).to({rotation:241.6},0).wait(1).to({rotation:272.5},0).wait(1).to({rotation:302.6,x:37.4},0).wait(1).to({rotation:331.7,x:37.3},0).wait(1).to({rotation:360},0).to({_off:true},1).wait(12).to({_off:false},0).wait(1).to({rotation:388.2},0).wait(1).to({rotation:417.4},0).wait(1).to({rotation:447.4},0).wait(1).to({rotation:478.4},0).wait(1).to({rotation:510.2},0).wait(1).to({rotation:542.9},0).wait(1).to({rotation:576.6},0).wait(1).to({rotation:611.1},0).wait(1).to({rotation:646.5},0).wait(1).to({rotation:682.8},0).wait(1).to({rotation:720},0).wait(1));

	// Layer 3
	this.instance_1 = new lib2.gearmaingraph("synched",0);
	this.instance_1.setTransform(37.3,37.3,1,1,0,0,0,37.3,37.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({rotation:32.7,y:37.4},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:98.2,y:37.3},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:294.5,x:37.4},0).wait(1).to({rotation:327.3},0).wait(1).to({rotation:360,x:37.3},0).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.6,74.6);


(lib2.gear5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":1,"subover":13,"over":25});

	// timeline functions:
	this.frame_0 = function() {
		stage2.canvas.style.cursor = "pointer";

		stage2.canvas.addEventListener("mouseover", over.bind(this));
		function over()
		{
		    this.gotoAndPlay("over");
		}

		stage2.canvas.addEventListener("mouseout", out.bind(this));
		function out()
		{
		    this.gotoAndPlay("out");
		}
	}
	this.frame_24 = function() {
		this.gotoAndPlay("subover")
	}
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(12).call(this.frame_36).wait(1));

	// Layer 1
	this.instance = new lib2.gear3graph("synched",0);
	this.instance.setTransform(30.2,30.2,1,1,0,0,0,30.2,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({rotation:40.2},0).wait(1).to({rotation:78.8,y:30.3},0).wait(1).to({rotation:116,y:30.2},0).wait(1).to({rotation:151.7},0).wait(1).to({rotation:185.9},0).wait(1).to({rotation:218.7},0).wait(1).to({rotation:249.9},0).wait(1).to({rotation:279.7},0).wait(1).to({rotation:307.9},0).wait(1).to({rotation:334.7},0).wait(1).to({rotation:360},0).to({_off:true},1).wait(12).to({_off:false},0).wait(1).to({rotation:388.2,y:30.3},0).wait(1).to({rotation:417.4,y:30.2},0).wait(1).to({rotation:447.4},0).wait(1).to({rotation:478.4},0).wait(1).to({rotation:510.2},0).wait(1).to({rotation:542.9},0).wait(1).to({rotation:576.6},0).wait(1).to({rotation:611.1},0).wait(1).to({rotation:646.5},0).wait(1).to({rotation:682.8},0).wait(1).to({rotation:720},0).wait(1));

	// Layer 3
	this.instance_1 = new lib2.gear3graph("synched",0);
	this.instance_1.setTransform(30.2,30.2,1,1,0,0,0,30.2,30.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({rotation:32.7,y:30.3},0).wait(1).to({rotation:65.5,y:30.2},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:294.5},0).wait(1).to({rotation:327.3,x:30.3},0).wait(1).to({rotation:360,x:30.2},0).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,60.5);


(lib2.gear4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":1,"subover":13,"over":25});

	// timeline functions:
	this.frame_0 = function() {
		stage2.canvas.style.cursor = "pointer";

		stage2.canvas.addEventListener("mouseover", over.bind(this));
		function over()
		{
		    this.gotoAndPlay("over");
		}

		stage2.canvas.addEventListener("mouseout", out.bind(this));
		function out()
		{
		    this.gotoAndPlay("out");
		}
	}
	this.frame_24 = function() {
		this.gotoAndPlay("subover")
	}
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(12).call(this.frame_36).wait(1));

	// Layer 1
	this.instance = new lib2.gear3graph("synched",0);
	this.instance.setTransform(30.2,30.2,1,1,0,0,0,30.2,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({rotation:36.9},0).wait(1).to({rotation:72.5,y:30.3},0).wait(1).to({rotation:106.9,y:30.2},0).wait(1).to({rotation:140},0).wait(1).to({rotation:171.9},0).wait(1).to({rotation:202.5},0).wait(1).to({rotation:231.9},0).wait(1).to({rotation:260},0).wait(1).to({rotation:286.9},0).wait(1).to({rotation:312.5},0).wait(1).to({rotation:336.9},0).wait(1).to({rotation:360},0).to({_off:true},1).wait(11).to({_off:false},0).wait(1).to({rotation:385.3},0).wait(1).to({rotation:412,y:30.3},0).wait(1).to({rotation:440.3,y:30.2},0).wait(1).to({rotation:470.1},0).wait(1).to({rotation:501.3},0).wait(1).to({rotation:534},0).wait(1).to({rotation:568.2},0).wait(1).to({rotation:603.9},0).wait(1).to({rotation:641.1,x:30.3},0).wait(1).to({rotation:679.8,x:30.2},0).wait(1).to({rotation:720},0).wait(1));

	// Layer 3
	this.instance_1 = new lib2.gear3graph("synched",0);
	this.instance_1.setTransform(30.2,30.2,1,1,0,0,0,30.2,30.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({rotation:32.7,y:30.3},0).wait(1).to({rotation:65.5,y:30.2},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:294.5},0).wait(1).to({rotation:327.3,x:30.3},0).wait(1).to({rotation:360,x:30.2},0).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,60.5);


(lib2.gear3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":1,"subover":13,"over":25});

	// timeline functions:
	this.frame_0 = function() {
		stage2.canvas.style.cursor = "pointer";

		stage2.canvas.addEventListener("mouseover", over.bind(this));
		function over()
		{
		    this.gotoAndPlay("over");
		}

		stage2.canvas.addEventListener("mouseout", out.bind(this));
		function out()
		{
		    this.gotoAndPlay("out");
		}
	}
	this.frame_24 = function() {
		this.gotoAndPlay("subover")
	}
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(12).call(this.frame_36).wait(1));

	// Layer 1
	this.instance = new lib2.gear3graph("synched",0);
	this.instance.setTransform(30.2,30.2,1,1,0,0,0,30.2,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({rotation:34.1,y:30.3},0).wait(1).to({rotation:67.5,y:30.2},0).wait(1).to({rotation:100.1},0).wait(1).to({rotation:132},0).wait(1).to({rotation:163.1},0).wait(1).to({rotation:193.5},0).wait(1).to({rotation:223.1},0).wait(1).to({rotation:252},0).wait(1).to({rotation:280.1,x:30.3},0).wait(1).to({rotation:307.5},0).wait(1).to({rotation:334.1,x:30.2},0).wait(1).to({rotation:360},0).to({_off:true},1).wait(11).to({_off:false},0).wait(1).to({rotation:388.2,y:30.3},0).wait(1).to({rotation:417.4,y:30.2},0).wait(1).to({rotation:447.4},0).wait(1).to({rotation:478.4},0).wait(1).to({rotation:510.2},0).wait(1).to({rotation:542.9},0).wait(1).to({rotation:576.6},0).wait(1).to({rotation:611.1},0).wait(1).to({rotation:646.5},0).wait(1).to({rotation:682.8},0).wait(1).to({rotation:720},0).wait(1));

	// Layer 3
	this.instance_1 = new lib2.gear3graph("synched",0);
	this.instance_1.setTransform(30.2,30.2,1,1,0,0,0,30.2,30.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({rotation:32.7,y:30.3},0).wait(1).to({rotation:65.5,y:30.2},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:294.5},0).wait(1).to({rotation:327.3,x:30.3},0).wait(1).to({rotation:360,x:30.2},0).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,60.5);


(lib2.gear2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":1,"subover":13,"over":25});

	// timeline functions:
	this.frame_0 = function() {
		stage2.canvas.style.cursor = "pointer";

		stage2.canvas.addEventListener("mouseover", over.bind(this));
		function over()
		{
		    this.gotoAndPlay("over");
		}

		stage2.canvas.addEventListener("mouseout", out.bind(this));
		function out()
		{
		    this.gotoAndPlay("out");
		}
	}
	this.frame_24 = function() {
		this.gotoAndPlay("subover")
	}
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(12).call(this.frame_36).wait(1));

	// Layer 3
	this.instance = new lib2.gear2graph("synched",0);
	this.instance.setTransform(37.3,37.3,1,1,180,0,0,37.1,37.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(1).to({regY:37.2,rotation:212.7,y:37.2},0).wait(1).to({rotation:245.5,x:37.4},0).wait(1).to({rotation:278.2,y:37.3},0).wait(1).to({rotation:310.9},0).wait(1).to({rotation:343.6},0).wait(1).to({rotation:376.4,x:37.3,y:37.4},0).wait(1).to({rotation:409.1,y:37.3},0).wait(1).to({rotation:441.8},0).wait(1).to({rotation:474.5,y:37.2},0).wait(1).to({rotation:507.3},0).wait(1).to({rotation:540},0).to({_off:true},1).wait(12));

	// Layer 1
	this.instance_1 = new lib2.gear2graph("synched",0);
	this.instance_1.setTransform(37.3,37.3,1,1,180,0,0,37.3,37.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:36.8,regY:36.8},0).wait(1).to({regX:37.1,regY:37.2,rotation:205.9,x:37.2,y:36.7},0).wait(1).to({rotation:232.5,x:37.4,y:36.8},0).wait(1).to({rotation:259.9,x:37.6,y:36.9},0).wait(1).to({rotation:288,x:37.8,y:37},0).wait(1).to({rotation:316.9,x:37.9,y:37.3},0).wait(1).to({rotation:346.5,x:37.8,y:37.5},0).wait(1).to({rotation:376.9,x:37.5,y:37.8},0).wait(1).to({rotation:408,x:37.2},0).wait(1).to({rotation:439.9,x:37,y:37.7},0).wait(1).to({rotation:472.5,x:36.8,y:37.4},0).wait(1).to({rotation:505.9,y:37.1},0).wait(1).to({rotation:540,x:37,y:36.9},0).to({_off:true},1).wait(10).to({_off:false,regX:36.8,regY:36.9,x:37.3,y:37.2},0).wait(1).to({regX:37.1,regY:37.2,rotation:574.1,y:36.8},0).wait(1).to({rotation:607.5,x:37.5,y:36.9},0).wait(1).to({rotation:640.1,x:37.7,y:37.1},0).wait(1).to({rotation:672,x:37.8,y:37.3},0).wait(1).to({rotation:703.1,x:37.7,y:37.5},0).wait(1).to({rotation:733.5,x:37.5,y:37.7},0).wait(1).to({rotation:763.1,x:37.3,y:37.8},0).wait(1).to({rotation:792,x:37,y:37.7},0).wait(1).to({rotation:820.1,x:36.9,y:37.4},0).wait(1).to({rotation:847.5,x:36.8,y:37.3},0).wait(1).to({rotation:874.1,y:37.1},0).wait(1).to({rotation:900,x:37,y:36.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.2,74.6,74.4);


(lib2.gear1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":1,"subover":12,"over":24});

	// timeline functions:
	this.frame_0 = function() {
		stage2.canvas.style.cursor = "pointer";

		stage2.canvas.addEventListener("mouseover", over.bind(this));
		function over()
		{
		    this.gotoAndPlay("over");
		}

		stage2.canvas.addEventListener("mouseout", out.bind(this));
		function out()
		{
		    this.gotoAndPlay("out");
		}
	}
	this.frame_23 = function() {
		this.gotoAndPlay("subover")
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(12).call(this.frame_35).wait(1));

	// Layer 5
	this.instance = new lib2.gear1graph("synched",0);
	this.instance.setTransform(37.3,37.3,1,1,0,0,0,37.3,37.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({rotation:-37.2},0).wait(1).to({rotation:-73.5},0).wait(1).to({rotation:-108.9},0).wait(1).to({rotation:-143.4},0).wait(1).to({rotation:-177},0).wait(1).to({rotation:-209.7},0).wait(1).to({rotation:-241.6},0).wait(1).to({rotation:-272.5},0).wait(1).to({rotation:-302.6,y:37.4},0).wait(1).to({rotation:-331.7,y:37.3},0).wait(1).to({rotation:-360},0).to({_off:true},1).wait(11).to({_off:false},0).wait(1).to({rotation:-385.3},0).wait(1).to({rotation:-412},0).wait(1).to({rotation:-440.3,x:37.4},0).wait(1).to({rotation:-470.1,x:37.3},0).wait(1).to({rotation:-501.3},0).wait(1).to({rotation:-534},0).wait(1).to({rotation:-568.2},0).wait(1).to({rotation:-603.9},0).wait(1).to({rotation:-641.1,y:37.4},0).wait(1).to({rotation:-679.8,y:37.3},0).wait(1).to({rotation:-720},0).wait(1));

	// Layer 6
	this.instance_1 = new lib2.gear1graph("synched",0);
	this.instance_1.setTransform(37.3,37.3,1,1,0,0,0,37.3,37.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(1).to({rotation:-32.7,x:37.4},0).wait(1).to({rotation:-65.5},0).wait(1).to({rotation:-98.2,x:37.3},0).wait(1).to({rotation:-130.9},0).wait(1).to({rotation:-163.6},0).wait(1).to({rotation:-196.4},0).wait(1).to({rotation:-229.1},0).wait(1).to({rotation:-261.8},0).wait(1).to({rotation:-294.5,y:37.4},0).wait(1).to({rotation:-327.3},0).wait(1).to({rotation:-360,y:37.3},0).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.6,74.6);


// stage2 content:



(lib2.nosbrain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gears
	this.instance = new lib2.germainsign();
	this.instance.setTransform(485.3,272.9,1.483,1.483,0,0,0,4.3,19.6);

	this.instance_1 = new lib2.gearmain();
	this.instance_1.setTransform(485.3,272.9,1.433,1.433,0,0,0,37.4,37.4);

	this.instance_2 = new lib2.gear5();
	this.instance_2.setTransform(563.7,277.8,0.657,0.657,0,0,0,30.4,30.4);

	this.instance_3 = new lib2.gear4();
	this.instance_3.setTransform(563.3,330.3,0.941,0.941,0,0,0,30.4,30.2);

	this.instance_4 = new lib2.gear3();
	this.instance_4.setTransform(508,370.1,1.168,1.168,0,0,0,30.3,30.2);

	this.gear2 = new lib2.gear2();
	this.gear2.setTransform(419,329,0.701,0.701);

	this.instance_5 = new lib2.gear1();
	this.instance_5.setTransform(344.7,265.8,1.168,1.168);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79b100").s().p("AgVAWQgJgJAAgNQAAgLAJgKQAKgJALAAQANAAAJAJQAJAKAAALQAAANgJAJQgKAJgMAAQgMAAgJgJg");
	this.shape.setTransform(563.1,331.1,2.662,2.662);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_5},{t:this.gear2},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// brain
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#79b100").s().p("AC+IEQhQh5h4goQgngMgmgDIgfgBIgCAAQg/AAg4geQg3gfggg2IgUAAQiKAAhihhQhhhjgBiIQAAhHAfhDQAdhBA3gwQAugrBhgpQDAhPEUAAQAYAAAhADQBBAGA/AOQDFAsB0B0QCJCHAADXIAAAOQgBBDgqA1QgqA1hBAOQgGBQg6A2Qg7A3hQAAQgaAAgagHQAdA5AYAgQAEAFgBAIQgBAGgGAFQgFAEgHgBQgHgBgEgFQgYgggbg1QgTgjgGgOQgFgLAIgJQAJgJALAGQAmAUApAAQBGAAAygxQAxgyAAhGQAAgGAFgFQADgFAHgBQA5gIAngtQAngtAAg6IAAgOQAAjJh/h+QhthsjBgrQg8gNg9gGIgzgCQkKAAi6BNQheAmgqAnQgyArgbA8QgaA7gBBAQAAB7BZBXQBXBZB8AAIAeAAQAKAAAEAIQAcAxAwAdQAxAcA4ABQA2gGBGAYQCBAsBWCBQAFAGgCAGQgBAHgGAEQgEADgFAAQgJAAgGgHg");
	this.shape_1.setTransform(475,329.7,2.661,2.661);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWOEQhsgihpgHIhVAAQinAAiOhVQiKhThOiKIhOAAQldAAj2j4Qj3j3AAlbQAAi6BOioQBMiiCIh2QBqhpD+hrQH7jTLbAAIEBAUQEzApEDBqQM0FVAANjIAAAmQAACvhyCDQhxCBiqAaQAADMiRCRQiRCSjNAAQh5AAhvg6IA/B8QBKCNA9BTIknAiQjilSlVhtg");
	this.shape_2.setTransform(475,329.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(768.8,460.4,362.4,278.6);

})(lib2 = lib2||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib2, images, createjs, ss;

/*----Animación logos--------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function (lib3, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib3.webFontTxtFilters = {};

// lib3rary properties:
lib3.properties = {
	width: 950,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib3.ssMetadata = [];


lib3.webfontAvailable = function(family) {
	lib3.properties.webfonts[family] = true;
	var txtFilters = lib3.webFontTxtFilters && lib3.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib3.lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,subover:24,over:48});

	// timeline functions:
	this.frame_0 = function() {
		stage3.canvas.addEventListener("mouseover", over.bind(this));
		function over()
		{
		    this.gotoAndPlay("over");
		}

		stage3.canvas.addEventListener("mouseout", out.bind(this));
		function out()
		{
		    this.gotoAndPlay("out");
		}
	}
	this.frame_47 = function() {
		this.gotoAndPlay("subover")
	}
	this.frame_61 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(47).call(this.frame_47).wait(14).call(this.frame_61).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6a9b00").s().p("AiuCwQgMgNAAgRQAAgRAMgMIEikkQAMgLASAAQARAAALALQANANAAARQAAARgNAMIkhEkQgNALgRAAQgQAAgNgLg");
	this.shape.setTransform(18.2,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6a9b00").s().p("AitCuQgLgMAAgRQAAgSALgMIEfkgQAMgMASAAQARAAAMAMQAMAMAAASQAAAQgMANIkeEgQgNALgRAAQgQAAgOgLg");
	this.shape_1.setTransform(18.4,18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6a9b00").s().p("AiqCsQgMgMAAgRQAAgSAMgMIEakcQAMgMASAAQARAAAMAMQAMAMAAARQAAARgMANIkbEcQgMAMgRAAQgQAAgNgMg");
	this.shape_2.setTransform(18.6,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6a9b00").s().p("AipCqQgLgMAAgRQAAgSALgMIEYkYQALgMASAAQARAAAMAMQAMAMAAARQAAARgMANIkXEYQgMAMgRAAQgQAAgOgMg");
	this.shape_3.setTransform(18.8,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6a9b00").s().p("AinCoQgMgMABgRQgBgSAMgLIEUkVQAMgMARAAQARAAAMAMQANAMAAARQAAARgNAMIkTEVQgNAMgRAAQgQAAgNgMg");
	this.shape_4.setTransform(19,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6a9b00").s().p("AilCnQgMgNABgRQgBgRAMgMIEQkSQAMgLARAAQARAAAMALQANANAAARQAAARgNAMIkPESQgNALgQAAQgRAAgNgLg");
	this.shape_5.setTransform(19.2,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6a9b00").s().p("AijClQgMgMAAgRQAAgTAMgLIEMkOQAMgMASAAQARAAALAMQANAMAAASQAAAQgNANIkLEOQgNALgRAAQgQAAgNgLg");
	this.shape_6.setTransform(19.3,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6a9b00").s().p("AihCjQgMgMAAgRQAAgSAMgMIEIkKQAMgMASAAQARAAALAMQANAMAAARQAAARgNANIkHEKQgOAMgQAAQgQAAgNgMg");
	this.shape_7.setTransform(19.5,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6a9b00").s().p("AigCiQgLgNAAgRQAAgSALgMIEFkGQAMgMASAAQARAAAMAMQAMAMAAARQAAARgMAMIkEEIQgOALgQAAQgQAAgOgLg");
	this.shape_8.setTransform(19.7,17.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6a9b00").s().p("AieCfQgLgMAAgRQAAgSALgLIECkDQALgMASAAQARAAAMAMQAMAMAAARQAAARgMAMIkBEDQgNAMgQAAQgQAAgOgMg");
	this.shape_9.setTransform(19.9,17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6a9b00").s().p("AicCeQgLgNAAgRQAAgSALgLID+kAQALgLASAAQARAAAMALQAMANAAARQAAARgMAMIj9EAQgNALgQAAQgQAAgOgLg");
	this.shape_10.setTransform(20.1,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6a9b00").s().p("AiaCcQgMgMAAgRQAAgTAMgLID6j8QAMgMARAAQARAAAMAMQANAMAAASQAAAQgNANIj5D8QgOALgPAAQgQAAgOgLg");
	this.shape_11.setTransform(20.3,16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6a9b00").s().p("AieCfQgLgMAAgRQAAgSALgMIEBkCQAMgMASAAQARAAAMAMQAMAMAAARQAAARgMANIkBECQgNAMgQAAQgQAAgOgMg");
	this.shape_12.setTransform(19.9,17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6a9b00").s().p("AifChQgMgNAAgQQAAgSAMgMIEEkGQAMgMARAAQARAAAMAMQANAMAAASQAAAQgNANIkDEGQgNAMgQgBQgQABgOgMg");
	this.shape_13.setTransform(19.8,17.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6a9b00").s().p("AihCjQgLgNAAgRQAAgSALgMIEIkIQALgMASAAQARAAAMAMQAMAMAAARQAAARgMAMIkHEKQgNALgQAAQgQAAgOgLg");
	this.shape_14.setTransform(19.6,17.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6a9b00").s().p("AijCkQgLgMAAgRQAAgSALgMIELkMQAMgMASAAQARAAAMAMQAMAMAAARQAAARgMANIkKEMQgOAMgQAAQgQAAgOgMg");
	this.shape_15.setTransform(19.4,17.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6a9b00").s().p("AikCmQgMgNAAgQQAAgSAMgMIEOkQQAMgMARAAQARAAAMAMQANAMAAASQAAAQgNANIkNEQQgNAMgQAAQgQAAgOgMg");
	this.shape_16.setTransform(19.3,17.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6a9b00").s().p("AimCnQgLgMAAgRQAAgSALgLIESkTQALgMASAAQARAAAMAMQAMAMAAARQAAARgMAMIkRETQgNAMgQAAQgQAAgOgMg");
	this.shape_17.setTransform(19.1,18);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6a9b00").s().p("AioCpQgLgMAAgRQAAgSALgMIEVkWQAMgMASAAQARAAAMAMQAMAMAAARQAAARgMANIkUEWQgOAMgQAAQgQAAgOgMg");
	this.shape_18.setTransform(18.9,18.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6a9b00").s().p("AipCrQgMgNAAgRQAAgRAMgMIEYkaQAMgLASAAQARAAALALQANANAAARQAAARgNAMIkXEaQgNALgRAAQgQAAgNgLg");
	this.shape_19.setTransform(18.7,18.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6a9b00").s().p("AirCsQgLgMAAgRQAAgRALgMIEckdQALgMASAAQARAAAMAMQAMAMAAARQAAARgMAMIkbEdQgNAMgQAAQgRAAgNgMg");
	this.shape_20.setTransform(18.6,18.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6a9b00").s().p("AibCeQgMgNAAgRQAAgSAMgMID8j+QAMgMASAAQARAAAMAMQAMAMAAARQAAARgMAMIj9EAQgNALgQAAQgPAAgOgLg");
	this.shape_21.setTransform(20.1,17);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6a9b00").s().p("AidCfQgLgMAAgSQAAgRALgMIEAkCQAMgMARAAQARAAAMAMQANAMAAASQAAAQgNANIj/ECQgNAMgRAAQgPAAgOgMg");
	this.shape_22.setTransform(20,17.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6a9b00").s().p("AifChQgLgNAAgRQAAgSALgMIEEkEQALgMASAAQARAAAMAMQAMAMAAARQAAARgMAMIkDEGQgNALgQAAQgQAAgOgLg");
	this.shape_23.setTransform(19.8,17.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6a9b00").s().p("AigCiQgMgNAAgRQAAgRAMgMIEGkIQAMgMASAAQARAAALAMQANAMAAASQAAAQgNANIkFEIQgNAMgRAAQgQAAgNgMg");
	this.shape_24.setTransform(19.6,17.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6a9b00").s().p("AiiCjQgLgMAAgRQAAgRALgMIEKkLQALgMASAAQARAAAMAMQAMAMAAARQAAARgMAMIkJELQgNAMgQAAQgQAAgOgMg");
	this.shape_25.setTransform(19.5,17.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6a9b00").s().p("AijClQgMgMAAgRQAAgSAMgMIEMkOQAMgMASAAQARAAALAMQANAMAAASQAAAQgNANIkLEOQgNALgRAAQgQAAgNgLg");
	this.shape_26.setTransform(19.3,17.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6a9b00").s().p("AilCnQgMgNABgRQgBgSAMgLIEQkSQAMgLARAAQARAAAMALQANANAAARQAAARgNAMIkPESQgNALgQAAQgRAAgNgLg");
	this.shape_27.setTransform(19.2,17.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6a9b00").s().p("AinCoQgLgMAAgRQAAgSALgMIETkUQAMgMASAAQARAAAMAMQAMAMAAARQAAARgMANIkTEUQgNAMgQAAQgQAAgOgMg");
	this.shape_28.setTransform(19,18);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6a9b00").s().p("AioCqQgMgNAAgRQAAgSAMgLIEWkYQAMgLARAAQARAAAMALQANANAAARQAAARgNAMIkVEYQgNALgQAAQgQAAgOgLg");
	this.shape_29.setTransform(18.9,18.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6a9b00").s().p("AipCrQgMgMAAgRQAAgSAMgMIEYkaQAMgMASAAQARAAAMAMQAMAMAAARQAAARgMANIkZEaQgNAMgQAAQgRAAgMgMg");
	this.shape_30.setTransform(18.7,18.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6a9b00").s().p("AirCtQgMgNAAgRQAAgRAMgMIEckeQAMgLASAAQARAAALALQANANAAARQAAARgNAMIkbEeQgNALgRAAQgQAAgNgLg");
	this.shape_31.setTransform(18.5,18.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6a9b00").s().p("AitCuQgLgMAAgRQAAgSALgMIEgkgQALgMASAAQARAAAMAMQAMAMAAARQAAARgMANIkfEgQgMAMgRAAQgRAAgNgMg");
	this.shape_32.setTransform(18.4,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(22).to({_off:false},0).wait(1).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).wait(1));

	// Layer 12
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6a9b00").s().p("AjnDnQgMgLAAgSQAAgRAMgNIGVmTQANgMAQAAQATAAALAMQALAMAAASQAAARgLAMImWGTQgNANgRAAQgQAAgMgNg");
	this.shape_33.setTransform(24.1,38.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(62));

	// Layer 13
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6a9b00").s().p("AkbEdQgMgMAAgRQAAgRAMgNIH9n9QAMgMARAAQARAAANAMQALAMAAASQAAAQgLAMIn9H+QgMAMgSAAQgSAAgLgMg");
	this.shape_34.setTransform(33.6,55.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6a9b00").s().p("AkdEfQgMgMAAgRQAAgRAMgNIIBoBQAMgMARAAQARAAANAMQALAMAAASQAAAQgLAMIoBICQgMALgSAAQgSAAgLgLg");
	this.shape_35.setTransform(33.4,56.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6a9b00").s().p("AkfEhQgMgMAAgRQAAgRAMgNIIFoFQAMgMARAAQARAAANAMQALAMAAASQAAAQgLAMIoFIGQgMAMgSgBQgSABgLgMg");
	this.shape_36.setTransform(33.2,56.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6a9b00").s().p("AkhEjQgMgMAAgRQAAgRAMgNIIIoJQANgMARAAQAQAAANAMQAMAMAAASQAAAQgMAMIoIIKQgLAMgSAAQgTAAgLgMg");
	this.shape_37.setTransform(33,56.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6a9b00").s().p("AkjElQgMgMAAgRQAAgRAMgNIIMoNQANgMARAAQAQAAANAMQAMAMAAASQAAAQgMAMIoMIOQgLALgTAAQgRAAgMgLg");
	this.shape_38.setTransform(32.8,56.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6a9b00").s().p("AklEnQgMgMAAgRQAAgRAMgNIIQoRQANgMARAAQAQAAANAMQAMAMAAASQAAAQgMAMIoQISQgMAMgRAAQgTAAgLgMg");
	this.shape_39.setTransform(32.6,56.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6a9b00").s().p("AknEpQgMgMAAgRQAAgRAMgNIIUoUQANgNARAAQAQAAANANQAMALAAASQAAARgMALIoUIWQgLALgTAAQgSAAgLgLg");
	this.shape_40.setTransform(32.4,57);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6a9b00").s().p("AkpErQgMgMAAgRQAAgRAMgNIIYoYQANgNARAAQAQAAANANQAMALAAASQAAARgMALIoYIaQgMALgRAAQgSAAgMgLg");
	this.shape_41.setTransform(32.2,57.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6a9b00").s().p("AkrEtQgMgMAAgRQAAgRAMgNIIcocQANgNARAAQAQAAANANQAMALAAASQAAARgMALIocIeQgLALgTAAQgRAAgMgLg");
	this.shape_42.setTransform(32,57.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6a9b00").s().p("AktEvQgMgMAAgRQAAgRAMgNIIgogQANgNARAAQAQAAANANQAMALAAASQAAARgMALIogIiQgLALgSAAQgSAAgMgLg");
	this.shape_43.setTransform(31.8,57.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6a9b00").s().p("AkvExQgMgMAAgRQAAgRAMgNIIkokQANgNARAAQAQAAANANQAMALAAASQAAARgMALIokImQgLALgSAAQgSAAgMgLg");
	this.shape_44.setTransform(31.6,57.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6a9b00").s().p("AkxEzQgMgMAAgRQAAgRAMgNIIoooQANgNARAAQAQAAANANQAMALAAASQAAARgMALIooIqQgLALgSAAQgSAAgMgLg");
	this.shape_45.setTransform(31.4,58);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6a9b00").s().p("AkvExQgMgMAAgRQAAgRAMgNIIkolQANgMARAAQAQAAANAMQAMAMAAASQAAAQgMAMIokImQgMALgRAAQgTAAgLgLg");
	this.shape_46.setTransform(31.6,57.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6a9b00").s().p("AktEvQgMgMAAgRQAAgRAMgNIIhohQAMgMARAAQARAAANAMQALAMAAASQAAAQgLAMIohIiQgMAMgSAAQgSAAgLgMg");
	this.shape_47.setTransform(31.8,57.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6a9b00").s().p("AkrEtQgMgMAAgRQAAgRAMgNIIdodQAMgNARAAQARAAANANQALAMAAASQAAAQgLAMIodIeQgMAMgSAAQgSAAgLgMg");
	this.shape_48.setTransform(32,57.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6a9b00").s().p("AkqErQgLgMAAgQQAAgRALgOIIaoZQAMgNARAAQARAAANANQAMALAAATQAAAQgMAMIoZIaQgMAMgSAAQgSAAgMgMg");
	this.shape_49.setTransform(32.2,57.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6a9b00").s().p("AkoEqQgMgMAAgRQAAgRAMgNIIWoWQANgNARAAQAQAAANANQAMALAAASQAAARgMALIoWIYQgLALgSAAQgSAAgMgLg");
	this.shape_50.setTransform(32.3,57.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6a9b00").s().p("AkmEoQgMgMAAgRQAAgRAMgNIISoTQANgMARAAQAQAAANAMQAMAMAAASQAAAQgMAMIoSIUQgMAMgRAAQgTAAgLgMg");
	this.shape_51.setTransform(32.5,57);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6a9b00").s().p("AkkEmQgMgMAAgRQAAgRAMgNIIPoPQAMgMARAAQARAAANAMQALAMAAASQAAAQgLAMIoPIQQgMAMgSAAQgSAAgLgMg");
	this.shape_52.setTransform(32.7,56.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6a9b00").s().p("AkiEkQgMgMgBgRQABgRAMgNIILoLQAMgNARAAQARAAANANQAMAMAAASQAAAQgMAMIoMIMQgLAMgSAAQgSAAgLgMg");
	this.shape_53.setTransform(32.9,56.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6a9b00").s().p("AkhEiQgLgMAAgQQAAgRALgOIIIoHQAMgNARAAQARAAANANQAMALAAATQAAAQgMAMIoHIIQgMAMgSAAQgSAAgMgMg");
	this.shape_54.setTransform(33.1,56.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6a9b00").s().p("AkfEhQgMgMAAgRQAAgRAMgNIIEoEQANgNARAAQAQAAANANQAMALAAASQAAARgMALIoEIGQgLALgSAAQgSAAgMgLg");
	this.shape_55.setTransform(33.2,56.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6a9b00").s().p("AkdEfQgMgMAAgRQAAgRAMgNIIAoAQANgNARAAQAQAAANANQAMALAAASQAAARgMALIoAICQgMALgRAAQgTAAgLgLg");
	this.shape_56.setTransform(33.4,56);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6a9b00").s().p("AkfEgQgLgMgBgRQABgRALgNIIEoDQAMgNARAAQARAAANANQAMAMAAASQAAAQgMAMIoEIEQgLAMgSAAQgSAAgMgMg");
	this.shape_57.setTransform(33.3,56.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#6a9b00").s().p("AkgEiQgMgMAAgRQAAgRAMgNIIHoHQAMgMARAAQARAAANAMQALAMAAASQAAAQgLAMIoHIIQgMAMgSAAQgSAAgLgMg");
	this.shape_58.setTransform(33.1,56.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6a9b00").s().p("AkiEkQgMgMAAgRQAAgRAMgNIIKoKQANgNARAAQAQAAANANQAMALAAASQAAARgMALIoKIMQgLALgSAAQgSAAgMgLg");
	this.shape_59.setTransform(32.9,56.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#6a9b00").s().p("AkkElQgMgMAAgRQAAgRAMgNIIOoNQAMgNARAAQARAAANANQAMAMAAASQAAAQgMAMIoNIOQgMAMgSAAQgSAAgMgMg");
	this.shape_60.setTransform(32.8,56.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6a9b00").s().p("AklEnQgMgMAAgRQAAgRAMgNIIRoRQAMgMARAAQARAAANAMQALAMAAASQAAAQgLAMIoRISQgMAMgSAAQgSAAgLgMg");
	this.shape_61.setTransform(32.6,56.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6a9b00").s().p("AknEpQgMgMAAgRQAAgRAMgNIIUoUQANgNARAAQAQAAANANQAMALAAASQAAARgMALIoUIWQgLALgSAAQgSAAgMgLg");
	this.shape_62.setTransform(32.4,57);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6a9b00").s().p("AkpErQgMgMABgRQgBgSAMgNIIYoXQAMgNARAAQARAAANANQAMALAAATQAAAQgMAMIoXIZQgMALgSAAQgSAAgMgLg");
	this.shape_63.setTransform(32.3,57.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6a9b00").s().p("AkqEsQgMgMAAgRQAAgRAMgNIIbobQAMgMARAAQARAAANAMQALAMAAASQAAAQgLAMIobIcQgMAMgSAAQgSAAgLgMg");
	this.shape_64.setTransform(32.1,57.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6a9b00").s().p("AksEuQgMgMAAgRQAAgRAMgNIIeoeQANgNARAAQAQAAANANQAMALAAASQAAARgMALIoeIgQgLALgSAAQgSAAgMgLg");
	this.shape_65.setTransform(31.9,57.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6a9b00").s().p("AkuEwQgMgNABgQQgBgSAMgNIIiohQAMgNARAAQARAAANANQAMALAAATQAAAQgMAMIohIjQgMALgSAAQgSAAgMgLg");
	this.shape_66.setTransform(31.8,57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_45}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).to({_off:true},1).wait(22).to({_off:false},0).wait(1).to({_off:true},1).wait(22).to({_off:false},0).wait(1).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,63.8,85.6);


(lib3.goal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6a9b00").s().p("AgIDdQgEgEABgFIAAmnQgBgGAEgEQAEgDAEAAQAFAAADADQAEAFABAFIAAGnQgBAFgEAEQgDAFgFAAQgEAAgEgFg");
	this.shape.setTransform(264.9,61,2.108,2.108);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6a9b00").s().p("AgIDdQgEgEAAgFIAAmnQAAgFAEgFQAEgDAEAAQAFAAAEADQAEAEAAAGIAAGnQAAAFgEAEQgEAFgFAAQgEAAgEgFg");
	this.shape_1.setTransform(16.1,61,2.108,2.108);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6a9b00").s().p("AJSGNIhOg+IwJAAIhLA+QgKAHgNACQgMACgNgFQgLgGgHgLQgHgLAAgNIAArSQAAgHACgGQADgKAGgIQAHgHAJgEQAIgDAGAAIADgBITaAAQASAAANANQAOAOAAASIAALTQAAANgHALQgHALgLAGQgKAEgKAAQgQAAgLgKgAIIE1QAFABADACIBRBBQAKAHAKgFQALgGAAgLIAArTQAAgIgGgFQgFgGgIAAIzbAAIgFACQgFACgCADQgDADgBAEIgBAFIAALTQAAAMALAFQAKAFAKgHIBNhAQAFgEAEAAgAJFEzIgZgUQgGgEABgIQAGg+AUiOQABgMAMAAQAFABAEAEQAEAEAAAFIAADgQAAAIgIADQgCACgEAAQgFAAgDgDgApSEzQgIgDABgIIAAjHQAAgGADgDQAEgEAFgBQAFAAAEADQAEAEAAAFQASCEAFAxQAAAHgFAFIgWASQgEACgEAAQgDABgDgCgAn5EQQgEAAgFgDQgDgDAAgFQgRiTg/m6QAAgFADgFQAFgFAFABISNAAQAHgBADAFQAFAFgBAFQhAG7gPCSQgCAMgMgBgAntD2IPXAAQAOh+A/m1IxwAAQA8GkAQCPg");
	this.shape_2.setTransform(140.5,85.9,2.108,2.108);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AJaGDIhShBIwSAAIhOBAQgJAIgLAAQgIAAgFgEQgTgIAAgUIAArTIACgJQABgGAFgGQAFgFAGgDQAGgDAFAAITbAAQANAAAKAJQAJAKAAANIAALTQAAAUgSAIQgHAEgHAAQgKAAgJgHgAI0EVIAaAUIAAjhQgTCKgHBDgApMEnIAWgSQgHhDgPhygAn4EDIPvAAQANh5BCnUIyOAAQA+GqASCjg");
	this.shape_3.setTransform(140.5,86,2.108,2.108);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6a9b00").s().p("AgbFYQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQgCgCABgDIA2qiQABgGAGAAQAHABgBAGIg2KiQgBAGgGAAg");
	this.shape_4.setTransform(271.2,87,2.108,2.108);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6a9b00").s().p("AAQFUIgsqmQgBgGAHgBQAGAAABAGIAsKmQAAAHgGAAIAAAAQgHAAAAgGg");
	this.shape_5.setTransform(18,87.4,2.108,2.108);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6a9b00").s().p("AgFC0IAAlmQAAgHAFAAQAGAAAAAHIAAFmQAAAGgGAAQgFAAAAgGg");
	this.shape_6.setTransform(23.7,52,2.108,2.108);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6a9b00").s().p("AgFFGIAAqMQAAgHAFABQAGgBAAAHIAAKMQAAAIgGAAQgFAAAAgIg");
	this.shape_7.setTransform(43.7,83.1,2.108,2.108);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6a9b00").s().p("AgFFGIAAqMQAAgHAFABQAGgBAAAHIAAKMQAAAIgGAAQgFAAAAgIg");
	this.shape_8.setTransform(63.7,83.1,2.108,2.108);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6a9b00").s().p("AgFFGIAAqMQAAgHAFABQAGgBAAAHIAAKMQAAAIgGAAQgFAAAAgIg");
	this.shape_9.setTransform(83.7,83.1,2.108,2.108);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6a9b00").s().p("AgFFGIAAqMQAAgHAFABQAGgBAAAHIAAKMQAAAIgGAAQgFAAAAgIg");
	this.shape_10.setTransform(103.7,83.1,2.108,2.108);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6a9b00").s().p("AgFFGIAAqMQAAgHAFABQAGgBAAAHIAAKMQAAAIgGAAQgFAAAAgIg");
	this.shape_11.setTransform(123.6,83.1,2.108,2.108);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6a9b00").s().p("AgFCxIAAliQAAgHAFABQAGgBAAAHIAAFiQAAAIgGAAQgFAAAAgIg");
	this.shape_12.setTransform(263.5,51.6,2.108,2.108);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6a9b00").s().p("AgFFGIAAqMQAAgHAFABQAGgBAAAHIAAKMQAAAIgGAAQgFAAAAgIg");
	this.shape_13.setTransform(243.6,83.1,2.108,2.108);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6a9b00").s().p("AgFFGIAAqMQAAgHAFABQAGgBAAAHIAAKMQAAAIgGAAQgFAAAAgIg");
	this.shape_14.setTransform(223.6,83.1,2.108,2.108);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6a9b00").s().p("AgFFGIAAqMQAAgHAFABQAGgBAAAHIAAKMQAAAIgGAAQgFAAAAgIg");
	this.shape_15.setTransform(203.6,83.1,2.108,2.108);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6a9b00").s().p("AgFFGIAAqMQAAgHAFABQAGgBAAAHIAAKMQAAAIgGAAQgFAAAAgIg");
	this.shape_16.setTransform(183.6,83.1,2.108,2.108);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6a9b00").s().p("AgFFGIAAqMQAAgHAFABQAGgBAAAHIAAKMQAAAIgGAAQgFAAAAgIg");
	this.shape_17.setTransform(163.6,83.1,2.108,2.108);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6a9b00").s().p("AgFFGIAAqMQAAgHAFABQAGgBAAAHIAAKMQAAAIgGAAQgFAAAAgIg");
	this.shape_18.setTransform(143.7,83.1,2.108,2.108);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6a9b00").s().p("AAiAgIhKg0QgGgEAFgFQADgFAGAEIBJAzQAFAEgDAFQgDADgDAAIgDgBg");
	this.shape_19.setTransform(266.6,135.9,2.108,2.108);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6a9b00").s().p("AgmAcQgEgGAFgDIBDgvQABgBAAAAQABAAABAAQAAAAABAAQAAAAABAAQADABABACQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAADgCACIhDAuIgEABQgDAAgCgCg");
	this.shape_20.setTransform(21.3,135.9,2.108,2.108);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6a9b00").s().p("AohgOQgHgBABgGQACgHAGABQC1AhDcAJQFSAMFcg4QADAAACABQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQABAHgHABQkdAukbAAQkgAAjrgsg");
	this.shape_21.setTransform(143.6,135.4,2.108,2.108);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6a9b00").s().p("AougOQgGgCABgGQABgGAHABQC3AiDhAJQFaANFmg7QAGgBABAGQABAGgGACQkoAwkhAAQkhAAjzgtg");
	this.shape_22.setTransform(144.4,115.1,2.108,2.108);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6a9b00").s().p("AlrAPQh0gNhegSQgGgBABgHQACgGAGABQC8AlDlAJQFkAOFxg/QAGgBACAGQABAHgHABQkyA0koAAQiuAAihgSg");
	this.shape_23.setTransform(144.6,94.9,2.108,2.108);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6a9b00").s().p("AnJAGQhngNg8gQQgHgCACgGQACgGAGABQCEAjDaAPQGyAiHEhTQAGgBABAGQABAHgGABQlFA7k9AAQjlAAjPgfg");
	this.shape_24.setTransform(143.8,73.9,2.108,2.108);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6a9b00").s().p("AnJAGQhngNg8gQQgHgCACgGQACgGAGACQCEAjDaAPQGyAhHEhTQACAAADABQAAABABAAQAAAAAAABQABAAAAABQAAABAAAAQABAHgGABQlBA7lBAAQjmAAjOgfg");
	this.shape_25.setTransform(143.8,53.9,2.108,2.108);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6a9b00").s().p("AnJAGQhngNg8gQQgDgBgBgCIgBgFQACgHAGACQCEAjDaAPQGyAiHEhTQAGgBABAGQABAHgGABQlFA7k9AAQjmAAjOgfg");
	this.shape_26.setTransform(143.9,33.9,2.108,2.108);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6a9b00").s().p("Am7gHQgHgBABgHQABgGAGABQCxAYDBAEQD8AFEGghQADAAACACQACACABACQABAGgHABQjiAdjiAAQjmAAjNgdg");
	this.shape_27.setTransform(140.3,17.3,2.108,2.108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281,171.8);


(lib3.balllines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6a9b00").s().p("AAjA0QgKgGgWgXQgfgggQgiQgDgGAGgDQAGgCADAGQAPAgAeAfQAQAQAOAKQAFAFgEAFQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape.setTransform(28.1,43,2.108,2.108);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6a9b00").s().p("AAGBAQgOgOgSgUQgigkgMgfQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQADgBACABQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAQApA2AzQAWgcARgqIAMgnQACgHAGACQAHABgCAGQgCAOgMAfQgTAugZAdQgDADgCAAIgFgCg");
	this.shape_1.setTransform(26.4,53.1,2.108,2.108);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6a9b00").s().p("AgYA/QgFgEADgGQAVgcALgrIAKgnQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAHACgCAFQgKBDghAxQgCADgDAAg");
	this.shape_2.setTransform(49.2,50.7,2.108,2.108);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6a9b00").s().p("AALBCQgFgEAEgFQAegjARhIQgjgGgtAHIgoAIQgGACgCgHQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgDADgBIAugJQAxgHAmAJQAGABgBAGIgNAvQgRAugWAaQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_3.setTransform(54.9,51.2,2.108,2.108);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6a9b00").s().p("AhBAMQgDgGAGgDIApgKQAsgLAmAEQAHABgBAGQgBAHgGgBQgkgEgqAJIgnALIgCABQgFAAgBgEg");
	this.shape_4.setTransform(45.3,28.7,2.108,2.108);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6a9b00").s().p("AAEBEQgNgPgQgUQgfgngMglQgCgGAGgCIAvgMQAwgKAiAGQAGABgBAHQgBAGgHgBQgsgIhHAVQAMAiAdAjQANATAMAMQAFAFgEAEQgCACgDAAIgFgCg");
	this.shape_5.setTransform(39,27.4,2.108,2.108);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6a9b00").s().p("AiICIQg4g4AAhQQAAhPA4g4QA5g5BPgBQBQABA4A5QA6A4AABPQAABQg6A4Qg4A5hQABQhPgBg5g5gAhwhwQgvAvgBBBQABBCAvAwQAvAuBBABQBCgBAwguQAugwAAhCQAAhBgugvQgwgwhCAAQhBAAgvAwg");
	this.shape_6.setTransform(40.9,40.9,2.108,2.108);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah8B9Qg0g0AAhJQAAhIA0g0QA0g0BIAAQBJAAA0A0QA0A0AABIQAABJg0A0Qg0A0hJAAQhIAAg0g0g");
	this.shape_7.setTransform(40.9,40.9,2.108,2.108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.8,81.8);


(lib3.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":1,"subover":24,"over":49});

	// timeline functions:
	this.frame_0 = function() {
		stage3.canvas.addEventListener("mouseover", over.bind(this));
		function over()
		{
		    this.gotoAndPlay("over");
		}

		stage3.canvas.addEventListener("mouseout", out.bind(this));
		function out()
		{
		    this.gotoAndPlay("out");
		}
	}
	this.frame_48 = function() {
		this.gotoAndPlay("subover")
	}
	this.frame_74 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(48).call(this.frame_48).wait(26).call(this.frame_74).wait(1));

	// Layer 5
	this.instance = new lib3.balllines("synched",0);
	this.instance.setTransform(40.9,40.9,1,1,0,0,0,40.9,40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({rotation:16.4},0).wait(1).to({rotation:32.7},0).wait(1).to({rotation:49.1,y:41},0).wait(1).to({rotation:65.5},0).wait(1).to({rotation:81.8,y:40.9},0).wait(1).to({rotation:98.2},0).wait(1).to({rotation:114.5},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:147.3},0).wait(1).to({rotation:163.6},0).wait(1).to({rotation:180},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:212.7},0).wait(1).to({rotation:229.1},0).wait(1).to({rotation:245.5},0).wait(1).to({rotation:261.8},0).wait(1).to({rotation:278.2},0).wait(1).to({rotation:294.5,x:41},0).wait(1).to({rotation:310.9},0).wait(1).to({rotation:327.3,x:40.9},0).wait(1).to({rotation:343.6},0).wait(1).to({rotation:360},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:375,y:41},0).wait(1).to({rotation:390,y:40.9},0).wait(1).to({rotation:405},0).wait(1).to({rotation:420},0).wait(1).to({rotation:435,y:41},0).wait(1).to({rotation:450,y:40.9},0).wait(1).to({rotation:465},0).wait(1).to({rotation:480},0).wait(1).to({rotation:495},0).wait(1).to({rotation:510},0).wait(1).to({rotation:525},0).wait(1).to({rotation:540},0).wait(1).to({rotation:555},0).wait(1).to({rotation:570},0).wait(1).to({rotation:585},0).wait(1).to({rotation:600},0).wait(1).to({rotation:615},0).wait(1).to({rotation:630},0).wait(1).to({rotation:645,x:41},0).wait(1).to({rotation:660,x:40.9},0).wait(1).to({rotation:675},0).wait(1).to({rotation:690},0).wait(1).to({rotation:705,x:41},0).wait(1).to({rotation:720,x:40.9},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:741.3},0).wait(1).to({rotation:762},0).wait(1).to({rotation:782.2},0).wait(1).to({rotation:801.8,y:41},0).wait(1).to({rotation:820.8,y:40.9},0).wait(1).to({rotation:839.2},0).wait(1).to({rotation:857.1},0).wait(1).to({rotation:874.4},0).wait(1).to({rotation:891.1},0).wait(1).to({rotation:907.2},0).wait(1).to({rotation:922.8},0).wait(1).to({rotation:937.7},0).wait(1).to({rotation:952.1},0).wait(1).to({rotation:966},0).wait(1).to({rotation:979.2},0).wait(1).to({rotation:991.9,x:41},0).wait(1).to({rotation:1004,x:40.9},0).wait(1).to({rotation:1015.5},0).wait(1).to({rotation:1026.4,x:41},0).wait(1).to({rotation:1036.8,x:40.9},0).wait(1).to({rotation:1046.6},0).wait(1).to({rotation:1055.8},0).wait(1).to({rotation:1064.4},0).wait(1).to({rotation:1072.5,x:41},0).wait(1).to({rotation:1080,x:40.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.8,81.8);


// stage3 content:



(lib3.nosgoal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();

		stage3.canvas.style.cursor = "pointer";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.ball = new lib3.ball();
	this.ball.setTransform(461.5,290.3,1.216,1.216,0,0,0,40.9,40.9);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

	// flash0.ai
	this.instance = new lib3.lines();
	this.instance.setTransform(365.7,315.3,1.216,1.216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib3.goal("synched",0);
	this.instance_1.setTransform(461.3,219.5,1.216,1.216,0,0,0,140.6,85.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(765.3,385,341.7,304.3);

})(lib3 = lib3||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib3, images, createjs, ss;

/*----Atributos Generales de las  Animaciones-----------------------------------------------------------------------------------------------------------------------------------------------*/

var canvas1, canvas2, canvas3, stage1, stage2, stage3, exportRoot1, exportRoot2, exportRoot3;
function init() {
	canvas1 = document.getElementById("rocket");
	canvas2 = document.getElementById("brain");
	canvas3 = document.getElementById("goal");
	handleComplete();
}
function handleComplete() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot1 = new lib1.nosrocket();
	exportRoot2 = new lib2.nosbrain();
	exportRoot3 = new lib3.nosgoal()
	stage1 = new createjs.Stage(canvas1);
	stage2 = new createjs.Stage(canvas2);
	stage3 = new createjs.Stage(canvas3);
	stage1.addChild(exportRoot1);
	stage2.addChild(exportRoot2);
	stage3.addChild(exportRoot3);
	//Registers the "tick" event listener.
	createjs.Ticker.setFPS(lib1.properties.fps);
	createjs.Ticker.setFPS(lib2.properties.fps);
	createjs.Ticker.setFPS(lib3.properties.fps);
	createjs.Ticker.addEventListener("tick", stage1);
	createjs.Ticker.addEventListener("tick", stage2);
	createjs.Ticker.addEventListener("tick", stage3);

	//Code to support hidpi screens and responsive scaling.
	(function(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS=1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib1.properties.width, h = lib1.properties.height;
            var w = lib2.properties.width, h = lib2.properties.height;
            var w = lib3.properties.width, h = lib3.properties.height;
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
            canvas2.width = w*pRatio*sRatio;
			canvas2.height = h*pRatio*sRatio;
			stage2.scaleX = pRatio*sRatio;
			stage2.scaleY = pRatio*sRatio;
            canvas3.width = w*pRatio*sRatio;
			canvas3.height = h*pRatio*sRatio;
			stage3.scaleX = pRatio*sRatio;
			stage3.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
		}
	})(false,'both',false,1);
}
