//each asset is organized by type
//each asset has structure
// {
//  name : String,
//  path : String,
//  width : Integer @optional,
//  height : Integer @optional
//  frames : Integer @optional}
//
ToeFu.ASSETS = {
  //asset path must be a valid game.Load.[x] method
  SPRITESHEET : {
    PLAYER : {
      name : 'player',
      path : 'assets/graphics/players_100x96.png',
      width : 100,
      height : 96,
      frames : 18,
      frames_per_row : 9 //split spritesheet by player/row
    }
  }
};