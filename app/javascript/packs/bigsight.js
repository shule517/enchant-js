export default class Bigsight extends enchant.Sprite {
  constructor() {
    super(800, 619);
    this.x = 200;
    this.y = 0;
    this.image = enchant.Core.instance.assets['img/building_bigsight.png'];
    this.scale(0.5, 0.5);
    enchant.Core.instance.rootScene.addEventListener('enterframe', () => { this.enterframe(); });
  }

  enterframe() {
    let speed = -0.6;
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
