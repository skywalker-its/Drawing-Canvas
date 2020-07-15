var database;
var drawing = [];

function setup(){
   canvas = createCanvas(800,600);

} 

function draw(){
  background("yellow");

  if(mouseIsPressed){
    var point = {
      x: mouseX,
      y: mouseY
    }
    drawing.push(point);
  }

  beginShape();
  stroke("red");
  strokeWeight(6);
  //noFill();
  for (var i = 0; i<drawing.length;i++){
    vertex(drawing[i].x, drawing[i].y)
  }

  endShape();
}