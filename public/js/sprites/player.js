//sprite class constructor
//
ToeFu.Player = function ( game, id, name) {
  this.game = game;
  this.id = id;
  //? means if name is not defined then assign 'Player '
  this.name = name? name : 'Player ' + (id + 1);

  //super constructor call
  Phaser.Sprite.call(this, game, 0, 0, ToeFu.ASSETS.SPRITESHEET.PLAYER.name);

};

//extend Sprite prototype
ToeFu.Player.prototype = Object.create(Phaser.Sprite.prototype, {
  constructor : {
    value : ToeFu.Player
  }
});