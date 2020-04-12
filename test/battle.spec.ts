import CombatableCharacter from '../src/character/combatable';
import Party from '../src/party';
import Battle from '../src/battle';
import { expect } from 'chai';

describe('creating a new battle', () => {
  it('sets a character name on creation', () => {
    let monsters = [new CombatableCharacter('monster')];
    let heroes = [new CombatableCharacter('hero')];
    let battle = new Battle([new Party(heroes), new Party(monsters)]);

    expect(battle.parties.length).to.equal(2);
    expect(battle.parties[0].members[0].id).to.equal(heroes[0].id);
  });
});
