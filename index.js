// "use strict"; //treat all js code as newer version


// // Let, const, var
// const accountId = 13333;
// let accountEmail = "suraj #gmail.com"
// var accountPassword = "1234"
// accountCity = "Mumbai"

// accountId = 12   // Not allowed
// // accountEmail = "sdfdf"
// console.log(accountId);
// console.table must have one mandatory argument data, which must be an array or object and one additonal parameter columns
// console.table([accountEmail, accountId, accountPassword, accountCity])


// Prefer not to used var because of issue in block and functional scope
// Code readibility should be high priority





// DataTypes-------------------------

// Primitive dataType------

// number ==> range 2 to the power of 53
// bigINt
// string ==> "Suraj" or 'Suraj' or `Suraj`
// null ==> empty value
// symbol 
// boolean ==> true and false
// undefined

// non-primitive data types------
// objects

// let num = null;
// console.log(typeof num);


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

// let isLoggedIn = 0;  
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);
//0==>false 
// 1==>ture
// ""==>false
//"suraj" = true


// String-----------------------------------

// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);




// Operations----------------------------------------------------------
let value = 3;
let negValue = -value
// console.log(negValue);

// let str1 = "Hello "
// let str2 = "Suraj"
// let str3 = str1 + str2
// console.log(str3);

// console.log("2" + 2 + 2 + 2);
// console.log(2 + 2 + 2 + "2");
// console.log("2" + "2" + 2 +2 + 2);





// Comparison of Datatypes
// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);




// Datatypes summary------------------------------
// #Primitive (call by value)
// 7types: String, Number, boolean, Null, Undefined, BigInt, Symbol(unique)


// const score =  100;
// const scoreValue =  100.3;
// const isLoggedIn = false;
// const outsideTemp = null;
// let userEmail; //===>undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId); //===>false


// const bigNumber = 45465454564646n;
// console.log(typeof bigNumber);


// #Non primitive or reference type

// Array, Objects, Functions

// const heors = ["shaktiman", "naagraj", "doga"]
// const obj = {
//     name: "suraj",
//     age: 22
// }

// const myFunct = function () {
//      console.log("Hello World");
// }

// console.log(myFunct());


// Memory Management--------------------------

// stack(primitive) and heap memory(non-primitive)

// Stack
let myYtname = "surajmourya"
let anothername = myYtname;
anothername = "mouryasuraj"
// console.log(anothername); // ==> mouryasuraj
// console.log(myYtname);// ==>surajmourya

// Heap
let userOne = {
    email: 'mouryasuraj@google.com',
    age: 22
}
let userTwo = userOne;
userTwo.email = "suraj@google.com"
// console.log(userOne.email);
// console.log(userTwo.email);




// Strings----------------------
const name = "Suraj-M"; //This is way to declare string
const repocount = 50;

//``--> Back ticks:  
// console.log(`My name is ${name}. I have ${repocount} repositories.`); //This is called string interpolation

// another way to declare string
const anotherWay = new String('Suraj')
// console.log(anotherWay);//It will give an object
// console.log(anotherWay[0]); //Output = S
// console.log(anotherWay.__proto__); // return object
// console.log(anotherWay.length); //Length is a property of String
// console.log(anotherWay.toUpperCase()); // SURAJ
// console.log(anotherWay.toLowerCase()); //suraj
// console.log(anotherWay.charAt(2)); //r
// console.log(anotherWay.indexOf('r')); //2   
// console.log(name.substring(0,4));//output=Sura -->0: Include, 4:Exclude

// console.log(name.slice(-4)); //we can give negative value only in slice method 
// const spaceStr = "       sdfdsa     "
// console.log(spaceStr);
// console.log(spaceStr.trim());
// console.log(name.replace('-', ' '));
// console.log(name.includes('ura'));

// const dashstr = 'Suraj-Mourya-is-a-good-man';
// console.log(dashstr.split('-'));//It will give array
// console.log("Shiv".charAt(2));


// Symbol Iterator---
/*
// For array
const c = [10,20,30,'Suraj',null, 48]

function xiterator(values){
    let index = 0;
    return {
        next: function(){
            if(index < values.length){
                return{
                    value:values[index++],
                    done:false
                }
            }
            else{
                return{
                    value:'undefined',
                    done:true
                }

            }
        }
    }
}
let i = xiterator(c)
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().done);
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
*/





// let x = [10, 20, 30, 'Suraj']
// let iterator = x[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// For String

// let str = "Suraj Mourya"
// console.log(str.at(3));
// console.log(str.charAt(undefined));
let anotherStr = "is a Programmer."
// console.log(str.concat(' '+anotherStr));
// console.log(str.concat(", ", anotherStr));
// console.log(anotherStr.endsWith('.')); //true
// console.log(anotherStr.endsWith('Programmer.', 16));// true
// console.log(anotherStr.endsWith('Programmer')); //false

// console.log(String.fromCharCode(189, 66, 67, 68));
// console.log(String.fromCodePoint(205, 66, 67, 68));

// console.log(`The first name ${str.substring(0, 6)}${str.includes('Suraj') ? 'is' : 'is not'} present in the given sentence`);
// const str = "To be, or not to be, that is the question.";

