class CharacterControl extends Phaser.GameObjects.Container {

  static readonly width: number = 270;
  static readonly height: number = 100;

  readonly scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, position: Phaser.Types.GameObjects.Graphics.Options) {
    super(scene, position.x, position.y);
    this.setInteractive(new Phaser.Geom.Rectangle(0, 0, CharacterControl.width, CharacterControl.height), Phaser.Geom.Rectangle.Contains);
  }

  addMenuItem(item: string) {
    let menuItem = new Phaser.GameObjects.Text(this.scene, 10, 10, item, { color: '#ffffff', align: 'left', fontSize: '1.5rem'});
    this.add(menuItem);
    return this;
  }

}

export default CharacterControl;