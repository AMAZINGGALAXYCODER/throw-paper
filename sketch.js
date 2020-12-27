
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,800);


	engine = Engine.create();
	world = engine.world;


	paper = new crumpledpaper(100,300,100,100);
  grOUnd = new Ground(650,700,1800,20);
  brick1= new bin(930,664,100,100)
  brick2= createSprite(980,664,20,100)
  brick3= createSprite(880,664,20,100)
  brick4= createSprite(955,700,245,20)
  

	Engine.run(engine);
   
}


function draw() {
  background(255);
  Engine.update(engine);
  rectMode(CENTER);

  paper.display();
  grOUnd.display();
  brick1.display();
  brick3.display();
  
  drawSprites();
 
}


function keyPressed() {

   if (keyCode === UP_ARROW){

     Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

   }

}



