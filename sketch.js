const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var thunder;

function preload() {
  thunder1 = loadImage("1.png")
  thunder2 = loadImage("2.png")
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(200,350,1500,20);
man1 = new Man(450,330);
    
    
}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    man1.display();

    
    
}

// function thunder(){
//     if(frameCount%80===0){
//         thunderCreatedFrame=frameCount;
//         thunder = createSprite(random(10,370), random(10,30),10,10);
//         switch(rand){
//             case 1: thunder.addImage(thunder1);
//             break;
//             case 2: thunder.addImage(thunder2);
//             break;
//             default: break;
//         }
//         thunder.scale = random(1.2,1.6);
//     }
    
// }