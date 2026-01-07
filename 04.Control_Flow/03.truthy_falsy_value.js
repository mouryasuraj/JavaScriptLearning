// const userEmail = 'surajmourya@ai.com'


// // Here userEmail is not compare with any value. it means that javaScript assumes itself that the value will be true or false. well, It depend upon on which datatype our variable is declared
// if(userEmail){
//     console.log('Got user email');
// }else{
//     console.log("Dont't have user email");
// }


//falsy value

// false, 0, -0, BigInt 0n, "",  null, undefined, NaN


// truthy value

// true, "1", 'false', " "(space), [], {}, function(){};



// How to check array is empty or not using conditon

// const arr = [5];
// if(arr.length === 0){
//     console.log("Array is Empty");
// }
// else{
//     console.log(`Array length is: ${arr.length}`);
// }



// How to check object is empty or not using conditon

let user = { name: 'suraj'};
if(Object.keys(user).length === 0){
    console.log("Object is empty");
}else{
    console.log(`Object have ${Object.keys(user).length} key value pairs`);

}



// false == 0   //true
// false == ''   //true
// 0 == ''   //true



// Nullish Coalescing operator(??) : null, undefined

let val1;  

// val1 = 5 ?? 10;    //5
// val1 = null ?? 10;    //10
// val1 = undefined ?? 15;    //15
val1 = (null || undefined) ?? 35
// val1 = undefined ?? 25 ?? 20;    //25

console.log(val1);

// Example
// const nullValue = null;
// const emptyText = ""; // falsy
// const someNumber = 42;

// const valA = nullValue ?? "default for A";
// const valB = emptyText ?? "default for B";
// const valC = someNumber ?? 0;

// console.log(valA); // "default for A"
// console.log(valB); // "" (as the empty string is not null or undefined)
// console.log(valC); // 42






// Ternary operator

// conditoon ? true : false
const price = 400;
price > 200 ? console.log('price is high') : console.log('price is low');;