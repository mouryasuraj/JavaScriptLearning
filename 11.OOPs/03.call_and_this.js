// The call() method of Function instances calls this function with a given this value and arguments provided individually.

// examples

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }

// function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
// }

// const noodles = new Food('maggie', 25);
// console.log(noodles.category);



// another example
// Using call() to invoke a function and specifying the this value
function greet() {
    console.log(`${this.animal} typically sleeps between ${this.sleepTime} hours`);
}
const obj = {
    animal:'cat',
    sleepTime:12
}

greet.call();

// Using call() to invoke a function without specifying the first argument

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is Wisen"