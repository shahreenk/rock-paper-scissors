const choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = '';
    let formattedPlayerChoice = '';
    do {
        playerChoice = prompt("Choose Rock, Paper, or Scissors");
        formattedPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    } while (!choices.includes(formattedPlayerChoice));
    return formattedPlayerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') || 
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock') 
    ){
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

function declareWinner(){
    if (playerScore > computerScore) {
        console.log('Congrats! You won the game.')
    }
    else if (computerScore > playerScore) {
        console.log('Sorry! You lost the game.')
    }
    else {
        console.log('Womp womp...the game was a tie.')
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
    console.log('Game over.');
    declareWinner();
}

game();