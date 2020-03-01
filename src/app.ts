import 'phaser';

import BootScene from './scenes/boot';
import BattleScene from './scenes/battle';

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
  scene: [BootScene, BattleScene]
};

const game = new Phaser.Game(gameConfig);