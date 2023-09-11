# Projects

## Solution Code

### project 1: Color Changer

<br>

#### HTML CODE:


```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Changer</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./styles.css">
</head>
<body>

    <!-- Color Changer -->

    <main>
        <!-- Heading -->
        <h1>Color Scheme Switcher</h1>
        <!-- color buttons -->
        <div class="colors">
            <span class="button" id="grey"></span>
            <span class="button" id="white"></span>
            <span class="button" id="blue"></span>
            <span class="button" id="yellow"></span>
        </div>
        <!-- sub-heading -->
        <h2>Try to click on one of the color above <span>to change the background of this page!</span></h2>
    </main>

    <!-- javascript -->
    <script src="./script.js"></script>
</body>
</html>
```

<br>

### CSS CODE:
```CSS
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body, html{
    font-size: 10px;
}

/* main */
main{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 3em;
    text-align: center;
}
.colors{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 50px 0;
}

.button{
    width: 100px;
    height: 100px;
    border: 2px solid black;
    cursor: pointer;
}
.button:nth-child(1){
    background-color: grey;
}
.button:nth-child(2){
    background-color: white;
}
.button:nth-child(3){
    background-color: blue;
}
.button:nth-child(4){
    background-color: yellow;
}
```

<br>

### JavaScript CODE:
```javascript
// Logic

// select all button and body tag
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body');


// forEach
buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let bgColorOfCurrentElem = e.target.id;
        body.style.backgroundColor = bgColorOfCurrentElem;
    })
})

```

### project 2: Color Changer

<br>

#### HTML CODE:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./styles.css">
</head>

<body>

    <!-- BMI Calculator -->

    <main>
        <div class="BMI">
            <h1>BMI Calculator</h1>
            <form>
                <!-- Height -->
                <p><label for="height">Height in cm</label></p>
                <input type="number" id="height"  placeholder="Enter Height">
                <!-- Weight -->
                <p><label for="weight">Weight in kg</label></p>
                <input type="number" id="weight" placeholder="Enter Weight">
                <!-- showBMI -->
                <p class="showBMI">0</p>
                <div class="buttons">
                    <!-- Calculate Button -->
                    <button class="calculate">CALCULATE</button>
                    <!-- clear button -->
                    <button class="clear">Clear</button>
                </div>
            </form>

            <!-- BMI Guide -->
            <div class="bmi-info">
                <h2>BMI Weight Guide</h2>
                <div class="guide">
                    <p>Under Weight = Less than 18.5</p>
                    <p>Normal Weight = 18.5 to 25</p>
                    <p>Over Weight = More than 25</p>
                </div>
            </div>
        </div>
    </main>



    <!-- JavaScript -->
    <script src="./script.js"></script>
</body>

</html>
```


<br>

#### CSS CODE:

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body, html{
    font-size: 10px;
}

input::-webkit-inner-spin-button, input::-webkit-outer-spin-button{
    -webkit-appearance: none;
}

/* main */
main{
    padding: 1em 2em;
    width: 100%;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
}
main .BMI{
    width: 100%;
}

main h1{
    text-align: center;
    color: skyblue;
    margin-top: 1.5em;
    font-size: 3em;
}

/* Form */
main form{
    padding: 15px 25px;
    margin: 1.8em auto 0 auto;
    width: 100%;
    max-width: 500px;
    background-color: rgb(255, 255, 255);
}
form p{
    font-size: 2.5em;
    font-weight: bold;
    color: rgb(77, 114, 128);
    margin: 30px 0 5px 0;
}
form input{
    border: 0;
    outline: none;
    padding: 15px 10px;
    font-size: 16px;
    background-color: rgb(244, 244, 244);
    width: 100%;
    color: rgb(129, 129, 129);
    font-weight: bold;
    border-radius: 3px;
}
form .showBMI{
    border: 1px solid;
    width: fit-content;
    margin: 20px auto;
    padding: 5px 12px;
    background-color: rgb(58, 176, 223);
    color: white;
    border-radius: 3px;
}
/* Buttons */
.buttons{
    display: flex;
    align-items: center;
    justify-content: center;
}
/* calculate button */
.calculate, .clear{
    border: 0;
    cursor: pointer;
    padding:10px 15px;
    margin:20px 20px 0 0;
    border-radius: 3px;
    display: block;
    background-color: rgb(47, 146, 185);
    font-weight: bold;
    color: rgb(255, 255, 255);
}
.calculate:hover{
    background-color: rgb(89, 161, 189);
}



/* BMI info */
.bmi-info{
    padding: 15px 25px;
    width: 100%;
    max-width: 500px;
    margin: auto;
}
.bmi-info h2{
    font-size: 2em;
    color: rgb(68, 163, 201);
    margin: 10px 0 20px 0;
}
.bmi-info .guide p{
    font-size: 16px;
    margin: 0 0 8px 0;
    color: rgb(1, 66, 33);
    font-weight: 700;
}


```

<br>

#### JavaScript CODE:

```Javascript
// Logic

// select button, input

const form = document.querySelector('form')
const clear = document.querySelector('.clear')
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')

// Events on Forms
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const valOfHeight = parseInt(document.querySelector('#height').value)
    const valOfWeight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('.showBMI')

    if(valOfHeight === '' || valOfHeight <= 0){
        results.innerHTML = `Please enter a valid height in cm`
    }else if(valOfWeight === '' || valOfWeight <= 0){
        results.innerHTML = `Please enter a valid weight in kg`
    }else{
        const bmi = (valOfWeight / ((valOfHeight * valOfHeight)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`
    }
})


