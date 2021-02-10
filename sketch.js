var sketch1 = function(p) {
  p.sep = 80;
  p.canvasWidth = 1600;
  p.canvasHeight = 800;
  p.lineHeight = 40;
  p.letW = 20;
  p.t = 0;

  p.setup = function() {
    p.createCanvas(p.canvasWidth, p.canvasHeight);
  }


  p.createNoise = function(index) {
    return p.map(p.noise(index), 0, 1, 0, p.letW*50);
  }

  p.draw = function() {
    p.background(51);
    p.t++;

    for (var i = 0; i * p.sep < p.canvasWidth; i++) {
      for (var j = 0; j * p.lineHeight < p.canvasHeight; j++) {
        p.x = i * p.sep;
        p.y = j * p.lineHeight;
        p.noFill()
        p.stroke('#fff')
    
        p.curve (
          p.createNoise(i) + p.x,
          p.createNoise( j * p.t/1000) + p.y,
          p.x,
          p.y + p.lineHeight,
          p.x,
          p.y,
          p.createNoise(j++) + p.x,
          p.createNoise(j++) + p.y
        )
      }
    }
  }
}


var myp51 = new p5(sketch1);
var myp51 = new p5(sketch2);


// var sep = 80;
// var canvasWidth = 1600;
// var canvasHeight = 800;
// var lineHeight = 40;
// var letW = 20;
// var t = 0;

// function setup() {
//   createCanvas(canvasWidth, canvasHeight);
// }

// function createNoise(index) {
//   return map(noise(index), 0, 1, 0, letW*50);
// }

// function draw() {
//   background(51);
//   t++;

//   for (var i = 0; i * sep < canvasWidth; i++) {
//     for (var j = 0; j * lineHeight < canvasHeight; j++) {
//       var x = i * sep;
//       var y = j * lineHeight;
//       noFill()
//       stroke('#fff')
  
//       curve (
//         createNoise(i) + x,
//         createNoise(j*t/1000) + y,
//         x,
//         y + lineHeight,
//         x,
//         y,
//         createNoise(j++) + x,
//         createNoise(j++) + y
//       )
//     }
//   }
// }


