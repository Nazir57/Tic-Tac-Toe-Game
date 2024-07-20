let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");

let turn0 = true;
let count = 0;

const winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

];
const disable = ()=>{
       for(let box of boxes){
        box.disabled = true;
       }
}
const enable = ()=>{
    for(let box of boxes){
     box.disabled = false;
     box.innerText = "";
    }
}
const resetGame = ()=>{
     turn0 = true;
     count = 0;
     enable();
     msgcontainer.classList.add("hide");
}
const showWinner = (winner)=>{
msg.innerText = `Congratulations the winner is player ${winner}`;
msgcontainer.classList.remove("hide");
disable();
}
const gameDraw = ()=>{
    msg.innerText = "Game is Draw";
    msgcontainer.classList.remove("hide");
    disable();
}
const checkWinner = ()=>{
    for(let pattern of winnerPattern){
let pos1Val = boxes[pattern[0]].innerText;
let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;
if(pos1Val !="" && pos2Val != "" && pos3Val !=""){
    if(pos1Val === pos2Val && pos2Val === pos3Val){
        showWinner(pos2Val);
    }
}
    }

}
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText="0";
            box.style.color = "green";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "blue";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
        });
    });
    
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
