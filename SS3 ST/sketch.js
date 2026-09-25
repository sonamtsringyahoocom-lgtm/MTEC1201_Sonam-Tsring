//Sonam Tsring
//Planteing Trees
//Click to plants trees around the field

let size=180
let big=size
function setup() {
  createCanvas(500, 500);
 background(150,350,350);
}
function drawTree(x,y) { 
fill(200,100,50)
 rect(x-12.5,y, 25, 70);
let r= 135+random(-50,100)
let g= 200+random(-75,100)
let b= 50+random(-25,50)
 fill(r,g,b)
 circle(x,y-15,70)
}
function mousePressed() {
drawTree(mouseX,mouseY)
}
function Sun() {
strokeWeight(0)
fill(150,350,350)
circle(450,55,big)
fill(255,204,0)
circle(450,55,size)
big= size
size = size+random(-3,3)
}
function draw() {
Sun()
}