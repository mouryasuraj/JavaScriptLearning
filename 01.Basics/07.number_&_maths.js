
// Numbers ---------------------------------

// isFinite
// let score = 0 / 1
// console.log(Number.isFinite(score)); //true
// // isInteger
// function fits(x, y) {
//     if (Number.isInteger(y / x)) {
//         return "Fits"
//     }
//     else {
//         return "Doesn't fit!"
//     }
// }
// console.log(fits(2, 3));//doesn't fit
// console.log(fits(2, 4));//fit

// let num = 100.4185
// console.log(num.toFixed(2)); //100.42

// let money = 1000000
// console.log(money.toLocaleString('en-In'));
// console.log(money.toLocaleString());

let preceision = 100.5587
console.log(preceision.toPrecision(3));
console.log(preceision.toString().length);

// Math----------------------------------------------

let val = 45

// console.log(Math.sqrt(val).toFixed(2)); //5
// console.log(Math.abs('-5')); //5
// console.log(Math.abs('-Infinity')); //Infinity

// console.log(Math.ceil(45.96)); ///46
// console.log(Math.floor(45.56)); ///45
// console.log(Math.max(45, 46, 47, 48, 49));  //49
// console.log(Math.min(45, 46, 47, 48, 49));  //45
// console.log(Math.pow(7,2));  //49


// console.log(Math.random());//between 0 to 1 but having decimal
// console.log(Math.random() * 10 + 1); //between 0 to 10 but having decimal
// console.log(Math.floor((Math.random() * 10 + 1))); //between 0 to 10 NOt haveing Decimal


// Suppose you want value in a particular range

// let min = 10;
// let max = 20;

// console.log(Math.floor((Math.random() * (max - min + 1)) + min));

// let min = 50;
// let max = 80;

// console.log(Math.floor((Math.random() * (max - min + 1)) + min));


