var score=0
function preload(){
  rex=loadAnimation("trex1.png","trex3.png","trex4.png")
  grounds=loadImage("ground2.png")
  cloudexe=loadImage("cloud.png")
  ob1=loadImage("obstacle1.png")
  ob2=loadImage("obstacle2.png")
  ob3=loadImage("obstacle3.png")
  ob4=loadImage("obstacle4.png")
  ob5=loadImage("obstacle5.png")
  ob6=loadImage("obstacle6.png")
  
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(60,180,10,5)
  trex.addAnimation("sprint",rex)
  trex.scale=0.5
  ground=createSprite(300,180,600,20)
  ground.addImage(grounds)
  ground2=createSprite(300,190,600,20)
  ground2.visible=false
  
}

function draw(){
  background(180)
  textFont("Comic Sans MS")
  textSize(20)
  text("Score: "+score,450,20)
  score=score+Math.round(getFrameRate()/60)
  trex.collide(ground2)
  if(keyDown("space") && trex.y>156){
    trex.velocityY=-6
  }
  trex.velocityY=trex.velocityY+0.2
  ground.velocityX=-3
  if(ground.x<0){
    ground.x=600
  }
  clouds()
  obs()
  drawSprites()
}

function clouds(){
  if(frameCount %50===0){
  cloud=createSprite(600,random(30,100),10,10)
  cloud.velocityX = -4
  cloud.addImage(cloudexe)
  cloud.scale = 0.8
  trex.depth=cloud.depth+1
  cloud.lifetime=160
  }
}

function obs(){
  if(frameCount %60===0){
  ob=createSprite(600,165,10,10)
  ob.velocityX = -4
  ob.scale=0.5
  ob.lifetime=160
  switch(Math.round(random(1,6))){
    case 1:ob.addImage(ob1)
    break
    case 2:ob.addImage(ob2)
    break
    case 3:ob.addImage(ob3)
    break
    case 4:ob.addImage(ob4)
    break
    case 5:ob.addImage(ob5)
    break
    case 6:ob.addImage(ob6)
    break
  }
  }
}