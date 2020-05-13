import Character from '../../src/characters/character';
import { expect } from 'chai';

describe('Character', () => {
  describe('creating a new character', () => {
    it('sets a character name on creation', () => {
      let id = "ragtag.dummy";
      let unit = new Character(id);
      expect(unit.id).to.equal(id);
    });
  });

  describe('converting charcater object to JSON', () => {
    it('convert basic character', () => {
      let id = "ragtag.dummy";
      let unit = new Character(id);
      expect(JSON.stringify(unit)).to.equal(`{"id":"${id}"}`);
    });
  });
});
