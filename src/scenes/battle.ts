import * as Components from './components/index';
import Party from '../party';
import { Hero, Monster } from '../characters/index';
import PartySprite from './components/party-sprite';

import heroesData from '../../data/heroes.json';
import monstersData from '../../data/monsters.json';
import heroSprites from '../../assets/sample-heroes-sprite.png';
import slimeSprites from '../../assets/sample-slimes-sprite.png';

/**
 * The BattleScene should take 2 parties that are going to battle as its data input, along with a config object for setting background,
 * or any other settings related to future features.
 */
class BattleScene extends Phaser.Scene {

  spriteSheets: Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig[] = [
    {key: 'heroSprites', url: heroSprites, frameConfig: { frameWidth: 5, frameHeight: 10 }},
    {key: 'slimeSprites', url: slimeSprites, frameConfig: { frameWidth: 5, frameHeight: 10 }}
  ];

  constructor() {
    super({ key: 'BattleScene'});
  }

  preload () {
    // load resources
    this.spriteSheets.forEach((sheet: Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig) => {
      this.load.spritesheet(sheet);
    });

    this.load.json('heroesData', heroesData);
    this.load.json('monstersData', monstersData);

    // load scene components
    this.scene.add('BattleControl', Components.BattleControl, false);
  }

  create () {
    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');

    let heroesData = this.cache.json.get('heroesData');
    let heroes = new Party([new Hero(heroesData['ragtag.roy']), new Hero(heroesData['ragtag.lennie'])]);
    let heroesSprites = new PartySprite(this, heroes);
    heroesSprites.setBattlePosition();
    heroesSprites.characterSprites.forEach((sprite: Components.CharacterSprite) => { this.add.existing(sprite); });

    let monstersData = this.cache.json.get('monstersData');
    let monsters = new Party([new Monster(monstersData['ragtag.slime']), new Monster(monstersData['ragtag.slime'])]);
    let monstersSprites = new PartySprite(this, monsters);
    monstersSprites.characterSprites.forEach((sprite: Components.CharacterSprite) => { this.add.existing(sprite); });

    this.scene.launch('BattleControl', heroesSprites.characterSprites);
  }
}

export default BattleScene;