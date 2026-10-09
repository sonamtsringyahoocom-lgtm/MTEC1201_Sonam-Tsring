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
  image(img1, d, 300, 100, 100);
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