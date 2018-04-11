var spacing = 150;
var circleSize;
var col1;
var col2;
var col3;

var objRotateX = 0;
var objRotateY = 0;
var objRotateZ = 0;

function setup() {
  createCanvas(400, 400, WEBGL);

  col1 = color(random(255), 100, 0);
  col2 = color(100, random(255), 0);
  col3 = color(100, 0, random(255));

  console.log(col1);
}

function draw() {
  background(0);
  doAnimate();
  objRotate();


  circleSize = (mouseX / 20);

  noFill();
  for (var x = 0; x <= width; x += spacing) {
    for (var y = 0; y <= height; y += spacing) {
      // stroke(col1);
      // ellipse(x, y, circleSize, circleSize);
      // stroke(col2);
      // ellipse(x, y, circleSize / 2, circleSize / 2);
      stroke(col3);
      ellipse(x, y, circleSize + 10, circleSize + 10);
    }
  }
}

function doAnimate() {
  // increment animation variables
  objRotateX -= 1;
  objRotateY -= 2.5;
  objRotateZ -= 1.3;
}

function objRotate() {
  rotateX(radians(objRotateX));
  rotateY(radians(objRotateY));
  rotateZ(radians(objRotateZ));
}

function mousePressed() {
  col1 = color(random(255), random(255), random(255));
  col2 = color(random(255), random(255), random(255));
  col3 = color(random(255), random(255), random(255));
}
