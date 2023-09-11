// Logic

// Random Number
let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);


// Select
const submitBtn = document.querySelector('input[type="submit"]');
const userInput = document.querySelector('input[type="number');
const prevGuess = document.querySelector('.prevGuess');
const remainingGuess = document.querySelector('.remain');

//for displaying message that the number is High or low 
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultPara');


// created p element
const p = document.createElement('p');

// variable to store the input of what user entering
let previousGuess = [];
// variable to count how many guesses are used
let numOfGuess = 1;

let playGame = true;


// condition to check user is eligible to play or not
if (playGame) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const userGuessedInput = parseInt(userInput.value);
        validateGuess(userGuessedInput);
    })
}


// Validate the Guess
const validateGuess = (guess) => {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number more than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        previousGuess.push(guess);
        if (numOfGuess === 10) {
            displayGuessToTheUser(guess);
            displayMessage(`Game Over. Random number was ${randomNum}`);
            endGame()
        } else {
            displayGuessToTheUser(guess);
            checkGuess(guess)
        }
    }
};

// Check the guess is correct or high or low
const checkGuess = (guess) => {
    if (guess === randomNum) {
        displayMessage(`You guessed it right. The number was ${randomNum}.`);
        endGame();
    } else if (guess < randomNum) {
        displayMessage(`Number is Low`)
    } else {
        displayMessage(`Number is High`)
    }
};

// Diplay the guess to the user so that user cannot enter the same guess
const displayGuessToTheUser = (guess) => {
    userInput.value = '';
    prevGuess.innerHTML += `${guess} `;
    remainingGuess.innerHTML = `${10 - numOfGuess}`;
    numOfGuess++;
};

//to display the message
const displayMessage = (msg) => {
    lowOrHigh.innerHTML = `<h2>${msg}<h2>`
};

// endGame
const endGame = () => {
    userInput.value = '';
    submitBtn.setAttribute('disabled', '')
    submitBtn.style.cursor = 'not-allowed'
    submitBtn.style.opacity = '0.6'
    p.innerHTML = `<button class="newGame">New Game ?</button>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
};

// newGame
const newGame = () => {
    const newGameBtn = document.querySelector('.newGame');
    newGameBtn.addEventListener('click', () => {
        randomNum = parseInt(Math.random() * 100 + 1);
        previousGuess = [];
        prevGuess.innerHTML = '';
        lowOrHigh.innerHTML = '';
        numOfGuess = 1;
        remainingGuess.innerHTML = '10'
        submitBtn.removeAttribute('disabled');
        submitBtn.style.cursor = 'pointer'
        submitBtn.style.opacity = '1'
        startOver.removeChild(p);
        playGame = true;
    })
};
