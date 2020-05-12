ig.module(
    'game.entities.ship-1'
)

.requires(
    'impact.entity',
    'game.entities.canons-cover-1',
    'game.entities.ship'
)

.defines(function(){ 
    EntityShip1 = EntityShip.extend({
        init:function(x, y, settings){
            this.parent(x, y, settings);
            if( !ig.global.wm ){
                if (this.flip == false) {
                    this.ent = ig.game.spawnEntity('EntityCanonsCover1', this.pos.x+5, this.pos.y+22, {flip:this.flip});
                }
                else{
                    this.ent = ig.game.spawnEntity('EntityCanonsCover1', this.pos.x+100, this.pos.y+22, {flip:this.flip});
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