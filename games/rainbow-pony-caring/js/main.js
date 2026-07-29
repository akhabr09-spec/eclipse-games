var game = new Phaser.Game(800,600, Phaser.AUTO, 'gameContainer');
var Main = {
   music:null,
   charChoosed:[1],
   pony3_hairX:[230,250,270,290,310,190,210,230,250,270,290,310,330,350,370,210,230,250,270,290,310,330,350,370,390,190,210,230,250,270,290,310,330,350,370,390,190,210,230,250,270,290,310,330,350,370,390,190,210,230,250,270,290,310,330,190,210,230,250,290,310,170,190,210,230,290,430,430,450,410,430,450,410,430,450,410,430,450,370,390,410,430,450,390,410,430,450,390,410,430,450,370,390,410,430,450,370,390,410,430,370,390,410,430,370,410,430,430,510,530,550,570,590,490,510,530,550,570,590,610,490,510,530,550,570,590,610,530,550,570,590,610,530,550,570,590,610,550,570,590,610,550,570,590,610,550,570,590,610,550,570,590,610,630,570,590,610,630,570,630],
   pony3_hairY:[80,80,80,80,80,80,100,100,100,100,100,100,100,100,100,100,120,120,120,120,120,120,120,120,120,120,140,140,140,140,140,140,140,140,140,140,140,160,160,160,160,160,160,160,160,160,160,160,180,180,180,180,180,180,180,180,200,200,200,200,200,200,220,220,220,220,220,240,260,260,280,280,280,300,300,300,320,320,320,340,340,340,340,340,360,360,360,360,380,380,380,380,400,400,400,400,400,420,420,420,420,440,440,440,440,460,460,460,480,340,340,340,340,340,360,360,360,360,360,360,360,380,380,380,380,380,380,380,400,400,400,400,400,420,420,420,420,420,440,440,440,440,460,460,460,460,480,480,480,480,500,500,500,500,500,520,520,520,520,540,540],
     pony3_bodyX:[410,430,410,430,450,350,370,390,410,430,450,270,330,350,370,390,410,430,450,250,270,310,330,350,370,390,410,430,230,250,270,290,310,330,350,370,390,410,230,250,270,290,310,330,350,370,390,410,210,230,250,270,290,310,330,350,370,390,250,270,290,310,330,350,370,390,470,490,250,270,290,310,330,350,370,390,470,490,250,270,290,310,330,350,470,490,330,350,370,470,330,350,370,470,330,350,470,490,330,350,450,470,490,350,450,470,490,350,390,450,470,490,350,370,390,410,450,470,490,350,370,390,410,430,450,470,490,510,350,370,390,410,430,450,470,490,510,350,370,390,410,430,450,470,490,510,350,370,390,410,430,450,470,490,510],
     pony3_bodyY:[140,140,160,160,160,180,180,180,180,180,180,200,200,200,200,200,200,200,200,220,220,220,220,220,220,220,220,220,240,240,240,240,240,240,240,240,240,240,260,260,260,260,260,260,260,260,260,260,280,280,280,280,280,280,280,280,280,280,300,300,300,300,300,300,300,300,300,300,320,320,320,320,320,320,320,320,320,320,340,340,340,340,340,340,340,340,360,360,360,360,380,380,380,380,400,400,400,400,420,420,420,420,420,440,440,440,440,460,460,460,460,460,480,480,480,480,480,480,480,500,500,500,500,500,500,500,500,500,520,520,520,520,520,520,520,520,520,540,540,540,540,540,540,540,540,540,560,560,560,560,560,560,560,560,560],
     pony3_fullbodyX:[230,250,270,290,310,330,190,210,230,250,270,290,310,330,350,370,210,230,250,270,290,310,330,350,370,390,190,210,230,250,270,290,310,330,350,370,390,190,210,230,250,270,290,310,330,350,370,390,190,210,230,250,270,290,310,330,190,210,230,250,290,310,170,190,210,230,290,430,430,450,410,430,450,410,430,450,410,430,450,370,390,410,430,450,390,410,430,450,390,410,430,450,370,390,410,430,450,370,390,410,430,370,390,410,430,370,410,430,430,510,530,550,570,590,490,510,530,550,570,590,610,490,510,530,550,570,590,610,530,550,570,590,610,530,550,570,590,610,550,570,590,610,550,570,590,610,550,570,590,610,550,570,590,610,630,570,590,610,630,570,630,410,430,410,430,450,350,370,390,410,430,450,270,330,350,370,390,410,430,450,250,270,310,330,350,370,390,410,430,230,250,270,290,310,330,350,370,390,410,230,250,270,290,310,330,350,370,390,410,210,230,250,270,290,310,330,350,370,390,250,270,290,310,330,350,370,390,470,490,250,270,290,310,330,350,370,390,470,490,250,270,290,310,330,350,470,490,330,350,370,470,330,350,370,470,330,350,470,490,330,350,450,470,490,350,450,470,490,350,390,450,470,490,350,370,390,410,450,470,490,350,370,390,410,430,450,470,490,510,350,370,390,410,430,450,470,490,510,350,370,390,410,430,450,470,490,510,350,370,390,410,430,450,470,490,510],
     pony3_fullbodyY:[80,80,80,80,80,80,100,100,100,100,100,100,100,100,100,100,120,120,120,120,120,120,120,120,120,120,140,140,140,140,140,140,140,140,140,140,140,160,160,160,160,160,160,160,160,160,160,160,180,180,180,180,180,180,180,180,200,200,200,200,200,200,220,220,220,220,220,240,260,260,280,280,280,300,300,300,320,320,320,340,340,340,340,340,360,360,360,360,380,380,380,380,400,400,400,400,400,420,420,420,420,440,440,440,440,460,460,460,480,340,340,340,340,340,360,360,360,360,360,360,360,380,380,380,380,380,380,380,400,400,400,400,400,420,420,420,420,420,440,440,440,440,460,460,460,460,480,480,480,480,500,500,500,500,500,520,520,520,520,540,540,140,140,160,160,160,180,180,180,180,180,180,200,200,200,200,200,200,200,200,220,220,220,220,220,220,220,220,220,240,240,240,240,240,240,240,240,240,240,260,260,260,260,260,260,260,260,260,260,280,280,280,280,280,280,280,280,280,280,300,300,300,300,300,300,300,300,300,300,320,320,320,320,320,320,320,320,320,320,340,340,340,340,340,340,340,340,360,360,360,360,380,380,380,380,400,400,400,400,420,420,420,420,420,440,440,440,440,460,460,460,460,460,480,480,480,480,480,480,480,500,500,500,500,500,500,500,500,500,520,520,520,520,520,520,520,520,520,540,540,540,540,540,540,540,540,540,560,560,560,560,560,560,560,560,560],
pony3vis:[true,true,true],
shutterOn:[true],
donecount:[[0,0,0,0,0,0]],
dressupcount:[[0,0,0,0,0,0]],
};

Main.boot = function() {};
Main.boot.prototype = {
   preload: function(){
      game.stage.backgroundColor = '#000000';
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
			game.scale.pageAlignVertically = true;
			game.scale.pageAlignHorizontally = true;
            game.stage.disableVisibilityChange = true;
            game.renderer.renderSession.roundPixels = true;
game.scale.refresh();
            game.scale.setResizeCallback(this.gameResized, this);

              game.load.image('loading', 'assets/prebar.png');
            game.load.image('barover', 'assets/barover.png');
//       game.load.spritesheet('loading', 'assets/7sloader/progressbar.png',124,13);
		game.load.spritesheet('GliterSet', 'assets/7sloader/GliterSet.png',134,126); 
		game.load.spritesheet('prelogo', 'assets/7sloader/loaderLogo.png',149,177,41);        
            
           
            game.load.onFileComplete.add(this.fileLoadFun, this);  
   },
   gameResized: function(manager, bounds){
      var xpos = window.innerWidth - (window.innerWidth / game.width);
             var scale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
             manager.setUserScale(scale, scale, 0, 0);
             game.scale.pageAlignHorizontally = true;
   },
   fileLoadFun: function(progress, cacheKey, success, totalLoaded, totalFiles){
      if (progress == 100) {
               game.load.onFileComplete.removeAll();
            game.state.start('preloader');   
            }
   }
}
Main.preloader = function(){};

Main.preloader.prototype = {
   init:function()
   {
      this.progressbar;
      this.check = 10;
      this.bgbtn;  
      this.progress;
	  this.prelogo;
   },
   preload:function(){
       this.rect1 = game.add.graphics(0,0);
            this.rect1.anchor.setTo(0.5);
            this.rect1.beginFill(0xFFFFFF, 0);
            this.rect1.drawRect(0, 0, 800,600);
  this.progress = game.add.text(game.world.centerX-5,400,"LOADING: 0%",{font:"bold 15px Arial",fill: "#ffffff",align: "center"});
            this.progress.anchor.setTo(0.5)
            this.GliterSet=game.add.sprite(2,-5,'GliterSet');
            this.GliterSet.anchor.setTo(0.5);
               this.GliterSet.visible=false;

            this.GliterSet.animations.add('GliterSet');
			//this.prelogo = game.add.sprite((game.width/2)-100, (game.height/2)-100, 'prelogo');
			this.prelogo = game.add.sprite(game.world.centerX,game.world.centerY, 'prelogo');
this.prelogo.anchor.setTo(0.5);
this.prelogo.animations.add('prelogo');
this.prelogo.animations.play('prelogo',30,false).onComplete.add(function(){
   this.GliterSet.visible=true;
               this.GliterSet.animations.play('GliterSet',20,true);

   },this);
            this.prelogo.inputEnabled = true
                          this.rect1.inputEnabled = true
            this.prelogo.input.useHandCursor = true;
            this.prelogo.events.onInputUp.add(this.openLink, this);
             this.prelogo.addChild(this.GliterSet);
            
                        this.rect1.events.onInputDown.add(this.openLink, this);
             
             game.load.crossOrigin='*';
             game.load.audio('music', ['assets/music.snd?v=2']);
             game.load.audio('btn09', ['assets/music/btn09.snd?v=2']);
             game.load.audio('shuttersound', ['assets/music/shuttersound.snd?v=2']);
             game.load.audio('popupsound', ['assets/music/popupsound.snd?v=2']);
             game.load.audio('water', ['assets/music/water.snd?v=2']);
             game.load.audio('heartsound', ['assets/music/heartbeetsound.snd?v=2']);
             game.load.spritesheet('soundicon', 'assets/soundicon.png',70,77);
             game.load.image('logo', 'assets/logo.png');
             game.load.spritesheet('effects', 'assets/effects.png',141,134);
             game.load.spritesheet('effectssd', 'assets/efftes012.png',367,335);
             
             game.load.image('shutterbg', 'assets/shutterbg.png');
             game.load.image('fullbg', 'assets/fulbg.png');
              game.load.image('morebtn', 'assets/button/morebtn.png');
             game.load.image('nextbtn', 'assets/button/nextbtn.png');
             game.load.image('playbtn', 'assets/button/playbtn.png');
             game.load.image('donebtn', 'assets/button/donebtn.png');
             game.load.image('resetbtn', 'assets/button/resetbtn.png');
             game.load.image('youtubebtn', 'assets/button/youtubebtn.png');
             game.load.image('clean_stand', 'assets/iconset/clean_stand.png');
             game.load.image('clean_stand1', 'assets/iconset/clean_stand1.png');
             game.load.image('food_stand', 'assets/iconset/food_stand.png');
             game.load.image('water_pool', 'assets/cleaninglevel/water_pool.png');
             game.load.image('clean_tool2', 'assets/iconset/clean_tool2.png');
             game.load.image('clean_tool4', 'assets/iconset/clean_tool4.png');
             game.load.image('eatingfood4', 'assets/foodlevel/eatingfood4.png');
             game.load.image('eatingfood5', 'assets/foodlevel/eatingfood5.png');
             game.load.image('pony3_earmask', 'assets/cleaninglevel4/pony3_earmask.png');
             game.load.image('clean2_foot', 'assets/cleaninglevel4/clean2_foot.png');
             game.load.image('clean2_panel', 'assets/cleaninglevel/clean2_panel.png');
             game.load.image('clean2_backdust1', 'assets/cleaninglevel4/clean2_backdust1.png');
             game.load.image('clean2_backfoot', 'assets/cleaninglevel4/clean2_backfoot.png');
             game.load.image('drag_bolt', 'assets/iconset/drag_bolt.png');
             game.load.image('meterfill1', 'assets/meterfill1.png');
             game.load.image('treatment_tool1', 'assets/iconset/treatment_tool1.png');
             game.load.image('pony3_redcircle', 'assets/cleaninglevel4/pony3_redcircle.png');
             game.load.image('pony3_redcircle1', 'assets/cleaninglevel4/pony3_redcircle1.png');
             game.load.image('pony3_redcircle2', 'assets/cleaninglevel4/pony3_redcircle2.png');
             game.load.image('title_name', 'assets/title_name.png');
             game.load.image('title_char', 'assets/title_char.png');
             game.load.image('intro_char', 'assets/intro_char.png');
             game.load.image('popup1', 'assets/popup1.png');
             game.load.spritesheet('arrow', 'assets/arrow.png',38,58,11);
             game.load.spritesheet('clean_tool1', 'assets/iconset/clean_tool1.png',139,59,2);
             game.load.spritesheet('clean2_tool1', 'assets/iconset/clean2_tool1.png',173,233,2);
             game.load.spritesheet('clean_tool3', 'assets/iconset/clean_tool3.png',158,197,8);
             game.load.spritesheet('plate', 'assets/cleaninglevel/plate.png',169,71,2);
             game.load.spritesheet('food1', 'assets/foodlevel/food1.png',143,62,4);
             game.load.spritesheet('food2', 'assets/foodlevel/food2.png',140,76,5);
             game.load.spritesheet('foodpopup', 'assets/foodlevel/foodpopup.png',163,113,5);
             game.load.spritesheet('eatingfood1', 'assets/foodlevel/eatingfood1.png',145,59,4);
             game.load.spritesheet('eatingfood2', 'assets/foodlevel/eatingfood2.png',140,67,4);
             game.load.spritesheet('eatingfood3', 'assets/foodlevel/eatingfood3.png',135,69,4);
             game.load.spritesheet('clean2_bolt', 'assets/cleaninglevel/clean2_bolt.png',48,30,3);
             game.load.spritesheet('clean2_plate', 'assets/cleaninglevel/clean2_plate.png',211,89,4);
             game.load.spritesheet('treatment_tool2', 'assets/iconset/treatment_tool2.png',88,92,17);
             game.load.spritesheet('treatment_tool3', 'assets/iconset/treatment_tool3.png',137,142,11);
             game.load.spritesheet('treatment_tool4', 'assets/iconset/treatment_tool4.png',217,172,15);
             game.load.spritesheet('treatment1_tool1', 'assets/iconset/treatment1_tool1.png',123,30,5);
             game.load.spritesheet('wound4_bandaid1', 'assets/cleaninglevel4/wound4_bandaid1.png',22,34,5);
             game.load.spritesheet('wound4_bandaid2', 'assets/cleaninglevel4/wound4_bandaid2.png',23,34,5);
             game.load.spritesheet('wound4_bandaid3', 'assets/cleaninglevel4/wound4_bandaid3.png',23,33,5);
             game.load.spritesheet('wound4_bandaid4', 'assets/cleaninglevel4/wound4_bandaid4.png',22,34,5);
             game.load.spritesheet('wound4_bandaid5', 'assets/cleaninglevel4/wound4_bandaid5.png',21,34,5);
             game.load.spritesheet('wound4_bandaid6', 'assets/cleaninglevel4/wound4_bandaid6.png',32,27,5);
             game.load.spritesheet('wound4_bandaid7', 'assets/cleaninglevel4/wound4_bandaid7.png',32,27,5);
             game.load.spritesheet('clean1_tool2', 'assets/iconset/clean1_tool2.png',227,105,3);
             game.load.spritesheet('meter', 'assets/meter.png',78,221,11);
                          game.load.spritesheet('timer', 'assets/timer.png',146,168,60);

             for (var i=1;i<=4;i++) {
           // game.load.image('pony_body'+i, 'assets/dressup/pony_body000'+i+'.png');
            game.load.image('pony_bottom'+i, 'assets/dressup/pony_bottom000'+i+'.png');
            game.load.image('pony_chain'+i, 'assets/dressup/pony_chain000'+i+'.png');
            game.load.image('pony_crown'+i, 'assets/dressup/pony_crown000'+i+'.png');
            game.load.image('pony_nose'+i, 'assets/dressup/pony_nose000'+i+'.png');
            game.load.image('pony_shoe'+i, 'assets/dressup/pony_shoe000'+i+'.png');
            game.load.image('pony_tile'+i, 'assets/dressup/pony_tile000'+i+'.png');
            game.load.image('clean_pony'+i, 'assets/cleaninglevel/clean_pony'+i+'.png');
             }
               for (var i=1;i<=4;i++) {
            game.load.image('pony'+i+'_body','assets/dressup/pony'+i+'_body.png');
            game.load.image('pony'+i+'_head','assets/dressup/pony'+i+'_head.png');
            game.load.image('clean_icon'+i,'assets/iconset/clean_icon'+i+'.png');
            game.load.image('ear_water'+i,'assets/cleaninglevel/ear_water'+i+'.png');
               }
             for (var i=1;i<=6;i++) {
            game.load.image('dress_icon'+i, 'assets/iconset/dress_icon'+i+'.png');
            game.load.image('clean2_icon'+i, 'assets/iconset/clean2_icon'+i+'.png');
            //game.load.image('red_ball'+i, 'assets/cleaninglevel/red_ball'+i+'.png');
            game.load.image('red4_ball'+i, 'assets/cleaninglevel4/red4_ball'+i+'.png');
            game.load.image('clean2_back1dust'+i, 'assets/cleaninglevel4/clean2_back1dust'+i+'.png');
             }
                for (var i=2;i<=6;i++) {
            game.load.image('clean2_tool'+i, 'assets/iconset/clean2_tool'+i+'.png');
                }
                 for (var i=2;i<=5;i++) {
            game.load.image('treatment1_tool'+i, 'assets/iconset/treatment1_tool'+i+'.png');
                }
               for (var i=1;i<=2;i++) {
            game.load.image('icon_panel'+i, 'assets/iconset/icon_panel'+i+'.png');
             }
                for (var i=1;i<=5;i++) {
            game.load.image('eatfood_icon'+i, 'assets/iconset/eatfood_icon'+i+'.png');
            game.load.image('clean1_icon'+i, 'assets/iconset/clean1_icon'+i+'.png');
            //game.load.image('clean1_tool'+i, 'assets/iconset/clean1_icon'+i+'.png');
                     game.load.image('treatment1_icon'+i, 'assets/iconset/treatment1_icon'+i+'.png');
                     game.load.image('treatment2_icon'+i, 'assets/iconset/treatment2_icon'+i+'.png');
                     game.load.image('treatment2_tool'+i, 'assets/iconset/treatment2_tool'+i+'.png');

             }
              for (var i=1;i<=1;i++) {
            game.load.image('clean1_tool'+i, 'assets/iconset/clean1_icon'+i+'.png');
               }
               for (var i=3;i<=5;i++) {
            game.load.image('clean1_tool'+i, 'assets/iconset/clean1_icon'+i+'.png');
               }
                for (var i=1;i<=1;i++) {
            //game.load.image('pony3_water'+i, 'assets/cleaninglevel/pony3_water'+i+'.png');
            game.load.image('pony3_bubble'+i, 'assets/cleaninglevel4/pony3_bubble'+i+'.png');
             }
             for (var i=1;i<=2;i++) {
            game.load.image('pony3_water'+i, 'assets/cleaninglevel4/pony3_water'+i+'.png');
             }
                 for (var i=1;i<=9;i++) {
            game.load.image('black4_ball'+i, 'assets/cleaninglevel4/black4_ball'+i+'.png');
            game.load.image('comb4_hair'+i, 'assets/cleaninglevel4/comb4_hair'+i+'.png');
             }
                   for (var i=1;i<=11;i++) {
            game.load.image('green4_leaf'+i, 'assets/cleaninglevel4/green4_leaf'+i+'.png');
             }
                 for (var i=1;i<=7;i++) {
            game.load.image('red4_cross'+i, 'assets/cleaninglevel4/red4_cross'+i+'.png');
                 }
                     for (var i=1;i<=7;i++) {
            game.load.image('small4_wound'+i, 'assets/cleaninglevel4/small4_wound'+i+'.png');
                 }
                        for (var i=1;i<=4;i++) {
            game.load.image('clean2_dust'+i, 'assets/cleaninglevel4/clean2_dust'+i+'.png');
         game.load.image('treatment_icon'+i, 'assets/iconset/treatment_icon'+i+'.png');
                 }
              for(var i=1;i<=10;i++)
             {
               game.load.image('thumb_'+i, 'assets/thumb/thumb0'+i+'.jpg');
             }
             game.load.image('Tump_frame','assets/Tump_frame.png');
             game.load.spritesheet('starlightning', 'assets/starlightning.png',274,289);
             game.load.spritesheet('spark', 'assets/spark.png',185,162,35);
             game.load.spritesheet('mgslogo', 'assets/mgsscreen/mgs-logo.png',185,80);	
             game.load.image('closebtn', 'assets/mgsscreen/closebtn.png');		
		     for(var i=1;i<=20;i++){
		     	game.load.image('mgsopen'+i, 'assets/mgsscreen/mgsopen'+i+'.png');
		     }         
             //LLLLL
             game.load.onFileComplete.add(this.fileLoadFunPre, this);
             
		  
   },
   fileLoadFunPre:function(progress, cacheKey, success, totalLoaded, totalFiles){
      this.progress.setText('LOADING: '+parseInt(progress)+'%');                      
         if (progress == 100) {
               game.load.onFileComplete.removeAll();
               //AAAAAA
               game.state.start('title');  
            }
   },
   openLink:function(){
      CreateLinksInGame("Rainbow-Pony-Caring","loading","logo");
   }
}
Main.title = function(){}

Main.title.prototype = {
    create:function(){
             if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.btn09 = game.add.audio('btn09',0.5,false);
               Main.shuttersound = game.add.audio('shuttersound',0.5,false);
               Main.popupsound = game.add.audio('popupsound',0.5,false);
               Main.heartsound = game.add.audio('heartsound',0.5,true);
               Main.water = game.add.audio('water',0.5,false);
               Main.music.play();
            };
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(-300,-80,'fullbg');
        this.levelGroup.add(this.bg);
        
        this.title_char=game.add.sprite(611.95,336.15,'title_char');
        this.title_char.anchor.setTo(0.5);
        this.levelGroup.add(this.title_char);
        
         this.title_name=game.add.sprite(196.35,242.55,'title_name');
        this.title_name.anchor.setTo(0.5);
        this.title_name.scale.setTo(0.85);
        this.levelGroup.add(this.title_name);
        
        game.add.tween(this.title_name.scale).to({x:0.9,y:0.9},500,"Linear",true,0,-1).yoyo(true,50);
         this.morebtn = game.add.sprite(75.55,539.25,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.playbtn = game.add.sprite(730,539.25,'playbtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.playbtn);
        
               this.thumbGrp = game.add.group();
		this.randomId = game.rnd.integerInRange(1,10);
		this.randomId1 = game.rnd.integerInRange(1,10);
        console.log(this.randomId1);
        this.Tump_frame1=game.add.sprite(350,740,'Tump_frame');
        this.Tump_frame1.anchor.setTo(0.5);
		this.Tump_frame1.scale.setTo(0.8);
		this.thumb1 = game.add.sprite(350,730,'thumb_'+this.randomId);
		this.thumb1.anchor.setTo(0.5);
		this.thumb1.scale.setTo(0.8);
		//this.thumb1.url = thumburi[this.randomId-1]['uri'];
		this.thumb1.inputEnabled = true;
		this.thumb1.input.useHandCursor = true;
		this.thumb1.input.pixelPerfectClick = true;
		this.thumb1.input.pixelPerfectOver = true;
		this.thumb1.events.onInputDown.add(this.openLink,this);
		this.thumbGrp.add(this.Tump_frame1);
		this.thumbGrp.add(this.thumb1);
		
	  if (this.randomId== this.randomId1) {
                this.randomId1+=2;
            }
            if (this.randomId1>10) {
                this.randomId1-=1;
            }
            this.Tump_frame2=game.add.sprite(800,740,'Tump_frame');
        this.Tump_frame2.anchor.setTo(0.5);
		this.Tump_frame2.scale.setTo(0.8);
		this.thumb2 = game.add.sprite(800,730,'thumb_'+this.randomId1);
		this.thumb2.anchor.setTo(0.5);
		this.thumb2.scale.setTo(0.8);
		//this.thumb2.url = thumburi[this.randomId1-1]['uri'];
		this.thumb2.inputEnabled = true;
		this.thumb2.input.useHandCursor = true;
		this.thumb2.input.pixelPerfectClick = true;
		this.thumb2.input.pixelPerfectOver = true;
		this.thumb2.events.onInputDown.add(this.openLink,this);
		this.thumbGrp.add(this.Tump_frame2);
		this.thumbGrp.add(this.thumb2);
        this.thumb1Tween = game.add.tween(this.thumb1.scale).to({x:this.thumb1.scale.x-0.04,y:this.thumb1.scale.y-0.04},700,Phaser.Easing.Elastic.EaseOut,true,0,-1).yoyo(true,0);
		this.thumb2Tween = game.add.tween(this.thumb2.scale).to({x:this.thumb2.scale.x-0.04,y:this.thumb2.scale.y-0.04},700,Phaser.Easing.Elastic.EaseOut,true,0,-1).yoyo(true,0);

        this.thumbGrp.scale.setTo(0.7);
        
         this.mgslogo = game.add.sprite(400,580, 'mgslogo');
		this.mgslogo.anchor.setTo(0.5);
		this.mgslogo.scale.setTo(0.4);
		this.mgslogo.url = "mgsScreen";
		this.mgslogo.inputEnabled=true;		
		this.mgslogo.input.useHandCursor=true;
		this.mgslogo.events.onInputDown.add(function(){
			if(this.mgsopen.flag==1){
				this.cntflag = 1;
				this.timeEvt = game.time.events.loop(50,function(){
					this.mgsopen.flag = 20;
					this.mgsopen.visible = true;
					this.cntflag++;
					this.mgsopen.loadTexture('mgsopen'+this.cntflag);
					if(this.cntflag>=20){
						game.add.tween(this.closebtn.scale).to({x:0.45,y:0.45}, 800, Phaser.Easing.Elastic.InOut, true);
						game.time.events.remove(this.timeEvt);
					}
				}, this);
			}
		}, this);
		this.mgslogo.events.onInputDown.add(function(evt){
			evt.frame = 3;
		}, this);
		this.mgslogo.events.onInputOver.add(function(evt){
			evt.frame = 1;
		}, this);
		this.mgslogo.events.onInputOut.add(function(evt){
			evt.frame = 0;
		}, this);
		
		this.mgsGrp = game.add.group();
		this.mgsopen = game.add.sprite(400, 125, 'mgsopen1');
		this.mgsopen.anchor.setTo(0.5);
		this.mgsopen.scale.setTo(0.7);
		this.mgsopen.flag = 1;
		this.mgsopen.visible = false;
		this.mgsopen.url = "http://meenagames.com/";
		this.mgsopen.inputEnabled=true;		
		this.mgsopen.input.useHandCursor=true;
		this.mgsopen.input.pixelPerfectClick=true;
		this.mgsopen.input.pixelPerfectOver=true;
		this.mgsopen.events.onInputDown.add(function(){
			//window.open('http://meenagames.com/');
		}, this);
		this.mgsGrp.add(this.mgsopen);
		
		this.closebtn = game.add.sprite(520,74, 'closebtn');
		this.closebtn.anchor.setTo(0.5);
		this.closebtn.scale.setTo(0);
		this.closebtn.inputEnabled=true;		
		this.closebtn.input.useHandCursor=true;
		this.closebtn.input.pixelPerfectClick=true;
		this.closebtn.input.pixelPerfectOver=true;
		this.closebtn.events.onInputDown.add(function(){
			this.closebtn.scale.setTo(0);
			this.cntflag = 20;
			this.closetime = game.time.events.loop(50,function(){
				this.cntflag--;
				this.mgsopen.loadTexture('mgsopen'+this.cntflag);
				if(this.cntflag<=1){
					this.mgsopen.flag = 1;
					this.mgsopen.visible = false;
					game.time.events.remove(this.closetime);
				}
			}, this);
		}, this);
		this.mgsGrp.add(this.closebtn);
        
         this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
        this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","menu","logo");
},
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","menu","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
  gdsdk.showBanner();
  //game.sound.mute = false;
   game.state.start('intro');   
   },
}

