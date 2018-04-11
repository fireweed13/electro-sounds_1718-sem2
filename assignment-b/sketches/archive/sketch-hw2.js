function setup (){
createCanvas(500,500);

strokeWeight(15);
stroke(0);
rect(0,0, height, width);


}

function draw(){
line(250, 10, 250, 500);
line(10,250,500,250);
// vertical
line(115,10,115,250);
line(50,10,50,250);
line(180,10,180,250);

// horizontal
line(250,55,500,55);
line(250,120,500,120);
line(250,190,500,190);

// slant 1
line(250,250,0,500);
line(110,250,0,350);
line(0,420,180,250);
line(85,500,250,330);
line(250,420,170,500);



// slant 2
line(500,500,250,250);
line(390,250,500,360);
line(320,250,500,430);
line(250,330,420,500);
line(250,420,330,500);





}
