app.ui.grappin={
	grappin:false,
	gripped:false,
	grapconfirm:false,
	grapshoot:false,
	lancergrappin: function(e){
		aim={
			x:e.center.pageX,
			y:e.center.pageY
		}
		if (app.ui.heros.gripped.posX!=0) {
			if (aim.x>app.ui.heros.gripped.posX-80 && aim.x<app.ui.heros.gripped.posX+80) {
				if (aim.y<app.ui.heros.gripped.posY+120 && aim.y>app.ui.heros.gripped.posY-120) {
					app.ui.grappin.grapconfirm=true;
					//animation en cours 
					if (app.engine.start==true) {
						//droite vers droite
						if (app.ui.heros.clint.posX>app.settings.canvas.width*0.5 && aim.x>app.settings.canvas.width*0.5) {
							if (app.ui.heros.clint.posY>aim.y+150) {
								app.ui.animationclint.tirmemedhaut=false;
								app.ui.animationclint.volmemedhaut=true;
								app.ui.animationclint.volmemedbas=false;
								app.ui.animationclint.arriveD=false;
								app.ui.animationclint.arriveG=false;
							};
							if (app.ui.heros.clint.posY<aim.y-150) {
								app.ui.animationclint.tirmemedbas=false;
								app.ui.animationclint.volmemedbas=true;
								app.ui.animationclint.volmemedhaut=false;
								app.ui.animationclint.arriveD=false;
								app.ui.animationclint.arriveG=false;
							};
							//droite vers gauche
						}else if (app.ui.heros.clint.posX>app.settings.canvas.width*0.5 && aim.x<app.settings.canvas.width*0.5) {
								app.ui.animationclint.tirdvghaut=false;
								app.ui.animationclint.tirdvgbas=false;
								app.ui.animationclint.tirdvgvol=true;
								app.ui.animationclint.arriveD=false;
								app.ui.animationclint.arriveG=false;
						};
						//gauche vers gauche 
						if (app.ui.heros.clint.posX<app.settings.canvas.width*0.5 && aim.x<app.settings.canvas.width*0.5) {
							if (app.ui.heros.clint.posY>aim.y+150) {
								app.ui.animationclint.tirmemeghaut=false;
								app.ui.animationclint.volmemeghaut=true;
								app.ui.animationclint.volmemegbas=false;
								app.ui.animationclint.arriveD=false;
								app.ui.animationclint.arriveG=false;
							};
							if (app.ui.heros.clint.posY<aim.y-150) {
								app.ui.animationclint.tirmemegbas=false;
								app.ui.animationclint.volmemegbas=true;
								app.ui.animationclint.volmemeghaut=false;
								app.ui.animationclint.arriveD=false;
								app.ui.animationclint.arriveG=false;
							};
							//gauche vers droite
						}else if (app.ui.heros.clint.posX<app.settings.canvas.width*0.5 && aim.x>app.settings.canvas.width*0.5) {
								app.ui.animationclint.tirgvdhaut=false;
								app.ui.animationclint.tirgvdbas=false;
								app.ui.animationclint.tirgvdvol=true;
								app.ui.animationclint.arriveD=false;
								app.ui.animationclint.arriveG=false;
						};
					};
					//animation début de jeu
					if (app.engine.start==false) {
						app.ui.animationclint.lancersolD=false;
						app.ui.animationclint.lancersolG=false;
						if (aim.x>app.settings.canvas.width*0.5) {
							app.ui.animationclint.volhautD=true;
							app.ui.animationclint.volhautG=false;
						}else{
							app.ui.animationclint.volhautG=true;
							app.ui.animationclint.volhautD=false;
						};
					};
					app.engine.start=true;
				};
			}else{
				app.ui.grappin.grapconfirm=false;
				$("#gripped").css("top","-200px");
				$("#gripped").css("left","-200px");
				app.ui.grappin.gripped=false;
				app.ui.heros.gripped.posX=0;
				app.ui.heros.posY=0;
			}
				// ----------------------------------------------- Tir de test ----------------------------------------------
		}else{
			app.ui.grappin.grapconfirm=false;
		}
		if (aim.x>-5 && aim.x<90) {
			app.ui.heros.left_wall(aim);
			app.ui.grappin.grappin=true;

			//animation cours de jeu vers mur gauche 
			if (app.engine.start==true) {
				if (app.ui.heros.clint.posX<app.settings.canvas.width*0.5) {
					if (app.ui.heros.clint.posY>aim.y) {
						app.ui.animationclint.tirmemeghaut=true;
						app.ui.animationclint.tirmemegbas=false;
						app.ui.animationclint.arriveG=false;
					};
					if (app.ui.heros.clint.posY<aim.y) {
						app.ui.animationclint.tirmemeghaut=false;
						app.ui.animationclint.tirmemegbas=true;
						app.ui.animationclint.arriveG=false;
					};
				};
				if (app.ui.heros.clint.posX>app.settings.canvas.width*0.5) {
					if (app.ui.heros.clint.posY>aim.y+150) {
						app.ui.animationclint.tirdvgmeme=false;
						app.ui.animationclint.tirdvghaut=true;
						app.ui.animationclint.tirdvgbas=false;
						app.ui.animationclint.arriveD=false;
						app.ui.animationclint.arriveG=false;
					}else if (app.ui.heros.clint.posY<aim.y-150) {
						app.ui.animationclint.tirdvgmeme=false;
						app.ui.animationclint.tirdvgbas=true;
						app.ui.animationclint.tirdvghaut=false;
						app.ui.animationclint.arriveD=false;
						app.ui.animationclint.arriveG=false;
					}else{
						app.ui.animationclint.tirdvgmeme=true;
						app.ui.animationclint.tirdvgbas=false;
						app.ui.animationclint.tirdvghaut=false;
						app.ui.animationclint.arriveD=false;
						app.ui.animationclint.arriveG=false;
					}
				};		

			};
			//animation début de jeu vers la gauche
			if (app.engine.start==false) {
				app.ui.animationclint.lancersolG=true;
				app.ui.animationclint.lancersolD=false;
			};
		}else if (aim.x<775 && aim.x>678) {
			app.ui.heros.right_wall(aim);
			app.ui.grappin.grappin=true;
			//animation en cours de jeu vers la droite

			//animation cours de jeu vers mur droit
			if (app.engine.start==true) {
				//droite 
				if (app.ui.heros.clint.posX>app.settings.canvas.width*0.5) {
					if (app.ui.heros.clint.posY>aim.y) {
						app.ui.animationclint.tirmemedhaut=true;
						app.ui.animationclint.tirmemedbas=false;
						app.ui.animationclint.arriveD=false;
					};
					if (app.ui.heros.clint.posY<aim.y) {
						app.ui.animationclint.tirmemedhaut=false;
						app.ui.animationclint.tirmemedbas=true;
						app.ui.animationclint.arriveD=false;
					};
				};
				if (app.ui.heros.clint.posX<app.settings.canvas.width*0.5) {
					if (app.ui.heros.clint.posY>aim.y+150) {
						app.ui.animationclint.tirgvdmeme=false;
						app.ui.animationclint.tirgvdhaut=true;
						app.ui.animationclint.tirgvdbas=false;
						app.ui.animationclint.arriveD=false;
						app.ui.animationclint.arriveG=false;
					}else if (app.ui.heros.clint.posY<aim.y-150) {
						app.ui.animationclint.tirgvdmeme=false;
						app.ui.animationclint.tirgvdbas=true;
						app.ui.animationclint.tirgvdhaut=false;
						app.ui.animationclint.arriveD=false;
						app.ui.animationclint.arriveG=false;
					}else{
						app.ui.animationclint.tirgvdmeme=true;
						app.ui.animationclint.tirgvdbas=false;
						app.ui.animationclint.tirgvdhaut=false;
						app.ui.animationclint.arriveD=false;
						app.ui.animationclint.arriveG=false;
					}
				};	

			};
			//animation début de jeu vers la droite 
			if (app.engine.start==false) {
				app.ui.animationclint.lancersolD=true;
				app.ui.animationclint.lancersolG=false;
			};
		}
	},
	tirgrappin: function(e){
		aim={
			//utilisation de touches plutot que position car parfois position n'existe pas
			x:e.center.pageX,
			y:e.center.pageY
		}
		app.ui.heros.shoot(aim);
		app.ui.addRobot.robotList[i].posY=0;


	}
};