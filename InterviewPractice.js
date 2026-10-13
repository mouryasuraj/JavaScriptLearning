// "use strict"
a = 10;

console.log(a) 

// Console.log is used for Debugging, Checking individual values in the code, Debug nested structures, message


// Console.table is used to display tabular data in a table format for better readability, it is good for arrays and objects with multiple properties, comparing records easily.


// "console.table() is a JavaScript console method that displays arrays, objects, and other structured data in a tabular format. It is mainly used for debugging and is especially useful for arrays of objects."
// console.table(["accountEmail", "accountId", "accountPassword", "accountCity"])


console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)



let num = null;

console.log(typeof num === "null");


// Primitive data types

// String, Symbol, Boolean, Bigint, Number, Null, Undefined


const userId = Symbol("userId")

const obj = {
    userId: "userId",
    [userId]: "userId"
}

// console.log(obj.userId)
// console.log(obj[userId])

function greet(){
    console.log("Hello............")
}

greet.age = 25

// console.log(greet)


// convertion
var val = true

// console.log(NaN===10)
// console.log(typeof null)
// console.log(typeof 1+1+1+"1")


// Operation
var val = "3"
var negValue = +val

console.log(negValue)

const arr = ["apple", "banana", "mango"];

// console.log("apple" in arr); // false --> because in check the index or the propery inside an object
// console.log(0 in arr); // ture --> because in check the index or the propery inside an object
// .includes checks the value


// console.log("1">0)

// console.log(null >= 0);  // true 

const obj1 = {
    name:"Ajay Sanyal",
    age: 24,
    professionalCareer:{
        experience: 3.4,
    }
}

const newObj = {...obj1}
newObj.name = "Vaibhav"
newObj.professionalCareer.experience = 5.4

// console.log(obj1)
// console.log(newObj)


const s = new String("Vaibhav");


s.__proto__.greet = function(){
    return "Hello from greet"
}

console.log(s)


const str = "Vaibhav Sontakke"

console.log(str.slice(-str.length))
console.log(str.substring(5, 4))

console.log(str.replace(" ", "-"))
console.log(str.includes("Son"))



const c = [10,20,30,'Suraj',null, 48]


function xiterator(values){
    let index = 0;
    return {
        next:function(){
            if(index<values.length){
                return {
                    value: values[index++],
                    done:false
                }
            }else{
                return {
                    value: undefined,
                    done:true
                }
            }
        }
    }
}


const i = xiterator(c)

console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())


const str3 = "suraj"

console.log(str3.charAt(3))

console.log(String.fromCodePoint(98))
console.log(String.fromCharCode(98))


let str5 = "I am Suraj Is Suraj"
let searchKey = "Suraj"
console.log(str5.lastIndexOf(searchKey));
console.log(searchKey.padEnd(9,"*"));


let date = new Date()

console.log(date.toString())
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date)
console.log(date.toJSON())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
console.log(date.toLocaleString())

console.log(new Date(2023, 1, 2, 13, 34))
console.log(Date.now() / 1000)


// Need to practice Date and Number in deep





const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise is resolved')
    }, 10000)
})

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise2 is resolved')
    }, 1000)
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

// showOutput1()






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

// const resolvedPromise = Promise.any([p1,p2,p3]);

// resolvedPromise.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log("errrrrr.........",err.errors)
// })




function myFunc() {
    console.log(this);
}

let obj10 = {
    myFunc: myFunc,
    name: 'suraj',
    suraname: 'mourya'
}

obj10.myFunc()
