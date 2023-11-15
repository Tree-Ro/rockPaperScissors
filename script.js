function initialiseInteractivity() {
    const rps = document.querySelectorAll('.choices');

    rps.forEach((button) => {
        button.addEventListener('click', () => {
            userChoice = button.id;
            removeHighlightCSS();
            button.setAttribute(
                'style',
                'background-color: #1a253b; box-shadow: 10px 5px 5px black;'
            );
        });
    });

    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener('click', () => {
        playRound(userChoice);

        submitButton.setAttribute('style', 'box-shadow: 5px 3px 3px black;');
        setTimeout(
            () =>
                submitButton.setAttribute(
                    'style',
                    'background-color: #1a253b; box-shadow: 10px 5px 5px black;'
                ),
            600 * 1
        );
    });

    function removeHighlightCSS() {
        rps.forEach((button) => {
            button.setAttribute(
                'style',
                'background-color: none; box-shadow: 5px 2px 2px black;'
            );
        });
    }
}

initialiseInteractivity();

// Generates a random choice
function getComputerChoice() {
    let choice;
    const random = Math.random();

    return random >= 2 / 3
        ? (choice = 'rock')
        : random >= 1 / 3
        ? (choice = 'paper')
        : (choice = 'scissors');
}

function playRound(userChoice, computerChoice = getComputerChoice()) {
    let result;

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
    } else {
        console.log('error');
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
