import { SutachooAnime, BigsightAnime, TengokuAnime, FlowerAnime, StoryAnime } from 'anime';
import Map from './map';
import MySuta from './my_suta';

export default class CascketScene extends enchant.Scene {
  constructor() {
    super();

    let map = new Map();
    this.addChild(map);

    let suta = new MySuta();
    suta.x = 400;
    suta.y = 400;
    this.addChild(suta);

    this.addEventListener('enterframe', () => {
      if (enchant.Core.instance.input.a) {
        suta.oxox();
      } else if (enchant.Core.instance.input.b) {
        suta.jakajan();
      }
    });

    map.addEventListener('touchstart', (e) => {
      console.log(e.localX + "," + e.localY);

      let diffX = map.x - (400 - e.localX);
      let diffY = (map.y - (540 - e.localY)) * 1.5;
      let diff = Math.sqrt(diffX * diffX + diffY * diffY);

      let time = Math.abs(diff)/2;
      suta.clear();
      for (let i = 0; i < (time/43) - 1; i++) {
        suta.walking();
      }

      map.tl
        .clear()
        .tween({x: 400 - e.localX, time: diff/3})
        .and()
        .tween({y: 540 - e.localY, time: diff/3});
    });
  }
}
