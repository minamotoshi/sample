var config = {
	stageId: 'gameView', // 用于创建canvas动画的div标签id号
	fps: 60, // 帧播放频率
	pixel: 30, // 每个方块是正方形，边长的像素值
	rows: 15, // 行数，竖着可以叠rows个方块
	cols: 10, // 列数，横着可以放cols个方块
	manifest: [{ // 预加载资源，做动画一般选择把资源全部加载完再开始部署场景
		id: "bg",
		src: "images/bg.jpg"
	}
	// , {
	// 	id: "mp3",
	// 	src: "assets/陈小春 - 神啊救救我.mp3"
	// }
	
	]
};