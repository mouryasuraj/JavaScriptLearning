// DOM -> Document Object Model
// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

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