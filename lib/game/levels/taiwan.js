ig.module( 'game.levels.taiwan' )
.requires( 'impact.image','game.entities.island','game.entities.island-canon','game.entities.ship-1','game.entities.ship-2','game.entities.ship-3','game.entities.button-restart','game.entities.button-music','game.entities.button-sfx' )
.defines(function(){
LevelTaiwan=/*JSON[*/{
	"entities": [
		{
			"type": "EntityIsland",
			"x": 228,
			"y": 296
		},
		{
			"type": "EntityIslandCanon",
			"x": 344,
			"y": 464
		},
		{
			"type": "EntityShip1",
			"x": 2216,
			"y": 456
		},
		{
			"type": "EntityShip1",
			"x": 2036,
			"y": 464
		},
		{
			"type": "EntityShip1",
			"x": -304,
			"y": 452
		},
		{
			"type": "EntityShip1",
			"x": 604,
			"y": 468
		},
		{
			"type": "EntityShip1",
			"x": 1084,
			"y": 476
		},
		{
			"type": "EntityShip1",
			"x": -1044,
			"y": 460
		},
		{
			"type": "EntityShip2",
			"x": 1480,
			"y": 464
		},
		{
			"type": "EntityShip2",
			"x": 48,
			"y": 440
		},
		{
			"type": "EntityShip2",
			"x": -140,
			"y": 452
		},
		{
			"type": "EntityShip2",
			"x": -492,
			"y": 416
		},
		{
			"type": "EntityShip3",
			"x": -1192,
			"y": 440
		},
		{
			"type": "EntityShip3",
			"x": 2392,
			"y": 484
		},
		{
			"type": "EntityShip3",
			"x": -1328,
			"y": 476
		},
		{
			"type": "EntityShip3",
			"x": 1276,
			"y": 476
		},
		{
			"type": "EntityShip3",
			"x": 924,
			"y": 488
		},
		{
			"type": "EntityShip3",
			"x": 768,
			"y": 472
		},
		{
			"type": "EntityButtonRestart",
			"x": 540,
			"y": 8
		},
		{
			"type": "EntityButtonMusic",
			"x": 592,
			"y": 12
		},
		{
			"type": "EntityButtonSfx",
			"x": 632,
			"y": 12
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
LevelTaiwanResources=[new ig.Image('media/game_bg.png')];
});