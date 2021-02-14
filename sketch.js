var alien1, alien2, alien3, alien4, alien5, alien;
var alien1img, alien2img, alien3img, alien4img, alien5img;
var lola, bunny
var lolaimg, bunnyimg;
var basketball;
var basketballimg;
var restart, gameover, start, bg, logo;
var restartimg, startimg, gameoverimg, bgimg, logoimg;
var gameState = PLAY;
var PLAY = 0;
var END = 1;
var score = 0;

function preload(){
    alien1img=loadImage("alien1.jpg");
    alien2img=loadImage("alien2.png");
    alien3img=loadImage("alien3.png");
    alien4img=loadImage("Alien4.png");
    alien5img=loadImage("alien5.png");
    bunnyimg=loadImage("bunny.png");
    lolaimg=loadImage("lola.png");
    basketballimg=loadImage("basketball.png");
    restartimg=loadImage("restart.png");
    startimg=loadImage("start.png");
    gameoverimg=loadImage("gameover.png");
    bgimg=loadImage("court.jpg");
    logoimg=loadImage("logo.png");
}
function setup(){
    createCanvas(1600,1000);
    bg=creatSprite(600,400,1600,1000);
    bg.addImage(bgimg);
    bg.x=bg.width/2;
    //bg.velocityX = -2;

    bunny=createSprite(150,980,20,20);
    bunny.addImage(bunnyimg);
    bunny.scale = 0.5;
   // bunny.velocityX=3;

    lola=createSprite(1500,980,20,20);
    lola.addImage(bunnyimg);
    lola.scale = 0.5;
   // lola.velocityX=-3;

    basketball=createSprite(155,980,20,20);
    basketball.addImage(basketballimg);
    basketball.scale = 0.5;
    
    restart=createSprite(750,500,40,20);
    restart.addImage(restartimg);
    restart.scale = 1;

    start=createSprite(750,550,40,40);
    start.addImage(startimg);
    start.scale = 1;

    gameover=createSprite(750,450,40,40);
    gameover.addImage(gameoverimg);
    gameover.scale = 1;

aliensgroup=new Group();

}
function draw(){
if(mousePressedOver(start)){
gameState = PLAY;
start.visible = false;
}
if(gameState === PLAY){
    score=score+Math.round(getFrameRate()/60);

    if(keyDown("LEFT_ARROW")){
        bunny.velocityX=-3;
        bunny.velocityY=0;
    }
    if(keyDown("RIGHT_ARROW")){
        bunny.velocityX=3;
        bunny.velocityY=0;
    }
    if(keyDown("SPACE")){
        bunny.velocityY=-5;
    }
    basketball.x=bunny.x;
if(aliensgroup.isTouching(bunny)){
    gameState=END;
}
aliens();
}
else if(gameState===END){
bunny.velocityX=0;
lola.velocityX=0;
basketball.velocityX=0;
aliensgroup.setVelocityXEach(0);
aliensgroup.setVelocityYEach(0);
aliensgroup.destroyEach();
restart.visible=TRUE;
gameover.visible=TRUE;
}
if(mousePressedOver(restart)){
    gameState=PLAY;
    reset();
}

    drawSprites();
    textSize(25);
    fill("red");
    text("Score: "+score,1500,150);
}
function reset(){
    gameState=PLAY;
    restart.visible=FALSE;
    gameover.visible=FALSE;
    score=0;
    bunny.x=150;
    bunny.y=980;
}
function aliens(){
    if(frameCount % 60 ===0){
        var alien=createSprite(750,980,20,20);
        alien.velocityX=-3;
        var rand=Math.round(random(1,5));
        switch(rand){
            case 1: alien.addImage(alien1img);
            break;
            case 2: alien.addImage(alien2img);
            break;
            case 3: alien.addImage(alien3img);
            break;
            case 4: alien.addImage(alien4img);
            break;
            case 5: alien.addImage(alien5img);
            break;
        }
    alien.lifetime=533;
    aliensgroup.add(alien);
    }
}