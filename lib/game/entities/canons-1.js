ig.module(
    'game.entities.canons-1'
)

.requires(
    'impact.entity',
    'game.entities.canons'
)

.defines(function(){
    EntityCanons1 = EntityCanons.extend({
        update: function(){
            this.vel.x = this.x;
            this.parent();
        }
    });   
});