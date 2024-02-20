// Interview Preparation for frontend developer---> https://www.hellojavascript.info/docs/general-javscript-questions
/*
--------------------------Script tag------------------------------
    1.Used: Script tag in html is used to include javascript code within an html document, allowing it to interact with and modify the content of a page.
    2.used in html: Script tag is used in html to include javascripot code in a web page. It can be used to define inline js or to reference external js files.
    3.Differnce in inline and external js: 
        a.Inline javascript defined directly with an html document using the script tag.
        b.while external js is contained is a separate file that is referenced using script tag and put the path of external js file in the 'src' attribute in script tag.
        c.External js is the preferred way to attach js because it can be cached by the browser and reused across multiple pages.
    4.With the help of src attribute in script tag we can attach external js file in html document.
    5.The script tag can be included in head or body section of an html document. It is generally recommended to include script at the end of the body section to avoid blocking the rendering of the page.
    6.defer: 
        1.defer attribute on a script tag indicates that scipt should be executed after the page has finished parsing.
        2.This can improve the performance of page loading.
    7.async: 
        1.async attribute on a script tag indicates that script should be executed asynchronously, meaning it will not block the rendering of the page.
        2.This can be particularly useful for improving the page loading performance.







-----------------use strict----------------------

NOte: Sometimes you'll see the defualt, non-strict mode referred to as sloppy mode. This isn't an official term, but be aware of it, just in case.

    1.In javascript, strict mode is a feature introduced in ES5 to enhance the language by catching common coding errors.
    2.When strict mode is enabled, the interpreter is more strict in parsing and executing code.
    3.To enable strict mode, add this line at the beginning of script or a function:
                "use strict"
    4.Features:     
            1.Variables must be declared with var, let and const before being used.
            2.Assigning value to an undeclared variable, deleting variables, and read only properties results in errors.
            3.'this' is undefined in fucntions that are not methods or constructors.


-------------------let, const and var-------------------

var:
    1.Function scopeed: Variables declared with var are only scoped to the function they are declared in. If declared outside any function, they have global scope.
    2.Can be redeclared and reassigned.
        Ex: var a = 5;
            var a = 10; //this is allowed
        
let: 
    1.Block-scoped: Varibles declared with let are scoped to the block, statement, or experssion where they are used.
    2.Cannot be redeclared within the same scope but can be re-assigned
        Ex: let y = 15;
            y = 20;

const:
    1.Blocked scoped: similar to let, const is block scoped.
    2.Must be initialized at the time of declaration and cannot be reassigned.
        Ex: const a = 45;
            a = 50; //This is not allowed. It would result in an error.

Things learned:
    1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
    2. Temporal Dead Zone exists until variable is declared and assigned a value.
    3. window.variable OR this.variable will not give value of variable defined using let or const.
    4. We cannot redeclare the same variable with let/const(even with using var the second time).
    5. const variable declaration and initialisation must be done on the same line.
    6. There are three types of error: 
            [1] referenceError {given where variable does not have memory allocation} 
            [2] typeError {given when we change type that is not supposed to be changed} 
            [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
    7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
    8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.

---------------hoisting----------------------------
    1.Hoisting in javascript is a behaviour where variable and function declarations are moved to the top of their scope during the compilation phase, before the code is executed. This means that we can used variables and funcions before they are declared in the scope.
    2.Two main aspects of hoisting:
        1.Variable hoisting:
            a.When a variable is declared with var, the declaration is hoisted to the top of the scope, but the assignmemt remains in place
            b.Ex: console.log(x);  //undefined
                  var x = 5;
                  console.log(x); // 5
            c.In the first console.log, 'x' is hoisted and declared but not assigned value yet, so it's 'undefined'.
            d.It's important to note that hoisting works differently for variable declared with var compared to let and const.
            e.Varribles declared with let and const are hoisted to their scope but are not initialized until the actual declaration in encountered in the code. This is known as 'Temporal Dead Zone.'
        2.Function hoisting:
            a.Function declaration are hoisted to the top of their containing scope.
            b.Ex: foo();
                  function foo(){
                    console.log('Hello, hoisted function')
                  }
            c.foo() is hoisted and it can be called before its actual declaration in the code.


--------------Temporal Dead Zone-------------------

    1.A Temporal Dead Zone is a block where variables are inaccessbile until the computer initialize it with a value.
    2.The tempotal dead zone is a concept in javascript that refers to the period between entering a scope and the actualdeclaration of a variable. During this period accessing the variable results in a 'referenceError'.
    3.Ex: console.log(x) // referenceError
          let x = 5;
    4.In the above example, reference 'x' before its declaration is within the temporal dead zone leading to a ReferenceError.



---------------Data Types---------------------------
    1.There are 8 types available in javscript: Number, Null, string, Symbol, undefined, boolean, bigInt, object
                  1.The first seven in the above types are primitive data types which can hold only on item that is 'string' or 'number'.
                  2.Object can hold date set and more complex things. It is non-primitive data type.
                  3.Primitive data types are pass by value. This means that these data types gives a copy of variable, and it doesn't affect the original variable
                  4.Non-primitive data types like array and object are pass by reference. This means that if we give a reference of a variable then it will affect the original one if anything changed to that variable.
    2.'typeof' operator:
                  1.It is used to identify the type of a specific value or argument.
                  2.It returns a string indicating the type of the operand.
                  3.Javascripot supports two forms syntax of it:
                        a.operator: typeof x
                        b.fucntion: typeof(x);
    3.The number type represent numeric data, including integers and floating-point numbers.It also support special numeric values such as infinity and NaN.
                  Ex: let myInt = 45;   console.log(typeof myInt) //number
                      let myInt2 = 411.2; console.log(typeof myInt2) //number
    4.The 'number' type cannot represent number values greater than (2^23 - 1) and less that -(2^23 - 1) for negative, and anything beyound these range considered as bigInt
                  Ex:let num = 0.1 + 0.3
                     console.log(num) // 0.30000000000000004
                  To avoid this issue js have toFixed() method
                     console.log(num.toFixed(2)) // 0.30
    5.we can create bigInt by puting 'n' to the integer literal or by calling BigInt constructor
    6.There are three ways to create a string representation of a value:
                  1.Using double quotes(" ")
                  2.Using single quotes(' ')
                  3.Using backticks(` `). Backticks have additional feature that allows you to embed expressions and special characters directly in a string using template literals(` `) by surrounding then with ${...}. We can write multi line string in template literal.
                    ex: let templateLiterls = `HI, I am ${name}`
    7.The boolean logical type in js has two values: 
                  1.true
                  2.false
            a.It is commonly used for conditional statement, loops and comparisons in programming
            b.It is used to control the flow of program using conditional statements.
    8.Null is a unique value that represent "nothing", "empty" or "value unknown" but not equal to undefined.
    9.Undefined: 
            1.It is a datatype represent a variable or object that has beed delclared but not assigned a value, or a function that has no return value.
            2.Technically, it is possible to explicitly assigned undefined to a variable but it is not recommended.
    10.typeof x acts as an operator, and typeof(x) is a function, but they work with or without parathesis. The result is the same.
    11.typeof operator return's a string with the name of type, like 'number' if it is a number or 'function' if it is a function.
    12.a. null and undefined are two distinct data types that represent different types of non-values.
       b. undefined represent a value that has not been declared or has not yet been assigned a value, while null represent a delibrate absence of a value. 
       NOte: typeof undefined returns undefined but typeof null return 'object', which is a quirk in the language design that cannot be fixed for backward compatibility reasons.
    13.NaN is stand for "Not a Number". It is a special value that represents the result of an invalid or undefined mathematical operation.
    14.bigInt is a datatype that represent integer of arbitrary length, allowing for precies calculations beyond the limitations of number data type.
    15.Primitive is a basic data type that represent a single value, while an object is a complex stucture that represent a collection of key value pairs
    16.The main differnce between primitive data type and object data types is that primitive data types are immutable and object are mutable. Primitive's are pass by value and object's are pass by reference.

    


*/























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
// When you put an anonymous fucntion or a named function in a value or use as a value then it is known as fucntion expression
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

