import CascketScene2 from './cascket/scene';
import CosplaySquareScene from './cosplay_square/scene';
import GateScene from './gate/scene';
import HomeScene from './home/scene';
import { OpeningScene } from 'opening';
import { LoadingScene } from 'loading';
import { Foo, TestScene } from 'scene';
import { CascketScene } from 'cascket';

enchant();

let core = new Core(800, 800);
core.keybind(90, 'a');
core.keybind(88, 'b');

core.keybind('1'.charCodeAt(0), 'q');
core.keybind('2'.charCodeAt(0), 'w');
core.keybind('3'.charCodeAt(0), 'e');
core.keybind('4'.charCodeAt(0), 'r');
core.keybind('5'.charCodeAt(0), 't');

core.preload('img/stamp1.png');
core.preload('img/stamp9.png');
core.preload('img/tengoku.jpg');
core.preload('img/building_bigsight.png');
core.preload('img/bg_ground_flower.png');
core.preload('img/cascket_logo.png');
core.preload('img/pattern_shibafu.png');


core.preload('img/syuchusen2.png');
core.preload('img/bg_pattern1_aozora.png');
core.preload('img/bg_ground.png');
core.preload('img/flower_hachiue1_red.png');
core.preload('img/flower_hachiue2_white.png');
core.preload('img/flower_hachiue6_yellow.png');
core.preload('img/simple_leaf3.png');
core.preload('img/hole_ana.png');
core.preload('img/ike.png');
core.preload('img/kusa_simple1.png');
core.preload('img/kusa_simple2.png');
core.preload('img/kusa_simple3.png');
core.preload('img/kusa_simple4.png');
core.preload('img/kusa_simple5.png');
core.preload('img/tree_apple.png');
core.preload('img/tree_bird.png');
core.preload('img/tree_character.png');
core.preload('img/tree_keyaki.png');
core.preload('img/tree_ryuuboku.png');
core.preload('img/tree_seichou02.png');
core.preload('img/tree_seichou08.png');
core.preload('img/tree_seichou09.png');
core.preload('img/tree_yamaboushi.png');
core.preload('img/wood_kanban.png');
core.preload('img/wood_kirikabu.png');
core.preload('img/desk_book.png');

core.preload('img/suta/suta_body.png');
core.preload('img/suta/suta_left_foot.png');
core.preload('img/suta/suta_right_foot.png');
core.preload('img/suta/suta_tail.png');

core.preload('img/Quiz-Results.mp3');
core.preload('img/choo.mp3');

core.preload('img/loading_suta.png');

core.fps = 60;

core.loadingScene = new LoadingScene();

core.onload = () => {
  let scene = new OpeningScene(); //OpeningScene();
  core.pushScene(scene);
  scene.addEventListener('touchstart', (e) => {
    console.log("touchstart");
    core.replaceScene(new CascketScene());
  });
  core.addEventListener('enterframe', () => {
    let input = core.input;

    if (input.q) {
      console.log('q');
      core.replaceScene(new CascketScene2());
    } else if (input.w) {
      console.log('w');
      core.replaceScene(new CascketScene());
    } else if (input.e) {
      console.log('e');
      core.replaceScene(new GateScene());
    } else if (input.r) {
      console.log('r');
      core.replaceScene(new HomeScene());
    } else if (input.t) {
      console.log('t');
      core.replaceScene(new OpeningScene());
    }
  });
};

core.start();
