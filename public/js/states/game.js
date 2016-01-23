//The Game state handles sprite creation and game logic
(function (){

  var INITIAL_POSITIONS = [
  // player 1
   {x : 100, y : 100 },
   //player 2
   {x : 600, y: 100}
  ];
  //class constructor
  //
  ToeFu.Game = function() {
    this.player_1;
    this.player_2;

  };

  ToeFu.Game.prototype.create = function() {
    //instantiate player
    this.player_1 = new ToeFu.Player(this.game, 0 );
    this.player_2 = new ToeFu.Player(this.game, 1 );
    this.game.add.existing(this.player_1);
    this.game.add.existing(this.player_2);

    this.player_1.x = INITIAL_POSITIONS[0].x;
    this.player_1.y = INITIAL_POSITIONS[0].y;
    this.player_2.x = INITIAL_POSITIONS[1].x;
    this.player_2.y = INITIAL_POSITIONS[1].y;

  };

  ToeFu.Game.prototype.update = function() {

  };

  ToeFu.Game.prototype.shutdown = function() {

  };
})();