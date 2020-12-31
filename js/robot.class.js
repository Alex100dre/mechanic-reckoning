(function(context){
	function Robot (width,height,posX,posY,speed,coefspeed,backposX,backposY){
		this.width     = width;
		this.height    = height;
		this.posX      = posX;
		this.posY      = posY;
		this.speed     = speed;
		this.coefspeed = coefspeed;
		this.backposX  = backposX;
		this.backposY  = backposY;
		this.$robot;
		this.anim	   = -140;
		this.anim2	   = -140;
		this.explosion = false;
	}
	Robot.prototype = {
		clint:app.ui.heros.clint,
		move: function(){
			this.posY += this.speed*this.coefspeed;
			$(this.$robot).css("top",this.posY+"px");
			if (this.posY>=1050) {
				this.posY = Math.floor(Math.random()*-app.settings.canvas.height*1.5)-100;
				this.posX = Math.floor((Math.random()*(app.settings.canvas.width-(app.settings.left_wall.width+app.settings.right_wall.width+app.settings.robot.width)))+app.settings.left_wall.width); 	
				$(this.$robot).css("top",this.posY+"px");
				$(this.$robot).css("left",this.posX+"px");
			}
			if (this.clint.posX>this.posX-this.clint.width && this.clint.posX<this.posX+this.width) {
				if (this.clint.posY>this.posY-this.clint.height && this.clint.posY<this.posY+this.height) {
		        	
		        	//----- son
		        	if (app.settings.sons==true) {document.getElementById("bomb").play();};
		        	
					
					this.explosion=true;
					if(app.settings.score.combo==true){
						app.settings.score.value+=20;
					}else{
						app.settings.score.value+=10;
					}
					app.settings.score.combo=true;
				};
			};
			//---- animation des robots
			app.ui.animationrobots.init(this);

		},
	};
	context.Robot = Robot;
})(app.ui);