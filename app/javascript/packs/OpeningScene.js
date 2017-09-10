import Sutachoo from './sutachoo'
import Bigsight from './bigsight'
import Map from './map'

export default class OpeningScene extends enchant.Scene {
  constructor() {
    super();
    this.addChild(new Map);
    this.addChild(new Bigsight);

    let d = 160;
    for (let i = 0; i < 15; i++) {
      let suta = new Sutachoo(250, 250, d*i);
      suta.scaleX = -0.6;
      suta.scaleY = 0.6;
      this.addChild(suta);
    }
  }
}
