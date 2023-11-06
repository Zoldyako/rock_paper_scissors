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
    if (computerSelection == playerSelection) {
        return`C: ${computerSelection} VS P: ${playerSelection} | It is a tie!` }
    
    else if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
            managePoints(computerPoints += 1)
            return `C: ${computerSelection} VS P: ${playerSelection} | The computer won!` }

        else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
            managePoints(playerPoints += 1)
            return `C: ${computerSelection} VS P: ${playerSelection} | The player won!` }
    
    else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        managePoints(computerPoints += 1) 
        return `C: ${computerSelection} VS P: ${playerSelection} | The computer won!` }

        else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
            managePoints(playerPoints += 1)
            return `C: ${computerSelection} VS P: ${playerSelection} | The player won!` }
    
    else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        managePoints(computerPoints += 1)
        return `C: ${computerSelection} VS P: ${playerSelection} | The computer won!` }

        else { 
            managePoints(playerPoints += 1)
            return `C: ${computerSelection} VS P: ${playerSelection} | The player won!`}
}


function managePoints (computerPoints = 0, playerPoints = 0) {
    return computerPoints += computerPoints, playerPoints += playerPoints
}


function gameWinner(computerPoints, playerPoints) {
    if (computerPoints > 2 || playerPoints > 2) {
        if (computerPoints > 2 && computerPoints > playerPoints) {
            return "Computer won!" } 
        
        else if (playerPoints > computerPoints) {
            return "Player won!"
        }
    } 
}


function playRound () {
    let computerSelection = getComputerChoice()
    let playerSelection = getPlayerChoice()
    return roundWinner(computerSelection, playerSelection)
}


function game () {
    for (i = 0; i < 5; i++) {
        console.log(playRound())
        console.log(`Round ${i+1} the player have ${playerPoints} point! the computer have ${computerPoints} point!`) }
}

let playerPoints = 0, computerPoints = 0
alert("Let's start the game!")
game()