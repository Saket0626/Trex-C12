
var trex, trex_running, groundImage;
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundImage = loadImage("ground2.png")
  cloudImage = loadImage("cloud.png")

}

function setup() {
  createCanvas(600, 200)

  //create a trex sprite
  trex = createSprite(50, 160, 20, 50)
  trex.addAnimation("running", trex_running)
  edges = createEdgeSprites()
  //adding scale and position to trex
  trex.scale = 0.5
  trex.x = 50
  //create ground sprite
  ground = createSprite(200, 180, 400, 20)
  ground.addImage("ground", groundImage)
  ground.x = ground.width / 2
  // create invisible ground sprite
  invisibleGround=createSprite(200,190,400,10)
  invisibleGround.visible=false
  var ran=Math.round(random(10,60))
  console.log(ran)
}

function draw() {
  background("white");
  console.log(trex.y)
  ground.velocityX = -2
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  console.log("trex runner")
  console.log(trex.y)
  //jump when space key is pressed
  if (keyDown("space")&&(trex.y>=160)) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5
  //stop trex from falling down
  trex.collide(invisibleGround)
  spawnclouds()
  drawSprites()
console.log(frameCount)
}

function spawnclouds(){
  if(frameCount%60===0){
  cloud=createSprite(600,100,40,10)
  cloud.addImage(cloudImage)
  cloud.y=Math.round(random(10,60))
  cloud.scale=0.4
  cloud.velocityX=-3

  //adjust the depth
  cloud.depth=trex.depth 
  trex.depth=trex.depth+1
  }
}
