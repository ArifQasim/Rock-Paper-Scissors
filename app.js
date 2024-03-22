let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");
let userNum = document.querySelector("#user-num");
let compNum = document.querySelector("#comp-num");


let userScore = 0;
let compScore = 0;


let showMsg = (userWin, compChoice, userChoice) => {
    if(userWin){
        msg.innerText = `You Win, Your ${userChoice} beats ${compChoice}`;
        userScore++;
        userNum.innerText = userScore;
    }else{
        msg.innerText = `You Lose!, ${compChoice} beats Your ${userChoice}`;
        compScore++;
        compNum.innerText = compScore;
    }
 }

let genComChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

let playGame = (userChoice) => {
    let compChoice = genComChoice();
    if(userChoice === compChoice){
        msg.innerText = "Game is Draw, Please again!";
    }else{
        let userWin = true;
        if(userChoice ===  "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice ===  "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showMsg(userWin, compChoice, userChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", (e)=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);

        let rect = choice.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        choice.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600); 
    });
});
