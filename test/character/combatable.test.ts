import CombatableCharacter from '../../src/character/combatable';
import { expect } from 'chai';

describe('creating a new combatable character', () => {
  it('sets a hero property on creation', () => {
    let name = "dummy";
    let stats = {
      HP: 1, MP: 1, PATK: 1, PDEF: 1, MATK: 1, MDEF: 1
    };
    let unit = new CombatableCharacter(name, stats);
    expect(unit.name).to.equal(name);
    expect(unit.stats.HP).to.equal(stats.HP);
  });

  it('uses default stat when none is given', () => {
    let name = "dummy";
    let unit = new CombatableCharacter(name);
    expect(unit.stats.HP).to.equal(CombatableCharacter.defaultStats.HP);
  });
});