Main.intro = function(){}

Main.intro.prototype = {
    create:function(){
      //game.sound.mute = true;
      this.levelGroup = game.add.group();
        this.bg=game.add.sprite(-1000,-80,'fullbg');
        this.levelGroup.add(this.bg);
        
        this.intro_char=game.add.sprite(250,370,'intro_char');
        this.intro_char.anchor.setTo(0.5);
        this.intro_char.scale.setTo(0.8);
        this.levelGroup.add(this.intro_char);
         this.morebtn = game.add.sprite(65,540,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.nextbtn = game.add.sprite(740,540,'nextbtn');
         this.nextbtn.anchor.setTo(0.5);
         this.nextbtn.scale.setTo(0);
         this.nextbtn.inputEnabled = true;
         this.nextbtn.input.useHandCursor = true;
         this.nextbtn.events.onInputUp.add(this.enterRoom, this);
         this.nextbtn.events.onInputOver.add(this.btnOver, this);
         this.nextbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.nextbtn);
         
         this.popup1 = game.add.sprite(550,150,'popup1');
         this.popup1.anchor.setTo(0.5);
         this.popup1.scale.setTo(0);
         this.levelGroup.add(this.popup1);
         
      
      if (Main.shutterOn[0]) {
         Main.shuttersound.play();
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
      
      this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
      
        
      },
startPopUp:function()
{
   
   game.add.tween(this.popup1.scale).to({x:0.8, y:0.8}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringBottons, this);
},
bringPopUp2:function(){
   game.add.tween(this.popup1).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000);
   game.add.tween(this.popup2.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringPopUp3, this);
},
bringPopUp3:function(){
   game.add.tween(this.popup2).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000)
   game.add.tween(this.popup3.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
   },
bringBottons:function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   game.add.tween(this.nextbtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
moreLink:function(){
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt)
{
          evt.kill();  
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
   Main.shuttersound.play();
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('cleaning1level3');   
         });
   },
}

Main.dressup4 = function(){}

Main.dressup4.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        this.bg=game.add.sprite(-500,-80,'fullbg');
        this.levelGroup.add(this.bg);
        
        this.iconGroup=game.add.group();
        this.iconGroup1=game.add.group();
        this.iconGroup2=game.add.group();
       
        var iconposY=[118.3,253.35,391.05];
        var iconpos1Y=[139.1,275.35,412.4];
        this.icon_panel1=game.add.sprite(52.4,316.05,'icon_panel1');
        this.icon_panel1.anchor.setTo(0.5);
        this.iconGroup1.add(this.icon_panel1);
        
        for(var i=1;i<=3;i++)
        {
         this['dress_icon'+i]=game.add.sprite(60.1,iconposY[i-1],'dress_icon'+i);
         this['dress_icon'+i].anchor.setTo(0.5);
         this['dress_icon'+i].id=i;
         this['dress_icon'+i].inputEnabled=true;
         this['dress_icon'+i].input.useHandCursor=true;
         this['dress_icon'+i].events.onInputDown.add(this.changefun, this);
         this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
         this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
         this.iconGroup1.add(this['dress_icon'+i]);
        }
        
        this.icon_panel2=game.add.sprite(748.5,316.05,'icon_panel2');
        this.icon_panel2.anchor.setTo(0.5);
        this.iconGroup2.add(this.icon_panel2);
        
        for(var i=4;i<=6;i++)
        {
         this['dress_icon'+i]=game.add.sprite(717.05,iconpos1Y[i-4],'dress_icon'+i);
         this['dress_icon'+i].anchor.setTo(0.5);
         this['dress_icon'+i].id=i;
         this['dress_icon'+i].inputEnabled=true;
         this['dress_icon'+i].input.useHandCursor=true;
         this['dress_icon'+i].events.onInputDown.add(this.changefun, this);
         this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
         this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
         this.iconGroup2.add(this['dress_icon'+i]);
        }
        this.pony3Group=game.add.group();        
        this.pony3_body=game.add.sprite(532.65,447.7,'pony'+4+'_body');
        this.pony3_body.anchor.setTo(0.5);
        
        this.pony3_head=game.add.sprite(345.85,310.15,'pony'+4+'_head');
        this.pony3_head.anchor.setTo(0.5);
        
        this.pony3_shoe=game.add.sprite(442.9,523.6,'');
        this.pony3_shoe.anchor.setTo(0.5);
        
        this.pony3_crown=game.add.sprite(340.7,148,'');
        this.pony3_crown.anchor.setTo(0.5);
        
        this.pony3_tile=game.add.sprite(520.95,360.75,'');
        this.pony3_tile.anchor.setTo(0.5);
        
        this.pony3_chain=game.add.sprite(394.85,393.7,'');
        this.pony3_chain.anchor.setTo(0.5);
        
        this.pony3_bottom=game.add.sprite(482.75,406.8,'');
        this.pony3_bottom.anchor.setTo(0.5);
        
        this.pony3_nose=game.add.sprite(390.85,360.7,'');
        this.pony3_nose.anchor.setTo(0.5);
        
        this.pony3Group.add(this.pony3_body);
        this.pony3Group.add(this.pony3_chain);
        this.pony3Group.add(this.pony3_tile);
        this.pony3Group.add(this.pony3_bottom);
        this.pony3Group.add(this.pony3_head);
        this.pony3Group.add(this.pony3_shoe);
        this.pony3Group.add(this.pony3_crown);
        this.pony3Group.add(this.pony3_nose);
        
        this.iconGroup.add(this.iconGroup1);
        this.iconGroup.add(this.iconGroup2);
        this.levelGroup.add(this.pony3Group);
        this.levelGroup.add(this.iconGroup);
        
         this.morebtn = game.add.sprite(77.7,539.25,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(717.55,539.25,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
         this.iconGroup1.x=-200;
         this.iconGroup2.x=200;
           if (Main.shutterOn[0]) {
            Main.shuttersound.play();
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
         
         this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.crowncount=0;
            this.chaincount=0;
            this.nosecount=0;
            this.bottomcount=0;
            this.shoecount=0;
            this.tilecount=0;
        },
startPopUp:function(){
    game.add.tween(this.iconGroup1).to({x:[20,0]},500,"Linear",true);
   game.add.tween(this.iconGroup2).to({x:[-20,0]},500,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1,y:1},500,"Linear",true).onComplete.add(function(){
         //   game.add.tween(this.foodpopup.scale).to({x:1,y:1},600,"Linear",true).onComplete.add(function(){
         // this.arrowGroup.visible=true;
         //this['eatfood_icon'+3].inputEnabled=true;
         //this['eatfood_icon'+3].input.useHandCursor=true;
         //},this);   
      },this);
      },this);
   },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
changefun:function(evt){
   Main.btn09.play();
   Main.donecount[0][evt.id-1]=1;
   if (evt.id==1) {
      this.crowncount++;
   this.pony3_crown.loadTexture("pony_crown"+this.crowncount);
   Main.dressupcount[0][evt.id-1]=this.crowncount;
   if (this.crowncount>=4) {
  this.crowncount=0;
   }
   }
    if (evt.id==2) {
      this.chaincount++;
   this.pony3_chain.loadTexture("pony_chain"+this.chaincount);
      Main.dressupcount[0][evt.id-1]=this.chaincount;
   if (this.chaincount>=4) {
  this.chaincount=0;
   }
   }
    if (evt.id==3) {
      this.nosecount++;
   this.pony3_nose.loadTexture("pony_nose"+this.nosecount);
         Main.dressupcount[0][evt.id-1]=this.nosecount;
   if (this.nosecount>=4) {
  this.nosecount=0;
   }
   }
    if (evt.id==4) {
      this.bottomcount++;
   this.pony3_bottom.loadTexture("pony_bottom"+this.bottomcount);
            Main.dressupcount[0][evt.id-1]=this.bottomcount;
   if (this.bottomcount>=4) {
  this.bottomcount=0;
   }
   }
    if (evt.id==5) {
      this.shoecount++;
   this.pony3_shoe.loadTexture("pony_shoe"+this.shoecount);
               Main.dressupcount[0][evt.id-1]=this.shoecount;
   if (this.shoecount>=4) {
  this.shoecount=0;
   }
   }
    if (evt.id==6) {
      this.tilecount++;
   this.pony3_tile.loadTexture("pony_tile"+this.tilecount);
                  Main.dressupcount[0][evt.id-1]=this.tilecount;
   if (this.tilecount>=4) {
  this.tilecount=0;
   }
   }
   
     this.donevar=0;
   for(var key in Main.donecount[0])
   {
      if (Main.donecount[0][key]==1) {
        this.donevar++;
      }
   }
   if (this.donevar==6) {
    game.add.tween(this.donebtn.scale).to({x:1,y:1},500,"Linear",true)
   }
   },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
   Main.shuttersound.play();
    gdsdk.showBanner();
     //game.sound.mute = false;
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('finalscreen');   
         });
   },
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}
//d11111111111111
Main.dressup1 = function(){}

Main.dressup1.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        this.bg=game.add.sprite(0,0,'dressupbg');
        this.levelGroup.add(this.bg);
        
        this.iconGroup=game.add.group();
        this.iconGroup1=game.add.group();
        this.iconGroup2=game.add.group();
       
        var iconposY=[118.3,253.35,391.05];
        var iconpos1Y=[139.1,275.35,412.4];
        this.icon_panel1=game.add.sprite(52.4,316.05,'icon_panel1');
        this.icon_panel1.anchor.setTo(0.5);
        this.iconGroup1.add(this.icon_panel1);
        
        for(var i=1;i<=3;i++)
        {
         this['dress_icon'+i]=game.add.sprite(60.1,iconposY[i-1],'dress_icon'+i);
         this['dress_icon'+i].anchor.setTo(0.5);
         this['dress_icon'+i].id=i;
         this['dress_icon'+i].inputEnabled=true;
         this['dress_icon'+i].input.useHandCursor=true;
         this['dress_icon'+i].events.onInputDown.add(this.changefun, this);
         this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
         this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
         this.iconGroup1.add(this['dress_icon'+i]);
        }
        
        this.icon_panel2=game.add.sprite(748.5,316.05,'icon_panel2');
        this.icon_panel2.anchor.setTo(0.5);
        this.iconGroup2.add(this.icon_panel2);
        
        for(var i=4;i<=6;i++)
        {
         this['dress_icon'+i]=game.add.sprite(717.05,iconpos1Y[i-4],'dress_icon'+i);
         this['dress_icon'+i].anchor.setTo(0.5);
         this['dress_icon'+i].id=i;
         this['dress_icon'+i].inputEnabled=true;
         this['dress_icon'+i].input.useHandCursor=true;
         this['dress_icon'+i].events.onInputDown.add(this.changefun, this);
         this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
         this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
         this.iconGroup2.add(this['dress_icon'+i]);
        }
        this.pony1Group=game.add.group();        
        this.pony1_body=game.add.sprite(496.25,434.4,'pony'+1+'_body');
        this.pony1_body.anchor.setTo(0.5);
        
        this.pony1_head=game.add.sprite(366.15,299.4,'pony'+1+'_head');
        this.pony1_head.anchor.setTo(0.5);
        
        this.pony1_shoe=game.add.sprite(442.9,523.6,'pony_shoe1');
        this.pony1_shoe.anchor.setTo(0.5);
        
        this.pony1_crown=game.add.sprite(380.7,168,'pony_crown1');
        this.pony1_crown.anchor.setTo(0.5);
        
        this.pony1_tile=game.add.sprite(520.95,380.75,'pony_tile1');
        this.pony1_tile.anchor.setTo(0.5);
        this.pony1_tile.angle=20;
        
        this.pony1_chain=game.add.sprite(394.85,393.7,'pony_chain1');
        this.pony1_chain.anchor.setTo(0.5);
        
        this.pony1_bottom=game.add.sprite(472.75,415.8,'pony_bottom1');
        this.pony1_bottom.anchor.setTo(0.5);
        
        this.pony1_nose=game.add.sprite(388.85,360.7,'pony_nose1');
        this.pony1_nose.anchor.setTo(0.5);
        
        this.pony1Group.add(this.pony1_body);
        this.pony1Group.add(this.pony1_chain);
        this.pony1Group.add(this.pony1_tile);
        this.pony1Group.add(this.pony1_bottom);
        this.pony1Group.add(this.pony1_head);
        this.pony1Group.add(this.pony1_shoe);
        this.pony1Group.add(this.pony1_crown);
        this.pony1Group.add(this.pony1_nose);
        
        this.iconGroup.add(this.iconGroup1);
        this.iconGroup.add(this.iconGroup2);
        this.levelGroup.add(this.pony1Group);
        this.levelGroup.add(this.iconGroup);
        
         this.morebtn = game.add.sprite(77.7,539.25,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         //this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.playbtn = game.add.sprite(717.55,539.25,'playbtn');
         this.playbtn.anchor.setTo(0.5);
         //this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.playbtn);
         
         this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.crowncount=1;
            this.chaincount=1;
            this.nosecount=1;
            this.bottomcount=1;
            this.shoecount=1;
            this.tilecount=1;
        },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
changefun:function(evt){
   Main.btn09.play();
   if (evt.id==1) {
      this.crowncount++;
   this.pony1_crown.loadTexture("pony_crown"+this.crowncount);
   if (this.crowncount>=4) {
  this.crowncount=0;
   }
   }
    if (evt.id==2) {
      this.chaincount++;
   this.pony1_chain.loadTexture("pony_chain"+this.chaincount);
   if (this.chaincount>=4) {
  this.chaincount=0;
   }
   }
    if (evt.id==3) {
      this.nosecount++;
   this.pony1_nose.loadTexture("pony_nose"+this.nosecount);
   if (this.nosecount>=4) {
  this.nosecount=0;
   }
   }
    if (evt.id==4) {
      this.bottomcount++;
   this.pony1_bottom.loadTexture("pony_bottom"+this.bottomcount);
   if (this.bottomcount>=4) {
  this.bottomcount=0;
   }
   }
    if (evt.id==5) {
      this.shoecount++;
   this.pony1_shoe.loadTexture("pony_shoe"+this.shoecount);
   if (this.shoecount>=4) {
  this.shoecount=0;
   }
   }
    if (evt.id==6) {
      this.tilecount++;
   this.pony1_tile.loadTexture("pony_tile"+this.tilecount);
   if (this.tilecount>=4) {
  this.tilecount=0;
   }
   }
   },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
   Main.shuttersound.play();
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('elsaScreen');   
         });
   },
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}
//d2222222222
Main.dressup2 = function(){}

Main.dressup2.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        this.bg=game.add.sprite(0,0,'dressupbg');
        this.levelGroup.add(this.bg);
        
        this.iconGroup=game.add.group();
        this.iconGroup1=game.add.group();
        this.iconGroup2=game.add.group();
       
        var iconposY=[118.3,253.35,391.05];
        var iconpos1Y=[139.1,275.35,412.4];
        this.icon_panel1=game.add.sprite(52.4,316.05,'icon_panel1');
        this.icon_panel1.anchor.setTo(0.5);
        this.iconGroup1.add(this.icon_panel1);
        
        for(var i=1;i<=3;i++)
        {
         this['dress_icon'+i]=game.add.sprite(60.1,iconposY[i-1],'dress_icon'+i);
         this['dress_icon'+i].anchor.setTo(0.5);
         this['dress_icon'+i].id=i;
         this['dress_icon'+i].inputEnabled=true;
         this['dress_icon'+i].input.useHandCursor=true;
         this['dress_icon'+i].events.onInputDown.add(this.changefun, this);
         this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
         this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
         this.iconGroup1.add(this['dress_icon'+i]);
        }
        
        this.icon_panel2=game.add.sprite(748.5,316.05,'icon_panel2');
        this.icon_panel2.anchor.setTo(0.5);
        this.iconGroup2.add(this.icon_panel2);
        
        for(var i=4;i<=6;i++)
        {
         this['dress_icon'+i]=game.add.sprite(717.05,iconpos1Y[i-4],'dress_icon'+i);
         this['dress_icon'+i].anchor.setTo(0.5);
         this['dress_icon'+i].id=i;
         this['dress_icon'+i].inputEnabled=true;
         this['dress_icon'+i].input.useHandCursor=true;
         this['dress_icon'+i].events.onInputDown.add(this.changefun, this);
         this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
         this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
         this.iconGroup2.add(this['dress_icon'+i]);
        }
        this.pony2Group=game.add.group();        
        this.pony2_body=game.add.sprite(490.25,434.35,'pony'+2+'_body');
        this.pony2_body.anchor.setTo(0.5);
        
        this.pony2_head=game.add.sprite(395.45,325.55,'pony'+2+'_head');
        this.pony2_head.anchor.setTo(0.5);
        
        this.pony2_shoe=game.add.sprite(442.9,523.6,'pony_shoe1');
        this.pony2_shoe.anchor.setTo(0.5);
        
        this.pony2_crown=game.add.sprite(360.7,168,'pony_crown1');
        this.pony2_crown.anchor.setTo(0.5);
        
        this.pony2_tile=game.add.sprite(510.95,360.75,'pony_tile1');
        this.pony2_tile.anchor.setTo(0.5);
        this.pony2_tile.angle=5;
        
        this.pony2_chain=game.add.sprite(394.85,393.7,'pony_chain1');
        this.pony2_chain.anchor.setTo(0.5);
        
        this.pony2_bottom=game.add.sprite(475.75,410.8,'pony_bottom1');
        this.pony2_bottom.anchor.setTo(0.5);
        
        this.pony2_nose=game.add.sprite(388.85,360.7,'pony_nose1');
        this.pony2_nose.anchor.setTo(0.5);
        
        this.pony2Group.add(this.pony2_body);
        this.pony2Group.add(this.pony2_chain);
        this.pony2Group.add(this.pony2_tile);
        this.pony2Group.add(this.pony2_bottom);
        this.pony2Group.add(this.pony2_head);
        this.pony2Group.add(this.pony2_shoe);
        this.pony2Group.add(this.pony2_crown);
        this.pony2Group.add(this.pony2_nose);
        
        this.iconGroup.add(this.iconGroup1);
        this.iconGroup.add(this.iconGroup2);
        this.levelGroup.add(this.pony2Group);
        this.levelGroup.add(this.iconGroup);
        
         this.morebtn = game.add.sprite(77.7,539.25,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         //this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.playbtn = game.add.sprite(717.55,539.25,'playbtn');
         this.playbtn.anchor.setTo(0.5);
         //this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.playbtn);
         
         this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.crowncount=1;
            this.chaincount=1;
            this.nosecount=1;
            this.bottomcount=1;
            this.shoecount=1;
            this.tilecount=1;
        },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
changefun:function(evt){
   Main.btn09.play();
   if (evt.id==1) {
      this.crowncount++;
   this.pony2_crown.loadTexture("pony_crown"+this.crowncount);
   if (this.crowncount>=4) {
  this.crowncount=0;
   }
   }
    if (evt.id==2) {
      this.chaincount++;
   this.pony2_chain.loadTexture("pony_chain"+this.chaincount);
   if (this.chaincount>=4) {
  this.chaincount=0;
   }
   }
    if (evt.id==3) {
      this.nosecount++;
   this.pony2_nose.loadTexture("pony_nose"+this.nosecount);
   if (this.nosecount>=4) {
  this.nosecount=0;
   }
   }
    if (evt.id==4) {
      this.bottomcount++;
   this.pony2_bottom.loadTexture("pony_bottom"+this.bottomcount);
   if (this.bottomcount>=4) {
  this.bottomcount=0;
   }
   }
    if (evt.id==5) {
      this.shoecount++;
   this.pony2_shoe.loadTexture("pony_shoe"+this.shoecount);
   if (this.shoecount>=4) {
  this.shoecount=0;
   }
   }
    if (evt.id==6) {
      this.tilecount++;
   this.pony2_tile.loadTexture("pony_tile"+this.tilecount);
   if (this.tilecount>=4) {
  this.tilecount=0;
   }
   }
   },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
   Main.shuttersound.play();
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('elsaScreen');   
         });
   },
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}
//d3333333
Main.dressup3 = function(){}

Main.dressup3.prototype = {
    create:function(){
      
        this.levelGroup = game.add.group();
      this.bg=game.add.sprite(-500,-80,'fullbg');
        this.levelGroup.add(this.bg);
        
        this.iconGroup=game.add.group();
        this.iconGroup1=game.add.group();
        this.iconGroup2=game.add.group();
       
        var iconposY=[118.3,253.35,391.05];
        var iconpos1Y=[139.1,275.35,412.4];
        this.icon_panel1=game.add.sprite(52.4,316.05,'icon_panel1');
        this.icon_panel1.anchor.setTo(0.5);
        this.iconGroup1.add(this.icon_panel1);
        
        for(var i=1;i<=3;i++)
        {
         this['dress_icon'+i]=game.add.sprite(60.1,iconposY[i-1],'dress_icon'+i);
         this['dress_icon'+i].anchor.setTo(0.5);
         this['dress_icon'+i].id=i;
         this['dress_icon'+i].inputEnabled=true;
         this['dress_icon'+i].input.useHandCursor=true;
         this['dress_icon'+i].events.onInputDown.add(this.changefun, this);
         this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
         this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
         this.iconGroup1.add(this['dress_icon'+i]);
        }
        
        this.icon_panel2=game.add.sprite(748.5,316.05,'icon_panel2');
        this.icon_panel2.anchor.setTo(0.5);
        this.iconGroup2.add(this.icon_panel2);
        
        for(var i=4;i<=6;i++)
        {
         this['dress_icon'+i]=game.add.sprite(717.05,iconpos1Y[i-4],'dress_icon'+i);
         this['dress_icon'+i].anchor.setTo(0.5);
         this['dress_icon'+i].id=i;
         this['dress_icon'+i].inputEnabled=true;
         this['dress_icon'+i].input.useHandCursor=true;
         this['dress_icon'+i].events.onInputDown.add(this.changefun, this);
         this['dress_icon'+i].events.onInputOver.add(this.btnOver, this);
         this['dress_icon'+i].events.onInputOut.add(this.btnOut, this);
         this.iconGroup2.add(this['dress_icon'+i]);
        }
        this.pony3Group=game.add.group();        
        this.pony3_body=game.add.sprite(512.65,434.4,'pony'+3+'_body');
        this.pony3_body.anchor.setTo(0.5);
        
        this.pony3_head=game.add.sprite(331.05,290.05,'pony'+3+'_head');
        this.pony3_head.anchor.setTo(0.5);
        
        this.pony3_shoe=game.add.sprite(442.9,523.6,'');
        this.pony3_shoe.anchor.setTo(0.5);
        
        this.pony3_crown=game.add.sprite(340.7,148,'');
        this.pony3_crown.anchor.setTo(0.5);
        
        this.pony3_tile=game.add.sprite(510.95,370.75,'');
        this.pony3_tile.anchor.setTo(0.5);
        this.pony3_tile.angle=5;
        
        this.pony3_chain=game.add.sprite(394.85,393.7,'');
        this.pony3_chain.anchor.setTo(0.5);
        
        this.pony3_bottom=game.add.sprite(475.75,410.8,'');
        this.pony3_bottom.anchor.setTo(0.5);
        
        this.pony3_nose=game.add.sprite(388.85,360.7,'');
        this.pony3_nose.anchor.setTo(0.5);
        
        this.pony3Group.add(this.pony3_body);
        this.pony3Group.add(this.pony3_chain);
        this.pony3Group.add(this.pony3_tile);
        this.pony3Group.add(this.pony3_bottom);
                this.pony3Group.add(this.pony3_shoe);
        this.pony3Group.add(this.pony3_head);
        this.pony3Group.add(this.pony3_crown);
        this.pony3Group.add(this.pony3_nose);
        
        this.iconGroup.add(this.iconGroup1);
        this.iconGroup.add(this.iconGroup2);
        this.levelGroup.add(this.pony3Group);
        this.levelGroup.add(this.iconGroup);
        
         this.morebtn = game.add.sprite(77.7,539.25,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(717.55,539.25,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
         
           this.iconGroup1.x=-200;
         this.iconGroup2.x=200;
           if (Main.shutterOn[0]) {
            Main.shuttersound.play();
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
         
         this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.crowncount=0;
            this.chaincount=0;
            this.nosecount=0;
            this.bottomcount=0;
            this.shoecount=0;
            this.tilecount=0;
        },
startPopUp:function(){
    game.add.tween(this.iconGroup1).to({x:[20,0]},500,"Linear",true);
   game.add.tween(this.iconGroup2).to({x:[-20,0]},500,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1,y:1},500,"Linear",true).onComplete.add(function(){
         //   game.add.tween(this.foodpopup.scale).to({x:1,y:1},600,"Linear",true).onComplete.add(function(){
         // this.arrowGroup.visible=true;
         //this['eatfood_icon'+3].inputEnabled=true;
         //this['eatfood_icon'+3].input.useHandCursor=true;
         //},this);   
      },this);
      },this);
   },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
changefun:function(evt){
   Main.btn09.play();
   Main.donecount[0][evt.id-1]=1;
   if (evt.id==1) {
      this.crowncount++;
   this.pony3_crown.loadTexture("pony_crown"+this.crowncount);
    Main.dressupcount[0][evt.id-1]=this.crowncount;
   if (this.crowncount>=4) {
  this.crowncount=0;
   }
   }
    if (evt.id==2) {
      this.chaincount++;
   this.pony3_chain.loadTexture("pony_chain"+this.chaincount);
    Main.dressupcount[0][evt.id-1]=this.chaincount;
   if (this.chaincount>=4) {
  this.chaincount=0;
   }
   }
    if (evt.id==3) {
      this.nosecount++;
   this.pony3_nose.loadTexture("pony_nose"+this.nosecount);
    Main.dressupcount[0][evt.id-1]=this.nosecount;
   if (this.nosecount>=4) {
  this.nosecount=0;
   }
   }
    if (evt.id==4) {
      this.bottomcount++;
   this.pony3_bottom.loadTexture("pony_bottom"+this.bottomcount);
    Main.dressupcount[0][evt.id-1]=this.bottomcount;
   if (this.bottomcount>=4) {
  this.bottomcount=0;
   }
   }
    if (evt.id==5) {
      this.shoecount++;
   this.pony3_shoe.loadTexture("pony_shoe"+this.shoecount);
    Main.dressupcount[0][evt.id-1]=this.shoecount;
   if (this.shoecount>=4) {
  this.shoecount=0;
   }
   }
    if (evt.id==6) {
      this.tilecount++;
   this.pony3_tile.loadTexture("pony_tile"+this.tilecount);
     Main.dressupcount[0][evt.id-1]=this.tilecount;
   if (this.tilecount>=4) {
  this.tilecount=0;
   }
   }
     this.donevar=0;
   for(var key in Main.donecount[0])
   {
      if (Main.donecount[0][key]==1) {
        this.donevar++;
      }
   }
   if (this.donevar==6) {
    game.add.tween(this.donebtn.scale).to({x:1,y:1},500,"Linear",true)
   }
   },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
   Main.shuttersound.play();
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('finalscreen');   
         });
   },
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}
Main.food1level3 = function(){}

