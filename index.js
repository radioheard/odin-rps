function computerPlay () {
    const choices = ["rock", "paper", "scissors"] ;
    let roll = choices[Math.floor(Math.random() * choices.length)];
    return roll;
}   

function playRound (a, b) {
    alert(`The computer picked ${b}`);
    if (a === b) {
        alert("It's a tie!") ;
    } else if (a == 'rock' && b =='paper') {
        alert("You lose!");
        computerScore++;
    } else if (a == 'rock' && b == 'scissors') {
        alert("You win!");
        playerScore++;
    } else if (a == 'paper' && b == 'rock') {
        alert("You win!");
        playerScore++;
    } else if (a == 'paper' && b == 'scissors') {
        alert("You lose!");
        computerScore++;
    } else if (a == 'scissors' && b == 'paper') {
        alert("You win!");
        playerScore++;
    } else if (a == 'scissors' && b == 'rock') {
        alert("You lose!");
        computerScore++;
    }
    console.log(`the score is ${playerScore} to ${computerScore}`)
}
    
let playerScore = 0;
let computerScore = 0;


let scissors = document.getElementById('scissors');
let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay())
})
rock.addEventListener('click', () => {
    playRound('rock', computerPlay())
})
paper.addEventListener('click', () => {
    playRound('paper', computerPlay())
})





//function game() {
   // for (let i = 0; i < 5; i++) {
   //     computerSelection = computerPlay();
  //      playerSelection = prompt('Choose your element!');
  //      playRound(playerSelection.toLowerCase(), computerSelection);
  //      alert(`the score is: ${playerScore} human ${computerScore} machine`);
        
 //    }
//}

//game();

//if (computerScore > playerScore) {
//    alert("Fs in the chat, computer wins!");
//} else if (computerScore < playerScore) {
//    alert("You win the game! GGWW")
//} else {
 //   alert("No way man! It's a bloody tie!")
//}