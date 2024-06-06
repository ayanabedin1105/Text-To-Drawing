// script.js
let textInput;
let inputText = "";

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("drawingCanvas");

  textInput = select("#textInput");
  textInput.input(updateText);
}

function updateText() {
  inputText = textInput.value();
  drawShapes();
}

function drawShapes() {
  clear();
  let x = 200;
  let y = 200;
  const shapeSize = 200;
  const shapes = inputText.split(" ");

  for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i].toLowerCase();

    switch (shape) {
      case "circle":
        ellipse(x, y, shapeSize, shapeSize);
        break;
      case "square":
        rect(x, y, shapeSize, shapeSize);
        break;
      case "rectangle":
        rect(x, y, shapeSize * 1.5, shapeSize);
        break;
      case "triangle":
        triangle(
          x,
          y + shapeSize,
          x + shapeSize / 2,
          y,
          x + shapeSize,
          y + shapeSize
        );
        break;
      case "line":
        line(x, y, x + shapeSize, y);
        break;
      case "cylinder":
        rect(x, y, shapeSize, shapeSize * 1.5);
        ellipse(x + shapeSize / 2, y, shapeSize, shapeSize / 2);
        ellipse(
          x + shapeSize / 2,
          y + shapeSize * 1.5,
          shapeSize,
          shapeSize / 2
        );
        break;
      case "boat":
        drawBoat(x, y, shapeSize);
        break;
      case "plane":
        drawPlane(x, y, shapeSize);
        break;
      case "car":
        drawCar(x, y, shapeSize);
        break;
      default:
        continue; // Ignore unrecognized words
    }

    x += shapeSize + 30;
    if (x + shapeSize > width) {
      x = 50;
      y += shapeSize + 60;
    }
  }
}

function drawBoat(x, y, size) {
  fill(102, 51, 0); // Brown color for boat body
  rect(x, y + size / 2, size * 2, size / 2); // Boat body
  fill(255); // White color for sail
  triangle(
    x + size,
    y,
    x + size * 1.5,
    y + size / 2,
    x + size / 2,
    y + size / 2
  ); // Sail
}

function drawPlane(x, y, size) {
  fill(200); // Grey color for plane body
  rect(x, y + size / 4, size * 1.5, size / 2); // Body
  triangle(
    x + size * 1.5,
    y,
    x + size * 2,
    y + size / 4,
    x + size * 1.5,
    y + size / 2
  ); // Nose
  rect(x + size / 2, y, size / 2, size / 2); // Tail
  rect(x + size / 2, y + size / 2, size / 2, size / 8); // Wing
}

function drawCar(x, y, size) {
  fill(255, 0, 0); // Red color for car body
  rect(x, y + size / 2, size * 1.5, size / 2); // Car body
  fill(0); // Black color for wheels
  ellipse(x + size / 4, y + size, size / 2, size / 2); // Front wheel
  ellipse(x + size * 1.25, y + size, size / 2, size / 2); // Rear wheel
}

function draw() {
  // Continuously updating the drawing is not necessary in this case,
  // as the drawing updates whenever the text input changes.
}
