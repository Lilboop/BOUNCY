const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var options={
        isStatic:true
    }

    ground = Bodies.rectangle(200,390,400,20,options);
    World.add(world,ground);

 var ballOption={
     restitution: 1.5
 }   


    ball= Bodies.circle(100,100,20,ballOption);
    World.add(world,ball);
    var ball2Option={
        restitution: 1.5
    }

    ball2= Bodies.circle(300,300,20,ball2Option);
      
    World.add(world,ball2);


     

    console.log(ground);
}



function draw(){
    background(230,230,250);
    Engine.update(engine);
    rectMode(CENTER);
      fill("green")
      rect(ground.position.x,ground.position.y,400,20);
  
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(ball2.position.x,ball2.position.y,20,20);
    fill("skyblue")
    ellipse(ball.position.x,ball.position.y,20,20)
} 