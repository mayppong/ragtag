import Character from '../../src/character/character';
import { expect } from 'chai';

describe('Character', () => {
  describe('creating a new character', () => {
    it('sets a character name on creation', () => {
      let name = "dummy";
      let unit = new Character(name);
      expect(unit.name).to.equal(name);
    });
  });

  describe('converting charcater object to JSON', () => {
    it('convert basic character', () => {
      let name = "dummy";
      let unit = new Character(name);
      expect(JSON.stringify(unit)).to.equal(`{"name":"${name}"}`);
    });
  });
});
