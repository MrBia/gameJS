ig.module(
    'game.entities.canons-3'
)

.requires(
    'impact.entity',
    'game.entities.canons'
)

.defines(function(){
    EntityCanons3 = EntityCanons.extend({
        animSheet: new ig.AnimationSheet('media/ship_3_canon.png', 34, 26),
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.type = 'canon3';
        },
        update: function(){
            this.vel.x = this.x;
            this.parent();
        }
    });   
});