Main.food1level3.prototype = {
    create:function(){
      
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
        this.bg=game.add.sprite(-940,-80,'fullbg');
        this.levelGroup.add(this.bg);
        
        this.iconGroup=game.add.group();
        
        this.icon_panel1=game.add.sprite(52.4,316.05,'icon_panel1');
        this.icon_panel1.anchor.setTo(0.5);
        this.iconGroup.add(this.icon_panel1);
        
        var standposX=[70.7,73.7];
        var standposY=[215.2,452.25];
        var iconposX=[81.6,73.95];
        var iconposY=[172.4,397.4];
        for (var i=1;i<=2;i++) {
        this.food_stand=game.add.sprite(standposX[i-1],standposY[i-1],'food_stand');
        this.food_stand.anchor.setTo(0.5);
        this.iconGroup.add(this.food_stand);
        this['food_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1],'food'+i);
        this['food_icon'+i].anchor.setTo(0.5);
        //if (i==1) {
        //this['food_icon'+i].inputEnabled=true;
        //this['food_icon'+i].input.useHandCursor=true;
        //}
        this['food_icon'+i].events.onInputDown.add(this['foodfun'+i],this);
        this.iconGroup.add(this['food_icon'+i]);
        }
        this.foodlevelGroup=game.add.group();
        
        this.foodpony=game.add.sprite(448.4,322.4,'clean_pony3');
        this.foodpony.anchor.setTo(0.5);
        
        this.pony_food1=game.add.sprite(298.4,1500,'food1');
        this.pony_food1.anchor.setTo(0.5);
        
        this.pony_food2=game.add.sprite(298.4,1500,'food2');
        this.pony_food2.anchor.setTo(0.5);
        
        this.foodlevelGroup.add(this.foodpony);
        this.foodlevelGroup.add(this.pony_food1);
        this.foodlevelGroup.add(this.pony_food2);
        
        //},this);
        
        this.levelGroup.add(this.foodlevelGroup);
        this.levelGroup.add(this.iconGroup);
        
          this.arrowGroup=game.add.group();
        this.arrow=game.add.sprite(this.food_icon1.x+100,this.food_icon1.y-10,'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrow.angle=90;
        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow',30,true);
        this.arrowGroup.add(this.arrow);
        this.arrow.visible=false;
        this.iconGroup.x=-200;
          this.morebtn = game.add.sprite(81,532.95,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(737.15,532.95,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
      
      if (Main.shutterOn[0]) {
         Main.shuttersound.play();
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        
        this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
                for (var i=1;i<=30;i++) {
         this['tool'+i+'drag']=false;
         this['hitcount'+i]=0;
         this['testcount'+i]=0;
              }
        },
startPopUp:function(){
     game.add.tween(this.iconGroup).to({x:[20,0]},500,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1,y:1},500,"Linear",true).onComplete.add(function(){
              this.arrow.visible=true;
         this['food_icon'+1].inputEnabled=true;
         this['food_icon'+1].input.useHandCursor=true;
      },this);
      },this);
   },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
foodfun1:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.arrow.visible=false;
    game.add.tween(this.pony_food1).to({y:[525,570,555]},600,"Linear",true).onComplete.add(function(){
         this.arrow.visible=true;
         this.arrow.angle=0;
         this.arrow.x=this.pony_food1.x;
         this.arrow.y=this.pony_food1.y-50;
         this.pony_food1.inputEnabled=true;
         this.pony_food1.input.useHandCursor=true;
         this.pony_food1.events.onInputDown.add(this.foodfun3,this);
      },this);
   },
foodfun3:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   this.arrow.visible=false;
   if (evt.frame!=2) {
   evt.frame++;
   game.time.events.add(1000,function(){
      this.arrow.visible=true;
      evt.inputEnabled=true;
      },this);
   }else{
         evt.frame=3;
           effectssd = game.add.sprite(game.world.centerX,game.world.centerY,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.5);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
  game.add.tween(this.pony_food1).to({y:[1500]},600,"Linear",true,1000).onComplete.add(function(){
   this.arrow.visible=true;
   this.arrow.angle=90;
   this.arrow.x=this.food_icon2.x+100;
   this.arrow.y=this.food_icon2.y;
   this.food_icon2.inputEnabled=true;
   this.food_icon2.input.useHandCursor=true
   },this);
   }
   
   },
foodfun2:function(evt){
   Main.btn09.play();
     evt.inputEnabled=false;
   evt.visible=false;
   this.arrow.visible=false;
   game.add.tween(this.pony_food2).to({y:[515,550,535]},600,"Linear",true).onComplete.add(function(){
         this.arrow.visible=true;
         this.arrow.angle=0;
         this.arrow.x=this.pony_food2.x;
         this.arrow.y=this.pony_food2.y-50;
         this.pony_food2.inputEnabled=true;
         this.pony_food2.input.useHandCursor=true;
         this.pony_food2.events.onInputDown.add(this.foodfun4,this);
      },this);
   },
foodfun4:function(evt){
   Main.btn09.play();
    evt.inputEnabled=false;
   this.arrow.visible=false;
   evt.animations.add('pony_food2');
   evt.animations.play('pony_food2',10,false).onComplete.add(function(){
         effectssd = game.add.sprite(game.world.centerX,game.world.centerY,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.5);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
    game.add.tween(this.pony_food2).to({y:[1500]},600,"Linear",true,1000).onComplete.add(function(){
   game.add.tween(this.donebtn.scale).to({x:1,y:1},600,"Linear",true);
      },this);
      },this);
   },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","more");
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
   Main.shuttersound.play();
    gdsdk.showBanner();
  //game.sound.mute = false;
      game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('food2level3');   
         });
   },
//btnnnnnnnnnnnnnn
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);
   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}
Main.food2level3 = function(){}

Main.food2level3.prototype = {
    create:function(){
      //game.sound.mute = true;
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
      
        this.bg=game.add.sprite(-940,-80,'fullbg');
        this.levelGroup.add(this.bg);
        
        this.iconGroup=game.add.group();
        this.toolGroup=game.add.group();
        this.iconGroup1=game.add.group();
        this.iconGroup2=game.add.group();
        this.icon_panel1=game.add.sprite(40.6,308.05,'icon_panel1');
        this.icon_panel1.anchor.setTo(0.5);
        this.iconGroup1.add(this.icon_panel1);
        var iconposX=[64.85,62.95,696.3,691.5,693.5];
        var iconposY=[172.75,311.5,136,270.15,369.5];
        var standposX=[59.15,53.8,717.75,717.75,717.75];
        var standposY=[238.9,357.2,206.4,309.8,414.9];
        this.icon_panel2=game.add.sprite(754.1,321.05,'icon_panel2');
        this.icon_panel2.anchor.setTo(0.5);
        this.iconGroup2.add(this.icon_panel2);
        
 for (var i=1;i<=5;i++) {
         this['food_stand'+i]=game.add.sprite(standposX[i-1],standposY[i-1],'food_stand');
         this['food_stand'+i].anchor.setTo(0.5);
         if (i<=2) {
         this.iconGroup1.add(this['food_stand'+i])
         }else{
         this.iconGroup2.add(this['food_stand'+i])
         }
         
         this['eatfood_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1],'eatfood_icon'+i);
         this['eatfood_icon'+i].anchor.setTo(0.5);
        
        this['eatfood_icon'+i].events.onInputDown.add(this['foodfun'+i],this);
         if (i<=2) {
         this.iconGroup1.add(this['eatfood_icon'+i])
         }else{
         this.iconGroup2.add(this['eatfood_icon'+i])
         }
 }
 this.foodlevelGroup=game.add.group();
        
        this.foodpony=game.add.sprite(408.4,322.4,'clean_pony3');
        this.foodpony.anchor.setTo(0.5);
        this.foodpony.scale.setTo(0.9);
        
        this.foodpopup=game.add.sprite(220,100,'foodpopup');
        this.foodpopup.anchor.setTo(0.5);
        this.foodpopup.scale.setTo(0);
        
        this.eatingfood1=game.add.sprite(-250,530,'eatingfood1');
        this.eatingfood1.anchor.setTo(0.5);
        
        this.eatingfood2=game.add.sprite(-250,530,'eatingfood2');
        this.eatingfood2.anchor.setTo(0.5);
        
        this.eatingfood3=game.add.sprite(-250,530,'eatingfood3');
        this.eatingfood3.anchor.setTo(0.5);
        
        this.eatingfood4=game.add.sprite(-250,530,'eatingfood4');
        this.eatingfood4.anchor.setTo(0.5);

        this.eatingfood5=game.add.sprite(-250,530,'eatingfood5');
        this.eatingfood5.anchor.setTo(0.5);
        
        this.foodlevelGroup.add(this.foodpony);
        this.foodlevelGroup.add(this.foodpopup);
        this.foodlevelGroup.add(this.eatingfood1);
        this.foodlevelGroup.add(this.eatingfood2);
        this.foodlevelGroup.add(this.eatingfood3);
        this.foodlevelGroup.add(this.eatingfood4);
        this.foodlevelGroup.add(this.eatingfood5);
        this.iconGroup.add(this.iconGroup1);
        this.iconGroup.add(this.iconGroup2);
        this.levelGroup.add(this.foodlevelGroup);
        this.levelGroup.add(this.iconGroup);
        
       this.arrowGroup=game.add.group();
        this.arrow=game.add.sprite(this.eatfood_icon3.x-110,this.eatfood_icon3.y+20,'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrow.angle=-90;
        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow',30,true);
        this.arrowGroup.add(this.arrow);
        
        this.arrowGroup.visible=false;
        
        //game.time.events.add(1000,function(){
        //
        // },this);
        //
        this.iconGroup2.x=200;
        this.iconGroup1.x=-200;
         this.morebtn = game.add.sprite(81,532.95,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(737.15,532.95,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
    if (Main.shutterOn[0]) {
      Main.shuttersound.play();
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        
        this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
                for (var i=1;i<=30;i++) {
         this['tool'+i+'drag']=false;
         this['hitcount'+i]=0;
         this['testcount'+i]=0;
              }
        },
startPopUp:function(){
   game.add.tween(this.iconGroup1).to({x:[20,0]},500,"Linear",true);
   game.add.tween(this.iconGroup2).to({x:[-20,0]},500,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1,y:1},500,"Linear",true).onComplete.add(function(){
            game.add.tween(this.foodpopup.scale).to({x:1,y:1},600,"Linear",true).onComplete.add(function(){
          this.arrowGroup.visible=true;
         this['eatfood_icon'+3].inputEnabled=true;
         this['eatfood_icon'+3].input.useHandCursor=true;
         },this);   
      },this);
      },this);
},
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
foodfun1:function(evt){
   evt.kill();
   Main.btn09.play();
   this.arrow.visible=false;
           game.add.tween(this.foodpopup.scale).to({x:0,y:0},600,"Linear",true,700).onComplete.add(function(){
            this.foodpopup.frame++;
           },this);
   game.add.tween(this.eatingfood4).to({x:250},500,"Linear",true).onComplete.add(function(){
      game.add.tween(this.eatingfood4).to({angle:30},1500,"Linear",true,1500);
      game.add.tween(this.eatingfood4).to({x:300,y:700},1500,"Linear",true,1500).onComplete.add(function(){
          game.add.tween(this.foodpopup.scale).to({x:1,y:1},600,"Linear",true).onComplete.add(function(){
             this.arrow.visible=true;
            this.arrow.angle=-90;
            this.arrow.x=this.eatfood_icon4.x-80;
            this.arrow.y=this.eatfood_icon4.y;
            this.eatfood_icon4.inputEnabled=true;
            this.eatfood_icon4.input.useHandCursor=true;
           },this);
      },this);
      },this);
   },
foodfun2:function(evt){
   Main.btn09.play();
      evt.kill();
   this.arrow.visible=false;
           game.add.tween(this.foodpopup.scale).to({x:0,y:0},600,"Linear",true,300).onComplete.add(function(){
            this.foodpopup.frame++;
           },this);
   game.add.tween(this.eatingfood2).to({x:250},500,"Linear",true).onComplete.add(function(){
     this.arrow.visible=true;
     this.arrow.angle=0;
     this.arrow.x=this.eatingfood2.x;
     this.arrow.y=this.eatingfood2.y-60;
     this.eatingfood2.inputEnabled=true;
     this.eatingfood2.input.useHandCursor=true;
     this.eatingfood2.events.onInputDown.add(this.iconfun1,this)
      },this);
   },
iconfun1:function(evt){
   Main.btn09.play();
   this.arrow.visible=false;
         evt.inputEnabled=false;
   if (this.eatingfood2.frame!=2) {
    this.eatingfood2.frame++;
    game.time.events.add(500,function(){
      this.arrow.visible=true;
      evt.inputEnabled=true;
      },this);
   }else{
      this.eatingfood2.frame=3;
       game.add.tween(this.eatingfood2).to({x:-250},500,"Linear",true,550).onComplete.add(function(){
          game.add.tween(this.foodpopup.scale).to({x:1,y:1},600,"Linear",true).onComplete.add(function(){
            this.arrow.visible=true;
            this.arrow.angle=-90;
            this.arrow.x=this.eatfood_icon5.x-80;
            this.arrow.y=this.eatfood_icon5.y;
            this.eatfood_icon5.inputEnabled=true;
            this.eatfood_icon5.input.useHandCursor=true;
           },this);
         },this);
   }
   },
foodfun3:function(evt){
   evt.kill();
   Main.btn09.play();
   this.arrow.visible=false;
           game.add.tween(this.foodpopup.scale).to({x:0,y:0},600,"Linear",true,700).onComplete.add(function(){
            this.foodpopup.frame++;
           },this);
   game.add.tween(this.eatingfood5).to({x:250},500,"Linear",true).onComplete.add(function(){
      game.add.tween(this.eatingfood5).to({angle:30},1500,"Linear",true,1500);
      game.add.tween(this.eatingfood5).to({x:300,y:700},1500,"Linear",true,1500).onComplete.add(function(){
          game.add.tween(this.foodpopup.scale).to({x:1,y:1},600,"Linear",true).onComplete.add(function(){
            this.arrow.visible=true;
            this.arrow.angle=90;
            this.arrow.x=this.eatfood_icon2.x+80;
            this.arrow.y=this.eatfood_icon2.y;
            this.eatfood_icon2.inputEnabled=true;
            this.eatfood_icon2.input.useHandCursor=true;
           },this);
      },this);
      },this);
   },
foodfun4:function(evt){  evt.kill();
   this.arrow.visible=false;
   Main.btn09.play();
           game.add.tween(this.foodpopup.scale).to({x:0,y:0},600,"Linear",true,300).onComplete.add(function(){
            this.foodpopup.frame++;
           },this);
   game.add.tween(this.eatingfood1).to({x:250},500,"Linear",true).onComplete.add(function(){
     this.arrow.visible=true;
     this.arrow.angle=0;
     this.arrow.x=this.eatingfood1.x;
     this.arrow.y=this.eatingfood1.y-60;
     this.eatingfood1.inputEnabled=true;
     this.eatingfood1.input.useHandCursor=true;
     this.eatingfood1.events.onInputDown.add(this.iconfun3,this)
      },this);
   },
iconfun3:function(evt){
   Main.btn09.play();
   this.arrow.visible=false;
         evt.inputEnabled=false;
   if (this.eatingfood1.frame!=2) {
    this.eatingfood1.frame++;
    game.time.events.add(500,function(){
      this.arrow.visible=true;
      evt.inputEnabled=true;
      },this);
   }else{
      this.eatingfood1.frame=3;
       game.add.tween(this.eatingfood1).to({x:-250},500,"Linear",true,550).onComplete.add(function(){
          game.add.tween(this.donebtn.scale).to({x:1,y:1},600,"Linear",true);

          //game.add.tween(this.foodpopup.scale).to({x:1,y:1},600,"Linear",true).onComplete.add(function(){
          //  this.arrow.visible=true;
          //  this.arrow.angle=-90;
          //  this.arrow.x=this.eatfood_icon5.x-80;
          //  this.arrow.y=this.eatfood_icon5.y;
          //  this.eatfood_icon5.inputEnabled=true;
          //  this.eatfood_icon5.input.useHandCursor=true;
          // },this);
         },this);
   }
   },
foodfun5:function(evt){
   evt.kill();
   Main.btn09.play();
   this.arrow.visible=false;
           game.add.tween(this.foodpopup.scale).to({x:0,y:0},600,"Linear",true,300).onComplete.add(function(){
            this.foodpopup.frame++;
           },this);
   game.add.tween(this.eatingfood3).to({x:250},500,"Linear",true).onComplete.add(function(){
     this.arrow.visible=true;
     this.arrow.angle=0;
     this.arrow.x=this.eatingfood3.x;
     this.arrow.y=this.eatingfood3.y-60;
     this.eatingfood3.inputEnabled=true;
     this.eatingfood3.input.useHandCursor=true;
     this.eatingfood3.events.onInputDown.add(this.iconfun2,this)
      },this);
   },
iconfun2:function(evt){
   Main.btn09.play();
   this.arrow.visible=false;
         evt.inputEnabled=false;
   if (this.eatingfood3.frame!=2) {
    this.eatingfood3.frame++;
    game.time.events.add(500,function(){
      this.arrow.visible=true;
      evt.inputEnabled=true;
      },this);
   }else{
      this.eatingfood3.frame=3;
       game.add.tween(this.eatingfood3).to({x:-250},500,"Linear",true,550).onComplete.add(function(){
          game.add.tween(this.foodpopup.scale).to({x:1,y:1},600,"Linear",true).onComplete.add(function(){
            this.arrow.visible=true;
            this.arrow.angle=90;
            this.arrow.x=this.eatfood_icon1.x+80;
            this.arrow.y=this.eatfood_icon1.y;
            this.eatfood_icon1.inputEnabled=true;
            this.eatfood_icon1.input.useHandCursor=true;
           },this);
         },this);
   }
   },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","more");
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
   Main.shuttersound.play();
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('dressup3');   
         });
   },
//btnnnnnnnnnnnnnn
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);
   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}
//cl444444444444444444
Main.cleaning1level3 = function(){}

