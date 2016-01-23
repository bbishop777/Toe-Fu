//create a single global variable (type is an object)

window.ToeFu = {

  ASSETS: {},       //In all CAPS because they are constants...value will not change

  STAGE : {
    WIDTH : 900,
    HEIGHT: 600
  },

  STAGE_ID : 'game', //the div in index.html to render this game

  STATES : {
    BOOT: 'Boot',
    GAME : 'Game'
  }

};

//Load Phaser on window Load
window.onload = function() {
  ToeFu.game = new Phaser.Game( ToeFu.STAGE.WIDTH, ToeFu.STAGE.HEIGHT, Phaser.AUTO, ToeFu.STAGE_ID);
  ToeFu.game.state.add( ToeFu.STATES.BOOT, ToeFu.Boot );
  ToeFu.game.state.add( ToeFu.STATES.GAME, ToeFu.Game);
  ToeFu.game.state.start( ToeFu.STATES.BOOT);
};