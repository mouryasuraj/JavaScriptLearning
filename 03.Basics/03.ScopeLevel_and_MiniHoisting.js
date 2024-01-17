// function one(){
//     const username = 'Suraj';
//     function two() {
//         const website = 'codeWithHarry'
//         console.log(username);
//     }

//     // console.log(website);//we cannot access child variable into parent because  variable 'website' is defined in function two() and we cannot access its variable outside of the function. This is called as Closures.

//     two()
// }
// one()

// if(true){
//     const username = 'suraj'
//     if(username === 'suraj'){
//         const website = ' youtube'
//         console.log(username + website);
//         console.log(website);//youtbe
//     }
//     // console.log(website);//referenceError
//     console.log(username);//suraj
// }
// // console.log(username);//Reference Error




// ======================Interesting---------------------------

// Basic Function
// console.log(addone(5)) //Output 6 because if function is only declared not assigned then hoiting  will be in used
// Hoising refer to the process whereby intepreter appears to move the declaraion of functions, variables, classess, or imports to the top of their scopes, prior to execution of the code.

function addone(num) {
    return num + 1;
}

// Expression(because variable is holding function) or Function

// addTwo(5) //referenceError beacuse only declaration is being hoisted not declared with assigned values;

// const addTwo = function(num){
//     return num + 2
// }

