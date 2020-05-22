ig.module(
    'game.entities.button-right'
)

.requires(
    'impact.entity',
    'game.entities.button-restart'
)

.defines(function(){
    EntityButtonRight = EntityButtonRestart.extend({
        animSheet: new ig.AnimationSheet('media/right.jpg', 44, 38),
        
        init: function(x, y, settings){
            this.parent(x, y, settings);
        },
        
        update:function(){
            this.parent();  
        },
        
        doClick:function(){
            ig.game.nextLevel();
        }
    });    
});