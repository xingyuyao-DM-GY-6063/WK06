// TODO: add more circles using lists

let numCircles;
let ypos = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  numCircles = 10;
  //numCircles = int(width/25);

  for (let index = 0; index < numCircles; index += 1) {
    //ypos.push(random(height));
    ypos.push(0);
  }
}

function draw() {
  background(220, 20, 220);
  //ellipse(width / 2-100, ypos[0], 50);
  //ellipse(width / 2, ypos[1], 50);
  //ellipse(width / 2 + 100, ypos[2], 50);

  for (let index = 0; index < ypos.length; index += 1) {
    let xpos = map(index, 0, ypos.length-1, 0, width);

    ellipse(xpos + 25, ypos[index], 50);
    ypos[index] += 8;
    if (ypos[index] > height) {
      ypos[index] = random(-60, -30);
    }
  }
}

function mousePressed(){
  ypos.push(random(height));

}
