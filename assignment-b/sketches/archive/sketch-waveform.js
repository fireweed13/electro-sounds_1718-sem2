var mic, fft;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT(0.8, 256);
    fft.setInput(mic);
}

function draw() {
  background(0,255,128);

  var waveform = fft.waveform();
  // console.log(waveform.length);

  noFill();
  stroke(128,0,255);
  strokeWeight(4);
  push();
  translate(200,height/2);
  beginShape();
  for(var i=0;i<waveform.length;i+=5) {
    vertex(i*4, waveform[i] * 50);
  }
  endShape();
  pop();
}
