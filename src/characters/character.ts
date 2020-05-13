/**
 * Base class for all characters.
 *
 */
import { ISpriteConfig } from './interfaces';


class Character {
  constructor(
    readonly id: string,
    readonly spriteConfig?: ISpriteConfig,
    readonly name?: string,
    readonly description?: string) {
  }

  toJSON() {
    return {
      id: this.id,
      spriteConfig: this.spriteConfig,
      name: this.name,
      description: this.description
    };
  }
}

export default Character;