Main.cleaning1level3.prototype = {
    create:function(){
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
         this.bg=game.add.sprite(-750,-80,'fullbg');
        this.levelGroup.add(this.bg);
           this.iconGroup=game.add.group();
        this.toolGroup=game.add.group();
        this.iconGroup1=game.add.group();
        this.iconGroup2=game.add.group();
        this.icon_panel1=game.add.sprite(40.6,308.05,'icon_panel1');
        this.icon_panel1.anchor.setTo(0.5);
        this.iconGroup1.add(this.icon_panel1);
        var iconposX=[74.1,64.05,735.9,726.2];
        var iconposY=[194.4,390.1,134.95,381.45];
        var standposX=[58.9,65.7,735.85,729.05];
        var standposY=[224.2,433.25,237.2,446.25];
        this.icon_panel2=game.add.sprite(754.1,321.05,'icon_panel2');
        this.icon_panel2.anchor.setTo(0.5);
        this.iconGroup2.add(this.icon_panel2);
        
                this.plate=game.add.sprite(-240,480,'plate');
        this.plate.anchor.setTo(0.5);
        this.toolGroup.add(this.plate);
        
 for (var i=1;i<=4;i++) {
        this['clean_stand'+i]=game.add.sprite(standposX[i-1],standposY[i-1],'clean_stand');
         this['clean_stand'+i].anchor.setTo(0.5);
         if (i<=2) {
         this.iconGroup1.add(this['clean_stand'+i])
         }else{
         this.iconGroup2.add(this['clean_stand'+i])
         }
         
         this['clean_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1]-10,'clean_icon'+i);
         this['clean_icon'+i].anchor.setTo(0.5);
        
         this['clean_icon'+i].events.onInputDown.add(this['iconfun'+i],this);
         if (i<=2) {
         this.iconGroup1.add(this['clean_icon'+i])
         }else{
         this.iconGroup2.add(this['clean_icon'+i])
         }
          this['clean_tool'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1]-10,'clean_tool'+i);
         this['clean_tool'+i].anchor.setTo(0.5);
         this['clean_tool'+i].visible=false;
         this.toolGroup.add(this['clean_tool'+i])
        }
        
          this.treatmentGroup=game.add.group();
        
        this.clean_pony=game.add.sprite(418.4,325.6,'clean_pony3');
        this.clean_pony.anchor.setTo(0.5);
        
        this.comb4hairGroup=game.add.group();
        var comb4hairposX=[355.3,291.3,360.85,366.8,405.8,445.85,492.3,476.6,460.85];
        var comb4hairposY=[198.25,259.75,373.75,495.25,455.25,503.8,505.25,327.35,426.25];
        for (var i=1;i<=9;i++) {
        this['comb4_hair'+i]=game.add.sprite(comb4hairposX[i-1],comb4hairposY[i-1],'comb4_hair'+i);
        this['comb4_hair'+i].anchor.setTo(0.5);
        this.comb4hairGroup.add(this['comb4_hair'+i]);
        }
        
        this.red4ballGroup=game.add.group();
        var red4ballposX=[332.05,470.4,465.05,373.6,415.6,488.55];
        var red4ballposY=[329.45,361.45,432.45,475.3,524.15,509.65];
        for (var i=1;i<=6;i++) {
        this['red4_ball'+i]=game.add.sprite(red4ballposX[i-1],red4ballposY[i-1],'red4_ball'+i);
        this['red4_ball'+i].anchor.setTo(0.5);
        this.red4ballGroup.add(this['red4_ball'+i]);
        }
        
        this.small4woundGroup=game.add.group();
        var small4woundposX=[298.95,290.35,350.35,360.8,404.8,483.3,477.65];
        var small4woundposY=[235.95,292.95,395.95,500.95,475.95,465.5,529.2];
        for (var i=1;i<=7;i++) {
        this['small4_wound'+i]=game.add.sprite(small4woundposX[i-1],small4woundposY[i-1],'small4_wound'+i);
        this['small4_wound'+i].anchor.setTo(0.5);
        this.small4woundGroup.add(this['small4_wound'+i]);
        }
          this.black4ballGroup=game.add.group();
        var black4ballposX=[348.55,296.55,350.55,355.55,395.1,460.55,365.1,411.1,477.1];
        var black4ballposY=[192.95,250.2,320.2,385.9,412.9,382.9,510.6,475.65,491.9];
        for (var i=1;i<=9;i++) {
        this['black4_ball'+i]=game.add.sprite(black4ballposX[i-1],black4ballposY[i-1],'black4_ball'+i);
        this['black4_ball'+i].anchor.setTo(0.5);
        this.black4ballGroup.add(this['black4_ball'+i]);
        }
        this.red4crossGroup=game.add.group();
        var red4crossposX=[427.35,330.4,480.35,458.95,355.75,415.75,495.95];
        var red4crossposY=[150.45,331.45,319.45,425.95,525.95,535.95,505.95];
        for (var i=1;i<=7;i++) {
        this['red4_cross'+i]=game.add.sprite(red4crossposX[i-1],red4crossposY[i-1],'red4_cross'+i);
        this['red4_cross'+i].anchor.setTo(0.5);
        this.red4crossGroup.add(this['red4_cross'+i]);
        }
        
           this.green4leafGroup=game.add.group();
        var green4leafposX=[280.65,377.2,433.65,356.65,471.95,550.95,345.6,560.95,349.6,391.65,484.6];
        var green4leafposY=[145.3,189.15,336.7,365.7,380.85,343.85,426.75,420.85,500.3,527.1,508.3];
        for (var i=1;i<=11;i++) {
        this['green4_leaf'+i]=game.add.sprite(green4leafposX[i-1],green4leafposY[i-1],'green4_leaf'+i);
        this['green4_leaf'+i].anchor.setTo(0.5);
        this.green4leafGroup.add(this['green4_leaf'+i]);
        }
        this.pony3_water1=game.add.sprite(394.3,314.65,'pony3_water1');
        this.pony3_water1.anchor.setTo(0.5);
        this.pony3_water1.visible=false;
        
        this.pony3_water2=game.add.sprite(374.3,357.65,'pony3_water2');
        this.pony3_water2.anchor.setTo(0.5);
        this.pony3_water2.visible=false;
        
        this.pony3_bubble1=game.add.sprite(420.3,330.65,'pony3_bubble1');
        this.pony3_bubble1.anchor.setTo(0.5);
        this.pony3_bubble1.visible=false;
        
        this.pony3_1water1=game.add.sprite(394.3,314.65,'pony3_water1');
        this.pony3_1water1.anchor.setTo(0.5);
        this.pony3_1water1.visible=false;
        
        this.pony3_1water2=game.add.sprite(374.3,357.65,'pony3_water2');
        this.pony3_1water2.anchor.setTo(0.5);
        this.pony3_1water2.visible=false;
        
        this.treatmentGroup.add(this.clean_pony);
        this.treatmentGroup.add(this.comb4hairGroup);
        this.treatmentGroup.add(this.red4ballGroup);
        this.treatmentGroup.add(this.small4woundGroup);
        this.treatmentGroup.add(this.black4ballGroup);
        this.treatmentGroup.add(this.red4crossGroup);
        this.treatmentGroup.add(this.green4leafGroup);
        this.treatmentGroup.add(this.pony3_water1);
        this.treatmentGroup.add(this.pony3_water2);
        this.treatmentGroup.add(this.pony3_bubble1);
        this.treatmentGroup.add(this.pony3_1water1);
        this.treatmentGroup.add(this.pony3_1water2);
                this.iconGroup.add(this.iconGroup1);
                this.iconGroup.add(this.iconGroup2);
        this.water_pool=game.add.sprite(430,530,'water_pool');
        this.water_pool.anchor.setTo(0.5);
        this.water_pool.scale.setTo(1.1);
        this.water_pool.visible=false;
                this.levelGroup.add(this.water_pool);
                
        this.levelGroup.add(this.treatmentGroup);
        this.levelGroup.add(this.iconGroup);
        this.levelGroup.add(this.toolGroup);
         this.arrowGroup=game.add.group();
        this.arrow=game.add.sprite(this.clean_icon1.x+75,this.clean_icon1.y,'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrow.angle=90;
        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow',30,true);
        this.arrowGroup.add(this.arrow);
        this.arrow.visible=false;
            this.hitGroup1 = game.add.group();
      for(var i=0; i<=green4leafposX.length-1; i++)
      {
      this["hitCircle1_"+i] = game.add.graphics(green4leafposX[i],green4leafposY[i]);
      this["hitCircle1_"+i].beginFill(0x0000FF,0);
      this["hitCircle1_"+i].drawCircle(0,0,25);
      this["hitCircle1_"+i].id = i;
      this.hitGroup1.add(this["hitCircle1_"+i]);
      game.physics.arcade.enable([this["hitCircle1_"+i]]);
      this["hitCircle1_"+i].body.enable=false;
      }
        
      this.dragcircle1 = game.add.graphics(0,0);
      this.dragcircle1.beginFill(0xFF0000,0);
      this.dragcircle1.drawCircle(0,0,10);
      this.dragcircle1.endFill();
      
      this.circleGroup2 = game.add.group();
      this.circle2 = game.add.graphics(10,20);
      this.circle2.beginFill(0x000000, 0);
      this.circleGroup2.add(this.circle2);
      this.pony3_water1.mask = this.circle2;
      this.pony3_water2.mask = this.circle2;
      
          this.hitGroup2 = game.add.group();
      for(var i=0; i<=Main.pony3_fullbodyX.length-1; i++)
      {
      this["hitCircle2_"+i] = game.add.graphics(Main.pony3_fullbodyX[i],Main.pony3_fullbodyY[i]);
      this["hitCircle2_"+i].beginFill(0x0000FF,0);
      this["hitCircle2_"+i].drawCircle(0,0,25);
      this["hitCircle2_"+i].id = i;
      this.hitGroup2.add(this["hitCircle2_"+i]);
      game.physics.arcade.enable([this["hitCircle2_"+i]]);
      }
      
      this.dragcircle2 = game.add.graphics(0,0);
      this.dragcircle2.beginFill(0xFF0000,0);
      this.dragcircle2.drawCircle(0,0,55);
      this.dragcircle2.endFill();
      
      this.circleGroup3 = game.add.group();
      this.circle3 = game.add.graphics(10,20);
      this.circle3.beginFill(0x000000, 0);
      this.circleGroup3.add(this.circle3);
      this.pony3_bubble1.mask = this.circle3;
      
          this.hitGroup3 = game.add.group();
      for(var i=0; i<=Main.pony3_fullbodyX.length-1; i++)
      {
      this["hitCircle3_"+i] = game.add.graphics(Main.pony3_fullbodyX[i],Main.pony3_fullbodyY[i]);
      this["hitCircle3_"+i].beginFill(0x0000FF,0);
      this["hitCircle3_"+i].drawCircle(0,0,25);
      this["hitCircle3_"+i].id = i;
      this.hitGroup3.add(this["hitCircle3_"+i]);
      game.physics.arcade.enable([this["hitCircle3_"+i]]);
      }
      
      this.dragcircle3 = game.add.graphics(0,0);
      this.dragcircle3.beginFill(0xFF0000,0);
      this.dragcircle3.drawCircle(0,0,55);
      this.dragcircle3.endFill();
      
      this.circleGroup4 = game.add.group();
      this.circle4 = game.add.graphics(10,20);
      this.circle4.beginFill(0x000000, 0);
      this.circleGroup4.add(this.circle4);
      this.pony3_1water1.mask = this.circle4;
      this.pony3_1water2.mask = this.circle4;
      
          this.hitGroup4 = game.add.group();
      for(var i=0; i<=Main.pony3_fullbodyX.length-1; i++)
      {
      this["hitCircle4_"+i] = game.add.graphics(Main.pony3_fullbodyX[i],Main.pony3_fullbodyY[i]);
      this["hitCircle4_"+i].beginFill(0x0000FF,0);
      this["hitCircle4_"+i].drawCircle(0,0,25);
      this["hitCircle4_"+i].id = i;
      this.hitGroup4.add(this["hitCircle4_"+i]);
      game.physics.arcade.enable([this["hitCircle4_"+i]]);
      }
      
      this.dragcircle4 = game.add.graphics(0,0);
      this.dragcircle4.beginFill(0xFF0000,0);
      this.dragcircle4.drawCircle(0,0,55);
      this.dragcircle4.endFill();
      
         game.physics.arcade.enable([this.dragcircle1,this.dragcircle2,this.dragcircle3,this.dragcircle4]);
      this.dragcircle1.body.onCollide = new Phaser.Signal();
      this.dragcircle1.body.onCollide.add(this.hitSprite1, this);
      this.dragcircle2.body.onCollide = new Phaser.Signal();
      this.dragcircle2.body.onCollide.add(this.hitSprite2, this);
      this.dragcircle3.body.onCollide = new Phaser.Signal();
      this.dragcircle3.body.onCollide.add(this.hitSprite3, this);
      this.dragcircle4.body.onCollide = new Phaser.Signal();
      this.dragcircle4.body.onCollide.add(this.hitSprite4, this);
      this.iconGroup1.x=-200;
      this.iconGroup2.x=200;
      this.morebtn = game.add.sprite(81,532.95,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(737.15,532.95,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
      
      if (Main.shutterOn[0]) {
         Main.shuttersound.play();
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
                for (var i=1;i<=30;i++) {
         this['tool'+i+'drag']=false;
         this['hitcount'+i]=0;
         this['testcount'+i]=0;
              }
        },
startPopUp:function(){
   game.add.tween(this.iconGroup1).to({x:[20,0]},500,"Linear",true);
   game.add.tween(this.iconGroup2).to({x:[-20,0]},500,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1,y:1},500,"Linear",true).onComplete.add(function(){
              this.arrow.visible=true;
         this['clean_icon'+1].inputEnabled=true;
         this['clean_icon'+1].input.useHandCursor=true;
      },this);
      },this);
   },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
iconfun1:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
            this['clean_tool'+1].visible=true;
   this.tool1drag=true;
   this.arrow.x=this["hitCircle1_"+0].x+20;
   this.arrow.y=this["hitCircle1_"+0].y;
   this["hitCircle1_"+0].body.enable=true;
   },
hitSprite1:function(obj,obj1){
   obj1.kill();
   this.hitcount1++;
    this['green4_leaf'+this.hitcount1].kill();
   this.clean_tool1.frame=1;
  this.arrow.visible=false;
   game.add.tween(this.plate).to({x:240},500,"Linear",true).onComplete.add(function(){
   this.arrow.visible=true;
   this.arrow.angle=0;
   this.arrow.x=this.plate.x;
   this.arrow.y=this.plate.y-60;
   this.plate.inputEnabled=true;
   this.plate.input.useHandCursor=true;
   this.plate.events.onInputDown.add(this.platefun,this);
      },this);
   },
   platefun:function(evt){
      Main.btn09.play();
   evt.frame=1;
   evt.inputEnabled=false;
   this.arrow.visible=false;
    this.clean_tool1.frame=0;
     game.add.tween(this.plate).to({x:-240},500,"Linear",true,600).onComplete.add(function(){
      this.plate.frame=0;
      this.arrow.angle=90;
if (this.hitcount1!=11) {
      this.arrow.visible=true;

  this.arrow.x=this["hitCircle1_"+this.hitcount1].x+20;
   this.arrow.y=this["hitCircle1_"+this.hitcount1].y;
   this["hitCircle1_"+this.hitcount1].body.enable=true;
}else{
   this.dragcircle1.kill();
   this.tool1drag=false;
      this['clean_tool'+1].visible=false;
      this['clean_icon'+1].visible=true;
    effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
             this.arrow.visible=true;
   this.arrow.x=this.clean_icon2.x+80;
   this.arrow.y=this.clean_icon2.y;
   this.clean_icon2.inputEnabled=true;
   this.clean_icon2.input.useHandCursor=true;
            },this);
}
     },this);
   },
iconfun2:function(evt){
   Main.btn09.play();
    evt.inputEnabled=false;
   evt.visible=false;
   this.arrow.visible=false;
           this.water_pool.visible=true;
       this.maskcircle=game.add.graphics(0,0);
        this.maskcircle.beginFill("0x000000",1);
        this.maskcircle.drawRect(-660,0,800,700);     
        this.maskcircle.endFill();
        this.maskcircle.anchor.setTo(0.5);           
        this.water_pool.mask=this.maskcircle;        
            game.add.tween(this.maskcircle).to({x:630},2000,Phaser.Easing.Linear.EaseOut,true,2000).onComplete.add(function(){
                effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
             this.arrow.visible=true;
             this.arrow.angle=-90;
   this.arrow.x=this.clean_icon3.x-80;
   this.arrow.y=this.clean_icon3.y;
   this.clean_icon3.inputEnabled=true;
   this.clean_icon3.input.useHandCursor=true;
            },this);
            },this);
   },
iconfun3:function(evt){
   Main.btn09.play();
      evt.inputEnabled=false;
   evt.visible=false;
               this['clean_tool'+3].visible=true;
               Main.water.play();
               this['clean_tool'+3].animations.add(['clean_tool'+3]);
               this['clean_tool'+3].animations.play(['clean_tool'+3],20,true);
this.tool3drag=true;
this.arrow.angle=0;
this.arrow.x=this.clean_pony.x-50;
this.arrow.y=this.clean_pony.y-150;
   },
hitSprite2:function(obj,obj1){
    obj1.kill();
   this.hitcount3++;
   this.arrow.visible=false;
   this.pony3_water1.visible=true;
   this.pony3_water2.visible=true;
   console.log(this.hitcount3);
   this.circle2.drawCircle(Main.pony3_fullbodyX[obj1.id],Main.pony3_fullbodyY[obj1.id],60);
  if (this.hitcount3>=313) {
  obj.kill();
  this.tool3drag=false;
  Main.water.stop();
               this['clean_tool'+3].visible=false;
               this['clean_icon'+3].visible=true;
          effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
            this.arrow.visible=true;
            this.arrow.angle=-90;
            this.arrow.x=this.clean_icon4.x-80;
            this.arrow.y=this.clean_icon4.y;
            this.clean_icon4.inputEnabled=true;
            this.clean_icon4.input.useHandCursor=true;
         },this);
  }
   },
iconfun4:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.tool4drag=true;
   this['clean_tool'+4].visible=true;
this.arrow.angle=0;
this.arrow.x=this.clean_pony.x-50;
this.arrow.y=this.clean_pony.y-150;
   },
hitSprite3:function(obj,obj1){
   obj1.kill();
   this.hitcount4++;
   this.arrow.visible=false;
   this.pony3_bubble1.visible=true
   console.log('xxxx');
   //if (this.hitcount4>=5) {
   game.add.tween(this.pony3_water1).to({alpha:0},1500,Phaser.Easing.SinusoidalInOut,true);
   game.add.tween(this.pony3_water2).to({alpha:0},1500,Phaser.Easing.SinusoidalInOut,true);
   //}
   this.circle3.drawCircle(Main.pony3_fullbodyX[obj1.id],Main.pony3_fullbodyY[obj1.id],65);
  if (this.hitcount4>=313) {
  obj.kill();
  this.tool4drag=false;
               this['clean_tool'+4].visible=false;
               this['clean_icon'+4].visible=true;
          effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
            this.arrow.visible=true;
            this.arrow.angle=-90;
            this.arrow.x=this.clean_icon3.x-80;
            this.arrow.y=this.clean_icon3.y;
            this.clean_icon3.inputEnabled=true;
            this.clean_icon3.input.useHandCursor=true;
            this.clean_icon3.events.onInputDown.removeAll();
            this.clean_icon3.events.onInputDown.add(this.toolfun3,this);
         },this);
  }
   },
toolfun3:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
               this['clean_tool'+3].visible=true;
               Main.water.play();
               this['clean_tool'+3].animations.add(['clean_tool'+3]);
               this['clean_tool'+3].animations.play(['clean_tool'+3],20,true);
this.tool5drag=true;
this.arrow.angle=0;
this.arrow.x=this.clean_pony.x-50;
this.arrow.y=this.clean_pony.y-150;
   },
hitSprite4:function(obj,obj1){
   obj1.kill();
   this.hitcount5++;
   this.arrow.visible=false;
   this.pony3_1water1.visible=true;
   this.pony3_1water2.visible=true;
         game.add.tween(this.black4ballGroup).to({alpha:0},1500,Phaser.Easing.SinusoidalInOut,true);
         game.add.tween(this.pony3_bubble1).to({alpha:0},1500,Phaser.Easing.SinusoidalInOut,true);
   this.circle4.drawCircle(Main.pony3_fullbodyX[obj1.id],Main.pony3_fullbodyY[obj1.id],60);
  if (this.hitcount5>=313) {
  obj.kill();
  this.tool5drag=false;
  Main.water.stop();
               this['clean_tool'+3].visible=false;
               this['clean_icon'+3].visible=true;
          effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
           game.add.tween(this.donebtn.scale).to({x:1,y:1},500,"Linear",true)
         },this);
  }
   },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","more");
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
   Main.shuttersound.play();
    game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('cleaning2level3');   
         });
   },
//btnnnnnnnnnnnnnn
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);
   },
removeGlitter:function(evt){
      evt.kill(); 
      },
update:function(){
   if (this.tool1drag) {
  this.clean_tool1.x=game.input.activePointer.x+60;
  this.clean_tool1.y=game.input.activePointer.y+5;
  this.dragcircle1.x=game.input.activePointer.x;
  this.dragcircle1.y=game.input.activePointer.y;
   for(var i=0; i<=20; i++)
      {
        game.physics.arcade.collide(this.dragcircle1, this['hitCircle1_'+i]);   
      }
   }
      if (this.tool3drag) {
   this.clean_tool3.x=game.input.activePointer.x-60;
   this.clean_tool3.y=game.input.activePointer.y+40;
   this.dragcircle2.x=game.input.activePointer.x-100;
   this.dragcircle2.y=game.input.activePointer.y-15;
     for(var i=0; i<=Main.pony3_fullbodyX.length-1; i++)
      {
   game.physics.arcade.collide(this.dragcircle2, this['hitCircle2_'+i]);   
      }
   }
     if (this.tool4drag) {
   this.clean_tool4.x=game.input.activePointer.x;
   this.clean_tool4.y=game.input.activePointer.y;
   this.dragcircle3.x=game.input.activePointer.x;
   this.dragcircle3.y=game.input.activePointer.y;
    for(var i=0; i<=Main.pony3_fullbodyX.length-1; i++)
      {
   game.physics.arcade.collide(this.dragcircle3, this['hitCircle3_'+i]);   
      }
     }
      if (this.tool5drag) {
   this.clean_tool3.x=game.input.activePointer.x-60;
   this.clean_tool3.y=game.input.activePointer.y+40;
   this.dragcircle4.x=game.input.activePointer.x-100;
   this.dragcircle4.y=game.input.activePointer.y-15;
     for(var i=0; i<=Main.pony3_fullbodyX.length-1; i++)
      {
   game.physics.arcade.collide(this.dragcircle4, this['hitCircle4_'+i]);   
      }
   }
},
}
Main.cleaning2level3 = function(){}

Main.cleaning2level3.prototype = {
    create:function(){
   
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
         this.bg=game.add.sprite(-750,-80,'fullbg');
        this.levelGroup.add(this.bg);
           this.iconGroup=game.add.group();
        this.toolGroup=game.add.group();
        this.iconGroup1=game.add.group();
        this.iconGroup2=game.add.group();
        this.icon_panel1=game.add.sprite(40.6,308.05,'icon_panel1');
        this.icon_panel1.anchor.setTo(0.5);
        this.iconGroup1.add(this.icon_panel1);
        var iconposX=[65.45,76.5,55.55,746.15,733.65];
        var iconposY=[108.5,295.05,475.95,136.5,352.9];
        var standposX=[58.85,58.85,65.7,732.85,729.05];
        var standposY=[192.2,364.15,549.25,205.2,433.25];
        this.icon_panel2=game.add.sprite(754.1,321.05,'icon_panel2');
        this.icon_panel2.anchor.setTo(0.5);
        this.iconGroup2.add(this.icon_panel2);
        
        
 for (var i=1;i<=5;i++) {
        this['clean1_stand'+i]=game.add.sprite(standposX[i-1],standposY[i-1],'clean_stand1');
         this['clean1_stand'+i].anchor.setTo(0.5);
         if (i<=3) {
         this.iconGroup1.add(this['clean1_stand'+i])
         }else{
         this.iconGroup2.add(this['clean1_stand'+i])
         }
         
         this['clean1_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1]-10,'clean1_icon'+i);
         this['clean1_icon'+i].anchor.setTo(0.5);
         this['clean1_icon'+i].events.onInputDown.add(this['iconfun'+i],this);
         if (i<=3) {
         this.iconGroup1.add(this['clean1_icon'+i])
         }else{
         this.iconGroup2.add(this['clean1_icon'+i])
         }
          this['clean1_tool'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1]-10,'clean1_tool'+i);
         this['clean1_tool'+i].anchor.setTo(0.5);
         this['clean1_tool'+i].visible=false;
         this.toolGroup.add(this['clean1_tool'+i])
        }
        
          this.treatmentGroup=game.add.group();
        
        this.clean_pony=game.add.sprite(418.4,325.6,'clean_pony3');
        this.clean_pony.anchor.setTo(0.5);
        
       this.comb4hairGroup=game.add.group();
        var comb4hairposX=[355.3,291.3,360.85,366.8,405.8,445.85,492.3,476.6,460.85];
        var comb4hairposY=[198.25,259.75,373.75,495.25,455.25,503.8,505.25,327.35,426.25];
        for (var i=1;i<=9;i++) {
        this['comb4_hair'+i]=game.add.sprite(comb4hairposX[i-1],comb4hairposY[i-1],'comb4_hair'+i);
        this['comb4_hair'+i].anchor.setTo(0.5);
        this['comb4_hair'+i].visible=Main.pony3vis[0];
        this.comb4hairGroup.add(this['comb4_hair'+i]);
        }
        
         this.red4ballGroup=game.add.group();
        var red4ballposX=[332.05,470.4,465.05,373.6,415.6,488.55];
        var red4ballposY=[329.45,361.45,432.45,475.3,524.15,509.65];
        for (var i=1;i<=6;i++) {
        this['red4_ball'+i]=game.add.sprite(red4ballposX[i-1],red4ballposY[i-1],'red4_ball'+i);
        this['red4_ball'+i].anchor.setTo(0.5);
        this.red4ballGroup.add(this['red4_ball'+i]);
        }
        
        this.small4woundGroup=game.add.group();
        var small4woundposX=[298.95,290.35,350.35,360.8,404.8,483.3,477.65];
        var small4woundposY=[235.95,292.95,395.95,500.95,475.95,465.5,529.2];
        for (var i=1;i<=7;i++) {
        this['small4_wound'+i]=game.add.sprite(small4woundposX[i-1],small4woundposY[i-1],'small4_wound'+i);
        this['small4_wound'+i].anchor.setTo(0.5);
        this.small4woundGroup.add(this['small4_wound'+i]);
        }
        this.red4crossGroup=game.add.group();
        var red4crossposX=[427.35,330.4,480.35,458.95,355.75,415.75,495.95];
        var red4crossposY=[150.45,331.45,319.45,425.95,525.95,535.95,505.95];
        for (var i=1;i<=7;i++) {
        this['red4_cross'+i]=game.add.sprite(red4crossposX[i-1],red4crossposY[i-1],'red4_cross'+i);
        this['red4_cross'+i].anchor.setTo(0.5);
        this.red4crossGroup.add(this['red4_cross'+i]);
        }
         this.pony3_water1=game.add.sprite(394.3,314.65,'pony3_water1');
        this.pony3_water1.anchor.setTo(0.5);
        this.pony3_water1.visible=Main.pony3vis[1];
        
        this.pony3_water2=game.add.sprite(374.3,357.65,'pony3_water2');
        this.pony3_water2.anchor.setTo(0.5);
        this.pony3_water2.visible=Main.pony3vis[1];
        
           this.pony3earwaterGroup=game.add.group();
         this.pony3_earmask=game.add.sprite(397.6,286.4,'pony3_earmask');
         this.pony3_earmask.anchor.setTo(0.5);
         this.pony3earwaterGroup.add(this.pony3_earmask);
         
         var earwaterposX=[366.8,417.8,462.9,372.35];
         var earwaterposY=[292.15,314.85,334.95,454.55];
         
         for (var i=1;i<=4;i++) {
        this['ear_water'+i]=game.add.sprite(earwaterposX[i-1],earwaterposY[i-1]-30,'ear_water'+i);
        this['ear_water'+i].anchor.setTo(0.5);
        this.pony3earwaterGroup.add(this['ear_water'+i]);
         }
         
         this.rect1 = game.add.graphics(400,140);
         this.rect1.anchor.setTo(0.5);
         this.rect1.beginFill(0xFFFFFF, 0);
         this.rect1.drawRect(0, 0, 60, 90);
         
         this.rect2 = game.add.graphics(190,140);
         this.rect2.anchor.setTo(0.5);
         this.rect2.beginFill(0xFFFFFF, 0);
         this.rect2.drawRect(0, 0, 60, 90);
         
         this.pony3earwaterGroup.alpha=0;
         
                    this.pony3earwaterGroup1=game.add.group();
         this.pony3_earmask=game.add.sprite(397.6,286.4,'pony3_earmask');
         this.pony3_earmask.anchor.setTo(0.5);
         this.pony3earwaterGroup1.add(this.pony3_earmask);
         
         
         for (var i=1;i<=4;i++) {
        this['ear1_water'+i]=game.add.sprite(earwaterposX[i-1],earwaterposY[i-1]-30,'ear_water'+i);
        this['ear1_water'+i].anchor.setTo(0.5);
        this.pony3earwaterGroup1.add(this['ear1_water'+i]);
         }
                  this.pony3earwaterGroup1.alpha=0;

            this.hitGroup1 = game.add.group();
      for(var i=0; i<=Main.pony3_bodyX.length-1; i++)
      {
      this["hitCircle1_"+i] = game.add.graphics(Main.pony3_bodyX[i],Main.pony3_bodyY[i]);
      this["hitCircle1_"+i].beginFill(0x0000FF,0);
      this["hitCircle1_"+i].drawCircle(0,0,25);
      this["hitCircle1_"+i].id = i;
      this.hitGroup1.add(this["hitCircle1_"+i]);
      game.physics.arcade.enable([this["hitCircle1_"+i]]);
      }
      
      this.dragcircle1 = game.add.graphics(0,0);
      this.dragcircle1.beginFill(0xFF0000,0);
      this.dragcircle1.drawCircle(0,0,55);
      this.dragcircle1.endFill();
      
            this.hitGroup2 = game.add.group();
      for(var i=0; i<=Main.pony3_hairX.length-1; i++)
      {
      this["hitCircle2_"+i] = game.add.graphics(Main.pony3_hairX[i],Main.pony3_hairY[i]);
      this["hitCircle2_"+i].beginFill(0x0000FF,0);
      this["hitCircle2_"+i].drawCircle(0,0,25);
      this["hitCircle2_"+i].id = i;
      this.hitGroup2.add(this["hitCircle2_"+i]);
      game.physics.arcade.enable([this["hitCircle2_"+i]]);
      }
      
      this.dragcircle2 = game.add.graphics(0,0);
      this.dragcircle2.beginFill(0xFF0000,0);
      this.dragcircle2.drawCircle(0,0,55);
      this.dragcircle2.endFill();
      
             this.hitGroup3 = game.add.group();
      for(var i=0; i<=earwaterposX.length-1; i++)
      {
      this["hitCircle3_"+i] = game.add.graphics(earwaterposX[i],earwaterposY[i]-30);
      this["hitCircle3_"+i].beginFill(0x0000FF,0);
      this["hitCircle3_"+i].drawCircle(0,0,25);
      this["hitCircle3_"+i].id = i;
      this.hitGroup3.add(this["hitCircle3_"+i]);
      game.physics.arcade.enable([this["hitCircle3_"+i]]);
      this["hitCircle3_"+i].body.enable=false;
      }
      
      this.dragcircle3 = game.add.graphics(0,0);
      this.dragcircle3.beginFill(0xFF0000,0);
      this.dragcircle3.drawCircle(0,0,30);
      this.dragcircle3.endFill();
      
                  this.hitGroup4 = game.add.group();
      for(var i=0; i<=earwaterposX.length-1; i++)
      {
      this["hitCircle4_"+i] = game.add.graphics(earwaterposX[i],earwaterposY[i]-30);
      this["hitCircle4_"+i].beginFill(0x0000FF,0);
      this["hitCircle4_"+i].drawCircle(0,0,25);
      this["hitCircle4_"+i].id = i;
      this.hitGroup4.add(this["hitCircle4_"+i]);
      game.physics.arcade.enable([this["hitCircle4_"+i]]);
      this["hitCircle4_"+i].body.enable=false;
      }
      
      this.dragcircle4 = game.add.graphics(0,0);
      this.dragcircle4.beginFill(0xFF0000,0);
      this.dragcircle4.drawCircle(0,0,30);
      this.dragcircle4.endFill();
      
                     this.hitGroup5 = game.add.group();
      for(var i=0; i<=comb4hairposX.length-1; i++)
      {
      this["hitCircle5_"+i] = game.add.graphics(comb4hairposX[i],comb4hairposY[i]);
      this["hitCircle5_"+i].beginFill(0x0000FF,0);
      this["hitCircle5_"+i].drawCircle(0,0,25);
      this["hitCircle5_"+i].id = i;
      this.hitGroup5.add(this["hitCircle5_"+i]);
      game.physics.arcade.enable([this["hitCircle5_"+i]]);
      this["hitCircle5_"+i].body.enable=false;
      }
      
      this.dragcircle5 = game.add.graphics(0,0);
      this.dragcircle5.beginFill(0xFF0000,0);
      this.dragcircle5.drawCircle(0,0,30);
      this.dragcircle5.endFill();
      
         game.physics.arcade.enable([this.dragcircle1,this.dragcircle2,this.dragcircle3,this.dragcircle4,this.dragcircle5]);
      this.dragcircle1.body.onCollide = new Phaser.Signal();
      this.dragcircle1.body.onCollide.add(this.hitSprite1, this);
      this.dragcircle2.body.onCollide = new Phaser.Signal();
      this.dragcircle2.body.onCollide.add(this.hitSprite2, this);
      this.dragcircle3.body.onCollide = new Phaser.Signal();
      this.dragcircle3.body.onCollide.add(this.hitSprite3, this);
      this.dragcircle4.body.onCollide = new Phaser.Signal();
      this.dragcircle4.body.onCollide.add(this.hitSprite4, this);
      this.dragcircle5.body.onCollide = new Phaser.Signal();
      this.dragcircle5.body.onCollide.add(this.hitSprite5, this);
        
        this.treatmentGroup.add(this.clean_pony);
        this.treatmentGroup.add(this.comb4hairGroup);
        this.treatmentGroup.add(this.red4ballGroup);
        this.treatmentGroup.add(this.small4woundGroup);
        //this.treatmentGroup.add(this.black4ballGroup);
        this.treatmentGroup.add(this.red4crossGroup);
        //this.treatmentGroup.add(this.green4leafGroup);
        this.treatmentGroup.add(this.pony3_water1);
        this.treatmentGroup.add(this.pony3_water2);
                this.iconGroup.add(this.iconGroup1);
                this.iconGroup.add(this.iconGroup2);
          //this.legrect = game.add.graphics(330, 490);
          //  this.legrect.anchor.setTo(0.5);
          //  this.legrect.beginFill(0xFFFFFF, 1);
          //  this.legrect.drawRect(0, 0, 180, 70);
      
        this.levelGroup.add(this.treatmentGroup);
                this.levelGroup.add(this.pony3earwaterGroup);
                this.levelGroup.add(this.pony3earwaterGroup1);

        this.levelGroup.add(this.iconGroup);
        this.levelGroup.add(this.toolGroup);
         this.arrowGroup=game.add.group();
        this.arrow=game.add.sprite(this.clean1_icon1.x+75,this.clean1_icon1.y,'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrow.angle=90;
        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow',30,true);
        this.arrowGroup.add(this.arrow);
        this.arrow.visible=false;
         this.iconGroup1.x=-200;
      this.iconGroup2.x=200;
      this.morebtn = game.add.sprite(180,532.95,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(617.15,532.95,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
      
      if (Main.shutterOn[0]) {
         Main.shuttersound.play();
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
                for (var i=1;i<=30;i++) {
         this['tool'+i+'drag']=false;
         this['hitcount'+i]=0;
         this['testcount'+i]=0;
              }
        },
startPopUp:function(){
   game.add.tween(this.iconGroup1).to({x:[20,0]},500,"Linear",true);
   game.add.tween(this.iconGroup2).to({x:[-20,0]},500,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1,y:1},500,"Linear",true).onComplete.add(function(){
              this.arrow.visible=true;
         this['clean1_icon'+1].inputEnabled=true;
         this['clean1_icon'+1].input.useHandCursor=true;
      },this);
      },this);
   },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
iconfun1:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
     evt.visible=false;
            this['clean1_tool'+1].visible=true;
   this.tool1drag=true;
 this.arrow.angle=0;
this.arrow.x=this.clean_pony.x-50;
this.arrow.y=this.clean_pony.y-150;
   },
hitSprite1:function(obj,obj1){
   this.hitcount1++;
   obj1.kill();
   this.arrow.visible=false;
   if (this.hitcount1==15) {
        game.add.tween(this.pony3_water2).to({alpha:0},1000,Phaser.Easing.SinusoidalOut,true,1600).onComplete.add(function(){
          this.pony3_water2.alpha=0;
  obj.kill();
   for(var i=0; i<=Main.pony3_bodyX.length-1; i++)
      {
      this["hitCircle1_"+i].body.enable=false;
      this["hitCircle1_"+i].visible=false;
      }
              this['clean1_tool'+1].visible=false;
            this['clean1_icon'+1].visible=true;
 effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
             this.arrow.visible=true;
                     this.arrow.angle=90;
   this.arrow.x=this.clean1_icon2.x+80;
   this.arrow.y=this.clean1_icon2.y;
   this.clean1_icon2.inputEnabled=true;
   this.clean1_icon2.input.useHandCursor=true;
            },this);
         },this);
   }
   },
