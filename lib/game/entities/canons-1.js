ig.module(
    'game.entities.canons-1'
)

.requires(
    'impact.entity',
    'game.entities.canons'
)

.defines(function(){
    EntityCanons1 = EntityCanons.extend({
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.type = 'canon1';
        },
        update: function(){
            this.vel.x = this.x;
            this.parent();
        }
    });   
});