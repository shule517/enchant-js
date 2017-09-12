import SutaWait from './sutachoo_wait';
import Sutachoo from './sutachoo';

export default class Map extends enchant.Group {
  constructor() {
    super();

    for (let x = 0; x < 10; x++) {
      this.draw(500 * x, 0, 500, 194, 1, 1, 'img/bg_pattern1_aozora.png');
      for (let y = 0; y < 10; y++) {
        this.draw(400 * x - 40, 170 + 200 * y, 800, 224, 1, 1, 'img/bg_ground.png');
      }
    }
    this.draw(700, 100, 203, 270, 1, 1, 'img/tree_seichou09.png');
    this.draw(320, 140, 400, 314, 0.5, 0.5, 'img/wood_kirikabu.png');
    this.draw(150, 20, 734, 747, 0.4, 0.3, 'img/desk_book.png');
    
    let nusi = new SutaWait();
    nusi.x = 450;
    nusi.y = 100;
    nusi.scaleX = 0.6;
    nusi.scaleY = 0.6;
    this.addChild(nusi);

    for (let x = 0; x < 2; x++) {
      for (let y = 0; y < 4; y++) {
        let suta = new SutaWait();
        suta.x = 400 + 100 * x;
        suta.y = 370 + 50 * y;
        suta.scaleX = 0.6;
        suta.scaleY = 0.6;
        this.addChild(suta);
      }
    }

    let sutachoo = new Sutachoo();
    sutachoo.scaleX = 0.6;
    sutachoo.scaleY = 0.6;
    this.addChild(sutachoo);

    this.speed = 3;
    this.addEventListener('touchstart', (e) => {
      console.log(e.localX + "," + e.localY);
      

      let diffX = this.x - (400 - e.localX);
      let diffY = (this.y - (540 - e.localY)) * 1.5;
      let diff = Math.sqrt(diffX * diffX + diffY * diffY);

      this.tl
        .clear()
        .tween({x: 400 - e.localX, time: diff/3})
        .and()
        .tween({y: 540 - e.localY, time: diff/3});
      // .and
      // this.tl.then(() => {sutachoo.walking();}).loop();
      // this.tl.cue({
      //   10: () => { sutachoo.walking(); },
      //   20: () => { sutachoo.walking(); },
      //   30: () => { sutachoo.walking(); },
      //   40: () => { sutachoo.walking(); },
      //   50: () => { sutachoo.walking(); },
      //   60: () => { sutachoo.walking(); },
      //   70: () => { sutachoo.walking(); },
      //   80: () => { sutachoo.walking(); },
      //   90: () => { sutachoo.walking(); },
      //   100: () => { sutachoo.walking(); },
      //   110: () => { sutachoo.walking(); },
      //   120: () => { sutachoo.walking(); },
      //   130: () => { sutachoo.walking(); },
      //   140: () => { sutachoo.walking(); },
      //   150: () => { sutachoo.walking(); },
      //   160: () => { sutachoo.walking(); },
      // });
    });
    this.addEventListener('touchmove', (e) => {
      console.log(e.localX + "," + e.localY);
    });
    // this.addEventListener('enterframe', () => {
    //   if (this.input.left) {
    //     this.x += this.speed;
    //   } else if (this.input.right) {
    //     this.x -= this.speed;
    //   } else if (this.input.up) {
    //     this.y += this.speed / 3 * 2;
    //   } else if (this.input.down) {
    //     this.y -= this.speed / 3 * 2;
    //   }
    // });
    console.log('cascket - map');
  }

  get input() {
    return enchant.Core.instance.input;
  }

  draw(x, y, width, height, scaleX, scaleY, imagePath) {
    let shibafu = new Sprite(width, height);
    shibafu.x = x;
    shibafu.y = y;
    shibafu.scaleX = scaleX;
    shibafu.scaleY = scaleY;
    shibafu.image = enchant.Core.instance.assets[imagePath];
    shibafu.scale(1.0, 1.0);

    this.addChild(shibafu);
  }
}
