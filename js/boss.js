app.ui.boss={
	boss:app.settings.boss,
	clint:app.settings.clint,
	remontee:false,
	redescente:false,
	letsgo:false,
	punch:false,
	hitted:false,
	rangdhomme:0,
	vitesse:2,
	compteur:0,
	compteur2:0,
	compteurvie:5,
	ligne1:true,
	init: function(){
		this.$boss=$("<div id='boss' style='height:"+this.boss.height+"px; width:"+this.boss.width+"px; background-image:url("+this.boss.backgroundImage+");background-position:"+this.boss.backposX+"px "+this.boss.backposY+"px ; top:"+this.boss.posY+"px ; left:"+this.boss.posX+"px ; position:absolute; webkit-transform: translate3d(0,0,0);'></div>");
		this.$boss.appendTo("#canvas");
	},
	descente : function(){
		if (this.remontee==false) {
			if (app.settings.boss.posY<200) {
				this.boss.posY+=1;
				$("#boss").css("top",this.boss.posY+"px");
			}else{
				this.remontee=true;
			}
		}else{
			if (this.redescente==false) {
				if (app.settings.boss.posY>75) {
					this.boss.posY-=1;
					$("#boss").css("top",this.boss.posY+"px");
				}else{
					this.redescente=true;
					this.letsgo=true;
				}
			}else{
				if (app.settings.boss.posY<150) {
					this.boss.posY+=1;
					$("#boss").css("top",this.boss.posY+"px");
				}else{
					this.redescente=false;
				}
			}
		}	
	},
	move : function(){
		if (this.boss.posX<-50) {
			this.vitesse=-this.vitesse;
		}
		if (this.boss.posX>500) {
			this.vitesse=-this.vitesse;
		}
		this.boss.posX+=this.vitesse;
		$("#boss").css("left",this.boss.posX+"px");
	},
	animation : function(){
		this.compteur2++

		if (this.compteur2==250) {
			this.rangdhomme=Math.random();
			this.punch=true;
			this.compteur2=0;
		};
		this.compteur++;
		if (this.compteur==7) {
			
			if (this.letsgo==true) {
				// ------------- boss touche gagné
				if (app.settings.bosstouch>5) {
					this.destruction();
				}else{
					if (this.punch==true) {
						this.attack(this.rangdhomme);
					}else{
						this.steady();
					}
				}
				
			};
			this.compteur=0;
		};
		// ---------------- vie 
		$("#life").css("background-image","url("+app.settings.life['backgroundImage'+this.compteurvie]+")")
		if (this.compteurvie==0) {
			app.settings.finLvl=true;
			app.settings.gagne=false;
			$("#lose").css("display","block");
			$('#scoreLose span').append('Score : '+app.settings.score.value);
			app.ui.dataScore.rangeScore();
			app.ui.dataScore.saveScore();
			app.ui.dataScore.restoreScore();
		};
		
	},
	steady : function(){
		this.boss.backposX-=375;
		this.boss.backposY=-75;
		if (this.boss.backposX<-1500) {
			this.boss.backposX=-55;
		}
		$("#boss").css("backgroundPosition",this.boss.backposX+"px "+this.boss.backposY+"px");
	},
	attack : function(coup){
		
		if (coup<0.5) {
			
			this.boss.backposX-=375;	
			if (this.boss.backposX<-3300 && this.ligne1==false) {
				this.boss.backposX=-55;
				this.boss.backposY=-792;
				this.punch=false;
				this.ligne1=true;
				if (this.hitted==true) {
					this.compteurvie--;
					this.hitted=false;
				};
			};	
			if (this.boss.backposX<-3300) {
				this.boss.backposX=-55;
				this.ligne1= !this.ligne1;
			}
			if (this.ligne1==true) {
				this.boss.backposY=-792;
			}else{
				this.boss.backposY=-1164;
			}
			$("#boss").css("backgroundPosition",this.boss.backposX+"px "+this.boss.backposY+"px");
		}else{
			this.boss.backposX-=377;		
			if (this.boss.backposX<-3300 && this.ligne1==false) {
				this.boss.backposX=-55;
				this.boss.backposY=-1566;
				this.punch=false;
				this.ligne1=true;
				if (this.hitted==true) {
					this.compteurvie--;
					this.hitted=false;
				};
			};
			if (this.boss.backposX<-3300) {
				this.boss.backposX=-55;
				this.ligne1= !this.ligne1;
			}
			if (this.ligne1==true) {
				this.boss.backposY=-1566;
			}else{
				this.boss.backposY=-1956;
			}
			$("#boss").css("backgroundPosition",this.boss.backposX+"px "+this.boss.backposY+"px");
		}

		if (this.boss.posX<this.clint.posX+this.clint.width && this.boss.posX+this.boss.width>this.clint.posX) {
			if (this.boss.posY<this.clint.posY+this.clint.height && this.boss.posY+this.boss.height>this.clint.posY) {
				this.hitted=true;
			};
		};
	},
	destruction : function(){
		this.boss.backposX-=375;
		this.boss.backposY=-2425;
		if (this.boss.backposX<-3700) {
			$("#boss").remove();
			app.settings.finLvl=true;
			app.settings.gagne=true;
			$("#win").css("display","block");
			$('#scoreWin span').append('Score : '+app.settings.score.value);
			app.ui.dataScore.rangeScore();
			app.ui.dataScore.saveScore();
			app.ui.dataScore.restoreScore();
		};	
		$("#boss").css("backgroundPosition",this.boss.backposX+"px "+this.boss.backposY+"px");
	}
};