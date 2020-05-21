ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	
	
	'game.entities.canons-cover-2',
	'game.entities.canons-cover-3',
	'game.entities.canons-cover-1',
	'game.entities.canons-cover-2',
	'game.entities.canons-cover-3',
	'game.entities.canons-1',
	'game.entities.canons-2',
	'game.entities.canons-3',
	'game.entities.island-canon',
	'game.entities.canon-ball',
	'game.entities.ship',
	'game.entities.ship-1',
	'game.entities.ship-2',
	'game.entities.ship-3',
	'game.entities.island',
	'game.levels.china',
	'game.levels.hongkong',
	'game.levels.taiwan'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	// heart
	heart: new ig.Image('media/hp_icon.png'),
	canonBall: new ig.Image('media/ball.png'),
	currentLevel: 'LevelMain',
	
	
	init: function() {
		ig.input.bind( ig.KEY.UP_ARROW, 'up' );
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
		
		ig.music.add('media/Sound/backgroundMusic.ogg');
		ig.music.volume = 0.4;
		ig.music.play();
		
		// reload game
		ig.global.load = false;
		
		//island = ig.game.getEntitiesByType(EntityIsland)[0];
		this.loadLevel(ig.global[n]);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		this.currentLevel = ig.global[n];
		// Add your own, additional update code here
		
		// reload level
		if (ig.global[load] == true) {
            //this.reloadLevel();
        }
		
		
		// complete game
		if (this.checkNumberShipEntity()) {
			ig.system.setGame(GameComplete);
        }
	},
	
	reloadLevel: function(){
		if (ig.global[n] == LevelHongkong) {
            ig.global.numberBall = 50;
        }
		else if (ig.global[n] == LevelChina) {
            ig.global.numberBall = 60;
        }
		else{
			ig.global.numberBall = 70;	
		}
		this.loadLevelDeferred(this.currentLevel);	
	},
	
	checkNumberShipEntity: function(){
		var entityShip1 = typeof(EntityShip1) === 'string'
			? ig.global[EntityShip1]
			: EntityShip1;
			
		var entityShip2 = typeof(EntityShip2) === 'string'
			? ig.global[EntityShip2]
			: EntityShip2;
			
		var entityShip3 = typeof(EntityShip3) === 'string'
			? ig.global[EntityShip3]
			: EntityShip3;
			
		var a = [];
		
		for (var i = 0; i < ig.game.entities.length; i++) {
            var ent = ig.game.entities[i];
			/*if ((ent instanceof entityShip1 || ent instanceof entityShip2 ||
				 ent instanceof entityShip3) && !ent._killed ) {
                //code
				a.push(ent);
            }*/
			if ((ent instanceof entityShip1 && !ent._killed) ||
				(ent instanceof entityShip2 && !ent._killed) ||
				(ent instanceof entityShip3 && !ent._killed)) {
                a.push(ent);
            }
        }
		
		if (a.length <= 0) {
            return true;
        }else{
			return false;
		}
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		var island = ig.game.getEntitiesByType(EntityIsland)[0];
		ig.global.numberStar = (island.health/10)-1;
		this.parent();
		var x = 16;
		var y = 16;
		
		// draw icon heart
		for (var i = 0; i < (island.health/10)-1; i ++) {
            this.heart.draw(x, y);
			x += this.heart.width + 8;
        }
		
		// check end game
		if ((island.health/10)-1 < 1) {
            ig.system.setGame(GameEnd);
        }
		
		// draw canon ball and number bullet
		this.canonBall.draw(16, y + this.heart.height + 8);
		//ig.system.scale = 1.5;
		this.font.draw(ig.global.numberBall, this.canonBall.height, y + this.heart.height + 20, ig.Font.ALIGN.CENTER);
		//ig.system.scale = 1;
	}
});

