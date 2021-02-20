
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3,ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bin1 = new Dustbin(500,550,10,100);
	bin2 = new Dustbin(600,550,10,100);
	bin3 = new Dustbin(550,600,100,10);
	ground = new Ground(200,610,1500,10);
	paper = new Paper(100,205,20);
  paper.scale=2
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  paper.display();
  //Matter.Body.setStatic(ground,true)
  //Matter.Body.setStatic(paperobject,true)
  drawSprites();
 
}

function keyPressed()
{
if(keyCode === UP_ARROW)
{

Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-80})
}
}

