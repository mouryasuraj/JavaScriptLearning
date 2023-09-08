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