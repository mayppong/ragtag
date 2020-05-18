import { CombatableCharacter } from './character';

/**
 * A class for combining combatable characters together to create a party
 * to bring to a battle.
 * A party has a default size of 5 which can be reconfigured during party
 * creation.
 */
class Party {
  readonly maxSize: number = 6;
  protected _members: CombatableCharacter[];

  get members(): CombatableCharacter[] { return this._members; }

  constructor(members: CombatableCharacter[], config?: any) {
    if (config && config.maxSize) {
      this.maxSize = config.maxSize;
    }
    this._members = members.slice(0, this.maxSize);
  }
}

export default Party;