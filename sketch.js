var InvisibleGround;
var enemy, enemyImg;
var bg, bgImg;
var player, playerImg;
var villian, villianImg;
function preload()
{
  bgImg = loadImage("Images/background.png")
  enemyImg = loadImage("Images/Enemy.png")
  villianImg = loadImage("Images/Villian.png")
  playerImg = loadImage("Images/Player.png")

	
}

function setup() {
	createCanvas(800, 530);
  bg = createSprite(displayWidth/2-100, displayHeight/2-100, 800, 600)
  bg.addImage(bgImg)
  bg.scale =   1.22;

	player = createSprite(65,460, 50, 100)
  player.addImage(playerImg)
	villian = createSprite(730, 450, 50, 100)
  villian.addImage(villianImg);
  villian.scale = 0.50
  
  InvisibleGround = createSprite(400, 532, 800, 10)
 
	


	

}
function draw() {
 
  background(0);
  
 
  if(keyDown("RIGHT_ARROW")){
	player.x = player.x+20
   
  }
  if(keyDown("LEFT_ARROW")){
	player.x = player.x-20
  }
  spawnEnemy();
  drawSprites();
 
}

function spawnEnemy(){
  if(frameCount % 150 === 0){
    enemy = createSprite(780, 423, 50, 100)
    enemy.velocityX = -8
    enemy.y = Math.round(random(300,300));
    enemy.addImage(enemyImg);
    enemy.scale = 0.3;
    
    

  }
   
  

}



