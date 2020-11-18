const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint
const Bodies = Matter.Bodies

var engine,world;
function setup() {
  createCanvas(800,400);  
engine = Engine.create()

//level one
 block1 = new block(330,235,30,40);
 block2 = new block(330,235,30,40);
 block3 = new block(330,235,30,40);
 block4 = new block(330,235,30,40);
 block5 = new block(330,235,30,40);
 block6 = new block(330,235,30,40);

 //level two
 block7 = new block(330,235,30,40);
 block8 = new block(330,235,30,40);
 block9 = new block(330,235,30,40);
 block10 = new block(330,235,30,40);
 block11 = new block(330,235,30,40);
 block12 = new block(330,235,30,40);
 block13 = new block(330,235,30,40);
 block14 = new block(330,235,30,40);
 block15 = new block(330,235,30,40);

 //level three
 block16 = new block(330,235,30,40);
 block17 = new block(330,235,30,40);
 block18 = new block(330,235,30,40);

 //creating slingShot
 
world = engine.World;
}

function draw() {
  background(255);  
  Engine.update(engine)
  display()
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();

    block16.display();
    block17.display();
    block18.display();
   
  }
