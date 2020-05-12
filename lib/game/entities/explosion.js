ig.module(
    'game.entities.explosion'
)

.requires(
    'impact.entity'
)

.defines(function(){
    EntityExplosion = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/explosion.png', 162, 120),
        //325 240
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('effect', 0.1, [0,1,2,3,4,5]);
        },
        
        update: function(){
            if (this.currentAnim.loopCount > 0) {
                this.kill();
            }
            this.parent();
        }
    });    
});