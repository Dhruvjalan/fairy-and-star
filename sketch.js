const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var backgrnd,backimage,backload,bcksp;
var fairy,fairyimg,fairyload;
var star, star1 ,starload;
var count, music,STATE = 1;
    
function preload()
{
  backimage = loadImage("starnight.png");
 fairyload = loadImage("fairy1.png");
  starload = loadImage("star.png");
  music = loadSound("JoyMusic.mp3");

}

function setup() {
  createCanvas(800, 750);
  
  myengine = Engine.create();
myworld = myengine.world;

   //preload the images here
   backgrnd = Bodies.rectangle(400,375,800,750);
   World.add(myworld,backgrnd);
   fairy = Bodies.rectangle(100,550,20,20);
   fairyimg = createSprite(fairy.position.x,fairy.position.y,20,20);
   fairyimg.addImage(fairyload);
   fairyimg.scale = 0.21;
   fairyimg.setCollider("rectangle",530,-15,200,200)

   star = Bodies.rectangle(684 ,49,10,10);
   //star = Bodies.rectangle(100 ,49,10,10);
   

   World.add(myworld,star);
   star1 = createSprite(star.position.x,star.position.y,10,10);
   star1.addImage(starload,"star");
   star1.scale = 0.171
   star1.setCollider("rectangle",0,0,10,10)

   music.play();

  
}



function draw() {
  background(backimage);


if(keyDown(LEFT_ARROW)){
  fairyimg.x = fairyimg.x-2;
  fairy.position.x =  fairy.position.x-2; 
  if(STATE ===1){
    music.play();
    STATE = 0;
  }
} else if( keyDown(RIGHT_ARROW)) {
  fairyimg.x = fairyimg.x+ 2;
  fairy.position.x =   star.position.x+2
  if(STATE ===1){
    music.play();
    STATE = 0;
  }


   
} else if(keyDown(DOWN_ARROW)){
star1.velocityY = 5; 
}
if(star1.isTouching(fairyimg)){
  star1.velocityY = 0;
  music.stop();
if(keyDown("space")||keyDown(LEFT_ARROW)||keyDown(RIGHT_ARROW)){   
  star1.y = star.position.y
    fairyimg.x = 100;
    fairy.position.x =100;
    music.play();
  }
}
if(star1.y>760){
  console.log("im down");
  music.stop();
  star1.y = star.position.y
    fairyimg.x = 100;
    fairy.position.x =100;
    star1.velocityY = 0;
    STATE = 1;
   //music.play();

}





drawSprites();
}


