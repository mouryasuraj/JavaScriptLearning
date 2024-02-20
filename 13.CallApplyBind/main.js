// Call apply and bind in js

const person = {
    firstName: 'Suraj',
    lastName: 'Mourya',
}

let printName = function (homeTown, state) {
    console.log(`I am ${this.firstName} ${this.lastName} from ${homeTown}, ${state}`);
}

// printName('Mumbai')
// suppose, we have second person and i want to print name of that second person, and creating another function to printName of second person is not a good way, instead we can use that same function to print the name using call, apply and bind. 

const person2 = {
    firstName: 'Vipin',
    lastName: 'Yadav'
}

printName.call(person, 'Mumbai', 'Maharastra')
// Suppose we have to pass an argument to that function then how can we do that
printName.call(person2, 'Jaipur', 'Rajasthan')

// apply
// THe only difference in call and apply is we can pass argument of array list
printName.apply(person, ['Mumbai', 'Maharashtra'])
printName.apply(person2, ['Jaipur', 'Rajasthan'])


// bind
// The only difference in call and bind is bind return a function and bind with that object and we can use later

let callLater = printName.bind(person, 'Mumbai', 'Maharashtra')
console.log(callLater);
callLater()