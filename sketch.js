var player
var obstacle1 , obstacle2 , obstacle3 , obstacle4
var wall2,wall1,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20
var wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30, wall31
var edges
var key, keyGroup
var button


function preload(){  //xywidthheight

playerImage=loadImage("boy.png")
obstacle1Image=loadImage("c1.png")
keyImage=loadImage("key.png")


}



/*function setup(){
createCanvas(1090,720)

 player=createSprite(30,40,10,10)
player.addImage(playerImage)
player.scale=0.06

 obstacle1=createSprite(140,206,10,10)
obstacle1.addImage(obstacle1Image)
obstacle1.scale=0.06
obstacle1.velocityY=2

 key=createSprite(64,266,10,10)
 key.addImage(keyImage)
key.scale=0.06




 wall1=createSprite(5,80,100,10)
 wall2=createSprite(110,10,10,100)
 wall3=createSprite(154,65,100,10)
 wall4=createSprite(50,140,10,125)
 wall5=createSprite(90,180,10,132)
 wall6=createSprite(134,109,100,10)
 wall7=createSprite(30,200,50,10)
 wall8=createSprite(69,245,50,10)
 wall9=createSprite(46,290,10,100)
 wall10=createSprite(90,340,100,10)
 wall11=createSprite(57,385,160,10)
 wall12=createSprite(135,360,10,52)
 wall13=createSprite(207,17,10,100)
 wall14=createSprite(193,109,100,10)
 wall15=createSprite(247,87,10,60)
 wall16=createSprite(293,52,100,10)
 wall17=createSprite(341,99,10,100)
wall18=createSprite(391,49,10,200)
 wall19=createSprite(297,150,100,10)
 wall20=createSprite(297,200,100,10)  
 wall21=createSprite(392,168,10,190)
 wall22=createSprite(204,150,100,10) 
 wall23=createSprite(246,245,10,100)
 wall24=createSprite(143,291,200,10)
 wall25=createSprite(125,150,60,10)
 wall26=createSprite(343,232,10,70)
 wall27=createSprite(366,269,60,10)
 wall28=createSprite(392,308,10,100)
 wall29=createSprite(340,308,10,100)
 wall30=createSprite(366,356,60,10)
 
wall1.shapeColor="red"
wall2.shapeColor="red"
wall3.shapeColor="red"
wall4.shapeColor="red"
wall5.shapeColor="red"
wall6.shapeColor="red"
wall7.shapeColor="red"
wall8.shapeColor="red"
wall9.shapeColor="red"
wall10.shapeColor="red"
wall11.shapeColor="red"
wall12.shapeColor="red"
wall13.shapeColor="red"
wall14.shapeColor="red"
wall15.shapeColor="red"
wall16.shapeColor="red"
wall17.shapeColor="red"
wall18.shapeColor="red"
wall19.shapeColor="red"
wall20.shapeColor="red"
wall21.shapeColor="red"
wall22.shapeColor="red"
wall23.shapeColor="red"
wall24.shapeColor="red"
wall25.shapeColor="red"
wall26.shapeColor="red"
wall27.shapeColor="red"
wall28.shapeColor="red"
wall29.shapeColor="red"
wall30.shapeColor="red"






}




function draw(){
background("cyan")
 


edges=createEdgeSprites()
text(mouseX+ "," +mouseY,mouseX,mouseY)

keyGroup= new Group()

if(player.isTouching(key)){
    wall30.x=10000000   
   }

if(keyDown(UP_ARROW)){
    player.y=player.y-3  // player.y=player.y-3
}

if(keyDown(DOWN_ARROW)){
    player.y=player.y+3
}

if(keyDown(LEFT_ARROW)){
    player.x=player.x-3 
}

if(keyDown(RIGHT_ARROW)){
    player.x=player.x+3 
}



player.bounceOff(edges)

player.bounceOff(wall1)
player.bounceOff(wall3)
player.bounceOff(wall2)
player.bounceOff(wall4)
player.bounceOff(wall5)
player.bounceOff(wall6)
player.bounceOff(wall7)
player.bounceOff(wall8)
player.bounceOff(wall9)
player.bounceOff(wall10)
player.bounceOff(wall11)
player.bounceOff(wall12)
player.bounceOff(wall13)
player.bounceOff(wall14)
player.bounceOff(wall15)
player.bounceOff(wall16)
player.bounceOff(wall17)
player.bounceOff(wall18)
player.bounceOff(wall19)
player.bounceOff(wall20)
player.bounceOff(wall21)
player.bounceOff(wall22)
player.bounceOff(wall23)
player.bounceOff(wall24)
player.bounceOff(wall25)
player.bounceOff(wall26)
player.bounceOff(wall27)
player.bounceOff(wall28)
player.bounceOff(wall29)
player.bounceOff(wall30)

obstacle1.bounceOff(wall22)
obstacle1.bounceOff(wall23)
obstacle1.bounceOff(wall24)
obstacle1.bounceOff(wall25)




drawSprites()
}*/










