function computerPlay () {
    const choices = ["rock", "paper", "scissors"] ;
    let roll = choices[Math.floor(Math.random() * choices.length)];
    return roll;
}   

let computerSelection = computerPlay();
console.log(computerSelection)
let playerSelection = prompt('Choose your element!');
let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("It's a tie!") ;
    } else if (playerSelection == 'rock' && computerSelection =='paper') {
        alert("You win!");
        playerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        alert("You lose!");
        computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        alert("You win!");
        playerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        alert("You lose!");
        computerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        alert("You win!");
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        alert("You lose!");
        computerScore++;
    } else {
        alert("whaaaaa?")
    }
    }
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection.toLowerCase(), computerSelection)
        console.log(`the score is: ${playerScore} human ${computerScore} machine`)
     }
}

game()