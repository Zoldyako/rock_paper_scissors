//Transforms the number input of the player into 'rock', 'paper' or 'scissors'
function isRockPaperOrScissors(computerSelection) {
    if (computerSelection == 1) {
        return 'Rock' 
    }
    
    else if (computerSelection == 2) {
        return 'Paper' 
    }
    
    else {
        return 'Scissors' 
    }
}

//Generates a number between 1 - 3 for the computer then calls isRockPaperOrScissors
//to transform the random number into 'rock', 'paper' or 'scissors'
function getComputerChoice () {
    let computerSelection = Math.floor(Math.random() * 3) + 1
    computerSelection = isRockPaperOrScissors(computerSelection)

    return computerSelection
}


// Prompts the user for their choice
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
            return `C: ${computerSelection} VS P: ${playerSelection} | The player won!` }
}


function managePoints (computerPoints = 0, playerPoints = 0) {
    computerPoints += computerPoints, playerPoints += playerPoints
}


function gameWinner(computerPoints, playerPoints) {
    if (computerPoints > 2 || playerPoints > 2) {
        if (computerPoints > 2 && computerPoints > playerPoints) {
            return "Computer won!" 
        } 
        
        else if (playerPoints > computerPoints) {
            return "Player won!"
        }
    } else {return}
}


function playRound () {
    let computerSelection = getComputerChoice()
    let playerSelection = getPlayerChoice()
    return roundWinner(computerSelection, playerSelection)
}


function game () {
    let keepGooing = true
    let round = 1

    while (keepGooing == true) {
        
        console.log(playRound())
        console.log(`Round ${round} the player have ${playerPoints} points! the computer have ${computerPoints} points!`)
        console.log(" ")

        /* 
        if (round == 5 && computerPoints < 3 && playerPoints < 3 ) { 
            if (computerPoints > playerPoints) {
                    console.log(`The computer won the match with ${computerPoints} points!`), keepGooing = false
            } 

            else if (playerPoints > computerPoints) {
                    console.log(`The player won the match with ${playerPoints} points!`), keepGooing = false
            }

            else if (playerPoints == computerPoints) {
                    console.log(`The match ended in an tie!`), keepGooing = false
            }
        }

        if (computerPoints == 3 || playerPoints == 3) {
            if (computerPoints > 2 && computerPoints > playerPoints) {
                console.log("The computer won the match!")  
                keepGooing = false
            }
            
            else if (playerPoints == 3 && playerPoints > computerPoints) {
                console.log("The player won the match!")
                keepGooing = false 
            }
        }

        */
        round += 1  
    }
}

let playerPoints = 0, computerPoints = 0
//alert("Let's start the game!")
//game()