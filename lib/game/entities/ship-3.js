ig.module(
    'game.entities.ship-3'
)

.requires(
    'impact.entity',
    'game.entities.canons-cover-3',
    'game.entities.ship'
)

.defines(function(){
    EntityShip3 = EntityShip.extend({
        size:{x:118, y:72},
        animSheet: new ig.AnimationSheet('media/ship_3.png', 118, 72),
        health: 4,
        init:function(x, y, settings){
           this.parent(x, y, settings);
           if( !ig.global.wm ){
                if (this.flip == false) {
                    this.ent = ig.game.spawnEntity('EntityCanonsCover3', this.pos.x+20, this.pos.y+20, {flip:this.flip});
                }
                else{
                    this.ent = ig.game.spawnEntity('EntityCanonsCover3', this.pos.x+80, this.pos.y+20, {flip:this.flip});
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