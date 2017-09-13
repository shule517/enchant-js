import { SutachooAnime } from 'anime';

export default class TestScene extends enchant.Scene {
  get input() {
    return enchant.Core.instance.input;
  }

  constructor() {
    super();
    let suta = new SutachooAnime();
    suta.x = 100;
    suta.y = 100;
    this.addChild(suta);

    suta.walking();
    suta.walking();
    suta.right();
    suta.left();
    suta.oxox();
    suta.walking();
    suta.walking();
    suta.jakajan();
    suta.walking();
    suta.right();
    suta.left();
    suta.right();
    suta.left();
    suta.walking();
    suta.walking();
    suta.walking();

    this.addEventListener('enterframe', () => {
      if (this.input.left) {
        suta.left();
        suta.walking();
      } else if (this.input.right) {
        suta.right();
        suta.walking();
      } else if (this.input.up) {
        suta.walking();
      } else if (this.input.down) {
        suta.walking();
      } else if (this.input.a) {
        suta.oxox();
      } else if (this.input.b) {
        suta.jakajan();
      }
    });
  }
}
