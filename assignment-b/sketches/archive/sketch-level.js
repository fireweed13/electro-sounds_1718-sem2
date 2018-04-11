var mic;
var level, nlevel;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  mic = new p5.AudioIn();
  mic.start();
  level = 0;
}

function draw() {
  background(0,255,128);
  fill(128,0,255);

  // Get the average (root mean square) amplitude
  nlevel = mic.getLevel();
  //console.log(nlevel);

  level += (nlevel-level) * 0.1; // smooth the input signal (nlevel)

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, level * height, level * height);
}
