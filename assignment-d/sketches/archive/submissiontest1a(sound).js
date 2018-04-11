var mic, fft;

function setup() {
  createCanvas(1240, 480);
  noStroke();
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(0, 255, 128);
  fill(128, 0, 255);

  var spectrum = fft.analyze();
  // console.log(sepctrum.length);

  push();
  translate(200, 0);
  for(var i = 0; i < spectrum.length; i += 2) {
    rect(i, height / 2, 1, -spectrum[i]);
    rect(i, height / 2, 1, spectrum[i]);
  }
  pop();

  push();
  translate(200, height / 2);
  var a = fft.linAverages(8);
  for(var i = 0; i < a.length; i++) {
    ellipse(0, 0, 10 + a[i], 10 + a[i]);
    translate(spectrum.length / 8, 0);
  }
  pop();
}
