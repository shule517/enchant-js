import Map from './map';
import Sutachoo from './sutachoo';
export default class CascketScene extends enchant.Scene {
  constructor() {
    super();
    this.addChild(new Map());
    let sutachoo = new Sutachoo();
    sutachoo.scaleX = 0.6;
    sutachoo.scaleY = 0.6;
    this.addChild(sutachoo);
  }
}
