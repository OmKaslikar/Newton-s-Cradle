
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	
bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);

  ground1 = new Roof(300,100,300,40);
  rope1= new Rope(bob1.body,ground1.body,-50*2,0);
  rope2= new Rope(bob2.body,ground1.body,-25*2,0);
  rope3= new Rope(bob3.body,ground1.body,-0*2,0);
  rope4= new Rope(bob4.body,ground1.body,25*2,0);
  rope5= new Rope(bob5.body,ground1.body,50*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  background("pink");

  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  ground1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
  keyPressed();

  fill("red");
  textSize(20);
  text("Newton's cradle is a device that demonstrates conservation of momentum and energy  ",10,600);
  text("using a series of swinging spheres. When one sphere at the end is lifted and released,",10,650); 
  text("it strikes the stationary spheres, transmitting a force through the stationary spheres",10,700); 
 text(" that pushes the last sphere upward.",10,750); 
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 


