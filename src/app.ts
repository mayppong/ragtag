import 'phaser';
import * as Scene from './scenes';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Ragtag',
  backgroundColor: 0x000000,

  type: Phaser.AUTO,
  width: 540,
  height: 960,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: [Scene.BootScene, Scene.BattleScene]
};

const game = new Phaser.Game(gameConfig);