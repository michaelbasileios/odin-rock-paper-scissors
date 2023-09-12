// Function (getComputerChoice) to make computer output a random choice from 3 options 
const selections = ["Rock", "Paper", "Scissors"];
function getComputerChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// console.log(computerSelection); //temp

//get player selection from prompt 
let wins = 0;
let losses = 0;
let computerSelection = getComputerChoice(selections).toLowerCase();
let playerSelection;

//function to take two parameters from comp and player, compare them and declare result
function playRound(computerSelection, playerSelection) {
    playerSelection = prompt("Make your choice: ").toLowerCase();
    const victoryMsg = `You win! Computer picked ${computerSelection}.`;
    const defeatMsg = `You lose! Computer picked ${computerSelection}.`;
    const drawMsg = `Draw! Both picked ${computerSelection}.`;
    const invalidMsg = `Invalid entry. Try again.`

    if (playerSelection === undefined || playerSelection === null) {
        return invalidMsg;
    } else if (playerSelection === computerSelection) {
        return drawMsg;
    } else if (playerSelection === `rock` && computerSelection === `paper` || 
               playerSelection === `paper` && computerSelection === `scissors` || 
               playerSelection === `scissors` && computerSelection === `rock`) {
        losses++
        return defeatMsg;
    } else if (playerSelection === `rock` && computerSelection === 'scissors' ||
               playerSelection === `paper` && computerSelection === `rock` ||
               playerSelection === `scissors` && computerSelection === `paper`) {
        wins++
        return victoryMsg;
    } else {
        return invalidMsg
    }
}
//console.log(playRound(computerSelection, playerSelection));


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(computerSelection, playerSelection));
        console.log([`Wins: ${wins}`, `Losses: ${losses}`]);
    }
    console.log(`Total Score:- ` + `Wins: ${wins}, ` + `Losses: ${losses}`);
    if (wins > losses) {
        console.log("Victory!");
    } else if (wins === losses) {
        console.log("Tie!")
    } 
    else {
        console.log("Defeat!");
    }
}