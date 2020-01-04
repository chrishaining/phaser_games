const gameState = {}

function preload() {
    // this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
    this.load.image('friend', '/assets/frog.png');
  }
  
function create() {
  // gameState.codey = this.add.sprite(100, 100, 'codey')
  gameState.friend = this.add.sprite(200, 200, 'friend')
  gameState.cursors = this.input.keyboard.createCursorKeys();
}
  
function update() {
    if (gameState.cursors.down.isDown) {
        gameState.friend.y += 1;
      }
    if (gameState.cursors.up.isDown) {
        gameState.friend.y -= 1;
      }
    if (gameState.cursors.left.isDown) {
        gameState.friend.x -= 1;
      }
    if (gameState.cursors.right.isDown) {
        gameState.friend.x += 1;
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






