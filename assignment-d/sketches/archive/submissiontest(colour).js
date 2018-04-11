var mic; // to get audio input from mic
let fft;

var spacing = 100;
var circleSize;
var col1;
var col2;
var col3;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();
  // fft = new p5.FFT();
  // fft.setInput(mic);

  col1 = color(random(255), 100, 0);
  col2 = color(100, random(255), 0);
  col3 = color(100, 0, random(255));

  console.log(col1);
}

function draw() {
  background(0);

  // audio level from mic is always from 0 to 1.
  // we will have to map to desired range.
  var vol = mic.getLevel();
  circleSize = map(vol, 0, 1, 10, 200);

  // let spectrum = fft.analyze();
  //
  // let lowlvls = fft.getEnergy("bass", "lowMid");
  // let midlvls = fft.getEnergy("mid", "highMid");
  // let highlvls = fft.getEnergy("treble");

  noFill();
  for (var x = 0; x <= width; x += spacing) {
    for (var y = 0; y <= height; y += spacing) {
      stroke(col1);
      ellipse(x, y, circleSize, circleSize);
      stroke(col2);
      ellipse(x, y, circleSize / 2, circleSize / 2);
      stroke(col3);
      ellipse(x, y, circleSize + 20, circleSize + 20);
    }
  }
}

function mousePressed() {
  col1 = color(random(255), 100, 0);
  col2 = color(100, random(255), 0);
  col3 = color(100, 0, random(255));
}
