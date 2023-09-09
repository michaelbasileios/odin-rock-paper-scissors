// Function (getComputerChoice) to make computer output a random choice from 3 options 
const selections = ["Rock", "Paper", "Scissors"];
function getComputerChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
// console.log(computerSelection);

//get player selection from prompt 
const playerSelection = prompt("Make your choice: ");

// const computerSelection = getComputerChoice(selections);