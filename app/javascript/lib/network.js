export default class Network {
  constructor(id, onSpeak, onWalk, onOxOx, onJakakan, onHello, onAdd, onDelete) {
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
        } else if (data.type == 'hello') {
          onHello(data.id, data.x, data.y);
        } else if (data.type == 'add') {
          onAdd(data.id, data.x, data.y);
        } else if (data.type == 'delete') {
          onDelete(data.id);
        } else {
          console.log('undefined message: ' + data);
        }
            // this.received(data);
      }
    });
    // App.room.perform('speak', {message: 'aaaaaaa'});
    console.log('Network');
  }

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

  add(x, y) {
    console.log('send: add');
    App.room.perform('speak', {message: {type: 'add', id: this.id, x: x, y: y}});
  }

  hello(x, y) {
    console.log('send: hello');
    App.room.perform('speak', {message: {type: 'hello', id: this.id, x: x, y: y}});
  }
}
