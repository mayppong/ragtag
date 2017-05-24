import Character from './character';

interface IStats {
  HP: number;
  MP: number;
  PATK: number;
  PDEF: number;
  MATK: number;
  MDEF: number;
}

interface ICombatable {
  readonly stats: IStats
}

class CombatableCharacter extends Character implements ICombatable {

  readonly stats: IStats
  static defaultStats = {
    HP: 1, MP: 1, PATK: 1, PDEF: 1, MATK: 1, MDEF: 1
  }

  constructor(name: string, stats?: IStats) {
    super(name);
    this.stats = stats || CombatableCharacter.defaultStats;
  }

}

export { ICombatable, IStats };
export default CombatableCharacter;
