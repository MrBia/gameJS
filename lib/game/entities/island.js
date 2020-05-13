ig.module(
    'game.entities.island'
)

.requires(
    'impact.entity'
)

.defines(function(){
    EntityIsland = ig.Entity.extend({
        size: {x:320, y:280},
        animSheet: new ig.AnimationSheet('media/island.png', 320, 280),
        type: ig.Entity.TYPE.A,
        health: 60,
        checkAgainst: ig.Entity.TYPE.B,
        collides: ig.Entity.COLLIDES.PASSIVE,
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
            
            this.addAnim('state_1', 0.1, [0]);
            this.addAnim('state_2', 0.1, [1]);
            this.addAnim('state_3', 0.1, [2]);
            this.addAnim('state_4', 0.1, [3]);
            this.addAnim('state_5', 0.1, [4]);
            
        },
        
        update: function(){
            if (this.health > 40 && this.health < 50) {
                this.currentAnim = this.anims.state_2;
            }
            else if (this.health > 30 && this.health < 40) {
                this.currentAnim = this.anims.state_3;
            }
            else if (this.health > 20 && this.health < 30) {
                this.currentAnim = this.anims.state_4;
            }
            else if (this.health < 20){
                this.currentAnim = this.anims.state_5;
            }
            this.parent();
        },
        
        receiveDamage: function(amount){
            this.health -= amount;
        }
    });    
});