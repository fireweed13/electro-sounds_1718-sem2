var a = [1,2,3,4,5,6];

function setup() {
  createCanvas(windowWidth, windowHeight);


  for(var i = 0; i<a.length; i++) {
    console.log(a[i]);
  }


}

function draw() {
  background(0,128,20);

}

function hello(theValue = 100) {
  console.log(theValue);
}


function background(theR, theG, theB) {
  fill(theR, theG, theB);
}
