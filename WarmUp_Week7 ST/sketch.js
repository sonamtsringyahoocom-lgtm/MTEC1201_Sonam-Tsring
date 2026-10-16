let canvasSize = 500;
let currentScene = 0;
let numScenes = 2;
let img1;

function setup() { 
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(1000);
  if(currentScene === 0) {
    drawScene0();
  }
  else if(currentScene === 1) {
    drawScene1();
  }
  else if (currentScene === 2){
     drawScene2();
  }
}

function mousePressed() {
  currentScene++;
  if(currentScene >= numScenes) {
    currentScene = 0;
  }
}

function drawScene0() {
text('Click to start', 100, 100, 100)
}

function drawScene1() {
text('Hello', 100, 100, 100)
}

function drawScene2(){
text('Welcome to the void', 100, 100, 100)
}