// FIrst, javascript engine create global execution context and then run the code one line at a time
// For setTimeout , DOmAPI and other api's in browser will go through task queue(call back queue) but Promises and Mutation observation will go through micro task Queue and micro task queue have high priority. So, when call stack is empty our event loop check that call stack is empty  and it take's function from micro task queue instead of taking callback's from task queue because micro task have high priority.


// Webapi's like
//         setTimeOut 
//         function, 
//         DOM API's, 
//         fetch(), 
//         console.log() , etc.
// is not a core part of javascript. It is a part of browser. There api's are available in window object





// Js Engine exposed vs V8 architecture
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
        a.Above AST tree will passed into the compilaton phase
        b.Just In Time COmpilation uses both interpreter and compiler 
        c.Interpreter take the AST and convert this code into byte code and put this code to the execution phase and simultaneously compiler optimized the code. 
    3.execution:
        a. Execution is not possible without these two major components of js engine that is Memory heap and call stack
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



// SetTimeout trust issues

// console.log('Start');

// setTimeout(() => {
//     console.log('call back');
// }, 5000);

// console.log('End');


// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate < startDate + 10000){
//     endDate = new Date().getTime();
// }


// console.log('While Expires');

// First browser console.log--> start, end while Expires , call back

// Note: Concurrency model is the way to execute asynchronous code





