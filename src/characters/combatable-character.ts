import { ISpriteConfig, IAttributes, ICombatableCharacter } from './interfaces';
import Character from './character';

class CombatableCharacter extends Character implements ICombatableCharacter {

  static readonly defaultStats = {
    HP: 1, MP: 1, PATK: 1, PDEF: 1, MATK: 1, MDEF: 1
  }

  get PATK() { return this.stats.PATK; }
  get PDEF() { return this.stats.PDEF; }
  get MATK() { return this.stats.MATK; }
  get MDEF() { return this.stats.MDEF; }

  constructor(
      readonly id: string,
      readonly spriteConfig: ISpriteConfig,
      readonly stats: IAttributes = CombatableCharacter.defaultStats,
      readonly name?: string,
      readonly description?: string) {
    super(id, spriteConfig, name, description);
  }

  toJSON() {
    return {
      id: this.id,
      spriteConfig: this.spriteConfig,
      stats: this.stats,
      name: this.name,
      description: this.description
    }
  }
}

export default CombatableCharacter;