function setup(){
createCanvas(1090,720)

wall1 = createSprite(2,2,10,800);
wall1.shapeColor = "blue";
wall2 = createSprite(2,2,800,10);
wall2.shapeColor = "blue";
wall3 = createSprite(398,2,10,800);
wall3.shapeColor = "blue";
 wall4 = createSprite(2,398,800,10);
wall4.shapeColor = "blue";
 wall5 = createSprite(68,12,15,150);
wall5.shapeColor = "blue";
 wall6 = createSprite(180,12,15,75);
wall6.shapeColor = "blue";
 wall7 = createSprite(320,12,15,300);
wall7.shapeColor = "blue";
 wall8= createSprite(365,12,15,150);
wall8.shapeColor = "blue";
 wall9 = createSprite(226,51.5,107,15);
wall9.shapeColor = "blue";
 wall10= createSprite(278,79,15,70);
wall10.shapeColor = "blue";
 wall11 = createSprite(365,240,15,240);
wall11.shapeColor = "blue";
 wall12 = createSprite(320,300,15,210);
wall12.shapeColor = "blue";
 wall13 = createSprite(255.3,108,60,15);
wall13.shapeColor = "blue";
 wall14 = createSprite(276.5,160,102,15);
wall14.shapeColor = "blue";
 wall15 = createSprite(230,217,15,130);
wall15.shapeColor = "blue";
 wall16 = createSprite(297,202.5,45,15);
wall16.shapeColor = "blue";
 wall17 = createSprite(272,275,15,160);
wall17.shapeColor = "blue";
 wall18 = createSprite(225,347.5,80,15);
wall18.shapeColor = "blue";
 wall19 = createSprite(181,228.5,15,253);
wall19.shapeColor = "blue";
 wall20 = createSprite(139,310,15,170);
wall20.shapeColor = "blue";
 wall21 = createSprite(132,192,85,15);
wall21.shapeColor = "blue";
 wall22 = createSprite(97,280,15,110);
wall22.shapeColor = "blue";
 wall23 = createSprite(85,341,95,15);
wall23.shapeColor = "blue";
 wall24 = createSprite(66,232.5,60,15);
wall24.shapeColor = "blue";
 wall25 = createSprite(44,192,15,70);
wall25.shapeColor = "blue";
 wall26 = createSprite(71.5,153,70,15);
wall26.shapeColor = "blue";
 wall27 = createSprite(30,290,60,15);
wall27.shapeColor = "blue";
 wall28 = createSprite(85,85,100,15);
wall28.shapeColor = "blue";
 wall29 = createSprite(127,55,15,50);
wall29.shapeColor = "blue";
 wall30 = createSprite(20,36,35,15);
wall30.shapeColor = "blue";
 wall31 = createSprite(391,381,18,40);
wall31.shapeColor = "yellow";

ball = createSprite(17,380,14,14);
ball.shapeColor = "red";


ball.velocityY = 0;
ball.velocityX = 0;

 
}

function draw(){
background("pink")
createEdgeSprites();
 ball.bounceOff(edges);
 fill("black");
 textSize(16);
 text("Sophia", 35, 385);
 text("Cup", 345, 380);
 if(keyDown(UP_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = -2;
  }
 if (keyDown(DOWN_ARROW)) {
    ball.velocityX = 0
    ball.velocityY = 2;
  }
 if(keyDown(LEFT_ARROW)){
    ball.velocityX = -2
    ball.velocityY = 0;
  }
 if(keyDown(RIGHT_ARROW)){
    ball.velocityX = 2
    ball.velocityY = 0;
  }
/*if (ball.isTouching(wall1)||ball.isTouching(wall2)||ball.isTouching(wall3)||ball.isTouching(wall4)||ball.isTouching(wall5)||ball.isTouching(wall6)||ball.isTouching(wall7)||ball.isTouching(wall8)||ball.isTouching(wall9)||ball.isTouching(wall10)||ball.isTouching(wall11)||ball.isTouching(wall12)||ball.isTouching(wall13)||ball.isTouching(wall14)||ball.isTouching(wall15)||ball.isTouching(wall16)||ball.isTouching(wall17)||ball.isTouching(wall18)||ball.isTouching(wall19)||ball.isTouching(wall20)||ball.isTouching(wall21)||ball.isTouching(wall22)||ball.isTouching(wall23)||ball.isTouching(wall24)||ball.isTouching(wall25)||ball.isTouching(wall26)||ball.isTouching(wall27)||ball.isTouching(wall28)||ball.isTouching(wall29)||ball.isTouching(wall30)) {
    ball.x = 17;
    ball.y = 380;
    ball.velocityX = 0;
    ball.velocityY = 0;*/
   //}
   /*if (ball.isTouching(wall31)){
     ball.velocityX = 0;
     ball.velocityY = 0;
     fill("yellow");
     textSize(30);
     text("You Win", 200, 200);*/
text(mouseX+ "," +mouseY,mouseX,mouseY)


    drawSprites()
}
//}