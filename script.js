// Declare global variables / cache DOM elements
let round = 1;
let computerScore = 0;
let playerScore = 0;
let gameOver = false;
const action_Text = document.getElementById("gameText");
const score_Text = document.getElementById("score");
const rock_Button = document.querySelector("#rock");
const paper_Button = document.querySelector("#paper");
const scissors_Button = document.querySelector("#scissors");
const replay_Button = document.querySelector("#replayButton");
const buttons = document.querySelectorAll(".buttons");

// Generate random choice for computer
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let computerChoiceInt = random;
    console.log(random);
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
        computerScore++;
        action_Text.textContent =`${computerChoice} beats ${playerChoice}! The Computer Wins!`;
        score_Text.textContent = `Player's Score: ${playerScore} Computer's Score: ${computerScore}`;
        return winner;
    }
}

// Starts game when button is clicked, add event listeners to buttons
// 
function startGame() {

    buttons.forEach(button => button.addEventListener("click", function() {
        startRound(button.id);
        button.classList.add("buttonClick");
    }));

    buttons.forEach(button => button.addEventListener("transitionend", function(e){
        removeTransition(e, button);
    }))
 }

function removeTransition(e, button) {
    if (e.propertyName !== "transform") return; 
    button.classList.remove('buttonClick');
};

 // Handles round logic / end of game logic
function startRound(button) {

    let playerChoice = button;
    let computerChoice = getComputerChoice();
    let winner = playRound(computerChoice,playerChoice);
    console.log(playerChoice,computerChoice, winner);

    if (playerScore >= 5 || computerScore >= 5) {
        action_Text.textContent = `Game Over! ${winner} Wins!`;
        gameOver = true;
        buttons.forEach(button => button.setAttribute("disabled", ""));
        replay_Button.style.visibility = "visible";
        replay_Button.addEventListener("click", function(e) {
            location.reload();
        });
    }
    
}

startGame();









