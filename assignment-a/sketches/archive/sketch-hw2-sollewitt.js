// var y2 = [270,240,200,170,135,110,135,170,200,235,270]

function setup(){
 //Canvas Size
 createCanvas(1000, 1000);
}

function draw(){
  background(255);
// bigret();
smalltri();
}


function bigret(){
 strokeWeight(10);
  //X Y Width Height
 translate(445,160);
 rect(0,0,400,400);

 for(var v = 20; v < 400; v = v + 20) {
 line(0,v,400,v);
}

}

function smalltri(){


stroke(0);

push();

translate(500,400);
// n is number of lines including point of origin
triangle(0,0,120,-200,240,0);
var n = 6;
var n1 = n-1;
var spacing = 24;
var lineLengthMult = 40;

 for(var i=0; i < n; i++) {
   // left half of triangle
   var x = i * spacing;
   line (x, 0, x, - i * lineLengthMult);

   // right half of triangle
   var xOffset = n1 * spacing;
   var len = (n1 - i) * lineLengthMult;
   line (xOffset + x, 0, xOffset + x, - len);
 }
 pop();

 // line (100,300,100,270);
 // line (120,300,120,240);
 // line (140,300,140,200);
 // line (160,300,160,170);
 // line (180,300,180,135);
 // line (200,300,200,110);
 // line (220,300,220,135);
 // line (240,300,240,170);
 // line (260,300,260,200);
 // line (280,300,280,235);
 // line (300,300,300,270);


}
