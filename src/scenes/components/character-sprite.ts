import { Character } from "../../character/index";

interface ISpriteConfig {
  x: number,
  y: number,
  sprite: string,
  spriteFrame: number
}

class CharacterSprite extends Phaser.GameObjects.Sprite {

  constructor(
      readonly scene: Phaser.Scene,
      readonly character: Character,
      readonly spriteConfig: ISpriteConfig) {
    super(scene, spriteConfig.x, spriteConfig.y, spriteConfig.sprite, spriteConfig.spriteFrame);
  }
}

export default CharacterSprite;