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
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.type = 'canon2';
        },
        update: function(){
            this.vel.x = this.x;
            this.parent();
        }
    });   
});