
function preload() {

gardenImg = loadImage("images/garden.png");
jerry1 = loadAnimation("images/mouse1.png");
tom1 = loadAnimation("images/cat1.png");
jerry23 = loadAnimation("images/mouse2.png","images/mouse3.png")
tom23 = loadAnimation("images/cat2.png","images/cat3.png");
tom4 = loadAnimation("images/cat4.png");
jerry4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    jerry = createSprite(200,600);
    jerry.scale=0.1;
    jerry.addAnimation("orginaljerry",jerry1);
    

    tom = createSprite(800,600);
    tom.scale=0.2;
    tom.addAnimation("originaltom",tom1);
}
function draw() {

    background(gardenImg);
    if(tom.x-jerry.x <(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("endtom",tom4);
        tom.changeAnimation("endtom");
        jerry.addAnimation("endjerry",jerry4);
        jerry.changeAnimation("endjerry",jerry4);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        tom.velocityX=-4;
        tom.addAnimation("runningtom",tom23);
        tom.changeAnimation("runningtom");
        jerry.addAnimation("jerrychanges",jerry23);
        jerry.changeAnimation("jerrychanges");
    }

}
