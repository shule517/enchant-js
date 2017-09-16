import { Anime } from 'lib';

export default class AozoraAnime extends Anime {
  constructor() {
    super();

    let aozora = this.createSprite(0, 0, 500, 194, 0, 0, 'img/bg_pattern1_aozora.png');
    this.addChild(aozora);
  }
}
