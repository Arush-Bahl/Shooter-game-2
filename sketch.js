var gameState = 0;
var bg1, bg2, damage, kills, rank, database, playerCount,form, game, player;

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.start();
}

function draw() {

  if(playerCount === 4){
    game.updateState(1);
  }

}