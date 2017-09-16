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

  createLabel(x, y, text, font) {
    let label = new Label(text);
    label.font = font;
    label.color = "black";
    label.x = x;	// X座標
    label.y = y;	// Y座標
    label.width = 800;
    label.textAlign = "left";
    return label;
  }

  rand(n) {
    // 3を与えると0,1，2，3のどれかが帰ってくる
    return Math.floor(Math.random() * (n + 1));
  }
}
