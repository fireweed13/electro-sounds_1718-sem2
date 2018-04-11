let m = {"a":{
        "a1":4,
        "b1":10
        },

         "b":50
        };


function setup () {
  createCanvas(windowWidth,windowHeight)
}

function draw () {
  background (255,255,0);
  for(let i=0;i<210;i++) {

    let n = m.a;
    let s = random(frameCount % 20);
    let x = (i%n) * s;
    let y = floor(i/n) * s;
    //let x = (i%20) * 10; //% is modulo, will take first number divide by the number next to it, always giving you a remainder
    //let y = floor(i/20) * 10; //floor rounds down the value, removing the decimal points
    ellipse(x,y,s,s);
  }
}
