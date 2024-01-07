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

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
//0==>false 
// 1==>ture
// ""==>false
//"suraj" = true


/*

// Falsy value:
    false
    0 (zero)
    "" (empty string)
    null
    undefined
    NaN (Not a Number)

// Truthy value:
    Non-empty strings: Any string with at least one character.
    Non-zero numbers: Any number other than 0 (zero).
    Non-empty arrays: Arrays with at least one element.
    Non-empty objects: Objects with at least one property.
    Functions: Any function object, even if it doesn't explicitly return a value.
    Boolean true: The boolean value true itself.
*/


// String-----------------------------------

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);


