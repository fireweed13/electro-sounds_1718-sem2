var orange = [];
var pink = [];

function setup(){
 //Canvas Size
 createCanvas(windowWidth, windowHeight);

 for (var i = 0; i < 20; i++) {
   orange.push(new createorangesq() );
   pink.push(new createpinksq() );
}
}

function draw(){
  background(255);
  blackret();

  for (var i = 0; i < 20; i++) {
    orange[i].display();
    pink[i].display();


}
}

function createorangesq() {
  this.x = random(100,width-150);
  this.y = random(100,height-150);
  this.depth = random(50,300);
  this.gap = (10,20);

  this.display = function () {
    for (var i = 0; i < this.depth; i++) {
      stroke(255,154,0);
      rect(this.x, this.y, 80, 80);
    }


  }
}

  function createpinksq() {
    this.x = random(100,width-150);
    this.y = random(100,height-150);
    this.depth = random(50,300);
    this.gap = (10,20);

    this.display = function () {
      for (var i = 0; i < this.depth; i++) {
        stroke(255,75,244);
        rect(this.x, this.y, 40, 40);
      }

}
}

function blackret() {
  stroke(0);
  strokeWeight(2);
  rect(100, 120, 150, 150);

}
