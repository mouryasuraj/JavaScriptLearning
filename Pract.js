// // https://chatgpt.com/c/695ea67f-01f8-8320-aa9d-9db52798f4f0

// let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toTimeString());
// console.log(date.toUTCString());
// const arr = ["Suraj", 45, true]   
// arr.push("Swati") // ["Suraj", 45, true, "Swati"] 
// arr.pop() // ["Suraj", 45, true] 
// // console.log(arr)  // ["Suraj", 45, true] 


// const inputval = "Hi"

// const response = ["Leave Clarification Email", "How Typescript works"]
// response.unshift(inputval)  // new chat
// response.shift()  // on delete
// // console.log(response.indexOf("How Typescript works"))

// const arr3 = [1,2,3,4,5,6,"Suraj", "Mourya"]
// // console.log(arr3.splice(0,2,45,1,5), arr3)
// // console.log(arr3[arr3.length-1][1])

// const arr4 = [1,2,3,4,5,6, [54,45,89,56,78,56,["Shib"]], [45,23]]
// const arr5 = ["Suraj", "Mourya"]
// const arr6 = ["Shiv", "Yadav"]

// const newArr1 = arr5.concat(arr4, arr6)
// // console.log(arr4.flat(Infinity))

// const str = "Suraj Mourya"
// const str1 = {name:"Suraj"}
// // console.log(Array.from(str1))


// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// // console.log(Array.of(score1, score2, score3))// It will return an array from set of elements


// const a = [1,5,6,7,8]
// // console.log(a.fill(0, 2, 4))

// const b = Array(3).fill({})
// // console.log(b)
// b[0].name = "Suraj"
// b[0].lastname = "Mourya"
// // console.log(b)

// const myobjs1 = {
//     1:'a',
//     2:'a'
// }
// const myobjs2 = {
//     3:'a',
//     4:'a'
// }

// const newObj = {myobjs1, myobjs2}
// const newObj1 = {...myobjs1, ...myobjs2}
// const newObj2 = Object.assign({},myobjs1, myobjs2)
// // console.log(newObj2)




// // Functions and Parameters


// function getCustomerData(a,b){
//     const sum = a + b;
//     return sum
// }

// const sum = getCustomerData()  // click on button, page load
// // console.log(sum)  // 300


// function loggedIN(username = "User"){
//     if(!username){
//         return 'Please enter the username';
//     }
//     return `${username} just logged in`
// }
// // console.log(loggedIN());//Return User just logged in beacuse we didn't pass any argument
// // console.log(loggedIN('Suraj'));//Return Suraj just logged in beacuse we pass the argument

// function calculateCartPrice(value1, value2, ...num1){ //value1=2, value2=500, ...num1 = [300,400];
//     return num1
// }
// // console.log(calculateCartPrice(2, 500, 300, 400));//return array[300,400]





// // Global and Block scope
// let q = 10;
// const r = 20;
// var s = 30;
// console.table([q,r,s])



const CourseName = "Nodejs"

switch(CourseName){
    case "React":
        console.log("Course price of react is 3000")
        break;
    case "Javascript":
        console.log("Course price of javascript is 1000")
        break;
    case "Nodejs":
        console.log("Course price of Nodejs is 8000")
        break;
}




// Truthy Values
/*
1. true
2. 1
3. "String",
4. []
5. {}

// Falsy values
1. false
2. 0
3. ""
4. null
5. undefined
6. NaN
7. -0
8 On (Big O n) - BigInt

*/


// For Loop

// for(let i=1; i<=100; i++){
//     for(let j=1; j<=10; j++){
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
//     console.log("End---------------")
// }

// const num = [1,2,3,4,5,6,7,8,9,10];
// const len = num.length

// for (let i = 0; i < len; i++) {
//     num.pop();
// }
// console.log(num);



// const arr = [45,28,56,78,91,56]

// let i = 0
// // While loop
// while(arr[i]<40){
//     console.log(arr[i])
//     i++;
// }


// let i=0
// do{
//     console.log("I'll run atleast one time")
//     i++
// }while(i<10)


// const name = "Suraj Mourya"
// for(const n of name){
//     if(n===" "){
//         continue;
//     }
//     console.log(n)
// }

// const arr = ["Suraj",45,78]
// for(const n of arr){
//     console.log(arr[n])
// }
// const set = new Set()
// set.add("Suraj")
// set.add("Suraj")
// set.add("Mourya")
// set.add("Mourya")
// set.add(45)
// console.log(set)

// for(const n of set){
//     console.log("sd",n)
// }


