/**
 *	图片加载
 */
function ImgsLoader(){
	this._imgs = new Array();
	this._imgLength = 0;
	this._progress = null;
	this._complete = null;
}
/**
 *	添加数组
 */
ImgsLoader.prototype.add = function(arr){
	this._imgs = this._imgs.concat(arr);
	this._imgLength = this._imgs.length;
}
/**
 *	过程
 */
ImgsLoader.prototype.onProgress = function(fun){
	this._progress = fun;
}
/**
 *	完毕
 */
ImgsLoader.prototype.onComplete = function(fun){
	this._complete = fun;
}
/**
 *	运行
 */
ImgsLoader.prototype.run = function(){
	this.load();
}
/**
 *	加载
 */
ImgsLoader.prototype.load = function(){
	
	if(this._imgs.length == 0){
		if(this._complete) this._complete();
		return;
	}
	//console.log(this._imgs);
	var image = new Image();
	var s = this;
	image.onload = function(e){
		if(s._progress){	
			var obj = new Object();
			obj.total = s._imgLength;
			obj.loaded = s._imgLength - s._imgs.length;
			obj.target = this;
			s._progress(obj);
		}
		s.load();
	};
	var url = this._imgs.splice(0, 1);
	image.src = url;
}
