var TMChevrolet = {};
TMChevrolet.netError = {
	"code": 108,
	"message": "网络繁忙,请稍后重试"
};

/**
 * web QQ 登录接口
 */
function QQLogin(callback)
{
	if (!Act.ptlogin.isLogin()) {
		if(typeof(callback) == "undefined"){
			Act.ptlogin.login();
			return false;
		}else{
			Act.ptlogin.login({'callback':eval(callback)});
		}
	}
	return true;
}

/**
 * mobile QQ 登录接口
 * url: 回调跳转的URL地址
 */
function MobileQQLogin(s_url)
{
	if(QQIsLogin()){
		window.location.href=s_url;
	}else{
		if(!s_url){
			s_url = window.location.href;
		}
		window.location.href = 'http://ui.ptlogin2.qq.com/cgi-bin/login?style=8&appid=4007203&s_url=' + s_url + '&low_login=0&hln_css=http://appmedia.qq.com/media/jslib/1.5/res/ptlogin/pic_s.png&hide_close_icon=0';
	}
}

/**
 * 获取QQ 账号
 * @return int
 */
function getQQNumber(){
	if (QQIsLogin()) {
		return Act.ptlogin.getQQNum();
	}
	return 0;
}

/**
 * QQ是否登录
 * @return BOOLEAN
 */
function QQIsLogin(){
	if (Act.ptlogin.isLogin()) {
		return true;
	}
	return false; //未登录
}

/*
 *作品列表接口
 * {
 *	"code":0->成功
 *  "message":"描述信息",
 *  "data":
 *  [
 *       {"FFileId":"1053","FUserNick":"Jerome","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
 *                   {"FFileId":"1052","FUserNick":"Jerome2","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
 *                   {"FFileId":"1051","FUserNick":"Jerome3","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
 *                   {"FFileId":"1050","FUserNick":"Jerome4","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
 *                   {"FFileId":"1049","FUserNick":"Jerome5","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
 *                   {"FFileId":"1048","FUserNick":"Jerome6","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"}
 *   ],
 *}
 *获取1到100个作品按上传时间由近到远排序，
 *FUserNick:上传作品用户的QQ昵称
 *votes:作品点赞数
 * */
TMChevrolet.FGetWorkFileList = function(callback){
	if (typeof (callback) === 'function') {
		var retjson={
			"code":0,
			"message":"操作成功",
			"data":{"WorkFileList":
				[
					{"FFileId":"1053","FUserNick":"Jerome","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
					{"FFileId":"1052","FUserNick":"Jerome2","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
					{"FFileId":"1051","FUserNick":"Jerome3","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
					{"FFileId":"1050","FUserNick":"Jerome4","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
					{"FFileId":"1049","FUserNick":"Jerome5","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
					{"FFileId":"1048","FUserNick":"Jerome6","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"}
				]
			}
		}
		callback(retjson);
	} else {
		callback(TMChevrolet.netError);
	}
};
/*
 *保存作品上传接口
 * base64str:图片数据流
 * 接口调用成功返回值：
 * { "code":"0"表示成功,
 *	        "108":网络繁忙,请稍后重试
 *  "message":'操作成功'
 * }
 * */
TMChevrolet.FSaveWorkUpload= function(callback,base64str){
	if(typeof (callback) == 'function'){
		/*
		var retjson = {
			"code":'0',
			"message":'操作成功',
			"data":{
				"FFileId":'1024',
				"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"
			}
		};
		callback(retjson);
		*/
		var params = new Object();
		params.img = base64str;
		$.ajax({
			type: "POST",
			url: "ajax/upload.php",
			data: params,
			dataType: "json",
			success: function(obj){
				callback(obj);
			}
		});
	}else{
		callback(TMChevrolet.netError);
	}
}
/*
 *抽奖接口
 *awardscard：表示是否中奖的标志。0表示未中奖。其他已中奖
 *
 */
TMChevrolet.FDrawLottery = function(callback){
	if(typeof (callback) == 'function'){
		var retjson = {
			"code":'0',
			"message":'操作成功',
			"data":{
				"awardscard":"0"
			}
		}
		callback(retjson);
	}else{
		callback(TMChevrolet.netError);
	}
}

/*
 *
 *作品点赞功能
 *ffiled:作品ID
 *votes:表示点赞后作品的点赞数
 *votefrom:点赞来源
 */
TMChevrolet.FWorkVotes = function(callback,ffiled,votefrom){
	if(typeof (callback) == 'function'){
  	var retjson={
			"code":0,
			"message":"操作成功",
			"data":{"votes":"1025"}
		}
		callback(retjson);
	}else{
		callback(TMChevrolet.netError);
	}
}

/*
 *个人作品展示
 *
 */
TMChevrolet.FGetUserWorklistByuin = function(callback){
	if(typeof (callback) == 'function'){
		var retjson={
	    "code":0,
	    "message":"操作成功",
	    "data":{"userWorkFileList":
				[
		      {"FFileId":"1053","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
		      {"FFileId":"1052","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
		      {"FFileId":"1051","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
		      {"FFileId":"1050","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
		      {"FFileId":"1049","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"},
		      {"FFileId":"1048","votes":100,"FUrl":"http://shp.qpic.cn/app_actsec/20d93826f59f7bc5cdeb43a69aceb2c4cb13c4db36f826dfb8a40aa1971993a26bdc76105621ec737e96a2e6c08faffb/200"}
				]
			}
		}
		callback(retjson);
	}else{
		callback(TMChevrolet.netError);
	}
}
/*
 *分享接口
 *接口返回值描述
 *  share_title:分享给朋友标题
 	share_summary：分享给朋友内容
 	share_content:分享到朋友圈标题
 	share_img：分享的图片
 * }
 */
function FWechatInitShare(share_title,share_summary,share_content,share_img){
	//微信分享
	var siteUrl = "http://v.qq.com/"; 
	var share_obj = {
		share_title: share_title,
		share_summary: share_summary,
		share_content: share_content,
		share_img: siteUrl+share_img,
		share_url: siteUrl
	};
	// 右上角分享
	h5e.share.init(share_obj);
}
