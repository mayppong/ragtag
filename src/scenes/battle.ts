class BattleScene extends Phaser.Scene {

  constructor() {
    super({ key: 'BattleScene'});
  }

  preload () {
    // load resources
  }

  create () {
    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');

    let graphics = this.add.graphics();
    this.addControls(graphics);
  }

  private addControls(graphics: Phaser.GameObjects.Graphics) {
    graphics.lineStyle(1, 0xffffff);
    graphics.fillStyle(0x031f4c, 1);
    graphics.strokeRect(1, 398, 148, 200);
    graphics.fillRect(1, 398, 148, 200);
    graphics.strokeRect(151, 398, 148, 200);
    graphics.fillRect(151, 398, 148, 200);
    graphics.strokeRect(301, 398, 497, 200);
    graphics.fillRect(301, 398, 497, 200);
    return graphics;
  }
}

export default BattleScene;