// const map = new Map()
// map.set("name","suraj")
// map.set("lastnam","mourya")
// map.set("age",45)
// map.set("marital status","unmarried")

// for(const [key,value] of map){
//     console.log(key, value)
// }


// const obj = {
//     name:"suraj",
//     age:45
// }

// for(const n in obj){
//     console.log(n, obj[n])
// }


// for each

// const codingLan = ["JS","Java","C++","Python"]
// codingLan.forEach((val, index, arr)=>{
//     console.log(val, index,arr)
// })

// function printMe(val){
//     console.log(val)
// }

// codingLan.forEach(printMe)


//Filter
// const arr = [45,78,12,65,24,34,75,61]

// const newArr = arr.filter(val => val<50)
// console.log(newArr)

// // Removing falsy values from an array
// const values = [0, 1, false, 2, "h", 3];

// const truthyValues = values.filter(Boolean)
// console.log(truthyValues)



// Map
// const values = [0, 1, 2,3,4,5,6];
// const newArr = values.map(()=>{

// })

// Reduce

// const values = [0, 1, 2,3,4,5,6];
// const newArr = values.reduce((acc, curr)=>{
//     return acc + curr
// },0)
// console.log(newArr)


// window.onload = ()=>{
//     const heading = document.createElement("h1")
//     const text = document.createTextNode("This heading is generated through Javascript")
//     heading.appendChild(text)
//     document.body.appendChild(heading)
// }


// const prints = document.getElementById("print")
// console.log(prints.setAttribute('class','redColor'))



// const createElements =(elem, id, clas, width, height, text, bgclr, clr)=>{
//     const div = document.createElement(elem)
//     div.className = clas;
//     div.id = id;
//     div.setAttribute('title', 'Main-box');
//     const textNode = document.createTextNode(text)
//     div.appendChild(textNode);
//     div.style.backgroundColor = bgclr;
//     div.style.color = clr;
//     div.style.padding = '10px';
//     div.style.width = width;
//     div.style.height = height;
//     div.style.display = 'flex';
//     div.style.alignItems = 'center';
//     div.style.justifyContent = 'center';
//     div.style.margin = '20px auto';
//     document.body.appendChild(div)
// // }

// createElements('h1','heading','head','fit-content','fit-content', 'Heading', 'skyblue', 'black');
// createElements('p','firstPara','para','300px','fit-content', 'This is the first para created through javaScript', 'red', 'skyblue');
// createElements('div','main-box','main','500px','300px', 'Main-box', 'cyan', 'red');



// function showName(name, age){
//     console.log(name, age)
// }
// const id = setTimeout(showName, 2000, "Suraj", 25)
// console.log(id)



// const apiUrl = "https://dummyjson.com/products/1"

// const promise = new Promise(async function(resolve, reject){
//     try {
//         const response = await fetch(apiUrl)
//         const json = await response.json()
//         resolve(json)
//     } catch (error) {
//         reject({message:"Something went wrong"})
//     }
    
// })



// promise.then((data)=>{
//     // console.log(data)
// }).catch(error=>{
//     console.log(error.message)
// })


// class Chai {
    
//     name = "Suraj"

//     getChai(){
//         console.log("Getting the chai....")
//     }

//     makeMasalaChai(){
//         console.log("Making the masala chai.....")
//     }
// }

// const chai1 = new Chai()
// console.log(chai1.getChai())
// console.log(chai1.makeMasalaChai())



// OOPS
// function getData(){
//     console.log("Surja mourya")
// }
// getData.name = "SHiv"
// console.log(getData.name)
// console.log(getData.prototype)


// class User {
//     static getUser(){
//         console.log("Getting user from database")
//     }

// }

// class Teacher extends User{
//     static a = super.getUser()
// }
// console.log(User.getUser())


// 'use strict'

// const obj = {
//     name:"suraj Mourya",
//     a: ()=>{
//         const anotherName = "Shiv Kumar"
//         const anotherFunc = ()=>{
//             console.log(this.name)
//         }
//         anotherFunc()
//     }
// }
// obj.a()


// const obj = {
//     name:"Suraj Mourya",
//     age:56,
//     t:function(){
//         console.log(this.name)
//     }
// }

// setTimeout(obj.t.bind(obj), 1000);




// Function Declaration
function a(){
    console.log("Hello, THis is how function declaration define")
}

// Function Expression
const func = function(){
    console.log("This is function expression, if we assigned funcation as a value or used as a value then it become function expression")
}

const b = function xyz(){
    console.log(xyz)
}

console.log(b())

setTimeout(function(){
    console.log("Timmming")
}, 1000);