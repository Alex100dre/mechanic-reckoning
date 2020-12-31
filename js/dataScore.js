app.ui.dataScore={
	rangeScore: function(){
		for(var i = 0; i<app.settings.listScore.length; i++){
			if(app.settings.score.value>app.settings.listScore[i].value){
				app.settings.listScore.splice(i,0,{name:app.settings.score.name,value:app.settings.score.value})
				break;
			}
		}
		if (app.settings.listScore.length>5) {
			app.settings.listScore.pop();
		};
	},
	saveScore: function(){
		var save_listeScore = JSON.stringify(app.settings.listScore);
		window.localStorage['data.listeScore'] = save_listeScore;
	},

	restoreScore: function(){
		if(window.localStorage.length>0){
			if(typeof window.localStorage["data.listeScore"]!="undefined"){
				var load_listScore = localStorage['data.listeScore'];
				app.settings.listScore = (load_listScore) ? JSON.parse(load_listScore) : {};
			}
		}
	},
	saveName: function(){
		var save_name = JSON.stringify(app.settings.score.name);
		window.localStorage['data.name'] = save_name;
	},
	restoreName: function(){
		if(window.localStorage.length>0){
			if(typeof window.localStorage["data.name"]=="string"){
				var load_name = localStorage['data.name'];
				app.settings.score.name = (load_name) ? JSON.parse(load_name) : {};
			}
		}
	},
	musique : function(){
		if(window.localStorage.length>0){
			if(typeof window.localStorage["data.musicstat"]!="undefined"){
				var musicstat = localStorage['data.musicstat'];
				var musique = (musicstat) ? JSON.parse(musicstat) : {};
				if (musique=="false") {
					app.settings.zik=false;
				}
				if (musique=="true") {
					app.settings.zik=true;
				}
			}
		}
		if (app.settings.zik==true) {
			document.getElementById("lecteur").play();
		};
	},
	getzik : function(){
		if(window.localStorage.length>0){
			if(typeof window.localStorage["data.musicstat"]!="undefined"){
				var musicstat = localStorage['data.musicstat'];
				app.settings.zik = (musicstat) ? JSON.parse(musicstat) : {};
			}
		}
	},
	sons : function(){
		if(window.localStorage.length>0){
			if(typeof window.localStorage["data.sonstat"]!="undefined"){
				var sonstat = localStorage['data.sonstat'];
				var sons = (sonstat) ? JSON.parse(sonstat) : {};
				if (sons=="true") {
					app.settings.sons=true;
				}
				if (sons=="false") {
					app.settings.sons=false;
				}
			}
		}
	},
	getsons : function(){
		if(window.localStorage.length>0){
			if(typeof window.localStorage["data.sonstat"]!="undefined"){
				var sonstat = localStorage['data.sonstat'];
				app.settings.sons = (sonstat) ? JSON.parse(sonstat) : {};
			}
		}
	},
	
};