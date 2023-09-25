

// class User {
//     constructor(username, emailId, password) {
//         this.username = username;
//         this.emailId = emailId;
//         this.password = password;
//     }

//     encrypTPassword() {
//         return `${this.password}abc`
//     }
//     changeUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User('Suraj', 'Suraj@123', '123');
// console.log(user1.encrypTPassword());
// console.log(user1.changeUserName());

// behind the scene


// function User(username, emailId, password) {
//     this.username = username;
//     this.emailId = emailId;
//     this.password = password;
// }

// User.prototype.encrypTPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUserName = function(){
//     return `${this.username.toUpperCase()}`
// }

// const Tea = new User('Suraj', 'Suraj@123', '123');
// console.log(Tea.encrypTPassword());
// console.log(Tea.changeUserName());



// inheritance in class

class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`${this.username} logged In`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`Course was added by ${this.username}`);
    }
}

const user1 = new User('Suraj');
// user1.logMe();

const teacher1 = new Teacher('Shiv', 'shiv@gmail.com', 'abcdefg');
// teacher1.logMe()

console.log(teacher1 instanceof User);