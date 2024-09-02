function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 90,200);
   for(let x = 0; x< width; x+=1){
  stroke(x, 10, 150);
  line(x, 0, x, 230);
  }
  for(let x = 90; x < width; x += 2) {
     line(x+7, 0, x, 500);
  }
  for(let x = 600; x < width; x += 6) {
     line(x+9, 900, x, 500);
}
  for(let x = 30; x < width; x += 6) {
     line(x+=9, 0, x, 500);
}
  for(let x = 300; x < width; x += 90) {
     line(x+=9, 300, x, 1000);
  }
  for(let y = 10; y < width; y += 2){
  for(let x = 10; x < width; x += 2){
circle(x,200,20);
}
  }
  for(let y = 100; y < width; y += 40){
  for(let x = 1000; x < width; x += 40){
circle(x,40,20);
  }
  }

  translate(width/2, height/2);
  let angle = frameCount *0.01;
  rotate(angle);
  circle(50, 0, 40, 20);
  let rawr = frameCount % 100;
  let circleSize = map(rawr, 0, 100, 10, 200);
  circle(width/4, height/4, circleSize);
  let x = noise(frameCount * 0.01) * width;
circle(x, height/20, 100)
}
