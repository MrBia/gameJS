ig.module(
    'game.entities.button-left'
)

.requires(
    'impact.entity',
    'game.entities.button-restart'
)

.defines(function(){
    EntityButtonLeft = EntityButtonRestart.extend({
        animSheet: new ig.AnimationSheet('media/left.jpg', 44, 38),
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
        },
        
        update:function(){
            this.parent();  
        },
        
        doClick:function(){
            ig.game.preLevel();
        }
    });    
});