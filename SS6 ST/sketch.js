let colors = [];
let colors2 = [];
let n;
let c;
let a;
let b;

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
  c = colors[0];
  b = colors2[0];
}

function draw() {
  background(220);
  for (let p = 500; p > 0; p -= 50) {
    let d = dist(mouseX, mouseY, width / 2, height / 2);
    
    if (d > (p - 40) / 2 && d < p / 2) { 
      if (n !== p) {
        c = random(colors);
      }
      n = p;
      fill(c);
    } else {
      fill(255);
    }
    circle(250, 250, p);
  }

  let z = 100;
  let w = 250;
  
  while (z > 0) {
  let g1 = dist(mouseX, mouseY, w, 50);
  if (g1 > (z - 20) / 2 && g1 < z / 2) {
    if (a !== z) b = random(colors2);
    a = z;
    fill(b);
  } else {
    fill(255);
  }
  circle(w, 50, z);
  let g2 = dist(mouseX, mouseY, w, 450);
  if (g2 > (z - 20) / 2 && g2 < z / 2) {
    if (a !== z) b = random(colors2);
    a = z;
    fill(b);
  } else {
    fill(255);
  }
  circle(w, 450, z);
  let g3 = dist(mouseX, mouseY, 50, w);
  if (g3 > (z - 20) / 2 && g3 < z / 2) {
    if (a !== z) b = random(colors2);
    a = z;
    fill(b);
  } else {
    fill(255);
  }
  circle(50, w, z);
  let g4 = dist(mouseX, mouseY, 450, w);
  if (g4 > (z - 20) / 2 && g4 < z / 2) {
    if (a !== z) b = random(colors2);
    a = z;
    fill(b);
  } else {
    fill(255);
  }
  circle(450, w, z);
  z = z - 20;
}
}
