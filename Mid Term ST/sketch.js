let img1;
let img2;
let W = 500;
let L = 850;
let Car1= 625;
let Car2= 425;
let Car3= 225;
let Count= 0;
function setup() {
  createCanvas(1000,900);
  background(100)
}
function mousePressed() {
  currentScene++;
  if(currentScene >= numScenes) {
    currentScene = 0;
  }

}

function drawScene0() {
text('Snake Crosser', 500,200,200)
text('Click To Start Game',500, 400, 100 )
}

function drawScene1() {
text('You Win',)
}


function draw() {
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

  if (L+50>Car1 && L<Car1+100 && W<d+100 && W+50>d){
    L=850, W=500 
  }
   if (L+50>Car1 && L<Car1+100 && W<d+100 && W+50>d)
    { Count = Count+1;};
  if (L+50>Car2 && L<Car2+100 && W<d+100 && W+50>d){
    L=850, W=500 
  }
  if (L+50>Car2 && L<Car2+100 && W<d+100 && W+50>d)
    { Count = Count+1;};
  if (L+50>Car3 && L<Car3+100 && W<d+100 && W+50>d){
   L=850, W=500 
  }
  if (L+50>Car3 && L<Car3+100 && W<d+100 && W+50>d)
    { Count = Count+1;};
  text("DEATHS: " + Count, 100, 50);
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
