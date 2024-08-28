let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newContainer = document.querySelector(".new-Container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#newBtn");
let drawContainer = document.querySelector(".draw-Container");
let msgDraw = document.querySelector("#msgDraw");

let turn0 = true;
let count = 0;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];

const resetGame = () =>{
    turn0 = true;
    count = 0;
    enableBoxes();
    newContainer.classList.add("hide");
    drawContainer.classList.add("hide1");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if(turn0){
            box.innerText ="o";
            turn0 = false;
        }
        else{
            box.innerText ="x";
            turn0 = true;
        }
        box.disabled = true;

        if(!checkCondition()){
            checkDraw();
        }
    });
});

const checkCondition = () => {
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log(`winner ${pos1val}`);
                showWinner(pos1val);
                return true;
            }
        }
    }
    return false;
};

const checkDraw = () => {
    if(count === 9){
        showDraw();
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    newContainer.classList.remove("hide");
    disableBoxes();
}

const showDraw = () => {
    msgDraw.innerText = "This game is a draw, play a new game";
    drawContainer.classList.remove("hide1");
    disableBoxes();
}


newBtn.addEventListener("click", resetGame);
newDrawBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);