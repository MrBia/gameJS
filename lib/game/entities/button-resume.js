ig.module(
    'game.entities.button-resume'
)

.requires(
    'impact.entity',
    'game.entities.button-restart'
)

.defines(function(){
    EntityButtonResume = EntityButtonRestart.extend({
        animSheet: new ig.AnimationSheet('media/resume_btn.png', 44, 38),
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
        }
    });
});