MyTitle = ig.Game.extend({
	title: new ig.Image('media/title.png'),
	china: new ig.Image('media/flag_china.png'),
	hongkong: new ig.Image('media/flag_hong_kong.png'),
	taiwan: new ig.Image('media/flag_taiwan.png'),
	island: new ig.Image('media/title_screen_bg.png'),
	
	init: function(){
		ig.input.bind(ig.KEY.MOUSE1, 'mouseclick');
		
		//background
		this.island.resize(1.5);
		this.island.width*=1.5;
		this.island.height*=1.5;
		
		//china
		this.china.resize(1.5);
		this.china.width*=1.5;
		this.china.height*=1.5;
		
		//hong kong
		this.hongkong.resize(1.5);
		this.hongkong.width*=1.5;
		this.hongkong.height*=1.5;
		
		//taiwan
		this.taiwan.resize(1.5);
		this.taiwan.width*=1.5;
		this.taiwan.height*=1.5;
	},
	
	update: function(){
		
		if (ig.input.pressed('mouseclick')) {
			if (this.isHongKong()) {
                ig.global.n = 'LevelHongkong';
				ig.global.numberBall = 50;
				ig.system.setGame(MyGame);
            }
			else if (this.isChina()) {
                ig.global.n = 'LevelChina';
				ig.global.numberBall = 60;
				ig.system.setGame(MyGame);
            }
			else if (this.isTaiWan()) {
                ig.global.n = 'LevelTaiwan';
				ig.global.numberBall = 70;
				ig.system.setGame(MyGame);
            }
			
        }
		this.parent();
	},
	
	
	isChina: function(){
		var cx = ig.system.width/2;
		var cy = ig.system.height/2;
		return(
			(cx-250 < ig.input.mouse.x && ig.input.mouse.x < cx-250 + 100)&&
			(cy < ig.input.mouse.y && ig.input.mouse.y < cy+50)
		);
	},
	
	isHongKong: function(){
		var cx = ig.system.width/2;
		var cy = ig.system.height/2;
		return(
			(cx - 100 < ig.input.mouse.x && ig.input.mouse.x < cx - 100 + 100)&&
			(cy < ig.input.mouse.y && ig.input.mouse.y < cy+50)
		);
	},
	
	isTaiWan:function(){
		var cx = ig.system.width/2;
		var cy = ig.system.height/2;
		return(
			(cx + 50 < ig.input.mouse.x && ig.input.mouse.x < cx + 50 + 100)&&
			(cy < ig.input.mouse.y && ig.input.mouse.y < cy+50)
		);
	},
	
	draw: function(){
		this.parent();
		var cx = ig.system.width/2;
		var cy = ig.system.height/2;
		
		this.island.draw(0, 0);
		this.title.draw(cx - 200, cy-240);
		this.china.draw(cx-250, cy);
		this.hongkong.draw(cx - 100, cy);
		this.taiwan.draw(cx + 50, cy);
	}
});

GameEnd = ig.Game.extend({
	BackgroundImage: new ig.Image('media/EndOfLevelBG.png'),
	
	init:function(){
		ig.input.bind(ig.KEY.MOUSE1, 'mouseclick');
		this.restart = ig.game.spawnEntity(EntityButtonRestart, ig.system.width/2 - 20,
										   ig.system.height/2 +  this.BackgroundImage.height/2 - 60);
	},
	
	update: function(){
		this.restart.update();
	},
	
	draw:function(){
		this.parent();
		
		// draw background image
		this.BackgroundImage.draw(ig.system.width/2 - this.BackgroundImage.width/2,
						   ig.system.height/2 - this.BackgroundImage.height/2);
		
		// draw button restart
		this.drawButtonRestart();
		
		// draw title
		this.drawTitle();
		
	},
	
	drawButtonRestart: function(){
		this.restart.draw();
	},
	
	drawTitle: function(){
		var font =  new ig.Font( 'media/04b03.font.png' );
		font.draw('FAILED ', ig.system.width/2 - 20,
				  ig.system.height/2 - this.BackgroundImage.height/2 + 20);
	},
	
	reloadLevel: function(){
		if (ig.global[n] == LevelHongkong) {
            ig.global.numberBall = 50;
        }
		else if (ig.global[n] == LevelChina) {
            ig.global.numberBall = 60;
        }
		else{
			ig.global.numberBall = 70;	
		}
		ig.system.setGame(MyGame);
	},
	
	gameWon: function(){
		ig.system.setGame(GameEnd);
	}
});

GameComplete = GameEnd.extend({
	ImageStar: new ig.Image('media/hs_btn.png'),
	
	init: function(){
		this.parent();
	},
	
	update:function(){
		this.parent();
	},
	
	draw: function(){
		this.parent();
		
		// draw star
		this.drawStar();
	},
	
	drawButtonRestart: function(){
		this.restart.draw();
	},
	
	drawTitle: function(){
		var font =  new ig.Font( 'media/04b03.font.png' );
		font.draw('COMPLETE ', ig.system.width/2 - 20,
				  ig.system.height/2 - this.BackgroundImage.height/2 + 20);
	},
	
	drawStar: function(){
		var x = ig.system.width/2 - this.BackgroundImage.width/2 + 20;
		var y = ig.system.height/2;
		
		for (var i = 0; i < ig.global.numberStar; i++) {
			this.ImageStar.drawTile(x, y,1,44, 38);
			x += this.ImageStar.width/2;
        }
		
		for (var j = 0; j < 4 - ig.global.numberStar; j++) {
            this.ImageStar.drawTile(x, y,0,44, 38);
			x += this.ImageStar.width/2;
        }
	},
	
	reloadLevel: function(){
		this.parent();
	},
});

ig.main( '#canvas', MyTitle, 60, 700, 580, 1 );

});
