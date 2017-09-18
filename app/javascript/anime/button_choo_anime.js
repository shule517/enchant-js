import { Anime } from 'lib';

export default class ButtonChooAnime extends Anime {
  constructor() {
    super();

    let tree = this.createSprite(0, 0, 295, 260, 0, 0, 'img/choo.png');
    this.addChild(tree);
  }
}
