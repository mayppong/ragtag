import * as Components from './components/index';
import CombatableCharacter from '../character/combatable';

import heroesData from '../../data/heroes.json';
import monstersData from '../../data/monsters.json';
import heroeSprites from '../../assets/sample-heroes-sprite.png';
import slimeSprites from '../../assets/sample-slimes-sprite.png';

class BattleScene extends Phaser.Scene {

  // temporary sample data set
  heroes: any[] = [
    {id: 'ragtag.roy', spriteConfig: {x: 550, y: 100, sprite: 'heroSprites', spriteFrame: 1}},
    {id: 'ragtag.lennie', spriteConfig: {x: 550, y: 300, sprite: 'heroSprites', spriteFrame: 4}}
  ];
  monsters: any[] = [
    {id: 'ragtag.slime', spriteConfig: {x: 150, y: 100, sprite: 'slimeSprites', spriteFrame: 1}},
    {id: 'ragtag.slime', spriteConfig: {x: 150, y: 300, sprite: 'slimeSprites', spriteFrame: 2}}
  ];

  heroSprites: Components.CharacterSprite[] = [];
  monsterSprites: Components.CharacterSprite[] = [];

  constructor() {
    super({ key: 'BattleScene'});
  }

  preload () {
    // load resources
    this.load.spritesheet({key: 'heroSprites', url: heroeSprites, frameConfig: { frameWidth: 5, frameHeight: 10 }});
    this.load.spritesheet({key: 'slimeSprites', url: slimeSprites, frameConfig: { frameWidth: 5, frameHeight: 10 }});

    this.load.json('heroesData', heroesData);
    this.load.json('monstersData', monstersData);

    // load scene components
    this.scene.add('BattleControl', Components.BattleControl, false);
  }

  create () {
    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');

    let heroesData = this.cache.json.get('heroesData');
    this.heroSprites = this.heroes.map((hero) => {
      hero.character = new CombatableCharacter(hero.id);
      let sprite = this.addCharacterSprite(this, hero);
      return sprite;
    });

    let monstersData = this.cache.json.get('monstersData');
    this.monsterSprites = this.monsters.map((monster) => {
      monster.character = new CombatableCharacter(monster.id);
      let sprite = this.addCharacterSprite(this, monster);
      return sprite;
    });
    this.scene.launch('BattleControl', [this.heroSprites, this.monsterSprites]);
  }

  private addCharacterSprite(scene: Phaser.Scene, character: any) {
    let sprite = new Components.CharacterSprite(scene, character.character, character.spriteConfig);
    sprite.setScale(5);
    this.add.existing(sprite);
    return sprite;
  }

}

export default BattleScene;