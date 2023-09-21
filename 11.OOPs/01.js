// Javascript and classes
// Does javascript have classes or not


// OOps
// Object--> COllection of properties and method


// why use OOP --- > before oop there is a problem of code mess up code that's why oop introduced

// parts of OOP
// 1)Object literal  --> oject itself

// construtor function
// prototype
// classes
// instances(new, this)

// 4 pillars of OOPs
/*
Abstraction  --- Hiding
Encapsulation --- wrapper up
Inheritance ----
Polymorphism
*/





// object literal

const users = {
    username: 'suraj',
    id: 12,
    getDetails: function () {
        console.log(`Username: ${this.username}`); //Username: suraj
        console.log(this); //It will print the current object {username: 'suraj', id: 12, getDetails: ƒ}
    }
}
// console.log(user.getDetails());
// console.log(this);  //if we refer this keyword in nodejs then we will get empty object {} and if we console this in browser then it will refer window object




// constructor function

// const date = new Date()//here new keyword allow you to create multiple instance of a single object. new keyword also known as constructor function
// example

// constructor

function User(username, id) {
    this.username = username;
    this.id = id;
    return this
}
function Users(username, id) {
    this.username = username;
    this.id = id;
    return this
}

// create instance of User
const userOne = new User("suraj", 1);
const userTwo = new User("mourya", 2);
const userThree = new Users("mourya", 2);

console.log(userThree instanceof Users);

// new -->
// 1)when we use new keyword a new object is created which is also called as instance
// 2)new keyword calls the constructor
// 3)whatever the arguments are passes to the constructor it will goes to this keyword (means object)