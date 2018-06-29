/*----Animación cohete/rocket--------------------------------------------------------------------------------------------------------------------------------------------------------*/


(function (lib1, img, cjs, ss) {

var p; // shortcut to reference prototypes

// lib1rary properties:
lib1.properties = {
	width: 950,
	height: 540,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib1.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85D100").s().p("AAAAjQgOgBgKgLQgKgLAAgNQABgOAKgKQALgKAMABQAPABAKALQAKAMAAAMQgBAPgKAJQgKAJgMAAIgCAAg");
	this.shape.setTransform(-24.1,24.1,0.974,0.974);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85D100").s().p("AgBApQgRgBgMgNQgLgNABgPQABgSANgLQANgLAPABQARABAMANQALANgBAPQgBARgNALQgMALgPAAIgBAAg");
	this.shape_1.setTransform(-15.8,15.8,0.974,0.974);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85D100").s().p("AipCqQgMgNAAgSQAAgRAMgNIEWkWQANgMASAAQARAAANAMQANANAAARQgBASgNAMIkWEXQgMAMgSAAQgQAAgOgMg");
	this.shape_2.setTransform(9.8,-9.7,0.974,0.974);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55.2,55.1);


(lib1.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85D100").s().p("AAAAjQgOgBgKgLQgKgLAAgNQABgOAKgKQALgKAMABQAPABAKALQAKAMAAAMQgBAPgKAJQgKAJgMAAIgCAAg");
	this.shape.setTransform(-24.1,24.1,0.974,0.974);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85D100").s().p("AgBApQgRgBgMgNQgLgNABgPQABgSANgLQANgLAPABQARABAMANQALANgBAPQgBARgNALQgMALgPAAIgBAAg");
	this.shape_1.setTransform(-15.8,15.8,0.974,0.974);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85D100").s().p("AipCqQgMgNAAgSQAAgRAMgNIEWkWQANgMASAAQARAAANAMQANANAAARQgBASgNAMIkWEXQgMAMgSAAQgQAAgOgMg");
	this.shape_2.setTransform(9.8,-9.7,0.974,0.974);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-27.5,55.2,55.1);


(lib1.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85D100").s().p("AAAAjQgOgBgKgLQgKgLAAgNQABgOAKgKQALgKAMABQAPABAKALQAKAMAAAMQgBAPgKAJQgKAJgMAAIgCAAg");
	this.shape.setTransform(-19,17.6,0.974,0.974);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85D100").s().p("AgBApQgRgBgMgNQgLgNABgPQABgSANgLQANgLAPABQARABAMANQALANgBAPQgBARgNALQgMALgPAAIgBAAg");
	this.shape_1.setTransform(-9.7,9.3,0.974,0.974);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85D100").s().p("AiFCGQgNgNAAgRQAAgSANgMIDRjOQAMgNAQAAQASAAAMANQANAMAAARQgBARgMAMIjRDQQgMALgRABQgQgBgNgLg");
	this.shape_2.setTransform(12.9,-12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-27.5,50,48.6);


(lib1.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85D100").s().p("Ag9A+QgagaAAgkQAAgjAagaQAagaAjAAQAkAAAaAaQAaAaAAAjQgBAkgZAaQgaAagkAAQgkAAgZgag");
	this.shape.setTransform(19.2,-21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85D100").s().p("Ag9A+QgagaAAgkQAAgjAagaQAagaAjAAQAkAAAaAaQAaAaAAAjQAAAkgaAaQgaAagkAAQgkAAgZgag");
	this.shape_1.setTransform(39.4,-41.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85D100").s().p("AjBTuIhuhtQgLgLgBgQQgBgQAKgNIEql1QAKgPAEgTQAHgfgTggIhVBPQgNAMgQAAIgKgBQgqgLgtgPIhBBVQgMAQgVAAQgFAAgFgBQj5g8iFjNQhDhogThlQgEgYATgQIBOhBQgXg9gIgrQgEgVAOgPIBQhTQgZgRgXAAQgRAAgSAJIgOAIIl3EoQgMAJgOAAQgRAAgMgMIhuhuQgMgMAAgRQgBgQAMgNIGPm6QA7g7BMgfQBMgfBTAAQBKAABEAYQBEAYA5AuIIepWQBHhHBbgmQBbglBjAAQBhAABYAjQBYAkBFBDIAEgGIDSjSQgFgVAFgUQAGgVAPgPQAYgYAiAAQAiAAAYAYQAYAYAAAiQgBAhgXAYQgQAQgVAFQgUAGgVgGIjSDSIgJAGQAwBBAaBLQAaBNgBBRQAABkgmBaQglBbhHBGIpOIpQBmB8gHCgQgHCihxBxIm9GRQgMALgQAAQgRAAgMgNgAA1I5QAtA6gHBBQgGAygfAjIkPFXIA3A3IGel0QBYhZAGh/QAGh+hOhjgArBFJQAbBjBBBWQBqCLCvAyIAjgtQiGhAhlhrQhOhVg2hqgAGivUQhMAfg6A6IoqJiIl3GOQAhCFBWB0QCRDFD5BDIPmurQA6g6AfhLQAfhLABhTQAAhSgfhLQgfhLg6g6Qg6g7hMgfQhLgghTAAQhSAAhLAggArJlRQg8AZguAuIl0GbIA3A3IFZkQQAMgKASgJQAjgRAlAAQA4AAAyAnIDOjcQhbhJh2AAQhDAAg8AZg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#85D100").s().p("Ag9A+QgagaAAgkQAAgjAagaQAagaAjAAQAkAAAaAaQAaAaAAAjQAAAkgaAaQgaAagkAAQgjAAgagag");
	this.shape_3.setTransform(59.5,-61.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArCI8QhziJgdh0IOuwMQA3g3BygjQBmggBaAAQBPAABeAvQBXAqA+A+QA0A0APBXQAJAyAAByQgBBbgcBcQggBpg2A2Iv/NzQj6hDipjJg");
	this.shape_4.setTransform(16.1,-20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlJFXIEkmGQAegiABgWQACgkgug6IELkBQBYBwAUBtQAYB/hSBTInhHeg");
	this.shape_5.setTransform(6.5,78.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhyAGQheh4gbhkIBqgQQA2BrBNBUQBkBqCGA/IgrBlQivgyiEivg");
	this.shape_6.setTransform(-51.9,52.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AnAD6IGanHQAygzBCgbQBDgbBJAAQBAAAA7AUQA8AVAxAnIjlDyQgagTgoARQg0AZgEAAQgnAAgUgHQgJgGgCABImhEgg");
	this.shape_7.setTransform(-78.9,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.2,-127.5,258.4,255.1);


(lib1.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85D100").s().p("AkpJbQhSgjg9hAIgcABQiJAAhrhVQhqhVgfiGQghiRBIiAQBIiDCLgxQACh9BLhkQBLhmB3gmQA7gTA9AAQBeAABVAsQBTAsA2BMQAYgDATAAQB6AABoBBQBoBAA1BtQBaARBJA2QBKA2ArBQQAlBEAIBPQAHBOgXBMQgXBMgzA9QgyA9hGAlQhYAvhjAAQhDAAg/gWQhAgWg0gpQg4BJhQAtQhQAshaAIIgmABQhYAAhRgigAmsG7QAOAAAIAKQA2A8BIAgQBJAgBPAAIAhgBQBXgHBIgtQBKgtAvhKQAIgMAOgBQANgCALAKQAvAsA8AXQA7AYBBAAQBUAABLgoQA7ggArgzQAqg0AUhAQAUhBgGhDQgGhCggg6QgmhHhDgvQhCgvhQgLQgRgDgHgPQgshihbg8Qhbg7htAAQgZAAgcAEQgJABgIgDQgIgEgEgHQguhHhIgoQhLgphUAAQgzAAgzAQQhpAihABcQhABbAEBvQABALgGAIQgGAJgKACQh+AlhDBxQhDBwAdCAQAbByBaBIQBaBHB0AAQAUAAARgCg");
	this.shape.setTransform(86.1,63.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkjI3QhMgig4g9QgJgLgOAAIgDABIgmACQh6AAhdhLQhehLgbh3QgfiFBGh0QBFh2CDgmQALgDAGgJQAGgJAAgLQgFhzBDhgQBChfBugkQA0gQA2AAQBYAABOAqQBLArAvBJQAMARATgDQAegEAaAAQBxAABfA9QBfA+AuBnQAGAPASADQBTAMBFAwQBGAxAnBKQAhA8AHBGQAGBFgUBEQgVBDgsA2QgsA2g/AhQhNAphXAAIgBAAQhDAAg+gYQg/gZgxguQgKgKgPACQgOABgIANQgyBNhNAuQhLAvhaAIQgRABgRAAQhTAAhLgig");
	this.shape_1.setTransform(86.1,63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.3,127.6);


(lib1.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85D100").s().p("AinF4QhGgVgrg7Qgqg7AChJQg1g0gMhLQgMhOArhFQArhFBLgaQAHhDAugyQAvgyBEgKQANgCAQAAQA5AAAxAgQAwAfAYA0QAZgGAaAAQAxAAArAXQAsAXAbApQAoA6gGBGQgGBEgxAyQAMA1gQA1QgQA1goAlQgcAbglAPQgkAOgoAAQgjAAgggLQgeApgrAWQguAXgzAAQgfAAgegJgAg7lDQg0AIghAoQgiAoACA0QAAALgHAJQgGAIgLACQg+APgkA1QglA1AKA9QAJA9AvAnQAMAKgCAQQgGA3AfAuQAfAvA1AQQAVAGAXAAQAqAAAkgVQAigVAUgkQAGgKAMgEQALgDALAFQAeAPAjAAQA6AAAqgnQAfgeALgpQAKgqgNgoQgDgIACgJQADgJAHgGQAoggAHg1QAHg0gdgsQgUgcgegQQgegQgiAAQgdAAgcAMQgLAGgOgGQgMgGgEgOQgMgsglgdQglgcgtAAg");
	this.shape.setTransform(38.9,38.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AieFRQg4gRghgxQghgxAHg6QABgRgNgLQgxgqgKhAQgJhBAmg4QAmg4BCgOQALgDAHgJQAHgJAAgLQgCg3AkgrQAjgqA3gIQAJgCAMAAQAvAAAnAeQAnAeANAwQAEAOANAGQAOAHANgHQAdgMAeAAQAlAAAgARQAfARAVAeQAfAugHA3QgIA3gqAiQgIAHgCAJQgDAJADAJQAOArgLAsQgLAsghAeQgrAqg+AAQglAAgggQQgMgFgMADQgMAEgGALQgWAmgkAWQgmAXgsAAQgXAAgXgHg");
	this.shape_1.setTransform(38.9,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.8,77.2);


(lib1.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85D100").s().p("ABLGqQgygUgmgiQhaAdhYgfQgwgQgnggQgngfgZgrQhvgJhNhRQhNhSAAhvQAAh1BThUQBUhTB2AAQBOAABDAoQAbg9AzgqQAzgrBBgNQAcgGAaABQBggBBLA+QAogNAtgBQBSAABGAtQBFAsAiBLQAtBighBoQghBlhcA2QAIBOgiBJQghBIhBAtQhLA0hbAAQg2AAgygTgAAOE8QAgAgArASQAsASAuAAQBJAAA7gpQA3gmAag/QAbg+gMhCQgBgLAEgIQAFgJAJgFQBQgnAehSQAfhWglhRQgbg7g3giQg2gkhBABQgpgBgnAPQgSAIgOgNQg9g5hTgBQgVAAgVAFQg6AMgsAqQgsApgPA7QgEAQgQAFQgPAGgNgKQg+g0hQAAQhdABhCBCQhCBBAABdQAABbBBBCQBCBCBcAAQATAAAIAQQAUAnAgAcQAgAdApAOQBPAbBMgfQAGgDAFAAQALAAAJAJg");
	this.shape.setTransform(60.9,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABgGHQgvgTgigjQgKgJgLAAQgGAAgGACQhRAhhUgcQgsgPgjgeQgjgfgVgpQgIgRgUAAQhigBhGhGQhGhHAAhgQAAhkBGhGQBGhGBkAAQApAAAnAOQAnAOAgAaQAOALARgGQARgFAEgRQAQhAAvgsQAvgsA+gNQAWgFAXAAQArAAAoAQQAnAPAgAeQAPAOATgIQAqgQArAAQBFAAA7AmQA6AlAdA+QAnBXggBbQghBZhVAqQgKAEgFAKQgFAJACALQAMBHgcBDQgcBCg7ApQhAAthNAAQgxAAgugUg");
	this.shape_1.setTransform(60.9,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.8,89);


(lib1.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85D100").s().p("AhKG0QhCgJg1gpQg0gogag9QgwgFgqgWQgqgWghgjQgkgogSgxQgRgxACg1QAFhkBHhIQBGhIBlgGQAQhOA7g3QA7g2BQgJIAcgCQA8AAA3AeQA3AdAiA0QAvADAqAXQApAWAdAnQAcAmAKAvQAKAugLAuIANAIQBWA6ATBnQATBog8BWQgjA0g4AcQg3Adg/AAQhCAAg4gfQgjAfgsARQgsARgtAAQgQAAgUgDgAl+h8Qg7A5gEBQQgCApAOAmQAOAmAbAeQAcAeAlARQAlARApACQAJABAIAFQAHAGADAJQASA0AqAjQAqAjA3AIQAvAHAsgRQAtgQAggkQAIgIALgBQAKgCAKAGIABABQAxAiA8AAQAwAAArgWQAqgWAbgnQAthCgOhPQgPhPhBgrQgOgKgNgGQgLgFgEgLQgFgKAEgLQANglgFgnQgGgngXgfQgXgegggRQghgQgmAAIgCAAQgSAAgJgQQgZgsgrgZQgsgagwAAIgVABQhCAIguAvQgvAwgGBCQgBAMgJAIQgJAIgMgBIgIAAQhSAAg7A5g");
	this.shape.setTransform(50.7,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEGKQg5gIgsglQgsgkgTg3QgDgJgIgGQgIgGgKAAQgqgCgngSQgmgSgdggQgdgfgPgoQgOgoACgrQAEhUA+g7QA+g7BWAAIAIAAQAMABAKgJQAJgIABgNQAGhEAxgyQAwgyBFgIIAWgBQAzAAAtAbQAuAbAaAuQAJAQATAAIACAAQAnAAAjARQAiARAXAfQAZAhAGApQAGAogOAnQgEAMAEALQAFALALAFQAOAHAOAJQBFAuAPBTQAPBSgwBFQgcApgsAXQgsAXgyAAQhAAAgygkIgCgBQgKgGgLACQgLABgIAJQgiAlgvARQggAMgiAAQgPAAgOgCg");
	this.shape_1.setTransform(50.7,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.4,87.9);


(lib1.Rocket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.Tween1("synched",0);
	this.instance.setTransform(129.3,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-0.7,x:129.2},3).to({rotation:0.1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,258.4,255.1);


(lib1.nube4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85D100").s().p("AinF4QhGgVgrg7Qgqg7AChJQg1g0gMhLQgMhOArhFQArhFBLgaQAHhDAugyQAvgyBEgKQANgCAQAAQA5AAAxAgQAwAfAYA0QAZgGAaAAQAxAAArAXQAsAXAbApQAoA6gGBGQgGBEgxAyQAMA1gQA1QgQA1goAlQgcAbglAPQgkAOgoAAQgjAAgggLQgeApgrAWQguAXgzAAQgfAAgegJgAg7lDQg0AIghAoQgiAoACA0QAAALgHAJQgGAIgLACQg+APgkA1QglA1AKA9QAJA9AvAnQAMAKgCAQQgGA3AfAuQAfAvA1AQQAVAGAXAAQAqAAAkgVQAigVAUgkQAGgKAMgEQALgDALAFQAeAPAjAAQA6AAAqgnQAfgeALgpQAKgqgNgoQgDgIACgJQADgJAHgGQAoggAHg1QAHg0gdgsQgUgcgegQQgegQgiAAQgdAAgcAMQgLAGgOgGQgMgGgEgOQgMgsglgdQglgcgtAAg");
	this.shape.setTransform(38.9,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AieFRQg4gRghgxQghgxAHg6QABgRgNgLQgxgqgKhAQgJhBAmg4QAmg4BCgOQALgDAHgJQAHgJAAgLQgCg3AkgrQAjgqA3gIQAJgCAMAAQAvAAAnAeQAnAeANAwQAEAOANAGQAOAHANgHQAdgMAeAAQAlAAAgARQAfARAVAeQAfAugHA3QgIA3gqAiQgIAHgCAJQgDAJADAJQAOArgLAsQgLAsghAeQgrAqg+AAQglAAgggQQgMgFgMADQgMAEgGALQgWAmgkAWQgmAXgsAAQgXAAgXgHg");
	this.shape_1.setTransform(38.9,42);

	this.instance = new lib1.Symbol3();
	this.instance.setTransform(38.9,42.1,1,1,0,0,0,38.9,38.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({x:18.3,y:63.8},0).wait(1).to({x:-2.4,y:85.5},0).wait(1).to({x:-23,y:107.2},0).wait(1).to({x:-43.7,y:128.9},0).wait(1).to({x:-64.4,y:150.6},0).wait(1).to({x:-85,y:172.3},0).wait(1).to({x:-105.7,y:194},0).wait(1).to({x:-126.3,y:215.7},0).wait(1).to({x:-147,y:237.4},0).wait(1).to({x:-167.7,y:259.2},0).wait(1).to({x:-188.3,y:280.8},0).wait(1).to({x:-209,y:302.6},0).wait(1).to({x:-229.7,y:324.3},0).wait(1).to({x:-250.3,y:346},0).wait(1).to({x:-271,y:367.7},0).wait(1).to({x:-291.6,y:389.4},0).wait(1).to({x:-312.3,y:411.1},0).wait(1).to({x:-333,y:432.8},0).wait(1).to({x:-353.6,y:454.5},0).wait(1).to({x:-374.3,y:476.3},0).wait(1).to({x:-395,y:498},0).wait(1).to({x:-415.6,y:519.7},0).wait(1).to({x:-436.3,y:541.4},0).wait(1).to({x:-456.9,y:563.1},0).wait(1).to({x:-477.6,y:584.8},0).wait(1).to({x:-498.3,y:606.5},0).wait(1).to({x:-518.9,y:628.2},0).wait(1).to({x:-539.6,y:649.9},0).wait(1).to({x:-560.3,y:671.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.5,77.8,77.1);


(lib1.nube3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.Symbol4();
	this.instance.setTransform(87.8,64.6,1,1,0,0,0,86.1,63.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({y:64.5},0).wait(1).to({x:57.6,y:95.2},0).wait(1).to({x:27.4,y:125.9},0).wait(1).to({x:-2.9,y:156.6},0).wait(1).to({x:-33.1,y:187.3},0).wait(1).to({x:-63.4,y:218},0).wait(1).to({x:-93.6,y:248.7},0).wait(1).to({x:-123.9,y:279.4},0).wait(1).to({x:-154.1,y:310.2},0).wait(1).to({x:-184.4,y:340.9},0).wait(1).to({x:-214.6,y:371.6},0).wait(1).to({x:-244.9,y:402.3},0).wait(1).to({x:-275.1,y:433},0).wait(1).to({x:-305.4,y:463.7},0).wait(1).to({x:-335.6,y:494.4},0).wait(1).to({x:-365.8,y:525.1},0).wait(1).to({x:-396.1,y:555.8},0).wait(1).to({x:-426.4,y:586.6},0).wait(1).to({x:-456.6,y:617.3},0).wait(1).to({x:-486.9,y:648},0).wait(1).to({x:-517.1,y:678.7},0).wait(1).to({x:-547.4,y:709.4},0).wait(1).to({x:-577.6,y:740.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,0.8,172.3,127.6);


(lib1.nube2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.Symbol2();
	this.instance.setTransform(60.9,44.5,1,1,0,0,0,60.9,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:38.5,y:67.4},0).wait(1).to({x:16.1,y:90.4},0).wait(1).to({x:-6.3,y:113.3},0).wait(1).to({x:-28.7,y:136.2},0).wait(1).to({x:-51.2,y:159.1},0).wait(1).to({x:-73.6,y:182},0).wait(1).to({x:-96,y:205},0).wait(1).to({x:-118.4,y:227.9},0).wait(1).to({x:-140.9,y:250.8},0).wait(1).to({x:-163.3,y:273.8},0).wait(1).to({x:-185.7,y:296.7},0).wait(1).to({x:-208.1,y:319.6},0).wait(1).to({x:-230.6,y:342.5},0).wait(1).to({x:-253,y:365.5},0).wait(1).to({x:-275.4,y:388.4},0).wait(1).to({x:-297.8,y:411.3},0).wait(1).to({x:-320.3,y:434.2},0).wait(1).to({x:-342.7,y:457.2},0).wait(1).to({x:-365.1,y:480.1},0).wait(1).to({x:-387.5,y:503},0).wait(1).to({x:-410,y:525.9},0).wait(1).to({x:-432.4,y:548.8},0).wait(1).to({x:-454.8,y:571.8},0).wait(1).to({x:-477.2,y:594.7},0).wait(1).to({x:-499.6,y:617.6},0).wait(1).to({x:-522.1,y:640.6},0).wait(1).to({x:-544.5,y:663.5},0).wait(1).to({x:-566.9,y:686.4},0).wait(1).to({x:-589.4,y:709.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.8,89);


(lib1.nube1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib1.Symbol1();
	this.instance.setTransform(50.6,53.2,1,1,0,0,0,50.6,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({regX:50.7,x:40,y:65},0).wait(1).to({x:29.2,y:76.8},0).wait(1).to({x:18.4,y:88.6},0).wait(1).to({x:7.6,y:100.5},0).wait(1).to({x:-3.2,y:112.3},0).wait(1).to({x:-14,y:124.1},0).wait(1).to({x:-24.7,y:135.9},0).wait(1).to({x:-35.5,y:147.8},0).wait(1).to({x:-46.3,y:159.6},0).wait(1).to({x:-57.1,y:171.4},0).wait(1).to({x:-67.9,y:183.2},0).wait(1).to({x:-78.7,y:195.1},0).wait(1).to({x:-89.4,y:206.9},0).wait(1).to({x:-100.2,y:218.7},0).wait(1).to({x:-111,y:230.5},0).wait(1).to({x:-121.8,y:242.4},0).wait(1).to({x:-132.6,y:254.2},0).wait(1).to({x:-143.4,y:266},0).wait(1).to({x:-154.1,y:277.9},0).wait(1).to({x:-164.9,y:289.7},0).wait(1).to({x:-175.7,y:301.5},0).wait(1).to({x:-186.5,y:313.3},0).wait(1).to({x:-197.3,y:325.2},0).wait(1).to({x:-208.1,y:337},0).wait(1).to({x:-218.9,y:348.8},0).wait(1).to({x:-229.6,y:360.7},0).wait(1).to({x:-240.4,y:372.5},0).wait(1).to({x:-251.2,y:384.3},0).wait(1).to({x:-262,y:396.1},0).wait(1).to({x:-272.8,y:408},0).wait(1).to({x:-283.6,y:419.8},0).wait(1).to({x:-294.3,y:431.6},0).wait(1).to({x:-305.1,y:443.4},0).wait(1).to({x:-315.9,y:455.3},0).wait(1).to({x:-326.7,y:467.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,9.3,101.4,87.9);


(lib1.impulse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// linea 1
	this.instance = new lib1.Tween6("synched",0);
	this.instance.setTransform(34.3,27.5);

	this.instance_1 = new lib1.Tween4("synched",0);
	this.instance_1.setTransform(34.3,27.5);
	this.instance_1._off = true;

	this.instance_2 = new lib1.Tween5("synched",0);
	this.instance_2.setTransform(34.3,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},3).to({_off:true},3).wait(1));

	// linea 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85D100").s().p("AAAAjQgOgBgKgLQgKgMAAgMQABgPAKgJQALgKAMABQAPACAKALQAKALAAAMQgBAPgKAJQgKAJgNAAIgBAAg");
	this.shape.setTransform(3.5,85.9,0.974,0.974);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85D100").s().p("AgBApQgRgBgMgNQgLgNABgPQABgSANgLQANgLAPABQASABALANQALANgBAPQgBARgNALQgMALgPAAIgBAAg");
	this.shape_1.setTransform(11.8,77.5,0.974,0.974);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85D100").s().p("AgBAsQgSgBgNgOQgMgNABgRQABgSAOgMQANgNARABQASABAMAOQANANgBARQgBASgOANQgMALgRAAIgBAAg");
	this.shape_2.setTransform(21.6,67.9,0.974,0.974);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#85D100").s().p("AjcDcQgLgMgBgSQABgRALgMIF9l8QAOgMAQAAQASAAAMAMQALAMABARQgBARgLAMIl+F9QgNAMgQAAQgRAAgNgMg");
	this.shape_3.setTransform(52.3,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(7));

	// linea 1 copy
	this.instance_3 = new lib1.Tween4("synched",0);
	this.instance_3.setTransform(61.4,54.7);

	this.instance_4 = new lib1.Tween5("synched",0);
	this.instance_4.setTransform(61.4,54.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},3).to({_off:false},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},3).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,89.3);


// stage content:



(lib1.nosrocket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nube 1
	this.instance = new lib1.nube1();
	this.instance.setTransform(279.9,-53.4,1,1,0,0,0,50.6,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// nube 2
	this.instance_1 = new lib1.nube2();
	this.instance_1.setTransform(551.9,-44.7,1,1,0,0,0,60.9,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// nube 3
	this.instance_2 = new lib1.nube3();
	this.instance_2.setTransform(996.4,-64.7,1,1,0,0,0,86.1,63.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// rocket
	this.instance_3 = new lib1.Rocket();
	this.instance_3.setTransform(341.2,144.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// impulse
	this.instance_4 = new lib1.impulse();
	this.instance_4.setTransform(374.8,367.1,1,1,0,0,0,44.5,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// nube 4
	this.instance_5 = new lib1.nube4();
	this.instance_5.setTransform(1069.7,144.5,1,1,0,0,0,38.9,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(704.3,142.2,879.3,539.6);

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
