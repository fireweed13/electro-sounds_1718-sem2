var shape = [100, 25, 46, 72, 30, 57, 37, 120, 68, 50]
var arrColour;

function setup() {
  createCanvas(windowWidth, windowHeight);
  arrColour = [
    { 'c': color(0,255,255), 'x':100, 'y':340, 's':1.18 },
    { 'c': color(0,255,0), 'x':200, 'y':380, 's':1.01 },
    { 'c': color(255,0,0), 'x':300, 'y':420, 's':1.02 },
    { 'c': color(128,0,128), 'x':400, 'y':460, 's':1.03 },
    { 'c': color(255,255,0), 'x':500, 'y':500, 's':1.2 },
    { 'c': color(128,128,0), 'x':600, 'y':550, 's':1.1 },
    { 'c': color(255,255,255), 'x':650, 'y':590, 's':1.01 },
    { 'c': color(0,0,255), 'x':680, 'y':130, 's':1.03 },
    { 'c': color(128,0,0), 'x':700, 'y':170, 's':1.05 },
    { 'c': color(128,0,128), 'x':750, 'y':200, 's':1.07 }
  ];
  noStroke();
}

function draw() {

  background(0,25,128,10);
  for(var i = 0; i<arrColour.length; i++) {
    fill(arrColour[i].c);

push();
translate(arrColour[i].x, arrColour[i].y);
rotate(frameCount * 0.01);
rect(0,0,100,100); // witdth and height
rotate(frameCount*0.1);
fill(255);
rect(0,0,200,10); // width and height
pop();

    //ellipse(arrColour[i].x,   //x
            //arrColour[i].y,   //y
            //shape[i],shape[i]);         // width and height

            arrColour[i].x = arrColour[i].x * arrColour[i].s;
            if(arrColour[i].x > 2000) {
              arrColour[i].x = 1;
  }

}
}
