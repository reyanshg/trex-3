var trex, trex_running, trex_collided;
var ground, groundImage, invisibleGround;
var cloudimage

function preload() {

    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png");
    cloudimage=loadImage("cloud.png")
}


function setup() {

    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;

    

}


function draw() {

    background(150);
    var dice = Math.round(random(1,6));
    //console.log(dice);

    //console.log(trex.y);

    //jump when the space button is pressed
    if (keyDown("space") && trex.y> 161) {
        trex.velocityY = -10;
    }

    //gravity
    trex.velocityY = trex.velocityY + 0.8;

    //infite ground
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }

    trex.collide(invisibleGround);
    spawnClouds();
    //console.log(frameCount);

    drawSprites();

}


function spawnClouds(){

    if(frameCount % 80 ==0){
        var cloud = createSprite(600,100,20,20);
        cloud.velocityX=-3;
        cloud.addImage(cloudimage)
        cloud.scale=0.1;
        cloud.y = Math.round(random(50,120));

        console.log(cloud.depth);
        console.log("TD:"+trex.depth);

        trex.depth = cloud.depth +1;
    }

    
}
 