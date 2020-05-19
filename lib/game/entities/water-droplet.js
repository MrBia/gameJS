ig.module(
    'game.entities.water-droplet'
)

.requires(
    'impact.entity'   
)

.defines(function(){
   EntityWaterDroplet = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/water_droplet.png', 32, 24),
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.PASSIVE,
        y:-50,
        time: 0,
        flip: false,
        boom: new ig.Sound('media/sound/waterbullet.*'),
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('idle', 0.1, [0, 1, 2, 3]);
            this.addAnim('touch', 0.1, [4, 5, 6, 7]);
            
            this.vel.x = -500;
            
            if (settings.flip == true) {
                this.flip = true;
            }
        },
        
        update: function(){
            this.y+=1;
            this.vel.y = this.y;
            
            if (this.flip) {
                this.vel.x = 500;
                this.currentAnim.flip.x = true;
            }
            
            if (this.currentAnim == this.anims.touch) {
                this.time+=0.5;
                if (this.time >= 3) {
                    this.kill();
                    this.boom.play();
                }
            }
            this.parent();
        },
        
        check: function(other){
            if (this.currentAnim == this.anims.idle) {
                other.receiveDamage(1);
            }
            
            this.currentAnim = this.anims.touch;
        }
    }); 
});