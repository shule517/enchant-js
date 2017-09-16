import { SutachooAnime, BigsightAnime, TengokuAnime, FlowerAnime, StoryAnime } from 'anime';
import Map from './map';
import MySuta from './my_suta';

export default class CascketScene extends enchant.Scene {
  constructor() {
    super();

    let map = new Map();
    this.addChild(map);

    map.addEventListener('touchstart', (e) => {
      console.log(e.localX + " , " + e.localY);
    });

    // let suta = new MySuta();
    // suta.x = 400;
    // suta.y = 400;
    // this.addChild(suta);
  }
}
