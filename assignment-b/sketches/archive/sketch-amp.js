var mic, analyzer;

//var x = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  mic = new p5.AudioIn();
  mic.start();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mic);

}

var minVal = 10000;
var maxVal = -10000;

function draw() {
  background(255,255,128);
  fill(0,0,0);



  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();


  var s = map(rms, 0, 0.014, 0, 25);

  if(s<50) {


    for(var i = 0; i < 50; i++) {
      fill(255,255,128);
    var x = random(10, windowWidth);
    var y = random(10, windowHeight);

    ellipse((x/2)*i, (y/2)*i, 10+s+mouseX, 10+s+mouseY);
  }
}

  else {
    fill(0);
    ellipse(width/2, height/2, 10+s+mouseX, 10+s+mouseY);
    }
}

  // Draw an ellipse with size based on volume
  // with mouseX and mouseY it affects how its stretched up and down
  //ellipse(width/2, height/2, 10+s*x*mouseX, 10+s*x*mouseY);
