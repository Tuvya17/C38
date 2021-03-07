const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var divisions = [];
var plinkos = [];
var particles = [];
var particle;
var score;
var turn;
var gameState;


function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(800,800);
  score = 0;
  turn = 0;
  ground = new Ground(400,790,800,20);

  gameState = "play";
  
  for (var k = 0; k <=width; k = k + 80) { 
    divisions.push(new Divisions(k, height-300/2, 10, 300)); 
  }

  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75,10)); 
  }

  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,150,10)); 
  }

  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,225,10)); 
  }

  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,300,10)); 
  }

  
}

function draw() {
  background("black");  
  
  Engine.update(engine);
  ground.display();
  
  
  textSize(25);
  fill("white");
  text("SCORE: "+ score,20,40);
  text("100",418,510);
  text("200",498,510);
  text("500",578,510);
  text("500",658,510);
  text("500",738,510);
  text("100",338,510);
  text("200",258,510);
  text("500",178,510);
  text("500",98,510);
  text("500",18,510);

  
  for (var k = 0; k < divisions.length; k++) {
     divisions[k].display(); 
  }
  
  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display(); 
 }

 if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
  } 
 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display(); 
}

 //console.log(plinkos.x);

 if(particle !== null){
   particle.display();
 
 if(particle.body.position.x<300){
   score = score + 500;
 }
 else if(particle.body.position.x>300 && particle.body.position.x<400){
   score = score + 400;
 }
 else if(particle.body.position.x>400 && particle.body.position.x<600){
   score = score + 100;
 }
 else if(particle.body.position.x>600 && particle.body.position.x<700){
   score = score + 200;
 }
 else if(particle.body.position.x>700){
   score = score + 500;
 }
}
}

function keyPressed(){
  if(gameState !== "end"){
    
    particle=new Particle(mouseX,10,10);
    console.log("particle");
  }
}