iconfun2:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.tool2drag=true;
   this.arrow.angle=0;
   this['clean1_tool'+2].visible=true;
   this['clean1_tool'+2].animations.add('clean1_tool2');
   this['clean1_tool'+2].animations.play('clean1_tool2',20,true);
            this['clean1_icon'+2].visible=false;
this.arrow.x=this.clean_pony.x-50;
this.arrow.y=this.clean_pony.y-210;
   },
hitSprite2:function(obj,obj1){
   this.hitcount2++;
   obj1.kill();
   this.arrow.visible=false;
   if (this.hitcount2==15) {
        game.add.tween(this.pony3_water1).to({alpha:0},1000,Phaser.Easing.SinusoidalOut,true,1600).onComplete.add(function(){
          this.pony3_water1.alpha=0;
  obj.kill();
   for(var i=0; i<=Main.pony3_hairX.length-1; i++)
      {
      this["hitCircle2_"+i].body.enable=false;
      this["hitCircle2_"+i].visible=false;
      }
              this['clean1_tool'+2].visible=false;
            this['clean1_icon'+2].visible=true;
 effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
             this.arrow.visible=true;
                     //this.arrow.angle=90;
   this.arrow.x=this.rect1.x+20;
   this.arrow.y=this.rect1.y-20;
   this.rect1.inputEnabled=true;
   this.rect1.input.useHandCursor=true;
   this.rect1.events.onInputDown.add(this.rectfun,this);
            },this);
         },this);
   }
   },
rectfun:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.kill();
   this.arrow.visible=false;
   game.add.tween(this.pony3earwaterGroup).to({alpha:1},600,"Linear",true).onComplete.add(function(){
        this.arrow.visible=true;
                     this.arrow.angle=90;
   this.arrow.x=this.clean1_icon3.x+80;
   this.arrow.y=this.clean1_icon3.y;
   this.clean1_icon3.inputEnabled=true;
   this.clean1_icon3.input.useHandCursor=true;
      },this);
   },
rectfun1:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.kill();
   this.arrow.visible=false;
   game.add.tween(this.pony3earwaterGroup1).to({alpha:1},600,"Linear",true).onComplete.add(function(){
        this.arrow.visible=true;
                     this.arrow.angle=90;
   this.arrow.x=this.clean1_icon3.x+80;
   this.arrow.y=this.clean1_icon3.y;
   this.clean1_icon3.inputEnabled=true;
   this.clean1_icon3.input.useHandCursor=true;
   this.clean1_icon3.events.onInputDown.add(this.icon1fun4,this);
      },this);
   },   
iconfun3:function(evt){
   Main.btn09.play();
   evt.visible=false;
   this.arrow.angle=0;
   this.arrow.x=this['ear_water'+1].x;
   this.arrow.y=this['ear_water'+1].y-40;
   evt.inputEnabled=false;
   this.tool3drag=true;
    this['clean1_tool'+3].visible=true;
            this['clean1_icon'+3].visible=false;
            this['hitCircle3_'+0].body.enable=true;
   },
icon1fun4:function(evt){
   Main.btn09.play();
       this['clean1_tool'+3].visible=true;
            this['clean1_icon'+3].visible=false;
    this.arrow.visible=true;
                     this.tool4drag=true;
            this['hitCircle4_'+0].body.enable=true;
 evt.visible=false;
   this.arrow.angle=0;
   this.arrow.x=this['ear1_water'+1].x;
   this.arrow.y=this['ear1_water'+1].y-40;
   evt.inputEnabled=false;
   },
hitSprite3:function(obj,obj1){
   obj1.kill();
   this.arrow.visible=false;
   this.hitcount3++;
   this.tool3drag=false;
   game.add.tween(this['ear_water'+this.hitcount3]).to({alpha:0},600,"Linear",true).onComplete.add(function(){
      if (this.hitcount3!=4) {
      this.tool3drag=true;
            this.arrow.visible=true;
   this.arrow.x=this['ear_water'+(this.hitcount3+1)].x;
   this.arrow.y=this['ear_water'+(this.hitcount3+1)].y-40;
               this['hitCircle3_'+this.hitcount3].body.enable=true;
      }else{
         obj.kill();
         this.tool3drag=false;
           this['clean1_tool'+3].visible=false;
 
            game.add.tween(this.pony3earwaterGroup).to({alpha:0},600,"Linear",true).onComplete.add(function(){
               this.arrow.visible=true;
               this.arrow.x=this.rect2.x+20;
   this.arrow.y=this.rect2.y-20;
   this.rect2.inputEnabled=true;
   this.rect2.input.useHandCursor=true;
   this.rect2.events.onInputDown.add(this.rectfun1,this);
       this['clean1_tool'+3].visible=false;
            this['clean1_icon'+3].visible=true;
 //  game.add.tween(this.pony3earwaterGroup1).to({alpha:1},600,"Linear",true).onComplete.add(function(){
 //           this.arrow.visible=true;
 //                    this.tool4drag=true;
 //
 //           this['hitCircle4_'+0].body.enable=true;
 //this.arrow.x=this['ear1_water'+1].x;
 //  this.arrow.y=this['ear1_water'+1].y-40;
 //          this['clean1_tool'+3].visible=true;
 //
 //  },this);
   },this);
      }
     

   },this);
   },
hitSprite4:function(obj,obj1){
   obj1.kill();
   this.arrow.visible=false;
   this.hitcount4++;
   this.tool4drag=false;
   game.add.tween(this['ear1_water'+this.hitcount4]).to({alpha:0},600,"Linear",true).onComplete.add(function(){
      if (this.hitcount4!=4) {
      this.tool4drag=true;
            this.arrow.visible=true;
   this.arrow.x=this['ear1_water'+(this.hitcount4+1)].x;
   this.arrow.y=this['ear1_water'+(this.hitcount4+1)].y-40;
               this['hitCircle4_'+this.hitcount4].body.enable=true;
      }else{
         obj.kill();
         this.tool4drag=false;
           this['clean1_tool'+3].visible=false;
            this['clean1_icon'+3].visible=true;
                        game.add.tween(this.pony3earwaterGroup1).to({alpha:0},600,"Linear",true).onComplete.add(function(){
         effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
this.arrow.visible=true;
this.arrow.angle=-90;
this.arrow.x=this.clean1_icon4.x-60;
this.arrow.y=this.clean1_icon4.y;
this.clean1_icon4.inputEnabled=true;
this.clean1_icon4.input.useHandCursor=true;
                        },this);
      }
   },this);
},
iconfun4:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.tool5drag=true;
    this['clean1_tool'+4].visible=true;
            this['clean1_icon'+4].visible=false;
            this.arrow.x=this["hitCircle5_"+0].x-20; 
            this.arrow.y=this["hitCircle5_"+0].y; 
                  this["hitCircle5_"+0].body.enable=true;
   },
hitSprite5:function(obj,obj1){
   obj1.kill();
   this.hitcount5++;
   if (this.hitcount5!=9) {
  this.arrow.x=this["hitCircle5_"+this.hitcount5].x-20; 
            this.arrow.y=this["hitCircle5_"+this.hitcount5].y; 
                     this["hitCircle5_"+this.hitcount5].body.enable=true;
                     this['comb4_hair'+this.hitcount5].alpha=0;
   }else{
      this.arrow.visible=false;
      this['clean1_tool'+4].visible=false;
            this['clean1_icon'+4].visible=true;
            effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
   game.time.events.add(2000,function(){
      this.arrow.visible=true;
this.arrow.angle=-90;
this.arrow.x=this.clean1_icon5.x-60;
this.arrow.y=this.clean1_icon5.y;
this.clean1_icon5.inputEnabled=true;
this.clean1_icon5.input.useHandCursor=true;
      },this);
   }
   },
iconfun5:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.tool6drag=true;
    this['clean1_tool'+5].visible=true;
            this['clean1_icon'+5].visible=false;
            this.arrow.angle=0;
            this.arrow.x=420;
            this.arrow.y=500;
                  //game.state.start('cleaning3level3');  

   },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","more");
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
   },
//btnnnnnnnnnnnnnn
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);
   },
removeGlitter:function(evt){
      evt.kill(); 
      },
update:function(){
   if (this.tool1drag) {
   this.clean1_tool1.x=game.input.activePointer.x;
   this.clean1_tool1.y=game.input.activePointer.y+60;
   this.dragcircle1.x=game.input.activePointer.x;
  this.dragcircle1.y=game.input.activePointer.y;
   for(var i=0; i<=Main.pony3_bodyX.length-1; i++)
      {
        game.physics.arcade.collide(this.dragcircle1, this['hitCircle1_'+i]);   
      }
   }
      if (this.tool2drag) {
   this.clean1_tool2.x=game.input.activePointer.x+50;
   this.clean1_tool2.y=game.input.activePointer.y+40;
   this.dragcircle2.x=game.input.activePointer.x;
  this.dragcircle2.y=game.input.activePointer.y;
   for(var i=0; i<=Main.pony3_hairX.length-1; i++)
      {
        game.physics.arcade.collide(this.dragcircle2, this['hitCircle2_'+i]);   
      }
   }
    if (this.tool3drag) {
   this.clean1_tool3.x=game.input.activePointer.x;
   this.clean1_tool3.y=game.input.activePointer.y+40;
    this.dragcircle3.x=game.input.activePointer.x;
  this.dragcircle3.y=game.input.activePointer.y;
   for(var i=0; i<=5; i++)
      {
        game.physics.arcade.collide(this.dragcircle3, this['hitCircle3_'+i]);   
      }
    }
    if (this.tool4drag) {
   this.clean1_tool3.x=game.input.activePointer.x;
   this.clean1_tool3.y=game.input.activePointer.y+40;
    this.dragcircle4.x=game.input.activePointer.x;
  this.dragcircle4.y=game.input.activePointer.y;
   for(var i=0; i<=5; i++)
      {
        game.physics.arcade.collide(this.dragcircle4, this['hitCircle4_'+i]);   
      }
    }
     if (this.tool5drag) {
   this.clean1_tool4.x=game.input.activePointer.x;
   this.clean1_tool4.y=game.input.activePointer.y+40;
     this.dragcircle5.x=game.input.activePointer.x;
  this.dragcircle5.y=game.input.activePointer.y;
   for(var i=0; i<=10; i++)
      {
        game.physics.arcade.collide(this.dragcircle5, this['hitCircle5_'+i]);   
      }
     }
     if (this.tool6drag) {
      console.log(this.clean1_tool5.x+" : "+this.clean1_tool5.y);
   this.clean1_tool5.x=game.input.activePointer.x;
   this.clean1_tool5.y=game.input.activePointer.y+40;
   if (this.clean1_tool5.x>355 && this.clean1_tool5.x<475 && this.clean1_tool5.y>505 && this.clean1_tool5.y<555 && this.testcount1==0) {
   this.testcount1=1;
   this.tool6drag=false;
   this.clean1_tool5.visible=false;
                     game.state.start('cleaning3level3');  
   }
     }
   },
}

Main.cleaning3level3 = function(){}

Main.cleaning3level3.prototype = {
    create:function(){
     
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
         this.bg=game.add.sprite(-750,-80,'fullbg');
        this.levelGroup.add(this.bg);
           this.iconGroup=game.add.group();
        this.toolGroup=game.add.group();
        this.iconGroup1=game.add.group();
        this.iconGroup2=game.add.group();
        this.icon_panel1=game.add.sprite(40.6,308.05,'icon_panel1');
        this.icon_panel1.anchor.setTo(0.5);
        this.iconGroup1.add(this.icon_panel1);
        var iconposX=[65.5,75.2,73.25,724.65,728.8,748.15];
        var iconposY=[90.2,260.2,421.1,130.65,293,425.65];
        var standposX=[58.9,58.9,58.9,735.85,735.85,735.85];
        var standposY=[166.15,315.2,477.25,179.15,327.15,502.35];
        this.icon_panel2=game.add.sprite(754.1,321.05,'icon_panel2');
        this.icon_panel2.anchor.setTo(0.5);
        this.iconGroup2.add(this.icon_panel2);
        
        
        this.clean2_plate=game.add.sprite(-230,530,'clean2_plate');
        this.clean2_plate.anchor.setTo(0.5);
        this.toolGroup.add(this.clean2_plate);
        
        this.drag_bolt=game.add.sprite(0,0,'drag_bolt');
        this.drag_bolt.anchor.setTo(0.5);
        this.drag_bolt.visible=false;
        this.toolGroup.add(this.drag_bolt);
        
 for (var i=1;i<=6;i++) {
        this['clean2_stand'+i]=game.add.sprite(standposX[i-1],standposY[i-1],'clean_stand1');
         this['clean2_stand'+i].anchor.setTo(0.5);
         if (i<=3) {
         this.iconGroup1.add(this['clean2_stand'+i])
         }else{
         this.iconGroup2.add(this['clean2_stand'+i])
         }
         
         this['clean2_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1]-10,'clean2_icon'+i);
         this['clean2_icon'+i].anchor.setTo(0.5);
         this['clean2_icon'+i].events.onInputDown.add(this['iconfun'+i],this);
         if (i<=3) {
         this.iconGroup1.add(this['clean2_icon'+i])
         }else{
         this.iconGroup2.add(this['clean2_icon'+i])
         }
          this['clean2_tool'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1]-10,'clean2_tool'+i);
         this['clean2_tool'+i].anchor.setTo(0.5);
         this['clean2_tool'+i].visible=false;
         this.toolGroup.add(this['clean2_tool'+i])
        }
        
        
        
        this.footGroup=game.add.group();
        this.frontfootGroup=game.add.group();
        this.backfootGroup=game.add.group();
        
        this.clean2_panel=game.add.sprite(418.05,307.8,'clean2_panel');
        this.clean2_panel.anchor.setTo(0.5);
        this.footGroup.add(this.clean2_panel);
        
        this.clean2_foot=game.add.sprite(418.05,307.8,'clean2_foot');
        this.clean2_foot.anchor.setTo(0.5);
        this.frontfootGroup.add(this.clean2_foot);
        
        this.clean2_dust1=game.add.sprite(417.55,335.8,'clean2_dust1');
        this.clean2_dust1.anchor.setTo(0.5);
        this.frontfootGroup.add(this.clean2_dust1);
        
        this.clean2_dust2=game.add.sprite(417.55,335.8,'clean2_dust2');
        this.clean2_dust2.anchor.setTo(0.5);
        this.frontfootGroup.add(this.clean2_dust2);
        
        this.clean2_dust3=game.add.sprite(419.55,333.8,'clean2_dust3');
        this.clean2_dust3.anchor.setTo(0.5);
        this.frontfootGroup.add(this.clean2_dust3);
        
        this.clean2_dust4=game.add.sprite(419.55,333.8,'clean2_dust4');
        this.clean2_dust4.anchor.setTo(0.5);
        this.clean2_dust4.visible=false;
        this.frontfootGroup.add(this.clean2_dust4);
        
       //var boltposX=[317.05,307.55,318.05,537.5,550.5,538.5];//1frame
       //var boltposY=[268.25,318.25,369.75,369.75,321.75,271.75];//1frame
       var boltposX=[317.05,307.55,318.05,537.5,550.5,537.5];//1frame
       var boltposY=[269.25,318.25,369.75,370.75,321.75,271.75];//1frame
        var bolt1posX=[329.05,318.55,335.05,548.5,560.5,548.5];//2frame
        var bolt1posY=[260.25,310.25,360.75,362.75,312.75,263.75];//2frame
        //var boltposX=[307.05,299.55,313.05,529.5,540.5,528.5];
        //var boltposY=[268.25,318.25,367.75,369.75,321.75,271.75];
        for (var i=1;i<=6;i++) {
     this['clean2_bolt'+i]=game.add.sprite(boltposX[i-1],boltposY[i-1],'clean2_bolt');
     this['clean2_bolt'+i].anchor.setTo(0.5);
     this.frontfootGroup.add(this['clean2_bolt'+i]);
        }
        
          for (var i=1;i<=6;i++) {
     this['clean21_bolt'+i]=game.add.sprite(bolt1posX[i-1],bolt1posY[i-1],'clean2_bolt');
     this['clean21_bolt'+i].anchor.setTo(0.5);
     this['clean21_bolt'+i].frame=1;
     this['clean21_bolt'+i].visible=false;
     this.frontfootGroup.add(this['clean21_bolt'+i]);
        }
        
         for (var i=1;i<=6;i++) {
     this['clean22_bolt'+i]=game.add.sprite(boltposX[i-1],boltposY[i-1],'clean2_bolt');
     this['clean22_bolt'+i].anchor.setTo(0.5);
     this['clean22_bolt'+i].frame=2;
     this['clean22_bolt'+i].visible=false;
     this.frontfootGroup.add(this['clean22_bolt'+i]);
        }
        
        
        this.clean2_backfoot=game.add.sprite(416.45,309.3,'clean2_backfoot');
        this.clean2_backfoot.anchor.setTo(0.5);
        this.backfootGroup.add(this.clean2_backfoot);
        
        this.clean2_backdust1=game.add.sprite(416.5,341.85,'clean2_backdust1');
        this.clean2_backdust1.anchor.setTo(0.5);
        this.backfootGroup.add(this.clean2_backdust1);
        
        var dust1posX=[291.95,315.45,362.95,480.95,508.45,527.95];
        var dust1posY=[328.3,375.3,409.3,398.3,363.3,315.3];
        
        for (var i=1;i<=6;i++) {
        this['clean2_back1dust'+i]=game.add.sprite(dust1posX[i-1],dust1posY[i-1],'clean2_back1dust'+i);
        this['clean2_back1dust'+i].anchor.setTo(0.5);
        this.backfootGroup.add(this['clean2_back1dust'+i]);
        }
        
        this.backfootGroup.alpha=0;

         this.iconGroup.add(this.iconGroup1);
         this.iconGroup.add(this.iconGroup2);
                
        this.levelGroup.add(this.footGroup);
        this.levelGroup.add(this.frontfootGroup);
        this.levelGroup.add(this.backfootGroup);
        this.levelGroup.add(this.iconGroup);
        this.levelGroup.add(this.toolGroup);
        
        
        
         this.arrowGroup=game.add.group();
        this.arrow=game.add.sprite(this.clean2_icon1.x+75,this.clean2_icon1.y,'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrow.angle=90;
        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow',30,true);
        this.arrowGroup.add(this.arrow);
        
              this.hitGroup1 = game.add.group();
      for(var i=0; i<=boltposX.length-1; i++)
      {
      this["hitCircle1_"+i] = game.add.graphics(boltposX[i]-10,boltposY[i]);
      this["hitCircle1_"+i].beginFill(0x0000FF,0);
      this["hitCircle1_"+i].drawCircle(0,0,25);
      this["hitCircle1_"+i].id = i;
      this.hitGroup1.add(this["hitCircle1_"+i]);
      game.physics.arcade.enable([this["hitCircle1_"+i]]);
      this["hitCircle1_"+i].body.enable=false;
      }
      
      this.dragcircle1 = game.add.graphics(0,0);
      this.dragcircle1.beginFill(0xFF0000,0);
      this.dragcircle1.drawCircle(0,0,20);
      this.dragcircle1.endFill();
      
      var dustposX = [352,352,500,500];
      var dustposY = [280,380,280,380];
           this.hitGroup2 = game.add.group();
      for(var i=0; i<=dustposX.length-1; i++)
      {
      this["hitCircle2_"+i] = game.add.graphics(dustposX[i]-10,dustposY[i]);
      this["hitCircle2_"+i].beginFill(0x0000FF,0);
      this["hitCircle2_"+i].drawCircle(0,0,25);
      this["hitCircle2_"+i].id = i;
      this.hitGroup2.add(this["hitCircle2_"+i]);
      game.physics.arcade.enable([this["hitCircle2_"+i]]);
      }
      
      this.dragcircle2 = game.add.graphics(0,0);
      this.dragcircle2.beginFill(0xFF0000,0);
      this.dragcircle2.drawCircle(0,0,20);
      this.dragcircle2.endFill();
      
            this.hitGroup3 = game.add.group();
      for(var i=0; i<=dustposX.length-1; i++)
      {
      this["hitCircle3_"+i] = game.add.graphics(dustposX[i]-10,dustposY[i]);
      this["hitCircle3_"+i].beginFill(0x0000FF,0);
      this["hitCircle3_"+i].drawCircle(0,0,25);
      this["hitCircle3_"+i].id = i;
      this.hitGroup3.add(this["hitCircle3_"+i]);
      game.physics.arcade.enable([this["hitCircle3_"+i]]);
      }
      
      this.dragcircle3 = game.add.graphics(0,0);
      this.dragcircle3.beginFill(0xFF0000,0);
      this.dragcircle3.drawCircle(0,0,20);
      this.dragcircle3.endFill();
      
               this.hitGroup4 = game.add.group();
      for(var i=0; i<=boltposX.length-1; i++)
      {
      this["hitCircle4_"+i] = game.add.graphics(boltposX[i]-10,boltposY[i]);
      this["hitCircle4_"+i].beginFill(0x0000FF,0);
      this["hitCircle4_"+i].drawCircle(0,0,25);
      this["hitCircle4_"+i].id = i;
      this.hitGroup4.add(this["hitCircle4_"+i]);
      game.physics.arcade.enable([this["hitCircle4_"+i]]);
      this["hitCircle4_"+i].body.enable=false;
      }
      
      this.dragcircle4 = game.add.graphics(0,0);
      this.dragcircle4.beginFill(0xFF0000,0);
      this.dragcircle4.drawCircle(0,0,20);
      this.dragcircle4.endFill();
      
                   this.hitGroup5 = game.add.group();
      for(var i=0; i<=boltposX.length-1; i++)
      {
      this["hitCircle5_"+i] = game.add.graphics(boltposX[i]+25,boltposY[i]-10);
      this["hitCircle5_"+i].beginFill(0x0000FF,0);
      this["hitCircle5_"+i].drawCircle(0,0,25);
      this["hitCircle5_"+i].id = i;
      this.hitGroup5.add(this["hitCircle5_"+i]);
      game.physics.arcade.enable([this["hitCircle5_"+i]]);
      this["hitCircle5_"+i].body.enable=false;
      }
      
      this.dragcircle5 = game.add.graphics(0,0);
      this.dragcircle5.beginFill(0xFF0000,0);
      this.dragcircle5.drawCircle(0,0,20);
      this.dragcircle5.endFill();
      
            this.hitGroup6 = game.add.group();
      for(var i=0; i<=dustposX.length-1; i++)
      {
      this["hitCircle6_"+i] = game.add.graphics(dustposX[i]-10,dustposY[i]);
      this["hitCircle6_"+i].beginFill(0x0000FF,0);
      this["hitCircle6_"+i].drawCircle(0,0,25);
      this["hitCircle6_"+i].id = i;
      this.hitGroup6.add(this["hitCircle6_"+i]);
      game.physics.arcade.enable([this["hitCircle6_"+i]]);
      }
      
      this.dragcircle6 = game.add.graphics(0,0);
      this.dragcircle6.beginFill(0xFF0000,0);
      this.dragcircle6.drawCircle(0,0,20);
      this.dragcircle6.endFill();
      
            this.hitGroup7 = game.add.group();
      for(var i=0; i<=dust1posX.length-1; i++)
      {
      this["hitCircle7_"+i] = game.add.graphics(dust1posX[i]-10,dust1posY[i]);
      this["hitCircle7_"+i].beginFill(0x0000FF,0);
      this["hitCircle7_"+i].drawCircle(0,0,25);
      this["hitCircle7_"+i].id = i;
      this.hitGroup7.add(this["hitCircle7_"+i]);
      game.physics.arcade.enable([this["hitCircle7_"+i]]);
      }
      
      this.dragcircle7 = game.add.graphics(0,0);
      this.dragcircle7.beginFill(0xFF0000,0);
      this.dragcircle7.drawCircle(0,0,20);
      this.dragcircle7.endFill();
      
      game.physics.arcade.enable([this.dragcircle1,this.dragcircle2,this.dragcircle3,this.dragcircle4,this.dragcircle5,this.dragcircle6,this.dragcircle7]);
      this.dragcircle1.body.onCollide = new Phaser.Signal();
      this.dragcircle1.body.onCollide.add(this.hitSprite1, this);
      this.dragcircle2.body.onCollide = new Phaser.Signal();
      this.dragcircle2.body.onCollide.add(this.hitSprite2, this);
      this.dragcircle3.body.onCollide = new Phaser.Signal();
      this.dragcircle3.body.onCollide.add(this.hitSprite3, this);
      this.dragcircle4.body.onCollide = new Phaser.Signal();
      this.dragcircle4.body.onCollide.add(this.hitSprite4, this);
      this.dragcircle5.body.onCollide = new Phaser.Signal();
      this.dragcircle5.body.onCollide.add(this.hitSprite5, this);
      this.dragcircle6.body.onCollide = new Phaser.Signal();
      this.dragcircle6.body.onCollide.add(this.hitSprite6, this);
      this.dragcircle7.body.onCollide = new Phaser.Signal();
      this.dragcircle7.body.onCollide.add(this.hitSprite7, this);
      
             this.arrow.visible=false;
         this.iconGroup1.x=-200;
      this.iconGroup2.x=200;
      this.morebtn = game.add.sprite(180,532.95,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(617.15,532.95,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
      game.time.events.add(500,function(){
         game.add.tween(this.iconGroup1).to({x:[20,0]},500,"Linear",true);
   game.add.tween(this.iconGroup2).to({x:[-20,0]},500,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1,y:1},500,"Linear",true).onComplete.add(function(){
              this.arrow.visible=true;
         this['clean2_icon'+1].inputEnabled=true;
         this['clean2_icon'+1].input.useHandCursor=true;
      },this);
      },this);
         },this);
      //if (Main.shutterOn[0]) {
      //   this.shutter = game.add.sprite(0,0,'shutterbg');
      //   game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
      //  }
      this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
                for (var i=1;i<=30;i++) {
         this['tool'+i+'drag']=false;
         this['hitcount'+i]=0;
         this['testcount'+i]=0;
              }
        },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
iconfun1:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.tool1drag=true;
   this['clean2_icon'+1].visible=false;
   this['clean2_tool'+1].visible=true;
   this['clean2_tool'+1].scale.setTo(0.5);
   this.arrow.angle=-90;
   this.arrow.x=this['clean2_bolt'+1].x-50;
   this.arrow.y=this['clean2_bolt'+1].y;
         this["hitCircle1_"+0].body.enable=true;
   },
