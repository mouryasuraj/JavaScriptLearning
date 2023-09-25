
// Class based setter and getter

// class User {
//     constructor(email, pass) {
//         this.email = email;
//         this.pass = pass
//     }
//     get email() {
//         return this._email.toUpperCase();
//     }
//     set email(val) {
//         this._email = val
//     }

//     get pass() {
//         return this._pass;
//     }
//     set pass(val) {
//         this._pass = val;
//     }

// }

// const suraj = new User('suraj', '124565');
// console.log(suraj.email);




// defineProperty based getter and setter

// function User(email,pass){
//     this._email = email;
//     this._pass = pass;

//     Object.defineProperty(this, 'email', {
//         get:function(){
//             return this._email.toUpperCase();
//         },
//         set:function(val){
//             this._email = val
//         }
//     })

//     Object.defineProperty(this, 'pass', {
//         get:function(){
//             return this._pass.toUpperCase();
//         },
//         set:function(val){
//             this._pass = val
//         }
//     })
// }

// const chai = new User('chai@chai.com', '123456');
// console.log(chai.email);



// object based getter and setter

// const user = {
//     _email:'suraj@gmail.com',
//     _pass:123456,
//     get email(){
//         return this._email.toUpperCase();
//     },
//     set email(val){
//         this._email = val;
//     }
// }

// const tea = Object.create(User)


