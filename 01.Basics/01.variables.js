// "use strict"; //treat all js code as newer version
// -->  "use strict" directive is used to enable a strict mode for your code. Strict mode is a set of rules that enhance error handling and discourage the use of certain error-prone features in JavaScript. When you use strict mode, the JavaScript interpreter becomes more strict in parsing and executing your code, which can help you catch common programming mistakes and prevent the use of problematic features.


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


/*


In JavaScript, var, let, and const are used to declare variables, but they have some key differences in terms of scope, hoisting, and mutability. Here's an overview of each:

var:
    1.Variables declared with var are function-scoped, meaning their scope is limited to the function in which they are declared.
    2.var variables are hoisted to the top of their scope, so they can be used before the declaration.
    3.They do not have block scope, which means they are visible throughout the entire function, regardless of where they are declared.
    4.var declarations are not affected by the block structure, and they can be re-declared within the same scope.
let:
    1.Variables declared with let are block-scoped, meaning their scope is limited to the block (enclosed by curly braces) in which they are declared.
    2.let variables are also hoisted to the top of their block, but they are not initialized until the actual declaration is encountered during execution.
    3.Unlike var, let variables can't be re-declared in the same scope.
const:
    1.Variables declared with const are also block-scoped.
    2.const is short for "constant," and once a value is assigned to a const variable, it cannot be reassigned.
    3.const variables must be initialized at the time of declaration, and they can't be left uninitialized.
    4.Like let, const variables are not re-declarable in the same scope.

It is recommended to use const

*/



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