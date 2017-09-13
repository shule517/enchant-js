import { SutachooAnime } from 'anime';

export default class TestScene extends enchant.Scene {
  constructor() {
    super();
    let suta = new SutachooAnime();
    suta.x = 100;
    suta.y = 100;
    this.addChild(suta);
    suta.jakajan();
  }
}
