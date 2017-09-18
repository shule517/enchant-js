import { Anime } from 'lib';
import { SutachooAnime } from 'anime';

export default class SutaPlayer extends Anime {
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

  isWalking() {
    return this.suta.isWalking();
  }

  clear() {
    this.suta.clear();
  }

  jakajan(rotation, isUdon) {
    this.suta.jakajan(rotation, isUdon);
  }

  oxox() {
    this.suta.oxox();
  }
}
