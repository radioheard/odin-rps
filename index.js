function game () {
    
    let winner = undefined
    if (computerScore === 5) {
        winner = document.createTextNode("F's in the chat, computer wins!")
        win.appendChild(winner);
        win.appendChild(button);

    } else if (playerScore === 5) {
        winner = document.createTextNode("Congratulations, you win! GGWW")
        win.appendChild(winner);
        win.appendChild(button);        
    }

}

function computerPlay () {
    const choices = ["rock", "paper", "scissors"] ;
    let roll = choices[Math.floor(Math.random() * choices.length)];
    return roll;
}   

function playRound (a, b) {   
    alert(`The computer picked ${b}`);
    if (a === b) {
    } else if (a == 'rock' && b =='paper') {
        computerScore++;
    } else if (a == 'rock' && b == 'scissors') {
        playerScore++;
    } else if (a == 'paper' && b == 'rock') {
        playerScore++;
    } else if (a == 'paper' && b == 'scissors') {
        computerScore++;
    } else if (a == 'scissors' && b == 'paper') {
        playerScore++;
    } else if (a == 'scissors' && b == 'rock') {
        computerScore++;
    }
    score.nodeValue = `Player ${playerScore} Computer ${computerScore}`
    game();
}


let playerScore = 0;
let computerScore = 0;
let scoreboard = document.getElementById('score');
let score = document.createTextNode(`Player ${playerScore} Computer ${computerScore}`);
scoreboard.appendChild(score);
let win = document.getElementById('win');

let button = document.createElement('button');
button.innerHTML = "Rematch?";
button.addEventListener ('click', () => window.location.reload())



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