let computerScore = 0;
let playerScore = 0;
let roundResult = "Rock, paper or scissors?";
let gameResult = "First to reach 5 points wins.";

document.getElementById("player").innerHTML = `Your Score: ${playerScore}`;
document.getElementById("computer").innerHTML = `Computer Score: ${computerScore}`;
document.getElementById("result").innerHTML = roundResult;
document.getElementById("gameResult").innerHTML = gameResult;

const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) => btn.addEventListener('click', game));

const reset = document.querySelector('.reset');
reset.addEventListener('click', playAgain);

function playAgain() {
    computerScore = 0;
    playerScore = 0;
    roundResult = "Rock, paper or scissors?";
    gameResult = "First to reach 5 points wins.";

    update();
};

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
};

function update() {
    if (playerScore == 5) {
        gameResult = "You win the game!";
    }  else if (computerScore == 5) {
        gameResult = "You lost the game.";
    };

    document.getElementById("player").innerHTML = `Your Score: ${playerScore}`;
    document.getElementById("computer").innerHTML = `Computer Score: ${computerScore}`;
    document.getElementById("result").innerHTML = roundResult;
    document.getElementById("gameResult").innerHTML = gameResult;
};

function playRound(computerPlay, playerSelection) {
    if (computerPlay === playerSelection) {
        roundResult = "It's a tie.";
    }  else if (computerPlay == "rock" && playerSelection == "paper") {
        roundResult = "You won! Computer chose rock.";
        playerScore++;
    }  else if (computerPlay == "rock" && playerSelection == "scissors") {
        roundResult = "You lose! Computer chose rock.";
        computerScore++;
    }  else if (computerPlay == "paper" && playerSelection == "rock") {
        roundResult = "You lose! Computer chose paper.";
        computerScore++;
    }  else if (computerPlay == "paper" && playerSelection == "scissors") {
        roundResult = "You win! Computer chose paper.";
        playerScore++;
    }  else if (computerPlay == "scissors" && playerSelection == "rock") {
        roundResult = "You win! Computer chose scissors.";
        playerScore++;
    }  else if (computerPlay == "scissors" && playerSelection == "paper") {
        roundResult = "You lose! Computer chose scissors.";
        computerScore++;
    }

    update();
};

function game(choice) {
    let playerSelection = choice.target.id;
    let computerSelection = computerPlay();

    if (playerScore == 5 || computerScore == 5) {
        return;
    } else {
        playRound(computerSelection, playerSelection);
    };
};