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
        
        update: function(){
            this.parent();
        },
        
        doClick:function(){
            
        }
    });
});