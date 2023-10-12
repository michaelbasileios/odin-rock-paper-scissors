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
    const victoryMsg = `You win! Computer picked ${computerSelection.toUpperCase()}.`;
    const defeatMsg = `You lose! Computer picked ${computerSelection.toUpperCase()}.`;
    const drawMsg = `Draw! Both picked ${computerSelection.toUpperCase()}.`;
    const invalidMsg = `Invalid entry. Try again.`

    if (playerSelection === "" || playerSelection === null) {
        return invalidMsg;
    }

    if (playerSelection === computerSelection) {
        results.textContent = drawMsg;
    } else if (playerSelection === ROCK && computerSelection === PAPER || 
               playerSelection === PAPER && computerSelection === SCISSORS || 
               playerSelection === SCISSORS && computerSelection === ROCK) {
        losses++
        results.textContent = defeatMsg;
    } else if (playerSelection === ROCK && computerSelection === SCISSORS ||
               playerSelection === PAPER && computerSelection === ROCK ||
               playerSelection === SCISSORS && computerSelection === PAPER) {
        wins++
        results.textContent = victoryMsg;
    } else {
        return invalidMsg
    }
}
//console.log(playRound(computerSelection, playerSelection));

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