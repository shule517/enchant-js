import { Anime } from 'lib';

export default class BigsightAnime extends Anime {
  constructor() {
    super();

    let bigsight = this.createSprite(0, 0, 800, 619, 0, 0, 'img/building_bigsight.png');
    this.addChild(bigsight);

    let logo = this.createSprite(0, 0, 135, 41, 0, 0, 'img/cascket_logo.png');
    logo.x = 272;
    logo.y = 10;
    logo.scale(2.0, 2.0);
    this.addChild(logo);
  }
}
