import { Anime } from 'lib';

export default class TreeAnime extends Anime {
  constructor() {
    super();

    let kirikabu = this.createSprite(0, 0, 400, 314, 0.5, 0.5, 'img/wood_kirikabu.png');
    this.addChild(kirikabu);
  }
}
