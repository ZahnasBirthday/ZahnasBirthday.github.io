var fireworks = [];
var gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  background(0);
}

function draw() {
  stroke(255);
  strokeWeight(4);
  colorMode(RGB);
  background(0, 0, 0, 25);
  if (random(1) < 0.1) {
    fireworks.push(new Firework());
  }
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
  strokeWeight(1);
  stroke(0);
  textAlign(CENTER);
  textSize(100);
  if (random(1) < 0.1) {
  	fill(random(0, 255), random(0, 255), random(0, 255));
  }
  text("Happy Birthday, Zahna!", windowWidth/2, windowHeight/2);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}