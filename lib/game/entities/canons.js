ig.module(
    'game.entities.canons'
)

.requires(
    'impact.entity',
    'game.entities.water-droplet'
)

.defines(function(){
    EntityCanons = ig.Entity.extend({
        size:{x:34, y:26},
        animSheet: new ig.AnimationSheet('media/ship_1_canon.png', 34, 26),
        flip: false,
        x: -20,
        time: 0,
        init:function(x, y, settings){
            this.parent(x, y, settings);
            this.vel.x = this.x;
            this.vel.y = 0;
            this.addAnim('idle', 0.1, [0]);
            this.addAnim('shoot', 0.1, [1,2,3,4,5]);
            
            if (settings.flip == true) {
                this.vel.x = -this.x;
                this.flip = true;
            }
            
            this.currentAnim.flip.x = this.flip;
        },
        
        update:function(){
            if (this.vel.x == 0) {
                this.time+=0.05;
                if (this.time >= 4) {
                    this.currentAnim = this.anims.shoot;
                    ig.game.spawnEntity(EntityWaterDroplet, this.pos.x, this.pos.y+3, {flip:this.flip});
                    this.time = 0;
                    
                }
                else if (this.time > 1.5 && this.time < 2) {
                    this.currentAnim = this.anims.idle;
                }
                
                 
                this.currentAnim.flip.x = this.flip;
            }
            this.parent();
        }
    });    
});