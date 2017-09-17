import { Anime } from 'lib';
import { SutachooAnime } from 'anime';

export default class PlayerSuta extends Anime {
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

  isMoving() {
    return this.suta.isMoving();
  }

  clear() {
    this.suta.clear();
  }

  jakajan() {
    this.suta.jakajan();
  }

  oxox() {
    this.suta.oxox();
  }
}
