import { Anime } from 'lib';

export default class FlowerAnime extends Anime {
  constructor() {
    super();
    let flower = this.createSprite(0, 0, 600, 160, 600/2, 160/2, 'img/bg_ground_flower.png');
    this.addChild(flower);
  }
}
