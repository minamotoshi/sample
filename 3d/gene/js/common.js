var game = null;
$(function($) {
	$("#loading").show();
	$("#config").hide();
	$("#info").hide();
	Gene.Preload.init();
	Gene.Preload.ready();
	Gene.Preload.load(progress, complete);
});

function progress(e){
	$("#loading").show();
	$("#loading").text(e.loaded*100 + "%");
}
function complete(e){
	$("#loading").hide();
	$("#config").show();
	game = new Gene.main($("#game")[0]);
	game.launch();
	game.addEventListener(Gene.Event.STAGE_CLEAR, stageClear);
	$("#config :button").on("click", function(e){gameStart()});
	$("#info :button").on("click", changePage);
	$("#game").hide();
}
function changePage (e) {
	if($("#game").css("display") == "none"){
		$("#game").show();
		$("#info").show();
		$("#config").hide();
	}else{
		$("#game").hide();
		$("#info").hide();
		$("#config").show();
	}
}
function stageClear (e) {
	
}
function gameStart () {
	$("#config").hide();
	$("#info").show();
	$("#game").show();
	
	game.setup($("#config textarea").val(), $("#gene_speed").val(), $("#gene_unit").val(), $("#scope_min").val(), $("#scope_max").val(), $("#scope_bj").val());
	game.start();
}