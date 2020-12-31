app.ui.animationrobots={
	compteur:0,
	init: function(robot){
		this.compteur++;
		if (this.compteur==7) {
			if (robot.explosion!=true) {
				this.steady(robot);
			}else{
				this.explosion(robot);
			}
			this.compteur=0;
		};
		
	},
	steady: function(robot){
		var newposX=robot.backposX+robot.anim;
		robot.anim-=140;
		if (robot.anim<-1260) {
			robot.anim=-140;
			newposX=robot.backposX+robot.anim;
		}
		robot.$robot.css("backgroundPosition",newposX+"px "+robot.backposY+"px");
		
	},
	explosion: function(robot){
		var newposY= robot.backposY-145;
		var newposX=robot.backposX+robot.anim2;
		robot.anim2-=140;
		if (robot.anim2<-1260) {
			var tableaupos=app.settings.robotbackground;
			var rangdhomme=Math.round(Math.random()*4);
			robot.backposX=tableaupos[rangdhomme].x;
			robot.backposY=tableaupos[rangdhomme].y;
			robot.posY = Math.floor(Math.random()*-app.settings.canvas.height*1.5)-100;
			robot.posX = Math.floor((Math.random()*(app.settings.canvas.width-(app.settings.left_wall.width+app.settings.right_wall.width+app.settings.robot.width)))+app.settings.left_wall.width); 	
			$(robot.$robot).css("top",robot.posY+"px");
			$(robot.$robot).css("left",robot.posX+"px");
			robot.anim2=-140;
			robot.explosion=false;
		}
		robot.$robot.css("backgroundPosition",newposX+"px "+newposY+"px");
		
	},
}