// Generates a random choice between rock, paper and scissors
function getRandomChoice() {
    let choice;
    const random = Math.random();

    return random >= 2 / 3
        ? (choice = 'rock')
        : random >= 1 / 3
        ? (choice = 'paper')
        : (choice = 'scissors');
}

function getComputerChoice() {
    return getRandomChoice();
}

function getUserChoice(
    userChoice = prompt('Choose between Rock, Paper and Scissors: ')
) {
    userChoice = String(userChoice);
    userChoice = userChoice.toLowerCase();

    switch (userChoice) {
        case 'rock':
            return userChoice;
            break;
        case 'paper':
            return userChoice;
            break;
        case 'scissors':
            return userChoice;
            break;
        default: // Catch-all error correction.
            return 'cancelled';
    }
}

function playRound(
    userChoice = getUserChoice(),
    computerChoice = getComputerChoice()
) {
    let result;

    if (userChoice === 'cancelled') {
        console.log(
            `Hah! You lost, your enemy picked ${computerChoice} and you gave up.`
        );
        return (result = 'userLoss');
    }

    const orderedChoices = ['rock', 'paper', 'scissors'];
    const computerIndex = orderedChoices.indexOf(computerChoice);
    const userIndex = orderedChoices.indexOf(userChoice);

    if (userIndex === computerIndex + 1 || userIndex === computerIndex - 2) {
        console.log(
            `Ooo! You win with ${userChoice} over your enemies ${computerChoice}!`
        );
        return (result = 'userWin');
    } else if (
        userIndex === computerIndex - 1 ||
        userIndex === computerIndex + 2
    ) {
        console.log(
            `Ouch! You lost with ${userChoice} against your enemies ${computerChoice}`
        );
        return (result = 'userLoss');
    } else if (userIndex === computerIndex) {
        console.log(`Hm! You both picked ${userChoice} and you tied...`);
        return (result = 'tie');
    }
}

function playGame() {
    console.log(
        "Let's start this game! It will be a best out of 5 and whoever wins the most wins the whole game!"
    );
    let winCounter = 0;
    let lossCounter = 0;
    let tieCounter = 0;

    let result = playRound();

    switch (result) {
        case 'userWin':
            winCounter += 1;
            break;
        case 'userLoss':
            lossCounter += 1;
            break;
        case 'tie':
            tieCounter += 1;
            break;
    }

    console.log(`
        Wins: ${winCounter}
        Losses: ${lossCounter}
        Ties: ${tieCounter}`);
}
