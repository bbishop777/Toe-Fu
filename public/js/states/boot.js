//Responsible for preloading assets and
//switching to the game state


// class constructor
//

ToeFu.Boot = function() {

};

ToeFu.Boot.prototype.preload = function() {
// will preload all assets
// to autoload each asset by type

  Object.keys(ToeFu.ASSETS).forEach(function(type) {
    for( var asset in ToeFu.ASSETS[type]) {
      ToeFu.game.load[ type.toLowerCase() ] (
       ToeFu.ASSETS[ type ][ asset ].name,
       ToeFu.ASSETS[ type ][ asset ].path,
       ToeFu.ASSETS[ type ][ asset ].width,
       ToeFu.ASSETS[ type ][ asset ].height,
       ToeFu.ASSETS[ type ][ asset ].frames
      );

    }
  });
};
//these are like callbacks...once preload runs create will run
ToeFu.Boot.prototype.create = function() {
//switch to game state
  this.state.start( ToeFu.STATES.GAME );

};