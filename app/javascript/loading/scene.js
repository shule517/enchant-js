export default class LoadingScene extends enchant.Scene {
  constructor() {
    super();
    console.log('LoadingScene');
    let core = enchant.Core.instance;
    this.percent = 0;

    let label = this.createLabel(0, 0, "Loading...");
    label.y = 200;
    this.addChild(label);

    let loadingSuta = new Sprite(273, 273);
    loadingSuta.scaleX = -1;
    loadingSuta.x = -273;
    loadingSuta.y = 300;
    this.addChild(loadingSuta);

    let background = new Sprite(800, 800);
    let surf = new Surface(800, 800);
    surf.context.beginPath();
    surf.context.fillStyle = 'rgba(255, 255, 255, 1)';
    surf.context.fillRect(0, 0, 800, 800);
    background .image = surf;
    background.opacity = 0;
    this.addChild(background);

    this.addEventListener('enterframe', (e) => {
      let toX = this.percent * 540;
      if (loadingSuta.x < toX) {
        loadingSuta.x += 10;
        label.x = loadingSuta.x + 30;
      }
    });
      
    this.addEventListener('progress', (e) => {
      let imageKey = "img/loading_suta.png";
      if (core.assets[imageKey] != undefined) {
        loadingSuta.image = core.assets[imageKey];
      }
      this.percent = Math.round(e.loaded / e.total);
    });

    this.addEventListener('load', (e) => {
      loadingSuta.tl
        .delay(60)
        .exec(() => {
          background.tl.tween({opacity: 1, time: 60})
          .exec(() => {
            core.removeScene(this);
            core.dispatchEvent(e);
          });
        });
    });
  }

  createLabel(x, y, text) {
    let label = new Label(text);
    label.font = "bold 45px Arial";
    label.color = "black";
    label.x = x;	// X座標
    label.y = y;	// Y座標
    label.width = 238;
    label.textAlign = "center";
    return label;
  }
}
