'use strict'

// 'this' keyword in js

// 1. 'this' keyword behaves differently in strict mode and non-strict mode

// ------------'this' in global space----------------

// console.log(this)  //globalObject
// 1. 'this' keyword in global space will always have the value of global object
// 2. javascript can run on browser, nodejs, mobile etc.
// 3. global object for 'this' is different in different scenarios
// 4. The value of 'this' keyword is global object
// 5. The value of this in browser is 'window' and the in node.js it will be global(empty object)


// ------------'this' inside a function ----------------
function x() {
    console.log(this); //value of this will be depends on stric mode and non strict mode
}
x()
// 1. the value of 'this' depends on strict and non-strict mode
// 2. the value of 'this' in browser is window object when our program is in non-strict mode but when it in strict mode then the value will be 'undefined'.

// -------------'this substitution in non-strict mode'-------------
// 1. If the value of 'this' keyword is 'undefined' or 'null' then 'this' keyword will be replaced with global object only in non-strict mode.
// 2. Basically, the value of this keyword in function is undefined but there is an phenomena 'this substituion' in non-strict mode, if the value is undefined or null then it will be replaced with window object or global object.

// ------------'this' keyword depends on how 'this' is called(window)----------------

x() // undefined in strict mode
window.x() // window object in strict mode


// ------------'this' keyword inside a object's method----------------
// Note: if you create any function inside an object then it is called as method
const obj = {
    a: 10,
    x: function () {
        console.log(this.a); //here, the value of this keyword is object where that method is present
    }
}
// Here, x is an method of obj object
obj.x()



// ------------'this' keyword with call, apply and bind methods----------------

const student = {
    name: 'Suraj Mourya',
    printName: function () {
        console.log(`Hello, ${this.name}`);
    }
}
student.printName()

const student2 = {
    name: 'Vipin Yadav'
}
student.printName.call(student2)


// -----------------'this' keyword in arrow function---------------------------
// 1. Arrow function don't have their own this binding (it take the value of this from its closest lexical context)
const a = {
    a: 10,
    x: function () {
        console.log(this);   //here the value of this is object a
    }
}
a.x()
// but in arrow function it behaves different
const b = {
    a: 10,
    x: () => {
        console.log(this);   //here the value of this is its enclosing lexical context. Here the lexical context is global space, so this value will be window or global object
    }
}
b.x()


// -------------this keyword in nested arrow function

const object5 = {
    a: 45,
    b: function () {
        let name = 'suraj'
        let y = () => {
            console.log(this)
        }
        y()
    }
}
object5.b()


// this keyword in DOM
// 1. this key word in DOM reference to that html element