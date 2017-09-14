import { Anime } from 'lib';

export default class TengokuAnime extends Anime {
  constructor() {
    super();
    let tengoku = this.createSprite(0, 0, 1920, 980, 0, 0, 'img/tengoku.jpg');
    this.addChild(tengoku);
  }
}
