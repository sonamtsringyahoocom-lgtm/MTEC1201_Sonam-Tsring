let colors = [];
let colors2 = [];
let myMover;

function setup() {
  createCanvas(500, 500);
  
  colors = [
    color("red"),
    color("orange"),
    color("yellow"),
    color("green"),
    color("blue"),
    color("purple")
  ];
  
  colors2 = [
    color("pink"),
    color("peachpuff"), 
    color("lightyellow"),
    color("teal"),
    color("cyan")
  ];
  myMover = new Mover(250, 250, 50);
}

function draw() {
  background("skyblue");
  myMover.change();
  myMover.display();
}

class Mover {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.c = colors[0];
    this.b = colors2[0];
  }

  change() {
    this.c = random(colors);
    this.b = random(colors2);

    this.x += random(-5, 5);
    this.y += random(-5, 5);
    this.x = constrain(this.x, 20, 480);
    this.y = constrain(this.y, 20, 480);
  }

  display() {
    fill(this.c);
    circle(this.x, this.y, this.d);

    fill(this.b);
    triangle(this.x, this.y, 50, 20, 50, 80);
    triangle(450, 80, 450, 20, this.x, this.y);
    triangle(this.x, this.y, 50, 420, 50, 480);
    triangle(450, 480, 450, 420, this.x, this.y);
  }
}
