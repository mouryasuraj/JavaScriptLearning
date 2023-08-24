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