console.log("Hello World");

playGame();

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const menu = document.querySelector("#menu");
    const results = document.querySelector("#results");
    
    const roundOutcome = document.createElement("h3");
    const humanScoreText = document.createElement("p");
    const computerScoreText = document.createElement("p");

    menu.addEventListener("click", (event) => {
        const computerSelection = getComputerChoice();
        playRound(event.target.id, computerSelection);
    });

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

        if (humanScore >= 5 || computerScore >= 5) {
            if (humanScore > computerScore) {
                roundOutcome.textContent = "Game Over! You Win!"
            } else {
                roundOutcome.textContent = "Game Over! You Lose!"
            }
            humanScore = 0;
            computerScore = 0;
        }

        results.appendChild(roundOutcome);
        results.appendChild(humanScoreText);
        results.appendChild(computerScoreText);
    }
}