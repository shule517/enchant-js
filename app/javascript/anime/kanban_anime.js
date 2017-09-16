import { Anime } from 'lib';

export default class KanbanAnime extends Anime {
  constructor() {
    super();
    let kanban = this.createSprite(0, 0, 400, 376, 0, 0, 'img/wood_kanban.png');
    this.addChild(kanban);
  }
}
