enchant();
let game = new Core(800, 800);
game.preload('img/stamp1.png');
game.fps = 60;

game.onload = () => {
  let suta = new Sprite(250, 250);
  suta.image = game.assets['img/stamp1.png'];
  game.rootScene.addChild(suta);
  suta.scale(-1, 1);

  suta.tl.moveBy(240, 0, 90)    // move right
      .scaleTo(1, 1, 10)        // turn left
      .moveBy(-240, 0, 90)      // move left
      .scaleTo(-1, 1, 10)       // turn right
      .loop();                  // loop it
};

game.start();
