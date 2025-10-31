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