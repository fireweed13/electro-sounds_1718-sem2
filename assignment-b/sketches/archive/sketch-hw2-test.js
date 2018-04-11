function setup() {

 // Set the canvas size
 createCanvas(1000, 1000);

 // Stop the drawing from running 60 times a second
 noLoop();

}

function draw() {

 var r, g, b;

 // Draw the circle pattern
 for (var circle = 720; circle > 10; circle -= 20, r = random(255), g = random(255), b = random(255)) {
  fill(r, g, b);
  noStroke();
  ellipse(width / 4 * 3, height / 4 * 3, circle, circle);
 }

 // Draw the vertical pattern
 for (var vertical = width /2; vertical < width; vertical += 10, r = random(255), g = random(255), b = random(255)) {
  fill(r, g, b);
  noStroke();
  rect(vertical, 0, 10, height / 2);
 }

 // Draw the horizontal pattern
 for (var horizontal = 0; horizontal < height; horizontal += 10, r = random(255), g = random(255), b = random(255)) {
  fill(r, g, b);
  noStroke();
  rect(0, horizontal, width / 2, 10);
 }

 // Draw the borders
 stroke(0);
 strokeWeight(10);
 line(width / 2, 0, width / 2, height);
 line(width / 2, height / 2, width, height / 2);
 noFill();
 rect(5, 5, width - 10, height - 10);

}
