ig.module(
    'game.entities.button-play'
)

.requires(
    'impact.entity',
    'game.entities.button-restart'
)

.defines(function(){
    EntityButtonPlay = EntityButtonRestart.extend({
        animSheet: new ig.AnimationSheet('media/play_btn.png', 44, 38),
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
        },
        
        doClick:function(){
                
        }
    });
});