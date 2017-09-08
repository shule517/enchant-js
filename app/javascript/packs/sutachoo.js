export default class Suta extends enchant.Sprite {
  constructor(width, height, x) {
    super(width, height);
    this.image = enchant.Core.instance.assets['img/stamp1.png'];
    this.scale(-0.4, 0.4);
    this.x -= x;
    this.y = 500;
    this.moving = false;
    // this.tl
    //   .moveBy(240, 0, time)   // move right
    //   .scaleTo(1, 1, 10)      // turn left
    //   .moveBy(-240, 0, time)  // move left
    //   .scaleTo(-1, 1, 10)     // turn right
    //   .loop();                // loop it

    this.speed = 2 + this.rand(10) * 0.1;
    enchant.Core.instance.rootScene.addEventListener('enterframe', () => { this.enterframe(); });
  }

  rand(n) {
    //3を与えると0,1，2，3のどれかが帰ってくる
    return Math.floor(Math.random() * (n + 1))
  }

  enterframe() {
    if (enchant.Core.instance.input.left) {
      if (!this.moving && this.scaleX < 0) {
        this.moving = true;
        this.tl.scaleTo(this.scaleX*-1, this.scaleY, 10).exec(() => {this.moving = false;});
      }
      this.x -= this.speed;
    } else if (enchant.Core.instance.input.right) {
      if (!this.moving && this.scaleX > 0) {
        this.moving = true;
        this.tl.scaleTo(this.scaleX*-1, this.scaleY, 10).exec(() => {this.moving = false;});
      }
      this.x += this.speed;
    } else if (enchant.Core.instance.input.up) {
      // this.y -= this.speed;
    } else if (enchant.Core.instance.input.down) {
      // this.y += this.speed;
    } else if (enchant.Core.instance.input.a) {
      if (this.moving) { return; }
      this.moving = true;
      // this.y += 10;
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

      // this.tl.scaleTo(this.scaleX*-1, this.scaleY, 10).exec(() => {this.moving = false;});
    }
  }
}
