// TODO: visualize data from JSON

let data= [];

function preload(){
  data = loadJSON("wine.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  stroke("red");

 // data = loadJSON("wine.json");
data = Object.values(data);
  print(data[0]);
  for (let idx = 0;idx<data.length;idx++){
    let aWine = data[idx];
    let x = map(idx,0,data.length,0,width)
    let d = map(aWine.price,0,1000,0,height)

    ellipse(x, height/2, d)
  }
}

function draw() {}

function mousePressed() {
  print(data[0]);
}
