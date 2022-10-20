var boy, boyImg
var beach, beachImg

function preload(){
boyImg = loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png","run7.png","run8.png","run9.png","run10.png","run11.png","run12.png",)
beachImg = loadImage("background_beach.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  beach=createSprite(width/2, height-289, width,20)
  beach.addImage(beachImg);
  beach.velocityX = -4
  beach.scale = 0.41



  boy = createSprite(50,height-120,20,50);
  boy.addAnimation("running",boyImg)
  boy.scale=0.3
}

function draw() {
  background("white")

   if(beach.x < width/4+200){
     beach.x = width/2
     console.log (width/4)
 }
  
 if ((touches.length > 0 &&boy.y>height-400) || (keyDown("space")&& boy.y>height-400)){
  boy.velocityY = -10;
  touches = []
  console.log(boy.y)
}




  drawSprites();
}