hitSprite1:function(obj,obj1){
   obj1.kill();
   this.hitcount1++;
 this.arrow.visible=false;
      for(var i=0; i<=5; i++)
      {
      this["hitCircle1_"+i].body.enable=false;
      }
      this['clean2_tool'+1].frame=1;
      this['clean2_bolt'+(obj1.id+1)].visible=false;
    game.add.tween(this.clean2_plate).to({x:330},500,"Linear",true).onComplete.add(function(){
       this.arrow.visible=true;
      this.arrow.angle=0;
  this.arrow.x=this.clean2_plate.x;
   this.arrow.y=this.clean2_plate.y-40;
   this.clean2_plate.inputEnabled=true;
   this.clean2_plate.input.useHandCursor=true;
   this.clean2_plate.events.onInputDown.add(this.platefun,this);
      },this);
   },
platefun:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.frame=1;
         this['clean2_tool'+1].frame=0;
         this.arrow.visible=false;
         if(this.hitcount1==6){
             this['clean2_icon'+1].visible=true;
   this['clean2_tool'+1].visible=false;   
         }
             game.add.tween(this.clean2_plate).to({x:-230},500,"Linear",true).onComplete.add(function(){
this.clean2_plate.frame=0;
this.arrow.visible=true;
 this.arrow.angle=-90;
   if(this.hitcount1!=6){
       this.arrow.x=this['clean2_bolt'+(this.hitcount1+1)].x-50;
   this.arrow.y=this['clean2_bolt'+(this.hitcount1+1)].y;
    this["hitCircle1_"+this.hitcount1].body.enable=true;
   }else{
  this.arrow.visible=false;

   this.tool1drag=false;
    effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
              this.arrow.visible=true;

   this.arrow.x=this.clean2_dust3.x-150;
   this.arrow.y=this.clean2_dust3.y;
   this.clean2_dust3.inputEnabled=true;
   this.clean2_dust3.input.useHandCursor=true;
   this.clean2_dust3.events.onInputDown.add(this.cleandustfun,this);
   },this);
   }
             },this);
   },
cleandustfun:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   this.arrow.visible=false;
   game.add.tween(evt).to({y:1000},1500,"Linear",true).onComplete.add(function(){
      effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
            this.arrow.visible=true;
this.arrow.angle=90;
this.arrow.x=this.clean2_icon2.x+70;
this.arrow.y=this.clean2_icon2.y;
this.clean2_icon2.inputEnabled=true;
this.clean2_icon2.input.useHandCursor=true;
   },this);
   },this);
   },
iconfun2:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.tool2drag=true;
   this['clean2_icon'+2].visible=false;
   this['clean2_tool'+2].visible=true;
   this.arrow.angle=-90;
   this.arrow.x=this.clean2_dust2.x-130;
   this.arrow.y=this.clean2_dust2.y;
   },
hitSprite2:function(obj,obj1){
   
   obj1.kill();
   this.hitcount2++;
   this.arrow.visible=false;
  switch (this.hitcount2) {
   case 1:
      game.add.tween(this.clean2_dust2).to({alpha:0.8},500,"Linear",true);
      break;
    case 2:
      game.add.tween(this.clean2_dust2).to({alpha:0.6},500,"Linear",true);
      break;
 case 3:
      game.add.tween(this.clean2_dust2).to({alpha:0.4},500,"Linear",true);
      break;
 case 4:
      game.add.tween(this.clean2_dust2).to({alpha:0},500,"Linear",true).onComplete.add(function(){
         this.tool2drag=false;
         obj.kill();
          this['clean2_icon'+2].visible=true;
   this['clean2_tool'+2].visible=false;
   effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
               this.arrow.visible=true;
this.arrow.angle=90;
this.arrow.x=this.clean2_icon3.x+70;
this.arrow.y=this.clean2_icon3.y;
this.clean2_icon3.inputEnabled=true;
this.clean2_icon3.input.useHandCursor=true;
         },this);
         },this);
      break;
  }
   },
iconfun3:function(evt){
   Main.btn09.play();
    evt.inputEnabled=false;
   evt.visible=false;
   this.tool3drag=true;
   this['clean2_icon'+3].visible=false;
   this['clean2_tool'+3].visible=true;
   this.arrow.angle=-90;
   this.arrow.x=this.clean2_dust2.x-130;
   this.arrow.y=this.clean2_dust2.y;
   
   },
   icon1fun3:function(evt){
   Main.btn09.play();
       evt.inputEnabled=false;
   evt.visible=false;
   this.tool6drag=true;
   this['clean2_icon'+3].visible=false;
   this['clean2_tool'+3].visible=true;
   this.arrow.angle=-90;
   this.arrow.x=this.clean2_dust2.x-130;
   this.arrow.y=this.clean2_dust2.y;
   },
hitSprite3:function(obj,obj1){
   obj1.kill();
   this.hitcount3++;
   this.arrow.visible=false;
  switch (this.hitcount3) {
   case 1:
      game.add.tween(this.clean2_dust1).to({alpha:0.8},500,"Linear",true);
      break;
    case 2:
      game.add.tween(this.clean2_dust1).to({alpha:0.6},500,"Linear",true);
      break;
 case 3:
      game.add.tween(this.clean2_dust1).to({alpha:0.4},500,"Linear",true);
      break;
 case 4:
      game.add.tween(this.clean2_dust1).to({alpha:0},500,"Linear",true).onComplete.add(function(){
         this.tool3drag=false;
         obj.kill();
          this['clean2_icon'+3].visible=true;
   this['clean2_tool'+3].visible=false;
   effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
               this.arrow.visible=true;
this.arrow.angle=-90;
this.arrow.x=this.clean2_icon5.x-80;
this.arrow.y=this.clean2_icon5.y;
this.clean2_icon5.inputEnabled=true;
this.clean2_icon5.input.useHandCursor=true;
         },this);
         },this);
      break;
  }
   },
iconfun4:function(evt){
   evt.inputEnabled=false;
   evt.visible=false;
   this.tool7drag=true;
   Main.btn09.play();
   this['clean2_icon'+4].visible=false;
   this['clean2_tool'+4].visible=true;
 this.arrow.x=this.clean2_dust2.x-130;
   this.arrow.y=this.clean2_dust2.y;
   },
   hitSprite7:function(obj,obj1){
      obj1.kill();
      this.hitcount7++;
      this.arrow.visible=false;
   console.log(obj1.id+" : "+this.hitcount7);
              this['clean2_back1dust'+(obj1.id+1)].kill();
if (this.hitcount7==6) {
this.tool7drag=false;
 this['clean2_icon'+4].visible=true;
   this['clean2_tool'+4].visible=false;
   obj.kill();
   effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
            game.add.tween(this.donebtn.scale).to({x:1,y:1},500,"Linear",true);
         },this);
}else{
        
}
      },
iconfun5:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.clean2_dust4.visible=true;
   this.arrow.visible=false;
   this.clean2_plate.frame=2;
    game.add.tween(this.clean2_plate).to({x:330},500,"Linear",true).onComplete.add(function(){
       this.arrow.visible=true;
      this.arrow.angle=0;
   this.arrow.x=this.clean2_plate.x;
   this.arrow.y=this.clean2_plate.y-40;
   this.clean2_plate.inputEnabled=true;
   this.clean2_plate.input.useHandCursor=true;
   this.clean2_plate.events.onInputDown.removeAll();
   this.clean2_plate.events.onInputDown.add(this.platefun1,this);
      },this);
   },
platefun1:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false
      this.clean2_plate.frame=0;
      this.tool4drag=true;
      this.arrow.visible=false;
           this.drag_bolt.visible=true;
           game.add.tween(this.clean2_plate).to({x:-230},500,"Linear",true).onComplete.add(function(){
            if (this.hitcount4!=6) {
           this["hitCircle4_"+this.hitcount4].body.enable=true;
                      this.clean2_plate.frame=2;
   this.arrow.angle=-90;
   this.arrow.visible=true;
   this.arrow.x=this["hitCircle4_"+this.hitcount4].x-40;
   this.arrow.y=this["hitCircle4_"+this.hitcount4].y;
            }
              
           },this);
   },
hitSprite4:function(obj,obj1){
   obj1.kill();
   this.hitcount4++;
      this['clean21_bolt'+this.hitcount4].visible=true;
this.drag_bolt.visible=false;
this.arrow.visible=false;
        if (this.hitcount4!=6) {

 game.add.tween(this.clean2_plate).to({x:330},500,"Linear",true).onComplete.add(function(){
         this.arrow.visible=true;
      this.arrow.angle=0;
   this.arrow.x=this.clean2_plate.x;
   this.arrow.y=this.clean2_plate.y-40;
   this.clean2_plate.inputEnabled=true;
   this.clean2_plate.input.useHandCursor=true;
   this.clean2_plate.events.onInputDown.removeAll();
   this.clean2_plate.events.onInputDown.add(this.platefun1,this);
      
      },this);
         }else{
            obj.kill();
             effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
                          this.arrow.visible=true;
this.arrow.angle=-90;
this.arrow.x=this.clean2_icon6.x-80;
this.arrow.y=this.clean2_icon6.y;
this.clean2_icon6.inputEnabled=true;
this.clean2_icon6.input.useHandCursor=true;
},this);

         }
   //if (this.hitcount4!=7) {
   //this.arrow.x=this['clean2_bolt'+(this.hitcount4+1)].x-50;
   //this.arrow.y=this['clean2_bolt'+(this.hitcount4+1)].y;
   //                this["hitCircle4_"+this.hitcount4].body.enable=true;
   //}
   //

   },
iconfun6:function(evt){
   evt.visible=false;
   Main.btn09.play();
   evt.inputEnabled=false;
   this.tool5drag=true;
     this['clean2_icon'+6].visible=false;
   this['clean2_tool'+6].visible=true;
     this.arrow.angle=-90;
   this.arrow.x=this["hitCircle5_"+0].x-40;
   this.arrow.y=this["hitCircle5_"+0].y;
         this["hitCircle5_"+0].body.enable=true;

   },
hitSprite5:function(obj,obj1){
   obj1.kill();
   this.hitcount5++;

   if (this.hitcount5!=6) {
              this['clean22_bolt'+this.hitcount5].visible=true;
              this['clean21_bolt'+this.hitcount5].visible=false;
    this.arrow.x=this["hitCircle5_"+this.hitcount5].x-40;
   this.arrow.y=this["hitCircle5_"+this.hitcount5].y;
         this["hitCircle5_"+this.hitcount5].body.enable=true;
   }else{
      obj.kill();
       this['clean22_bolt'+6].visible=true;
              this['clean21_bolt'+6].visible=false;
      this.tool5drag=false;
        this['clean2_icon'+6].visible=true;
   this['clean2_tool'+6].visible=false;
   this.arrow.visible=false;
    effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
   game.add.tween(this.frontfootGroup).to({alpha:0},600,"Linear",true).onComplete.add(function(){
   game.add.tween(this.backfootGroup).to({alpha:1},600,"Linear",true).onComplete.add(function(){
       this.arrow.visible=true;
this.arrow.angle=90;
this.arrow.x=this.clean2_icon3.x+70;
this.arrow.y=this.clean2_icon3.y;
this.clean2_icon3.inputEnabled=true;
this.clean2_icon3.input.useHandCursor=true;
this.clean2_icon3.events.onInputDown.removeAll();
this.clean2_icon3.events.onInputDown.add(this.icon1fun3,this);
         },this);
  
      },this);
      },this);
   }
   },
hitSprite6:function(obj,obj1){
   obj1.kill();
   this.hitcount6++;
   this.arrow.visible=false;
  switch (this.hitcount6) {
   case 1:
      game.add.tween(this.clean2_backdust1).to({alpha:0.8},500,"Linear",true);
      break;
    case 2:
      game.add.tween(this.clean2_backdust1).to({alpha:0.6},500,"Linear",true);
      break;
 case 3:
      game.add.tween(this.clean2_backdust1).to({alpha:0.4},500,"Linear",true);
      break;
 case 4:
      game.add.tween(this.clean2_backdust1).to({alpha:0},500,"Linear",true).onComplete.add(function(){
         this.tool6drag=false;
         obj.kill();
          this['clean2_icon'+3].visible=true;
   this['clean2_tool'+3].visible=false;
   effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
               this.arrow.visible=true;
this.arrow.angle=-90;
this.arrow.x=this.clean2_icon4.x-80;
this.arrow.y=this.clean2_icon4.y;
this.clean2_icon4.inputEnabled=true;
this.clean2_icon4.input.useHandCursor=true;
         },this);
         },this);
      break;
  }
   },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","more");
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
   Main.shuttersound.play();
    gdsdk.showBanner();
    //game.sound.mute = false;
   this.shutter = game.add.sprite(0,-850,'shutterbg');
    game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('treatment1level3');   
         });
   
   },
//btnnnnnnnnnnnnnn
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);
   },
removeGlitter:function(evt){
      evt.kill(); 
      },
update:function(){
   if (this.tool1drag) {
   this.clean2_tool1.x=game.input.activePointer.x;
   this.clean2_tool1.y=game.input.activePointer.y;
   this.dragcircle1.x=game.input.activePointer.x+5;
   this.dragcircle1.y=game.input.activePointer.y-50;
     for(var i=0; i<=6; i++)
      {
         game.physics.arcade.collide(this.dragcircle1, this['hitCircle1_'+i]);   
      }
   }
   if (this.tool2drag) {
   this.clean2_tool2.x=game.input.activePointer.x;
   this.clean2_tool2.y=game.input.activePointer.y;
   this.dragcircle2.x=game.input.activePointer.x+25;
   this.dragcircle2.y=game.input.activePointer.y-50;
    for(var i=0; i<=6; i++)
      {
         game.physics.arcade.collide(this.dragcircle2, this['hitCircle2_'+i]);   
      }
   }
   if (this.tool3drag) {
   this.clean2_tool3.x=game.input.activePointer.x;
   this.clean2_tool3.y=game.input.activePointer.y;
   this.dragcircle3.x=game.input.activePointer.x;
   this.dragcircle3.y=game.input.activePointer.y;
    for(var i=0; i<=6; i++)
      {
         game.physics.arcade.collide(this.dragcircle3, this['hitCircle3_'+i]);   
      }
   }
     if (this.tool4drag) {
   this.drag_bolt.x=game.input.activePointer.x+25;
   this.drag_bolt.y=game.input.activePointer.y-5;
    this.dragcircle4.x=game.input.activePointer.x;
   this.dragcircle4.y=game.input.activePointer.y;
    for(var i=0; i<=6; i++)
      {
         game.physics.arcade.collide(this.dragcircle4, this['hitCircle4_'+i]);   
      }
     }
      if (this.tool5drag) {
   this.clean2_tool6.x=game.input.activePointer.x+20;
   this.clean2_tool6.y=game.input.activePointer.y+20;
    this.dragcircle5.x=game.input.activePointer.x;
   this.dragcircle5.y=game.input.activePointer.y;
    for(var i=0; i<=6; i++)
      {
         game.physics.arcade.collide(this.dragcircle5, this['hitCircle5_'+i]);   
      }
     }
        if (this.tool6drag) {
   this.clean2_tool3.x=game.input.activePointer.x;
   this.clean2_tool3.y=game.input.activePointer.y;
   this.dragcircle6.x=game.input.activePointer.x;
   this.dragcircle6.y=game.input.activePointer.y;
    for(var i=0; i<=6; i++)
      {
         game.physics.arcade.collide(this.dragcircle6, this['hitCircle6_'+i]);   
      }
   }
        if (this.tool7drag) {
         this.clean2_tool4.scale.setTo(0.4);
   this.clean2_tool4.x=game.input.activePointer.x+30;
   this.clean2_tool4.y=game.input.activePointer.y+25;
   this.dragcircle7.x=game.input.activePointer.x;
   this.dragcircle7.y=game.input.activePointer.y;
    for(var i=0; i<=10; i++)
      {
         game.physics.arcade.collide(this.dragcircle7, this['hitCircle7_'+i]);   
      }
   }
   },
}
Main.treatment1level3 = function(){}

