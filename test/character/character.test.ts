import Character from '../../src/character/character';
import { expect } from 'chai';

describe('creating a new character', () => {
  it('sets a character name on creation', () => {
    let name = "dummy";
    let unit = new Character(name);
    expect(unit.name).to.equal(name);
  });
});
