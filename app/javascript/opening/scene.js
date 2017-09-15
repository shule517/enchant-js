import { SutachooAnime, BigsightAnime, TengokuAnime, FlowerAnime } from 'anime';
import MySutachoo from './mysutachoo';
import Map from './map';

export default class OpeningScene extends enchant.Scene {
  constructor() {
    super();

    let tengoku = new TengokuAnime();
    tengoku.x = -300;
    tengoku.y = -150;
    tengoku.scale = 0.8;
    this.addChild(tengoku);

    let map = new Map();
    this.addChild(map);

    let bigsight = new BigsightAnime();
    bigsight.x = 400;
    bigsight.y = 150;
    bigsight.scaleX = 0.5;
    bigsight.scaleY = 0.5;
    this.addChild(bigsight);

    let me = new MySutachoo();
    me.x = 370;
    me.y = 500;
    this.addChild(me);

    map.addEventListener('touchstart', (e) => {
      // if (me.moving) { return; }
      console.log("touchstart:" + e.localX + "," + e.localY);
      let flowerSpeed = 0.8;
      let tengokuSpeed = 0.6;
      let bigsightSpeed = 0.4;
      let diffX = me.x - e.localX;
      // let diffY = 600 - e.localY;
      let time = Math.abs(diffX)/2;

      // me.tl.tween({y: e.localY - 150, time: time});
      let isRightMove = (diffX < 0)
      console.log("isRightMove:" + isRightMove);
      console.log("isRightDir:" + me.isRightDir());

      if (isRightMove && !me.isRightDir()) {
        console.log("right");
        me.tl
        .exec(() => { me.left(); })
        .tween({y: e.localY - 150, time: time})
        .and()
        .exec(() => {
          for (let i = 0; i < (time/43); i++) {
            me.walking();
          }
        });
      } else if (!isRightMove && me.isRightDir()) {
        console.log("left");
        me.tl
          .exec(() => { me.left(); })
          .tween({y: e.localY - 150, time: time})
          .and()
          .exec(() => {
            for (let i = 0; i < (time/43); i++) {
              me.walking();
            }
          });
      } else {
        me.tl.tween({y: e.localY - 150, time: time});
        for (let i = 0; i < (time/43); i++) {
          me.walking();
        }
      }

      // me.tl
      //   .tween({x: e.localX - 45, time: time})
      //   .and()
      //   .tween({y: e.localY - 120, time: time});
      bigsight.tl.tween({x: bigsight.x + diffX * bigsightSpeed, time: time});
      tengoku.tl.tween({x: tengoku.x + diffX * tengokuSpeed, time: time});
      map.tl.tween({x: map.x + diffX * flowerSpeed, time: time});
      // bigsight.tl.tween({x : map.x + diffX, time: (diffX / bigsightSpeed)});
      // tengoku.tl.tween({x: map.x + diffX, time: (diffX / tengokuSpeed)});
      // map.tl.tween({x: map.x + diffX, time: (diffX / flowerSpeed)});
    });

    this.addEventListener('enterframe', () => {
      let flowerSpeed = -1.2;
      let tengokuSpeed = -0.7;
      let bigsightSpeed = -0.5;

      if (enchant.Core.instance.input.left) {
        bigsight.x -= bigsightSpeed;
        tengoku.x -= tengokuSpeed;
        map.x -= flowerSpeed;
      } else if (enchant.Core.instance.input.right) {
        bigsight.x += bigsightSpeed;
        tengoku.x += tengokuSpeed;
        map.x += flowerSpeed;
      } else if (enchant.Core.instance.input.a) {
        me.oxox();
      } else if (enchant.Core.instance.input.b) {
        me.jakajan();
      }
    });
  }
}