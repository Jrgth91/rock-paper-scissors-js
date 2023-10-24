// Declare global variables / cache DOM elements
let round = 1;
let computerScore = 0;
let playerScore = 0;
const action_Text = document.getElementById("gameText");
const score_Text = document.getElementById("score");

// Generate random choice for computer
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let computerChoiceInt = random;
    if (computerChoiceInt === 0 ) {
        return "Rock";
    } else if (computerChoiceInt === 1) {
        return "Scissors";
    } else {
        return  "Paper";
    }
}

// Play round using computer choice and player choice, add to either score
function playRound(computerChoice,playerChoice) {
    let winner = "";
    if (computerChoice === playerChoice) {
        return "Its a tie! :("
    } else if (computerChoice === "Rock") {
        if (playerChoice === "Paper") {
            winner = "Player 1";
        } else {
            winner = "Computer";
        }

    } else if (computerChoice === "Paper") {
        if (playerChoice === "Scissors") {
            winner = "Player 1";
        } else {
            winner = "Computer";
        }
    } else if (computerChoice === "Scissors") {
        if (playerChoice === "Rock") {
            winner = "Player 1";
        } else {
            winner = "Computer";
        }
    }

    if (winner === "Player 1") {
        playerScore++;
        action_Text.textContent = `${playerChoice} beats ${computerChoice}! Player 1 Wins!`;
        score_Text.textContent = `Player's Score: ${playerScore} Computer's Score: ${computerScore}`;
        return winner;
        
    } else {
        playerScore++;
        action_Text.textContent =`${computerChoice} beats ${playerChoice}! The Computer Wins!`;
        score_Text.textContent = `Player's Score: ${playerScore} Computer's Score: ${computerScore}`;
        computerScore++;
        return winner;
    }
    
}



// Starts game when button is clicked, add event listeners to buttons
// 
function startGame() {
    const rock_Button = document.querySelector("#rock");
    const paper_Button = document.querySelector("#paper");
    const scissors_Button = document.querySelector("#scissors");
 
    rock_Button.addEventListener("click", function() {
         startRound("Rock");
    });
    paper_Button.addEventListener("click", function() {
        startRound("Paper");
 
    });
    scissors_Button.addEventListener("click", function() {
         startRound("Scissors");
 
    });
 }


 // Handles round logic / end of game logic
function startRound(button) {
    let playerChoice = button;
    let computerChoice = getComputerChoice();
    let winner = playRound(computerChoice,playerChoice);
    console.log(playerChoice,computerChoice, winner);

    if (playerScore > 5 || computerScore > 5) {
        action_Text.textContent = "GAME OVER!"
        location.reload();

    }
    

}

startGame();







