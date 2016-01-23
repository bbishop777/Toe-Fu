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