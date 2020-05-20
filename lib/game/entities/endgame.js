ig.baked = true;
ig.module(
    'game.entities.endgame'
)

.requires(
    'impact.entity',
    'game.entities.button-restart'
)

.defines(function(){
    EntityEndgame = ig.Entity.extend({
        background: new ig.Image('media/EndOfLevelBG.png'),
        init:function(x, y, settings){
            this.parent(x, y, settings);
            //this.restartButton = new ig.game.spawnEntity(EntityButtonRestart, 50, 50);
        },
        
        update: function(){
            this.parent();
            
            //this.restartButton.update();
        },
        
        draw:function(){
            this.parent();
            this.background.draw(30, 30);
           // this.restartButton.draw();
        }
    });
});