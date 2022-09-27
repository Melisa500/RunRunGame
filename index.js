var config = {
    type: Phaser.AUTO,
    width: 1100,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var player;
var platforms;
var cursors;
var sentido = true ;


function preload (){
    /* Fondo */
    this.load.image('background', 'assets/img/background.png');
    this.load.image('ground', 'assets/img/platform.png');
    /* Personaje: Jaz */
    this.load.spritesheet('jaz', 'assets/img/jaz-idle.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('jaz-w', 'assets/img/jaz-walk.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    /* Personaje: Julian */
    this.load.spritesheet('julian', 'assets/img/julian-idle.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('julian-w', 'assets/img/julian-walk.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('julian-s', 'assets/img/julian-special.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    /* Personaje: Luna */
    this.load.spritesheet('luna', 'assets/img/luna-idle.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('luna-w', 'assets/img/luna-walk.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    /* Personaje: Tito */
    this.load.spritesheet('tito', 'assets/img/tito-idle.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('tito-w', 'assets/img/tito-walk.png',
            { frameWidth: 28, frameHeight: 46, margin: 2, spacing: 19,}
        );
    this.load.spritesheet('tito-s', 'assets/img/tito-special.png',
            { frameWidth: 32, frameHeight: 48 }
        );


}

function create (){
    /* BACKGROUND - Posicion y escala*/
    this.add.image(400, 300, 'background').setScale(0.8);

    /* start platforms */
    platforms = this.physics.add.staticGroup();

    platforms.create(400, 640, 'ground').setScale(4).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
    /* end platforms */

    player = this.physics.add.sprite(100, 400, 'tito-w').setScale(3);

    player.setBounce(0.2); /* rebote */
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('tito-w', { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1,
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'tito-w', frame: 1 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('tito-w', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(player, platforms);


}

function update (){
    if (cursors.left.isDown){
        player.setVelocityX(-200);
        player.anims.play('left', true);
        if (sentido){
            player.toggleFlipX()
            sentido = !sentido
        }



    }else if (cursors.right.isDown){
        player.setVelocityX(200);
        player.anims.play('right', true);
        if (!sentido){
            player.toggleFlipX()
            sentido = !sentido
        }



    }else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    
    if (cursors.up.isDown && player.body.touching.down){
        player.setVelocityY(-330);
    }
}