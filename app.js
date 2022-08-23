let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const action_p = document.querySelector(".action > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function playComputer() {
    const moves = ["rock", "paper", "scissors"];
    const randomMove = Math.floor(Math.random()*3);
    return moves[randomMove];
}

function win(){
    playerScore++
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML= computerScore;
    
};

function lose(){
    computerScore++
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML= computerScore;
};

function draw(){
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML= computerScore;
};

function result (playerMove, computerMove) {
    switch (playerMove + computerMove) {
        case "rockscissors":
            action_p.innerHTML = `Rock breaks scissors! You win!`
            break;
        case "paperrock":
            action_p.innerHTML = `Paper covers rock! You win!`
            break;
        case "scissorspaper":
            action_p.innerHTML = `Scissors cuts paper! You win!`
            break;
        case "scissorsrock":
            action_p.innerHTML = `Rock breaks scissors! You lose!`
            break;
        case "rockpaper":
            action_p.innerHTML = `Paper covers rock! You lose!`
            break;
        case "paperscissors":
            action_p.innerHTML = `Scissors cuts paper! You lose!`
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            action_p.innerHTML = `It's a draw!`
            break;
    }
}

function play(playerMove){
    const computerMove = playComputer();
    console.log(computerMove);
    switch (playerMove + computerMove) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            result(playerMove,computerMove);
            win();
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            result(playerMove,computerMove);
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            result(playerMove,computerMove);
            draw();
            break;  
    }
}

    

function buttons(){
    rock_div.addEventListener('click', function(){
        play("rock");
     })   
    paper_div.addEventListener('click', function(){
        play("paper");
     }) 
    scissors_div.addEventListener('click', function(){
        play("scissors")
     }) 
}

buttons();

