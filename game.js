const gameState = {score: 0}

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

  gameState.scoreText = this.add.text(195, 485, 'Score: 0', { fontSize: '15px', fill: '#000000' })

  const stars = this.physics.add.group().setScale(.5);;
  function makeStar() {
    let xCoord = Math.random() * 450;
    stars.create(xCoord, 10, 'star');
  }

  const makeStarLoop = this.time.addEvent({
    callback: makeStar,
    delay: 5000,
    callbackScope: this,
    loop: true,
  });

  this.physics.add.collider(stars, floor, function(star) {
    star.destroy();
    gameState.score += 10;
    gameState.scoreText.setText(`Score: ${gameState.score}`)
  });

  this.physics.add.collider(gameState.player, bugs, () => {
    bugGenLoop.destroy();
    this.physics.pause();
    this.add.text(200, 200, 'Game Over', {fontSize: '30px', fill: '#000000'})
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
      backgroundColor: "#FDFEFE",
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






