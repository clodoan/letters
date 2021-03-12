var sketch1 = function(p) {
  
  p.canvasWidth = 1600;
  p.canvasHeight = 800;
  p.lineHeight = 24;
  p.sep = 16;
  p.letW = 16;
  p.t = 0;

  p.setup = function() {
    p.createCanvas(p.canvasWidth, p.canvasHeight);
  }

  p.createNoise = function(index) {
    return 100/p.noise(index) - 10;
  }

  p.draw = function() {
    p.background(51);
    p.t++;

    for (i = 0, y = 0; i * p.sep < p.canvasWidth; i++) {
      for (j = 0; j * p.lineHeight < p.canvasHeight; j++) {
        //separation of words
        if (p.random() > 0.3) {
          p.x = i * p.sep;
        } else {
          p.x = i * p.sep + 80;
        }
         
        p.y = j * p.lineHeight;
        p.noFill();
        p.stroke('#fff');

        // if (p.random()<0.005) {
        //   i += 10 * p.random();
        // }
    
        p.curve (
          p.createNoise(i) + p.x,
          p.createNoise(i * 300) + p.y,
          p.x,
          p.y + p.lineHeight * 2,
          p.x - 16 * j / 24,
          p.y + 40,
          p.createNoise(j++ / 20) + p.x,
          p.createNoise(j++) + p.y
        )
      }
    }
    p.noLoop();
  }
}

var sketch2 = function(p) {
  p.sep = 80;
  p.canvasWidth = 1600;
  p.canvasHeight = 800;
  p.lineHeight = 30;
  p.letW = 15;
  p.t = 0;

  p.setup = function() {
    p.createCanvas(p.canvasWidth, p.canvasHeight);
    // p.createLoop({duration:15,gif:true})
  }


  p.createNoise = function(index) {
    return p.map(p.noise(index), 0, 1, 0, p.letW*50);
  }

  p.mousePressed() = function() {
    redraw();
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
          p.createNoise(p.t/1000),
          p.createNoise(j * p.t/3000) + p.y,
          p.x,
          p.y + p.lineHeight,
          p.x + p.cos(p.t/40)*80,
          p.y - p.sin(p.t/30)*50,
          p.createNoise(j++) + p.y,
          p.createNoise(j++) + p.y
        )
      }
    }
  }
}


var myp51 = new p5(sketch1);
// var myp51 = new p5(sketch2);


