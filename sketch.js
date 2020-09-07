var wall, thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,50);
  bullet=createSprite(50,200, 50, 50);
  wall=createSprite(1200, 200, thickness, height/2);
  
  bullet.velocityX=speed;
}

function draw() {
  bullet.collide(wall);
  wall.shapeColor=color(80,80,80); 
  if (bullet.collide(wall)){
    bullet.velocityX=0;
    if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      bullet.shapeColor=color(225,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<180){
      bullet.shapeColor=color(0,225,0);
    }

  }
}
  background(255,255,255);  
  drawSprites();
}