ig.module(
    'game.entities.canon-ball'
)

.requires(
    'impact.entity',
    'game.entities.explosion'
)

.defines(function(){
    EntityCanonBall = ig.Entity.extend({
        size:{x:12, y:12},
        maxVel:{x: 400, y:200},
        y:-200,
        checkAgainst: ig.Entity.TYPE.B,
        collides: ig.Entity.COLLIDES.PASSIVE,
        animSheet: new ig.AnimationSheet('media/canon_ball.png',12 ,12 ),
        time: 0,
        ent:0,
        
        init: function(x, y, settings){
            
            this.parent(x, y, settings);
            this.addAnim('idle', 0.1, [0,1,2,3,4,5]);
            
            if (settings.flip == true) {
                this.vel.x = -200;
            }else{
                this.vel.x = 200;
            }
            
            this.vel.y = -50;
        },
        
        
        
        update: function(){
            this.y+=5;
            this.vel.y=this.y;
            
            if (this.pos.y > this.posY) {
                this.kill();
            }
            
            
            this.parent();
        },
        
        check: function(other){
            this.time+=0.5;
            if (this.time >= 1) {
                other.receiveDamage(1);
                this.kill();
            }
            
            this.vel.x = 0;
            
            if (this.ent == 0) {
                this.ent = ig.game.spawnEntity(EntityExplosion, this.pos.x-50, this.pos.y-50, {flip:this.flip});
            }
            

        }
    }); 
});