ig.module( 'game.levels.mainn' )
.requires( 'impact.image','game.entities.ship-1','game.entities.ship-2','game.entities.ship-3','game.entities.island','game.entities.island-canon' )
.defines(function(){
LevelMainn=/*JSON[*/{
	"entities": [
		{
			"type": "EntityShip1",
			"x": -592,
			"y": 100
		},
		{
			"type": "EntityShip2",
			"x": 708,
			"y": 192
		},
		{
			"type": "EntityShip3",
			"x": 776,
			"y": 108
		},
		{
			"type": "EntityShip1",
			"x": -12,
			"y": 160
		},
		{
			"type": "EntityShip2",
			"x": -760,
			"y": 160
		},
		{
			"type": "EntityShip1",
			"x": 1076,
			"y": 84
		},
		{
			"type": "EntityShip1",
			"x": -136,
			"y": 108
		},
		{
			"type": "EntityShip2",
			"x": -216,
			"y": 180
		},
		{
			"type": "EntityShip3",
			"x": 916,
			"y": 192
		},
		{
			"type": "EntityShip3",
			"x": -460,
			"y": 180
		},
		{
			"type": "EntityIsland",
			"x": 232,
			"y": 32
		},
		{
			"type": "EntityIslandCanon",
			"x": 352,
			"y": 196
		},
		{
			"type": "EntityShip1",
			"x": -900,
			"y": 92
		},
		{
			"type": "EntityShip2",
			"x": -1020,
			"y": 176
		},
		{
			"type": "EntityShip3",
			"x": 1160,
			"y": 208
		}
	],
	"layer": [
		{
			"name": "main",
			"width": 16,
			"height": 10,
			"linkWithCollision": false,
			"visible": 1,
			"tilesetName": "media/game_bg.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 48,
			"foreground": false,
			"data": [
				[54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54],
				[54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54],
				[54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54],
				[54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54],
				[54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54],
				[54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54],
				[54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54],
				[54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54],
				[54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54],
				[54,54,54,54,54,54,54,54,54,54,54,54,54,54,54,54]
			]
		}
	]
}/*]JSON*/;
LevelMainnResources=[new ig.Image('media/game_bg.png')];
});