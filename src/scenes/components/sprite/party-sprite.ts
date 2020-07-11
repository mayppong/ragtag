import Party from '../../../core/party';
import CharacterSprite from './character-sprite';
import { CombatableCharacter } from '../../../core/character';

/**
 * PartySprite is the base class for a grouping of character sprites.
 *
 */
class PartySprite extends Phaser.GameObjects.Group {

  get characterSprites(): Phaser.GameObjects.GameObject[] { return this.getChildren(); }

  constructor(
      readonly scene: Phaser.Scene,
      readonly party: Party) {
    super(scene);
      this.addParty(party);
  }

  addParty(party: Party) {
    party.members.map((char: CombatableCharacter, index: number) => {
      let sprite = new CharacterSprite(this.scene, char, char.spriteConfig);
      return this.addCharacterSprite(sprite);
    });

    return this;
  }

  private addCharacterSprite(sprite: CharacterSprite) {
    this.add(sprite);
    return this;
  }
}

export default PartySprite;