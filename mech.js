let click = false;

function BoardFinished(size) {
let board = document.querySelector(".board")
board.style.gridTemplateColumns = `repeat(${size},1fr)`
board.style.gridTemplateRows = `repeat(${size},1fr)`

for (let i=0;i<size*size;i++){
  let square = document.createElement("div")
  square.addEventListener("mouseover", ChangeColour);
  board.insertAdjacentElement("beforeend",square);
}

function ChangeColour(){
  if (click) {
  currentColour = document.querySelector(".favcolor");    
  currentColour.style.backgroundColor = currentColour.value
  this.style.backgroundColor = currentColour.value;}
};
 
};

BoardFinished(50);

function ResetBoard(){
  let squares = document.querySelectorAll("div");
  squares.forEach((div) => div.style.backgroundColor = "aliceblue");
}

document.querySelector("body").addEventListener("click",() => {
  click = !click
})
 





