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

  if (mouseIsPressed) {
    blackret();
  for (var i = 0; i < 20; i++) {
    orange[i].move();
    pink[i].move();
    orange[i].display();
    pink[i].display();
    }
  } else {
    clear();
    blackret();
    for (var i = 0; i < 20; i++) {
      orange[i].display();
      pink[i].display();
      }
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

  this.move = function() {
    // Jiggling randomly on the horizontal axis
    this.x = this.x + random(-1, 1);
    // Moving up at a constant speed
    this.y = this.y - 5;

    // Reset to the bottom
    if (this.y < 0) {
      this.y = height;
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

      this.move = function() {
        // Jiggling randomly on the horizontal axis
        this.x = this.x + random(-1, 1);
        // Moving up at a constant speed
        this.y = this.y + 5;

        // Reset to the bottom
        if (this.y > height) {
          this.y = 0;
        }
      }

}
}

function blackret() {
  stroke(0);
  strokeWeight(2);
  rect(100, 120, 150, 150);

}

//60 frames per pixel, so 1/60 (60 fps)
