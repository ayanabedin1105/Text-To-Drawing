// script.js
let textInput;
let inputText = "";

function setup() {
  let canvas = createCanvas(500, 500);
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
  let x = 50;
  let y = 50;
  const lineLength = 50;
  const shapes = inputText.split(" ");

  for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i].toLowerCase();

    switch (shape) {
      case "circle":
        ellipse(x, y, lineLength, lineLength);
        break;
      case "square":
        rect(x, y, lineLength, lineLength);
        break;
      case "triangle":
        triangle(
          x,
          y + lineLength,
          x + lineLength / 2,
          y,
          x + lineLength,
          y + lineLength
        );
        break;
      case "line":
        line(x, y, x + lineLength, y);
        break;
      default:
        continue; // Ignore unrecognized words
    }

    x += lineLength + 20;
    if (x + lineLength > width) {
      x = 50;
      y += lineLength + 30;
    }
  }
}

function draw() {
  // Continuously updating the drawing is not necessary in this case,
  // as the drawing updates whenever the text input changes.
}
