const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var dustbin
var ball;
var launcher;

function preload()
{

}

function setup() {
	createCanvas(1350, 605);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-10,width,20);

  ball = new PaperBall(100,585,50);
  
 dustbin = new Dustbin(1200,585);

 launcher = new Launcher(ball.body,{x: 200,y: 350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  dustbin.display();
  launcher.display();
 
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}

