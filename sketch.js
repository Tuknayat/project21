var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,331);
  weight = random(30,52);

  bullet = createSprite(50,200,50,20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  thickness = random(22,83);
}

function draw() {
  background(0,0,0);  
  drawSprites();

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0
    var Damage=0.5 * weight * speed* speed/(thickness* thickness* thickness);
    
    if(Damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(Damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }

  }

}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}