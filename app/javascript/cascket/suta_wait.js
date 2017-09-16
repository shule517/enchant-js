import { Anime } from 'lib';
import { SutachooAnime } from 'anime';

export default class SutaWait extends Anime {
  constructor() {
    super();

    this.scaleX = 0.6;
    this.scaleY = 0.6;

    let sutachoo = new SutachooAnime();
    if (this.rand(2) == 0) {
      sutachoo.scaleX *= -1;
    }
    this.addChild(sutachoo);

    sutachoo.tl
    .delay(140 + this.rand(400))
    .tween({ scaleX: sutachoo.scaleX * -1, time: 20, easing: enchant.Easing.CUBIC_EASEOUT })
    .delay(140 + this.rand(400))
    .tween({ scaleX: sutachoo.scaleX * 1, time: 20, easing: enchant.Easing.CUBIC_EASEOUT })
    .loop();
  }
}
