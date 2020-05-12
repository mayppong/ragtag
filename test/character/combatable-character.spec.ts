import CombatableCharacter from '../../src/character/combatable-character';
import { expect } from 'chai';

describe('CombatableCharacter', () => {
  describe('creating a new combatable character', () => {
    it('sets a hero property on creation', () => {
      let id = "ragtag.dummy";
      let stats = {
        HP: 1, MP: 1, PATK: 1, PDEF: 1, MATK: 1, MDEF: 1
      };
      let unit = new CombatableCharacter(id, stats);
      expect(unit.id).to.equal(id);
      expect(unit.stats.HP).to.equal(stats.HP);
    });

    it('uses default stat when none is given', () => {
      let id = "ragtag.dummy";
      let unit = new CombatableCharacter(id);
      expect(unit.stats.HP).to.equal(CombatableCharacter.defaultStats.HP);
    });
  });

  describe('converting character object to JSON', () => {
    it('convert basic combatable characters', () => {
      let id = "ragtag.dummy";
      let unit = new CombatableCharacter(id);
      expect(JSON.stringify(unit)).to.equal(`{"id":"${id}","stats":{"HP":1,"MP":1,"PATK":1,"PDEF":1,"MATK":1,"MDEF":1}}`);
    });

  });
});
