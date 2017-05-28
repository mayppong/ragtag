import CombatableCharacter from '../character/combatable';

/**
 * A class for calculating damages in a batlle between two units.
 * This class should hold all the implementation of all damage calculation
 * within the game. As the functionalties may grow, we can break out into
 * this base calculator class, the physical-type, magical-type, and possibly
 * hybrid-type.
 */
class DamageCalculator {
  /**
   * The physical damage formula will eventually be somewhat exponential
   * but the values should be taken between unit's inherit stats and the
   * equipment to allow equipment to have larger impact and minimize a
   * an exponential growth from a small incremental difference.
   * The formula should based on something like:
   *
   * ```
   *  (BASE_ATK * WEAPON_ATK) / (BASE_DEF * ARMOUR_DEF)
   * ```
   *
   * @param attacker The attacking unit
   * @param defender The defending unit
   * @return A numerical value of the damage
   */
  physicalDamage(attacker: CombatableCharacter, defender: CombatableCharacter): number {
    return attacker.PATK/defender.PDEF;
  }

  /**
   * @param attacker The attacking unit
   * @param defender The defending unit
   * @return A numerical value of the damage
   */
  magicalDamage(attacker: CombatableCharacter, defender: CombatableCharacter): number {
    return attacker.MATK/defender.MDEF;
  }
}

export default DamageCalculator;
