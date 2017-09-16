import { Anime } from 'lib';
import { SutachooAnime, KanbanAnime } from 'anime';
import Kanban from './kanban';

export default class SutaNusi extends Anime {
  constructor() {
    super();

    this.scaleX = 0.6;
    this.scaleY = 0.6;

    let sutachoo = new SutachooAnime();
    sutachoo.rotateTail(300);
    sutachoo.scaleTail(3, 2);
    this.addChild(sutachoo);

    let kanban = new Kanban('img/circle.png');
    this.addChild(kanban);

    // this.tl
    // .delay(140 + this.rand(400))
    // .tween({ scaleX: this.scaleX * -1, time: 20, easing: enchant.Easing.CUBIC_EASEOUT })
    // .delay(140 + this.rand(400))
    // .tween({ scaleX: this.scaleX * 1, time: 20, easing: enchant.Easing.CUBIC_EASEOUT })
    // .loop();
  }
}
