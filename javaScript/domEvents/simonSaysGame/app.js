let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level  = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
    console.log("game has started");
    started = true;
    levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);   
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);   
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random btn choose
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(function(){
                levelUp();
            },2000);
        }
    }
    else{
        h2.innerHTML = `GameOver! Your score is <b>${level}</b> <br>press any key to start`;
        reset();
    }

}

 let allbtns = document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click", btnPress);
 }

 function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
 }