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

  characterSprites: Components.CharacterSprite[] = [];

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
    this.scene.add('BattleControl', Components.BattleControl, true);
  }

  create () {
    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');

    let heroesData = this.cache.json.get('heroesData');
    let heroes = this.heroes.map(function(hero) {
      hero.character = new CombatableCharacter(hero.id);
      return hero;
    });
    this.addCharacterSprites(this, heroes);

    let monstersData = this.cache.json.get('monstersData');
    let monsters = this.monsters.map(function(monster) {
      monster.character = new CombatableCharacter(monster.id);
      return monster;
    });
    this.addCharacterSprites(this, monsters);

    this.scene.launch('BattleControl', this.characterSprites);
  }

  private addCharacterSprites (scene: Phaser.Scene, characters: any[]) {
    for (let char of characters) {
      let sprite = new Components.CharacterSprite(scene, char.character, char.spriteConfig);
      sprite.setScale(5);

      this.characterSprites.push(sprite);
      scene.add.existing(sprite);
    }
  }

}

export default BattleScene;