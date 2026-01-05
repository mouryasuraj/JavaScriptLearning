const arr = ["Suraj", 45, true]   
arr.push("Swati") // ["Suraj", 45, true, "Swati"] 
arr.pop() // ["Suraj", 45, true] 
// console.log(arr)  // ["Suraj", 45, true] 


const inputval = "Hi"

const response = ["Leave Clarification Email", "How Typescript works"]
response.unshift(inputval)  // new chat
response.shift()  // on delete
// console.log(response.indexOf("How Typescript works"))

const arr3 = [1,2,3,4,5,6,"Suraj", "Mourya"]
// console.log(arr3.splice(0,2,45,1,5), arr3)
console.log(arr3[arr3.length-1][1])

const arr4 = [1,2,3,4,5,6, [54,45,89,56,78,56,["Shib"]], [45,23]]
const arr5 = ["Suraj", "Mourya"]
const arr6 = ["Shiv", "Yadav"]

const newArr1 = arr5.concat(arr4, arr6)
console.log(arr4.flat(Infinity))

const str = "Suraj Mourya"
const str1 = {name:"Suraj"}
console.log(Array.from(str1))


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3))// It will return an array from set of elements


const a = [1,5,6,7,8]
console.log(a.fill(0, 2, 4))

const b = Array(3).fill({})
console.log(b)
b[0].name = "Suraj"
b[0].lastname = "Mourya"
console.log(b)


const myobjs1 = {
    1:'a',
    2:'a'
}
const myobjs2 = {
    3:'a',
    4:'a'
}

const newObj = {myobjs1, myobjs2}
const newObj1 = {...myobjs1, ...myobjs2}
const newObj2 = Object.assign({},myobjs1, myobjs2)
console.log(newObj2)