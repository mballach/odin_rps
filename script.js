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

function playRound(humanChoice, computerChoice) {
    console.log("Computer has selected " +computerChoice)
    let result = humanChoice+computerChoice;

    switch (result) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("It's a tie! You both selected "+humanChoice);
            break;
        case "rockpaper":
            console.log("You selected rock and computer selected paper, you lose!");
            computerScore++;
            break;
        case "rockscissors":
            console.log("You selected rock and computer selected scissors, you win!");
            humanScore++;
            break;
        case "paperrock":
            console.log("You selected paper and computer selected rock, you win!");
            humanScore++;
            break;
        case "paperscissors":
            console.log("You selected paper and computer selected scissors, you lose!");
            computerScore++;
            break;
        case "scissorsrock":
            console.log("You selected scissors and computer selected rock, you lose!");
            computerScore++;
            break;
        case "scissorspaper":
            console.log("You selected scissors and computer selected paper, you win!");
            humanScore++;
            break;
    }
    console.log(`Your score: ${humanScore}  -  Computer score: ${computerScore}`);
}

/*const humanSelection = getHumanChoice();
const computerSelectoin = getComputerChoice();
*/


