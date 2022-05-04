var path,spaceship,coin,boy,gameover,gun;
var pathImg,spaceshipImg,coinImg,boyImg,gameoverImg,gunImg;
var coinGroup,boyGroup,gunGroup;
var score=0;
var PLAY =1;
var END =0
var gameState=1;

function preload(){
pathImg= loadImage("0fddac558a75c655d038a01b5610aef3.jpg");
spaceshipImg= loadAnimation("istockphoto-949400776-612x612.jpg","alien ship2.png");
coinImg= loadImage("psd-gold-coin-icon-45928.jpg");
boyImg= loadImage("Astronaut-clipart-transparent-3.png");
gameoverImg= loadAnimation("e9252025e2f4a9aaf0aa7e0b9091a088.jpg");
gunImg= loadImage("11-115873_pistol-clipart-squirt-gun-clip-art.png");


}

function setup() {
 createCanvas(windowWidth,windowHeight);

path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY=-4;

spaceship= createSprite(width/2,height-20,20,20);
spaceship.addAnimation(spaceshipImg);
spaceship.scale=1;

cashGroup= new Group();
boyGroup= new Group();
gunGroup= new Group();
}

function draw() {

if(gameState===PLAY){
background(0);
spaceship.x = World.mouseX;

edges= createEdgeSprites();
spaceship.collide(edges)

if(path.y > height){
    path.y = height/2
}



if (coinGroup.isTouching(spaceship)){
coinGroup.destoryEach();
score=score+100
}
else if (gunGroup.isTouching(spaceship)){
    gunGroup.destoryEach();
    score=score+200
}
else if (boyGroup.isTouching(spaceship)){
    gameState=END;
spaceship.addAnimation(gameoverImg)
spaceship.x=width/2;
spaceship.y=height/2;
spaceship.scale=0.6;

//coinGroup.destoryEach();
//gunGroup.destoryEach();
//boyGroup.destoryEach();

//coinGroup.setVelocityEach(0);
//gunGroup.setVelocityEach(0);
//boyGroup.setVelocityEach(0);

}
}
//createcoin();
//createboy();
//creategun();


 drawSprites()
//testSize(20);
//fill(255);
//text("score:" + score,width-150,30);
}

//function createcoin(){

//if(World.frameCount % 320 == 0){
//coin = createSprite(Math.round(random(50, width-50),40,10,10));
//coin.addImage(coinImg);
//coin.scale= 0.12;
//coin.velocityY =5;
//coin.lifetime = 200;
//coinGroup.add(coin);

//}
//}

//function creategun() {
 //if(World.framecount % 320 ==0){
//gun = createSprite(Math.round(random(50,width-50),40,10,10));
//gun.addImage(gunImg);
//gun.scale=0.12;
//gun.velocityY =5;
//gun.lifetime = 200;
//gunGroup.add(gun);
 //}
//}




//function createboy(){
 //   if(World.framecount % 320 ==0){
//boy = createSprite(Math.round(random(50,width-50),40,10,10));
//boy.addImage(boyImg);
//boy.addscale=0.12;
//boy.velocityY=5;
//boy.lifetime=200;
//boyGroup.add(boy);
  //  }
//}


