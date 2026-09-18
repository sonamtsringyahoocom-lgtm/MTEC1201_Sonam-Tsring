let size = 60
let big = 500
function setup() {
  createCanvas(500, 500);


  describe("A gray square. The mouse's x- and y-coordinates are displayed as the user moves the mouse.");
}
// Display the canvas' height.
  text(height, 42, 54);

  describe('The number 100 written in black on a gray square. When the mouse is pressed, the square becomes a rectangle and the number becomes 50.');


// If the mouse is pressed, reisze
// the canvas and display its new
// height.
function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    resizeCanvas(big, big);
big = big + 50;
    background(200);
    text(height, 500, 300);
  }
}
function draw() {
  // Paint the background repeatedly.
  background(200);
size = size+0.4;
  // Draw circles repeatedly.
  circle(mouseX, mouseY, size);
}

// Change the fill color when the user double-clicks.
function doubleClicked() {
  fill('deeppink');
}

