// Filter

// const num = [1,2,5,3,5,7]
// let val = num.forEach((item)=>{
//     console.log(item);
// })
// // console.log(val); //value of val is undefined because forEach loop returns undefined



// const myNums = [1,2,3,4,5,6,7,8,9,10];
// let values = myNums.filter( (num)=> {
//     return num > 5;
// })
// console.log(values);  //filter returns an array


// How to filter item from array using forEach
// const newNums = [];

// myNums.forEach((num)=>{
//     if(num>5){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

/*

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const values = books.filter( (bk) =>{
    // return bk.genre === 'History';
    // return bk.publish >= 1995;
    // return bk.publish >= 1995 && bk.genre === 'Science';
    // return bk.publish >= 1995 && bk.genre === 'Science' && bk.edition > 2014;
  })
  console.log(values);

*/






// Map

// const num = [1,2,3,4,5,6,7,8,9,10];
// const newNum1 = num.map((num)=>{
//     return num + 10;
// })
// console.log(newNum1);



// Chaining

// const num = [1,2,3,4,5,6,7,8,9,10];

// const newNum = num.map((num)=>{
//     return num * 10;
// }).map((num)=>{
//     return num + 1;
// }).filter((num)=>{
//     return num > 41;
// })

// console.log(newNum);








// reduce

// normal function
// const myNums = [1,2,3];
// // let initialValue = 1;
const newNum = myNums.reduce(function(acc, currVal){
    console.log(`Accu: ${acc} and currVal:${currVal}`);
    return acc + currVal;
},1)
// console.log(newNum);


// arrowFuncitons

// const myNums = [1,2,3];
// let initialValue = 1;
// const newNum = myNums.reduce((acc, currVal)=>{
//     console.log(`Accu: ${acc} and currVal:${currVal}`);
//     return acc + currVal;
// },1)

// Simple one line arrow functions
// const newNum = myNums.reduce( (acc ,currVal) => acc + currVal , 1)
// console.log(newNum);




// reduce function through array

// Suppose we have to add all the price of products available in shopping cart 
const shoppingCart = [
    { course: 'Js Course', price: 2999 },
    { course: 'Python Course', price: 599},
    { course: 'Java Course', price: 849 },
    { course: 'Kotlin Course', price: 749 },
];


const totalPrice = shoppingCart.reduce((acc, item)=>{
    return acc + item.price 
},0)

// console.log(totalPrice);