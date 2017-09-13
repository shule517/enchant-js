export default class Sound {
  constructor(soundKey, volume) {
    this.volume = volume;
    this.sound = this.readSound(soundKey);
  }

  play() {
    this.sound.play();
    this.sound.volume = this.volume;
  }

  readSound(soundKey) {
    return enchant.Core.instance.assets[soundKey].clone();
  }
}
