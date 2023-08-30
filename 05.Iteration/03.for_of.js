// ["","",""]
// [{},{},{}]

// for of : We can perform for_of loop on string, array , object, etc;
//syntax
// for (const iterator of object) {
    
// }

// On array
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

// on string : It will return each character of the string
// let name = 'Suraj Mourya'
// for (const i of name) {
//     if(i == " ")
//     continue;
//     console.log(i);
// }


// Maps
const map = new Map()
map.set('state1','U.P')
map.set('state2','Bihar')
map.set('state3','Maharashtra')
map.set('state3','Maharashtra')//It will print because map ignore the repeated value. It only take unique value
// console.log(map);

// for loop on map
// for (const key of map) {
//     console.log(key); //it will print both key:value pairs 
// }
// for (const [key, value] of map) {
//     console.log(key, ":", value); //If you want to access only key or value then you can use array destructing.
// }




const obj = {
    name:'suraj',
    age:22
}


//we cannot iterate object like this
// for (const [key] of obj) {
//     console.log(`${key} : ${value}`);
// }