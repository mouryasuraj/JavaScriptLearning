// Closures ---> Function along with its lexical scope is called closure



function x() {
    let b = 100;
    return function y() {
        console.log(b);
    }
}
let s = x();
s();


// settimeOut