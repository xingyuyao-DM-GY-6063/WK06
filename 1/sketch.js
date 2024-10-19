// TODO: add more properties using objects

let ypos;

let aCircle = {};
let aList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  aList = [0,3,4,6];
  aCircle = {
    x:width/2,
    y:height/2,
    d:60,
    a:255
  };

}

function draw() {
  background(220, 20, 220);
  //ellipse(width / 2, ypos, 50);
  fill(255,aCircle["a"]);

  ellipse(aCircle.x,aCircle.y,aCircle.d)

  // aCircle.a += 4;
  aCircle.a =(aCircle.a + 4) % 255;
//aCircle.x = aCircle["x"]

}
