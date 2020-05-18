export interface ISpriteConfig {
  sprite: string,
  spriteFrame?: number
}

export interface IAttributes {
  HP: number;
  MP: number;
  PATK: number;
  PDEF: number;
  MATK: number;
  MDEF: number;
}

export interface ICharacter {
  id: string,
  spriteConfig?: ISpriteConfig,
  name?: string,
  description?: string,
}

export interface ICombatableCharacter extends ICharacter {
  stats: IAttributes
}