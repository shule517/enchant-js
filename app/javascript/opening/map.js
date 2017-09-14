import { Anime } from 'lib';
import { TengokuAnime, FlowerAnime } from 'anime';

export default class Map extends Anime {
  constructor() {
    super();

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 2; j++) {
        let flower = new FlowerAnime();
        flower.x = i * 580 - 50;
        flower.y = 550 + j * 100;
        this.addChild(flower);
      }
    }
  }
}
