let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".rbutton");
let winnerButton = document.querySelector("#msg");
let winnerContainar = document.querySelector(".win-message");
let newButton = document.querySelector("#new-btn");

let turno = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,7,4],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
resetGame = () =>{
    turno = true;
    enableBoxes();
    winnerContainar.classList.add("hide") ;
    
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno === true){
            box.innerText = "O";
            turno = false;
            // box.disabled = true;
           box.style.backgroundColor = "blue"
           box.style.color = "yellow";

        }
        else{
            box.innerText = "X";
            turno = true;
            // box.disabled = true;
            box.style.backgroundColor = "green";
            box.style.color = "yellow";
        }
        box.disabled = true;
        
        cheakWinner();
    });
})

enableBoxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "";
        box.style.color = "";
    }
}

const disableBoxes = ()=>{
    for(box of boxes){
    box.disabled = true;
    }
}

const showWinner= (winner)=>{
    winnerButton.innerText = "Winner is : "+winner;
    winnerButton.style.backgroundColor = "red";
    winnerButton.style.color = "yellow";
    winnerContainar.classList.remove("hide");
    disableBoxes();
}

const cheakWinner = () =>{
    for(pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);

        }

        
    }
    
}
};
newButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);