import { Anime } from 'lib';
import { KanbanAnime } from 'anime';

export default class Kanban extends Anime {
  constructor(image_url) {
    super();

    let kanban = new KanbanAnime();
    kanban.x = 25;
    kanban.y = -240;
    kanban.scaleX = 0.8;
    kanban.scaleY = 0.9;
    this.addChild(kanban);

    let logo = new Sprite(210, 140);
    logo.x = 25 + 55;
    logo.y = -210 + 30;
    this.addChild(logo);
    
    // let image_url = 'img/circle.png';
    enchant.Core.instance.load(image_url, () => {
      logo.image = enchant.Core.instance.assets[image_url];
    });

    // http://peercasket.s3.amazonaws.com/2017a/circle_cut/2804?9152348
    // let image_url = 'img/circle.png';
    // enchant.Core.instance.load(image_url, () => {
    //   logo.image = enchant.Core.instance.assets[image_url];
    // });
  }
}
