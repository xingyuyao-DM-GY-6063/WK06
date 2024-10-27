// TODO: add more properties using objects
// TODO: create/draw using functions

let NUM_OBJS = 100;
let xs = [];
let ys = [];
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let cnt = 0; cnt < NUM_OBJS; cnt++) {
    let aCircle = {
      x: random(width),
      y: random(height),
      d: random(50, 100),
      a: 0,
      da: random(1, 10),
      dx: random(-5, 5),
      dy: random(-5, 5),
    };

    circles.push(aCircle);
  }
  print(circles);
}

function draw() {
  background(220, 20, 220);
  for (let idx = 0; idx < circles.length; idx++) {
    let mCircle = circles[idx];
    fill(255, mCircle.a);
    ellipse(mCircle.x, mCircle.y, mCircle.d);
    //circles[idx]=mCircle.x
    mCircle.a = (mCircle.a + mCircle.da) % 255;
    mCircle.x = mCircle.x + mCircle.dx;
    mCircle.y = mCircle.y + mCircle.dy;

    if (mCircle.y < 0 || mCircle.y > height) {
      mCircle.y = random(height);
    }
    if (mCircle.x < 0 || mCircle.x > width) {
      mCircle.x = random(width);
    }
  }
}
