import Party from '../../../core/party';
import CharacterSprite from './character-sprite';
import { CombatableCharacter, Character } from '../../../core/character';

class PartySprite extends Phaser.GameObjects.Group {
  static readonly defaultPosition: Phaser.Types.GameObjects.Graphics.Options = {x: 360, y: 100}

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

  setBattlePosition() {
    this.characterSprites.forEach((sprite: CharacterSprite, index: number) => {
      let x = PartySprite.defaultPosition.x + (50 * (index + 1));
      let y = PartySprite.defaultPosition.y + (100 * (index + 1));
      sprite.setX(x);
      sprite.setY(y);
      sprite.setScale(5);
      return sprite;
    });
    return this;
  }

  private addCharacterSprite(sprite: CharacterSprite) {
    this.add(sprite);
    return this;
  }
}

export default PartySprite;