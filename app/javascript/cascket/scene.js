import { SutachooAnime, BigsightAnime, TengokuAnime, FlowerAnime, StoryAnime } from 'anime';
import Map from './map';
import { Network } from 'lib';
import SutaMe from './suta_me';
import SutaWait from './suta_wait';
import SutaPlayer from './suta_player';

export default class CascketScene extends enchant.Scene {
  constructor() {
    super();

    let map = new Map();
    this.addChild(map);

    let me = new SutaMe();
    me.x = 400;
    me.y = 400;
    this.addChild(me);

    let players = {};

    this.id = Date.now();
    let network = new Network(this.id, (id, message) => {
      // OnSpeak
      console.log('onSpeak:' + message);
    }, (id, x, y) => {
      // OnWalk
      console.log('OnWalk id:' + id +' x:' + x + ' y:' + y);
      if (this.id == id) { return; }
      if (players[id] == undefined) {
        players[id] = new SutaPlayer();
        players[id].x = 420;
        players[id].y = 460;
        map.addChild(players[id]);
      }
      let player = players[id];

      let diffX = player.x - x;
      let diffY = (player.y - y) * 1.5;
      let diff = Math.sqrt(diffX * diffX + diffY * diffY);
      let time = Math.abs(diff)/2;
      player.clear();
      for (let i = 0; i < (time/43) - 1; i++) {
        player.walking();
      }

      player.tl.clear().tween({x: x, y: y - 130, time: time});
    }, (id) => {
      // OnOxOx
      console.log('OnOxOx id:' + id);
      if (this.id == id) { return; }
      if (players[id] == undefined) {
        players[id] = new SutaPlayer();
        players[id].x = 750;
        players[id].y = 550;
        map.addChild(players[id]);
      }
      let player = players[id];
      player.oxox();
    }, (id) => {
      // OnJan
      console.log('OnJan id:' + id);
      if (this.id == id) { return; }
      if (players[id] == undefined) {
        players[id] = new SutaPlayer();
        players[id].x = 500;
        players[id].y = 500;
        map.addChild(players[id]);
      }
      let player = players[id];
      player.jakajan();
    }, (id, x, y) => {
      // OnHello
      console.log('OnHello id:' + id + ' x:' + x + ' y:' + y);
      if (this.id == id) { return; }
      if (players[id] == undefined) {
        players[id] = new SutaPlayer();
        players[id].x = x;
        players[id].y = y;
        map.addChild(players[id]);
      }
      network.add(me.x, me.y);
    }, (id, x, y) => {
      // OnAdd
      console.log('OnAdd id:' + id + ' x:' + x + ' y:' + y);
      if (this.id == id) { return; }
      if (players[id] == undefined) {
        players[id] = new SutaPlayer();
        players[id].x = x;
        players[id].y = y;
        map.addChild(players[id]);
      }
    }, (id) => {
      // OnDelete
      console.log('OnDelete id:' + id);
      if (this.id == id) { return; }
      if (players[id] != undefined) {
        console.log('if (players[id] != undefined)');
        map.removeChild(players[id]);
      }
    });

    this.addEventListener('enterframe', () => {
      if (enchant.Core.instance.input.a) {
        if (me.isMoving() || me.isWalking()) { return; }
        me.oxox();
        network.oxox();
      } else if (enchant.Core.instance.input.b) {
        if (me.isMoving() || me.isWalking()) { return; }
        me.jakajan();
        network.jakajan();
      }
    });

    map.addEventListener('touchstart', (e) => {
      console.log(e.localX + "," + e.localY);

      if (me.isMoving()) { return; }

      network.walk(e.localX, e.localY);
      
      let diffX = map.x - (400 - e.localX);
      let diffY = (map.y - (540 - e.localY)) * 1.5;
      let diff = Math.sqrt(diffX * diffX + diffY * diffY);

      let time = Math.abs(diff)/2;
      me.clear();
      for (let i = 0; i < (time/43) - 1; i++) {
        me.walking();
      }

      map.tl
        .clear()
        .tween({x: 400 - e.localX, time: diff/3})
        .and()
        .tween({y: 540 - e.localY, time: diff/3});
    });

    this.tl.delay(10).exec(() => {
      network.hello(420, 460);
    });
  }

  // onWalk(id, x, y) {
  //   console.log("id:" + id + " x:" + x + " y:" + y);
  //   // this.netSuta.x = x;
  //   // this.netSuta.y = y;
  //   // this.netSuta.tl.tween({x: x, y: y, time: 100});
  //   let netSuta = new SutaWait();
  //   map.addChild(netSuta);
  //   netSuta.x = x;
  //   netSuta.y = y;
  // }

  // onSpeak(id, message) {
  //   console.log("id:" + id + " message:" + message);
  // }
}
