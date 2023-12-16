let width=400, height=400;
let stars=[];
let factor=100;
let speedSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Vector = (x,y,z) z:속도감 표현
  speedslider=createSlider(0, 20, 5, 0.1);
  for(let i=0; i<500; i++) {
  stars[i] = createVector(
    random(-width*factor, width*factor),
    random(-height*factor, height*factor),
    random(10,400));
  stars[i].pz=stars[i].z;
  }
}
function draw() {
  background(0); // 25를 더 써서 잔상효과background(0, 25)
  fill(255,100,50);
  noStroke();
  //중앙으로 올 수 있게 원점 변경
  translate(width/2, height/2);
  for(let star of stars) {
  let x=star.x/star.z; //star.z에의해 영향받음
  let y=star.y/star.z;
  let px=star.z/star.pz;
  let py=star.y/star.pz;
  let d = map(star.z, 0, 400, 10, 1); 
  circle(x,y,d);
    stroke(255);
    line(x,y,px,py);
   star.z -= speedSlider.value();       //빨라짐
   if(star.z<1) {
    star.x=random(-width*factor, width*factor);
    star.y=random(-height*factor, height*factor);
    star.z=400;
    star.pz=400;
    }
  }
}