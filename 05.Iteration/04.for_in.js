const myObj = {
    js:'javascript',
    cpp: 'c++',
    rb:'ruby',
    swift:'swift by apple'
}

// for in on object
for (const key in myObj) {
    // console.log(`${key} : ${myObj[key]}`);
}


// for in on array
const num = [1,2,5,4,8,'suraj']
for (const key in num) {
    // console.log(key); //It will give only key of array
    // console.log(num[key]); //It will give only value of array
    // console.log(`${key} : ${num[key]}`);

}


// for in on map

const map = new Map()
map.set('state1','U.P')
map.set('state2','Bihar')
map.set('state3','Maharashtra')
map.set('state3','Maharashtra')


// Map is not iterable using for in loop
for (const key in map) {
    // console.log(key);
}