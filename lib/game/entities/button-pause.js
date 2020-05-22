ig.module(
    'game.entities.button-pause'
)

.requires(
    'impact.entity',
    'game.entities.button-restart'
)

.defines(function(){
    EntityButtonPause = EntityButtonRestart.extend({
        animSheet: new ig.AnimationSheet('media/pause.jpg', 44, 38),
        isPaused: false,
        
        init:function(x, y, settings){
            this.parent(x, y, settings);
            this.addAnim('normal', 1, [0]);
        },
        
        update:function(){
            this.parent();  
        },
        
        doClick: function(){
            this.isPaused = !this.isPaused;
        }
    });
});