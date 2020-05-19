ig.module(
    'game.entities.button-music'
)

.requires(
    'impact.entity',
    'game.entities.button-restart'
)

.defines(function(){
    EntityButtonMusic = EntityButtonRestart.extend({
        animSheet: new ig.AnimationSheet('media/music_btn.png', 30, 28),
        choose: false,
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
        },
        
        update: function(){
            if (ig.input.pressed('mouseclick') && this.inFocus()) {
                this.choose = !this.choose;
            }
            
            if (this.choose) {
                this.currentAnim = this.anims.press;
                this.clicked();
            }
            else{
                this.currentAnim = this.anims.normal;
                this.clicked();
            }
        },
        
        clicked: function(){
            if (this.choose) {
                ig.music.stop();
            }
            else{
                ig.music.play();
            }
        }
        
        
    });
});