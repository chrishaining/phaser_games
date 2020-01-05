const gameState = {}

function preload() {
    this.load.image('frog', 'assets/frog.png');
    this.load.image('floor', 'assets/floor.png');
    this.load.image('star', 'assets/star.png')
    this.load.audio('croak', 'assets/frogsound.mp3');
  }
  
function create() {
  gameState.frog = this.physics.add.sprite(200, 400, 'frog')
  gameState.croak = this.sound.add('croak')
  gameState.cursors = this.input.keyboard.createCursorKeys();
  const floor = this.physics.add.staticGroup();
  floor.create(225, 510, 'floor');
  gameState.frog.setCollideWorldBounds(true);
  this.physics.add.collider(gameState.frog, floor)

  const star = this.physics.add.group();
  function makeStar() {
    let xCoord = Math.random() * 450;
    star.create(xCoord, 10, 'star');
  }
  // makeStar();

  const makeStarLoop = this.time.addEvent({
    callback: makeStar,
    delay: 150,
    callbackScope: this,
    loop: true,
  })

}
  
function update() {
    if (gameState.cursors.down.isDown) {
        gameState.frog.y += 1;
        gameState.croak.play();

      }
    if (gameState.cursors.up.isDown) {
        gameState.frog.y -= 1;
        gameState.croak.play();
      }
    if (gameState.cursors.left.isDown) {
        gameState.frog.x -= 1;
        gameState.croak.play();
      }
    if (gameState.cursors.right.isDown) {
        gameState.frog.x += 1;
        gameState.croak.play();
      }
}

const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 500,
      backgroundColor: "#F7E60D",
      scene: {
      create,
      preload,
      update
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: true
        }
      }
  }
  
const game = new Phaser.Game(config)






