import { Anime } from 'lib';
import { AozoraAnime, DeskAnime, GrassAnime, KirikabuAnime, TreeAnime} from 'anime';
import SutaWait from './suta_wait';
import SutaNusi from './suta_nusi';

export default class Map extends Anime {
  constructor() {
    super();

    for (let i = 0; i < 5; i++) {
      let aozora = new AozoraAnime();
      aozora.x = i * 500;
      this.addChild(aozora);
      for (let j = 0; j < 12; j++) {
        let flower = new GrassAnime();
        flower.x = i * 580 - 50;
        flower.y = j * 100 + 170;
        this.addChild(flower);
      }
    }

    let kirikabu = new KirikabuAnime();
    kirikabu.x = 390;
    kirikabu.y = 340;
    kirikabu.scaleX = 0.5;
    kirikabu.scaleY = 0.5;
    this.addChild(kirikabu);

    let tree = new TreeAnime();
    tree.x = 100;
    tree.y = 100;
    this.addChild(tree);

    let nusi = new SutaNusi();
    nusi.x = 440;
    nusi.y = 290;
    this.addChild(nusi);

    let desk = new DeskAnime();
    desk.x = 330;
    desk.y = 420;
    desk.scaleX = 0.4;
    desk.scaleY = 0.3;
    this.addChild(desk);

    // for (let x = 0; x < 2; x++) {
    //   for (let y = 0; y < 4; y++) {
    //     let suta = new SutaWait();
    //     suta.x = 400 + 100 * x;
    //     suta.y = 550 + 50 * y;
    //     // suta.scaleX = 0.6;
    //     // suta.scaleY = 0.6;
    //     this.addChild(suta);
    //   }
    // }
  }
}
