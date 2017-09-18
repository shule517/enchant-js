import { Anime } from 'lib';

export default class ButtonJanAnime extends Anime {
  constructor() {
    super();

    let tree = this.createSprite(0, 0, 295, 260, 0, 0, 'img/jan.png');
    this.addChild(tree);
  }
}
