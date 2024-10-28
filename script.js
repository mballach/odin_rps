console.log('hello world')

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


