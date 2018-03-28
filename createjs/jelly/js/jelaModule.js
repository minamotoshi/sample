import Mouse from './Mouse';
import Dot from './jellydot';
import Ball from './ball';
import SvgParse from "./SvgParse";

export default class Jelateria {
	constructor(opts){
		// console.log(opts);
		// this.optmize = optim;
		this.canvas = document.getElementById(opts.canvas);
		this.ctx = this.canvas.getContext('2d');
		this.paths = opts.paths;
		this.islands = [];
		this.radius = opts.radius || 50;
		this.m = new Mouse(this.canvas);
		this.parsePaths();
		this.paused = true;
		this.centerBall = new Ball(this.radius,'transparent');
		this.draw();

		let style = window.getComputedStyle(this.canvas);
		this.height = parseInt(style.height);
		this.width = parseInt(style.width);
		this.time = 0;

		this.tick();
	}

	parsePaths(){
		this.paths.forEach(path=>{
			let island = {};
			island.dots = [];
			
				SvgParse(
					path.path,
					path.points,
					path.offsetX,
					path.offsetY,
					path.scale,
					path.strokeFlag,
					path.speedIsland,
					path.motion,
					path.backlash,
					path.route
					).forEach( dot=> {
					island.dots.push(new Dot(dot[0],dot[1],this.radius));
				})

			island.color = path.color;
			island.float = path.float;
			island.speedIsland = path.speedIsland;
			island.strokeFlag = path.strokeFlag || false;
			island.motion = path.motion || false;
			island.backlash = path.backlash || 0;
			island.route = path.route || null;
			this.buildNeighbours(island.dots);
			this.islands.push(island);
		});
	}

	floatEffect(island){
		//
		let amplitude = island.float;
		let motion = island.motion;
		let speed = island.speedIsland;
		let backlash = island.backlash;
		let route = island.route;
		island.dots.forEach(dot=>{
			// console.log(dot);
			if(parseInt(dot.x)-parseInt(dot.originalX)>0){
			// console.log(parseInt(dot.x),parseInt(dot.originalX),'ints');
			}

			if(parseInt(dot.x)==parseInt(dot.originalX) && parseInt(dot.y)==parseInt(dot.originalY)  ){
				// dot.vx = 10;

				// console.log(this.time);
				// dot.x = dot.originalX;
				// console.log(dot);
				// console.log('runme');
				dot.floatMe(amplitude + amplitude*Math.random()*2);
				if (motion) {

      				// console.log(island.motion);
					dot.floatMotion(motion, speed, backlash, route);
				}

			}

		})
	}

	buildNeighbours(dots){
		for (var i = 0, len = dots.length; i < len; i++) {
		  var jp = dots[i];
		  var pi = i === 0 ? len - 1 : i - 1;
		  var ni = i === len - 1 ? 0 : i + 1;
		  jp.setNeighbors(dots[pi], dots[ni]);
		  // console.log(dots[pi], dots[ni],pi,ni);
		  for (var j = 0; j < len; j++) {
		    var ojp = dots[j];
		    var curdist = Math.sqrt((ojp.x - jp.x)*(ojp.x - jp.x) + (ojp.y - jp.y)*(ojp.y - jp.y));
		    if (
		      ojp !== jp && ojp !== dots[pi] && ojp !== dots[ni] &&
		        curdist <= 30
		    ) {
		      jp.addAcrossNeighbor(ojp);
		    }
		  }
		}
	}

	ConnectDots(island){
		let dots = island.dots;

		if ( island.strokeFlag ) {
			this.ctx.beginPath();
			this.ctx.moveTo(dots[0].x, dots[0].y);

			let i = 1;
			for (i = 1; i < dots.length - 2; i++) {
				var xc = (dots[i].x + dots[i + 1].x) / 2;
				var yc = (dots[i].y + dots[i + 1].y) / 2;
				this.ctx.quadraticCurveTo(dots[i].x, dots[i].y, xc, yc);
			}
			this.ctx.quadraticCurveTo(dots[i].x, dots[i].y, dots[i+1].x,dots[i+1].y);
			this.ctx.quadraticCurveTo(dots[i+1].x, dots[i+1].y, dots[0].x,dots[0].y);

			this.ctx.strokeStyle = island.color;
			this.ctx.stroke();
		}
		else {
			this.ctx.beginPath();

				for (var i = 0, jlen = dots.length; i <= jlen; ++i) {
				  var p0 = dots[i + 0 >= jlen ? i + 0 - jlen : i + 0];
				  var p1 = dots[i + 1 >= jlen ? i + 1 - jlen : i + 1];
				  this.ctx.quadraticCurveTo(
				    p0.x,
				    p0.y,
				    (p0.x + p1.x) * 0.5,
				    (p0.y + p1.y) * 0.5
				  );
				}

			this.ctx.closePath();
			this.ctx.fillStyle= island.color;
			this.ctx.fill();
		}

	}

	draw(){

		this.ctx.clearRect(0,0,this.width,this.height);

		// mouse draw
		this.centerBall.x = this.m.pos.x;
		this.centerBall.y = this.m.pos.y;
		this.centerBall.draw(this.ctx);
		// end

		this.islands.forEach(island=>{
			this.floatEffect(island);
			island.dots.forEach(dot=>{
				dot.think();
			})
			island.dots.forEach(dot=>{
				dot.move(this.m);
				dot.draw(this.ctx);
				dot.drawAnchor(this.ctx);
			})
			this.ConnectDots(island);
		});
		// cancelAnimationFrame(this.fr);
	}

	tick(){
		if (!this.paused) {
			this.time++;
		    this.draw();
		}
		// this.fr = window.requestAnimationFrame(this.tick.bind(this));
	}

	pause(){
		this.paused = true;
	}
	play(){
		this.paused = false;
	}

}



// WEBPACK FOOTER //
// src/js/lib/jelaModule.js