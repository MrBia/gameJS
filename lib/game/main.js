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
	'game.levels.mainn',
	'game.levels.main'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	// heart
	heart: new ig.Image('media/hp_icon.png'),
	
	init: function() {
		ig.input.bind( ig.KEY.UP_ARROW, 'up' );
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
		
		this.loadLevel(LevelMainn);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		var island = ig.game.getEntitiesByType(EntityIsland)[0];
		this.parent();
		var x = 16;
		var y = 16;
		for (var i = 0; i < (island.health/10)-1; i ++) {
            this.heart.draw(x, y);
			x += this.heart.width + 8;
        }
		
	}
});


MyTitle = ig.Game.extend({
	title: new ig.Image('media/title.png'),
	background: new ig.Image('media/game_bg1.png'),
	
	init: function(){
		//ig.input.bind(ig.KEY.X, 'jump');
		//ig.input.bind(ig.KEY.C, 'shoot');
		ig.input.bind(ig.KEY.MOUSE1, 'mouseclick');
		
		
		//this.loadLevel(LevelMain);
	},
	
	update: function(){
		/*if (ig.input.pressed('jump') || ig.input.pressed('shoot')) {
            ig.system.setGame(MyGame);
        }*/
		
		if (ig.input.pressed('mouseclick')) {
            ig.system.setGame(MyGame);
			
			if (this.delegate) {
                this.delegate.bellyTouched(this);
            }
        }
		
		this.parent();
	},
	
	draw: function(){
		this.parent();
		var cx = ig.system.width/2;
		var cy = ig.system.height/2;
		
		this.background.draw(0, 0);
		this.title.draw(cx/2 + 50, cy/2);
		
		//this.title.drawTile(0, 110, 0, 80, 48, false, false);
	}
});

ig.main( '#canvas', MyTitle, 60, 640, 480, 1 );

});
