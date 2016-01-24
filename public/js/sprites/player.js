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

  function select_sprite_row(player_id) {
    return function(frame_id) {
      return frame_id + player_id*ToeFu.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
    };
  }

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

    // enable physics (adds this.body)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    //set center registration point (where sprites are centered at)
    this.anchor = { x: 0.5, y : 0.5 };

    // set animations could do it this way:
    // if(this.id === 0){
    //   this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames );
    // } else {
    //   var frames = ANIMATIONS.IDLE.frames;
    //   for (var i = 0, len = frames.length; i < len; i++) {
    //     frames[i] = frames[i] + ToeFu.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
    //   }
    //   this.animations.add(ANIMATIONS.IDLE.name, frames );
    // }

    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames.map(select_sprite_row(this.id)));

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

  //Input actions

  ToeFu.Player.prototype.jump = function () {

  };

  ToeFu.Player.prototype.dive = function () {

  };

  ToeFu.Player.prototype.dive_stop = function () {

  };

  ToeFu.Player.prototype.step_left = function () {

  };

  ToeFu.Player.prototype.step_right = function () {

  };

  // stop stepping lef or right
  ToeFu.Player.prototype.stop = function() {

  };



})();