Main.treatment1level3.prototype = {
    create:function(){
      //game.sound.mute = true;
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
        this.bg=game.add.sprite(-250,-80,'fullbg');
        this.levelGroup.add(this.bg);
           this.iconGroup=game.add.group();
        this.toolGroup=game.add.group();
        this.iconGroup1=game.add.group();
        this.iconGroup2=game.add.group();
        this.icon_panel1=game.add.sprite(40.6,308.05,'icon_panel1');
        this.icon_panel1.anchor.setTo(0.5);
        this.iconGroup1.add(this.icon_panel1);
        var iconposX=[82.3,69.8,731.2,732.15];
        var iconposY=[136.45,405.45,138.2,354];
        var standposX=[58.9,65.7,732.85,729.05];
        var standposY=[224.2,433.25,205.2,433.25];
        this.icon_panel2=game.add.sprite(754.1,321.05,'icon_panel2');
        this.icon_panel2.anchor.setTo(0.5);
        this.iconGroup2.add(this.icon_panel2);
        
        
 for (var i=1;i<=4;i++) {
        this['treatment_stand'+i]=game.add.sprite(standposX[i-1],standposY[i-1],'clean_stand1');
         this['treatment_stand'+i].anchor.setTo(0.5);
         if (i<=2) {
         this.iconGroup1.add(this['treatment_stand'+i])
         }else{
         this.iconGroup2.add(this['treatment_stand'+i])
         }
         this['treatment_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1]-10,'treatment_icon'+i);
         this['treatment_icon'+i].anchor.setTo(0.5);
         this['treatment_icon'+i].events.onInputDown.add(this['iconfun'+i],this);
         if (i<=2) {
         this.iconGroup1.add(this['treatment_icon'+i])
         }else{
         this.iconGroup2.add(this['treatment_icon'+i])
         }
          this['treatment_tool'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1]-10,'treatment_tool'+i);
         this['treatment_tool'+i].anchor.setTo(0.5);
         this['treatment_tool'+i].visible=false;
         this.toolGroup.add(this['treatment_tool'+i])
        }
        
          this.treatmentGroup=game.add.group();
        
        this.clean_pony=game.add.sprite(418.4,325.6,'clean_pony3');
        this.clean_pony.anchor.setTo(0.5);
        
        this.pony3_redcircle=game.add.sprite(322.55,277.25,'pony3_redcircle');
        this.pony3_redcircle.anchor.setTo(0.5);
        
        //this.pony3_redcircle1=game.add.sprite(332.55,275.25,'pony3_redcircle1');
        //this.pony3_redcircle1.anchor.setTo(0.5);
        //
        //this.pony3_redcircle2=game.add.sprite(258.55,278.25,'pony3_redcircle2');
        //this.pony3_redcircle2.anchor.setTo(0.5);
        
        //this.comb4hairGroup=game.add.group();
        //var comb4hairposX=[355.3,381.3,473.85,366.8,398.8,400.85,422.3,496.6,473.85];
        //var comb4hairposY=[398.25,379.75,403.75,445.25,445.25,503.8,485.25,487.35,526.25];
        //for (var i=1;i<=9;i++) {
        //this['comb4_hair'+i]=game.add.sprite(comb4hairposX[i-1],comb4hairposY[i-1],'comb4_hair'+i);
        //this['comb4_hair'+i].anchor.setTo(0.5);
        //this['comb4_hair'+i].visible=Main.pony3vis[0];
        //this.comb4hairGroup.add(this['comb4_hair'+i]);
        //}
        
      this.red4ballGroup=game.add.group();
        var red4ballposX=[332.05,470.4,465.05,373.6,415.6,488.55];
        var red4ballposY=[329.45,361.45,432.45,475.3,524.15,509.65];
        for (var i=1;i<=6;i++) {
        this['red4_ball'+i]=game.add.sprite(red4ballposX[i-1],red4ballposY[i-1],'red4_ball'+i);
        this['red4_ball'+i].anchor.setTo(0.5);
        this.red4ballGroup.add(this['red4_ball'+i]);
        }
        
        this.small4woundGroup=game.add.group();
        var small4woundposX=[298.95,290.35,350.35,360.8,404.8,483.3,477.65];
        var small4woundposY=[235.95,292.95,395.95,500.95,475.95,465.5,529.2];
        for (var i=1;i<=7;i++) {
        this['small4_wound'+i]=game.add.sprite(small4woundposX[i-1],small4woundposY[i-1],'small4_wound'+i);
        this['small4_wound'+i].anchor.setTo(0.5);
        this.small4woundGroup.add(this['small4_wound'+i]);
        }
        //  this.black4ballGroup=game.add.group();
        //var black4ballposX=[371.1,291.25,338.95,356,399.15,470.2,366.1,411.05,480.8];
        //var black4ballposY=[212.3,250.15,339.2,407.75,433.45,398.55,502,532.3,483.95];
        //for (var i=1;i<=9;i++) {
        //this['black4_ball'+i]=game.add.sprite(black4ballposX[i-1],black4ballposY[i-1],'black4_ball'+i);
        //this['black4_ball'+i].anchor.setTo(0.5);
        //this.black4ballGroup.add(this['black4_ball'+i]);
        //}
        this.red4crossGroup=game.add.group();
        var red4crossposX=[427.35,330.4,480.35,458.95,355.75,415.75,495.95];
        var red4crossposY=[150.45,331.45,319.45,425.95,525.95,535.95,505.95];
        for (var i=1;i<=7;i++) {
        this['red4_cross'+i]=game.add.sprite(red4crossposX[i-1],red4crossposY[i-1],'red4_cross'+i);
        this['red4_cross'+i].anchor.setTo(0.5);
        this.red4crossGroup.add(this['red4_cross'+i]);
        }
        
        //   this.green4leafGroup=game.add.group();
        //var green4leafposX=[413.85,345,468.95,477.6,350,412.95,357.35,499.65];
        //var green4leafposY=[337.75,391.9,364.1,410.45,446.15,480.9,515.5,502.65];
        //for (var i=1;i<=8;i++) {
        //this['green4_leaf'+i]=game.add.sprite(green4leafposX[i-1],green4leafposY[i-1],'green4_leaf'+i);
        //this['green4_leaf'+i].anchor.setTo(0.5);
        //this.green4leafGroup.add(this['green4_leaf'+i]);
        //}
        //this.pony3_water1=game.add.sprite(423.3,317.65,'pony3_water2');
        //this.pony3_water1.anchor.setTo(0.5);
        //this.pony3_water1.visible=Main.pony3vis[1];
        //
        //this.pony3_water2=game.add.sprite(385.3,355.65,'pony3_water3');
        //this.pony3_water2.anchor.setTo(0.5);
        //this.pony3_water2.visible=Main.pony3vis[2];
        
        
             this.treatmentGroup.add(this.clean_pony);
        //this.treatmentGroup.add(this.comb4hairGroup);
        this.treatmentGroup.add(this.red4ballGroup);
        this.treatmentGroup.add(this.small4woundGroup);
        //this.treatmentGroup.add(this.black4ballGroup);
        this.treatmentGroup.add(this.red4crossGroup);
        //this.treatmentGroup.add(this.green4leafGroup);
                this.iconGroup.add(this.iconGroup1);
                this.iconGroup.add(this.iconGroup2);
      
        this.levelGroup.add(this.treatmentGroup);
        this.levelGroup.add(this.iconGroup);
        this.levelGroup.add(this.toolGroup);
         this.arrowGroup=game.add.group();
        this.arrow=game.add.sprite(this.treatment_icon1.x+75,this.treatment_icon1.y,'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrow.angle=90;
        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow',30,true);
        this.arrowGroup.add(this.arrow);
          this.meterGroup = game.add.group();
         this.meter = game.add.sprite(540,156.9,'meter');
         this.meter.anchor.setTo(0.5);
         this.meter.animations.add('animations');
         this.meter.animations.play('animations',20,true);
                           this.meterGroup.add(this.meter);
         this.meterFill = game.add.sprite(540,326.9,'meterfill1');
         this.meterFill.anchor.setTo(0.5);
         this.meterGroup.add(this.meterFill);
         this.mask = game.add.graphics(135,-88);
         this.mask.beginFill(0xffffff,0.5);
         this.mask.drawRoundedRect(this.meter.x-153, this.meter.y+5, this.meterFill.width*1.11, this.meterFill.height*1.21,20);
         this.meterFill.mask = this.mask;
         this.meterGroup.add(this.mask);
       this.meterGroup.y=-300;
       
             this.arrow.visible=false;
         this.iconGroup1.x=-200;
      this.iconGroup2.x=200;
      
       this.dragcircle1 = game.add.graphics(370,405);
      this.dragcircle1.beginFill(0xFF0000,0);
      this.dragcircle1.drawCircle(0,0,30);
      this.dragcircle1.endFill();
      
      this.dragcircle2 = game.add.graphics(0,0);
      this.dragcircle2.beginFill(0xFF0000,0);
      this.dragcircle2.drawCircle(0,0,10);
      this.dragcircle2.endFill();
      
      game.physics.arcade.enable([this.dragcircle1,this.dragcircle2]);
      this.dragcircle2.body.onCollide = new Phaser.Signal();
            this.dragcircle2.body.onCollide.add(this.hitSprite1, this);
      this.morebtn = game.add.sprite(180,532.95,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(617.15,532.95,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
      //game.time.events.add(500,function(){
      //  
      //   },this);
      if (Main.shutterOn[0]) {
         Main.shuttersound.play();
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        
        this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
                for (var i=1;i<=30;i++) {
         this['tool'+i+'drag']=false;
         this['hitcount'+i]=0;
         this['testcount'+i]=0;
              }
        },
startPopUp:function(){
    game.add.tween(this.iconGroup1).to({x:[20,0]},500,"Linear",true);
   game.add.tween(this.iconGroup2).to({x:[-20,0]},500,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1,y:1},500,"Linear",true).onComplete.add(function(){
              this.arrow.visible=true;
         this['treatment_icon'+1].inputEnabled=true;
         this['treatment_icon'+1].input.useHandCursor=true;
      },this);
      },this);
   },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
hitSprite1:function(obj,obj1){
   if (this.meterFill.y>174) {
   this.meterFill.y=this.meterFill.y-2;
   }else{
    this.tool1drag=false;
    obj.kill();
    obj1.kill();
    Main.heartsound.stop();
                this['treatment_icon'+1].visible=true;
   this['treatment_tool'+1].visible=false;
          effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
            game.add.tween(this.meterGroup).to({y:-300},800,"Linear",true).onComplete.add(function(){
                  Main.heartsound.stop();

            this.arrow.visible=true;
            this.arrow.x=this.treatment_icon2.x+80;
            this.arrow.y=this.treatment_icon2.y;
            this.treatment_icon2.inputEnabled=true;
            this.treatment_icon2.input.useHandCursor=true;
               },this);
   }
  
   
   },
iconfun1:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.tool1drag=true;

   this['treatment_icon'+1].visible=false;
   this['treatment_tool'+1].visible=true;
   game.add.tween(this.meterGroup).to({y:0},600,"Linear",true).onComplete.add(function(){
       Main.heartsound.play();
      },this);
   this.arrow.x=390;
   this.arrow.y=400;
   },
iconfun2:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.tool2drag=true;
   this['treatment_icon'+2].visible=false;
   this['treatment_tool'+2].visible=true;
   this.arrow.x=310;
   this.arrow.y=340;
   },
iconfun3:function(evt){
   Main.btn09.play();
    evt.inputEnabled=false;
   evt.visible=false;
   this.tool3drag=true;
   this['treatment_icon'+3].visible=false;
   this['treatment_tool'+3].visible=true;
            this.arrow.angle=90;
   this.arrow.x=310;
   this.arrow.y=340;
   },
iconfun4:function(evt){
   Main.btn09.play();
    evt.inputEnabled=false;
   evt.visible=false;
   this.tool4drag=true;
   this['treatment_icon'+4].visible=false;
   this['treatment_tool'+4].visible=true;
   this.arrow.x=this.pony3_redcircle.x-95;
   this.arrow.y=this.pony3_redcircle.y-20;
   },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","more");
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
   Main.shuttersound.play();
    game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('treatment2level3');   
         });
   },
//btnnnnnnnnnnnnnn
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);
   },
meterfun1:function(evt){
    Main.heartsound.play();
   },
meterfun2:function(evt){
  Main.heartsound.stop();
   },
removeGlitter:function(evt){
      evt.kill(); 
      },
update:function(){
   if (this.tool1drag) {
   this.treatment_tool1.x=game.input.activePointer.x-80;
   this.treatment_tool1.y=game.input.activePointer.y-20;
   this.dragcircle2.x=game.input.activePointer.x;
   this.dragcircle2.y=game.input.activePointer.y;
   game.physics.arcade.collide(this.dragcircle2, this.dragcircle1); 
   //console.log(this.treatment_tool1.x+" : "+this.treatment_tool1.y);
 //  if (this.treatment_tool1.x>255 && this.treatment_tool1.x<300 && this.treatment_tool1.y>355 && this.treatment_tool1.y<400 && this.testcount1==0) {
 //        this.arrow.visible=false;
 //        console.log('xxxxx');
 //       
 //        if (this.meterFill.y<327 && this.meterFill.y>173 ) {
 ////Main.heartsound.volume=2;
 //this.meterfun1();
 //      this.meterFill.y=this.meterFill.y-2;
 //        }else{
 //           Main.heartsound.stop();
 //           this.testcount1=1;
 //           this.tool1drag=false;
 //               this['treatment_icon'+1].visible=true;
 //  this['treatment_tool'+1].visible=false;
 //         effectssd = game.add.sprite(game.world.centerX,400,'spark');
 //        effectssd.anchor.setTo(0.5);
 //        effectssd.scale.setTo(1.6);
 //        effectssd.animations.add('effectssd');
 //        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
 //           evt.destroy();
 //           },this);
 //           game.add.tween(this.meterGroup).to({y:-300},800,"Linear",true).onComplete.add(function(){
 //           this.arrow.visible=true;
 //           this.arrow.x=this.treatment_icon2.x+80;
 //           this.arrow.y=this.treatment_icon2.y;
 //           this.treatment_icon2.inputEnabled=true;
 //           this.treatment_icon2.input.useHandCursor=true;
 //              },this);
 //        }
 //  }else{
 //      this.meterfun2();
 //              console.log('yyyyyy');
 //             Main.heartsound.stop();
 //              this.arrow.visible=true;
 //       if (this.meterFill.y<326 && this.meterFill.y>173) {
 //      //this.meterFill.y=this.meterFill.y+2;
 //        }
 //  }
   }
    if (this.tool2drag) {
   this.treatment_tool2.x=game.input.activePointer.x-35;
   this.treatment_tool2.y=game.input.activePointer.y+45;
      if (this.treatment_tool2.x>230 && this.treatment_tool2.x<250 && this.treatment_tool2.y>380 && this.treatment_tool2.y<390 && this.testcount2==0) {
         this.testcount2=1;
    this.treatment_tool2.x=243;
    this.treatment_tool2.y=382;
    this.tool2drag=false;
    this.arrow.visible=false;
    this.treatment_tool2.animations.add('treatment_tool2');
    this.treatment_tool2.animations.play('treatment_tool2',10,false).onComplete.add(function(){
   this['treatment_icon'+2].visible=true;
   this['treatment_tool'+2].visible=false;
   effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
      game.time.events.add(2000,function(){
         this.arrow.visible=true;
         this.arrow.angle=-90;
         this.arrow.x=this.treatment_icon3.x-60;
         this.arrow.y=this.treatment_icon3.y;
         this.treatment_icon3.inputEnabled=true;
         this.treatment_icon3.input.useHandCursor=true;
         },this);
      },this);
      }
    }
     if (this.tool3drag) {
   this.treatment_tool3.x=game.input.activePointer.x-25;
   this.treatment_tool3.y=game.input.activePointer.y+15;
      if (this.treatment_tool3.x>230 && this.treatment_tool3.x<260 && this.treatment_tool3.y>335 && this.treatment_tool3.y<355 && this.testcount3==0) {
         this.testcount3=1;
    this.treatment_tool3.x=225;
    this.treatment_tool3.y=375;
    this.tool3drag=false;
    this.arrow.visible=false;
    this.treatment_tool3.animations.add('treatment_tool3');
    this.treatment_tool3.animations.play('treatment_tool3',5,false).onComplete.add(function(){
   this['treatment_icon'+3].visible=true;
   this['treatment_tool'+3].visible=false;
   effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
      game.time.events.add(2000,function(){
         this.arrow.visible=true;
         this.arrow.angle=-90;
         this.arrow.x=this.treatment_icon4.x-60;
         this.arrow.y=this.treatment_icon4.y;
         this.treatment_icon4.inputEnabled=true;
         this.treatment_icon4.input.useHandCursor=true;
         },this);
      },this);
      }
    }
      if (this.tool4drag) {
   this.treatment_tool4.x=game.input.activePointer.x-15;
   this.treatment_tool4.y=game.input.activePointer.y;
      if (this.treatment_tool4.x>230 && this.treatment_tool4.x<255 && this.treatment_tool4.y>250 && this.treatment_tool4.y<300 && this.testcount4==0) {
         this.testcount4=1;
         this.tool4drag=false;
         this.treatment_tool4.x=223;
         this.treatment_tool4.y=245;
         this.arrow.visible=false;
         this.treatment_tool4.animations.add('treatment_tool4');
    this.treatment_tool4.animations.play('treatment_tool4',5,false).onComplete.add(function(){
         game.add.tween(this.pony3_redcircle).to({alpha:0},1500,Phaser.Easing.SinusoidalInOut,true).onComplete.add(function(){
          this['treatment_icon'+4].visible=true;
          this['treatment_tool'+4].visible=false;
   effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.add.tween(this.donebtn.scale).to({x:1,y:1},500,"Linear",true,2000)
    },this);
    },this);
      }
      }
   },
}

Main.treatment2level3 = function(){}

Main.treatment2level3.prototype = {
    create:function(){
         
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
        this.bg=game.add.sprite(-250,-80,'fullbg');
        this.levelGroup.add(this.bg);
            this.iconGroup=game.add.group();
        this.toolGroup=game.add.group();
        this.iconGroup1=game.add.group();
        this.iconGroup2=game.add.group();
        this.iconGroup3=game.add.group();
        this.iconGroup4=game.add.group();
        this.icon_panel1=game.add.sprite(40.6,308.05,'icon_panel1');
        this.icon_panel1.anchor.setTo(0.5);
        this.iconGroup1.add(this.icon_panel1);
        var iconposX=[82.3,62.25,71.35,732.45,726.45];
        var iconposY=[140.1,295.65,439.6,136.05,399.15];
        var icon1posX=[103.55,103.55,99.55,742,747.65];
        var icon1posY=[120.25,280.15,458.3,149.5,385.2];
        var standposX=[70.7,63.7,63.7,732.85,729.05];
        var standposY=[175.15,334.2,506.25,205.2,433.25];
        this.icon_panel2=game.add.sprite(754.1,321.05,'icon_panel2');
        this.icon_panel2.anchor.setTo(0.5);
        this.iconGroup2.add(this.icon_panel2);
        
        
 for (var i=1;i<=5;i++) {
        this['treatment1_stand'+i]=game.add.sprite(standposX[i-1],standposY[i-1],'clean_stand1');
         this['treatment1_stand'+i].anchor.setTo(0.5);
         if (i<=3) {
         this.iconGroup1.add(this['treatment1_stand'+i])
         }else{
         this.iconGroup2.add(this['treatment1_stand'+i])
         }
         
         this['treatment1_stand'+i]=game.add.sprite(standposX[i-1],standposY[i-1],'clean_stand1');
         this['treatment1_stand'+i].anchor.setTo(0.5);
         if (i<=3) {
         this.iconGroup3.add(this['treatment1_stand'+i])
         }else{
         this.iconGroup4.add(this['treatment1_stand'+i])
         }
         
         this['treatment1_icon'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1]-10,'treatment1_icon'+i);
         this['treatment1_icon'+i].anchor.setTo(0.5);
         this['treatment1_icon'+i].events.onInputDown.add(this['iconfun'+i],this);
         if (i<=3) {
         this.iconGroup1.add(this['treatment1_icon'+i])
         }else{
         this.iconGroup2.add(this['treatment1_icon'+i])
         }
         
         this['treatment2_icon'+i]=game.add.sprite(icon1posX[i-1]-15,icon1posY[i-1],'treatment2_icon'+i);
         this['treatment2_icon'+i].anchor.setTo(0.5);
         if (i<=3) {
         this.iconGroup3.add(this['treatment2_icon'+i])
         }else{
         this.iconGroup4.add(this['treatment2_icon'+i])
         }
         
          this['treatment1_tool'+i]=game.add.sprite(iconposX[i-1],iconposY[i-1]-10,'treatment1_tool'+i);
         this['treatment1_tool'+i].anchor.setTo(0.5);
         this['treatment1_tool'+i].visible=false;
         this.toolGroup.add(this['treatment1_tool'+i])
         
         this['treatment2_tool'+i]=game.add.sprite(icon1posX[i-1]-15,icon1posY[i-1],'treatment2_tool'+i);
         this['treatment2_tool'+i].anchor.setTo(0.5);
         this['treatment2_tool'+i].visible=false;
         this.toolGroup.add(this['treatment2_tool'+i])
        }
        
          this.treatmentGroup=game.add.group();
        
        this.clean_pony=game.add.sprite(418.4,325.6,'clean_pony3');
        this.clean_pony.anchor.setTo(0.5);
        
        //this.pony3_redcircle=game.add.sprite(322.55,277.25,'pony3_redcircle');
        //this.pony3_redcircle.anchor.setTo(0.5);
        
        //this.pony3_redcircle1=game.add.sprite(332.55,275.25,'pony3_redcircle1');
        //this.pony3_redcircle1.anchor.setTo(0.5);
        //
        //this.pony3_redcircle2=game.add.sprite(258.55,278.25,'pony3_redcircle2');
        //this.pony3_redcircle2.anchor.setTo(0.5);
        
        //this.comb4hairGroup=game.add.group();
        //var comb4hairposX=[355.3,381.3,473.85,366.8,398.8,400.85,422.3,496.6,473.85];
        //var comb4hairposY=[398.25,379.75,403.75,445.25,445.25,503.8,485.25,487.35,526.25];
        //for (var i=1;i<=9;i++) {
        //this['comb4_hair'+i]=game.add.sprite(comb4hairposX[i-1],comb4hairposY[i-1],'comb4_hair'+i);
        //this['comb4_hair'+i].anchor.setTo(0.5);
        //this['comb4_hair'+i].visible=Main.pony3vis[0];
        //this.comb4hairGroup.add(this['comb4_hair'+i]);
        //}
        
      this.red4ballGroup=game.add.group();
        var red4ballposX=[332.05,470.4,465.05,373.6,415.6,488.55];
        var red4ballposY=[329.45,361.45,432.45,475.3,524.15,509.65];
        for (var i=1;i<=6;i++) {
        this['red4_ball'+i]=game.add.sprite(red4ballposX[i-1],red4ballposY[i-1],'red4_ball'+i);
        this['red4_ball'+i].anchor.setTo(0.5);
        this.red4ballGroup.add(this['red4_ball'+i]);
        }
        
        this.small4woundGroup=game.add.group();
        var small4woundposX=[298.95,290.35,350.35,360.8,404.8,483.3,477.65];
        var small4woundposY=[235.95,292.95,395.95,500.95,475.95,465.5,529.2];
        for (var i=1;i<=7;i++) {
        this['small4_wound'+i]=game.add.sprite(small4woundposX[i-1],small4woundposY[i-1],'small4_wound'+i);
        this['small4_wound'+i].anchor.setTo(0.5);
        this.small4woundGroup.add(this['small4_wound'+i]);
        }
        //  this.black4ballGroup=game.add.group();
        //var black4ballposX=[371.1,291.25,338.95,356,399.15,470.2,366.1,411.05,480.8];
        //var black4ballposY=[212.3,250.15,339.2,407.75,433.45,398.55,502,532.3,483.95];
        //for (var i=1;i<=9;i++) {
        //this['black4_ball'+i]=game.add.sprite(black4ballposX[i-1],black4ballposY[i-1],'black4_ball'+i);
        //this['black4_ball'+i].anchor.setTo(0.5);
        //this.black4ballGroup.add(this['black4_ball'+i]);
        //}
         this.red4crossGroup=game.add.group();
        var red4crossposX=[427.35,330.4,480.35,458.95,355.75,415.75,495.95];
        var red4crossposY=[150.45,331.45,319.45,425.95,525.95,535.95,505.95];
        for (var i=1;i<=7;i++) {
        this['red4_cross'+i]=game.add.sprite(red4crossposX[i-1],red4crossposY[i-1],'red4_cross'+i);
        this['red4_cross'+i].anchor.setTo(0.5);
        this.red4crossGroup.add(this['red4_cross'+i]);
        }
        
        //   this.green4leafGroup=game.add.group();
        //var green4leafposX=[413.85,345,468.95,477.6,350,412.95,357.35,499.65];
        //var green4leafposY=[337.75,391.9,364.1,410.45,446.15,480.9,515.5,502.65];
        //for (var i=1;i<=8;i++) {
        //this['green4_leaf'+i]=game.add.sprite(green4leafposX[i-1],green4leafposY[i-1],'green4_leaf'+i);
        //this['green4_leaf'+i].anchor.setTo(0.5);
        //this.green4leafGroup.add(this['green4_leaf'+i]);
        //}
        //this.pony3_water1=game.add.sprite(423.3,317.65,'pony3_water2');
        //this.pony3_water1.anchor.setTo(0.5);
        //this.pony3_water1.visible=Main.pony3vis[1];
        //
        //this.pony3_water2=game.add.sprite(385.3,355.65,'pony3_water3');
        //this.pony3_water2.anchor.setTo(0.5);
        //this.pony3_water2.visible=Main.pony3vis[2];
        
        this.bandaidGroup=game.add.group();
       var small4woundposX=[298.95,290.35,350.35,360.8,404.8,483.3,477.65];
        var small4woundposY=[235.95,292.95,395.95,500.95,475.95,465.5,529.2];
        for (var i=1;i<=7;i++) {
        this['wound4_bandaid'+i]=game.add.sprite(small4woundposX[i-1],small4woundposY[i-1],'wound4_bandaid'+i);
        this['wound4_bandaid'+i].anchor.setTo(0.5);
        this['wound4_bandaid'+i].alpha=0;
        this.bandaidGroup.add(this['wound4_bandaid'+i]);
        }
        
             this.treatmentGroup.add(this.clean_pony);
             //this.treatmentGroup.add(this.pony3_redcircle);
             //this.treatmentGroup.add(this.pony3_redcircle1);
             //this.treatmentGroup.add(this.pony3_redcircle2);
        //this.treatmentGroup.add(this.comb4hairGroup);
        this.treatmentGroup.add(this.red4ballGroup);
        this.treatmentGroup.add(this.small4woundGroup);
        //this.treatmentGroup.add(this.black4ballGroup);
        this.treatmentGroup.add(this.red4crossGroup);
        //this.treatmentGroup.add(this.green4leafGroup);
        this.treatmentGroup.add(this.bandaidGroup);
        //this.treatmentGroup.add(this.pony3_water1);
        //this.treatmentGroup.add(this.pony3_water2);
        //this.treatmentGroup.add(this.pony3_bubble1);
        this.iconGroup3.visible=false;
        this.iconGroup4.visible=false;
                this.iconGroup.add(this.iconGroup1);
                this.iconGroup.add(this.iconGroup2);
                this.iconGroup.add(this.iconGroup3);
                this.iconGroup.add(this.iconGroup4);
      
        this.levelGroup.add(this.treatmentGroup);
        this.levelGroup.add(this.iconGroup);
        this.levelGroup.add(this.toolGroup);
         this.arrowGroup=game.add.group();
        this.arrow=game.add.sprite(this.treatment1_icon1.x+75,this.treatment1_icon1.y,'arrow');
        this.arrow.anchor.setTo(0.5);
        this.arrow.angle=90;
        this.arrow.animations.add('arrow');
        this.arrow.animations.play('arrow',30,true);
        this.arrowGroup.add(this.arrow);
        
        this.arrow1=game.add.sprite(this.treatment2_icon1.x+75,this.treatment2_icon1.y,'arrow');
        this.arrow1.anchor.setTo(0.5);
        this.arrow1.angle=90;
        this.arrow1.animations.add('arrow1');
        this.arrow1.animations.play('arrow1',30,true);
        this.arrowGroup.add(this.arrow1);
        
        this.arrow2=game.add.sprite(this.treatment2_icon2.x+75,this.treatment2_icon2.y,'arrow');
        this.arrow2.anchor.setTo(0.5);
        this.arrow2.angle=90;
        this.arrow2.animations.add('arrow2');
        this.arrow2.animations.play('arrow2',30,true);
        this.arrowGroup.add(this.arrow2);
        
        this.arrow3=game.add.sprite(this.treatment2_icon3.x+75,this.treatment2_icon3.y,'arrow');
        this.arrow3.anchor.setTo(0.5);
        this.arrow3.angle=90;
        this.arrow3.animations.add('arrow3');
        this.arrow3.animations.play('arrow3',30,true);
        this.arrowGroup.add(this.arrow3);
        
        this.arrow4=game.add.sprite(this.treatment2_icon4.x-75,this.treatment2_icon4.y,'arrow');
        this.arrow4.anchor.setTo(0.5);
        this.arrow4.angle=-90;
        this.arrow4.animations.add('arrow4');
        this.arrow4.animations.play('arrow4',30,true);
        this.arrowGroup.add(this.arrow4);
        
        this.arrow5=game.add.sprite(this.treatment2_icon5.x-75,this.treatment2_icon5.y,'arrow');
        this.arrow5.anchor.setTo(0.5);
        this.arrow5.angle=-90;
        this.arrow5.animations.add('arrow5');
        this.arrow5.animations.play('arrow5',30,true);
        this.arrowGroup.add(this.arrow5);
        
        for (var i=1;i<=5;i++) {
        this['arrow'+i].visible=false;
        }
         this.timerGroup=game.add.group();
        this.timer=game.add.sprite(-252,500,'timer');
        this.timer.anchor.setTo(0.5);
        this.timerGroup.add(this.timer);
        
      this.hitGroup1 = game.add.group();
      for(var i=0; i<=red4ballposX.length-1; i++)
      {
      this["hitCircle1_"+i] = game.add.graphics(red4ballposX[i],red4ballposY[i]);
      this["hitCircle1_"+i].beginFill(0x0000FF,0);
      this["hitCircle1_"+i].drawCircle(0,0,25);
      this["hitCircle1_"+i].id = i;
      this.hitGroup1.add(this["hitCircle1_"+i]);
      game.physics.arcade.enable([this["hitCircle1_"+i]]);
      this["hitCircle1_"+i].body.enable=false;
      }
      
      this.dragcircle1 = game.add.graphics(0,0);
      this.dragcircle1.beginFill(0xFF0000,0);
      this.dragcircle1.drawCircle(0,0,20);
      this.dragcircle1.endFill();
      
      
      this.hitGroup2 = game.add.group();
      for(var i=0; i<=red4crossposX.length-1; i++)
      {
      this["hitCircle2_"+i] = game.add.graphics(red4crossposX[i],red4crossposY[i]);
      this["hitCircle2_"+i].beginFill(0x0000FF,0);
      this["hitCircle2_"+i].drawCircle(0,0,25);
      this["hitCircle2_"+i].id = i;
      this.hitGroup2.add(this["hitCircle2_"+i]);
      game.physics.arcade.enable([this["hitCircle2_"+i]]);
      this["hitCircle2_"+i].body.enable=false;
      }
      
      this.dragcircle2 = game.add.graphics(0,0);
      this.dragcircle2.beginFill(0xFF0000,0);
      this.dragcircle2.drawCircle(0,0,20);
      this.dragcircle2.endFill();
      
      this.hitGroup3 = game.add.group();
      for(var i=0; i<=small4woundposX.length-1; i++)
      {
      this["hitCircle3_"+i] = game.add.graphics(small4woundposX[i],small4woundposY[i]);
      this["hitCircle3_"+i].beginFill(0x0000FF,0);
      this["hitCircle3_"+i].drawCircle(0,0,25);
      this["hitCircle3_"+i].id = i;
      this.hitGroup3.add(this["hitCircle3_"+i]);
      game.physics.arcade.enable([this["hitCircle3_"+i]]);
      this["hitCircle3_"+i].body.enable=false;
      }
      
      this.dragcircle3 = game.add.graphics(0,0);
      this.dragcircle3.beginFill(0xFF0000,0);
      this.dragcircle3.drawCircle(0,0,20);
      this.dragcircle3.endFill();
      
      game.physics.arcade.enable([this.dragcircle1,this.dragcircle2,this.dragcircle3]);
      this.dragcircle1.body.onCollide = new Phaser.Signal();
      this.dragcircle1.body.onCollide.add(this.hitSprite1, this);
      this.dragcircle2.body.onCollide = new Phaser.Signal();
      this.dragcircle2.body.onCollide.add(this.hitSprite2, this);
      this.dragcircle3.body.onCollide = new Phaser.Signal();
      this.dragcircle3.body.onCollide.add(this.hitSprite3, this);
      
               this.arrow.visible=false;
         this.iconGroup1.x=-200;
      this.iconGroup2.x=200;
      this.morebtn = game.add.sprite(180,532.95,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.donebtn = game.add.sprite(617.15,532.95,'donebtn');
         this.donebtn.anchor.setTo(0.5);
         this.donebtn.scale.setTo(0);
         this.donebtn.inputEnabled = true;
         this.donebtn.input.useHandCursor = true;
         this.donebtn.events.onInputUp.add(this.enterRoom, this);
         this.donebtn.events.onInputOver.add(this.btnOver, this);
         this.donebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.donebtn);
      //game.time.events.add(500,function(){
      //  
      //   },this);
      if (Main.shutterOn[0]) {
         Main.shuttersound.play();
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        
        this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
                for (var i=1;i<=30;i++) {
         this['tool'+i+'drag']=false;
         this['hitcount'+i]=0;
         this['testcount'+i]=0;
              }
        },
startPopUp:function(){
    game.add.tween(this.iconGroup1).to({x:[20,0]},500,"Linear",true);
   game.add.tween(this.iconGroup2).to({x:[-20,0]},500,"Linear",true).onComplete.add(function(){
   game.add.tween(this.morebtn.scale).to({x:1,y:1},500,"Linear",true).onComplete.add(function(){
              this.arrow.visible=true;
         this['treatment1_icon'+1].inputEnabled=true;
         this['treatment1_icon'+1].input.useHandCursor=true;
      },this);
      },this);
   },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
iconfun1:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.tool1drag=true;
   this['treatment1_icon'+1].visible=false;
   this['treatment1_tool'+1].visible=true;
   this.arrow.x=500;
   this.arrow.y=400;
   },
