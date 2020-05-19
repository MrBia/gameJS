ig.module(
    'game.entities.button-restart'
)

.requires(
    'impact.entity'
)

.defines(function(){
    EntityButtonRestart = ig.Entity.extend({
       size:{x:44, y:35},
       animSheet: new ig.AnimationSheet('media/restart_btn.png', 44, 38),
       count:0,
       
       init: function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('normal', 1, [0]);
            this.addAnim('press', 1, [1]);
            
       },
       
       update: function(){
            this.parent();
            
            if (ig.input.pressed('mouseclick') && this.inFocus()) {
                this.currentAnim = this.anims.press;
                this.doClick();
            }
            
            if (this.currentAnim == this.anims.press) {
               this.count++;
               if (this.count == 10) {
                    this.count = 0;
                    this.currentAnim = this.anims.normal;
               }
            }
       },
        
        doClick: function(){
                ig.game.reloadLevel();
        },
        
        inFocus: function(){
          return(
                (this.pos.x <= (ig.input.mouse.x + ig.game.screen.x) &&
                 (ig.input.mouse.x + ig.game.screen.x) <= this.pos.x + this.size.x)&&
                (this.pos.y <= (ig.input.mouse.y + ig.game.screen.y) &&
                 (ig.input.mouse.y + ig.game.screen.y) <= this.pos.y + this.size.y)
          );  
        }
    });
});