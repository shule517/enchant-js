export default class Map extends enchant.Group {
  constructor() {
    super();
    let bigsight = new Sprite(1920, 980);
    bigsight.x = -200;
    bigsight.y = -150;
    bigsight.image = enchant.Core.instance.assets['img/tengoku.jpg'];
    bigsight.scale(0.7, 0.7);
    this.addChild(bigsight);

    for (let i = 0; i < 5; i++) {
      let flower = new Sprite(600, 160);
      flower.x = i * 580;
      flower.y = 550;
      flower.image = enchant.Core.instance.assets['img/bg_ground_flower.png'];
      // flower.scale(0.7, 0.7);
      this.addChild(flower);
    }

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