// Higher order Function

// When we passed a function inside another function as an argument or return a function inside another funciton is called Higher order function
// The function which is passed into the higher order function is known as callback funciton which is called sometime else in the program


const radius = [3, 1, 2, 4];
const area = function (radius) {
    return Math.PI * radius * radius
}
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}
const diameter = function (radius) {
    return 2 * radius;
}

// const calculate = function (radius, formula) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(formula(radius[i]))
//     }
//     return output;
// }

// console.log(radius.map(area));
// What does map do behind the scene

Array.prototype.calculate = function (formula) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(formula(this[i]))
    }
    return output;
}

// console.log(radius.calculate(area));


// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));





// Prototypes and prototypal inheritance\
// Prototypes
// Imagine a Recipe Book: Prototypes in JavaScript are like a recipe book. They contain instructions (methods) and a list of ingredients (properties) for creating objects.

// Master Template: Think of the prototype as a master template or blueprint. It's a predefined structure that other objects can follow.

// Prototypal Inheritance
// Family Tree Connection: Just like in a family, where children inherit traits from their parents, in JavaScript, objects can inherit properties and behaviors from their prototypes.

// Chain of References: Objects in JavaScript have a link to their prototype. If an object doesn't have a property or method, it looks up the chain to its prototype to find what it needs.



// Map, filter reduce

// Map --> Map function is used when we want transformation in array and map function return a new array. 
const arr1 = [5, 1, 4, 6];
const output = arr1.map((x) => x.toString(2));
// console.log(output);

// Filter ---> filter function is used to just filter out what you need and it also return a new array

const output1 = arr1.filter((x) => x > 4);
// console.log(output1);


// Reduce ---> 
// In JavaScript, the reduce() method is used to iterate through an array and accumulate a single result (such as a number, object, string, etc.) based on the elements of the array. The reduce() method executes a provided callback function on each element of the array and returns a single value.

// Ex : Find sum of element in arr1
const output2 = arr1.reduce((acc, curr) => {
    return acc + curr;
}, 0)
// console.log(output2);

// Ex : Find Max value in arr1

const arr2 = [5, 1, 14, 6];

// NOrmal way to find sum of all the element present in the arr2
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
// console.log(sum(arr2));

// Use reduce method to find the sum of the element
const output3 = arr2.reduce((acc, curr) => {
    // acc = acc + curr
    // return acc
    return acc + curr
}, 0)
// console.log(output3);



// Find max  number using reduce function
const output4 = arr2.reduce((acc, curr) => {
    if (acc < curr) {
        acc = curr;
    }
    return acc
}, 0)

// console.log(output4);



// More examples 

// Map
const users = [
    { firstName: 'Suraj', lastName: 'Mourya' },
    { firstName: 'Vipin', lastName: 'Yadav' },
    { firstName: 'Vishal', lastName: 'Gupta' },
    { firstName: 'Suresh', lastName: 'Raina' },
]
const output5 = users.map(x => x.firstName + " " + x.lastName);
// console.log(output5);


