import Party from './party';

class Battle {
  protected _parties: Party[];
  get parties(): Party[] { return this._parties; }

  constructor(parties: Party[]) {
    this._parties = parties;
  }
/*
  fight(attackers, defenders) {

  }
  */
}

export default Battle;
