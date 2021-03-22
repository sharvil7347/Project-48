var street, streetImage;
var waterImage;
var garbage1Image,garbage2Image;
var PLAY=1;
var gameState = PLAY;
var runner,runnerImage;

function preload(){
  streetImage = loadImage("Road.png");
  runnerImage = loadAnimation("runner1.png","runner2.png");
  waterImage = loadImage("Water.png");
  garbage1Image = loadImage("Can.png");
  garbage2Image = loadImage("Banana.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  street=createSprite(width/2,height,width,2);
  street.addImage(streetImage);
  street.velocityY=1;
  
  runner=createSprite(width/2,height-70,50,20);
  runner.addAnimation("running",runnerImage);
  runner.scale=0.10;

  GarbageGroup = createGroup();
}

function draw() {
  background(0);
  runner.x = World.mouseX;
  if(street.y > 400){
    street.y = 300
  }
  text("score:",width/2,height+70);
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if (frameCount % 120 === 0){
    var obstacle = createSprite( Math.round(random(width/2,height-120,10,40)));
    
     //generate random obstacles
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(garbage1Image);
               break;
       case 2: obstacle.addImage(garbage2Image);
               break;
       case 3: obstacle.addImage(waterImage);
               break;
               
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.08;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     GarbageGroup.add(obstacle);
  }
 }