// TODO: add more circles using lists

let numCircles;
let ypos = [];
let xpos = [];
let diam = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  numCircles = 10;
  //numCircles = int(width/25);

  for (let index = 0; index < numCircles; index += 1) {
    xpos.push(random(width));
    ypos.push(random(height));
    diam.push(random(30,100));

  }
}

function draw() {
  background(220, 20, 220);
  //ellipse(width / 2-100, ypos[0], 50);
  //ellipse(width / 2, ypos[1], 50);
  //ellipse(width / 2 + 100, ypos[2], 50);

  for (let index = 0; index < ypos.length; index += 3) {

    ellipse(xpos[index], ypos[index], diam[index]);
  }
}

function mousePressed(){
  ypos.push(random(height));
  xpos.push(random(height));
  diam.push(random(30,100));
}
