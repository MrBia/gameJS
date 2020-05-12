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
	'game.levels.mainn'
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
		this.parent();
		
		this.heart.draw(16, 16);
	}
});


ig.main( '#canvas', MyGame, 60, 768, 480, 1 );

});
