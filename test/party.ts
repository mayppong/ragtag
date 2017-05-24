import Party from '../src/party';
import CombatableCharacter from '../src/character/combatable';
import { expect } from 'chai';

describe('creating a new party', () => {
  it('sets a list of party members on creation', () => {
    let members = [new CombatableCharacter("dummy")];
    let party = new Party(members);
    expect(party.members.length).to.equal(members.length);
    expect(party.members[0].name).to.equal(members[0].name);
  });

  it('allows a max party size setting on creation', () => {
    let maxSize = 2;
    let members = [new CombatableCharacter("dummy")];
    let party = new Party(members, {maxSize: maxSize});
    expect(party.maxSize).to.equal(maxSize);
  });

  it('slices unit list when exceed party max size', () => {
    let members = [
      new CombatableCharacter("dummy1"),
      new CombatableCharacter("dummy2"),
      new CombatableCharacter("dummy3"),
      new CombatableCharacter("dummy4"),
      new CombatableCharacter("dummy5"),
      new CombatableCharacter("dummy6"),
    ];
    let party = new Party(members);
    expect(party.members.length).to.equal(party.maxSize);
  });
});
