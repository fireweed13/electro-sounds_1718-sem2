let img;

function setup() {
  createCanvas(windowWidth, windowHeight);

  img = createImage(100, 100);
}

function draw() {
  img.loadPixels();

  for(let x = 0; x < img.width; x++) {
    for(let y = 0; y < img.height; y++) {

      let n = (x * img.width + y) * mouseX;
      let cl = sin((frameCount + n) * 0.01) * 180;
      img.set(x, y, color(cl));
    }
  }
  img.updatePixels();
  image(img, 0, 0, width, height);
}
