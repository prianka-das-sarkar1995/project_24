
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papper1,world,engine;
var ground,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

papper1=new papper();
//papper2= new papper()
ground= new Ground(220,620,800,10);
//dustbin=new Dustbin(400,200,200,50)
	//Engine.run(engine);
  //dustbin=createSprite(400,200,50,20)
}


function draw() {
  background(0);
  Engine.update(engine);
  papper1.display();
  ground.display();
  //dustbin.display();
 //keyPressed();
 fill("white");
 dustbin=createSprite(400,200,50,20)
}
//function keyPressed(){
  //if(keyCode === UP_ARROW){
    //Matter.Body.applyForce(papperObject.body,papperObject.body.position,{x:85,y:85});
  //}
//}


