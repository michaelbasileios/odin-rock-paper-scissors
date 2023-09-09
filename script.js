// Function (getComputerChoice) to make computer output a random choice from 3 options 
const selections = ["Rock", "Paper", "Scissors"];
function getComputerChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
const computerSelection = getComputerChoice(selections);
console.log(computerSelection);

//get player selection from prompt 
const playerSelection = prompt("Make your choice: ");

//function to take two parameters from comp and player, compare them and declare result
function playRound(computerSelection, playerSelection) {
    let victoryMsg = `You win! Computer picked ${computerSelection}.`;
    let defeatMsg = `You lose! Computer picked ${computerSelection}.`;
    let drawMsg = `Draw! Both picked ${computerSelection}.`;
    let invalidMsg = `Invalid entry. Try again.`
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return drawMsg;
    } else if (playerSelection.toLowerCase() === `rock` && computerSelection.toLowerCase() === `paper`) {
        return defeatMsg;
    } else if (playerSelection.toLowerCase() === `rock` && computerSelection.toLowerCase() === 'scissors') {
        return victoryMsg;
    } else if (playerSelection.toLowerCase() === `paper` && computerSelection.toLowerCase() === `rock`) {
        return victoryMsg;
    } else if (playerSelection.toLowerCase() === `paper` && computerSelection.toLowerCase() === `scissors`) {
        return defeatMsg;
    } else if (playerSelection.toLowerCase() === `scissors` && computerSelection.toLowerCase() === `rock`) {
        return defeatMsg;
    } else if (playerSelection.toLowerCase() === `scissors` && computerSelection.toLowerCase() === `paper`) {
        return victoryMsg;
    } else {
        return invalidMsg;
    }
}
console.log(playRound(computerSelection, playerSelection));