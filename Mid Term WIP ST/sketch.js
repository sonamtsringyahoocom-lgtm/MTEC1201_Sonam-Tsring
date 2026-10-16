let img1;
let img2;
let W = 500;
let L = 550;

function setup() {
  createCanvas(1000,600);
  background(100)
}
function draw() {
  background(1000)
   let s = millis() / 1000;
  // Calculate an x-coordinate.
  let d = 450 * sin(s) + 450;
  fill(1,1,1)
  rect(0, 125, 1000, 100);
  rect(0, 275, 1000, 100)
  rect(0, 425, 1000, 100)
  fill(255, 204, 0)
  rect(100, 155, 150, 40)
  rect(450, 155, 150, 40)
  rect(800, 155, 150, 40)
  rect(100, 305, 150, 40)
  rect(450, 305, 150, 40)
  rect(800, 305, 150, 40)
  rect(100, 455, 150, 40)
  rect(450, 455, 150, 40)
  rect(800, 455, 150, 40)
  image(img1, d, 125, 100, 100);
  image(img1, d, 275, 100, 100);
  image(img1, d, 425, 100, 100);
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