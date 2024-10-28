console.log('hello world')

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let cpuChoice = Math.random();
    if (cpuChoice < 0.33333333) {
        return("rock")
    } else if (cpuChoice < 0.66666666) {
        return("paper")
    } else {
        return("scissors")
    }
}


function getHumanChoice() {
    let humChoice= prompt('Please enter "rock", "paper", or "scissors" to select your choice');
    humChoice = humChoice.toLowerCase();
    if (humChoice == "rock" || humChoice == "r") {
        console.log("You have selected rock");
        return "rock"
    } else if (humChoice == "paper"|| humChoice == "p") {
        console.log("You have selected paper");
        return "paper"
    } else if (humChoice == "scissors"|| humChoice == "s") {
        console.log("You have selected scissors")
        return "scissors"
    } else {
        console.log("Please enter a valid selection")
        return getHumanChoice()
    }
}



