let size = 20
let big = 500
function setup() {
  createCanvas(500, 500);


  describe("A gray square. The mouse's x- and y-coordinates are displayed as the user moves the mouse.");
}
function draw() {
  // Paint the background repeatedly.
  background(200);
size = size+0.4;
  // Draw circle repeatedly.
  circle(mouseX, mouseY, size);
}