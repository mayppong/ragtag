import Character from './character';

interface IAttributes {
  HP: number;
  MP: number;
  PATK: number;
  PDEF: number;
  MATK: number;
  MDEF: number;
}

class CombatableCharacter extends Character {

  static defaultStats = {
    HP: 1, MP: 1, PATK: 1, PDEF: 1, MATK: 1, MDEF: 1
  }

  get PATK() { return this.stats.PATK; }
  get PDEF() { return this.stats.PDEF; }
  get MATK() { return this.stats.MATK; }
  get MDEF() { return this.stats.MDEF; }

  constructor(
      readonly id: string,
      readonly stats?: IAttributes) {
    super(id);
    this.stats = stats || CombatableCharacter.defaultStats;
  }

  toJSON() {
    return {
      id: this.id,
      stats: this.stats
    }
  }
}

export { IAttributes };
export default CombatableCharacter;
