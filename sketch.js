//Create variables here
var dog,dogImage,dogHappy;
var database,foodStock;
var foodS;

function preload()
{
  dogImage = loadImage("Dog.png");
  dogHappy = loadImage("happydog.png");
}

function setup() {
  database=firebase.database();
 foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  createCanvas(500, 500);

  dog = createSprite(300,400,10,10);
  dog.addImage(dogImage);
  dog.scale = 0.2;
  
}


function draw() {  
  background(46,139,87);

  textSize(15);
  fill("white");
  strokeWeight(3);
  text("Note: Press UP_ARROW Key To Feed The Dog",50,100);

  fill("white");
  text("Food Remaining :" +foodS,200,200);


  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(dogHappy);
     
  }

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

   if(x<-0){
      x-0;
   } else{
     x=x-1;
   }

   database.ref('/').update({
     Food:x
   })
}



