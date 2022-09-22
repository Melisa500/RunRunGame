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
    console.log("H")
}

function create (){
    console.log("P")
}

function update (){
    console.log("l")
}