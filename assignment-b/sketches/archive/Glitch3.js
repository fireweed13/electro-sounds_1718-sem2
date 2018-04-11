let img;
var barWidth = 5;
var lastBar = -5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, height, height, height);

  img = loadImage("shirt.jpg");
}

function draw() {

  var whichBar = mouseX / barWidth;
    if (whichBar !== lastBar) {
      var barX = whichBar * barWidth;
      fill(mouseY, height, height);
      rect(barX, 0, barWidth, height);
      lastBar = whichBar;
    }

  for(let x = 0; x < img.width; x++) {
    for(let y = 0; y < img.height; y++) {

      let n = (x * img.width + y) * mouseX;
      let cl = sin((frameCount + n) * 0.01) * 1000;
      img.set(x, y, color(cl));
    }
  }
  img.updatePixels();
  image(img, 0, 0, width, height);
}
