export default class Map extends enchant.Sprite {
  constructor() {
    super(1920, 1080);
    this.x = -200;
    this.y = -150;
    this.image = enchant.Core.instance.assets['img/tengoku.jpg'];
    this.scale(0.7, 0.7);
    enchant.Core.instance.rootScene.addEventListener('enterframe', () => { this.enterframe(); });
  }

  enterframe() {
    let speed = -1;
    if (enchant.Core.instance.input.left) {
      this.x -= speed;
    } else if (enchant.Core.instance.input.right) {
      this.x += speed;
    } else if (enchant.Core.instance.input.up) {
      // this.y -= speed;
    } else if (enchant.Core.instance.input.down) {
      // this.y += speed;
    }
  }
}