// reduce
const user1 = [
    { firstName: 'Suraj', lastName: 'Mourya', age: 26 },
    { firstName: 'Vipin', lastName: 'Yadav', age: 45 },
    { firstName: 'Vishal', lastName: 'Gupta', age: 25 },
    { firstName: 'Suresh', lastName: 'Raina', age: 56 },
    { firstName: 'Vipin', lastName: 'Yadav', age: 22 },
    { firstName: 'Vishal', lastName: 'Gupta', age: 26 },
    { firstName: 'Suresh', lastName: 'Raina', age: 46 },
]

// {26 : 2, 25:2, ....}
const output6 = user1.reduce((user, curr) => {
    if (user[curr.age]) {
        user[curr.age] = user[curr.age] + 1
    } else {
        user[curr.age] = 1
    }
    return user
}, {})
// console.log(output6);



// filter out first name whose age is less than 30
const output7 = user1.filter((x) => {
    if (x.age < 30) return
}).map((x) => x.firstName)  //here map function will map on what filter function returns

// console.log(output7);


// Filter our first name whose age is less than 30 using reduce
const output8 = user1.reduce((firstName, user) => {
    if (user.age < 30) {
        firstName.push(user.firstName)
    }
    return firstName
}, [])
// console.log(output8);





// Callback
// We have face two issues in callback 
/*
 
1.Callback hell
  ---> When passing callback function inside another function as an argument and pass another callback function into the inside function and it continues. It forms call back hell.
  It forms code unreadable and unmaintainable and it creates code horizontally instead of vertically.

2.Inversion of control
  ---> The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and program become very difficult to maintain. This mechanism is called Inversion of control.
*/




// Promises  
/*
Simple definition---> Promises is used to handle asynchronous javscript.

const cart = ["shoes", "pants", "kurta"]

createOrder(cart, function(orderId){
    proceedToPayment(orderId)
})

// With promise

const promise = createOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId)
});
*/

// 1.Promise is like placeholder which will be filled later with the value
// 2.A container for future value
// 3.Promise is an object representing the eventual completion or failure of an asynchronous operation.

// Promise chaining
// Why we need promise
// use of promise
// advantage of promise






// How to create promises in js?

// const cart = ["shoes", "pants", "kurta"]

// const promise = createOrder(cart);

// promise.then((orderId)=>{
//     console.log(orderId);
// })
// .catch((err)=>{
//     console.log(err.message);  //message is used to show error without red color and it simply log the error
// })

// function createOrder(cart) {
//     const pr = new Promise((resolve, reject)=>{
//         // Logic to validate cart
//         if(!validateCart(cart)){
//             let err = new Error('Cart is not valid')
//             reject(err)
//         }
//         let orderId = '465678'
//         if(orderId){
//             resolve(orderId);
//         }
//     })
//     return pr;
// }

// function validateCart(cart){
//     return false;
// }



/*

// Promises chaining

const cart = ["shoes", "pants", "kurta"]


// promise handle
createOrder(cart)
.then((orderId)=>{
    console.log('Order id:' +orderId);
    return orderId
})
// .catch((err)=>console.log(err.message))      //If I handle error here then it will handle the error above to its code and below code also run
.then(orderId => proceedToPayment(orderId))
.then(orderId => showSummary(orderId))
.then(orderId => walletUpdated(orderId))
.catch((err)=>console.log(err.message)) //meassage is used to show error without red color and it simply log the error and it will handle error from the top of the code It will not handle error for below code
.then(()=>{
    console.log("No matter what happnes, I will definitely be called!");
})

function createOrder(cart) {
    const pr = new Promise((resolve, reject)=>{
        // Logic to validate cart
        if(!validateCart(cart)){
            let err = new Error('Cart is not valid')
            reject(err)
        }
        let orderId = '465678'
        if(orderId){
            resolve(orderId);
        }
    })
    return pr;
}
// Fucntion to validate cart
function validateCart(cart){
    console.log("Card is validated");
    return true;
}
// Fucntion to proceed with payment
function proceedToPayment(orderId){
    return new Promise((resolve,reject)=>{
        resolve(console.log('Payment Completed for id: '+ orderId))
    })

}

// Fucntion to show the summary
function showSummary(orderId){
    console.log('Summary for id: '+ orderId);
}

// Fucntion to update the wallet
function walletUpdated(orderId){
    console.log('Wallet updated for id: '+ orderId);
}

*/






