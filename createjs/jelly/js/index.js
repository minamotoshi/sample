/*
Copyright (c) 2014 Thom Chiovoloni (web: thomcc.io, github: github.com/thomcc)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(function() {

  "use strict";

  var COLOR_LINE = "rgba(243, 218, 131, 0.5)";
  var COLOR_FILL = "#ed8958";
  var COLOR_JELLY_DOT = "rgb(230, 90, 70)";
  var COLOR_ANCHOR_DOT = "rgba(152, 65, 52, 0.5)";
  var COLOR_MOUSE_FILL = "rgba(141, 46, 86, 0.5)";
  var COLOR_MOUSE_STROKE = "rgba(170, 60, 82, 0.5)";

  var SCALE = 50;
  var DOT_RADIUS = 6;
  var ANCHOR_STIFFNESS = 0.9;
  var ANCHOR_DAMP = 0.7;
  var MOUSE_FORCE = 5;
  var MOUSE_RADIUS = SCALE;

  var SIMULATION_RATE = 60;

  var XOFF = 1.5;
  var YOFF = 1.5;

  var MAX_ACROSS_NEIGHBOR_DIST = SCALE;
  
  var RANDOM_OFFSET = false;

  var POINTS = [
    [0, 0], [1, 0], [2, 0], [3, 0],
    [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1],
    [9, 2], [8, 2], [7, 2], [6, 2], [5, 2],
    [5, 3], [4, 3], [3, 3],
    [3, 4], [3, 5], [3, 6], [3, 7],
    [2, 7], [2, 6], [2, 5], [2, 4], [2, 3],
    [1, 3], [0, 3],
    [0, 2], [0, 1] // final [0, 0] is implicit
  ].map(function(xy) { 
    if (RANDOM_OFFSET) {
      xy[0] += Math.random()-0.5;
      xy[1] += Math.random()-0.5;
    }
    return [(xy[0] + XOFF) * SCALE, (xy[1] + YOFF) * SCALE];
  });

  function Vec2(x, y) { this.x = x; this.y = y; }
  Vec2.prototype.set = function(x, y) { this.x = x; this.y = y; return this; };
  Vec2.prototype.copy = function(v) { return this.set(v.x, v.y); };
  Vec2.prototype.translate = function(x, y) { return this.set(this.x + x, this.y + y); };
  Vec2.prototype.scale = function(v) { return this.set(this.x * v, this.y * v); };
  Vec2.prototype.distance = function(o) {
    var dx = this.x - o.x, dy = this.y - o.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  function JellyPoint(x, y) {
    this.pos = new Vec2(x, y);
    this.last = new Vec2(x, y);
    this.anchor = new Vec2(x, y);
    this.vel = new Vec2(0, 0);
    this.neighbors = [];
  }
  JellyPoint.prototype.addAcrossNeighbor = function(n) {
    this.addNeighbor(n, 1, 2);
  };

  JellyPoint.prototype.addNeighbor = function(n, c, s) {
    this.neighbors.push({
      pos: n.pos, vel: n.vel, dist: this.pos.distance(n.pos), compress: c, strength: s
    });
  };

  JellyPoint.prototype.setNeighbors = function(p, n) {
    this.addNeighbor(p, 30, 0.5);
  };

  JellyPoint.prototype.move = function(t, m) {
    if (m.down) {
      var dx = m.pos.x - this.pos.x;
      var dy = m.pos.y - this.pos.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_RADIUS) {
        this.vel.x -= dx * MOUSE_FORCE;
        this.vel.y -= dy * MOUSE_FORCE;
      }
    }
    this.vel.scale(ANCHOR_DAMP);
    var offx = (this.anchor.x - this.pos.x) * ANCHOR_STIFFNESS;
    var offy = (this.anchor.y - this.pos.y) * ANCHOR_STIFFNESS;
    this.vel.translate(offx, offy);
    var time = t * t * 0.5;
    var nx = this.pos.x + (this.pos.x - this.last.x) * 0.9 + this.vel.x * time;
    var ny = this.pos.y + (this.pos.y - this.last.y) * 0.9 + this.vel.y * time;
    this.last.copy(this.pos);
    this.pos.set(nx, ny);
  };

  JellyPoint.prototype.think = function() {
    for (var i = 0, len = this.neighbors.length; i < len; i++) {
      var n = this.neighbors[i];
      var dx = this.pos.x - n.pos.x;
      var dy = this.pos.y - n.pos.y;
      var d = Math.sqrt(dx * dx + dy * dy);
      var a = (n.dist - d) / d * n.strength;
      if (d < n.dist) {
        a /= n.compress;
      }
      var ox = dx * a;
      var oy = dy * a;
      this.vel.translate(+ox, +oy);
      n.vel.translate(-ox, -oy);
    }
  };

  function JellyIsland(pts) {
    this.points = [];
    for (var i = 0, ptslen = pts.length; i < ptslen; i++) {
      this.points.push(new JellyPoint(pts[i][0], pts[i][1]));
    }
    // fixme: finding across neighbors makes this O(n^2)
    for (var i = 0, len = this.points.length; i < len; i++) {
      var jp = this.points[i];
      var pi = i === 0 ? len-1 : i - 1;
      var ni = i === len-1 ? 0 : i + 1;
      jp.setNeighbors(this.points[pi], this.points[ni]);
      for (var j = 0; j < len; j++) {
        var ojp = this.points[j];
        if (ojp !== jp && ojp !== this.points[pi] && ojp !== this.points[ni]
            && jp.pos.distance(ojp.pos) <= MAX_ACROSS_NEIGHBOR_DIST) {
          jp.addAcrossNeighbor(ojp);
        }
      }
    }
  }
  
  JellyIsland.prototype.update = function(mouse) {
    var i, len = this.points.length;
    for (i = 0; i < len; i++) this.points[i].think();
    for (i = 0; i < len; i++) this.points[i].move(SIMULATION_RATE / 1000, mouse);
  };

  JellyIsland.prototype.wobble = function(amt) {
    for (var i = 0; i < this.points.length; ++i) {
      if (Math.random() < 0.5) continue;
      var dx = amt * (Math.random()-0.5) * SCALE;
      var dy = amt * (Math.random()-0.5) * SCALE;
      this.points[i].pos.translate(dx, dy);
    }
  }
  
  function DrawOption(elem) {
    this.value = !!elem.checked;
    var self = this;
    elem.onclick = function() {
      self.value = !!this.checked;
      this.parentNode.setAttribute('data-active', self.value?"1":"0");
    };
  }

  function DrawOptions() {
    this.drawAnchors = new DrawOption(document.getElementById('draw-anchors'));
    this.drawJellies = new DrawOption(document.getElementById('draw-jellies'));
    this.drawMouse = new DrawOption(document.getElementById('draw-mouse'));
    this.drawOutline = new DrawOption(document.getElementById('draw-outline'));
    this.drawCurvy = new DrawOption(document.getElementById('draw-curvy'));
  }

  DrawOptions.prototype.shouldDrawAnchors = function() { return this.drawAnchors.value; };
  DrawOptions.prototype.shouldDrawJellies = function() { return this.drawJellies.value; };
  DrawOptions.prototype.shouldDrawMouse = function() { return this.drawMouse.value; };
  DrawOptions.prototype.shouldDrawOutline = function() { return this.drawOutline.value; };
  DrawOptions.prototype.shouldDrawCurvy = function() { return this.drawCurvy.value; };

  function Screen(view) {
    this.dImg = this.cacheDotImg(COLOR_JELLY_DOT);
    this.aImg = this.cacheDotImg(COLOR_ANCHOR_DOT);
    this.view = view;
    this.ctx = this.view.getContext('2d');
    this.ctx.lineWidth = 4;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.opts = new DrawOptions();
  }

  Screen.prototype.cacheDotImg = function(color) {
    var c = document.createElement('canvas');
    c.width = (DOT_RADIUS+5)*2;
    c.height = (DOT_RADIUS+5)*2;
    var x = c.getContext('2d');
    x.lineWidth = 3;
    x.lineCap = 'round';
    x.lineJoin = 'round';
    x.strokeStyle = color;
    x.beginPath();
    x.arc(DOT_RADIUS+5, DOT_RADIUS+5, DOT_RADIUS, 0, Math.PI*2, true);
    x.stroke();
    return c;
  };

  Screen.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.view.width, this.view.height);
  };

  Screen.prototype.drawDots = function(jellies, which, img) {
    for (var i = 0, len = jellies.length; i < len; i++) {
      this.ctx.drawImage(img, jellies[i][which].x-img.width/2, jellies[i][which].y-img.height/2, img.width, img.height);

//      this.ctx.beginPath();
//      this.ctx.arc(jellies[i][which].x, jellies[i][which].y, DOT_RADIUS, 0, Math.PI * 2, true);
//      this.ctx.stroke();
    }
  };

  Screen.prototype.curveBetween = function(p0, p1) {
    this.ctx.quadraticCurveTo(p0.x, p0.y, (p0.x+p1.x) * 0.5, (p0.y+p1.y) * 0.5);
  };

  Screen.prototype.outlineCurvePath = function(jellies) {
    this.ctx.beginPath();
    this.ctx.moveTo(jellies[0].pos.x, jellies[0].pos.y);
    for (var i = 0, jlen=jellies.length; i <= jlen; ++i) {
      var p0 = jellies[i+0 >= jlen ? i+0-jlen : i+0].pos;
      var p1 = jellies[i+1 >= jlen ? i+1-jlen : i+1].pos;
      this.ctx.quadraticCurveTo(p0.x, p0.y, (p0.x+p1.x) * 0.5, (p0.y+p1.y) * 0.5)
    }
  };

  Screen.prototype.outlineSolidPath = function(jellies) {
    this.ctx.beginPath();
    this.ctx.moveTo(jellies[0].pos.x, jellies[0].pos.y);
    for (var idx = 1, jlen = jellies.length; idx < jlen; ++idx)
      this.ctx.lineTo(jellies[idx].pos.x, jellies[idx].pos.y);
    this.ctx.closePath();
  };

  Screen.prototype.drawIsland = function(island) {
    var jellies = island.points;
    var jlen = jellies.length;
    this.ctx.fillStyle = COLOR_FILL;
    var curvy = this.opts.shouldDrawCurvy();
    if (curvy) {
      this.outlineCurvePath(jellies);
      this.ctx.fill();
    }

    var outline = this.opts.shouldDrawOutline();
    if (outline || !curvy) {
      if (outline) this.ctx.strokeStyle = COLOR_LINE;
      this.outlineSolidPath(jellies);
      if (outline) this.ctx.stroke();
      if (!curvy) this.ctx.fill();
    }

    if (this.opts.shouldDrawAnchors()) this.drawDots(jellies, 'anchor', this.aImg);
    if (this.opts.shouldDrawJellies()) this.drawDots(jellies, 'pos', this.dImg);
  };

  Screen.prototype.drawMouse = function(m) {
    if (!this.opts.shouldDrawMouse() || !m.down) return;
    this.ctx.fillStyle = COLOR_MOUSE_FILL;
    this.ctx.strokeStyle = COLOR_MOUSE_STROKE;
    this.ctx.beginPath();
    this.ctx.arc(m.pos.x, m.pos.y, MOUSE_RADIUS, 0, Math.PI * 2, true);
    this.ctx.stroke();
    this.ctx.fill();
  };

  function Mouse(canvas) {
    this.pos = new Vec2(0, 0);
    this.down = false;

    var self = this;
    canvas.onmousemove = function(e) {
      var r = canvas.getBoundingClientRect();
      self.pos.set(e.clientX - r.left, e.clientY - r.top);
      return e.preventDefault();
    };
    canvas.onmouseup = function(e) {
      self.down = false;
      return e.preventDefault();
    };
    canvas.onmousedown = function(e) {
      self.down = true;
      var r = canvas.getBoundingClientRect();
      self.pos.set(e.clientX - r.left, e.clientY - r.top);
      return e.preventDefault();
    };
  }


  var animationFrame = window.requestAnimationFrame ||
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame ||
                       window.oRequestAnimationFrame ||
                       window.msRequestAnimationFrame ||
                       function (callback) { window.setTimeout(callback, 1000 / 60); };


  function JellyDemo(canvas, points) {
    this.canvas = canvas;
    this.canvasCtx = this.canvas.getContext('2d');
    this.buffer = this.createBuffer(this.canvas);
    this.screen = new Screen(this.buffer);
    this.island = new JellyIsland(points);
    this.mouse = new Mouse(this.canvas);
    this.tick = JellyDemo.prototype.tick.bind(this);
    this.fps = document.getElementById('fps');
    this.fps.onclick = (function() { 
      this.island.wobble(0.1);
      return false; 
    }).bind(this)
  }

  JellyDemo.prototype.createBuffer = function(canvas) {
    var buffer = document.createElement('canvas');
    buffer.width = canvas.width;
    buffer.height = canvas.height;
    return buffer;
  };

  JellyDemo.prototype.update = function() {
    this.island.update(this.mouse);
  };

  JellyDemo.prototype.render = function() {
    this.screen.clear();
    this.screen.drawIsland(this.island);
    this.screen.drawMouse(this.mouse);
    this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvasCtx.drawImage(this.buffer, 0, 0, this.buffer.width, this.buffer.height);
  };

  JellyDemo.prototype.stop = function() {
    this.running = false;
  };

  JellyDemo.prototype.start = function() {
    this.lastTick = new Date().getTime();
    this.lastPrint = new Date().getTime();
    this.running = true;
    this.island.wobble(0.1);
    this.tick();
  };

  JellyDemo.prototype.tick = function() {
    if (!this.running) return;
    var current = new Date().getTime();
    var fps = 1000/(current-this.lastTick);
    var needed = (SIMULATION_RATE/1000)*(current-this.lastTick);
    while (needed-- >= 0) {
      this.update();
    }
    this.lastTick = current; // new Date().getTime();
    animationFrame(this.tick);
    this.render();

    if (current-this.lastPrint > 250) {
      fps = Math.floor(fps*100)/100;
      this.fps.innerHTML = fps+" fps";
      this.lastPrint = current;
    }

  };
  

  function main() {
    var demo = new JellyDemo(document.getElementById('screen'), POINTS);
    demo.start();
  };

  main();

}());