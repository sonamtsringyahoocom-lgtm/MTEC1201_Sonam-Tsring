function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 for (let p = 100; p > 0; p -= 20) { 
    let d = dist(mouseX, mouseY, width / 2, height / 2); 
    if (d > (p - 20) / 2 && d < p / 2) { 
      strokeWeight(p)
      fill('orange'); 
      point(d, 100); 
    } else { 
      strokeWeight(p)
      fill(255); 
      point(d, 100); 
    } 
}
}