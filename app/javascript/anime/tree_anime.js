import { Anime } from 'lib';

export default class TreeAnime extends Anime {
  constructor() {
    super();

    let tree = this.createSprite(0, 0, 203, 270, 0, 0, 'img/tree_seichou09.png');
    this.addChild(tree);
  }
}
