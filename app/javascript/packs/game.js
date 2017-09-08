import Sutachoo from './sutachoo'
import Bigsight from './bigsight'
import Map from './map'

enchant();

let core = new Core(800, 800);
core.keybind(90, 'a');
core.preload('img/stamp1.png');
core.preload('img/tengoku.jpg');
core.preload('img/building_bigsight.png');
core.fps = 60;

core.onload = () => {
  core.rootScene.addChild(new Map);
  core.rootScene.addChild(new Bigsight);

  let d = 80;
  for (let i = 0; i < 5; i++) {
    core.rootScene.addChild(new Sutachoo(250, 250, d*i));
  }
  // core.rootScene.addChild(new Sutachoo(250, 250, 100));
  // core.rootScene.addChild(new Sutachoo(250, 250, 150));
  // core.rootScene.addChild(new Sutachoo(250, 250, 50));
};

core.start();
