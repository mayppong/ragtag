import 'phaser';

import BootScene from './scenes/boot';
import BattleScene from './scenes/battle';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Ragtag',
  backgroundColor: 0x000000,

  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    //we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: [BootScene, BattleScene]
};

const game = new Phaser.Game(gameConfig);