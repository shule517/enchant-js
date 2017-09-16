import { Anime } from 'lib';
import { Sound } from 'lib';

export default class SutachooAnime extends Anime {
  constructor() {
    super();

    this.soundChoo = new Sound('img/choo.mp3', 0.4);
    this.soundJakajan = new Sound('img/Quiz-Results.mp3', 0.5);

    this.originX = 70;
    this.originY = 150;
    this.moving = false;

    this.body = this.createSprite(0, 0, 140, 170, 70, 80, 'img/suta/suta_body.png');
    this.right_foot = this.createSprite(16, 146, 35, 35, 28, 8, 'img/suta/suta_right_foot.png');
    this.left_foot = this.createSprite(75, 153, 35, 35, 22, 6, 'img/suta/suta_left_foot.png');
    this.tail = this.createSprite(122, 125, 60, 35, 8, 10, 'img/suta/suta_tail.png');
    this.udon = this.createSprite(-25, -200, 250, 250, 0, 0, 'img/stamp9.png');
    this.udon.scaleX = 0.7;
    this.udon.scaleY = 0.7;
    this.udon.opacity = 0;

    this.addChild(this.body);
    this.addChild(this.right_foot);
    this.addChild(this.left_foot);
    this.addChild(this.tail);
    this.addChild(this.udon);
  }

  jakajan() {
    if (this.moving) { return; }
    this.tl
      .exec(() => { this.moving = true; this.soundJakajan.play(); } )
      // ぐるぐる
      .tween({ scaleX: this.scaleX * -1, time: 6, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  1, time: 6, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * -1, time: 6, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  1, time: 6, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * -1, time: 6, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  1, time: 6, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * -1, time: 6, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  1, time: 6, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * -1, time: 6, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  1, time: 6, easing: enchant.Easing.CUBIC_OUT })
      // 高速ぐるぐるで、しっぽがのびる すたらりあっと
      .then(() => {
        this.tail.scaleX = 3;
      })
      // 高速ぐるぐるで、細くなる
      .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * -0.6, time: 3, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX *  0.6, time: 2, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * -0.6, time: 1, easing: enchant.Easing.CUBIC_OUT })
      .tween({ scaleX: this.scaleX * 1.3, scaleY: this.scaleY*1.3, time: 6, easing: enchant.Easing.CUBIC_OUT })
      // どやっ！ しっぽの向きがらんだむ
      .then(() => {
        this.tail.scaleX = 2;
        this.tail.scaleY = 2;
        this.tail.rotate(this.rand(360));
      })
      // たまに うどんが出る
      .then(() => {
        if (this.rand(10) == 0) {
          this.udon.opacity = 1;
        }
      })
      // ちょっとしたら もとに戻る
      .delay(50)
      .then(() => {
        this.tail.rotation = -20;
        this.tail.scaleX = 1;
        this.tail.scaleY = 1;
      })
      .tween({ scaleX: this.scaleX, scaleY: this.scaleY, time: 6, easing: enchant.Easing.CUBIC_OUT })
      .then(() => { this.udon.opacity = 0; })
      .then(() => { this.moving = false; });
  }

  oxox() {
    if (this.moving) { return; }
    // おっおっ → ちゅー！ちゅー！
    this.tl
      .exec(() => { this.moving = true; })
      .tween({ y: this.y - 60, scaleX: this.scaleX * 1.5, scaleY: this.scaleY * 1.5, time: 10, easing: enchant.Easing.QUINT_EASEOUT })
      .then(() => { this.soundChoo.play(); })
      .tween({ y: this.y,      scaleX: this.scaleX,       scaleY: this.scaleY,       time: 10, easing: enchant.Easing.QUINT_EASEOUT })
      .tween({ y: this.y - 60, scaleX: this.scaleX * 1.5, scaleY: this.scaleY * 1.5, time: 10, easing: enchant.Easing.QUINT_EASEOUT })
      .then(() => { this.soundChoo.play(); })
      .tween({ y: this.y,      scaleX: this.scaleX,       scaleY: this.scaleY,       time: 10, easing: enchant.Easing.QUINT_EASEOUT })
      .then(() => { this.moving = false; });
  }

  left() {
    console.log("left this.moving:" + this.moving);
    // if (this.moving) { return; }
    this.tl
      // .exec(() => { this.moving = true; })
      .tween({ scaleX: this.scaleX * -1, time: 20, easing: enchant.Easing.CUBIC_EASEOUT })
      .delay(15);
      // .exec(() => { this.moving = false; })
  }

  right() {
    // console.log("right this.moving:" + this.moving);
    // if (this.moving) { return; }
    this.tl
      .exec(() => { this.moving = true; })
      .tween({ scaleX: this.scaleX, time: 20, easing: enchant.Easing.CUBIC_EASEOUT })
      .delay(15)
      .exec(() => { this.moving = false; });
  }

  walking() {
    // console.log("walking this.moving:" + this.moving);
    // if (this.moving) { return; }
    if (this.scaleX < 0) {
      this.tl
        .exec(() => {
          this.moving = true;
          this.right_foot.tl
            .rotateTo(-50, 13, enchant.Easing.CUBIC_EASEOUT)
            .delay(2)
            .rotateTo(20, 13, enchant.Easing.CUBIC_EASEOUT)
            .delay(15);
        })
        .and()
        .exec(() => {
          this.left_foot.tl
            .rotateTo(-56, 13, enchant.Easing.CUBIC_EASEOUT)
            .delay(2)
            .rotateTo(13, 13, enchant.Easing.CUBIC_EASEOUT)
            .delay(15);
        })
        .and()
        .exec(() => {
          this.tail.tl
            .rotateTo(-100, 13, enchant.Easing.CUBIC_EASEOUT)
            .delay(2)
            .rotateTo(-20, 13, enchant.Easing.CUBIC_EASEOUT)
            .delay(15)
            .then(() => { this.moving = false; });
        })
        .and()
        .tween({ rotation: 8 * 1, y: this.y - 30, time: 13, easing: enchant.Easing.QUINT_EASEOUT })
        .delay(2)
        .tween({ rotation: 0,     y: this.y,      time: 13, easing: enchant.Easing.QUINT_EASEOUT })
        .delay(15)
        .exec(() => { this.moving = false; });
    } else {
      this.tl
        .exec(() => {
          this.moving = true;
          this.right_foot.tl
            .rotateTo(-50, 13, enchant.Easing.CUBIC_EASEOUT)
            .delay(2)
            .rotateTo(20, 13, enchant.Easing.CUBIC_EASEOUT)
            .delay(15);
        })
        .and()
        .exec(() => {
          this.left_foot.tl
            .rotateTo(-56, 13, enchant.Easing.CUBIC_EASEOUT)
            .delay(2)
            .rotateTo(13, 13, enchant.Easing.CUBIC_EASEOUT)
            .delay(15);
        })
        .and()
        .exec(() => {
          this.tail.tl
            .rotateTo(-100, 13, enchant.Easing.CUBIC_EASEOUT)
            .delay(2)
            .rotateTo(-20, 13, enchant.Easing.CUBIC_EASEOUT)
            .delay(15)
            .then(() => { this.moving = false; });
        })
        .and()
        .tween({ rotation: 8 * -1, y: this.y - 30, time: 13, easing: enchant.Easing.QUINT_EASEOUT })
        .delay(2)
        .tween({ rotation: 0,      y: this.y,      time: 13, easing: enchant.Easing.QUINT_EASEOUT })
        .delay(15)
        .exec(() => { this.moving = false; });
    }
  }
}
