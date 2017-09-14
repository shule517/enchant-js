import { Anime } from 'lib';
import { SutachooAnime } from 'anime';

export default class MySutachoo extends Anime {
  constructor() {
    super();
    this.sutachoo = new SutachooAnime();
    // this.sutachoo.originX = 30;
    // this.sutachoo.originY = -240;
    this.sutachoo.scaleX = -0.7;
    this.sutachoo.scaleY = 0.7;
    this.addChild(this.sutachoo);

    // this.speed = 3;
    // this.addEventListener('touchstart', (e) => {
    //   console.log(e.localX + "," + e.localY);
      

    //   let diffX = this.x - (400 - e.localX);
    //   let diffY = (this.y - (540 - e.localY)) * 1.5;
    //   let diff = Math.sqrt(diffX * diffX + diffY * diffY);

    //   this.tl
    //     .clear()
    //     .tween({x: 400 - e.localX, time: diff/3})
    //     .and()
    //     .tween({y: 540 - e.localY, time: diff/3});
    // }



    // sutachoo.walking();
    // sutachoo.walking();
    // sutachoo.walking();
    // sutachoo.walking();
    // sutachoo.walking();
    // sutachoo.walking();
    // sutachoo.walking();
    // sutachoo.walking();
    // sutachoo.walking();
    // sutachoo.walking();
    // sutachoo.walking();
    // sutachoo.walking();
    // sutachoo.walking();
    // sutachoo.walking();
  }

  oxox() {
    this.sutachoo.oxox();
  }
  jakajan() {
    this.sutachoo.jakajan();
  }
}
