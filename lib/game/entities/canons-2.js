ig.module(
    'game.entities.canons-2'
)

.requires(
    'impact.entity',
    'game.entities.canons'
)

.defines(function(){
    EntityCanons2 = EntityCanons.extend({
        animSheet: new ig.AnimationSheet('media/ship_2_canon.png', 34, 26),
        
        update: function(){
            this.vel.x = this.x;
            this.parent();
        }
    });   
});