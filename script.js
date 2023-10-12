//BASIC CONSTANTS
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const options = [ROCK, PAPER, SCISSORS];

// FUNCTION TO GET RANDOM CHOICE FROM AN ARRAY 
function getComputerChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
//SCORE VARIABLES 
let wins = 0;
let losses = 0;
const results = document.querySelector('#results');
const playerScr = document.querySelector('#player-score');
const compScr = document.querySelector('#computer-score');
const winDeclare = document.querySelector('#win-declaration');

//FUNCTION TO DECLARE FIRST TO REACH 5 POINTS AS WINNER
const declareWinner = () => {
    if (wins >= 5) {
        alert("VICTORY!");
        location.reload();
    } else if (losses >= 5) {
        alert("DEFEAT!");
        location.reload();
    }
}

//EVENT LISTENER ON BUTTON CONTAINER
const btnContainer = document.querySelector('#button-container')
btnContainer.addEventListener('click', clickListen);

//FUNCTION TO PLAY ROUND ON BUTTON CLICK
function clickListen(event) {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }
    const computerSelection = getComputerChoice(options);
    const playerSelection = event.target.id;
    playRound(computerSelection, playerSelection);
}
//FUNCTION TO PLAY A SINGLE ROUND
function playRound(computerSelection, playerSelection) {
    //RESULT MESSAGES
    const victoryMsg = `You win! Computer picked ${computerSelection.toUpperCase()}.`;
    const defeatMsg = `You lose! Computer picked ${computerSelection.toUpperCase()}.`;
    const drawMsg = `Draw! Both picked ${computerSelection.toUpperCase()}.`;
    //ROUND RESULT FUNCTION
    function playerWins() {
        wins++
        results.textContent = victoryMsg;
        playerScr.textContent = wins;
        declareWinner();
    }
    function compWins() {
        losses++
        results.textContent = defeatMsg;
        compScr.textContent = losses;
        declareWinner();
    }
    //GAME LOGIC
    if (playerSelection === computerSelection) {
        results.textContent = drawMsg;
    } else if (playerSelection === ROCK) {
        if (computerSelection === SCISSORS) {
            playerWins();
        } else {
            compWins();
        }
    } else if (playerSelection === PAPER) {
        if (computerSelection === ROCK) {
            playerWins();
        } else {
            compWins();
        }
    } else if (playerSelection === SCISSORS) {
        if (computerSelection === PAPER) {
            playerWins(); 
        } else {
            compWins();
        }
    } else {
        return invalidMsg
    }
}





//FUNCTION TO PLAY 5 ROUNDS
// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound(computerSelection, playerSelection));
//         console.log([`Wins: ${wins}`, `Losses: ${losses}`]);
//     }
//     console.log(`Total Score:- ` + `Wins: ${wins}, ` + `Losses: ${losses}`);
//     if (wins > losses) {
//         console.log("Victory!");
//     } else if (wins === losses) {
//         console.log("Tie!")
//     } 
//     else {
//         console.log("Defeat!");
//     }
// }