// console.log(str.includes("to be")); // true
// console.log(str.includes("question")); // true
// console.log(str.includes("nonexistent")); // false
// console.log(str.includes("To be", 0)); // True
// console.log(str.includes("To be", 1)); // false
// console.log(str.includes("TO BE")); // false
// console.log(str.includes(" ")); // true

// let str = "I am Suraj Is Suraj"
// let searchKey = "Suraj"
// console.log(str.lastIndexOf(searchKey, 5));

// let str = "Suraj";
// console.log(str.padEnd(6, '*'));

// let accounNumber = "8956237411245";
// let last4Digit = accounNumber.slice(-4)

// let hiddenAc = last4Digit.padStart(accounNumber.length, '*')
// console.log(hiddenAc);

// let mood = 'happy!'
// console.log(`I feel ${mood.repeat(3)}`);


// Numbers ---------------------------------

// isFinite
// let score = 0 / 1
// console.log(Number.isFinite(score));
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
// console.log(preceision.toPrecision(3));
// console.log(preceision.toString().length);

// Math----------------------------------------------

let val = 45

// console.log(Math.sqrt(val).toFixed(2)); //5
// console.log(Math.abs('-5')); //5
// console.log(Math.abs('-Infinity')); //Infinity

// console.log(Math.ceil(45.96));
// console.log(Math.floor(45.56));
// console.log(Math.max(45, 46, 47, 48, 49));
// console.log(Math.min(45, 46, 47, 48, 49));
// console.log(Math.pow(7,2));


// console.log(Math.random());//between 0 to 1 but having decimal
// console.log(Math.random() * 10 + 1); //between 0 to 10 but having decimal
// console.log(Math.floor((Math.random() * 10 + 1))); //between 0 to 9 NOt haveing Decimal


// Suppose you want value in a particular range

// let min = 10;
// let max = 20;

// console.log(Math.floor((Math.random() * (max - min + 1)) + min));

// let min = 50;
// let max = 80;

// console.log(Math.floor((Math.random() * (max - min + 1)) + min));



// Dates---------------------------------------

let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toTimeString());
// console.log(date.toUTCString());

// let createMyDAte = new Date(2023, 0, 22)
// let createMyDAte1 = new Date(2023, 1, 2)
let createMyDAte1 = new Date(2023, 1, 2, 5, 3)
// console.log(createMyDAte.toLocaleString());
// console.log(createMyDAte1.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createMyDAte1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay()); 

// console.log(newDate.toLocaleString('default', {
//     weekday: "long",
// }));



// Arrays--------------------------------------------------
// Js arrays are resizable
const myArr = [0, 1, 2, 3, 4, 5]//way to declare array
// const myHeros = ['Shakitan', 12]//another way to declare array

// const arr = new Array(1,2,'Suraj')
// console.log(arr[2]);


// Array Methods
myArr.push(6); //it will add the element to the end of the array
myArr.pop();//It will remove the last element from the array
myArr.unshift(9); //it will add the element at the starting of the array
myArr.shift(); //it will add the element at the end of the array
// console.log(myArr.includes(0));//true
// console.log(myArr.indexOf(0));//0

const newArr = myArr.join();// Adds all the elements of an array into a string, separated by the specified separator string.If parameter is empty then it will take default value for separation ','.

// console.log(myArr);
// console.log(newArr);

// Slice and splice

// console.log("A " + myArr);
// console.log(myArr.slice(1, 3));
// console.log("B " + myArr);
// console.log(myArr.splice(1, 3));
// console.log("C " + myArr);

const marvel_heros = ['thor', 'Ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros); //It will push the dc_heros as it is (array)
// console.log(marvel_heros); 
// console.log(marvel_heros[3]); 
// console.log(marvel_heros[3][1]); 
let all_heros = marvel_heros.concat(dc_heros) //concat method is used to combine more than two arrays and return a new array. So that's why i created a new varaible(all_heros)
// console.log(all_heros);

const another_arr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [4, 5]]];
const another_arr1 = another_arr.flat(Infinity) //This method returns a new array. It will concatenate all sub arrays into an array
// console.log(another_arr1);


// console.log(Array.isArray('Suraj'))//false
// console.log(Array.from('Suraj'))//['S','u','r','a','j']
// console.log(Array.from({name:'Suraj'}))//Interesting. It will return an empty array because it did not know whow to make array key or value
let score1 = 100;
let score2 = 200;
let score3 = 300;
// console.log(Array.of(score1, score2, score3))// It will return an array from set of elements

// Fill Mehtod in Array
let arr = [4, 5, 6, 7]
// console.log(arr.fill(2));
// console.log(arr.fill(2, 1));
// console.log(arr.fill(2, 2, 4));
// console.log(arr.fill(4, -3, -2)); // [4, 2, 3]

// let arr1 = Array(3).fill({})
// arr1[0].first = 'hi1';
// arr1[1].second = 'hi2';
// arr1[2].third = 'hi3';
// console.log(arr1);

// Filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((words => words.length > 6))
// console.log(words);
// console.log(result);
