import Sutachoo from './sutachoo'

enchant();

let core = new Core(800, 800);
core.preload('img/stamp1.png');
core.fps = 60;

core.onload = () => {
  core.rootScene.addChild(new Sutachoo(250, 250, 20));
  core.rootScene.addChild(new Sutachoo(250, 250, 100));
  core.rootScene.addChild(new Sutachoo(250, 250, 150));
  core.rootScene.addChild(new Sutachoo(250, 250, 50));
};

core.start();
