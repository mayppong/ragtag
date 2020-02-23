import * as Components from './components/index';
import heroes from '../../assets/sample-heroes-sprite.png';
import slimes from '../../assets/sample-slimes-sprite.png';

class BattleScene extends Phaser.Scene {

  // temporary sample data set
  characters: any[] = [
    {x: 550, y: 100, sprite: 'heroes', spriteFrame: 1},
    {x: 550, y: 300, sprite: 'heroes', spriteFrame: 4},
    {x: 150, y: 100, sprite: 'slimes', spriteFrame: 1},
    {x: 150, y: 300, sprite: 'slimes', spriteFrame: 2}
  ];

  characterSprites: Components.CharacterSprite[] = [];

  constructor() {
    super({ key: 'BattleScene'});
  }

  preload () {
    // load resources
    this.load.spritesheet({key: 'heroes', url: heroes, frameConfig: { frameWidth: 5, frameHeight: 10 }});
    this.load.spritesheet({key: 'slimes', url: slimes, frameConfig: { frameWidth: 5, frameHeight: 10 }});

    // load scene components
    this.scene.add('BattleControl', Components.BattleControl, true);
  }

  create () {
    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');

    this.addCharacterSprites(this, this.characters);
  }

  private addCharacterSprites (scene: Phaser.Scene, characters: any[]) {
    for (let char of characters) {
      let sprite = new Components.CharacterSprite(scene, char.x, char.y, char.sprite, char.spriteFrame);
      sprite.setScale(5);

      this.characterSprites.push(sprite);
      scene.add.existing(sprite);
    }
  }

}

export default BattleScene;