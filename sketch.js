const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  B1 = createImg("right.png")
  B1.position(250,30)
  B1.size(50,50)
  B1.mouseClicked(function(){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0.05,y:0})
  })
  B2 = createImg("up.png")
  B2.position(20,30)
  B2.size(50,50)
  B2.mouseClicked(function(){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0,y:-0.05})
  })
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 ball1 = new BALL (100,100,30);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ball1.show();
  Engine.update(engine);
}

