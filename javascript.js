console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

const menu = document.querySelector("#menu");
const results = document.querySelector("#results");

const roundOutcome = document.createElement("h3");
const humanScoreText = document.createElement("p");
const computerScoreText = document.createElement("p");

menu.addEventListener("click", (event) => {
    let target = event.target;

    const computerSelection = getComputerChoice();
    playRound(target.id, computerSelection);
});



function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    switch(choiceNumber) {
        case 0:
            return "rock";
        
        case 1:
            return "paper";

        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        roundOutcome.textContent = `${humanChoice} vs ${computerChoice}... Its a tie!`;
    } else if (
        (humanChoice == "rock" && computerChoice != "paper") ||
        (humanChoice == "paper" && computerChoice != "scissors") ||
        (humanChoice == "scissors" && computerChoice != "rock") ) {
        
        humanScore++;
        roundOutcome.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        roundOutcome.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    }

    humanScoreText.textContent = `Player Score: ${humanScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;

    results.appendChild(roundOutcome);
    results.appendChild(humanScoreText);
    results.appendChild(computerScoreText);
}

function playGame() {



    // for (i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }
    // console.log("Game Over!")
    // if (humanScore == computerScore) {
    //     console.log(`Score: ${humanScore} vs ${computerScore}... Its a tie!`);
    // } else if (humanScore > computerScore) {
    //     console.log(`Score: ${humanScore} vs ${computerScore} You Win!`);
    // } else {
    //     console.log(`Score: ${humanScore} vs ${computerScore} You Lose!`);
    // }
}