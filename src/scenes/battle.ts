import * as Components from './components/index';
import heroes from '../../assets/sample-heroes-sprite.png';
import slimes from '../../assets/sample-slimes-sprite.png';

class BattleScene extends Phaser.Scene {

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

    let graphics = this.add.graphics();
    this.addCharacters(this);
    this.addControls(graphics);
  }

  private addCharacters(scene: Phaser.Scene) {
    let redDigimon = new Character(scene, 550, 100, 'heroes', 1);
    redDigimon.setScale(5);
    this.add.existing(redDigimon);

    let blueDigimon = new Character(scene, 550, 300, 'heroes', 4);
    blueDigimon.setScale(5);
    this.add.existing(blueDigimon);

    let blueEvee = new Character(scene, 150, 100, 'slimes', 1);
    blueEvee.setScale(5);
    blueEvee.setFlipX(true);
    this.add.existing(blueEvee);

    let redEvee = new Character(scene, 150, 300, 'slimes', 2);
    redEvee.setScale(5);
    redEvee.setFlipX(true);
    this.add.existing(redEvee);
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