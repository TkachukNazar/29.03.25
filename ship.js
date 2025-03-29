let canvas;
let context;
let squarePositionX = 10;
let squarePositionY = 50;
let t;
let speedInput = document.getElementById("speed");
let speed = 0.5;

window.onload = function () {
  canvas = document.getElementById("drawingCanvas");
  context = canvas.getContext("2d");
  speedInput.value = speed;
  t = setTimeout(drawFrame.bind(this, false), 20);
};

function drawFrame(toLeft) {
  if (squarePositionX < 0 && toLeft) {
    stop();
  } else if (squarePositionX > canvas.width - 52 && !toLeft) {
    stop();
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#243sds";
    context.beginPath();
    context.moveTo(squarePositionX, 25);
    context.lineTo(squarePositionX + 22, 40);
    context.lineTo(squarePositionX + 22, 10);
    context.closePath();
    context.fill();
    context.beginPath();

    context.rect(squarePositionX, squarePositionY, 50, 20);
    context.rect(squarePositionX + 22, squarePositionY - 40, 5, 40);
    context.lineStyle = "#109bfc";
    context.lineWidth = 1;
    context.stroke();
    context.fillStyle = "#0f0";
    context.font = "italic 16px sans-serif";
    context.textBaseline = "top";
    context.fillText("Ship", squarePositionX + 5, squarePositionY + 5);
    toLeft ? (squarePositionX -= 5 * speed) : (squarePositionX += 5 * speed);

    t = setTimeout(drawFrame.bind(this, toLeft), 20);
  }
}

function stop() {
  clearTimeout(t);
}

function goRight() {
  stop();
  t = setTimeout(drawFrame.bind(this, false), 20);
}
function goLeft() {
  stop();
  t = setTimeout(drawFrame.bind(this, true), 20);
}
function changeSpeed() {
  speed = speedInput.value;
}
document.getElementById("right").addEventListener("click", goRight);
document.getElementById("left").addEventListener("click", goLeft);
document.getElementById("stop").addEventListener("click", stop);

speedInput.addEventListener("change", changeSpeed);
