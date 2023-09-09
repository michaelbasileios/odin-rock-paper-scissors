// Function (getComputerChoice) to make computer output a random choice from 3 options 
const selections = ["rock", "paper", "scissors"];
function getComputerChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
const computerSelection = getComputerChoice(selections);
console.log(computerSelection);