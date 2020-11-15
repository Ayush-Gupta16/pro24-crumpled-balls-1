
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperObject=new Paper(50,600,50);
paperObject.shapeColor=("pink");

groundObject=new Ground(400,670,30,800);
groundObject.shapecolor=("red");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 paperObject.display();
 groundObject.display();
 
  drawSprites();
 
}
function keyPressed()
{
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}

}

