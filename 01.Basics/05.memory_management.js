// Memory Management--------------------------

// stack(primitive)(deep copies) and heap memory(non-primitive)(shallow copies)

// Stack
let myYtname = "surajmourya"
let anothername = myYtname;
anothername = "mouryasuraj"
// console.log(anothername); // ==> mouryasuraj
// console.log(myYtname);// ==>surajmourya

// Heap
let userOne = {
    email: 'mouryasuraj@google.com',
    age: 22
}
let userTwo = userOne;
userTwo.email = "suraj@google.com"
// console.log(userOne.email);
// console.log(userTwo.email);