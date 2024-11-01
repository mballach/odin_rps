let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

let lastRoundText = ""
let summaryText = ""

const rbtn = document.querySelector("#rock");
const pbtn = document.querySelector("#paper");
const sbtn = document.querySelector("#scissors");
const humScoreDOM = document.querySelector("#humScore");
const cpuScoreDOM = document.querySelector("#cpuScore");
const lastRoundDOM = document.querySelector('#lastRound');
const summaryTextDOM = document.querySelector('#summaryText')

rbtn.addEventListener("click",playR);
pbtn.addEventListener("click",playP);
sbtn.addEventListener("click",playS);

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

function playRound(humanChoice, computerChoice) {
    console.log("Computer has selected " +computerChoice)
    let result = humanChoice+computerChoice;
    switch (result) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            lastRoundText ="It's a tie! You both selected "+humanChoice;
            break;
        case "rockpaper":
            lastRoundText =("You selected rock and computer selected paper, you lose!");
            computerScore++;
            break;
        case "rockscissors":
            lastRoundText =("You selected rock and computer selected scissors, you win!");
            humanScore++;
            break;
        case "paperrock":
            lastRoundText =("You selected paper and computer selected rock, you win!");
            humanScore++;
            break;
        case "paperscissors":
            lastRoundText =("You selected paper and computer selected scissors, you lose!");
            computerScore++;
            break;
        case "scissorsrock":
            lastRoundText =("You selected scissors and computer selected rock, you lose!");
            computerScore++;
            break;
        case "scissorspaper":
            lastRoundText =("You selected scissors and computer selected paper, you win!");
            humanScore++;
            break;
    }
    summaryText = `Your score: ${humanScore}  -  Computer score: ${computerScore}`
}

function playR(){
    playRound('rock',getComputerChoice())
    humScoreDOM.innerText=String(humanScore);
    cpuScoreDOM.innerText=String(computerScore);
    checkScore()
    lastRoundDOM.innerText=String(lastRoundText);
    summaryTextDOM.innerText=String(summaryText);
}

function playP(){
    playRound('paper',getComputerChoice())
    humScoreDOM.innerText=String(humanScore);
    cpuScoreDOM.innerText=String(computerScore);
    checkScore()
    lastRoundDOM.innerText=String(lastRoundText);
    summaryTextDOM.innerText=String(summaryText)
}
function playS(){
    playRound('scissors',getComputerChoice())
    humScoreDOM.innerText=String(humanScore);
    cpuScoreDOM.innerText=String(computerScore);
    checkScore()
    lastRoundDOM.innerText=String(lastRoundText);
    summaryTextDOM.innerText=String(summaryText)
}

function checkScore(){
    if(humanScore==5) {
        lastRoundText = 'You are the first to reach 5 round wins, you win the game!';
        summaryText = `Final score! `+summaryText;
        humanScore=0;
        computerScore=0;
    } else if (computerScore==5){
        lastRoundText = 'The CPU was the first to reach 5 round wins, the CPU wins the game!';
        summaryText = `Final score! `+summaryText;
        humanScore=0;
        computerScore=0;
    }
}

/*function getHumanChoice() {
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
}*/
    


/* console.log(`The game is over! You finished with ${humanScore} round win(s), and the computer finished with ${computerScore} win(s).`)
if (humanScore==computerScore) {
    console.log("It was a tie!");
} else if (humanScore > computerScore) {
    console.log("You win!");
} else {
    console.log("The computer wins!");
} */

