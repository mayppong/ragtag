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

  constructor(name: string, stats?: IAttributes) {
    super(name);
    this.stats = stats || CombatableCharacter.defaultStats;
  }

}

export { ICombatable, IAttributes };
export default CombatableCharacter;
