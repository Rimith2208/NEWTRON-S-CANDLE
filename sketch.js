
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}
var world,engine
function setup() {
	createCanvas(1600, 700);
 rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof1=new Roof(800,350,width/7,20)
 bob1=new Bob(720,700,40)
 bob2=new Bob(760,700,40)
 bob3=new Bob(800,700,40)
 bob4=new Bob(840,700,40)
 bob5=new Bob(880,700,40)
 rope1=new Rope(bob1.body,roof1.body,-80,0)
 rope2=new Rope(bob2.body,roof1.body,-40,0)
 rope3=new Rope(bob3.body,roof1.body,0,0)
 rope4=new Rope(bob4.body,roof1.body,40,0)
 rope5=new Rope(bob5.body,roof1.body,80,0)

	Engine.run(engine);
  
}
 

function draw() {
  rectMode(CENTER);
  background("RED");
  roof1.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:45})
	}
}



