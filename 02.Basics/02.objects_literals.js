// Objects--------------------------------------------------------------------------

// Singleton
// Object.create -->through Construtor method

// object literals
let mySymbol = Symbol();
const jsUser = {
    name: 'suraj',
    age: 18,
    'Full name': 'Suraj Mourya',
    location: 'Jaipur',
    [mySymbol]: '123', //This is the way to declare symbol in Object literals
    email: 'suraj@123',
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.name);//way to access values from object
// console.log(jsUser['name']);//Another and Prefered way to access values from object
// console.log(jsUser[mySymbol]);//way to access Symbol values from object

jsUser.name = 'SurajMourya'; //You change values of object this way
// Object.freeze(jsUser); //This method is used when you don't want to change the values of Object
jsUser.name = "MouryaSuraj"
// console.log(jsUser);
// console.log(Object.isFrozen(jsUser));

jsUser.greetings = function(){        //Functions in Objects
    console.log("Hello Js User");
}
// console.log(jsUser.greetings); //This will return a reference of functions. It will not call.
// console.log(jsUser.greetings());


jsUser.greetings2 = function(){
    console.log(`Hello Js User, ${this.name}`);//This Property is used to refer the current Object
}
// console.log(jsUser.greetings2());



// const myobj = new Object()// Singleton Object
// const myobj1 ={} // Non-Singleton Object

const fullname = {
    email:"Suraj@gmail.com",
    username : {
        firstName: 'Suraj',
        lastname: 'Mourya'
    }
}
// console.log(fullname.username.firstName);
const myobjs1 = {
    1:'a',
    2:'a'
}
const myobjs2 = {
    3:'a',
    4:'a'
}
// let myobjs3 = {myobjs1, myobjs2} //It will add both object inside myobj3. It will not add property of both the object

// let myobjs3 = Object.assign({}, myobjs1, myobjs2) //parameters(target, source). Assign method is used to concatenate or add more than two object and return a target object

let myobjs3 = {...myobjs1, ...myobjs2}//... it is a spread operator
// console.log(myobjs3);

// console.log(Object.keys(jsUser))// keys method is used to get all the keys from object and it will return a array
// console.log(Object.values(jsUser))// Values method is used to get all the values from object and it will return a array
// console.log(Object.entries(jsUser))// entries method return array of each key:value pairs and it will return a array

// console.log(jsUser.hasOwnProperty('isLoggedIn')); //true. It is used to check the given property exist ot not and returns a boolean value



// Object de-structure 

let obj = {
    name:'Suraj',
    age:22
}
const {name, age} = obj; //This is called Object Destructutring
const {name:Name, age:Age} = obj; //we can also change the keys name using the given method name:Name
// console.table([Name, Age]);

// JSON API
// {
//     'name':'suraj',
//     'age':2,
//     'surname':'mourya'
// }  // JSON Format of API

// [
//     {},{},{}
// ] //Another way of API