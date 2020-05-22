ig.module(
    'game.entities.ship-2'
)

.requires(
    'impact.entity',
    'game.entities.canons-cover-2',
    'game.entities.ship'
)

.defines(function(){ 
    EntityShip2 = EntityShip.extend({
        size:{x:132, y:96},
        animSheet: new ig.AnimationSheet('media/ship_2.png', 132, 96),
        health: 3,
        
        init:function(x, y, settings){
           this.parent(x, y, settings);
           
           if( !ig.global.wm ){
                if (this.flip == false) {
                    this.ent = ig.game.spawnEntity('EntityCanonsCover2', this.pos.x+10, this.pos.y+40, {flip:this.flip});
                }
                else{
                    this.ent = ig.game.spawnEntity('EntityCanonsCover2', this.pos.x+95, this.pos.y+40, {flip:this.flip});
                }
                
                
           }
           
        },
        
        update:function(){
            this.ent.x = this.vel.x;
            if (this.health <= 0) {
                this.kill();
                this.ent.health = 0;
                //ig.game.removeEntity(this.ent);
            } 
            this.parent();
        }
    });    
});