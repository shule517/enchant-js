export default class Suta extends enchant.Sprite {
  constructor(width, height, time) {
    super(width, height);
    this.image = enchant.Core.instance.assets['img/stamp1.png'];
    this.scale(-1, 1);
    this.tl
      .moveBy(240, 0, time)   // move right
      .scaleTo(1, 1, 10)      // turn left
      .moveBy(-240, 0, time)  // move left
      .scaleTo(-1, 1, 10)     // turn right
      .loop();                // loop it

    enchant.Core.instance.rootScene.addEventListener('enterframe', this.enterframe);
  }

  enterframe() {
    let speed = 5;
    if (enchant.Core.instance.input.left) {
      this.x -= speed;
    } else if (enchant.Core.instance.input.right) {
      this.x += speed;
    } else if (enchant.Core.instance.input.up) {
      this.y -= speed;
    } else if (enchant.Core.instance.input.down) {
      this.y += speed;
    }
  }
}
