import OpeningScene from './OpeningScene';

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
  let scene = new OpeningScene();
  core.pushScene(scene);
};

core.start();
