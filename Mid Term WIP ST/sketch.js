let img1;
let img2;
let W = 500;
let L = 850;

function setup() {
  createCanvas(1000,900);
  background(100)
}
function draw() {
  background(1000)
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
  image(img1, d, 225, 100, 100);
  image(img1, d, 425, 100, 100);
  image(img1, d, 625, 100, 100);
 image(img2, W, L, 50, 50);
}

function preload(){
img1 = loadImage('Images/ImageCar.png')
img2 = loadImage('Images/images.png')
}

function keyPressed() {
  if (key === 'U'){
    L-10;}
    else if (key === 'R')
      {W+10}
    if (key === 'L')
      {W-10}
}