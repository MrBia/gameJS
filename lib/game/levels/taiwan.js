ig.module( 'game.levels.taiwan' )
.requires( 'impact.image','game.entities.island','game.entities.island-canon','game.entities.ship-1','game.entities.ship-2','game.entities.ship-3','game.entities.button-restart','game.entities.button-music','game.entities.button-sfx','game.entities.button-pause' )
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
			"x": 2248,
			"y": 460
		},
		{
			"type": "EntityShip1",
			"x": 2036,
			"y": 464
		},
		{
			"type": "EntityShip1",
			"x": -388,
			"y": 440
		},
		{
			"type": "EntityShip1",
			"x": 744,
			"y": 456
		},
		{
			"type": "EntityShip1",
			"x": 1288,
			"y": 480
		},
		{
			"type": "EntityShip1",
			"x": -1044,
			"y": 460
		},
		{
			"type": "EntityShip2",
			"x": 1748,
			"y": 468
		},
		{
			"type": "EntityShip2",
			"x": 48,
			"y": 440
		},
		{
			"type": "EntityShip2",
			"x": -180,
			"y": 452
		},
		{
			"type": "EntityShip2",
			"x": -620,
			"y": 432
		},
		{
			"type": "EntityShip3",
			"x": -1236,
			"y": 460
		},
		{
			"type": "EntityShip3",
			"x": 2448,
			"y": 488
		},
		{
			"type": "EntityShip3",
			"x": -1420,
			"y": 460
		},
		{
			"type": "EntityShip3",
			"x": 1532,
			"y": 492
		},
		{
			"type": "EntityShip3",
			"x": 1076,
			"y": 492
		},
		{
			"type": "EntityShip3",
			"x": 888,
			"y": 480
		},
		{
			"type": "EntityButtonRestart",
			"x": 456,
			"y": 8
		},
		{
			"type": "EntityButtonMusic",
			"x": 512,
			"y": 12
		},
		{
			"type": "EntityButtonSfx",
			"x": 560,
			"y": 12
		},
		{
			"type": "EntityButtonPause",
			"x": 608,
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
LevelTaiwanResources=[new ig.Image('media/game_bg.png')];
});