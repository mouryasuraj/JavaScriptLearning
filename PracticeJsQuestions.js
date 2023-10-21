// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date();
let day = date.toLocaleString('en-in', { month: 'long' });
let hour = date.getHours()
let min = date.getMinutes();
let sec = date.getSeconds();
let prepand = hour >= 12 ? 'PM' : 'AM'
// console.log("Today is " + day);
// console.log(`${hour} ${prepand} : ${min} : ${sec}  `);


// 2. Write a JavaScript program to print the current window contents.
// Click me to see the solution

// document.querySelector('#print').addEventListener('click', () => {
//     window.print();
// })

// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


let dd = date.getDate()
let mm = date.getMonth() + 1;
let yyyy = date.getFullYear();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

// console.log(`${dd}-${mm}-${yyyy}`);
// console.log(`${mm}-${dd}-${yyyy}`);
// console.log(`${dd}/${mm}/${yyyy}`);
// console.log(`${mm}/${dd}/${yyyy}`);


// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
// Click me to see the solution

let side1 = 5;
let side2 = 6;
let side3 = 7;
let s = (side1 + side2 + side3) / 2;

let areaOfTriangle = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)))
// console.log(areaOfTriangle);


// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.  


const head = document.querySelector('.heading');

let str = 'Suraj'
console.log(str[0]);
setInterval(() => {
    str = str[str.length - 1] + str.substring(0, str.length - 1);
    head.innerHTML = str;
}, 1000)