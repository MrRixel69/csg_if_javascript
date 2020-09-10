
var bal = {
    x:225,
    y:225,
    diameter:150,


    beweeg() {
        this.x = constrain(this.x, this.diameter/2, width - this.diameter/2);
        this.y = constrain(this.y, this.diameter/2, height - this.diameter/2);
        
        if (keyIsDown(37)) {
            this.x -= 5;
        }
        
        if (keyIsDown(39)) {
            this.x += 5;
        }
        if (keyIsDown(38)) {
            this.y -= 5;
        }
        if (keyIsDown(40)) {
            this.y += 5;
        }
    },
    teken() {
        fill('red');
        ellipse(this.x,this.y,this.diameter);
    }
};


function setup() {
  canvas = createCanvas(450,450);
  textSize(30);
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  background('silver');
  bal.beweeg();
  bal.teken();
}