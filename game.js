const gameState = {}

function preload() {
    this.load.image('friend', 'assets/frog.png');
    this.load.audio('croak', 'assets/frogsound.mp3');
  }
  
function create() {
  gameState.friend = this.add.sprite(200, 200, 'friend')
  gameState.croak = this.sound.add('croak')
  gameState.cursors = this.input.keyboard.createCursorKeys();
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
      width: 450,
      height: 350,
      backgroundColor: "#F7E60D",
      scene: {
      create,
      preload,
      update
      }
  }
  
const game = new Phaser.Game(config)






