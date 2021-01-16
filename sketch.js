const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope
var ground1
var ground2

function setup() {
  createCanvas(3000, 800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  ground1 = new Ground(1000,550,300,20)
  ground2 = new Ground(700,400,300,20)

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  
  
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  
 
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  
  

  ball = new Ball(200, 300, 80, 80);
  rope = new Rope(ball.body, { x: 300, y: 300 });

  
  


}

function draw() {
  background(40);



  text("SCORE :"+score,400,80 )

 

  
  Engine.update(engine);
  ground.display();
  ground1.display();
  ground2.display();


  box1.display();
  box2.display();
  box3.display();
  box4.display()
  
 
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  
 
  box13.display()
  box14.display()
  box15.display()
  box16.display()
 
  
  

  ball.display();
  rope.display();

  
 



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}





function keyPressed(){
  if(keyCode === 32){
    rope.attach(this.ball)
  }
  
}

function score(){
  if(this.body, touches,box.body ){
    score++ 
}
}
