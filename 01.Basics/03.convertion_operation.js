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


// String-----------------------------------

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);
