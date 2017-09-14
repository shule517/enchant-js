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
    me.x = 100;
    me.y = 540;
    map.addChild(me);

    this.addEventListener('touchstart', (e) => {
      console.log(e.localX + "," + e.localY);
      let flowerSpeed = 1.2;
      let tengokuSpeed = 0.7;
      let bigsightSpeed = 0.5;
      let diffX = me.x - e.localX;

      me.tl
        .tween({x: e.localX, time: 100})
        .and()
        .tween({y: e.localY, time: 100});
      bigsight.tl.tween({x: bigsight.x + diffX*bigsightSpeed, time: 100});
      tengoku.tl.tween({x: tengoku.x + diffX*tengokuSpeed, time: 100});
      map.tl.tween({x: map.x + diffX*flowerSpeed, time: 100});
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