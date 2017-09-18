export default class Network {
  constructor(id, onSpeak, onWalk, onOxOx, onJakakan) {
    this.id = id;
    App.room = App.cable.subscriptions.create("RoomChannel", {
      connected: () => {},
      disconnected: () => {},
      received: (receivedData) => {
        let data = receivedData['message'];
        console.log('received:' + data.type);
        if (data.type == 'speak') {
          onSpeak(data.id, data.message);
        } else if (data.type == 'walk') {
          onWalk(data.id, data.x, data.y);
        } else if (data.type == 'oxox') {
          onOxOx(data.id);
        } else if (data.type == 'jakajan') {
          onJakakan(data.id);
        }
            // this.received(data);
      }
    });
    // App.room.perform('speak', {message: 'aaaaaaa'});
    console.log('Network');
    this.onSpeak = onSpeak;
    this.onWalk = onWalk;
  }

  // received(receivedData) {
  //   let data = receivedData['message'];
  //   if (data.type == 'speak') {
  //     this.onSpeak(data.id, data.message);
  //   } else if (data.type == 'walk') {
  //     this.onWalk(data.id, data.x, data.y);
  //   }
  // }

  speak(message) {
    console.log('send: speak');
    App.room.perform('speak', {message: {type: 'speak', id: this.id, message: message}});
  }

  walk(x, y) {
    console.log('send: walk');
    App.room.perform('speak', {message: {type: 'walk', id: this.id, x: x, y: y}});
  }

  jakajan() {
    console.log('send: jakajan');
    App.room.perform('speak', {message: {type: 'jakajan', id: this.id}});
  }

  oxox() {
    console.log('send: oxox');
    App.room.perform('speak', {message: {type: 'oxox', id: this.id}});
  }
}
