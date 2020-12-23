var speed,weight;
var car,wall;
var line1,line2,line3;


function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  line1 = createSprite(800,95,1600,7);
  line1.shapeColor =color(255,255,255);

  line2 = createSprite(800,305,1600,7);
  line2.shapeColor =color(255,255,255);

  for(i = 0; i < 1500; i = i + 60){

    line3 = createSprite (i,200,30,7);
    line3.shapeColor = "white";
  
    }

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = color(0,0,0);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor =(80,80,80);

}

function draw() {
  background("grey"); 
  car.velocityX = speed;

  if(wall.x - car.x < (car.width + wall.width)/2){

  car.velocityX = 0;
  car.x = 1446;

  var deformation = Math.round(0.5 * weight * speed * speed/22500);

  textSize(60);
  fill ("white");
  text("Speed : " + speed,200,70);

  text("Weight : " + weight,600,70);

  text("Deformation : " + deformation,1050,70);

  fill (0,255,0);
  text("0 ~ 100",200,370);

  fill (230,230,0);
  text("100 ~ 180",600,370);

  fill (255,0,0);
  text("more than 180",1000,370);

  if(deformation > 180){

  car.shapeColor =color(255,0,0);

  }
  
  if(deformation < 180 && deformation > 100){

  car.shapeColor =color(230,230,0);

  }
  
  if(deformation < 100){

  car.shapeColor =color(0,255,0);

   }
  }
  
  drawSprites();
}