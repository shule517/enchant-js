import Sutachoo from './sutachoo'
import Bigsight from './bigsight'
import Map from './map'

enchant();

let core = new Core(800, 800);
core.keybind(90, 'a');
core.keybind(88, 'b');
core.preload('img/stamp1.png');
core.preload('img/stamp9.png');
core.preload('img/tengoku.jpg');
core.preload('img/building_bigsight.png');
core.preload('img/bg_ground_flower.png');
core.preload('img/cascket_logo.png');

core.preload('img/suta/suta_body.png');
core.preload('img/suta/suta_left_foot.png');
core.preload('img/suta/suta_right_foot.png');
core.preload('img/suta/suta_tail.png');

core.preload('img/Quiz-Results.mp3');
core.preload('img/choo.mp3');



core.fps = 60;

core.onload = () => {
  core.rootScene.addChild(new Map);
  core.rootScene.addChild(new Bigsight);

  // core.rootScene.addChild(new Sutachoo(250, 250, 0));

  let d = 160;
  for (let i = 0; i < 15; i++) {
    let suta = new Sutachoo(250, 250, d*i);
    suta.scaleX = -0.6;
    suta.scaleY = 0.6;
    core.rootScene.addChild(suta);
  }
  // core.rootScene.addChild(new Sutachoo(250, 250, 100));
  // core.rootScene.addChild(new Sutachoo(250, 250, 150));
  // core.rootScene.addChild(new Sutachoo(250, 250, 50));
};

core.start();
