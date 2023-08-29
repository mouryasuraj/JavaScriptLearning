// Funtions and Parameter

// function showResult(){
//     console.log("Hello");
// }
// showResult;//Refenrce of showResult. It will not execute
// showResult();//if we put paraentheis then only it will call the function
// let result = showResult(); //
// console.log(result); //Undefined: Beacuse there is no return value of showResult function


// function showResult(){
//     return console.log("Hello");
// }
// let result = showResult();
// console.log(result); //result = Hello


// number1 and number2 is a parameter of function showResult
// function showResult(number1, number2){
//     let result = number1 + number2;
//     return result;
// }
// // let result = showResult(5,6);//we can store return value in a variable
// console.log(showResult());//return NaN: beacuse It has no arguments
// console.log(showResult(4,5)); //return 9

// function loggedIN(username){
//     return `${username} just logged in`
// }
// function loggedIN(username){
//     if(username === undefined){
//         return 'Please enter the username';
//     }
//     return `${username} just logged in`
// }

// console.log(loggedIN('suraj'));

// we can pass the default parameter value username = 'User beacuse when argument is not passed then it will use default value. If we pass the argument then default value will override by argumemt
// function loggedIN(username = "User"){
//     if(!username){
//         return 'Please enter the username';
//     }
//     return `${username} just logged in`
// }
// console.log(loggedIN());//Return UNdefined just logged in beacuse we didn't pass any argument
// console.log(loggedIN('Suraj'));//Return Suraj just logged in beacuse we pass the argument


// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2));//return 2

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2, 500, 300, 400));//return 2 beacuse it will take only first argument to fix this bug we use rest operator(...num1) and rest opoerator return an array

// function calculateCartPrice(value1, value2, ...num1){ //value1=2, value2=500, ...num1 = [300,400];
//     return num1
// }
// console.log(calculateCartPrice(2, 500, 300, 400));//return array[2,500,300,400]





// pass object as a parameter in function

let obj = {
    name:'Suraj',
    age:22
}
function show(anyObj){
    console.log(`Name: ${anyObj.name} , Age: ${anyObj.age}`);
}
// show(obj)
// show({name:'Shubhma', age:42})// we can directly pass object at the time of function calling;


// pass array as a parameter in function
// let arr = [200,300,500,600]

// function show(anyArr){
//     console.log(anyArr[2]);
// }

// show(arr)
// show([1,2,3,4])// we can directly pass array at the time of function calling;
