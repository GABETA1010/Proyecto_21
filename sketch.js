
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ballOptions; 
var ground,wall,wall2;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.


	Engine.run(engine);

ballOptions = {
 restitution: 0.7,
 friction: 0,
 density: 1.2
}	  

ball = Bodies.circle(300,20,20,ballOptions);
World.add(world,ball);

ground = new Ground(500,800,1000,20);
wall = new Ground(700,790,20,120);
wall2 = new Ground(900,790,20,120);

}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white");
  ellipse(ball.position.x,ball.position.y,20);

  ground.display();
  wall.display();
  wall2.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode == RIGHT_ARROW){
     Matter.Body.applyForce(ball,ball.position,{x:40,y:-40});		
    

	}
}


