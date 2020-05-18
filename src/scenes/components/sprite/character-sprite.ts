import { Character, ISpriteConfig } from '../../../core/character/index';


class CharacterSprite extends Phaser.GameObjects.Sprite {
  constructor(
      readonly scene: Phaser.Scene,
      readonly character: Character,
      readonly spriteConfig: ISpriteConfig,
      position: Phaser.Types.GameObjects.Graphics.Options = {x: 0, y: 0}) {
    super(scene, position.x, position.y, spriteConfig.sprite, spriteConfig.spriteFrame);
  }
}

export default CharacterSprite;