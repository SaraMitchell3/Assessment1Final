// 25 is so that the ball does't bounce off the screen a bit
var x = 25;
var speedX = 5;
var y = 325;
var speedY = 5;
var colour1;
var colour2;
var colour3;
var colour4;
var c1;
var c2;
var c3;
var img;
var radiusX = 50;
var radiusY = 50;
var array;

function setup() {

  img = loadImage("crocodileWinking.png");
  img.resize(800, 650);
  createCanvas(800, 650);
  background(255);

  displayBall();

}

function draw() {

  colour1 = color(255, 0, 0);
  colour2 = color(0, 255, 130);
  colour3 = color(0, 0, 255);
  colour4 = color(255, 240, 0);
  c1 = random(255);
  c2 = random(255);
  c3 = random(255);
  array = [colour1, colour2, colour3, colour4];

  var xPosition = mouseX;
  var move = map(xPosition, 0, 800, 0, 255);
  background(move);
  
  for (var i = 0; i <= windowWidth; i += 15){
    stroke(255);
    strokeWeight(1.5);
    point(i, random(650), random(800), random(650));
  }  

  if (mouseX > mouseY) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

  drawBorder();

  moveBall();

  crocodile();

  bounceBallChangeColour();

  changeSpeed();
}

/* funtions section */

function displayBall() {
  fill(0, 255, 130);
  stroke(0);
  strokeWeight(1);
  ellipseMode(RADIUS);
  ellipse(x, y, radiusX, radiusY);
}

function drawBorder() {
  // Rectangle that delimits the page (since screen with isn't always the same)
  strokeWeight(1);
  stroke(0);
  line(0, 0, 800, 0);
  line(0, 0, 0, 650);
  line(800, 0, 800, 650);
  line(0, 800, 0, 650);
}

function moveBall() {
  ellipse(x, y, radiusX, radiusY);
  // the ball needs to move
  // this means we need to increment
  x = x + speedX;
  y = y + speedY;
}

function crocodile() {
  if (mouseX > x - 100 && mouseX < x + 50 && mouseY > y - 100 && mouseY < y + 50 && mouseIsPressed) {
    background(img);
    return false;
  }
}

function bounceBallChangeColour() {
  // to make the ball bounce back: if x is bigger than 800, make variable x negative
  if (x > 775) {
    speedX = -speedX;
    fill(array[0]);
    ellipse(x, y, radiusX, radiusY);
  } else if (x < 25) {
    speedX = -speedX;
    fill(array[1]);
    ellipse(x, y, radiusX, radiusY);
  }
  if (y > 625) {
    speedY = -speedY;
    fill(array[2]);
    ellipse(x, y, radiusX, radiusY);
  } else if (y < 25) {
    speedY = -speedY;
    fill(array[3]);
    ellipse(x, y, radiusX, radiusY);
  }
}

function changeSpeed() {
  // If key is pressed while ball is moving to the right, speed increases; if ball is moving to the left, speed decreases.
  if (keyIsPressed === true) {
    speedX += 0.5;
  }
  if (speedX == 0) {
    speedX = +5;
  }
}