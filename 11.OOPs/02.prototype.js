// Javascript behaviour is a prototypal behaviour
// At the end everything in javascript is object

// Example :  Array---------> Object---------------->NUll
// Example :  String---------> Object---------------->NUll
// Example :  Function---------> Object---------------->NUll  //Technically we can say that function is also a object

function multiply(num) {
    return num * 5;
}
multiply.power = 2;  //we can set properties to the constructor of function
// console.log(multiply(5));
// console.log(multiply.power);
// console.log(multiply.prototype);



// Understand object


// New and this keyword

function createUser(username, id, dob) {
    this.username = username;
    this.id = id;
    this.dob = dob;
}

createUser.prototype.dateOfBirth = function () { console.log(this.dob); }

const suraj = new createUser('suraj', 1, '15 Jan');
const shiv = new createUser('shiv', 101, '22 dec 2000');
// console.log(suraj.dateOfBirth());

/*
Here's what happens behind the scenes when the new keyword is used:

1)A new object is created: The new keyword initiates the creation of a new Javascript object

2)A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.


3)The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the instended return value.

4)The new object is returned: After the constructor function has been called, if it doesn't reutrn a non-primitive value(Objev\ct, arrry, function, etc.), the newly created object is returned
*/



// Understand Prototype

const myName = "Suraj         ";

// console.log(myName.trueLength);// suppose i want to add my own method or property to the string, then how should i do that

const arr = ["heros"];
// console.log(arr);
Array.prototype.showArr = () => {
    console.log('Show arr');
}

const obj = {
    powerofHeros: 'Thummm!!'
}

// Object.prototype.showpower = () => {
//     console.log(`Power of heros`);
// }
// arr.showArr();
// obj.showArr();




// Inheritance

// old systax

const user = {
    username: 'suraj'
}
const teacher = {
    available: true,
    // __proto__: user
}
const staff = {
    name: 'ramu kaka',
    // __proto__: teacher
}

// user.__proto__ = staff

// console.log(user.name);



// MOder Syntax
Object.setPrototypeOf(teacher, user)
// console.log(teacher.username);



// How to create our own property and use it    

let anotherString = 'Suraj       ';
String.prototype.trueLength = function () {
    console.log(this.trim().length);
}
console.log(anotherString.length);
anotherString.trueLength();