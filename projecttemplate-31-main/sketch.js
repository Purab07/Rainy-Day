const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var maxDrops = 100;

function preload(){
    
}

function setup(){
    createCanvas(400,800); 
    
    engine = Engine.create();
    world = engine.world;

     drops = new Drops(100,100,2,2);
}

function draw(){
    background("black");
    drops.display();
    for(var i=0; i<maxDrops;i++){
        drops.push(new Drops(random(0,400),random(0,400)))
        if(this.rain.position.y > height){
            Matter.body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
    
}   

