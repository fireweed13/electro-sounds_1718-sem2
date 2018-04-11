let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 1000);
}
function draw() {
  background(255, 0, 0);

  ambientLight(100);
  directionalLight(255, 255, 255, 1, -1, 0);
  rotateX(angle);
  rotateY(angle * 0.003);
  rotateZ(angle * 0.07);

  angle += 0.03

  //orbitControl();
  strokeWeight(0.01);
  for (var i = -1; i < 2; i++) {
    for (var j = -2; j < 3; j++) {
      push();
      translate(i * 160, 0, j * 210);
      box(60, 60, 60);
      pop();
    }
  }

  ambientLight(100);
  directionalLight(255, 255, 255, 1, -1, 0);


}
