ig.module(
    'game.entities.canons-cover'
)
.requires(
    'impact.entity'
    //'game.entities.canons'
)
.defines(function(){
    EntityCanonsCover = ig.Entity.extend({
        size:{x:26,y:20},
        flip:false,
        ent: 0,
        health: 1,
        x:-20,
        animSheet: new ig.AnimationSheet('media/ship_1_canon_cover.png', 26, 20),
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('idle', 1, [0]);
            this.vel.x = this.x;
            this.vel.y = 0;
            
            if (settings.flip == true) {
                this.vel.x = -this.x;
                this.flip = true;
            }
            
            this.currentAnim.flip.x = this.flip;
        }
    
    });    
});