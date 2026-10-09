function setup() {
  createCanvas(600, 600);
  background(150,110,30)
}
function drawmover(x,y){
  fill(1000,1000,1000)
  rect(mouseX, mouseY, 100, 40);
  if (x + 300 > width || x - 0 < 0) {
fill(100,100,100)
rect(mouseX, mouseY, 100, 40)
}
}
function mousePressed(){
drawmover(mouseX,mouseY)
}
