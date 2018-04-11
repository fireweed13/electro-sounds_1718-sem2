function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() {
  background(0,255,128);
  fill(128,0,255);

  var spectrum = fft.analyze();
  // console.log(spectrum.length);

  push();
  translate(200,0);
  for(var i=0;i<spectrum.length;i+=2) {
    rect(i,height/2, 1, -spectrum[i]);
    rect(i,height/2, 1, spectrum[i]);
  }
  pop();
}
