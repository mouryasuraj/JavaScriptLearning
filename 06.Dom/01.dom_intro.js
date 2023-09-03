// DOM -> Document Object Model
// console.log(window) //check on browser
// console.log(window.document) //check on browser
// console.log(document) //check on browser

// console.dir()//

window.onload = () =>{
    const heading = document.createElement('h1');
    const text = document.createTextNode('Hello World');
    heading.appendChild(text)
    document.body.appendChild(heading);
};