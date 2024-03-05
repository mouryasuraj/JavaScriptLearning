// Scopes

// let a = 10;
// const b = 20;
// var c = 30;
// console.table([a,b,c])

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a) //we can't access the value of a because a is declared with let and it has local scope
// console.log(b) //we can't access the value of b because b is declared with const and it has local scope
// console.log(c) //we can access the value of c because c is declared with var and it has global scope. so, that's why now a day's no one declare variable with var
let a = 20;
const b = 30;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
console.log(a);
console.log(b);




// scope means that where we can access a specific varaible in our code

// Note: whenever an execution context is created a lexical environment also created

// lexical environment is the local memory along with lexical enrvironment of its parent memory;


// the scope chain
// scope chain: when lexical environment local memory won't find a variable then it will go to its parent lexical environment and again if it won't find then it will goto its parent environment(global) it is called as scope chain





// Block Scope and shadowing 

// Block 
// { } //block
/*

block is also known as compound statement
BLock is used to combine multiple line statement in a group
ex: 
{
    var a = 10;
    console.log(a);
}
if(true) true;
if(true){
    var a = 10;
    console.log(a);
}



// block scope
{
    var a=10;
    let b=20;
    const c=30;
}
here in above code "b","c" has block scope and "a" has global scope . Run above code in browser and check
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a) //10
    console.log(b) //20
    console.log(c) //30
}
console.log(a) //10
after console.log(a) the block scope is not available 
console.log(b) // referenceError: b is not defined
console.log(c)



// shadowing
// For var
var a=100;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a) //10
    console.log(b) //20
    console.log(c) //30
}
console.log(a) //10 because a refer to the same memory which is available in global environemnt

// For let 
let b=100;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a) //10
    console.log(b) //20
    console.log(c) //30
}
console.log(b) //100 because inside the {} "a" has block scope and both memory a refer to different scope. Outside variable "a" refer to script and inside the block  "a" variable refer to block scope
Note: If let or const declare in global environment then its memory is in script space but when its declare in block then it have block scope



// Illegal shadowing 
let a = 10
{
    var a = 100;
}

let a = 10;
fucntion x(){
    var a = 100; //valid
}
let a = 10
{
    let a = 20;
    {
        let a = 30;
        {
            let a = 40;
        }
    }
}

*/