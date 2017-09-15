import { Anime } from 'lib';
import { SutachooAnime, TengokuAnime, FlowerAnime } from 'anime';
import Sutasutachoo from './sutasutachoo';
import MySutachoo from './mysutachoo';

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
    
    for (let x = 0; x < 20; x++) {
      let suta = new Sutasutachoo();
      suta.x = -300 + 160*x;
      suta.y = 500 + this.rand(150);;
      suta.tl
        .tween({x: suta.x + 2000, time: 1000});
      this.addChild(suta);
    }
  }
}
