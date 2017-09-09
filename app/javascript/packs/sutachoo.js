export default class Suta extends enchant.Group {
  get input() {
    return enchant.Core.instance.input;
  }

  get rootScene() {
    return enchant.Core.instance.rootScene;
  }

  constructor(width, height, x) {
    super();
    this.body = this.createSprite(0, 0, 140, 170, 70, 80, 'img/suta/suta_body.png');
    this.right_foot = this.createSprite(16, 146, 35, 35, 28, 8, 'img/suta/suta_right_foot.png');
    this.left_foot = this.createSprite(75, 153, 35, 35, 22, 6, 'img/suta/suta_left_foot.png');
    this.tail = this.createSprite(122, 125, 60, 35, 8, 10, 'img/suta/suta_tail.png');

    this.addChild(this.body);
    this.addChild(this.right_foot);
    this.addChild(this.left_foot);
    this.addChild(this.tail);

    this.moving = false;

    let speed = 27.0;

    this.right_foot.tl
      .rotateTo(40, 13, enchant.Easing.CUBIC_EASEOUT)
      .delay(2)
      .rotateTo(20, 13, enchant.Easing.CUBIC_EASEOUT)
      .delay(15)
      .loop();

    let move = 13;
    this.left_foot.tl
      .rotateTo(move*2, 13, enchant.Easing.CUBIC_EASEOUT)
      .delay(2)
      .rotateTo(move, 13, enchant.Easing.CUBIC_EASEOUT)
      .delay(15)
      .loop();

    this.x = 250 + x;
    this.y = 520;

    this.tail.tl
      .rotateTo(-60, 13, enchant.Easing.CUBIC_EASEOUT)
      .delay(2)
      .rotateTo(-20, 13, enchant.Easing.CUBIC_EASEOUT)
      .delay(15)
      .loop();

    this.originX = 70;
    this.originY = 150;

    this.tl
      .tween({ y: this.y - 10, time: 13, easing: enchant.Easing.QUINT_EASEOUT })
      .delay(2)
      .tween({ y: this.y + 10, time: 13, easing: enchant.Easing.QUINT_EASEOUT })
      .delay(15)
      .loop();

    this.speed = 2 + this.rand(10) * 0.1;
    this.rootScene.addEventListener('enterframe', () => { this.enterframe(); });
  }

  createSprite(x, y, width, height, originX, originY, imagePath) {
    let sprite = new Sprite(width, height);
    sprite.x = x;
    sprite.y = y;
    sprite.originX = originX;
    sprite.originY = originY;
    sprite.image = enchant.Core.instance.assets[imagePath];
    return sprite;
  }

  rand(n) {
    //3を与えると0,1，2，3のどれかが帰ってくる
    return Math.floor(Math.random() * (n + 1))
  }

  enterframe() {
    if (this.input.left) {
      if (!this.moving && this.scaleX < 0) {
        this.moving = true;
        this.scaleX *= -1;
        this.moving = false;
      }
      this.x -= this.speed;
    } else if (this.input.right) {
      if (!this.moving && this.scaleX > 0) {
        this.moving = true;
        this.scaleX *= -1;
        this.moving = false;
      }
      this.x += this.speed;
    } else if (this.input.up) {
    } else if (this.input.down) {
    } else if (this.input.a) {
      if (this.moving) { return; }
      this.moving = true;

      let beforeX = this.x;
      let beforeY = this.y;
      let beforeScaleX = this.scaleX;
      let beforeScaleY = this.scaleY;

      this.tl
      .tween({ y: this.y - 60, scaleX: this.scaleX * 1.5, scaleY: this.scaleY * 1.5, time: 10, easing: enchant.Easing.QUINT_EASEOUT })
      .tween({ y: beforeY, scaleX: beforeScaleX, scaleY: beforeScaleY, time: 10, easing: enchant.Easing.QUINT_EASEOUT })
      .tween({ y: this.y - 60, scaleX: this.scaleX * 1.5, scaleY: this.scaleY * 1.5, time: 10, easing: enchant.Easing.QUINT_EASEOUT })
      .tween({ y: beforeY, scaleX: beforeScaleX, scaleY: beforeScaleY, time: 10, easing: enchant.Easing.QUINT_EASEOUT })
      .exec(() => {this.moving = false;});
    }
  }
}
