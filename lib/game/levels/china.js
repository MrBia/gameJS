ig.module( 'game.levels.china' )
.requires( 'impact.image','game.entities.island','game.entities.island-canon','game.entities.ship-1','game.entities.ship-2','game.entities.button-music','game.entities.button-sfx','game.entities.button-restart','game.entities.button-pause','game.entities.ship-3' )
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
			"x": -104,
			"y": 472
		},
		{
			"type": "EntityShip2",
			"x": -336,
			"y": 468
		},
		{
			"type": "EntityShip1",
			"x": 744,
			"y": 476
		},
		{
			"type": "EntityShip1",
			"x": 944,
			"y": 484
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
		},
		{
			"type": "EntityShip3",
			"x": -940,
			"y": 464
		},
		{
			"type": "EntityShip3",
			"x": -720,
			"y": 484
		},
		{
			"type": "EntityShip2",
			"x": -524,
			"y": 440
		},
		{
			"type": "EntityShip2",
			"x": 1292,
			"y": 456
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