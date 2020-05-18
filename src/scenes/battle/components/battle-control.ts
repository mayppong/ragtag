import CharacterControl from './character-control';
import CharacterSprite from '../../components/sprite/character-sprite';

/**
 * The BattleControl class is used to essentially renders a grid of
 * CharacterControls.
 *
 * TODO: This could perhaps be refactor to inherit from `Phaser.GameObject.Group`.
 * It might be light than recreating an entire scene.
 */
class BattleControl extends Phaser.Scene {
  static readonly defaultCharacterControlPositions: Phaser.Types.GameObjects.Graphics.Options[] = [{x: 0, y: 0}, {x: 0, y: 100}, {x: 0, y: 200}, {x: 270, y: 0}, {x: 270, y: 100}, {x: 270, y: 200}];
  static readonly defaultGraphicsConfig: any = {
    fillStyle: 0x031f4c,
    outlineStyle: 0xffffff
  }
  static readonly characterControlsConfig: any = {
    originPosition: {x: 0, y: 660},
    gridSize: {width: 540, height: 300},
    cellSize: {width: 270, height: 100}, // 3 rows, 2 columns
    fillColor: 0x031f4c,
    outlineColor: 0xffffff
  };

  constructor() {
    super({ key: 'BattleControl'});
  }

  create(party: CharacterSprite[]) {
    this.drawCharacterControlsGrid(this, BattleControl.characterControlsConfig);

    party.forEach((hero, index) => {
      let x = BattleControl.characterControlsConfig.originPosition.x + BattleControl.defaultCharacterControlPositions[index].x;
      let y = BattleControl.characterControlsConfig.originPosition.y + BattleControl.defaultCharacterControlPositions[index].y;
      let control = new CharacterControl(this, {x: x, y: y});
      control.addMenuItem(hero.character.id);
      this.add.existing(control);
    });
  }

  private drawCharacterControlsGrid(scene: Phaser.Scene, controlsConfig: any) {
    let grid = scene.add.grid(controlsConfig.originPosition.x, controlsConfig.originPosition.y,
        controlsConfig.gridSize.width, controlsConfig.gridSize.height,
        controlsConfig.cellSize.width, controlsConfig.cellSize.height,
        controlsConfig.fillColor, 1, controlsConfig.outlineColor)
      .setOrigin(0,0)
      .setStrokeStyle(1, controlsConfig.outlineColor);
    return grid;
  }

}

export default BattleControl;