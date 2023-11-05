function isRockPaperOrScissors(computerSelection) {
    if (computerSelection == 1) {
        return 'Rock' }
    
    if (computerSelection == 2) {
        return 'Paper' }
    
    else {
        return 'Scissors' }
}


function getComputerChoice () {
    let computerSelection = Math.floor(Math.random() * 3) + 1
    computerSelection = isRockPaperOrScissors(computerSelection)

    return computerSelection
}


function getPlayerSelection () {
    let playerChoice = prompt("Choose your weapon! 1 for Rock | 2 for Paper | 3 for Scissors")
    playerChoice = isRockPaperOrScissors(playerChoice)
    
    return playerChoice
}


function playRound (computerSelection, playerSelection) {
    let computerChoice = getComputerChoice()
    let playerChoice = getPlayerSelection()
}


alert("Let's start the game!")
console.log(`The computer chose ${computerChoice} the player chose ${playerChoice}`)