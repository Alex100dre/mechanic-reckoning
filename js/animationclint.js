app.ui.animationclint={
	clint:app.settings.clint,
	grappin:app.settings.grappin,
	compteur:0,
	compteurlancementG:0,	
	compteurlancementD:0,
	debut:true,
	lancersolG:false,
	lancersolD:false,
	volhautD:false,
	volhatG:false,
	arriveG:false,
	arriveD:false,
	tirmemedhaut:false,
	volmemedhaut:false,
	tirmemedbas:false,
	volmemedbas:false,
	tirdvghaut:false,
	tirdvgbas:false,
	tirdvgmeme:false,
	tirdvgvol:false,
	//gauche
	tirmemeghaut:false,
	volmemeghaut:false,
	tirmemegbas:false,
	volmemegbas:false,
	tirgvdhaut:false,
	tirgvdbas:false,
	tirgvdmeme:false,
	tirgvdvol:false,
	init: function(){
		
		this.compteur++;
		if (this.compteur==7) {
			this.grapanim();
			if (this.lancersolD==true) {
				this.lancementgrappinsold();
				this.compteurlancementG=0;
			}else if (this.lancersolG==true) {
				this.lancementgrappinsolg();
				this.compteurlancementD=0;
			}else if (this.volhautD==true) {
				this.receptionmurdusolD();
			}else if (this.volhautG==true) {
				this.receptionmurdusolG();
			}else if (this.arriveG==true) {
				this.arrivehautG();
			}else if (this.arriveD==true) {
				this.arrivehautD();
			}else if (this.tirmemedhaut==true){
				this.debuttirmurdroitversdroithaut();
			}else if (this.volmemedhaut==true){
				this.monteedroitversdroithaut();
			}else if (this.tirmemedbas==true){
				this.debuttirmurdroitversdroitbas();
			}else if (this.volmemedbas==true){
				this.monteedroitversdroitbas();
			}else if (this.tirdvghaut==true){
				this.tirdvghautdeb();
			}else if (this.tirdvgbas==true){
				this.tirdvgbasdeb();
			}else if (this.tirdvgmeme==true){
				this.tirdvgmemedeb();
			}else if (this.tirdvgvol==true){
				this.tirdvgvolanim();
				//gauche
			}else if (this.tirmemeghaut==true){
				this.debuttirmurdgaucheversgauchehaut();
			}else if (this.volmemeghaut==true){
				this.monteegaucheversgauchehaut();
			}else if (this.tirmemegbas==true){
				this.debuttirmurgaucheversgauchebas();
			}else if (this.volmemegbas==true){
				this.monteegaucheversgauchebas();
			}else if (this.tirgvdhaut==true){
				this.tirgvdhautdeb();
			}else if (this.tirgvdbas==true){
				this.tirgvdbasdeb();
			}else if (this.tirgvdmeme==true){
				this.tirgvdmemedeb();
			}else if (this.tirgvdvol==true){
				this.tirgvdvolanim();
				//iddle
			}else if (this.debut==true){
				this.steady();
			}
			this.compteur=0;
		};
		
	},
	steady: function(){
		if (this.clint.backposX<-1200) {
			this.clint.backposX=-1066;
		}else{
			this.clint.backposX-=110;
		}
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");
		
	},
	lancementgrappinsolg : function(){
		this.clint.backposX=-1066;
		this.clint.backposY=-718;
		this.clint.backposX-=110*this.compteurlancementG;
		this.compteurlancementG++;
		if (this.clint.backposX<-1390) {
			this.clint.backposX=-1396;
			this.lancersolG=false;
			this.debut=false;
			this.compteurlancementG=0;
		};
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");		
	},
	lancementgrappinsold : function(){	
		this.clint.backposX=-1066;
		this.clint.backposY=-608;
		this.clint.backposX-=110*this.compteurlancementD;
		this.compteurlancementD++;
		if (this.clint.backposX<-1390) {
			this.clint.backposX=-1396;
			this.lancersolD=false;
			this.debut=false;
			this.compteurlancementD=0;
		};
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");		
	},
	receptionmurdusolG : function(){
		this.clint.backposX=-1506;
		this.clint.backposY=-718;
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
		this.arriveG=false;	
	},
	receptionmurdusolD : function(){
		this.clint.backposX=-1506;
		this.clint.backposY=-595;
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");
		this.arriveD=false;	
		this.compteurlancementD=0;	
	},
	arrivehautD : function(){
		this.tirmemedhaut=false;
		this.tirmemedbas=false;
		this.tirdvghaut=false;
		this.tirdvgbas=false;
		this.tirdvgmeme=false;
		this.tirmemeghaut=false;
		this.tirmemegbas=false;
		this.tirgvdhaut=false;
		this.tirgvdbas=false;
		this.tirgvdmeme=false;
		this.clint.backposX=-1726;
		this.clint.backposY=-595;
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");
		this.compteurlancementD=0;	
	},
	arrivehautG : function(){
		this.tirmemedhaut=false;
		this.tirmemedbas=false;
		this.tirdvghaut=false;
		this.tirdvgbas=false;
		this.tirdvgmeme=false;
		this.tirmemeghaut=false;
		this.tirmemegbas=false;
		this.tirgvdhaut=false;
		this.tirgvdbas=false;
		this.tirgvdmeme=false;
		this.clint.backposX=-1726;
		this.clint.backposY=-718;
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");
		this.compteurlancementG=0;

	},
	//action départ du mur de droite
	debuttirmurdroitversdroithaut : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.volmemedhaut=false;
		this.volmemedbas=false;
		this.clint.backposX=-275;
		this.clint.backposY=-812;
		this.clint.backposX-=110*this.compteurlancementD;
		this.compteurlancementD++;
		if (this.clint.backposX<-495) {
			this.clint.backposX=-495;
			this.compteurlancementD=0;
			this.tirmemedhaut=false;
		};
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	monteedroitversdroithaut : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.tirmemedhaut=false;
		this.clint.backposX=-495;
		this.clint.backposY=-812;
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
		
	},
	debuttirmurdroitversdroitbas : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.volmemedhaut=false;
		this.volmemedbas=false;
		this.clint.backposX=-275;
		this.clint.backposY=-702;
		this.clint.backposX-=110*this.compteurlancementD;
		this.compteurlancementD++;
		if (this.clint.backposX<-495) {
			this.clint.backposX=-495;			
			this.compteurlancementD=0;
			this.tirmemedbas=false;
		};
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	monteedroitversdroitbas : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.tirmemedbas=false;
		this.clint.backposX=-495;
		this.clint.backposY=-702;
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	tirdvghautdeb : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.clint.backposX=-275;
		this.clint.backposY=-1032;
		this.clint.backposX-=110*this.compteurlancementD;
		this.compteurlancementD++;
		if (this.clint.backposX<-385) {
			this.compteurlancementD=0;
			this.clint.backposX=-385;
			this.tirdvghaut=false;
			
		};
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	tirdvgbasdeb : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.clint.backposX=-275;
		this.clint.backposY=-1142;
		this.clint.backposX-=110*this.compteurlancementD;
		this.compteurlancementD++;
		if (this.clint.backposX<-385) {
			this.compteurlancementD=0;
			this.clint.backposX=-385;
			this.tirdvgbas=false;
		};
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	tirdvgmemedeb : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.clint.backposX=-275;
		this.clint.backposY=-922;
		this.clint.backposX-=110*this.compteurlancementD;
		this.compteurlancementD++;
		if (this.clint.backposX<-385) {
			this.clint.backposX=-385;
			this.tirdvgmeme=false;
			this.compteurlancementD=0;
		};
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	tirdvgvolanim : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.clint.backposX=-495;
		this.clint.backposY=-1032;
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	// -----------------------------  action départ du mur de gauche
	debuttirmurdgaucheversgauchehaut : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.volmemeghaut=false;
		this.volmemegbas=false;
		this.clint.backposX=-275;
		this.clint.backposY=-152;
		this.clint.backposX-=110*this.compteurlancementG;
		this.compteurlancementG++;
		if (this.clint.backposX<-495) {
			this.clint.backposX=-495;
			this.compteurlancementG=0;
			this.tirmemeghaut=false;
		};
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	monteegaucheversgauchehaut : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.tirmemeghaut=false;
		this.clint.backposX=-495;
		this.clint.backposY=-152;
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
		
	},
	debuttirmurgaucheversgauchebas : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.volmemeghaut=false;
		this.volmemegbas=false;
		this.clint.backposX=-275;
		this.clint.backposY=-262;
		this.clint.backposX-=110*this.compteurlancementG;
		this.compteurlancementG++;
		if (this.clint.backposX<-385) {
			this.clint.backposX=-385;			
			this.compteurlancementG=0;
			this.tirmemegbas=false;
		};
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	monteegaucheversgauchebas : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.tirmemegbas=false;
		this.clint.backposX=-495;
		this.clint.backposY=-262;
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	tirgvdhautdeb : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.clint.backposX=-275;
		this.clint.backposY=-592;
		this.clint.backposX-=110*this.compteurlancementG;
		this.compteurlancementG++;
		if (this.clint.backposX<-385) {
			this.compteurlancementG=0;
			this.clint.backposX=-385;
			this.tirgvdhaut=false;
			
		};
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	tirgvdbasdeb : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.clint.backposX=-275;
		this.clint.backposY=-372;
		this.clint.backposX-=110*this.compteurlancementG;
		this.compteurlancementG++;
		if (this.clint.backposX<-385) {
			this.compteurlancementG=0;
			this.clint.backposX=-385;
			this.tirgvdbas=false;
		};
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	tirgvdmemedeb : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.clint.backposX=-275;
		this.clint.backposY=-482;
		this.clint.backposX-=110*this.compteurlancementG;
		this.compteurlancementG++;
		if (this.clint.backposX<-385) {
			this.clint.backposX=-385;
			this.tirgvdmeme=false;
			this.compteurlancementG=0;
		};
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	tirgvdvolanim : function(){
		this.arriveD=false;
		this.arriveG=false;
		this.clint.backposX=-372;
		this.clint.backposY=-1032;
		$("#clint").css("backgroundPosition",this.clint.backposX+"px "+this.clint.backposY+"px");	
	},
	grapanim : function(){
		this.grappin.backposX-=62;
		if (this.grappin.backposX<-2480) {
			this.grappin.backposX=-2250;
		};

		$("#gripped").css("backgroundPosition",this.grappin.backposX+"px "+this.grappin.backposY+"px");	
	}
}