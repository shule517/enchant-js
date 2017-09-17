import { SutachooAnime, BigsightAnime, TengokuAnime, FlowerAnime, StoryAnime } from 'anime';
import Map from './map';
import MySuta from './my_suta';

export default class CascketScene extends enchant.Scene {
  constructor() {
    super();

    let map = new Map();
    this.addChild(map);

    // map.addEventListener('touchstart', (e) => {
    //   console.log(e.localX + " , " + e.localY);
    // });

    let suta = new MySuta();
    suta.x = 400;
    suta.y = 400;
    this.addChild(suta);

    map.addEventListener('touchstart', (e) => {
      console.log(e.localX + "," + e.localY);

      let diffX = map.x - (400 - e.localX);
      let diffY = (map.y - (540 - e.localY)) * 1.5;
      let diff = Math.sqrt(diffX * diffX + diffY * diffY);

      let time = Math.abs(diffX)/2;
      for (let i = 0; i < (time/43); i++) {
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