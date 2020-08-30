var b = 1

function preload() {
    pl = loadImage("../images/sprites/kever.png");
}



function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  textSize(30);
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  text("breedte = "+pl.width,150,40);
  for (n=0;n < 9;n++) {
    image(pl,n*50,b*45,50,50);
    if (n == 8 && b != 9) {
        n = -1;
        b += 1;
    }

  }
}