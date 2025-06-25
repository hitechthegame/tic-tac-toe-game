let boxes=document.querySelectorAll(".box");
let restBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new_game");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg")

var turn0=1;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
    
        if(turn0==1){
            box.innerText="O";
            turn0=0;

        }
        else{
            box.innerText="X";
            turn0="1";
        }
        box.disabled=true;

        checkWinner();
    });
});

const enableBoxes=()=>{
    
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
} 

const resetGame=()=>{
    turn0=1;
    enableBoxes();
    msgContainer.classList.add("hide")
}

const disableBoxes=()=>{
    for (let box of boxes) {
        box.disabled=true;
    }

}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner=()=>{
    for(let pattern of winPatterns)
    {
        //  console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
         if(pos1val!="" &&pos2val!="" && pos3val!="" )
         { if(pos1val===pos2val && pos2val===pos3val){
            disableBoxes();
            showWinner(pos1val);
            }
         }
    }
}

newGameBtn.addEventListener("click",resetGame);
restBtn.addEventListener("click",resetGame)