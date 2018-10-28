function setup() {
  createCanvas(480, 240);
}

function draw() {
  if (mouseIsPressed) {
    fill(50);
  } else {
    fill(200);
  }
  ellipse(mouseX, mouseY, 80,80)
}