// async await
/*
----------------What is async?------------------
--->1.Async is a keyword that is used before a function to create a async function.
    2.By property of a async function. It will always return promise.
    3.There are two things to know that
        a.If we return promise manually then it will be fine and return a promise
        b.But when we return a value then async will convert that value into promise and return a promise. That's why async always return a promise.

Ex: async function return a value
*/
// async function getData(){
//     return "Async Promise"
// }
// const data1 = getData();
// data1.then(res => console.log(res))


// Ex: aysnc fucntion return a promise
const p = new Promise((resolve) => {
    resolve('Async function return a promise')
})

async function getData() {
    return p;
}
const data1 = getData();
// data1.then(res => console.log(res))



// -----------------using await with async-----------------------
// ----> 1. async-await combo is used to handle promises.

// How we handle promises before async await
function getData1() {
    p.then(res => console.log(res))
}
// getData1();

// How to handle promises using async await
async function handlePromise() {
    const val = await p; //We can use await in front of promise and it will resolved the promise.
    console.log(val);
}
// handlePromise();

// ------------what is await?---------------
// ---->1.await is a keyword that can only be used inside an async function.
//      2.We can use await in front of promise and it will resolved the promoise



// Differnce between async await and normal function using promise

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise is resolved')
    }, 20000)
})

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise2 is resolved')
    }, 10000)
})



//-------------------- NOrmal fucntion---------------------
function showOutput() {
    // Browser will registed this call back funciton for seconds and then js engine store it into microtask queue  and when call stack is empty then it will execute. javascrip wait for nothing it will execute below all the code.
    promise.then(res => console.log(res));
    console.log("Namaster JavaScript");
}
// showOutput();


//-------------------- Async await fucntion---------------------

async function showOutput1() {
    console.log("i'll Execute first");

    // Js engine was waiting for promise to resolved
    await promise.then(res => console.log(res));
    console.log('Namaste Javscript');

    //here it will not await for 10 second for each of the await code it will only  wait for 5 second for both the cases.
    await promise2.then(res => console.log(res));
    console.log('Namaste Javscript 2');
}
// showOutput1();

// ----------------------What happens behind the scenes of async await-------------------------
/*
1. Initially, call stack is empty
2.And then in call stack showOuput1 is in call stack and it print line by line
3.and it waits for the promise to be resolved for a specific period of time and it will suspend the fucntion so that the call stack or mainthread will not blocked. Then after time is completed showOutput1 again coma back in call stack and resume executing where it left. Js engine track behind the scenes what is executed and what not.
*/



// -----------real world example of async await---------------------------

// fetch api using async await

const api_url = 'https://api.github.om/users/mouryasuraj'

async function fetchData() {

    //     const data = await fetch(api_url)
    //     const jsonValue = await data.json()
    //    console.log(jsonValue);

    //one way to handle error
    // try {
    //     const data = await fetch(api_url)
    //     const jsonValue = await data.json()
    //     console.log(jsonValue);
    // } catch (error) {
    //     console.log(error);
    // }


}

fetchData().catch(err => console.log(err)); //another way to handle error


// Interview
/*
1.What is async-await
*/




