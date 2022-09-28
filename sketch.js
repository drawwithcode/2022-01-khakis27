let theta = 0.0;
let rectWidthMultiplier = 100;
let rectHeightMultiplier = 1000;
let rotationSpeed = 0.01;

let angle = 0;
let r = 10;
let spin = 0.1;
let grow = spin * 5;

let c=0
let n=.139



function setup() {
  createCanvas(400,400)
  ellipseMode(CENTER);
  rectMode(CENTER);
  smooth();
  frameRate(100);
  background("black");
}

function draw() {

  if(frameCount<550){ 
    push();
    
    noStroke();
    fill("yellow");
    angle += spin;
    r = r + grow;
    //r = noise(angle) * 100;
    // Polar to Cartesian Transformation
    var x = cos(angle)*r;
    var y = sin(angle)*r;
    translate(200, 200);
    //line(0, 0, x, y); 
    ellipse(x, y, 20, 20);
    pop();
  }

  if (frameCount>550 && frameCount<850){
    push();
    background("black");
    translate(200, 200)
    
    for(i=0;i<45;i++){
      push()
      rotate(n*i*2) 
      x=map(sin(frameCount*0.08+n*i),-1,1,50,130)
      noStroke();
      
      //blendMode(ADD)
      fill("yellow");
      //filter(BLUR)
      ellipse(x,0,x*0.9,x*0.1)
      pop()}
      pop();
  }

if(frameCount>850 && frameCount<1167){ 
  push();
  background(0);
	stroke("yellow");
	strokeWeight(30);
	noFill();

	//Stationary rect
  push();
	translate(width / 2, height / 2);
	for (let i = 0; i <120; i++) {
		rect(0, 0, i * rectWidthMultiplier, i * rectHeightMultiplier);
	}
	pop();

	//Rotating rect
	push();
	translate(width / 2, height / 2);
	rotate(theta);
	for (let i = 0; i <120; i++) {
		rect(0, 0, i * rectWidthMultiplier, i * rectHeightMultiplier);
	}
	pop();
	theta += rotationSpeed;
  pop();
}
}