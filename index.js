var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload (){
    /* Fondo */
    this.load.image('background', 'assets/img/background.png');
    /* Personaje: Jaz */
    this.load.spritesheet('Jaz', 'assets/img/Jaz-Idle.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('Jaz-W', 'assets/img/Jaz-Walk.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    /* Personaje: Julian */
    this.load.spritesheet('Julian', 'assets/img/Julian-Idle.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('Julian-W', 'assets/img/Julian-Walk.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('Julian-S', 'assets/img/Julian-Special.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    /* Personaje: Luna */
    this.load.spritesheet('Luna', 'assets/img/Luna-Idle.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('Luna-W', 'assets/img/Luna-Walk.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    /* Personaje: Tito */
    this.load.spritesheet('Tito', 'assets/img/Julian-Idle.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('Tito-W', 'assets/img/Tito-Walk.png',
            { frameWidth: 32, frameHeight: 48 }
        );
    this.load.spritesheet('Tito-S', 'assets/img/Tito-Special.png',
            { frameWidth: 32, frameHeight: 48 }
        );
}

function create (){
    console.log("P")
}

function update (){
    console.log("l")
}