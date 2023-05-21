const choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
const selectionBtns = document.querySelectorAll('button');

selectionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        playRound(e.target.id, getComputerChoice());
    })
})

function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// function getPlayerChoice(){
//     let playerChoice = '';
//     let formattedPlayerChoice = '';
//     do {
//         playerChoice = prompt("Choose Rock, Paper, or Scissors");
//         formattedPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
//     } while (!choices.includes(formattedPlayerChoice));
//     return formattedPlayerChoice;
// }

function playRound(playerSelection, computerSelection) {
    document.querySelector('#choices').textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}.`;
    if (playerSelection === computerSelection) {
        document.querySelector('#round-result').textContent = 'It\'s a tie!';
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') || 
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock') 
    ){
        computerScore++;
        document.querySelector('#round-result').textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        playerScore++;
        document.querySelector('#round-result').textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    document.querySelector('#your-score').textContent = `You: ${playerScore} `;
    document.querySelector('#computer-score').textContent = `Computer: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        declareWinner();
    }
}

function declareWinner(){
    if (playerScore > computerScore) {
        document.querySelector('#game-result').textContent = 'Congrats! You won the game.'
    }
    else if (computerScore > playerScore) {
        document.querySelector('#game-result').textContent = 'Sorry! You lost the game.'
    }
    else {
        document.querySelector('#game-result').textContent = 'Womp womp...the game was a tie.'
    }
    playerScore = 0;
    computerScore = 0;
}

// function game() {
//     // for (let i = 0; i < 5; i++) {
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         document.querySelector('#game-result' = playRound(playerSelection, computerSelection))
//     // }
//     document.querySelector('#game-result' = 'Game over.');
//     declareWinner();
// }

// game();