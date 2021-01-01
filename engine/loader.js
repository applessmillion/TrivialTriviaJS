(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [{name:"loader_atlas_", frames: [[0,0,256,768]]}];

// symbols:
(lib.loadingtile = function() {
	this.initialize(ss["loader_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.loadingtile();
	this.instance.setTransform(0,0,0.75,0.75);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,192,576), null);


// stage content:
(lib.loader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(128,384,1,1,0,0,0,128,384);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:96,regY:288,x:96,y:285.55},0).wait(1).to({y:283.1},0).wait(1).to({y:280.65},0).wait(1).to({y:278.2},0).wait(1).to({y:275.7},0).wait(1).to({y:273.25},0).wait(1).to({y:270.8},0).wait(1).to({y:268.35},0).wait(1).to({y:265.85},0).wait(1).to({y:263.4},0).wait(1).to({y:260.95},0).wait(1).to({y:258.5},0).wait(1).to({y:256},0).wait(1).to({y:253.55},0).wait(1).to({y:251.1},0).wait(1).to({y:248.65},0).wait(1).to({y:246.2},0).wait(1).to({y:243.7},0).wait(1).to({y:241.25},0).wait(1).to({y:238.8},0).wait(1).to({y:236.35},0).wait(1).to({y:233.85},0).wait(1).to({y:231.4},0).wait(1).to({y:228.95},0).wait(1).to({y:226.5},0).wait(1).to({y:224},0).wait(1).to({y:221.55},0).wait(1).to({y:219.1},0).wait(1).to({y:216.65},0).wait(1).to({y:214.2},0).wait(1).to({y:211.7},0).wait(1).to({y:209.25},0).wait(1).to({y:206.8},0).wait(1).to({y:204.35},0).wait(1).to({y:201.85},0).wait(1).to({y:199.4},0).wait(1).to({y:196.95},0).wait(1).to({y:194.5},0).wait(1).to({y:192},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:189.6},0).wait(1).to({y:187.2},0).wait(1).to({y:184.8},0).wait(1).to({y:182.4},0).wait(1).to({y:180},0).wait(1).to({y:177.6},0).wait(1).to({y:175.2},0).wait(1).to({y:172.8},0).wait(1).to({y:170.4},0).wait(1).to({y:168},0).wait(1).to({y:165.6},0).wait(1).to({y:163.2},0).wait(1).to({y:160.8},0).wait(1).to({y:158.4},0).wait(1).to({y:156},0).wait(1).to({y:153.6},0).wait(1).to({y:151.2},0).wait(1).to({y:148.8},0).wait(1).to({y:146.4},0).wait(1).to({y:144},0).wait(1).to({y:141.6},0).wait(1).to({y:139.2},0).wait(1).to({y:136.8},0).wait(1).to({y:134.4},0).wait(1).to({y:132},0).wait(1).to({y:129.6},0).wait(1).to({y:127.2},0).wait(1).to({y:124.8},0).wait(1).to({y:122.4},0).wait(1).to({y:120},0).wait(1).to({y:117.6},0).wait(1).to({y:115.2},0).wait(1).to({y:112.8},0).wait(1).to({y:110.4},0).wait(1).to({y:108},0).wait(1).to({y:105.6},0).wait(1).to({y:103.2},0).wait(1).to({y:100.8},0).wait(1).to({y:98.4},0).wait(1).to({y:96},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:93.6},0).wait(1).to({y:91.2},0).wait(1).to({y:88.8},0).wait(1).to({y:86.4},0).wait(1).to({y:84},0).wait(1).to({y:81.6},0).wait(1).to({y:79.2},0).wait(1).to({y:76.8},0).wait(1).to({y:74.4},0).wait(1).to({y:72},0).wait(1).to({y:69.6},0).wait(1).to({y:67.2},0).wait(1).to({y:64.8},0).wait(1).to({y:62.4},0).wait(1).to({y:60},0).wait(1).to({y:57.6},0).wait(1).to({y:55.2},0).wait(1).to({y:52.8},0).wait(1).to({y:50.4},0).wait(1).to({y:48},0).wait(1).to({y:45.6},0).wait(1).to({y:43.2},0).wait(1).to({y:40.8},0).wait(1).to({y:38.4},0).wait(1).to({y:36},0).wait(1).to({y:33.6},0).wait(1).to({y:31.2},0).wait(1).to({y:28.8},0).wait(1).to({y:26.4},0).wait(1).to({y:24},0).wait(1).to({y:21.6},0).wait(1).to({y:19.2},0).wait(1).to({y:16.8},0).wait(1).to({y:14.4},0).wait(1).to({y:12},0).wait(1).to({y:9.6},0).wait(1).to({y:7.2},0).wait(1).to({y:4.8},0).wait(1).to({y:2.4},0).wait(1).to({y:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:-2.4},0).wait(1).to({y:-4.8},0).wait(1).to({y:-7.2},0).wait(1).to({y:-9.6},0).wait(1).to({y:-12},0).wait(1).to({y:-14.4},0).wait(1).to({y:-16.8},0).wait(1).to({y:-19.2},0).wait(1).to({y:-21.6},0).wait(1).to({y:-24},0).wait(1).to({y:-26.4},0).wait(1).to({y:-28.8},0).wait(1).to({y:-31.2},0).wait(1).to({y:-33.6},0).wait(1).to({y:-36},0).wait(1).to({y:-38.4},0).wait(1).to({y:-40.8},0).wait(1).to({y:-43.2},0).wait(1).to({y:-45.6},0).wait(1).to({y:-48},0).wait(1).to({y:-50.4},0).wait(1).to({y:-52.8},0).wait(1).to({y:-55.2},0).wait(1).to({y:-57.6},0).wait(1).to({y:-60},0).wait(1).to({y:-62.4},0).wait(1).to({y:-64.8},0).wait(1).to({y:-67.2},0).wait(1).to({y:-69.6},0).wait(1).to({y:-72},0).wait(1).to({y:-74.4},0).wait(1).to({y:-76.8},0).wait(1).to({y:-79.2},0).wait(1).to({y:-81.6},0).wait(1).to({y:-84},0).wait(1).to({y:-86.4},0).wait(1).to({y:-88.8},0).wait(1).to({y:-91.2},0).wait(1).to({y:-93.6},0).wait(1).to({y:-96},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96,-288,96,864);
// library properties:
lib.properties = {
	id: 'A9DAC858D35727468AC33907A2E00579',
	width: 192,
	height: 192,
	fps: 60,
	color: "#00002D",
	opacity: 1.00,
	manifest: [
		{src:"images/loader_atlas_.png", id:"loader_atlas_"}
	],
	preloads: []
};

// bootstrap callback support:
(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A9DAC858D35727468AC33907A2E00579'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) { an.bootstrapListeners[j](id); }
}

an.getComposition = function(id) { return an.compositions[id]; }

an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
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
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;