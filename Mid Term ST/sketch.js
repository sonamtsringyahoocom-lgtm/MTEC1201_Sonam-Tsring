let img1;
let img2;
let W = 500;
let L = 850;
let Car1 = 625;
let Car2 = 425;
let Car3 = 225;
let Count = 0;
var gameState = "start";// Options: "start" or "game"

function setup() {
  createCanvas(1000,900);
  background(100)
}

function runMyGame() {
   let s = millis() / 1000;
  // Calculate an x-coordinate.
  let d = 450 * sin(s) + 450;
  fill(175, 200, 175)
  rect(0,0,1000,900)
  fill(50, 85, 150)
  rect(0,0, 1000, 100)
  fill(1,1,1)
  rect(0, 225, 1000, 100);
  rect(0, 425, 1000, 100)
  rect(0, 625, 1000, 100)
  fill(255, 204, 0)
  rect(100, 255, 150, 40)
  rect(450, 255, 150, 40)
  rect(800, 255, 150, 40)
  rect(100, 655, 150, 40)
  rect(450, 655, 150, 40)
  rect(800, 655, 150, 40)
  rect(100, 455, 150, 40)
  rect(450, 455, 150, 40)
  rect(800, 455, 150, 40)
  image(img1, d, Car3, 100, 100);
  image(img1, d, Car2, 100, 100);
  image(img1, d, Car1, 100, 100);
 image(img2, W, L, 50, 50);
 text("DEATHS: " + Count, 100, 50);

  if (L+50>Car1 && L<Car1+100 && W<d+100 && W+50>d)
    { Count = Count+1;};
 if (L+50>Car1 && L<Car1+100 && W<d+100 && W+50>d){
    L=850, W=500 
  }

   if (L+50>Car2 && L<Car2+100 && W<d+100 && W+50>d)
    { Count = Count+1;};
  if (L+50>Car2 && L<Car2+100 && W<d+100 && W+50>d){
    L=850, W=500 
  }

  if (L+50>Car3 && L<Car3+100 && W<d+100 && W+50>d)
    { Count = Count+1;};
  if (L+50>Car3 && L<Car3+100 && W<d+100 && W+50>d){
   L=850, W=500 
  }

  if (L < 100)
    {
      fill(173,216,230)
      rect(1,1,1000,900)
      image(img2, d , Car1, 50,50)
      image(img2, d), 150, 50 ,50
    }
if (L < 100) 
  {
    fill(255,204,0)
    textSize(50)
    text("You Win" , 400, 300);
    fill(100,100,100)
    textSize(20)
    text("Total Deaths: " + Count, 425, 360)
    if (Count >= 5){
    fill(100,0,0)
    textSize(50)
    text("Try Dodging Better", 350, 560)
    }
    else if (Count >= 1)
      {
    fill(175,100,220)
    textSize(50)
    text("Good Job Weaving", 350, 560)
    }
    else if (Count < 1)
      {
    fill(255,204,0)
    textSize(50)
    text("Perfect", 420, 560)
    }
}
}
function preload(){
img1 = loadImage('Image/Car.png')

img2 = loadImage('Image/Snake.png')
}

function keyPressed() {print('key',key)
  if (key === "w"){
    L= L-15;}

    else if (key === "d")
      {W= W+15}
    if (key === "a")
      {W= W-15}
    else if (key === "s"){L=L+15;}
}
function drawStartScreen() {
  background("lightblue"); 
  textSize(50);
  fill(30,100,0)
  text("Snake Crosser", 400,350);
  fill(255,204,0)
  textSize(50);
  text("Press p to Start", 390,500);
  if (keyIsPressed && key === 'p') {
    gameState = "game";
  }
}
function draw() {
  if (gameState === "start") {
    drawStartScreen();
  } else if (gameState === "game") {
    runMyGame();
  }
}