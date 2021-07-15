var charles
function setup() {
  createCanvas(1000,1000);
  charles = createSprite(200,200,500,20);
}

function draw() 
{
  
  if(keyIsDown(RIGHT_ARROW))
  {
    background("GREEN");
  } 
  if(keyIsDown(LEFT_ARROW))
  {
    background("YELLOW");
  } 
  if(keyIsDown(DOWN_ARROW))
  {
    background("BLUE");
  } 
  if(keyIsDown(UP_ARROW))
  {
    background("RED");
  } 
drawSprites();
}





