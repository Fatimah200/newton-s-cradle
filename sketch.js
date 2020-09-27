
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bob0bj5;
var roofObj;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObj1=new Bob(200,200,30);
bobObj2=new Bob(233,200,30);
bobObj3=new Bob(266,200,30);
bobObj4=new Bob(299,200,30);
bob0bj5=new Bob(332,200,30);

roofObj=new ground(265,90,170,30);

rope1=new rope(bobObj1.body,roofObj.body,-bobDiameter*2,0);
rope2=new rope(bobObj2.body,roofObj.body,-bobDiameter*2,0);
rope3=new rope(bobObj3.body,roofObj.body,-bobDiameter*2,0);
rope4=new rope(bobObj4.body,roofObj.body,-bobDiameter*2,0);
rope5=new rope(bobObj5.body,roofObj.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bob0bj5.display();

  groundObj.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();

  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:20,y:-20});
  
  }
}

