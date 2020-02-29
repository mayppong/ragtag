class BootScene extends Phaser.Scene {

  constructor() {
    super({ key: 'BootScene'});
  }

  preload () {
    // load resources
  }

  create () {
    this.scene.launch('BattleScene');
  }
}

export default BootScene;