// Functions in JS are first-class Citizens, 
// what does that mean? 
// What is the difference between Function Statements and Function Expressions? 
// What are Anonymous Functions? 
// What are First Class Functions? and What is first class Citizens
// What is the difference between Function Parameter and Function Arguments?

//Function Statements aka fucntion declaration
// Below way to create a  function statement
function a() {
    console.log('Heloe');
}

// Function expression
// When you put an anonymous fucntion or named function in a value or use as a value then it is known as fucntion expression
let b = function () {
    console.log('expression');
}


// Difference between function statement and function expression is hoisting
// when we call b() before its declaration the we will get TypeError: b is not a function because during hoisting phase or memory creation phase a() store the its function and b() stored undefined

// Anonymous function ---> A function without a name is known as Anonymous function
// Ex:
// function (){

// }
//Anonymous function like this will result out a syntax error fucntion statement require a name
// use of anonymous fucntion --> It used in a place where function are used as values


// Named function expression
let c = function xyz() {

}
// we cannot call xyz()outside of it because its not available in global scope, we can call xyz as local variable in itself
// ex:
let d = function xyz() {
    // console.log(xyz);
}


// Difference between parameters and Arguments?

// These param1 and param2 is a local variable we cannot access these variables outside of its function and these are called as parameters
let f = function (param1, param2) {
    // console.log(param1, param2);
}

f(1, 2); //The value which we passed inside a function at the time of invoking are called arguments and these variables(param1, param2) which get those values or recieved are called as parameters




// What is first class functions? aka first class citizens
// -->Fucntion that passed a function as an arument and recieved in parameter is called first class function
// -->Fucntion that return another anonymous or named function is also called first class functon
// -->The ability to used function as a value is known as first class function

// Ex:
let q = function () {
    return function () {

    }
}

let r = function (param1) {
    // console.log(param1);
}
r(function () {

})





// Asynchronous javascript and event loop

// FIrst, javascript engine create global execution context and the run the code one line at a time
// For setTimeout , DOmAPI and other api's in browser will go through task queue(call back queue) but Promises and Mutation observation will go through micro task Queue and micro task queue have high priority. So, when call stack is empty our event loop check that call stack is empty  and it take's function from micro task queue instead of taking function from task queue because micro task have high priority.


// Webapi's like
//         setTimeOut 
//         function, 
//         DOM API's, 
//         fetch(), 
//         console.log() , etc.
// is not a core part of javascript. It is a part of browser. There api's are available in window object





// Js Engine exposed vd V8 architecture
/*
1.If we need to execute any piece of javscript code we need javscript run time environment
2.In the browser, we have javsScript environment and in this js runtime environment we have js engine, web api's, task queue, microtask queue, event loop and other API's. Basically, js runtime is not possible without js engine. So, js engine is like heart of js run time environment.

Js engine :https://en.wikipedia.org/wiki/JavaScript_engine
First js engine was spidermonkey which is implemented in firefox and created by Brendan Eich(created javscript)

3.Js engine is not a machine, Its just a program which is written in low level language. V8 engine is written in c++ language

// How v8 works
1. In js engine, it takes a human readable code and process through three level:
    1.Parsing : 
        a.First it split code into tokens (eg: let a = 10, In this code let,a,=,10 is token)
        b.There is syntax parser. It takes the code and converted into AST(Absract Syntax Tree)
            Eg: https://astexplorer.net/
    2.compilation:
        a.Below AST tree will passed into the compilaton phase
        b.Just In Time COmpilation uses both interpreter and compiler 
        c.Interpreter take the AST and convert this code into byte code and put this code to the executio phase and simultaneously compiler optimized the code. 
    3.execution:
        a. Execution is not possible without these two major components of js engine that is Menory heap and call stack
        b. Memory is the place where all varibles and function assigned memory.
        c. There is also a garbage collector. It uses the Mark and Sweep algorithm to take the unneccesary variables and function which is not in used.


        Marks and Sweep algorithm : https://www.tutorialspoint.com/explain-in-detail-about-mark-and-sweep-algorithm-in-javascript

// Overview to javscript
Things learned:
    1. JS runtime environment contains all elements required to run JS.
    2. It contains JS engine, set of API's, callback queue, microtask queue, event loop.
    3. JS engine is a piece of code.
    4. Process includes Parsing ---> Compilation -----> Execution.
    5. Parsing breaks code into tokens and converts it into AST(Abstract Syntax Tree).
    6. Modern JS engine follows JIT compilation, it interprets while it optimises code as much as it can.
    7. Execution and Compilation are done together.
    8. Execution has Garbage collector and other optimisation such as inlining, copy elusion, inline caching etc.


*/





















// Question from FreeCodeCamp of javascript
// URL to the questions : https://www.freecodecamp.org/news/javascript-interview-prep-cheatsheet/


// Variables
// checkers{ '==' it check for value only  and '===' it check for value + data type}

// Arrays and its method
// Methods: map, filter, forEach


// Map and filter return a new copy of original arry but forEach doesn't
// Map is simialr to forEach but has two key differences:
//      1. map() return a new array and forEach doesn't
//      2. You can do method chaining in map() but not in forEach()