// promise api's and interview question on it.
/*
There are total 4 Promise API's

1.Promise.all
--->a.It is used to handle multiple promises together.
    b.It takes array's of promises as an argument.
    ex: Promise.all([p1,p2,p3]).
    c.It returns an array of result from each of the promise passed as an argument.
    d.For success case:
        Suppose, we passed three promise p1,p2,p3 and it takes 3s,2s,1s repectively time to resolved the promise. Promise.all() wait for each of them to finish. And after 3s it will return an array of collected results.
    e.For failure case:
        Let's take above example, we had pass three promises p1,p2,p3 and it takes 3s,1s,2s  respectively. And from one of these, suppose p2 is fail to resolved, then immediately as soon as error occured Promise.all() will through an error as a result. It takes 1s to throw an error because p2 takes 1s. 
        Promise.all() is not wait for other promise.
    f.So, if all promise is resolved then it will through an collection of result and if any one is failed then immediately it  will through an error.



Suppose, our one promise is failed but we want other's promise to be fullfilled then we used Promise.allSettled()   
2.Promise.allSettled
--->a.It is same as Promise.all() but error handling is different from Promise.all()
    b.Promise.all is not waiting for other promises to get fullfilled but Promise.allSettled() will wait for each of them to get settled and returns an array of value. If promise is fullfilled then it will return  a value and if it gets failed then it will through an error. but it always through an array of value.
    c.If p2 get failed after 1s then Promise.allSettled wait for other's to get settled and then after 3s it return's an array.


3.Promise.race()    
--->a.It is same as Pomise.all() but a little differ from it.
    b.It's like race, who wins first will get the first prize
    c.Let's take above example, It will through value of the first settled promise. This was the sucess case.

    Suppose we got our first promise failed
    Then it will return the error whether the promise is sucess or failed. It will always return the value not a array.


4.Promise.any()
--->a.It will seeking for the first setteld resolved promise and return the value of that promise
    b. What if first promise get failed?
        Then it will ignore that promise and move to the next promise to get resolved the return the value
    c. What if every promise is failed?
        Then it will through array of aggregate error.

NOTE: When it return more than one value then it will return a value in the form of array. Ex: Promise.all, Promise.allSEttled
      And when it return a single value then it will return a value in parenthesis. Ex: Promise.race, Promise.any and if all the promise is failed in Promise.any and it will return aggregate error. ex: [err1, err2, err3]
*/

// Examples for All the four Promise API's
// This is the dummy promises

//Examples:  Promise.all

// const p1 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve('P1 success')
//     // }, 3000);
//     setTimeout(() => {
//         reject('P1 Failed')
//     }, 3000);
// })
// const p2 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve('P2 success')
//     // }, 1000);
//     setTimeout(() => {
//         reject('P2 Failed')
//     }, 1000);
// })
// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve('P3 success')
//     // }, 2000);
//     setTimeout(() => {
//         reject('P3 Failed')
//     }, 1000);
// })

// Promise.all([p1, p2, p3]).then((res) => {
//     console.log(res);
// })
// .catch(err => console.error(err))




//  Examples : Promise.allSettled --> It will return an array of object which has two keys (reason, status or value, status)

// const p1 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve('P1 success')
//     // }, 3000);
//     setTimeout(() => {
//         reject('P1 Failed')
//     }, 3000);
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('P2 success')
//     }, 1000);
//     // setTimeout(() => {
//     //     reject('P2 Failed')
//     // }, 1000);
// })
// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve('P3 success')
//     // }, 2000);
//     setTimeout(() => {
//         reject('P3 Failed')
//     }, 1000);
// })

// Promise.allSettled([p1, p2, p3]).then((res) => {
//     console.log(res);
// })
// .catch(err => console.error(err))




// Examples: Promise.race

// const p1 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve('P1 success')
//     // }, 3000);
//     setTimeout(() => {
//         reject('P1 Failed')
//     }, 3000);
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('P2 success')
//     }, 1000);
//     // setTimeout(() => {
//     //     reject('P2 Failed')
//     // }, 1000);
// })
// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve('P3 success')
//     // }, 2000);
//     setTimeout(() => {
//         reject('P3 Failed')
//     }, 2000);
// })

// Promise.race([p1, p2, p3]).then((res) => {
//     console.log(res);
// })
// .catch(err => console.error(err))





// Examples: Promise.any ---> It will through aggregate error.

const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('P1 success')
    // }, 3000);
    setTimeout(() => {
        reject('P1 Failed')
    }, 3000);
})
const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('P2 success')
    // }, 4000);
    setTimeout(() => {
        reject('P2 Failed')
    }, 1000);
})
const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('P3 success')
    // }, 1000);
    setTimeout(() => {
        reject('P3 Failed')
    }, 2000);
})

Promise.any([p1, p2, p3]).then((res) => {
    console.log(res);
})
    .catch(err => {
        console.log(err.errors); //It is used to show all the errors in the array. It is aggregated error.
    })


// NOTE: Settled means whether a promise will be 
// resolve or reject
// success or failure
//fullfilled or rejected
// To get the aggregate error we need to do console.log(err.errors) in catch
























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

// console.log(adder())

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

// console.log(greet()('Jack'))
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
// console.log(this)


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
    name: "suraj",
    city: "mumbai"
}

const obj2 = {
    name: "shiv"
}

obj2.__proto__ = obj1



// console.log(obj2.city);


// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }


