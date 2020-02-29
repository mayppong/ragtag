/**
 * Base class for all characters.
 *
 */
class Character {
  constructor(
    readonly id: string) {
  }

  toJSON() {
    return { id: this.id };
  }
}

export default Character;
