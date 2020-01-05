const gameState = {}

function preload() {
    this.load.image('friend', 'assets/frog.png');
    this.load.image('floor', 'assets/floor.png')
    this.load.audio('croak', 'assets/frogsound.mp3');
  }
  
function create() {
  gameState.friend = this.physics.add.sprite(200, 200, 'friend')
  gameState.croak = this.sound.add('croak')
  gameState.cursors = this.input.keyboard.createCursorKeys();
  const floor = this.physics.add.staticGroup();
  floor.create(1000, 1450, 'floor');
  gameState.friend.setCollideWorldBounds(true);
  this.physics.add.collider(gameState.friend, floor)
}
  
function update() {
    if (gameState.cursors.down.isDown) {
        gameState.friend.y += 1;
        gameState.croak.play();

      }
    if (gameState.cursors.up.isDown) {
        gameState.friend.y -= 1;
        gameState.croak.play();
      }
    if (gameState.cursors.left.isDown) {
        gameState.friend.x -= 1;
        gameState.croak.play();
      }
    if (gameState.cursors.right.isDown) {
        gameState.friend.x += 1;
        gameState.croak.play();
      }
}

const config = {
      type: Phaser.AUTO,
      width: 350,
      height: 350,
      backgroundColor: "#F7E60D",
      scene: {
      create,
      preload,
      update
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 1450 },
          debug: true
        }
      }
  }
  
const game = new Phaser.Game(config)