// Filter the words which have length greater than 6 with Array.filter() method
const words = ['react', 'script', 'interview', 'style', 'javascript'];

// console.log(words.filter((item) => item.length > 6));


// Filter the words which have length greater than 6 without Array method
let newArr = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 6) newArr.push(words[i]);
}

// console.log(newArr);



// Function programming in Javascript

// Just like how we used variable to store values, we can use function to stora a piece of code which we can reuse.

// const greet = () => {
//     let prefix = 'Mr.'
//     return (name) => {
//         console.log(`${prefix} ${name}, Welcome`);
//     }
// }

// console.log(greet()('Shiv'));
// let fucn = greet();
// console.log(fucn('Suraj'));



// Function scope in javascript
// Scopes determines from where the variable are accessible


var a = 5 // we can access this a anywhere

function adder() {
    let b = 7
    // console.log(a + b)
}

console.log(adder())

// console.log(b) // Error as b is not accessible outside the function

{
    const c = 10
    // console.log(c) // 10
}

// console.log(c) // Error as c is not accessible outside the block 





// Closures in JavaScript (❗important) 🔒
// We have already used a closure without even realizing it. In the example below, prefix is a closed-over-variable.

const greet = () => {
    const prefix = 'Mr'
    return (name) => {
        // console.log(`${prefix} ${name}, welcome!`)
    }
}

console.log(greet()('Jack'))
// This section will have a lot of fancy words, so bear with me. We will cover them one by one.

// MDN says:

// A function bundled together with its lexical environment forms a closure.

// Okay, what is a lexical environment?

// It is essentially the surrounding state – the local memory along with the lexical environment of its parent.

// Whaaat? 🤯 I know it's a bit of a doozy. Let's understand it with a simple example.

function x() {
    var a = 7
    function y() {
        // console.log(a)
    }
    return y
}

var z = x()
// console.log(z) // [Function: y]
// z()
// When x is invoked, y is returned. Now, y is waiting to be executed. Kind of like a loaded gun waiting to be shot! 🔫

// So, when we finally invoke z, y is invoked. Now, y has to log a so it first tries to find 🔍 it in the local memory but it's not there. It goes to its parent function. It finds a there.

// Voila! There you have it - this is closure.

// Even when functions are returned (in the above case y) they still remember their lexical scope (where it came from)

// Totally unrelated quote for kicks 👻:

// They may forget what you said - but they will never forget how you made them feel - Carl W. Buehner

// I swear the rest of the article is legit 🤞 Keep reading.


// Advantages of Closures in JavaScript 😎
// 1.Currying
let add = function (x) {
    return function (y) {
        // console.log(x + y)
    }
}

let addByTwo = add(2)
addByTwo(3)
// 2.Data Hiding/Encapsulation
// Suppose you want to create a counter application. Every time you call it, the count increases by 1. But you don't want to expose the variable outside the function. How to do it?

// You guessed it – closures!

function Counter() {
    var count = 0
    this.incrementCount = function () {
        count++
        // console.log(count)
    }
}

// console.log(count) // Error: count is not defined
var adder = new Counter()
adder.incrementCount() // 1



// Disadvantages of Closures in JavaScript
// 1.Overconsumption of memory or memory leaks can happen.
// For example, the closed-over-variable will not be garbage collected. This is because, even if the outer function has run, the returned inner function still has a reference to the closed-over-variable.

// Note: Garbage collection basically removes unused variables from the memory automatically.


// Hoisting

function consoleNum() {
    console.log(num)
    var num = 10
}

// consoleNum() // undefined



// {
//     var num
//     console.log(num)
//     num = 9
// }


var num
// console.log(num)
num = 9





// How this keyword works

// Example 1
console.log(this)


// example 2
function myFunc() {
    console.log(this);
}

let obj = {
    myFunc: myFunc,
    name: 'suraj',
    suraname: 'mourya'
}

// obj.myFunc()

// We again get the window object. So, we can see that the value of this depends on how and where are we doing the calling.

// What we just did above is called Implicit Binding. The value of this got bound to the object.

// There is another way to use this. Explicit binding is when you force a function to use a certain object as its this.


const myData = {
    name: 'Rajat',
    city: 'Delhi',
    displayStay: function () {
        console.log(this.name, 'stays in', this.city)
    },
}
// myData.displayStay()

//   create an object yourData and try to use displayStay
const yourData = {
    name: 'Suraj',
    city: 'Mumbai'
}


//   // answer
// myData.displayStay.call(yourData)





// Prototypes 
let arr = ['Rajat', 'Raj']
// console.log(arr);
// console.log(arr.__proto__.forEach)
// console.log(arr.__proto__) // same as Array.prototype
// console.log(arr.__proto__.__proto__) // same as Object.prototype
// console.log(arr.__proto__.__proto__.__proto__) // null



// prototyes inheritance
// This is prototypal inhritance 

const obj1 = {
    name:"suraj",
    city:"mumbai"
}

const obj2 = {
    name:"shiv"
}

obj2.__proto__ = obj1



// console.log(obj2.city);


for (let i = 1; i <=5; i++) {
    setTimeout(() => {
        console.log(i);
    },i* 1000);    
}