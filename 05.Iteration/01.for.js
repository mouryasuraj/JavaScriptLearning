// For loop
// Syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

// console.log(element) //we cannot access variable element because variable element is declared in for loop and it is a block scope 




// -------Nested loops
// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value: ${j} and Outer loop value: ${i}`);
//     }
// }


// print table from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         //console.log(`Inner loop ${j} and Outer loop ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`); //IT will print table from 1 to 10
//     }
// }


// Loops through array
const myArray = ['flash', 'Batman', 'Joker', 'Superman'];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);  
}




// break 

// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i: ${i}`);
// }



// continue
// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Detected 5`);
//         continue;
//     }
//     console.log(`Value of i: ${i}`);
// }



// const num = [1,2,3,4,5,6,7,8,9,10];
// const len = num.length

// for (let i = 0; i < len; i++) {
//     num.pop();
// }
// console.log(num);