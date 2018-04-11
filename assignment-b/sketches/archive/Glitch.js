
var spot = {
  x: 20,
  y: 20,
  z: 30,
  a: 40
}


var col = {
  r: 75,
  g: 220,
  b: 252
}

var xPosition;
var yPosition;


function setup() {
  createCanvas(windowWidth, windowHeight);
    var  xPosition = width/2;

var xPosition = width/4;
var yPosition = spot.a;

}

function draw() {
   spot.x = random(0,width);

  spot.y = random(0, height);

  //background
  background(0);

  //line 1
  col.r = random(0, 255);
  col.g = random(0, 255);
fill(col.r, col.g, col.b)
	stroke(col.r, col.g, col.b);
  strokeWeight(4);
  line(spot.x, spot.y, 190, 350);

  //line 2


  //line(spot.x, spot.y, 580, 20);
	//line(spot.x, spot.y, 20, 380);
  line(spot.x, spot.y, 1080, 350);

  //random spots
  noStroke();
  fill(col.r, col.g, col.b);
	spot.z=random(0, width);
  spot.a=random(0, height);
var xPosition = width/2;
var yPosition = spot.a;
var circleSize = random(0,80);

  var circle =
     ellipse(xPosition, yPosition, mouseX, circleSize);










}
