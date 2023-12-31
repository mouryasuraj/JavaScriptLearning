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

### project 2:BMI Calculator

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



## project 5: Unlimited Color 

<br>

#### HTML CODE:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unlimited Colors</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    
    <!-- Unlimited Colors -->
    <div class="container">
        <h1>Unlimited Colors</h1>
        <button id="start">Start</button>
        <button id="stop">Stop</button>
    </div>

    <!-- JavaScript -->
    <script src="./script.js"></script>
</body>
</html>
```


#### CSS CODE:

<br>

```CSS
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
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* container */

.container{
    text-align: center;
}
h1{
    font-size: 45px;
    color: rgb(32, 134, 175);
    margin-bottom: 30px;
}
button{
    padding: 10px 15px;
    font-size: 20px;
    cursor: pointer;
    border: 0;
    color: white;
    background-color: rgb(90, 178, 212);
    margin: 10px;
    border-radius: 3px;
}
button:hover{
    opacity: 0.8;
}

```


#### JAVASCRIPT CODE:

<br>

```javascript
// Logic

// random color
const randomColor = () => {
   const hex = '0123456789ABCDEF';
   let color = '#'
   for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)]
   }
   return color;
}

// function to startChangingColor
let intervalId;
const startChangingColor = ()=>{
    const changingColor =()=>{
        document.body.style.backgroundColor = randomColor();
    }
    if(!intervalId){
        intervalId = setInterval(changingColor, 1000)
    }
}

// function to stopChangingColor
const stopChangingColor = ()=>{
    clearInterval(intervalId);
    intervalId  = null;
}


// select
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
```




## project 6: Keyboard 

<br>


#### HTML CODE:

<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keyboard</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    

    <!-- keyboard -->
    <div class="insert">
        <p>Press any key</p>
    </div>


    <!-- JavaScript -->
    <script src="./script.js"></script>
</body>
</html>
```


#### CSS CODE:

<br>

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
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}


/* insert */
.insert p{
    font-size: 25px;
    color: rgb(31, 140, 183);
    font-weight: bold;
}

th,td{
    padding: 10px;
}


```

#### JAVASCRIPT CODE:

<br>

```javascript
// Logic

// select
let insert = document.querySelector('.insert');

window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
    <table border=2>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'Space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    `
    document.querySelector('table').style.fontSize = '30px'
    document.querySelector('table').style.borderCollapse = 'collapse'
    document.querySelector('table').style.color = 'rgb(16, 78, 103)'
})
```


## project 7: Get Github Profile Info 

<br>


#### HTML CODE:

<br>

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Github Profile Info</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./styles.css">
    <!-- fontawesome Link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>

    <!-- Get Github Profile Info by entering username of Github -->

    <main>

        <!-- heading -->
        <h1 class="heading">Get Github Profile Info</h1>

        <!-- form started -->
        <form>
            <!-- Enter your username -->
            <input id="input" type="text" placeholder="Enter your username">
            <!-- submit button -->
            <button>Submit</button>
        </form>
        <!-- form ended -->

        <!-- profile card started -->
        <div class="profile-card">
               <p class="title">Your Information Will Display Here</p>
        </div>
        </div>
        <!-- profile card ended -->

        <!-- modal started -->
        <div class="modal">
            
        </div>
        <!-- modal ended -->
    </main>




    <!-- JavaScript -->
    <script src="./script.js"></script>
</body>

</html>

```


### CSS CODE:

<br>

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif
}

/* body and html */
body,html{
    width: 100%;
    height: 100vh;
    font-size: 10px;
    /* background-color: rgb(199, 213, 228); */
}

/* main Started */

main{
    width: 100%;
    height: 100%;
    padding: 2em 3em;
    background: linear-gradient( rgb(214, 224, 235),rgb(170, 201, 234),  rgb(100, 159, 219));
}


/* heading */
.heading{
    font-size: 3em;
    color: rgb(17, 57, 72);
    font-weight: 800;
    text-align: center;
    margin-top: 1em;
}


/* form started */

form{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40em;
    margin:1em auto;
    padding: 1.5em;
}

form input{
    padding: 1em;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-size: 1.5em;
    font-weight: bold;
    color: rgb(6, 62, 85);
}
form button{
    margin: 1em auto;
    padding: 10px 25px;
    border-radius: 3px;
    font-size: 1.8em;
    cursor: pointer;
    border: 0;
    background-color: rgb(14, 62, 79);
    color: white;
    transition: all ease .5s;
}
form button:active{
    transform: scale(0.8);
}

