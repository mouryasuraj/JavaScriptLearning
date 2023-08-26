// Immediately Invoked Function Expression - (IIFE)
// IIFE use to prevent from global scope and It is also used to call immediately after declaration
// It is a design pattern which is also known as Self Executing Anonymous function and contains two majot parts:
// 1.The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// 2.The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


// Annonymous IIFE function
(function(){
    console.log("ANNONYMOUS FUNCTION");
})();

// ()(); //first paranthesis is used to define the function and second one is used to call the function

// Arrow IIFE function
( ()=> {
console.log("ARROW FUNCTION");
})();

// Named IIFE Function
(function chai(){
    console.log("NAMES FUNCTION")
})();
// Note: if you are making more than one IIFE then you must check that you have put the ; or not. bcoz if you not put ; then next IIFE will not call and it will give a type error: (intermediate value(...) is not a function);

// Async 
(async() =>{
    await console.log('Async')
})();


// Parameter in IIFE
( (name)=> {
    console.log(`My name is ${name}`);
})('Suraj'); //we can pass parameter same as we pass in normal function
// eg: show('Suraj')

// for await...of
// The for await...of statement creates a loop iterating over async iterable objects as well as sync iterables. This statement can only be used in contexts where await can be used, which includes inside an async function body and in a module.
  