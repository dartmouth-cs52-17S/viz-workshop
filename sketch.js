function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  } else {
    fill(255);
  }

  stroke(255, 255, 255, 25);
  rect(mouseX, mouseY, 80, 80);
}
