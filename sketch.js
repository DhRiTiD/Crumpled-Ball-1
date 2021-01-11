//NameSpaces
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//global variables
var engine, world;
var box1, box2, box3;
var ground, paper;

//preload function
function preload(){}

function setup() {
	createCanvas(1200, 400);

	//add Engine to variable
	engine = Engine.create();
	//add engine to world
	world = engine.world;

	//create objects using their particular blu-prints
	paper = new Paper(150, 320, 25);
	box1 = new Bin(825, 330, 15, 110);
	box2 = new Bin(900, 380, 137, 15);
	box3 = new Bin(975, 330, 15, 110);
	ground = new Ground(600, 392, 1200, 15);

	//run the engine
	Engine.run(engine);
  }

  function draw() {
  rectMode(CENTER);
  background(0);
  
  //display
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();

  //display output
  drawSprites();
}

//function key presssed
function keyPressed(){
	if(keyCode === UP_ARROW){
	  Body.applyForce(paper.body, paper.body.position,{x:115,y:-115});
	}
}
/*
#DhRiTiD
#DD
*/