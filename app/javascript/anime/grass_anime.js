import { Anime } from 'lib';

export default class FlowerAnime extends Anime {
  constructor() {
    super();
    let flower = this.createSprite(0, 0, 800, 224, 0, 0, 'img/bg_ground.png');
    this.addChild(flower);
  }
}
