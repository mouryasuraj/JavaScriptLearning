// "use strict"; //treat all js code as newer version


// Let, const, var
const accountId = 13333;
let accountEmail = "suraj #gmail.com"
var accountPassword = "1234"
accountCity = "Mumbai"

// accountId = 12   // Not allowed
accountEmail = "sdfdf"
console.log(accountId);
console.table //must have one mandatory argument data, which must be an array or object and one additonal parameter columns
console.table([accountEmail, accountId, accountPassword, accountCity])


// Prefer not to used var because of issue in block and functional scope
// Code readibility should be high priority




// Note
/*
let and const declarations are hoisted;

what is a temporal dead zone
--> A temporal dead zone is the block where a vairiable is inaccesible until the moment the computer initializes it with a value


ReferenceError: x is not defined
syntaxError
typeError

Things learned:
1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
2. Temporal Dead Zone exists until variable is declared and assigned a value.
3. window.variable OR this.variable will not give value of variable defined using let or const.
4. We cannot redeclare the same variable with let/const(even with using var the second time).
5. const variable declaration and initialisation must be done on the same line.
6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.
*/