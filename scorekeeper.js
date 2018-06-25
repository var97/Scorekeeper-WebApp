var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetbutton = document.querySelector("#p3");
var numinput = document.querySelector("input");
var par = document.querySelector("p");
var winingscoredisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var p1display = document.querySelector("#s1")
var p2display = document.querySelector("#s2")
var gameOver = false;
var winingscore = 5;

p1button.addEventListener("click",  function(){
  if(!gameOver){
p1score++;
if(p1score === winingscore){
  p1display.classList.add("winner");
  gameOver = true;
}
p1display.textContent = p1score;
}}
);
p2button.addEventListener("click",  function(){
  if(!gameOver){
p2score++;
if(p2score === winingscore){
  p2display.classList.add("winner");
  gameOver = true;
}
p2display.textContent = p2score;
}});

resetbutton.addEventListener("click", function(){
reset();
});

function reset(){
  p1score = 0;
  p2score = 0;
  p1display.textContent = 0;
  p2display.textContent = 0;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
  gameOver = false;
}

numinput.addEventListener("change", function(){
  winingscoredisplay.textContent = this.value;
  winingscore = Number(this.value);
  reset();
});
