//Block Defense//
//Defend the ground with Blocks by right clicking//

let x = 500;
let y = 100;
let W = 4;
let L = 3;

function setup() {
  createCanvas(1000, 600);
  background(150,110,30)
}
function draw(){
  fill (1,1,1)
  rect(1,1,1000,550);
  fill(130,100,30)
  circle(x, y, 30 * 2);
  // Move the circle
  x = x + W;
  y = y + L;
  
  // Bounce off left or right edge
  if (x + 30 > width || x - 30 < 0) {
    W = W * -1;
  }
  // Bounce off top or bottom edge
  else if (y + 30 > height-50 || y - 30 < 0) {
    L = L * -1;
  }
}
function drawbouncer(x,y){
  fill(1000,1000,1000)
  rect(mouseX, mouseY, 100, 40);
}
function mousePressed(){
drawbouncer(mouseX,mouseY)
}

