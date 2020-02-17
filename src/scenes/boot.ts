class BootScene extends Phaser.Scene {

  constructor() {
    super({ key: 'BootScene'});
  }

  preload () {
    // load resources
  }

  create () {
    this.scene.start('BattleScene');
  }
}

export default BootScene;