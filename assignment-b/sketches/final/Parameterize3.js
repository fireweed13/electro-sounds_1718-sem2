var i = 0;
var radius = 128;
var points = new Array(120);
var freqX = 3, freqY = 2, freqZ = 3;
var phiX = 0, phiY = 0;
var distance = 10;
var slider;

function setup() {
  createCanvas(windowWidth, windowHeight, 'webgl');

  slider = createSlider(0, 255, 100);
    slider.position(10, 10);
    slider.style('width', '1250px');


  // customize parameters
  phiX = PI / 6;
  phiY = PI / 2;

  // create points
  for(i = 0; i < points.length; i++){
    points[i] = {};
    var angle = map(i, 0, points.length, 0, TWO_PI);

    points[i].x = sin(angle * freqX + phiX) + sin(angle  * 6) * radius;
    points[i].y = sin(angle  * freqY + phiY) * radius;
    points[i].z = sin(angle * freqZ) * radius;
  }
}

function draw() {
  var val = slider.value();
  background(val);

  orbitControl();
  stroke(255, 0, 0, 255);
  for(i = 0; i < points.length - 1; i++){
    line(points[i].x, points[i].y, points[i].z,
      points[i + 1].x, points[i + 1].y, points[i + 1].z);

    var next = i + distance;
    if(points.length <= next) next -= points.length;
    line(points[i].x, points[i].y, points[i].z,
      points[next].x, points[next].y, points[next].z);
  }
}

//input sliders
