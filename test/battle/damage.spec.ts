import CombatableCharacter from '../../src/character/combatable-character';
import DamageCalculator from '../../src/battle/damage';
import { expect } from 'chai';

describe('Damage', () => {
  it('should create a damage calculator', () => {
    let dmg = new DamageCalculator();
  });

  describe('calculating physical damage', () => {
    it('returns physical damage', () => {
      let attacker = new CombatableCharacter("ragtag.attacker",
        { HP: 1, MP: 1, PATK: 2, PDEF: 1, MATK: 1, MDEF: 1});
      let defender = new CombatableCharacter("ragtag.defender");
      let dmg = new DamageCalculator();
      expect(dmg.physicalDamage(attacker, defender)).to.equal(2);
    });
  });

  describe('calculating magical damage', () => {
    it('returns magical damage', () => {
      let attacker = new CombatableCharacter("ragtag.attacker",
        { HP: 1, MP: 1, PATK: 1, PDEF: 1, MATK: 3, MDEF: 1});
      let defender = new CombatableCharacter("ragtag.defender");
      let dmg = new DamageCalculator();
      expect(dmg.magicalDamage(attacker, defender)).to.equal(3);
    });
  })
});
