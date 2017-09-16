import { Anime } from 'lib';
import { SutachooAnime } from 'anime';

export default class MySuta extends Anime {
  constructor() {
    super();

    let suta = new SutachooAnime();
    suta.scaleX = 0.6;
    suta.scaleY = 0.6;
    this.addChild(suta);
  }
}
