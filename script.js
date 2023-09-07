
let refresh = document.querySelector("button");



let xTurn = true;
let count = 0;


let music = new Audio("start.wav");
let audioturn = new Audio("second.wav");
let gameover = new Audio("first.wav");
let turn = "X";
let over = false;

const changeTurn = ()=>{
   // return turn === "X"?"0": "X"
   if(turn === 'X'){
        music.play();
        return turn = 'o';
   }
   else{
    audioturn.play();
    return turn = 'X';
   }
}

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('head');
    let wins= [
        [0, 1, 2],
        [0, 3, 6],
        [2, 5, 8],
        [6, 7, 8],
        [3, 4, 5],
        [1, 4, 7],
        [0, 4, 8],
        [2, 4, 6],
    
    ];
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '') ){
            document.querySelector('.h').innerText = boxtexts[e[0]].innerText + " " + "Won"
            over = true;
            gameover.play();
            document.querySelector('.imagebox').style.width = "50px"
        }
    });
}

let boxes = document.getElementsByClassName("cell");
Array.from(boxes).forEach(element =>{

    let boxtext = element.querySelector(".head");
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
           turn = changeTurn();
           // audioturn.play();
            if(!over){
                document.querySelector(".h").innerText = "Now Turn for" +" "+ turn;
            }
            checkWin();
           // document.querySelector(".h").innerText = "Now Turn for" + turn;
        }

    })
})
function refreshPage(){
    location.reload();
}