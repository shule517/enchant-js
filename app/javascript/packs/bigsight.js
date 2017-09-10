export default class Bigsight extends enchant.Group {
  constructor() {
    super();
    let bigsight = new Sprite(800, 619);
    bigsight.x = 200;
    bigsight.y = 0;
    bigsight.image = enchant.Core.instance.assets['img/building_bigsight.png'];
    bigsight.scale(0.5, 0.5);
    this.addChild(bigsight);

    let logo = new Sprite(135, 41);
    logo.x = 540;
    logo.y = 170;
    logo.image = enchant.Core.instance.assets['img/cascket_logo.png'];
    this.addChild(logo);

    this.addEventListener('enterframe', () => { this.enterframe(); });
  }

  enterframe() {
    let speed = -0.6;
    if (enchant.Core.instance.input.left) {
      this.x -= speed;
    } else if (enchant.Core.instance.input.right) {
      this.x += speed;
    } else if (enchant.Core.instance.input.up) {
    } else if (enchant.Core.instance.input.down) {
    }
  }
}
