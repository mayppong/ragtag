import 'phaser';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',

  type: Phaser.AUTO,
  width: 800,
  height: 600,

  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
  },

  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },

  backgroundColor: '#0000F0',
};

const game = new Phaser.Game(gameConfig);