/* form ended */


/* profile card started */

.profile-card{
    max-width: 60em;
    margin: auto;
    background-color: rgb(251, 251, 252);
    height:fit-content;
    padding: 20px;
    border-radius: 5px;
}
.profile-card .title{
    text-align: center;
}
.profile-card p{
    font-size: 1.5em;
    font-weight: bold;
    color: rgb(20, 53, 66);
    margin: 8px 0;
}
.profile-card p span{
    color: rgb(30, 120, 155);
}

.profile-card p a{
    color: rgb(18, 148, 31);
}

.profile-card p a:hover{
    color: rgb(20, 53, 66);
}

.profile-card img{
    float: right;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: all ease .3s;
}
.profile-card img:hover{
    transform: scale(0.9);
}
/* profile card ended */


/* modal started */

.modal{
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
}
.modal .pop-up{
    position: relative;
}
.modal img{
    border-radius: 50%;
}
.modal i{
    font-size: 4em;
    position: absolute;
    top: 0;
    cursor: pointer;
    transition: all ease .5s;
}
.modal i:hover{
    transform: rotate(180deg);
}

/* modal ended */


/* main ended */


@media screen and (max-width:500px) {
    body,html{
        font-size: 9px;
    }
    .profile-card{
        padding: 15px;
    }
    .modal img{
        width: 250px;
    }
    .modal i:hover{
        transform: none;
    }
    .profile-card img:hover{
        transform: none;
    }
}

```


### JAVASCRIPT CODE:

<br>

```javascript
// Logic


// get user value from input field

const form = document.querySelector('form');
let input = document.querySelector('#input');
let valueOfUser;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    valueOfUser = String(input.value);
    if (valueOfUser === '') {
        alert('Please enter your github username')
    }

    fetchData();
    showData();
    input.value = '';
    showModal();
})



// logic to fetch user data and show in the html page
let userData;
function fetchData() {
    const requestURL = `https://api.github.com/users/${valueOfUser}`;
    const xhr = new XMLHttpRequest;
    xhr.open('GET', requestURL);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            userData = JSON.parse(this.responseText)
            console.log(userData.avatar_url);
        }
    }
    xhr.send()
}


// showData
function showData() {
    let profileCard = document.querySelector('.profile-card')
    profileCard.innerHTML = 
    // `
    // <img class="profileImg" src="${userData.avatar_url}" alt="">
    // <p> <span>Name:</span> ${userData.name}</p>
    // `
        `
        <img class="profileImg" src="${userData.avatar_url}" alt="">
        <p> <span>Name:</span> ${userData.name}</p>    
        <p> <span>Username:</span> ${userData.login}</p>    
        <p> <span>Followers:</span> ${userData.followers}</p>    
        <p> <span>Following:</span> ${userData.following}</p>    
        <p> <span>Public Repository:</span> ${userData.public_repos}</p>    
        <p> <span>Created at:</span> ${userData.created_at}</p>    
        <p> <span>Updated at:</span> ${userData.updated_at}</p>    
        <p> <span>Bio:</span> ${userData.bio}</p>    
        <p> <span>Location:</span> ${userData.location}</p>    
        <p> <span>Twitter:</span> <a target='_blank' href="https://twitter.com/${userData.twitter_username}">${userData.twitter_username}</a></p>    
        <p> <span>Blog:</span> <a target='_blank' href="${userData.blog}">${userData.blog}</a></p>    
        <p> <span>Github Profile:</span> <a target='_blank' href="${userData.html_url}">${userData.html_url}</a></p> 
    `
}


// Logic to show modal when user clicks on profile image started

// function to show modal
function showModal() {
    // modal
    // select
    // card Img
    const profileImg = document.querySelector('.profileImg')
    // modal
    let modal = document.querySelector('.modal')
    
    // eventListener to show modal
    profileImg.addEventListener('click', () => {
        modal.style.zIndex = '1'
    })

    
    // modal innerHTML
    modal.innerHTML =
    `
    <div class="pop-up">
    <img class="modalImg" src="${userData.avatar_url}" alt="">
    <i class="fa-solid fa-xmark" style="color: #ffffff;"></i>
    </div>
    `

    // cross button
    const crossIcon = document.querySelector('.fa-solid');
    // eventListener to close modal
    crossIcon.addEventListener('click', () => {
        modal.style.zIndex = '-1';
    })
}


// Logic to show modal when user clicks on profile image Ended




```
