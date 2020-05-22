ig.module( 'game.levels.china' )
.requires( 'impact.image','game.entities.island','game.entities.island-canon','game.entities.ship-1','game.entities.ship-2','game.entities.button-music','game.entities.button-sfx','game.entities.button-restart','game.entities.button-pause' )
.defines(function(){
LevelChina=/*JSON[*/{
	"entities": [
		{
			"type": "EntityIsland",
			"x": 236,
			"y": 300
		},
		{
			"type": "EntityIslandCanon",
			"x": 364,
			"y": 464
		},
		{
			"type": "EntityShip1",
			"x": 32,
			"y": 472
		},
		{
			"type": "EntityShip2",
			"x": -60,
			"y": 472
		},
		{
			"type": "EntityShip1",
			"x": 668,
			"y": 464
		},
		{
			"type": "EntityShip1",
			"x": 712,
			"y": 496
		},
		{
			"type": "EntityButtonMusic",
			"x": 556,
			"y": 12
		},
		{
			"type": "EntityButtonSfx",
			"x": 604,
			"y": 12
		},
		{
			"type": "EntityButtonRestart",
			"x": 496,
			"y": 8
		},
		{
			"type": "EntityButtonPause",
			"x": 648,
			"y": 8
		}
	],
	"layer": [
		{
			"name": "background",
			"width": 1,
			"height": 1,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/game_bg.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 768,
			"foreground": false,
			"data": [
				[1]
			]
		}
	]
}/*]JSON*/;
LevelChinaResources=[new ig.Image('media/game_bg.png')];
});