import Party from '../src/party';
import CombatableCharacter from '../src/characters/combatable-character';
import { expect } from 'chai';

describe('creating a new party', () => {
  it('sets a list of party members on creation', () => {
    let members = [new CombatableCharacter('dummy', {sprite: ''})];
    let party = new Party(members);
    expect(party.members.length).to.equal(members.length);
    expect(party.members[0].id).to.equal(members[0].id);
  });

  it('allows a max party size setting on creation', () => {
    let maxSize = 2;
    let members = [new CombatableCharacter('dummy', {sprite: ''})];
    let party = new Party(members, {maxSize: maxSize});
    expect(party.maxSize).to.equal(maxSize);
  });

  it('slices unit list when exceed party max size', () => {
    let members = [
      new CombatableCharacter('dummy1', {sprite: ''}),
      new CombatableCharacter('dummy2', {sprite: ''}),
      new CombatableCharacter('dummy3', {sprite: ''}),
      new CombatableCharacter('dummy4', {sprite: ''}),
      new CombatableCharacter('dummy5', {sprite: ''}),
      new CombatableCharacter('dummy6', {sprite: ''}),
    ];
    let party = new Party(members);
    expect(party.members.length).to.equal(party.maxSize);
  });
});
