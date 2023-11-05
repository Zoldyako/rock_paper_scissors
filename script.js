function isRockPaperOrScissors(computerSelection) {
    if (computerSelection == 1) {
        return 'Rock' }
    
    else if (computerSelection == 2) {
        return 'Paper' }
    
    else {
        return 'Scissors' }
}


function getComputerChoice () {
    let computerSelection = Math.floor(Math.random() * 3) + 1
    computerSelection = isRockPaperOrScissors(computerSelection)

    return computerSelection
}


function getPlayerChoice () {
    let playerSelection = prompt("Choose your weapon! 1 for Rock | 2 for Paper | 3 for Scissors")
    playerSelection = isRockPaperOrScissors(playerSelection)
    
    return playerSelection
}


function roundWinner (computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return "It's a tie" }
    
    else if (computerSelection === 'Rock' && playerSelection == 'Scissors') {
        return "The computer won" }

        else if (computerSelection === 'Rock' && playerSelection == 'Paper') {
            return "The player won" }
    
    else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        return "The computer won" }

        else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
            return "The player won" }
    
    else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        return "The computer won" }

        else { return "The player won"}
}



function playRound () {
    let computerSelection = getComputerChoice()
    let playerSelection = getPlayerChoice()
    return roundWinner(computerSelection, playerSelection)
}


function game () {
    for (i = 0; i < 5; i++) {
        console.log(`${playRound()} this round`)
    }
}


alert("Let's start the game!")
game()