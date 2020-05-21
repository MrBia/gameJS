ig.module( 'game.levels.china' )
.requires( 'impact.image','game.entities.island','game.entities.island-canon','game.entities.ship-1','game.entities.ship-2','game.entities.button-play','game.entities.button-restart','game.entities.button-resume','game.entities.button-music','game.entities.button-sfx' )
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
			"type": "EntityButtonPlay",
			"x": 524,
			"y": 172
		},
		{
			"type": "EntityButtonRestart",
			"x": 580,
			"y": 8
		},
		{
			"type": "EntityButtonResume",
			"x": 572,
			"y": 172
		},
		{
			"type": "EntityButtonMusic",
			"x": 632,
			"y": 12
		},
		{
			"type": "EntityButtonSfx",
			"x": 672,
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
LevelChinaResources=[new ig.Image('media/game_bg.png')];
});