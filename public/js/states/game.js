//The Game state handles sprite creation and game logic

//class constructor
//
ToeFu.Game = function() {


};

ToeFu.Game.prototype.create = function() {
  //instantiate player
  this.player_1 = new ToeFu.Player(this.game, 0 );
  this.game.add.existing(this.player_1);

};

ToeFu.Game.prototype.update = function() {

};

ToeFu.Game.prototype.shutdown = function() {

};