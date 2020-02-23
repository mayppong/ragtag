interface IPosition {
  x: number,
  y: number
}
interface ISize {
  height: number,
  width: number
}

class BattleControl extends Phaser.Scene {
  readonly position: IPosition = {x: 0, y: 400};
  readonly size: ISize = {height: 200, width: 600};

  constructor() {
    super({ key: 'BattleControl'});
  }

  create() {
    let graphics = this.add.graphics(this.position);
    graphics.lineStyle(1, 0xffffff);
    graphics.fillStyle(0x031f4c, 1);

    this.drawControlsBox(graphics);

    let menus = this.add.container(this.position.x, this.position.y);
  }

  private drawControlsBox(graphics: Phaser.GameObjects.Graphics) {
    // enemy menu
    graphics.strokeRect(1, 0, 148, 200);
    graphics.fillRect(1, 0, 148, 200);
    // action menu
    graphics.strokeRect(151, 0, 148, 200);
    graphics.fillRect(151, 0, 148, 200);
    // hero menu
    graphics.strokeRect(301, 0, 497, 200);
    graphics.fillRect(301, 0, 497, 200);
    return graphics;
  }

}

export default BattleControl;