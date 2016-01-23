(function () {

//private static variable
var ANIMATIONS = {
  IDLE : {
    name : 'idle',
    frames : [0,1,2,3],
    fps : 5
  }
};

 var FACING_FACTOR = {
    LEFT : -1,
    RIGHT : 1
  };


//sprite class constructor
//@id is  0 index based
  ToeFu.Player = function ( game, id, name) {
    this.game = game;
    this.id = id;
    //? means if name is not defined then assign 'Player '
    this.name = name? name : 'Player ' + (id + 1);
    this.facing //direction that player is facing

    //super constructor call
    Phaser.Sprite.call(this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name);

    //set animations
    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames );

    //play the initial animation
    this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);

  };

  //extend Sprite prototype
  ToeFu.Player.prototype = Object.create(Phaser.Sprite.prototype, {
    constructor : {
      value : ToeFu.Player
    }
  });

  //pulbic static variable
  ToeFu.Player.FACING = {
    LEFT : 'LEFT',
    RIGHT : 'RIGHT'
  };


  //this is invoked on every frame 60fps
  ToeFu.Player.prototype.update = function() {

    //update facing direction
    this.scale.x = FACING_FACTOR[ this. facing ];

  };

})();