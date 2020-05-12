ig.module(
    'game.entities.canons-cover-1'
)
.requires(
    'impact.entity',
    'game.entities.canons-cover',
    'game.entities.canons'
)

.defines(function(){
    EntityCanonsCover1 = EntityCanonsCover.extend({
        init:function(x, y, settings){
            this.parent(x, y, settings);
            if( !ig.global.wm ){
                if (this.flip == false) {
                    this.ent = ig.game.spawnEntity('EntityCanons1', this.pos.x-20, this.pos.y-12, {flip:this.flip});
                }else{
                    this.ent = ig.game.spawnEntity('EntityCanons1', this.pos.x+12, this.pos.y-12, {flip:this.flip});
                }
            }
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