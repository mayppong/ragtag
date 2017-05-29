/**
 * Base class for all characters.
 *
 */
class Character {
  constructor(
    readonly name: string ) {
  }

  toJSON() {
    return {name: this.name};
  }
}

export default Character;
