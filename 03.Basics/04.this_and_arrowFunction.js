// this keyword refers current context

// this keyword in object
// let a = 'suraj';
// const user = {
//     username: 'suraj',
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, Welcome to website`);
//         console.log(this); //Output wiil be user object
//     }
// }
// user.welcomeMessage// reference
// user.welcomeMessage()
// user.username = "mourya"
// user.welcomeMessage()
// console.log(this); //output = {}
//Note: If we run console.log(this) in browser then this refer to windows object and if we run in node.js then it will refer to empty object


// this keyword in function


// function chai(){
//     console.log(this);//It will return bunch of values
// }
// chai();
// function chai(){
//     let name = 'suraj'
//     console.log(this.name);//It will return undefined values because this. will only access object
// }
// chai();

// const chai = function(){
//     let username = 'suraj'
//     // console.log(this.username);//undefined
//     console.log(this);//undefined
// }
// chai();


//Arrow function=============
// () =>{}
// const chai = () =>{
//     let username = 'suraj';
//     // console.log(this.username);//undefined
//     console.log(this);//{}
// }
// chai()


// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,4));

// Implicit return
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);
// Expilcit return
//  const addTwo = (num1, num2) => { 
//     return num1 + num2
// };
// Note: If we use parathesis in arrow function then we don't have to write return keyword. Js engine will understand. But if we use curly braces then we have to use return. Examples are given above.


// console.log(addTwo(3,4));

// if we want to out object in arrow function then we have wrap object in parathesis
// const show = () =>{username:'suraj'}//undefined
// const show = () =>({username:'suraj'})//username:'suraj'
// console.log(show());



// this example

// function getThis() {
//     return this;
//   }
  
// const obj1 = { 
//     name: "obj1" ,
//     getThis : getThis
// };
//   const obj2 = { name: "obj2" };
  
//   obj2.getThis = getThis;
  
//   console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
//   console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }




// function getThis() {
//     return this;
//   }

// const obj1 = { 
//     name: "suraj" ,
//     lastName:'mourya',
//     getThis : getThis
//     // getThis : getThis()
// };
//   const obj3 = {
//     __proto__:obj1,
//     name: "obj3",
//   };
  
//   console.log(obj3.getThis); // { name: 'suraj', lastNmae:'mourya }
  
// Non usestrict

function getThis() {
    return this;
  }
  
  // Only for demonstration — you should not mutate built-in prototypes
//   Number.prototype.getThis = getThis;
//   console.log(typeof (1).getThis()); // "object"
//   console.log(getThis() === globalThis); // true
  
//   console.log(getThis());
//   console.log(globalThis);


// Use Strict
function getThis() {
    "use strict";
    return this;
  }
  
//   Only for demonstration — you should not mutate built-in prototypes
  Number.prototype.getThis = getThis;
  console.log(typeof (1).getThis()); // "number"
  console.log(getThis() === globalThis); // true

  