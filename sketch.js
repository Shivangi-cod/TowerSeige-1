
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1200,500);

	engine = Engine.create();
	world = engine.world;

    stand1 = new Ground(500,400,300,10);
    block1 = new Block (520,380,30,50);
    
    block2 = new Block (327,350,30,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(32);

  stand1.display();

  block1.display();
  block2.display();
  
  drawSprites();
 
}

