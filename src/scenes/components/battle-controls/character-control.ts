class CharacterControl extends Phaser.GameObjects.Container {

  readonly scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
  }

  addMenuItem(index: number, item: string) {
    let menuItem = new Phaser.GameObjects.Text(this.scene, 10, 10, item, { color: '#ffffff', align: 'left', fontSize: '1.5rem'});
    this.add(menuItem);
  }

}

export default CharacterControl;