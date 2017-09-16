import { Anime } from 'lib';
import { SutachooAnime } from 'anime';

export default class Sutasutachoo extends Anime {
  constructor() {
    super();
    let sutachoo = new SutachooAnime();
    sutachoo.scaleX = -0.7;
    sutachoo.scaleY = 0.7;
    this.addChild(sutachoo);
        
    for (let i = 0; i < 100; i++) {
      sutachoo.walking();
    }
  }
}
