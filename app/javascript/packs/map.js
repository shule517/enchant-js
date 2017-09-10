export default class Map extends enchant.Group {
  constructor() {
    super();
    let tengoku = new Sprite(1920, 980);
    tengoku.x = -300;
    tengoku.y = -150;
    tengoku.image = enchant.Core.instance.assets['img/tengoku.jpg'];
    tengoku.scale(0.7, 0.7);
    this.addChild(tengoku);

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 2; j++) {
        let flower = new Sprite(600, 160);
        flower.x = i * 580 - 50;
        flower.y = 550 + j*100;
        flower.image = enchant.Core.instance.assets['img/bg_ground_flower.png'];
        // flower.scale(0.7, 0.7);
        this.addChild(flower);
      }
    }

    this.addEventListener('enterframe', () => { this.enterframe(); });
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
