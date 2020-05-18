import { ICombatableCharacter } from './interface';
import CombatableCharacter from './combatable-character';


/**
 * Hero class is, rather than a model of character, a model of data in storage.
 * It is created to primarily work with the data drawn from storage specific to heroes.
 * Functionality related to the character should be implemented in CombatableCharacter.
 */
class Hero extends CombatableCharacter {
  constructor(data: ICombatableCharacter) {
    super(data.id, data.spriteConfig, data.stats, data.name, data.description);
  }
}

export default Hero;