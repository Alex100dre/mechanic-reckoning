var app = {

	init: function(){
		this.ui.init();
		this.ui.level.init();
		this.ui.heros.init();
		this.ui.addRobot;
		this.ui.addRobot.init();
		this.ui.boss.init();
		this.engine.init();
		this.ui.dataScore.restoreScore();
		this.ui.dataScore.restoreName();
		this.ui.highScore();
		this.ui.dataScore.musique();
		this.ui.dataScore.sons();
	}
};