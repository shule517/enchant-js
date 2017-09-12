export default class SutaWait extends enchant.Group {
  get input() {
    return enchant.Core.instance.input;
  }

  get rootScene() {
    return enchant.Core.instance.currentScene;
  }

  constructor() {
    super();
    this.body = this.createSprite(0, 0, 140, 170, 70, 80, 'img/suta/suta_body.png');
    this.right_foot = this.createSprite(16, 146, 35, 35, 28, 8, 'img/suta/suta_right_foot.png');
    this.left_foot = this.createSprite(75, 153, 35, 35, 22, 6, 'img/suta/suta_left_foot.png');
    this.tail = this.createSprite(122, 125, 60, 35, 8, 10, 'img/suta/suta_tail.png');
    this.udon = this.createSprite(-25, -200, 250, 250, 0, 0, 'img/stamp9.png');

    this.addChild(this.body);
    this.addChild(this.right_foot);
    this.addChild(this.left_foot);
    this.addChild(this.tail);
    this.addChild(this.udon);

    this.originX = 70;
    this.originY = 150;
    this.moving = false;
    this.x = 320;
    this.y = 400;

    this.udon.scaleX = 0.7;
    this.udon.scaleY = 0.7;
    this.udon.opacity = 0;

    this.speed = 2 + this.rand(10) * 0.1;

    this.scaleX = 0.6;
    this.scaleY = 0.6;
    this.tl
    .tween({ scaleX: this.scaleX * -1, time: 20, easing: enchant.Easing.CUBIC_EASEOUT })
    .delay(140 + this.rand(400))
    .tween({ scaleX: this.scaleX * 1, time: 20, easing: enchant.Easing.CUBIC_EASEOUT })
    .delay(140 + this.rand(400))
    .loop();

    this.addEventListener('enterframe', () => { this.enterframe(); });
    this.addEventListener('touchstart', () => {
      this.oxox();
    });
  }

  oxox() {
    this.tl
      .tween({ y: this.y - 60, scaleX: this.scaleX * 1.5, scaleY: this.scaleY * 1.5, time: 10, easing: enchant.Easing.QUINT_EASEOUT })
      .then(() => {
        let sound = enchant.Core.instance.assets['img/choo.mp3'].clone();
        sound.play();
        sound.volume = 0.4;
      })
      .tween({ y: this.y,      scaleX: this.scaleX,       scaleY: this.scaleY,       time: 10, easing: enchant.Easing.QUINT_EASEOUT })
      .tween({ y: this.y - 60, scaleX: this.scaleX * 1.5, scaleY: this.scaleY * 1.5, time: 10, easing: enchant.Easing.QUINT_EASEOUT })
      .then(() => {
        let sound = enchant.Core.instance.assets['img/choo.mp3'].clone();
        sound.play();
        sound.volume = 0.4;
      })
      .tween({ y: this.y,      scaleX: this.scaleX,       scaleY: this.scaleY,       time: 10, easing: enchant.Easing.QUINT_EASEOUT });
  }

  waling() {
    if (this.moving) { return; }
    this.moving = true;
    let speed = 27.0;

    this.right_foot.tl
      .rotateTo(-50, 13, enchant.Easing.CUBIC_EASEOUT)
      .delay(2)
      .rotateTo(20, 13, enchant.Easing.CUBIC_EASEOUT)
      .delay(15);

    this.left_foot.tl
      .rotateTo(-56, 13, enchant.Easing.CUBIC_EASEOUT)
      .delay(2)
      .rotateTo(13, 13, enchant.Easing.CUBIC_EASEOUT)
      .delay(15);

    this.tail.tl
      .rotateTo(-100, 13, enchant.Easing.CUBIC_EASEOUT)
      .delay(2)
      .rotateTo(-20, 13, enchant.Easing.CUBIC_EASEOUT)
      .delay(15)
      .then(() => { this.moving = false; });

    if (this.scaleX < 0) {
      this.tl
        .tween({ rotation: 8 * 1, y: this.y - 30, time: 13, easing: enchant.Easing.QUINT_EASEOUT })
        .delay(2)
        .tween({ rotation: 0, y: this.y,      time: 13, easing: enchant.Easing.QUINT_EASEOUT })
        .delay(15);
    } else {
      this.tl
        .tween({ rotation: 8 * -1, y: this.y - 30, time: 13, easing: enchant.Easing.QUINT_EASEOUT })
        .delay(2)
        .tween({ rotation: 0, y: this.y,      time: 13, easing: enchant.Easing.QUINT_EASEOUT })
        .delay(15);
    }
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
    return Math.floor(Math.random() * (n + 1));
  }

  enterframe() {
    // if (this.input.left) {
    //   if (!this.moving && this.scaleX < 0) {
    //     this.moving = true;
    //     this.tl
    //       .tween({ scaleX: this.scaleX * -1, time: 20, easing: enchant.Easing.CUBIC_EASEOUT })
    //       .then( () => { this.moving = false; });
    //   }
    //   this.waling();
    //   // this.x -= this.speed;
    // } else if (this.input.right) {
    //   if (!this.moving && this.scaleX > 0) {
    //     this.moving = true;
    //     this.tl
    //       .tween({ scaleX: this.scaleX * -1, time: 20, easing: enchant.Easing.CUBIC_EASEOUT })
    //       .then( () => { this.moving = false; });
    //   }
    //   this.waling();
    //   // this.x += this.speed;

    // } else if (this.input.up) {
    //   this.waling();
    //   // this.y -= this.speed / 2;
    // } else if (this.input.down) {
    //   this.waling();
    //   // this.y += this.speed / 2;
    // } else if (this.input.b) {
    //   if (this.moving) { return; }
    //   this.moving = true;

    //   let sound = enchant.Core.instance.assets['img/Quiz-Results.mp3'].clone();
    //   sound.play();
    //   sound.volume = 0.5;

    //   this.tl
    //     .tween({ scaleX: this.scaleX * -1, time: 6, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  1, time: 6, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * -1, time: 6, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  1, time: 6, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * -1, time: 6, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  1, time: 6, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * -1, time: 6, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  1, time: 6, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * -1, time: 6, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  1, time: 6, easing: enchant.Easing.CUBIC_OUT })
    //     .then(() => {
    //       // this.tail.rotate(this.rand(360));
    //       this.tail.scaleX = 3;
    //       // this.tail.scaleY = 2;
    //     })
    //     .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX *  0.6, time: 2, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * -0.6, time: 1, easing: enchant.Easing.CUBIC_OUT })
    //     .tween({ scaleX: this.scaleX * 1.4, scaleY: this.scaleY*1.4, time: 6, easing: enchant.Easing.CUBIC_OUT })
    //     .then(() => {
    //       this.tail.rotate(this.rand(360));
    //       this.tail.scaleX = 2;
    //       this.tail.scaleY = 2;
    //     })
    //     .then(() => {
    //       if (this.rand(10) == 0) {
    //         this.udon.opacity = 1;
    //       }
    //     })
    //     .delay(50)
    //     .then(() => {
    //       this.tail.rotation = -20;
    //       this.tail.scaleX = 1;
    //       this.tail.scaleY = 1;
    //     })
    //     .tween({ scaleX: this.scaleX, scaleY: this.scaleY, time: 6, easing: enchant.Easing.CUBIC_OUT })
    //     .then(() => { this.udon.opacity = 0; })
    //     .then(() => { this.moving = false; });
    // } else if (this.input.a) {
    //   if (this.moving) {
    //     return;
    //   }
    //   this.oxox();
    // }
  }
}
