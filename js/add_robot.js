app.ui.addRobot={
	robotList : [],
	robot:app.settings.robot,
	nbrerobots:app.settings.nbrerobots,
	robotbackgroundpos:app.settings.robotbackground,
	initposX:0,
	initposY:0,
	init : function(){
		for (var i = 0; i < this.nbrerobots; i++) {
			this.initposY  =  Math.floor(Math.random()*-app.settings.canvas.height*1.5)-100;	
			this.initposX =  Math.floor((Math.random()*(app.settings.canvas.width-(app.settings.left_wall.width+app.settings.right_wall.width+app.settings.robot.width)))+app.settings.left_wall.width);	
	
			var coefspeed = Math.random()+0.60;
			var rangdhomme=Math.round(Math.random()*4);
			this.robot.backposX=this.robotbackgroundpos[rangdhomme].x;
			this.robot.backposY=this.robotbackgroundpos[rangdhomme].y;
			this.robotList[i] = new app.ui.Robot(this.robot.width,this.robot.height,this.initposX,this.initposY,this.robot.speed,coefspeed,this.robot.backposX,this.robot.backposY); 
			// Robot (width,height,pos_x,pos_y,speed)			
			var $robot=$("<div class='robot' id='robot"+i+"' style='height:"+this.robot.height+"px; width:"+this.robot.width+"px; top:"+this.initposY+"px; left:"+this.initposX+"px; background-image:url("+this.robot.backgroundImage+");background-position:"+this.robot.backposX+"px "+this.robot.backposY+"px ; position:absolute;webkit-transform: translate3d(0,0,0);'></div>");
			$robot.appendTo("#canvas");
			this.robotList[i].$robot = $robot;			
		}
	},

}