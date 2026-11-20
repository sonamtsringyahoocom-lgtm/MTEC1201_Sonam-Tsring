///Sonam Tsring
color = [];
let x1 = 720;
let y1 = 650;
var game1 = "start"// Options: "start" or "game"
let c1 = 100;
let c2 = 650;
let h1 = 287.5;
let h2 = 300;
let a1 = 100;
let a2 = 130;
let a3 = 160
let a4 = 190
let a5 = 220
let a6 = 250
let a7 = 280
let a8 = 310
let a9 = 340
let a10 = 370
let st1 = 1200
let st2 = 500
let st3 = 1200
let st4 = 500

function setup() {
  createCanvas(1440,750);
color = [
  ("red"),
  ("green"),
  ("white")
];
dc = color;
}
function Playgame(){
background("lightblue");
fill("white")
circle(x1, y1, 300)
circle(x1, y1-190, 250)
circle(x1, y1-345, 200)
  fill(random(dc))
  textSize(50)
  text("Build Your Snowman", 200,100)
  text("Press r to Restart", 1000,100)
}
function drawHat(h1,h2){
  fill("black")
rect(h1,h2, 80,110)
rect(h1-37.5,h2+100, 150, 25)
}
function carrot(c1,c2){
fill("orange")
triangle(c1,c2, c1-50,c2+10, c1,c2+20)
}
function coal(){
fill("black")
circle(a1,a1+150,40)
circle(a2,a2+40,40)
circle(a3,a3+150,20)
circle(a4,a4,20)
circle(a5,a5,20)
circle(a6-70,a6+40,20)
circle(a7-90,a7-60,20)
circle(a8-120,a8,20)
circle(a9-100,a9,20)
circle(a10-100,a10-120,20)
}
function sticks(){
fill("brown")
rect(st1, st2, 150, 30)
rect(st1-60, st2+10, 65, 10);
rect(st1-30, st2+27.5, 45, 10);
rect(st1-30, st2-7.5, 45, 10);
rect(st3, st4-100, 150, 30)
rect(st3+140, st4-87.5, 65, 10);
rect(st3+130, st4-70, 45, 10);
rect(st3+130, st4-107.5, 45, 10);
}

function keyPressed() {print('key',key)
  if (keyPressed && key === 'r') {
  game1 = "start"}

else if (keyPressed && key === 'p') {
    game1 = "game";
}
}
function drawStartScreen(){
background("lightblue"); 
  textSize(50);
  fill("red")
  text("Build Snowman", 500,100);
  fill("red")
  textSize(50);
  text("Press p to Start", 500,500);
}

function draw() {
  if (game1 === "start") {
    drawStartScreen();
  }
  else if (game1 === "game") {
    Playgame(), drawHat(h1,h2), carrot(c1,c2), coal(), sticks();
}
}