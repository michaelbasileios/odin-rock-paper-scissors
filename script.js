// Function (getComputerChoice) to make computer output a random choice from 3 options 
let options = ["rock", "paper", "scissors"];
function getComputerChoice(options) {
    return options[Math.floor(Math.random() * options.length)];
}
let computerSelection = getComputerChoice(options);
console.log(computerSelection);