import Character from './character';

interface IAttributes {
  HP: number;
  MP: number;
  PATK: number;
  PDEF: number;
  MATK: number;
  MDEF: number;
}

interface ICombatable extends Character {
  readonly stats: IAttributes
}

class CombatableCharacter extends Character implements ICombatable {

  readonly stats: IAttributes
  static defaultStats = {
    HP: 1, MP: 1, PATK: 1, PDEF: 1, MATK: 1, MDEF: 1
  }

  get PATK() { return this.stats.PATK; }
  get PDEF() { return this.stats.PDEF; }
  get MATK() { return this.stats.MATK; }
  get MDEF() { return this.stats.MDEF; }

  constructor(name: string, stats?: IAttributes) {
    super(name);
    this.stats = stats || CombatableCharacter.defaultStats;
  }

  toJSON() {
    return {
      name: this.name,
      attributes: this.stats
    };
  }
}

export { ICombatable, IAttributes };
export default CombatableCharacter;
