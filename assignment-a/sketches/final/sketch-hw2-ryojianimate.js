var xSpacing = 10;
var ySpacing = 20;
var xLength = xSpacing - 5;
var xOffset = 7;


function setup(){
 //Canvas Size
 createCanvas(1000, 1000);
 x = width / 2;
  y = height;
}

function draw(){
  if (keyIsPressed == true) {
  bigret();
  push();
  translate(xOffset, 5);
  whiteline();
  blackLine();
  pop();

} else {
  bigret();
}
}



function bigret(){
  strokeWeight(9);
  //X Y Width Height
  translate(445,160);
  rect(0,0,400,400);

}

function whiteline(){
  stroke(255);
  strokeWeight(5);
  var n = 400/ySpacing;
  for(var y = 0; y < n; y++) {
    if(y%20 != 0){

    line(0,(y * ySpacing),360 - xOffset,(y * ySpacing));
  }
}
}

function blackLine(){
  stroke(0);
  strokeWeight(3);
  var nx = (400 - xOffset)/xSpacing;
  var ny = 400/ySpacing;

  for(var x = 0; x < nx; x++) {
    for(var y = 0; y < ny; y++){
      if(y%20 != 0){
        line(x * xSpacing, y * ySpacing, x * xSpacing + xLength , y * ySpacing);
        // line(10, 20, 15, 20);


        }

    }
  }


}

//add automatic
