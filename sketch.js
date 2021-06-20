
var trex ,trex_running;
var edges;
var ground,groundImg;
var invisibleGround;
var cloudImg;
var arr=["a","b",1,4]
function preload(){
 
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
groundImg=loadImage("ground2.png")
cloudImg=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,70);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;

  edges=createEdgeSprites();

  ground=createSprite(600,180,1200,10);
  ground.addImage(groundImg);

  invisibleGround=createSprite(50,190,100,5);
  invisibleGround.visible=false;

 
}

function draw(){
  background(0);
  if(keyDown("space") && trex.y>164){
    trex.velocityY=-12;
  }
 // console.log(trex.y);

  ground.velocityX=-4;

  if(ground.x<0){
    ground.x=ground.width/2;
  }
  trex.velocityY =trex.velocityY+0.5;

  trex.collide(invisibleGround)
  drawSprites();

 // console.log(Math.round(random(1,10)))
search(arr,20);
 spawnclouds();
}

function spawnclouds(){

  if(frameCount%60===0){

      var cloud=createSprite(600,50,30,30);
      cloud.velocityX=-2;
      cloud.y=Math.round(random(20,80));
      cloud.addImage(cloudImg);
      cloud.scale=0.5;
      trex.depth=cloud.depth+1;
  }


}

function search(arr,x){

for(var i =0;i<arr.length;i++){
  arr[i]===x;
  
  console.log("element exists")
}
 

}