// "use strict"; //treat all js code as newer version


// // Let, const, var
// const accountId = 13333;
// let accountEmail = "suraj #gmail.com"
// var accountPassword = "1234"
// accountCity = "Mumbai"

// accountId = 12   // Not allowed
// // accountEmail = "sdfdf"
// console.log(accountId);
// console.table must have one mandatory argument data, which must be an array or object and one additonal parameter columns
// // console.table([accountEmail, accountId, accountPassword, accountCity])


// Prefer not to used var because of issue in block and functional scope
// Code readibility should be high priority





// DataTypes-------------------------

// Primitive dataType------

// number ==> range 2 to the power of 53
// bigINt
// string ==> "Suraj"
// null ==> empty value
// symbol 
// boolean ==> true and false
// undefined

// non-primitive data types------
// objects
// console.log(typeof null)



// ConvertionOperation----------------------------------------

//Number ------------------------------

// let score = "33"; //"33abc" ==>NaN, null===>0, undefined==>NaN, true==>1
// console.log(typeof score);
// let anotherScore = "33";
// console.log(typeof(anotherScore));
// let convertStringtoNumber = Number(anotherScore)
// console.log(typeof convertStringtoNumber);

// "33"==>33
// "33abc"==>NaN
//true==>1; false==>0

// Boolean-------------------------------

// let isLoggedIn = 0;  
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);
//0==>false 
// 1==>ture
// ""==>false
//"suraj" = true


// String-----------------------------------

// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);




// Operations----------------------------------------------------------
let value = 3;
let negValue = -value
// console.log(negValue);

// let str1 = "Hello "
// let str2 = "Suraj"
// let str3 = str1 + str2
// console.log(str3);

// console.log("2" + 2 + 2 + 2);
// console.log(2 + 2 + 2 + "2");
// console.log("2" + "2" + 2 +2 + 2);

// let count = 100;
// ++count
// count++
// console.log(count);




// Comparison of Datatypes
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);




// Datatypes summary------------------------------
// #Primitive (call by value)
// 7types: String, Number, boolean, Null, Undefined, BigInt, Symbol(unique)


// const score =  100;
// const scoreValue =  100.3;
// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail; //===>undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId); //===>false

// const bigNumber = 45465454564646n;
// console.log(typeof bigNumber);


// #Non primitive or reference type

// Array, Objects, Functions

// const heors = ["shaktiman", "naagraj", "doga"]
// const obj = {
//     name: "suraj",
//     age: 22
// }

// const myFunct = function () {
//     // console.log("Hello World");
// }

// console.log(typeof myFunct);


// Memory Management--------------------------

// stack(primitive) and heap memory(non-primitive)

// Stack
let myYtname = "surajmourya"
let anothername = myYtname;
anothername = "mouryasuraj"
// console.log(anothername); // ==> mouryasuraj
// console.log(myYtname);// ==>suerajmourya

// Heap
let userOne = {
    email:'mouryasuraj@google.com',
    age:22
}
let userTwo = userOne;
userTwo.email = "suraj@google.com"
// console.log(userOne.email);
// console.log(userTwo.email);
