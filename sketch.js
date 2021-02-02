const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var object;
var fairy;
var fairyImg;
var background1;
var backgroundImg;
var star;
var starImg;
var starBody;

function preload()
{
   fairyImg = loadImage("images/fairy1.png");
   backgroundImg = loadImage('images/starnight.png');
   starImg = loadImage('images/star.png');
}

function setup() {
  createCanvas(800, 750);

  background1 = createSprite(400,375,800,750);
  background1.addImage('running', backgroundImg);
  
  engine = Engine.create();
  world = engine.world;

  fairy = createSprite(100,565,20,20);
  fairy.addImage("running", fairyImg);
  fairy.scale = 0.2;

  star = createSprite(700,50,10,10);
  star.addImage('running', starImg);
  star.scale = 0.3;

  var options_starBody = {

    restitution : 0.5 , isStatic : true

  }

  starBody = Bodies.circle(700,50, 10, options_starBody);
  World.add(world, starBody);
}


function draw() {
  background(0);

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(star.y > 505 && starBody.position.y > 505){
    Matter.Body.setStatic(starBody, true);
  }

  Engine.update(engine);
  drawSprites();
}

function keyPressed(){

  if (keyCode == LEFT_ARROW){
    fairy.velocityX = -5;
  }
  if (keyCode == RIGHT_ARROW){
    fairy.velocityX = 5;
  }
  if (keyCode == UP_ARROW){
    fairy.velocityX = 0;
  }
  if(keyCode == DOWN_ARROW){
    Matter.Body.setStatic(starBody,false);
  }

}