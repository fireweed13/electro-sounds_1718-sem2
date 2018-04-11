var mic; // to get audio input from mic
let fft;
let input;


var spacing = 40;
var circleSize;
var col1;
var col2;
var col3;
// let cir = [];



function setup() {
  createCanvas(820, 480);




  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  col1 = color(random(255), random(255), random(255));
  col2 = color(random(255), random(255), random(255));
  col3 = color(random(255), random(255), random(255));

  input = new p5.AudioIn();

  input.start();

  // for(let i = 0; i < width; i++) {
  //   cir[i] = new circleball();
  // }




  console.log(col1);
}

function draw() {
  background(255, 205, 9);
  //background(random(255), random(255), random(255));

  // audio level from mic is always from 0 to 1.
  // we will have to map to desired range.
  var vol = mic.getLevel();
  circleSize = map(vol, 0, 1, -10, 100);

  let spectrum = fft.analyze();

  let lowlvls = fft.getEnergy("bass", "lowMid");
  let midlvls = fft.getEnergy("mid", "highMid");
  let highlvls = fft.getEnergy("treble");

  if (lowlvls) {
    background(col1);
  }

  if (midlvls) {
    background(col2);
  }

  if (highlvls) {
    background(col3);
  }

  // for(let x = 0; x < width; x++){
  //     cir[x].show(circleSize);
  //   }
  let volume = input.getLevel();
  let z = random(-10, 100);
  let r = map(z, 0, width, -100, 50);

    // If the volume > 0.1,  a rect is drawn at a random location.
    // The louder the volume, the larger the rectangle.
    let threshold = 1;
    if (volume < threshold) {

  fill(0);
  for (var x = 0; x <= width; x += random(spacing)) {
    for (var y = 0; y <= height; y += spacing * 2) {

      rect(x, y, 30, 30);

      if(midlvls){
      stroke(col1);
      let movex = x + random((-550,550)/10);
      let mover = r + random(-200,400);
      ellipse(movex, y, mover/2);

    }
    if(lowlvls){
      stroke(col2 = color(200, random(255), 0));
      rotatex = x + rotate(PI/4);
      rect(rotatex, y/2, 100, 100);

    }
    if(highlvls){
      stroke(col3);
      let movey = y + random(-100,100);
      ellipse(random(x), movey, circleSize - 5);

    }

    }


  }
  // rect(x, y, 1100, 1100);

}


}


// class circleball {
//   constructor() {
//     this.x = 100;
//     this.y = 100;
//     this.col1 = color(random(255), 100, 0);
//     this.col2 = color(100, random(255), 0);
//     this.col3 = color(100, 0, random(255));
//   }
//
//   show(s) {
//     stroke(this.col1);
//     ellipse(this.x, this.y, s);
//     stroke(this.col2);
//     ellipse(this.x, this.y, s / 2);
//     // stroke(this.col3);
//     // ellipse(this.x, this.y, s + 20);
//
//
//   }
// }
//
// function mousePressed() {
//   col1 = color(random(255), 100, 0);
//   col2 = color(100, random(255), 0);
//   col3 = color(100, 0, random(255));
// }
