import * as Components from './components/index';
import CombatableCharacter from '../character/combatable';

import heroesData from '../../data/heroes.json';
import monstersData from '../../data/monsters.json';
import heroSprites from '../../assets/sample-heroes-sprite.png';
import slimeSprites from '../../assets/sample-slimes-sprite.png';

/**
 * The BattleScene should take 2 parties that are going to battle as its data input, along with a config object for setting background,
 * or any other settings related to future features.
 */
class BattleScene extends Phaser.Scene {

  // temporary sample data set
  heroes: any[] = ['ragtag.roy', 'ragtag.lennie'];
  monsters: any[] = ['ragtag.slime', 'ragtag.slime'];

  spriteSheets: Phaser.Types.Loader.FileTypes.SpriteSheetFileConfig[] = [
    {key: 'heroSprites', url: heroSprites, frameConfig: { frameWidth: 5, frameHeight: 10 }},
    {key: 'slimeSprites', url: slimeSprites, frameConfig: { frameWidth: 5, frameHeight: 10 }}
  ];

  heroSprites: Components.CharacterSprite[] = [];
  monsterSprites: Components.CharacterSprite[] = [];

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
    this.heroSprites = this.heroes.map((hero) => {
      return heroesData[hero];
    }).map((hero, index) => {
      hero.character = new CombatableCharacter(hero.id);
      hero.spriteConfig.x = 300 + (50 * (index + 1));
      hero.spriteConfig.y = 100 * (index + 1);
      let sprite = this.addCharacterSprite(this, hero);
      return sprite;
    });

    let monstersData = this.cache.json.get('monstersData');
    this.monsterSprites = this.monsters.map((monster) => {
      return monstersData[monster];
    }).map((monster, index) => {
      monster.character = new CombatableCharacter(monster.id);
      monster.spriteConfig.x = 50 + (50 * (index + 1));
      monster.spriteConfig.y = 100 * (index + 1);
      let sprite = this.addCharacterSprite(this, monster);
      return sprite;
    });
    this.scene.launch('BattleControl', this.heroSprites);
  }

  private addCharacterSprite(scene: Phaser.Scene, character: any) {
    let sprite = new Components.CharacterSprite(scene, character.character, character.spriteConfig);
    sprite.setScale(5);
    this.add.existing(sprite);
    return sprite;
  }

}

export default BattleScene;