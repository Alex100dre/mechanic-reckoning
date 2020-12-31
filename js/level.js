app.ui.level={
	speed_wall:app.settings.speed_level,
	left_wall:app.settings.left_wall,
	right_wall:app.settings.right_wall,
	left_wall1:app.settings.left_wall1,
	right_wall1:app.settings.right_wall1,
	canvas:app.settings.canvas,
	compteur:0,
	init: function(){
	
		this.$murgauche=$("<div id='left0' style='height:"+this.left_wall.height+"px; width:"+this.left_wall.width+"px; background-image:url("+this.left_wall.backgroundImage+");background-position:"+this.left_wall.backposX+"px "+this.left_wall.backposY+"px ;top:"+this.left_wall.posY+"px ; left:"+this.left_wall.posX+"px ; position:absolute;webkit-transform: translate3d(0,0,0);'></div>");
		this.$murgauche.appendTo("#canvas");

		this.$murdroite=$("<div id='right0' style='height:"+this.right_wall.height+"px; width:"+this.right_wall.width+"px; background-image:url("+this.right_wall.backgroundImage+");background-position:"+this.right_wall.backposX+"px "+this.right_wall.backposY+"px ; top:"+this.right_wall.posY+"px ; left:"+this.right_wall.posX+"px ; position:absolute;webkit-transform: translate3d(0,0,0);'></div>");
		this.$murdroite.appendTo("#canvas");


		this.$murgauche1=$("<div id='left1' style='height:"+this.left_wall1.height+"px; width:"+this.left_wall1.width+"px; background-image:url("+this.left_wall1.backgroundImage+");background-position:"+this.left_wall1.backposX+"px "+this.left_wall1.backposY+"px ; top:"+this.left_wall1.posY+"px ; left:"+this.left_wall1.posX+"px ; position:absolute;webkit-transform: translate3d(0,0,0);'></div>");
		this.$murgauche1.appendTo("#canvas");

		this.$murdroite1=$("<div id='right1' style='height:"+this.right_wall1.height+"px; width:"+this.right_wall1.width+"px; background-image:url("+this.right_wall1.backgroundImage+");background-position:"+this.right_wall1.backposX+"px "+this.right_wall1.backposY+"px ; top:"+this.right_wall1.posY+"px ; left:"+this.right_wall1.posX+"px ; position:absolute;webkit-transform: translate3d(0,0,0);'></div>");
		this.$murdroite1.appendTo("#canvas");
	},
	move:function(){

		this.left_wall.posY+=this.speed_wall;
		this.left_wall1.posY+=this.speed_wall;
			$("#left0").css("top",this.left_wall.posY+"px");
			$("#left1").css("top",this.left_wall1.posY+"px");
		this.right_wall.posY+=this.speed_wall;
		this.right_wall1.posY+=this.speed_wall;
			$("#right0").css("top",this.right_wall.posY+"px");
			$("#right1").css("top",this.right_wall1.posY+"px");
		if (this.left_wall.posY>=1024) {
			this.left_wall.posY=-1176;
		};
		if (this.left_wall1.posY>=1024) {
			this.left_wall1.posY=-1176;
		};
		if (this.right_wall.posY>=1024) {
			this.right_wall.posY=-1176;
		};
		if (this.right_wall1.posY>=1024) {
			this.right_wall1.posY=-1176;
		};
	}
};