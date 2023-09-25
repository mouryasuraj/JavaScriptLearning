
class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(this.username + " Logged in");
    }
    static createId() {
        console.log('123');
    }
}

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
    static a = super.createId()
}

const teacher1 = new Teacher('suraj', 'suraj@123')
teacher1.a;  //