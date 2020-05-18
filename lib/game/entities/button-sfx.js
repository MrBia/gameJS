ig.module(
    'game.entities.button-sfx'
)

.requires(
    'impact.entity',
    'game.entities.button-restart',
    'game.entities.button-music'
)

.defines(function(){
    EntityButtonSfx = EntityButtonMusic.extend({
        animSheet: new ig.AnimationSheet('media/sfx_btn.png', 30, 28),
    
        init: function(x, y, settings){
            this.parent(x, y, settings);
        }
    });
});