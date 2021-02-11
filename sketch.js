var canvasWidth = 1600;
var canvasHeight = 800;
var lineHeight = 24;
var sep = 16;
var letW = 16;
var t = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function mousePressed() {
  redraw();
}

function createNoise(index) {
  return 100/noise(index) - 10;
}

function draw(){
  background(51);
  t++;

  for (i = 0, y = 0; i * sep < canvasWidth; i++) {
    for (j = 0; j * lineHeight < canvasHeight; j++) {
      //separation of words
      if (random() > 0.3) {
        x = i * sep;
      } else {
        x = i * sep + 80;
      }
        
      y = j * lineHeight;
      noFill();
      stroke('#fff');
  
      curve (
        createNoise(i) + x,
        createNoise(i * 300) + y,
        x,
        y + lineHeight * 2,
        x - 16 * j / 24,
        y + 40,
        createNoise(j++ / 20) + x,
        createNoise(j++) + y
      )
    }
  }
  noLoop();
  // saveCanvas();
}


