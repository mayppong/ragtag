class BattleControl extends Phaser.Scene {
  constructor() {
    super({ key: 'BattleControl'});
  }

  create() {
    let graphics = this.add.graphics();
    this.drawControlsBox(graphics);

    let menus = this.add.container(0, 400);
  }

  private drawControlsBox(graphics: Phaser.GameObjects.Graphics) {
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

export default BattleControl;