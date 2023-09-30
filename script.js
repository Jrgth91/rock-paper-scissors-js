/* Psudo code for a Rock Paper Scissors style command line game in Javascript */

/* Print "Rock, Paper, Scissors" */

/*  Begin with a function getComputerChoice that will randomly select one of "Rock, Paper, or Scissor" */
/*  This function should choose a random int between 1 - 3 and return that int. */
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

/*  Create function that returns a variable computerChoice that stores the converted int to Rock paper or scissors, use if statements */

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

/*  Create function that gets a variable playerChoice that asks the player to input Rock Paper or scissors then stores it as a string. 
    Make sure to store the value as a string with the 1st letter uppercased reguarless of input 
    using .toLowerCase() , .charAt() , .toUpperCase() and .slice() methods */
function getPlayersChoice() {

    let playerChoice = prompt("Players Turn: "); 
    playerChoice = playerChoice.toLowerCase();
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

}
/*  Print stuff to the console */
// console.log(playerChoice);
// console.log(computerChoice);

/*  Create the main function playRound that takes 2 paremeters (computerChoice, playerChouce) 
    The function will compare both choices, then print the winner to the console. */
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
        console.log(`${playerChoice} beats ${computerChoice}! Player 1 Wins!`);
        return winner;
    } else {
        console.log(`${computerChoice} beats ${playerChoice}! The Computer Wins!`);
        return winner;
    }
}


// Create a function called game() that will loop the playRound function 5 times and keep score of the winner at the end
// then print the winner of 
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    let computerChoice = "";
    let playerChoice = "";
    let roundWinner = "";
    while (round <= 5) 
    {
        computerChoice = getComputerChoice();
        playerChoice = getPlayersChoice();
        roundWinner = playRound(computerChoice,playerChoice);


        if (roundWinner === "Player 1") {
            playerScore++;
        } else if (roundWinner === "Computer") {
            computerScore++;
        }
        console.log(`Round: ${round} Player 1 Score: ${playerScore} Computer Score: ${computerScore}`);
        round++
    }
    if (playerScore === computerScore) {
        console.log("It's a tie??????")
    } else {
        if (playerScore > computerScore) {
            console.log("Player 1 WINS!")
        } else {
            console.log("The Computer wins :_(")
        }
    }

}

game();
/* Print the result of the playRound function (Which should print a sentence about who wins) */

