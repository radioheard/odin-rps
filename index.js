function computerPlay () {
    const choices = ["rock", "paper", "scissors"] ;
    let roll = choices[Math.floor(Math.random() * choices.length)];
    return roll;
}   

let computerSelection = computerPlay();
let playerSelection = undefined;
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
        alert("whaaaaa?");
    }
    }
function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = prompt('Choose your element!');
        playRound(playerSelection.toLowerCase(), computerSelection);
        alert(`the score is: ${playerScore} human ${computerScore} machine`);
        
     }
}

game();

if (computerScore > playerScore) {
    alert("Fs in the chat, computer wins!");
} else if (computerScore < playerScore) {
    alert("You win the game! GGWW")
} else {
    alert("No way man! It's a bloody tie!")
}