app.ui.heros={
	speed_wall:app.settings.speed_level,
	clint:app.settings.clint,
	grappin:app.settings.grappin,
	gripped:app.settings.gripped,
	arrival:app.settings.arrival,
	falldown:app.settings.falldown,
	coeffalldown:app.settings.coeffalldown,
	init: function(){
	
		this.$heros=$("<div id='clint' style='height:"+this.clint.height+"px; width:"+this.clint.width+"px; background-image:url("+this.clint.backgroundImage+");background-position:"+this.clint.backposX+"px "+this.clint.backposY+"px ; top:"+this.clint.posY+"px ; left:"+this.clint.posX+"px ; position:absolute;z-index:100;webkit-transform: translate3d(0,0,0);'></div>");
		this.$heros.appendTo("#canvas");
		$grip=$("<div id='gripped' style='height:60px; width:60px; background-image:url("+this.grappin.backgroundImage+");background-position:"+this.grappin.backposX+"px "+this.grappin.backposY+"px ; top:-200px ; left:-200px ; position:absolute; z-index:10; webkit-transform: translate3d(0,0,0);'></div>");
		$grip.appendTo("#canvas");
	},
	//mouvement automatique de descente(pour que sa vitesse dedescente soit synchronisée avec celle des batiments)
	move_auto:function(){
		this.clint.posY+=this.speed_wall;
		$("#clint").css("top",this.clint.posY+"px");
		if (app.ui.grappin.grappin==true) {
			this.gripped.posY+=this.speed_wall;
			this.arrival.posY+=this.speed_wall;
			$("#gripped").css("top",this.gripped.posY+"px");
		};
		if (this.clint.posX>(app.settings.left_wall.width-100) && (this.clint.posX+this.clint.width)<(app.settings.canvas.width-app.settings.right_wall.width+100)) {

			this.falldown+=this.coeffalldown;
			this.clint.posY+=this.falldown;
		};
	},
	left_wall:function(e){
		app.settings.score.combo=false;
		this.arrival.posX=45;
		this.arrival.posY=e.y-this.clint.height*0.5;
		this.gripped.posX=70;
		this.gripped.posY=e.y-20;
		if (app.ui.grappin.gripped==false) {
			$("#gripped").css("top",this.gripped.posY+"px");
			$("#gripped").css("left",this.gripped.posX+"px");
			app.ui.grappin.gripped=true;
		}

	},
	right_wall:function(e){
		app.settings.score.combo=false;
		this.arrival.posX=633;
		this.arrival.posY=e.y-this.clint.height*0.5;
		this.gripped.posX=658;
		this.gripped.posY=e.y-20;
		if (app.ui.grappin.gripped==false) {
			$("#gripped").css("top",this.gripped.posY+"px");
			$("#gripped").css("left",this.gripped.posX+"px");
			app.ui.grappin.gripped=true;
		}
	},
	shoot:function(e){
		this.arrival.posX=e.x-this.clint.width*0.5;
		this.arrival.posY=e.y-this.clint.height*0.5;
		this.gripped.posX=e.x;
		this.gripped.posY=e.y;
		$("#gripped").css("top",this.gripped.posY+"px");
		$("#gripped").css("left",this.gripped.posX+"px");
		app.ui.grappin.grapshoot=true;
	},
	move:function(){
		this.gripped.posY+=this.speed_wall;
		this.arrival.posY+=this.speed_wall;
		$("#gripped").css("top",this.gripped.posY+"px");
		if (app.ui.grappin.grapshoot==true) {
			this.moveontarget();
		};
		if (app.ui.grappin.gripped==true ) {
			this.moveontarget();
		};
	},
	moveontarget:function(){
		if (this.clint.posY>this.arrival.posY) {
			if(this.clint.posX<this.arrival.posX){
				this.clint.posY-=this.clint.speed*Math.sin(Math.atan((this.clint.posY-this.arrival.posY)/(this.arrival.posX-this.clint.posX)));
				$("#clint").css("top",this.clint.posY+"px");
			}else{
				this.clint.posY-=this.clint.speed*Math.sin(Math.atan((this.clint.posY-this.arrival.posY)/(this.clint.posX-this.arrival.posX)));
				$("#clint").css("top",this.clint.posY+"px");
			}
		}
		if(this.clint.posY<this.arrival.posY){
			if(this.clint.posX<this.arrival.posX){
				this.clint.posY+=this.clint.speed*Math.sin(Math.atan((this.arrival.posY-this.clint.posY)/(this.arrival.posX-this.clint.posX)));
				$("#clint").css("top",this.clint.posY+"px");
			}else{
				this.clint.posY+=this.clint.speed*Math.sin(Math.atan((this.arrival.posY-this.clint.posY)/(this.clint.posX-this.arrival.posX)));
				$("#clint").css("top",this.clint.posY+"px");
			}
		}
		if(this.clint.posX<this.arrival.posX){
			if (this.clint.posY>this.arrival.posY) {
				this.clint.posX+=this.clint.speed*Math.cos(Math.atan((this.clint.posY-this.arrival.posY)/(this.arrival.posX-this.clint.posX)));
				$("#clint").css("left",this.clint.posX+"px");
			}else{
				this.clint.posX+=this.clint.speed*Math.cos(Math.atan((this.arrival.posY-this.clint.posY)/(this.arrival.posX-this.clint.posX)));
				$("#clint").css("left",this.clint.posX+"px");
			}
		}
		if(this.clint.posX>this.arrival.posX){
			if (this.clint.posY>this.arrival.posY) {
				this.clint.posX-=this.clint.speed*Math.cos(Math.atan((this.clint.posY-this.arrival.posY)/(this.clint.posX-this.arrival.posX)));
				$("#clint").css("left",this.clint.posX+"px");
			}else{
				this.clint.posX-=this.clint.speed*Math.cos(Math.atan((this.arrival.posY-this.clint.posY)/(this.clint.posX-this.arrival.posX)));
				$("#clint").css("left",this.clint.posX+"px");
			}
		}
		if(this.clint.posY<this.arrival.posY+this.clint.speed && this.clint.posY>this.arrival.posY-this.clint.speed){
			if (this.clint.posX<this.arrival.posX+this.clint.speed && this.clint.posX>this.arrival.posX-this.clint.speed) {
				$("#gripped").css("top","-200px");
				$("#gripped").css("left","-200px");
				app.ui.grappin.grappin=false;
				app.ui.grappin.gripped=false;
				app.ui.grappin.grapshoot=false;
				this.gripped.posX=0;
				this.gripped.posY=0;
				app.ui.level.speed_wall=app.settings.speed_level;
				for (var i = 0; i < app.ui.addRobot.robotList.length; i++) {
					app.ui.addRobot.robotList[i].speed=app.settings.robot.speed;
				};
				if (this.arrival.posX>app.settings.canvas.width*0.5) {
					app.ui.animationclint.arriveG=false;
					app.ui.animationclint.arriveD=true;
					app.ui.animationclint.volhautD=false;
					app.ui.animationclint.tirdvgvol=false;
					app.ui.animationclint.tirgvdvol=false;
					
				};
				if (this.arrival.posX<app.settings.canvas.width*0.5) {
					app.ui.animationclint.arriveD=false;
					app.ui.animationclint.arriveG=true;
					app.ui.animationclint.volhautG=false;
					app.ui.animationclint.tirdvgvol=false;
					app.ui.animationclint.tirgvdvol=false;
					

				};
				
			};
		};

	},
	update : function(){
		if (app.ui.grappin.grappin==true && app.ui.grappin.grapconfirm==true){
    		app.ui.heros.move();
    		app.ui.heros.falldown=app.settings.falldown;
    	}else if(app.ui.grappin.grapshoot==true){
    		app.ui.heros.move();
    		app.ui.heros.falldown=app.settings.falldown;
    	}else{
    		app.ui.heros.move_auto();
    	}
    	if (app.ui.heros.clint.posY>app.settings.canvas.height+100) {
    		app.settings.finLvl=true;
			app.settings.gagne=false;
			$("#lose").css("display","block");
			$('#scoreLose span').append('Score : '+app.settings.score.value);
			app.ui.dataScore.rangeScore();
			app.ui.dataScore.saveScore();
			app.ui.dataScore.restoreScore();
    		//location.reload();
    	};
	}

};