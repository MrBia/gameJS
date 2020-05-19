ig.module(
    'game.entities.island-canon'
)

.requires(
    'impact.entity',
    'game.entities.canon-ball'
)

.defines(function(){
    EntityIslandCanon = ig.Entity.extend({
        size:{x:72, y:50},
        flip: false,
        animSheet: new ig.AnimationSheet('media/island_canon.png', 72, 50),
        sfxBoom: new ig.Sound('media/sound/boom.*'),
        numberCanonBall: 200,
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('idle', 0.1, [0]);
            this.addAnim('shoot', 0.1, [0,1,2,3,4,5]);
            //ig.system.context.moveTo(100, 200);
            
        },
        
        update: function(){
            if (ig.input.pressed('up') && this.numberCanonBall > 0) {
                this.currentAnim = this.anims.shoot;
                if (!this.flip) {
                    ig.game.spawnEntity(EntityCanonBall, this.pos.x + 50, this.pos.y + 15, {flip:this.flip});    
                }
                else{
                    ig.game.spawnEntity(EntityCanonBall, this.pos.x + 15, this.pos.y + 10, {flip:this.flip});
                }
                this.sfxBoom.play();
                this.numberCanonBall--;
                this.shoot = true;
                
            }
            else
            {
                /*if (this.currentAnim == this.anims.shoot) {
                    this.count++;
                    if (this.count == 15) {
                        this.currentAnim = this.anims.idle;
                        this.count = 0;
                    }
                }*/
                if (this.currentAnim.loopCount > 0) {
                    //this.currentAnim.loopCount = 0;
                    this.currentAnim = this.anims.shoot.rewind();
                    this.currentAnim = this.anims.idle;
                }

            }
            
            
            if (ig.input.state('left')) {
                this.flip = true;
            }
            else if (ig.input.state('right')) {
                //this.currentAnim.flip.x = false;
                this.flip = false;
            }
            
            this.currentAnim.flip.x = this.flip;
            
            this.parent();
        }
    });
});