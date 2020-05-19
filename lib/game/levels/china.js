ig.module( 'game.levels.china' )
.requires( 'impact.image','game.entities.island','game.entities.island-canon','game.entities.ship-1','game.entities.ship-2','game.entities.ship-3','game.entities.button-play','game.entities.button-restart','game.entities.button-resume','game.entities.button-music','game.entities.button-sfx' )
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
			"x": 84,
			"y": 468
		},
		{
			"type": "EntityShip2",
			"x": -68,
			"y": 440
		},
		{
			"type": "EntityShip3",
			"x": -196,
			"y": 444
		},
		{
			"type": "EntityShip3",
			"x": -324,
			"y": 456
		},
		{
			"type": "EntityShip2",
			"x": -464,
			"y": 424
		},
		{
			"type": "EntityShip1",
			"x": -620,
			"y": 468
		},
		{
			"type": "EntityShip1",
			"x": 600,
			"y": 460
		},
		{
			"type": "EntityShip1",
			"x": 728,
			"y": 476
		},
		{
			"type": "EntityShip2",
			"x": 860,
			"y": 440
		},
		{
			"type": "EntityShip3",
			"x": 996,
			"y": 480
		},
		{
			"type": "EntityShip2",
			"x": 1124,
			"y": 444
		},
		{
			"type": "EntityShip1",
			"x": 1408,
			"y": 472
		},
		{
			"type": "EntityButtonPlay",
			"x": 572,
			"y": 16
		},
		{
			"type": "EntityButtonRestart",
			"x": 572,
			"y": 60
		},
		{
			"type": "EntityButtonResume",
			"x": 576,
			"y": 108
		},
		{
			"type": "EntityButtonMusic",
			"x": 580,
			"y": 152
		},
		{
			"type": "EntityButtonSfx",
			"x": 576,
			"y": 188
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