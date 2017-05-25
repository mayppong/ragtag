import { ICombatable } from './character/combatable';

/**
 * A class for combining combatable characters together to create a party
 * to bring to a battle.
 * A party has a default size of 5 which can be reconfigured during party
 * creation.
 */
class Party {
  readonly maxSize: number = 5;

  protected _members: ICombatable[];
  get members(): ICombatable[] { return this._members; }

  constructor(members: ICombatable[], config?: any) {
    if (config && config.maxSize) {
      this.maxSize = config.maxSize;
    }
    this._members = members.slice(0, this.maxSize);
  }
}

export default Party;
