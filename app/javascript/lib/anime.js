export default class Anime extends enchant.Group {
  constructor() {
    super();
  }


  createSprite(x, y, width, height, originX, originY, imagePath) {
    let sprite = new enchant.Sprite(width, height);
    sprite.x = x;
    sprite.y = y;
    sprite.originX = originX;
    sprite.originY = originY;
    sprite.image = enchant.Core.instance.assets[imagePath];
    return sprite;
  }

  rand(n) {
    // 3を与えると0,1，2，3のどれかが帰ってくる
    return Math.floor(Math.random() * (n + 1));
  }
}
