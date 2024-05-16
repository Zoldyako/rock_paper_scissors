function generate_computer_choice() {
    let computer_choice = Math.floor(Math.random() * 3) + 1
    return computer_choice
}


function get_player_choice() {
    let player_choice = prompt("[1] Rock | [2] Paper | [3] Scissors")

    if (player_choice < 1 || player_choice > 3 || isNaN(player_choice)) {
        console.log("Invalid choice, please choose a number between 1 - 3")
        return get_player_choice()
    } 

    return parseInt(player_choice)
}


function round_winner(computer_choice, player_choice) {
    
    if (computer_choice == player_choice) {
        console.log("It's a tie")
    } 
    
    else if (
        (computer_choice == 1 && player_choice == 3) ||
        (computer_choice == 2 && player_choice == 1) ||
        (computer_choice == 3 && player_choice == 2) 
    ) {
        computer_points++
        console.log("Computer wins")
    } 
    
    else {
        player_points++
        console.log("Player wins")
    } 
}


function play_round() {
    let computer_choice = generate_computer_choice()
    let player_choice = get_player_choice()

    round_winner(computer_choice, player_choice)
}


function game() {

    let keep_going = true
    let round = 1


    console.log("Lets start the game!!")
    console.log("---------------------")

    while(keep_going) {

        console.log(`=== Round ${round} ===`)
        console.log("----------------------")

        play_round()
        round += 1
        
        console.log(`Computer points: ${computer_points} || Player points: ${player_points}`)

        answer = prompt("Do you want to continue? [Y/N]: ")
        if (answer.toUpperCase() !== "Y") {
            keep_going = false
        }
        
    }


    if (computer_points == player_points) {
        console.log("Both players have the same amount of points")
    }

    else if (computer_points > player_points) {
        console.log("The computer won")
    }

    else {
        console.log("The player won")
    }
}


let player_points = 0, computer_points = 0
game()