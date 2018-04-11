var x = 0;
function setup() {
  pixelDensity(1);
  createCanvas(800, 240);
  vid = createVideo("ROTDS.mp4");
  vid.loop()
}

function draw() {
  // background(220);
  vid.loadPixels;
  let w = vid.width;
  let h = vid.height;

  copy(vid, w/2, 0, 1, h, x, 0, 1, h);

  x = x + 1;

  if (x > width) {
    x = 0;
  }

}
