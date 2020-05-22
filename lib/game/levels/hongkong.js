ig.module( 'game.levels.hongkong' )
.requires( 'impact.image','game.entities.ship-1','game.entities.ship-2','game.entities.ship-3','game.entities.island','game.entities.island-canon','game.entities.button-restart','game.entities.button-music','game.entities.button-sfx','game.entities.button-pause' )
.defines(function(){
LevelHongkong=/*JSON[*/{
	"entities": [
		{
			"type": "EntityShip1",
			"x": -676,
			"y": 156
		},
		{
			"type": "EntityShip2",
			"x": 712,
			"y": 160
		},
		{
			"type": "EntityShip3",
			"x": 1116,
			"y": 184
		},
		{
			"type": "EntityShip1",
			"x": -88,
			"y": 156
		},
		{
			"type": "EntityShip2",
			"x": -872,
			"y": 184
		},
		{
			"type": "EntityShip1",
			"x": 1576,
			"y": 164
		},
		{
			"type": "EntityShip1",
			"x": -360,
			"y": 152
		},
		{
			"type": "EntityShip2",
			"x": -228,
			"y": 180
		},
		{
			"type": "EntityShip3",
			"x": 916,
			"y": 192
		},
		{
			"type": "EntityShip3",
			"x": -488,
			"y": 208
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
			"x": -1080,
			"y": 168
		},
		{
			"type": "EntityShip2",
			"x": -1316,
			"y": 176
		},
		{
			"type": "EntityShip3",
			"x": 1348,
			"y": 204
		},
		{
			"type": "EntityButtonRestart",
			"x": 500,
			"y": 4
		},
		{
			"type": "EntityButtonMusic",
			"x": 560,
			"y": 8
		},
		{
			"type": "EntityButtonSfx",
			"x": 608,
			"y": 8
		},
		{
			"type": "EntityButtonPause",
			"x": 648,
			"y": 4
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