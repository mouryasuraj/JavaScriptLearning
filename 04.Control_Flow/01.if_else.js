// Conditional structure or if...else

// syntax
// if(conditions){ /// If conditions==true the it will go inside 'if' block else it will will go in 'else' block

// }
// else{

// }

// const isUserLoogesIn = true;
// if(isUserLoogesIn){
//     //statement
// }

// basic operators to check conditions
// <, >, <=, >=, ==, != , ===, !==, ||, &&



// Here 2(number) is not equal to '2'(string). When we use '==' to check equalitiy then javascipt will only check its value not its datatype. So, that's why we use '==='(stict equal) to check because it checks value and datatype

// if(2 == '2'){   //true
//     console.log('executed'); 
// }
// if(2 === '2'){   //false
//     console.log('executed'); 
// }


// const temperature = 60;
// if(temperature < 50){
//     console.log('less than 50');
// }else{
//     console.log('temperature is greater');
// }



// Scope in  if...else
// const score = 300;
// if(score > 100){
//     const power = 'fly';
//     var power1 = 'fly1';
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); //reference error: power is not defined. Beacuse we are accessing power outside its scope.
// console.log(power1); //fly1. We decalre power1 with var keyword so that's why we can access power1 outiside its scope



// shorthand notation
// implicit scope
const balance = 1000;
// if(balance > 500) console.log('test');


// if(balance > 500) console.log('test'), 
// console.log('test1'); //Don't write code in this way



// Nesting
// if(balance < 500 ){
//     console.log('less than 500');
// }else if(balance < 750){
//     console.log('less than 750');
// }else if(balance < 900){
//     console.log('less than 900');
// }else{
//     console.log('less than 1200');
// }



// if else in real life projects

const isUserLoogedIn = true;
const debitcard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserLoogedIn && debitcard && 2==2){
    console.log('allow to buy course');
}

if(loggedInFromGoogle || loggedInFromEmai || true){
    console.log("User Looged in");
}