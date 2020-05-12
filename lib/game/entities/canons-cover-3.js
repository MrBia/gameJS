ig.module(
    'game.entities.canons-cover-3'
)
.requires(
    'impact.entity',
    'game.entities.canons-cover',
    'game.entities.canons'
)

.defines(function(){
    EntityCanonsCover3 = EntityCanonsCover.extend({
        size:{x: 22, y:18},
        animSheet: new ig.AnimationSheet('media/ship_3_canon_cover.png', 22, 18),
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
            
            if( !ig.global.wm ){
                if (this.flip == false) {
                    this.ent = ig.game.spawnEntity('EntityCanons3', this.pos.x-20, this.pos.y-12, {flip:this.flip});
                }else{
                    this.ent = ig.game.spawnEntity('EntityCanons3', this.pos.x+8, this.pos.y-12, {flip:this.flip});
                }
            }
            this.vel.x = settings.velx;
            
        },
        
        update:function(){
            this.vel.x = this.x;
            this.ent.x = this.vel.x;
            if (this.health == 0) {
                this.kill();
                ig.game.removeEntity(this.ent);
            }
            
            this.parent();
        }
    });    
});