import { BigsightAnime, Map } from 'anime';

export default class OpeningScene extends enchant.Scene {
  constructor() {
    super();

    let map = new Map();
    this.addChild(map);

    let bigsight = new BigsightAnime();
    this.addChild(bigsight);
  }
}