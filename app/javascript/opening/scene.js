import { BigsightAnime } from 'anime';

export default class OpeningScene extends enchant.Scene {
  constructor() {
    super();
    let bigsight = new BigsightAnime();
    this.addChild(bigsight);
  }
}