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
