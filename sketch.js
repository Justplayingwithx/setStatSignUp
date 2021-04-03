const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var rockObject;

var player;
var rockCollisionObject,playerCollisionObject;

var over;
var score;


function setup() {
  createCanvas(500,500);


  score = 0;
  

  engine = Engine.create();

  world = engine.world;

  Engine.run(engine);

  over = false;

  rockObject = new Rock(50,50); 

  player = new Player(100,250,40,40)

  rockCollisionObject = createSprite(rockObject.body.position.x,rockObject.body.position.y,rockObject.w,rockObject.h)
  playerCollisionObject = createSprite(player.body.position.x,player.body.position.y,player.w,player.h)

  rockCollisionObject.visible = false;
  playerCollisionObject.visible = false;

 

//player = createSprite(100,250,40,40)


 


}

function draw() {
  background(255,255,255);  
  rockObject.display();
  rockObject.setVelocity();

  rockCollisionObject.x = rockObject.body.position.x;
  rockCollisionObject.y = rockObject.body.position.y;

  playerCollisionObject.x = player.body.position.x;
  playerCollisionObject.y = player.body.position.y;



  player.display()

  if(rockObject.body.position.x<-20){
    rockObject.body.position.x = 500;
    rockObject.body.position.y = Math.round(random(10,490))
  }

  if(keyDown(UP_ARROW)||keyDown("w")){
    player.keyDown("up")
  }
  else if(keyDown(DOWN_ARROW)||keyDown("s")){
    player.keyDown("down")
  }

  /*if(rockObject.body.position.x  === player.body.position.x||rockObject.body.position.x === player.body.position.x + 1||rockObject.body.position.x  === player.body.position.x+2||rockObject.body.position.x  === player.body.position.x+3||rockObject.body.position.x  === player.body.position.x+4||rockObject.body.position.x  === player.body.position.x+5||rockObject.body.position.x  === player.body.position.x+6||rockObject.body.position.x  === player.body.position.x+7||rockObject.body.position.x  === player.body.position.x+8||rockObject.body.position.x  === player.body.position.x+9||rockObject.body.position.x  === player.body.position.x+10||rockObject.body.position.x  === player.body.position.x+11||rockObject.body.position.x  === player.body.position.x+12||rockObject.body.position.x  === player.body.position.x+13||rockObject.body.position.x  === player.body.position.x+14||rockObject.body.position.x  === player.body.position.x+15||rockObject.body.position.x  === player.body.position.x+16||rockObject.body.position.x  === player.body.position.x+17||rockObject.body.position.x  === player.body.position.x+18||rockObject.body.position.x  === player.body.position.x+19||rockObject.body.position.x  === player.body.position.x+20){
if(rockObject.body.positiion.y === player.body.position.y||rockObject.body.positiion.y === player.body.position.y+1)
  }*/

  if(playerCollisionObject.isTouching(rockCollisionObject)&&over === false){
    console.log("over")
    
    over = true;
  }


 
  drawSprites();
if (over === false){
  score = score + 1;
text("Score: "+score,100,30)
}

if(over === true){
  rockObject.body.position.x = -30
    text("Game over!",300,30)
}
  

}
