//Responsible for preloading assets and
//switching to the game state


// class constructor
//

ToeFu.Boot = function() {

};

ToeFu.Boot.prototype.preLoad = function() {
// will preload all assets
};
//these are like callbacks...once preload runs create will run
ToeFu.Boot.prototype.create = function() {
//switch to game state
  this.state.start( ToeFu.STATES.GAME );

};