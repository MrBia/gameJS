ig.module(
    'game.entities.ship'
)

.requires(
    'impact.entity',
    'game.entities.island'
)

.defines(function(){
    EntityShip = ig.Entity.extend({
        size:{x:128, y:74},
        type: ig.Entity.TYPE.B,
        health: 1,
        flip:false,
        ent:0,
        animSheet: new ig.AnimationSheet('media/ship_1.png', 128, 74),
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('idle', 0.1, [0]);
            this.vel.x = -20;
            this.vel.y = 0;
            
            if (this.pos.x < 336) {
                this.vel.x = 20;
                this.flip = true;
            }
            
            this.currentAnim.flip.x = this.flip;
            
        },
        
        update: function(){
            
            var island = ig.game.getEntitiesByType(EntityIsland)[0];
            
            if (!this.flip && this.pos.x < island.pos.x + 400) {
                this.vel.x = 0;
            }else if (this.flip && this.pos.x > island.pos.x - 200) {
                this.vel.x = 0;
            }
            
            this.parent();
            
        },
        
        receiveDamage: function(amount){
            this.health-=amount;
            
        }
    });    
});