iconfun2:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.tool2drag=true;
   this['treatment1_icon'+2].visible=false;
   this['treatment1_tool'+2].visible=true;
   this.arrow.x=500;
   this.arrow.y=400;
   },
iconfun3:function(evt){
   Main.btn09.play();
     evt.inputEnabled=false;
   evt.visible=false;
   this.tool3drag=true;
   this['treatment1_icon'+3].visible=false;
   this['treatment1_tool'+3].visible=true;
   this.arrow.x=this["hitCircle1_"+0].x+30;
   this.arrow.y=this["hitCircle1_"+0].y;
   this["hitCircle1_"+0].body.enable=true;
   },
hitSprite1:function(obj,obj1){
   obj1.kill();
   this.tool3drag=false;
   this.hitcount1++;
   this.treatment1_tool3.x=obj1.x+25;
   this.treatment1_tool3.y=obj1.y+45;
   this.arrow.visible=false;
   game.add.tween(this['red4_ball'+this.hitcount1]).to({alpha:0},600,"Linear",true).onComplete.add(function(){
      if (this.hitcount1!=6) {
      this['red4_ball'+this.hitcount1].kill();
         this.tool3drag=true;
         this["hitCircle1_"+this.hitcount1].body.enable=true;
         this.arrow.visible=true;
          this.arrow.x=this["hitCircle1_"+this.hitcount1].x+30;
          this.arrow.y=this["hitCircle1_"+this.hitcount1].y;
      }else{
          this['treatment1_icon'+3].visible=true;
   this['treatment1_tool'+3].visible=false;
   effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
            this.arrow.visible=true;
            this.arrow.angle=-90;
            this.arrow.x=this.treatment1_icon4.x-70;
            this.arrow.y=this.treatment1_icon4.y;
            this.treatment1_icon4.inputEnabled=true;
            this.treatment1_icon4.input.useHandCursor=true;
            },this);
      }
      },this);
   },
iconfun4:function(evt){
   Main.btn09.play();
   evt.inputEnabled=false;
   evt.visible=false;
   this.tool4drag=true;
   this.arrow.angle=90;
   this['treatment1_icon'+4].visible=false;
   this['treatment1_tool'+4].visible=true;
   this.arrow.x=this["hitCircle2_"+0].x+30;
   this.arrow.y=this["hitCircle2_"+0].y;
   this["hitCircle2_"+0].body.enable=true;
   },
hitSprite2:function(obj,obj1){
   obj1.kill();
   this.tool4drag=false;
   this.hitcount2++;
   this.treatment1_tool4.x=obj1.x;
   this.treatment1_tool4.y=obj1.y+30;
   this.arrow.visible=false;
   game.add.tween(this['red4_cross'+this.hitcount2]).to({alpha:0},600,"Linear",true).onComplete.add(function(){
      if (this.hitcount2!=7) {
      this['red4_cross'+this.hitcount2].kill();
         this.tool4drag=true;
         this["hitCircle2_"+this.hitcount2].body.enable=true;
         this.arrow.visible=true;
          this.arrow.x=this["hitCircle2_"+this.hitcount2].x+30;
          this.arrow.y=this["hitCircle2_"+this.hitcount2].y;
      }else{
          this['treatment1_icon'+4].visible=true;
   this['treatment1_tool'+4].visible=false;
   effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
            this.arrow.visible=true;
            this.arrow.angle=-90;
            this.arrow.x=this.treatment1_icon5.x-80;
            this.arrow.y=this.treatment1_icon5.y;
            this.treatment1_icon5.inputEnabled=true;
            this.treatment1_icon5.input.useHandCursor=true;
            },this);
      }
      },this);
   },
iconfun5:function(evt){
   Main.btn09.play();
   this.iconGroup3.visible=true;
   this.iconGroup4.visible=true
   this.iconGroup1.visible=false;
   this.iconGroup2.visible=false;
   this.arrow.visible=false;
   for (var i=1;i<=5;i++) {
        this['arrow'+i].visible=true;
        this['treatment2_icon'+i].inputEnabled=true;
        this['treatment2_icon'+i].input.useHandCursor=true;
        this['treatment2_icon'+i].id=i;
        this['treatment2_icon'+i].events.onInputDown.add(this.bandaidfun,this);
        }
   },
bandaidfun:function(evt){
   Main.btn09.play();
   this.tool5drag=true;
   this['treatment2_tool'+evt.id].visible=true;
   this['treatment2_tool'+evt.id].scale.setTo(0.5);
   this.dragtool= this['treatment2_tool'+evt.id];
   this.dragtool.visible=true;
   for (var i=1;i<=5;i++) {
        this['treatment2_icon'+i].inputEnabled=false;
                 this['arrow'+i].visible=false;
   }
                  this.dragcircle3.visible=true;

   this.arrow.visible=true;
   this.arrow.angle=90;
    this.arrow.x=this["hitCircle3_"+this.hitcount3].x+30;
   this.arrow.y=this["hitCircle3_"+this.hitcount3].y;
   this["hitCircle3_"+this.hitcount3].body.enable=true;
this.dragtool1=evt.id-1;
   },
hitSprite3:function(obj,obj1){
   obj1.kill();
   this.hitcount3++;
      this.dragtool.visible=false;
      this.arrow.visible=false;
      for (var i=1;i<=5;i++) {
        this['treatment2_icon'+i].inputEnabled=true;
        this['treatment2_icon'+i].input.useHandCursor=true;
                         this['arrow'+i].visible=true;
      }
      obj.visible=false;
                     this['wound4_bandaid'+this.hitcount3].frame=this.dragtool1;
      game.add.tween(this['wound4_bandaid'+this.hitcount3]).to({alpha:1},500,"Linear",true).onComplete.add(function(){

if (this.hitcount3!=7) {
  this.arrow.x=this["hitCircle3_"+this.hitcount3].x+30;
   this.arrow.y=this["hitCircle3_"+this.hitcount3].y;
      this["hitCircle3_"+this.hitcount3].body.enable=true;
}else{
    for (var i=1;i<=5;i++) {
        this['treatment2_icon'+i].inputEnabled=false;
    }
     for (var i=1;i<=5;i++) {
                 this['arrow'+i].visible=false;
   }
   this.arrow.visible=false;
   game.add.tween(this.timer).to({x:252},500,"Linear",true).onComplete.add(function(){
      this.timer.animations.add('timer');
      this.timer.animations.play('timer',10,false).onComplete.add(function(){
            game.add.tween(this.timer).to({x:1500},500,"Linear",true).onComplete.add(function(){
               for (var i=1;i<=7;i++) {
                  game.add.tween(this['small4_wound'+i]).to({alpha:0},500,"Linear",true);
             game.add.tween(this['wound4_bandaid'+i]).to({alpha:0},500,"Linear",true).onComplete.add(function(){
             effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.add.tween(this.donebtn.scale).to({x:1,y:1},500,"Linear",true,2000)
            },this);
             
   }
               
            },this);
            },this);
            },this);
}
          
         },this);
   },
toolfun1:function(evt){
   Main.btn09.play();
   this.arrow.x=this.treatment1_icon3.x+80;
   this.arrow.y=this.treatment1_icon3.y;
   evt.inputEnabled=false;
   evt.visible=false;
   this.treatment1_icon3.inputEnabled=true;
   this.treatment1_icon3.input.useHandCursor=true;
   },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","more");
},
enterRoom:function(){cordova.plugins.MyAdPlugin.showrewarded();
   Main.btn09.play();
   Main.shuttersound.play();
    game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('food1level3');   
         });
   
   },
//btnnnnnnnnnnnnnn
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);
   },
removeGlitter:function(evt){
      evt.kill(); 
      },
update:function(){
   if (this.tool1drag) {
  this.treatment1_tool1.x=game.input.activePointer.x+60;
  this.treatment1_tool1.y=game.input.activePointer.y;
  if (this.treatment1_tool1.x>515 && this.treatment1_tool1.x<540 && this.treatment1_tool1.y>390 && this.treatment1_tool1.y<410 && this.testcount1==0) {
   this.testcount1=1;
   this.tool1drag=false;
   this.treatment1_tool1.x=522;
   this.treatment1_tool1.y=399;
   this.arrow.visible=false;
   this.treatment1_tool1.animations.add('treatment1_tool1');
   this.treatment1_tool1.animations.play('treatment1_tool1',10,false).onComplete.add(function(){
         this['treatment1_tool'+1].visible=false;
         this['treatment1_icon'+1].visible=true;
effectssd = game.add.sprite(game.world.centerX,400,'spark');
         effectssd.anchor.setTo(0.5);
         effectssd.scale.setTo(1.6);
         effectssd.animations.add('effectssd');
         effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
            evt.destroy();
            },this);
         game.time.events.add(2000,function(){
            this.arrow.visible=true;
            this.arrow.x=this.treatment1_icon2.x+70;
            this.arrow.y=this.treatment1_icon2.y;
            this.treatment1_icon2.inputEnabled=true;
            this.treatment1_icon2.input.useHandCursor=true;
            },this);
      },this);
  }
   }
    if (this.tool2drag) {
      this.treatment1_tool2.scale.setTo(0.5);
      this.treatment1_tool2.angle=30;
  this.treatment1_tool2.x=game.input.activePointer.x;
  this.treatment1_tool2.y=game.input.activePointer.y;
  if (this.treatment1_tool2.x>465 && this.treatment1_tool2.x<475 && this.treatment1_tool2.y>390 && this.treatment1_tool2.y<415 && this.testcount2==0) {
   this.testcount2=1;
   this.tool2drag=false;
   this.treatment1_tool2.x=465;
   this.treatment1_tool2.y=402;
   this.arrow.visible=false;
   game.add.tween(this.timer).to({x:252},500,"Linear",true).onComplete.add(function(){
      this.timer.animations.add('timer');
      this.timer.animations.play('timer',10,false).onComplete.add(function(){

            game.add.tween(this.timer).to({x:1500},500,"Linear",true).onComplete.add(function(){
               this.timer.x=-252;
               this.arrow.visible=true;
               this.treatment1_tool2.inputEnabled=true;
               this.treatment1_tool2.input.useHandCursor=true;
               this.treatment1_tool2.events.onInputDown.add(this.toolfun1,this);
            },this);
            },this);
            },this);
  }
    }
     if (this.tool3drag) {
  this.treatment1_tool3.x=game.input.activePointer.x+30;
  this.treatment1_tool3.y=game.input.activePointer.y+45;
  this.dragcircle1.x=game.input.activePointer.x;
  this.dragcircle1.y=game.input.activePointer.y;
    for(var i=0; i<=20; i++)
      {
        game.physics.arcade.collide(this.dragcircle1, this['hitCircle1_'+i]);   
      }
     }
      if (this.tool4drag) {
   this.treatment1_tool4.x=game.input.activePointer.x;
   this.treatment1_tool4.y=game.input.activePointer.y+40;
    this.dragcircle2.x=game.input.activePointer.x;
  this.dragcircle2.y=game.input.activePointer.y;
   for(var i=0; i<=15; i++)
      {
        game.physics.arcade.collide(this.dragcircle2, this['hitCircle2_'+i]);   
      }
    }
     if (this.tool5drag) {
   this.dragtool.x=game.input.activePointer.x;
   this.dragtool.y=game.input.activePointer.y;
    this.dragcircle3.x=game.input.activePointer.x;
  this.dragcircle3.y=game.input.activePointer.y;
   for(var i=0; i<=15; i++)
      {
        game.physics.arcade.collide(this.dragcircle3, this['hitCircle3_'+i]);   
      }
    }
   },
}
Main.finalscreen = function(){}

Main.finalscreen.prototype = {
    create:function(){
      //game.sound.mute = true;
       game.physics.startSystem(Phaser.Physics.ARCADE);
        this.levelGroup = game.add.group();
       this.bg=game.add.sprite(-800,-80,'fullbg');
        this.levelGroup.add(this.bg);
        
         this.pony3Group=game.add.group();        
        this.pony3_body=game.add.sprite(512.65,434.4,'pony'+3+'_body');
        this.pony3_body.anchor.setTo(0.5);
        
        this.pony3_head=game.add.sprite(331.05,290.05,'pony'+3+'_head');
        this.pony3_head.anchor.setTo(0.5);
        
        this.pony3_shoe=game.add.sprite(442.9,523.6,'pony_shoe'+Main.dressupcount[0][4]);
        this.pony3_shoe.anchor.setTo(0.5);
        
        this.pony3_crown=game.add.sprite(340.7,148,'pony_crown'+Main.dressupcount[0][0]);
        this.pony3_crown.anchor.setTo(0.5);
        
        this.pony3_tile=game.add.sprite(510.95,370.75,'pony_tile'+Main.dressupcount[0][5]);
        this.pony3_tile.anchor.setTo(0.5);
        this.pony3_tile.angle=5;
        
        this.pony3_chain=game.add.sprite(394.85,393.7,'pony_chain'+Main.dressupcount[0][1]);
        this.pony3_chain.anchor.setTo(0.5);
        
        this.pony3_bottom=game.add.sprite(475.75,410.8,'pony_bottom'+Main.dressupcount[0][3]);
        this.pony3_bottom.anchor.setTo(0.5);
        
        this.pony3_nose=game.add.sprite(388.85,360.7,'pony_nose'+Main.dressupcount[0][2]);
        this.pony3_nose.anchor.setTo(0.5);
        
        this.pony3Group.add(this.pony3_body);
        this.pony3Group.add(this.pony3_chain);
        this.pony3Group.add(this.pony3_tile);
        this.pony3Group.add(this.pony3_bottom);
                this.pony3Group.add(this.pony3_shoe);
        this.pony3Group.add(this.pony3_head);
        this.pony3Group.add(this.pony3_crown);
        this.pony3Group.add(this.pony3_nose);
        
        this.levelGroup.add(this.pony3Group);
        
        this.morebtn = game.add.sprite(77.7,539.25,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.morebtn);
         this.resetbtn = game.add.sprite(717.55,539.25,'resetbtn');
         this.resetbtn.anchor.setTo(0.5);
         this.resetbtn.scale.setTo(0);
         this.resetbtn.inputEnabled = true;
         this.resetbtn.input.useHandCursor = true;
         this.resetbtn.events.onInputUp.add(this.resetfun, this);
         this.resetbtn.events.onInputOver.add(this.btnOver, this);
         this.resetbtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.resetbtn);
         
            
               this.thumbGrp = game.add.group();
		this.randomId = game.rnd.integerInRange(1,10);
		this.randomId1 = game.rnd.integerInRange(1,10);
        console.log(this.randomId1);
        this.Tump_frame1=game.add.sprite(150,300,'Tump_frame');
        this.Tump_frame1.anchor.setTo(0.5);
		this.Tump_frame1.scale.setTo(0.8);
		this.thumb1 = game.add.sprite(150,290,'thumb_'+this.randomId);
		this.thumb1.anchor.setTo(0.5);
		this.thumb1.scale.setTo(0.8);
		//this.thumb1.url = thumburi[this.randomId-1]['uri'];
		this.thumb1.inputEnabled = true;
		this.thumb1.input.useHandCursor = true;
		this.thumb1.input.pixelPerfectClick = true;
		this.thumb1.input.pixelPerfectOver = true;
		this.thumb1.events.onInputDown.add(this.openLink,this);
		this.thumbGrp.add(this.Tump_frame1);
		this.thumbGrp.add(this.thumb1);
		
	  if (this.randomId== this.randomId1) {
                this.randomId1+=2;
            }
            if (this.randomId1>10) {
                this.randomId1-=1;
            }
            this.Tump_frame2=game.add.sprite(950,300,'Tump_frame');
        this.Tump_frame2.anchor.setTo(0.5);
		this.Tump_frame2.scale.setTo(0.8);
		this.thumb2 = game.add.sprite(950,290,'thumb_'+this.randomId1);
		this.thumb2.anchor.setTo(0.5);
		this.thumb2.scale.setTo(0.8);
		//this.thumb2.url = thumburi[this.randomId1-1]['uri'];
		this.thumb2.inputEnabled = true;
		this.thumb2.input.useHandCursor = true;
		this.thumb2.input.pixelPerfectClick = true;
		this.thumb2.input.pixelPerfectOver = true;
		this.thumb2.events.onInputDown.add(this.openLink,this);
		this.thumbGrp.add(this.Tump_frame2);
		this.thumbGrp.add(this.thumb2);
        this.thumb1Tween = game.add.tween(this.thumb1.scale).to({x:this.thumb1.scale.x-0.04,y:this.thumb1.scale.y-0.04},700,Phaser.Easing.Elastic.EaseOut,true,0,-1).yoyo(true,0);
		this.thumb2Tween = game.add.tween(this.thumb2.scale).to({x:this.thumb2.scale.x-0.04,y:this.thumb2.scale.y-0.04},700,Phaser.Easing.Elastic.EaseOut,true,0,-1).yoyo(true,0);

        this.thumbGrp.scale.setTo(0.7);
        
         this.mgslogo = game.add.sprite(400,580, 'mgslogo');
		this.mgslogo.anchor.setTo(0.5);
		this.mgslogo.scale.setTo(0.4);
		this.mgslogo.url = "mgsScreen";
		this.mgslogo.inputEnabled=true;		
		this.mgslogo.input.useHandCursor=true;
		this.mgslogo.events.onInputDown.add(function(){
			if(this.mgsopen.flag==1){
				this.cntflag = 1;
				this.timeEvt = game.time.events.loop(50,function(){
					this.mgsopen.flag = 20;
					this.mgsopen.visible = true;
					this.cntflag++;
					this.mgsopen.loadTexture('mgsopen'+this.cntflag);
					if(this.cntflag>=20){
						game.add.tween(this.closebtn.scale).to({x:0.45,y:0.45}, 800, Phaser.Easing.Elastic.InOut, true);
						game.time.events.remove(this.timeEvt);
					}
				}, this);
			}
		}, this);
		this.mgslogo.events.onInputDown.add(function(evt){
			evt.frame = 3;
		}, this);
		this.mgslogo.events.onInputOver.add(function(evt){
			evt.frame = 1;
		}, this);
		this.mgslogo.events.onInputOut.add(function(evt){
			evt.frame = 0;
		}, this);
		
		this.mgsGrp = game.add.group();
		this.mgsopen = game.add.sprite(400, 125, 'mgsopen1');
		this.mgsopen.anchor.setTo(0.5);
		this.mgsopen.scale.setTo(0.7);
		this.mgsopen.flag = 1;
		this.mgsopen.visible = false;
		this.mgsopen.url = "http://meenagames.com/";
		this.mgsopen.inputEnabled=true;		
		this.mgsopen.input.useHandCursor=true;
		this.mgsopen.input.pixelPerfectClick=true;
		this.mgsopen.input.pixelPerfectOver=true;
		this.mgsopen.events.onInputDown.add(function(){
			//window.open('http://meenagames.com/');
		}, this);
		this.mgsGrp.add(this.mgsopen);
		
		this.closebtn = game.add.sprite(520,74, 'closebtn');
		this.closebtn.anchor.setTo(0.5);
		this.closebtn.scale.setTo(0);
		this.closebtn.inputEnabled=true;		
		this.closebtn.input.useHandCursor=true;
		this.closebtn.input.pixelPerfectClick=true;
		this.closebtn.input.pixelPerfectOver=true;
		this.closebtn.events.onInputDown.add(function(){
			this.closebtn.scale.setTo(0);
			this.cntflag = 20;
			this.closetime = game.time.events.loop(50,function(){
				this.cntflag--;
				this.mgsopen.loadTexture('mgsopen'+this.cntflag);
				if(this.cntflag<=1){
					this.mgsopen.flag = 1;
					this.mgsopen.visible = false;
					game.time.events.remove(this.closetime);
				}
			}, this);
		}, this);
		this.mgsGrp.add(this.closebtn);
           if (Main.shutterOn[0]) {
            Main.shuttersound.play();
         this.shutter = game.add.sprite(0,0,'shutterbg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp, this)
        }
        this.youtubebtn = game.add.sprite(700,40,'youtubebtn');
         this.youtubebtn.anchor.setTo(0.5);
         this.youtubebtn.scale.setTo(0.6);
         this.youtubebtn.inputEnabled = true;
         this.youtubebtn.input.useHandCursor = true;
         this.youtubebtn.events.onInputUp.add(youtubeLink, this);
         this.youtubebtn.events.onInputOver.add(this.btnOver, this);
         this.youtubebtn.events.onInputOut.add(this.btnOut, this);
         this.levelGroup.add(this.youtubebtn);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(735,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
                for (var i=1;i<=30;i++) {
         this['tool'+i+'drag']=false;
         this['hitcount'+i]=0;
         this['testcount'+i]=0;
              }
        },
startPopUp:function(){
   game.add.tween(this.morebtn.scale).to({x:1,y:1},500,"Linear",true,600);
   game.add.tween(this.resetbtn.scale).to({x:1,y:1},500,"Linear",true,600);
   },
changemusic:function()
         {
            Main.btn09.play();
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","logo");
},
moreLink:function()
{
   Main.btn09.play();
   CreateLinksInGame("Rainbow-Pony-Caring","game","more");
},
resetfun:function(){
   Main.btn09.play();
   Main.shuttersound.play();
   Main.pony3vis = [true,true,true];
Main.donecount = [[0,0,0,0,0,0]];
Main.dressupcount = [[0,0,0,0,0,0]];
Main.charChoosed = [1];
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('intro');   
         });
   },
//btnnnnnnnnnnnnnn
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
   effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);
   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}

function youtubeLink() {
   window.open("https://www.7sgames.com/walkthrough/rainbow-pony-caring");
}
game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('dressup3', Main.dressup3);
game.state.add('dressup2', Main.dressup2);
game.state.add('dressup1', Main.dressup1);
game.state.add('dressup4', Main.dressup4);
game.state.add('cleaning1level3', Main.cleaning1level3);
game.state.add('cleaning2level3', Main.cleaning2level3);
game.state.add('cleaning3level3', Main.cleaning3level3);
game.state.add('treatment1level3', Main.treatment1level3);
game.state.add('treatment2level3', Main.treatment2level3);
game.state.add('food1level3', Main.food1level3);
game.state.add('food2level3', Main.food2level3);
game.state.add('finalscreen', Main.finalscreen);

game.state.start('boot');