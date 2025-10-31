console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let humanChoice = prompt("Enter your selection");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log(`${humanChoice} vs ${computerChoice}... Its a tie!`);
    }
    else if (humanChoice == "rock") {
        if (computerChoice != "paper") {
            humanScore++;
            console.log(`You Win! Rock beats ${computerChoice}`)
        }
        else {
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats Rock`)
        }
    } else if (humanChoice == "paper") {
        if (computerChoice != "scissors") {
            humanScore++;
            console.log(`You Win! Paper beats ${computerChoice}`)
        }
        else {
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats paper`)
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice != "rock") {
            humanScore++;
            console.log(`You Win! Scissors beats ${computerChoice}`)
        }
        else {
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats scissors`)
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);