// Event on clear button
clear.addEventListener('click', ()=>{
    height.value = '';
    weight.value = '';
})
```

<br>


### project 3: Digital Clock

<br>

#### HTML CODE:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    
    <!-- Digital Clock -->
    <div class="clock">
        <div class="clock-heading">Your local time</div>
        <div class="time"></div>
    </div>


    <!-- JavaScript -->
    <script src="./script.js"></script>
</body>
</html>
```

<br>

#### CSS CODE:

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif
}

body{
    font-size: 10px;
}


/* digital clock */

/* clock */
.clock{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
}

/* clock heading */
.clock .clock-heading{
    font-size: 2.5em;
    font-weight: bold;
    color: rgb(28, 150, 198);
    margin-bottom: 20px;
}


/* clock time */
.clock .time{
    background-color: rgb(255, 132, 0);
    padding: 10px 15px;
    border-radius: 3px;
    font-size: 2.5em;
    font-weight: bold;
    color: white;
}
```


<br>

#### JAVASCRIPT CODE:


```javascript
// Logic

// select

const time = document.querySelector('.time');

// Show time
setInterval(()=>{
    const date = new Date();
    time.innerHTML = date.toLocaleTimeString();
}, 1000)
```


<br>


### project 4: Guess the Number Game

<br>

#### HTML CODE:
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess the number: Game</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    
    <!-- Guess the Number: Game -->

    <main>
        <!-- heading -->
        <h2>Number Guessing Game</h2>
        <div class="container">
            <!-- Game Info -->
            <div class="game-info">
                <p>Try and guess a random integer number between 1 to 100.</p>
                <p>You have 10 attempts to guess the right number.</p>
            </div>
            <!-- GuessANumberHeading -->
            <h1>Guess a number</h1>
            <!-- form -->
            <form>
                <input type="number" placeholder="Enter a number">
                <input type="submit">
            </form>
            <!-- result Para -->
            <div class="resultPara">
                <!-- previous guess -->
                <p class="previousGuess">Previous Guess: <span class="prevGuess"></span></p>
                <!-- Remaining Guess -->
                <p class="remainingGuess">Attempt left: <span class="remain">10</span></p>
                <!-- low ot high msg  -->
                <p class="lowOrHigh"></p>
            </div>
        </div>
    </main>

    <!-- JavaScript -->
    <script src="./script.js"></script>
</body>
</html>

```
<br>

#### CSS CODE:

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif
}

body,html{
    font-size: 10px;
    height: 100vh;
    background-color: rgb(213, 223, 235);
}

input::-webkit-inner-spin-button, input::-webkit-outer-spin-button{
    -webkit-appearance: none;
}

input::placeholder{
    text-align: center;
}


/* main */
main{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em 2em;
}

/* container */
.container{
    width: 100%;
    max-width: 60em;
    background-color: rgb(196, 208, 216);
    border-radius: 5px;
    box-shadow: inset 6px 6px 8px rgba(0, 0, 0, 0.3), inset -6px -6px 8px rgba(255, 255, 255, 0.5);
    text-align: center;
    padding: 20px;
}

/* heading */
h2{
    font-size: 2.8em;
    font-weight:900;
    margin: 20px;
    color: rgb(15, 78, 103);
    letter-spacing: 1.5px;
}

/* game info  */
.game-info p{
    margin-bottom: 8px;
    font-size: 2em;
    font-weight: bold;
    color: rgb(5, 58, 58);
}

/* h1 */
h1{
    font-size: 4.1em;
    margin: 4.5rem 0;
    color: rgb(18, 125, 161);
    font-weight: 900;
    letter-spacing: 2px;
}
/* form input */
form input{
    display:block;
    margin: auto;
}

form input[type="number"]{
    padding: 10px 20px;
    outline: none;
    border: 0;
    border-radius: 3px;
    width: 65%;
    margin-bottom: 20px;
    font-size: 1.8em;
    color: rgb(90, 93, 94);
    font-weight: bold;
    text-align: center;
}
form input[type="submit"]{
    border: 0;
    outline: none;
    padding: 10px 20px;
    background-color: rgb(34, 91, 114);
    color: white;
    font-size: 1.8rem;
    border-radius: 3px;
    cursor:pointer;
}
.newGame{
    border: 0;
    outline: none;
    padding: 10px 20px;
    background-color: rgb(34, 91, 114);
    color: white;
    font-size: 1.8rem;
    border-radius: 3px;
    cursor:pointer;
}


/* previous guess */
.previousGuess, .remainingGuess{
    font-size: 2.2em;
    margin-top: 20px;
    font-weight: bold;
    color: rgb(41, 111, 138);
}
.previousGuess span{
    background-color: skyblue;
    padding: 2px 10px;
    border-radius: 2px;
    font-weight: bold;
    color: rgb(248, 248, 248);
}


/* media query */

@media screen and (max-width:600px) {
    body,html{
        font-size: 8px;
    }
    .container{
        max-width: 100%;
    }
}

```

<br>

#### JavaScript CODE:

```javascript
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


```