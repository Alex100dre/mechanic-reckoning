app.engine={
	start:false,
	nbrerobots:app.settings.nbrerobots,
	init: function(){
		// Request animation frame
		// shim layer with setTimeout fallback (Paul Irish)
		// ----- equivalent à un setinterval : 1ere partie definition du requestanmiframe en fonction du browser pour meilleure performance
	    window.requestAnimFrame = (function(){
	      return  window.requestAnimationFrame       || 
	              window.webkitRequestAnimationFrame || 
	              window.mozRequestAnimationFrame    || 
	              window.oRequestAnimationFrame      || 
	              window.msRequestAnimationFrame     || 
	              function( callback ){
	                window.setTimeout(callback, 1000 / 60);
	              };
	    })();
	    // ------- 2eme partie : création de la fonction recursive en iife qui appelera les fonctions de rendu
	    (function animLoop(){
	    	requestAnimFrame(animLoop);
	    	app.engine.render();
	    })()

	    //----- bind des taps et confirm de taps pour déplacerment et tir personnage

	        var element = document.getElementById('canvas');
		    var hammertime = Hammer(element).on("tap", function(event) {
		        app.ui.grappin.lancergrappin(event.gesture);
		        //----- Son
		        if (app.settings.sons==true) {
			        document.getElementById("gun").load();
			        document.getElementById("gun").play();
			    };
		    });
		    
	 	    for (var i = 0; i < app.ui.addRobot.robotList.length; i++) {
	 	    	 var elements = document.getElementById('robot'+i);
			   	 var tempsmarteau = Hammer(elements).on("tap", function(event) {
					app.ui.grappin.tirgrappin(event.gesture);
			    	app.engine.start=true;
			    });
		    };
		    var element2 = document.getElementById('boss');
		   	 var tempsmarteau = Hammer(element2).on("tap", function(event) {
		   	 	app.settings.bosstouch++;
				app.ui.grappin.tirgrappin(event.gesture);
		    });

		//----- pause
		$(document).bind('keydown',function(k){
			app.settings.pause(k);
		});
	},
	// fonction de rendu appelée par le request anim frame
	render:function(){
		app.ui.animationclint.init();
		if (this.start==true && app.settings.finLvl==false) {
	    	app.ui.level.move();
	    	app.ui.heros.update();
	    	for (var i = 0; i < this.nbrerobots; i++) {
	    		app.ui.addRobot.robotList[i].move();  
	    	}
	    	app.ui.update();
	    	app.ui.timer();
		}    	
	}

};