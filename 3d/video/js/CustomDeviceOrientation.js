/**
 * @author richt / http://richt.me
 * @author WestLangley / http://github.com/WestLangley
 *
 * W3C Device Orientation control (http://w3c.github.io/deviceorientation/spec-source-orientation.html)
 */

THREE.CustomDeviceOrientation = function ( object ) {

	var scope = this;

	this.object = object;
	this.object.rotation.reorder( "YXZ" );

	this.enabled = true;

	this.deviceOrientation = {};
	this.screenOrientation = 0;
	
	var coords = new Array();
	var LIMIT_AVG = 30;
	
	var LIMIT_ANGLE = 60;
	var tmpBeta = 30;
	var tmpGamma = 30;

	var onDeviceOrientationChangeEvent = function ( event ) {

		scope.deviceOrientation = event;

	};

	var onScreenOrientationChangeEvent = function () {

		scope.screenOrientation = window.orientation || 0;

	};

	// The angles alpha, beta and gamma form a set of intrinsic Tait-Bryan angles of type Z-X'-Y''

	var setObjectQuaternion = function () {

		var zee = new THREE.Vector3( 0, 0, 1 );

		var euler = new THREE.Euler();

		var q0 = new THREE.Quaternion();

		var q1 = new THREE.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) ); // - PI/2 around the x-axis

		return function ( quaternion, alpha, beta, gamma, orient ) {
			euler.set( beta, alpha, - gamma, 'YXZ' );                       // 'ZXY' for the device, but 'YXZ' for us
			var q = new THREE.Quaternion();
			q.setFromEuler( euler );                               // orient the device
			q.multiply( q1 );                                      // camera looks out the back of the device, not the top
			q.multiply( q0.setFromAxisAngle( zee, - orient ) );    // adjust for screen orientation
			quaternion.set(q.x, q.y, q.z, q.w);
			
		}

	}();

	var avg = function(arr){
		var alpha = 0;
		var beta = 0;
		var gamma = 0;
		for(var k in arr){
			alpha += arr[k].alpha;
			beta += arr[k].beta;
			gamma += arr[k].gamma;
		}
		var params = {
			alpha: alpha/arr.length,
			beta: beta/arr.length,
			gamma: gamma/arr.length
		};
		var last = new Object();
		last.alpha = arr[arr.length - 1].alpha;
		last.beta = arr[arr.length - 1].beta;
		last.gamma = arr[arr.length - 1].gamma;
		for(var k in last){
			if(Math.abs(last[k] - params[k]) > LIMIT_AVG) params[k] = last[k];
		}
		return params;
	};


	this.connect = function() {

		onScreenOrientationChangeEvent(); // run once on load

		window.addEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
		window.addEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

		scope.enabled = true;

	};

	this.disconnect = function() {

		window.removeEventListener( 'orientationchange', onScreenOrientationChangeEvent, false );
		window.removeEventListener( 'deviceorientation', onDeviceOrientationChangeEvent, false );

		scope.enabled = false;

	};

	this.update = function () {

		if ( scope.enabled === false ) return;
		
		var isIos = /ip(?=od|ad|hone)/i.test(navigator.userAgent);
		if(!isIos){
			coords.push({
				alpha: scope.deviceOrientation.alpha||0,
				beta: scope.deviceOrientation.beta||0,
				gamma: scope.deviceOrientation.gamma||0
			});
			while(coords.length > 15){
				coords.shift();
			}
			scope.deviceOrientation = avg(coords);
			
		}
		
		/*
		if(Math.abs(scope.deviceOrientation.beta) + Math.abs(scope.deviceOrientation.gamma) < LIMIT_ANGLE){
			var origin = {
				alpha: scope.deviceOrientation.alpha,
				beta: tmpBeta,
				gamma: tmpGamma
			};
			scope.deviceOrientation = origin;
			//alert(tmpBeta +"/"+tmpGamma);
		}else{
			tmpBeta = scope.deviceOrientation.beta;
			tmpGamma = scope.deviceOrientation.gamma;
		}
		*/
		var alpha  = scope.deviceOrientation.alpha ? THREE.Math.degToRad( scope.deviceOrientation.alpha ) : 0; // Z
		var beta   = scope.deviceOrientation.beta  ? THREE.Math.degToRad( scope.deviceOrientation.beta  ) : 0; // X'
		var gamma  = scope.deviceOrientation.gamma ? THREE.Math.degToRad( scope.deviceOrientation.gamma ) : 0; // Y''
		var orient = scope.screenOrientation       ? THREE.Math.degToRad( scope.screenOrientation       ) : 0; // O

		setObjectQuaternion( scope.object.quaternion, alpha, beta, gamma, orient );

	};

	this.dispose = function () {

		this.disconnect();

	};

	this.connect();

};
