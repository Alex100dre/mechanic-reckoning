app.ui={
	init: function(){
		
		this.$canvas=$("<div id='canvas' style='height:"+app.settings.canvas.height+"px; width:"+app.settings.canvas.width+"px; background-image:url("+app.settings.canvas.backgroundImage+") ; position:relative; overflow:hidden'></div>");
		this.$canvas.appendTo("body");
		this.$HS=$("<div id='highscore' style='height:"+app.settings.HS.height+"px; width:"+app.settings.HS.width+"px;background-image:url("+app.settings.HS.backgroundImage+"); position:absolute; left:"+app.settings.HS.left+"px ; top:"+app.settings.HS.top+"px ; opacity:0.75; font-size:60px; color:#00fff6;text-align: center;'></div>");
		this.$HS.appendTo("body");
		this.$score=$("<div id='score' style='height:"+app.settings.score.height+"px; width:"+app.settings.score.width+"px; background-image:url("+app.settings.score.backgroundImage+"); position:absolute; left:"+app.settings.score.left+"px ; top:"+app.settings.score.top+"px ; opacity:0.75; font-size:60px; color:#00fff6;text-align: center;'>SCORE</div>");
		this.$score.appendTo("body");
		this.$life=$("<div id='life' style='height:"+app.settings.life.height+"px; width:"+app.settings.life.width+"px; background-image:url("+app.settings.life.backgroundImage5+"); position:absolute; left:"+app.settings.life.left+"px ; top:"+app.settings.life.top+"px ; opacity:0.75; font-size:30px'>LIFE</div>");
		this.$life.appendTo("body");
	},
	highScore: function(){
		$('#highscore').append('HS : '+app.settings.listScore[0].value+'');
	},
	/**
	 *Rafrachissement des infos à l'ecran.
	*/
	update: function(){
		document.getElementById("score").innerHTML="SCORE : "+app.settings.score.value+"";
	},
	/**
	 *Detection de la fin du niveau.
	*/
	timer: function(){
		if(app.settings.timer<2000){
			app.settings.timer += 1;
		}else{
			app.ui.boss.descente();
			app.ui.boss.animation();
			if (app.ui.boss.letsgo==true) {
				app.ui.boss.move();
			};
		}
	}
};