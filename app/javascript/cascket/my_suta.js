import { Anime } from 'lib';
import { SutachooAnime } from 'anime';

export default class MySuta extends Anime {
  constructor() {
    super();

    this.suta = new SutachooAnime();
    this.suta.scaleX = 0.6;
    this.suta.scaleY = 0.6;
    this.addChild(this.suta);
  }

  walking() {
    this.suta.walking();
  }

  clear() {
    this.suta.clear();
  }
}
