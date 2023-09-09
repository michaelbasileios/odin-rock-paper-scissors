// Function (getComputerChoice) to make computer output a random choice from 3 options 
const selections = ["Rock", "Paper", "Scissors"];
function getComputerChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
const computerSelection = getComputerChoice(selections);
console.log(computerSelection);

//get player selection from prompt 
const playerSelection = prompt("Make your choice: ");

//function to take two parameters from comp and player, compare them and declare winner
function playRound(computerSelection, playerSelection) {
    if (playerSelection === computerSelection) {
        return `Draw! Both picked ${computerSelection}`;
    } else if (playerSelection === `Rock` && computerSelection === `Paper`) {
        return `You lose! Computer picked ${computerSelection}`;
    } else if (playerSelection === `Rock` && computerSelection === 'Scissors') {
        return `You win! Computer picked ${computerSelection}`;
    } else if (playerSelection === `Paper` && computerSelection === `Rock`) {
        return `You win! Computer picked ${computerSelection}`;
    } else if (playerSelection === `Paper` && computerSelection === `Scissors`) {
        return `You lose! Computer picked ${computerSelection}`;
    } else if (playerSelection === `Scissors` && computerSelection === `Rock`) {
        return `You lose! Computer picked ${computerSelection}`;
    } else if (playerSelection === `Scissors` && computerSelection === `Paper`) {
        return `You win! Computer picked ${computerSelection}`;
    } else {
        return `Invalid entry. Try again!`;
    }
}
console.log(playRound(computerSelection, playerSelection));