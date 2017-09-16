import { Anime } from 'lib';

export default class DeskAnime extends Anime {
  constructor() {
    super();

    let desk = this.createSprite(0, 0, 734, 747, 0.4, 0.3, 'img/desk_book.png');
    this.addChild(desk);
  }
}
