export default class Suta extends enchant.Sprite {
  constructor(width, height, time) {
    super(width, height);
    this.image = enchant.Core.instance.assets['img/stamp1.png'];
    this.scale(-1, 1);
    this.tl.moveBy(240, 0, time)    // move right
        .scaleTo(1, 1, 10)        // turn left
        .moveBy(-240, 0, time)      // move left
        .scaleTo(-1, 1, 10)       // turn right
        .loop();                  // loop it
  }
}
