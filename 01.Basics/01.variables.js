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
