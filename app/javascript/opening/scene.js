import { BigsightAnime, TengokuAnime, FlowerAnime } from 'anime';
import Map from './map';

export default class OpeningScene extends enchant.Scene {
  constructor() {
    super();

    let tengoku = new TengokuAnime();
    tengoku.x = -300;
    tengoku.y = -150;
    tengoku.scale = 0.8;
    this.addChild(tengoku);

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 2; j++) {
        let flower = new FlowerAnime();
        flower.x = i * 580 - 50;
        flower.y = 550 + j * 100;
        this.addChild(flower);
      }
    }

    let bigsight = new BigsightAnime();
    bigsight.x = 400;
    bigsight.y = 150;
    bigsight.scaleX = 0.5;
    bigsight.scaleY = 0.5;
    this.addChild(bigsight);
  }
}