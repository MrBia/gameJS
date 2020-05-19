ig.module( 'game.levels.hongkong' )
.requires( 'impact.image','game.entities.ship-1','game.entities.ship-2','game.entities.ship-3','game.entities.island','game.entities.island-canon','game.entities.button-restart','game.entities.button-music','game.entities.button-sfx' )
.defines(function(){
LevelHongkong=/*JSON[*/{
	"entities": [
		{
			"type": "EntityShip1",
			"x": -608,
			"y": 152
		},
		{
			"type": "EntityShip2",
			"x": 708,
			"y": 180
		},
		{
			"type": "EntityShip3",
			"x": 1048,
			"y": 164
		},
		{
			"type": "EntityShip1",
			"x": -12,
			"y": 160
		},
		{
			"type": "EntityShip2",
			"x": -760,
			"y": 208
		},
		{
			"type": "EntityShip1",
			"x": 1340,
			"y": 164
		},
		{
			"type": "EntityShip1",
			"x": -316,
			"y": 152
		},
		{
			"type": "EntityShip2",
			"x": -196,
			"y": 216
		},
		{
			"type": "EntityShip3",
			"x": 916,
			"y": 192
		},
		{
			"type": "EntityShip3",
			"x": -456,
			"y": 212
		},
		{
			"type": "EntityIsland",
			"x": 216,
			"y": 40
		},
		{
			"type": "EntityIslandCanon",
			"x": 352,
			"y": 196
		},
		{
			"type": "EntityShip1",
			"x": -908,
			"y": 156
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
		},
		{
			"type": "EntityButtonRestart",
			"x": 572,
			"y": 4
		},
		{
			"type": "EntityButtonMusic",
			"x": 628,
			"y": 8
		},
		{
			"type": "EntityButtonSfx",
			"x": 672,
			"y": 8
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
				[141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141],
				[141,141,141,141,141,141,177,157,157,157,202,141,141,141,141,141],
				[141,141,141,141,141,176,176,141,141,202,202,141,141,141,141,141],
				[141,141,141,141,141,141,141,141,141,141,202,202,202,141,141,141],
				[232,234,234,234,234,234,234,234,234,234,234,234,234,234,234,234],
				[253,253,253,253,253,253,253,253,253,253,253,253,253,253,253,253],
				[274,274,276,279,280,301,301,301,301,301,301,301,301,301,301,301],
				[279,279,279,301,301,301,301,301,301,301,301,301,301,301,301,301],
				[316,316,301,301,301,301,301,301,301,301,301,301,301,301,301,301],
				[301,301,301,301,301,301,301,301,301,301,301,301,301,301,301,301]
			]
		}
	]
}/*]JSON*/;
LevelHongkongResources=[new ig.Image('media/game_bg.png')];
});