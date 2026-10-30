function setup() { 
  createCanvas(500, 500); 
}  

function draw() { 
  background(220); 
  
  for (let p = 500; p > 0; p -= 20) { 
    let d = dist(mouseX, mouseY, width / 2, height / 2); 
    if (d > (p - 20) / 2 && d < p / 2) { 
      fill("orange"); 
      circle(250, 250, p); 
    } else { 
      fill(255); 
      circle(250, 250, p); 
    } 
  }
  fill(255)
  let z = 100; 
  let w = 100;
  while(z > 0) { 
    let g = dist(mouseX, mouseY, w, 100)
     if (g > (z - 20) / 2 && g < z / 2) {
      fill(255, 0, 0);
    } else {
      fill(255);
    }
     circle(w, 100, z);
    z = z - 20;
    let s = 400; // Center X is s, Center Y is w (100)
   let z2 = 100;
   while (z2 > 0) {
    let c = dist(mouseX, mouseY, s, 100);
    if (c > (z2 - 20) / 2 && c < z2 / 2) {
      fill(0, 0, 255);
    } else {
      fill(255);
    }
    circle(s, 100, z2);
    z2 = z2 - 20;
  } 
}
}