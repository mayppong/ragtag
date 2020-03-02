import { CharacterControl } from './battle-controls/index';
import CharacterSprite from './character-sprite';

interface ISize {
  height: number,
  width: number
}

class BattleControl extends Phaser.Scene {
  static readonly defaultCharacterControlPositions: Phaser.Types.GameObjects.Graphics.Options[] = [{x: 0, y: 0}, {x: 0, y: 100}, {x: 0, y: 200}, {x: 270, y: 0}, {x: 270, y: 100}, {x: 270, y: 200}];

  readonly position: Phaser.Types.GameObjects.Graphics.Options = {x: 0, y: 660};
  readonly size: ISize = {height: 300, width: 540};
  readonly row: number = 3;
  readonly column: number = 2;

  constructor() {
    super({ key: 'BattleControl'});
  }

  create(party: CharacterSprite[]) {
    let graphics = this.add.graphics(this.position);
    graphics.lineStyle(1, 0xffffff);
    graphics.fillStyle(0x031f4c, 1);

    BattleControl.defaultCharacterControlPositions.forEach((menu) => {
      this.drawControlsBox(graphics, menu.x, menu.y);
    });

    let menus = this.add.container(this.position.x, this.position.y);

    let heroesMenu = new CharacterControl(this, 1, 10);
    party.forEach((hero) => {
      heroesMenu.addMenuItem(hero.character.id)
    });
    menus.add(heroesMenu);
  }

  private drawControlsBox(graphics: Phaser.GameObjects.Graphics, x: number, y: number) {
    graphics.strokeRect(x, y, 270, 100);
    graphics.fillRect(x, y, 270, 100);
    return graphics;
  }

}

export default BattleControl;