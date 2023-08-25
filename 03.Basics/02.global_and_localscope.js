// Scopes

// let a = 10;
// const b = 20;
// var c = 30;
// console.table([a,b,c])

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a) //we can't access the value of a because a is declared with let and it has local scope
// console.log(b) //we can't access the value of b because b is declared with const and it has local scope
// console.log(c) //we can access the value of c because c is declared with var and it has global scope. so, that's why today's date no one declare variable with var
let a = 20;
const b = 30;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
console.log(a);
console.log(b);