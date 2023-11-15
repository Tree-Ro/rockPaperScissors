function initialiseInteractivity() {
    const rps = document.querySelectorAll('.choices');

    rps.forEach((button) => {
        button.addEventListener('click', () => {
            userChoice = button.textContent;
            removeHighlightCSS();
            button.setAttribute(
                'style',
                'background-color: #1a253b; box-shadow: 10px 5px 5px black;'
            );
        });
    });

    const submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener('click', () => {
        if (wins.textContent >= 5 || losses.textContent >= 5) {
            resetGame();
        } else {
            playRound(userChoice);
        }

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
        ? (choice = '🪨')
        : random >= 1 / 3
        ? (choice = '📰')
        : (choice = '✂');
}

function playRound(userChoice, computerChoice = getComputerChoice()) {
    let result;

    document.querySelector('#userChoice').textContent = userChoice;
    document.querySelector('#computerChoice').textContent = computerChoice;

    const orderedChoices = ['🪨', '📰', '✂'];
    const computerIndex = orderedChoices.indexOf(computerChoice);
    const userIndex = orderedChoices.indexOf(userChoice);

    if (userIndex === computerIndex + 1 || userIndex === computerIndex - 2) {
        result = 'userWin';
        displayResults(result);
    } else if (
        userIndex === computerIndex - 1 ||
        userIndex === computerIndex + 2
    ) {
        result = 'userLoss';
        displayResults(result);
    } else if (userIndex === computerIndex) {
        result = 'tie';
        displayResults(result);
    } else {
        console.log('Error: The round has no outcome.');
    }
}

function displayResults(result) {
    const userChoice = document.querySelector('#userChoice');
    const computerChoice = document.querySelector('#computerChoice');
    const submitButton = document.querySelector('#submitButton');
    const winContainer = document.querySelector('#winContainer');
    const lossContainer = document.querySelector('#lossContainer');

    if (result === 'userWin') {
        userChoice.setAttribute('style', 'color: #00d500;'); //green
        computerChoice.setAttribute('style', 'color: #af0000;'); //red
        ++wins.textContent;
    } else if (result === 'userLoss') {
        userChoice.setAttribute('style', 'color: #af0000;'); //red
        computerChoice.setAttribute('style', 'color: #00d500;'); //green
        ++losses.textContent;
    } else if (result === 'tie') {
        userChoice.setAttribute('style', 'color: #af0000;'); //red
        computerChoice.setAttribute('style', 'color: #af0000;'); //red
        ++ties.textContent;
    }

    if (wins.textContent >= 5) {
        submitButton.textContent = 'Restart?';
        winContainer.setAttribute('style', 'border: 5px dotted #00d500');
    } else if (losses.textContent >= 5) {
        submitButton.textContent = 'Restart?';
        lossContainer.setAttribute('style', 'border: 5px dotted #af0000');
    }
}

function resetGame() {
    const userChoice = document.querySelector('#userChoice');
    const computerChoice = document.querySelector('#computerChoice');
    const rps = document.querySelectorAll('.choices');

    wins.textContent = 0;
    losses.textContent = 0;
    ties.textContent = 0;
    submitButton.textContent = 'Submit';
    userChoice.removeAttribute('style');
    computerChoice.removeAttribute('style');
    submitButton.removeAttribute('style');
    winContainer.removeAttribute('style');
    lossContainer.removeAttribute('style');

    rps.forEach((button) => button.removeAttribute('style'));
}
