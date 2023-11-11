//Idea?
//Create a Script that takes inputs from the user and plays Rock Paper Scissors with them. 
//
// PSEUDOCODE!!!! 

//Declare Function getRandomChoice()
// Selects randomly between Rock, Paper & Scissors. 

//Declare Function getComputerChoice()
// - Select random between Rock, Paper & Scissors,
// Display Choice

//Declare Function getUserChoice()
//Prompt() user for their choice if none is given, generate a random one. 
// Display Choice

//Declare Function playRound(playerChoice, computerChoice)
// - Compare caseinsensitive playerChoice & computerChoice, return outcome

//Declare Function game()
// - Loop playRound 5 times, display winner after each round, 



function getRandomChoice() { // Generates a random choice between rock, paper and scissors
    let choice;
    const random = Math.random()

    return random >= 2/3 ? choice = 'rock'
    : random >= 1/3 ? choice = 'paper'
    : choice = 'scissors'
}


function getComputerChoice() {  //Created this function simply for readability of playRound function
    return getRandomChoice()
}


function getUserChoice(userChoice = prompt('Choose between Rock, Paper and Scissors: ')) { //Gets user choice and checks for errors
    userChoice = String( userChoice )
    userChoice = userChoice.toLowerCase()

    switch ( userChoice ) {
        case 'rock':
            return userChoice
            break;
        case 'paper':
            return userChoice
            break;
        case 'scissors':
            return userChoice
            break;
        case 'scissor':         // Error correction in case it's misspelled
            return 'scissors'
            break;
        default:               // Catch-all error correction. 
            return 'cancelled'
    }
}


function playRound (computerChoice = getComputerChoice(), userChoice = getUserChoice()) { 
    let result;
    
    if ( userChoice === 'cancelled' ) {
        console.log(`Hah! You lost, your enemy picked ${computerChoice} and you gave up.`)
        return result = 'userSurrender'
    }
    
    let orderedChoices = ['rock', 'paper', 'scissors']
    let computerIndex = orderedChoices.indexOf(computerChoice)
    let userIndex = orderedChoices.indexOf(userChoice)


    if ( userIndex === (computerIndex + 1) ){
        console.log(`Ooo! You win with ${userChoice} over your enemies ${computerChoice}!`)
        return result = 'userWin'
        
    } else if (userIndex === (computerIndex - 1) ) {
        console.log(`Ouch! You lost with ${userChoice} against your enemies ${computerChoice}`)
        return result = 'userLoss'
    } else {
        console.log(`Hm! You both picked ${userChoice} and you tied...`)
        return result = 'tie'
    }
}