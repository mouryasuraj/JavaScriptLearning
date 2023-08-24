// Strings----------------------
const name = "Suraj-M"; //This is way to declare string
const repocount = 50;

//``--> Back ticks:  
// console.log(`My name is ${name}. I have ${repocount} repositories.`); //This is called string interpolation

// another way to declare string
const anotherWay = new String('Suraj')
// console.log(anotherWay);//It will give an object
// console.log(anotherWay[0]); //Output = S
// console.log(anotherWay.__proto__); // return object
// console.log(anotherWay.length); //Length is a property of String
// console.log(anotherWay.toUpperCase()); // SURAJ
// console.log(anotherWay.toLowerCase()); //suraj
// console.log(anotherWay.charAt(2)); //r
// console.log(anotherWay.indexOf('r')); //2   
// console.log(name.substring(0,4));//output=Sura -->0: Include, 4:Exclude

// console.log(name.slice(-4)); //we can give negative value only in slice method 
// const spaceStr = "       sdfdsa     "
// console.log(spaceStr);
// console.log(spaceStr.trim());
// console.log(name.replace('-', ' '));
// console.log(name.includes('ura'));

// const dashstr = 'Suraj-Mourya-is-a-good-man';
// console.log(dashstr.split('-'));//It will give array
// console.log("Shiv".charAt(2));


// Symbol Iterator---
/*
// For array
const c = [10,20,30,'Suraj',null, 48]

function xiterator(values){
    let index = 0;
    return {
        next: function(){
            if(index < values.length){
                return{
                    value:values[index++],
                    done:false
                }
            }
            else{
                return{
                    value:'undefined',
                    done:true
                }

            }
        }
    }
}
let i = xiterator(c)
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().done);
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
*/





// let x = [10, 20, 30, 'Suraj']
// let iterator = x[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// For String

// let str = "Suraj Mourya"
// console.log(str.at(3));
// console.log(str.charAt(undefined));
let anotherStr = "is a Programmer."
// console.log(str.concat(' '+anotherStr));
// console.log(str.concat(", ", anotherStr));
// console.log(anotherStr.endsWith('.')); //true
// console.log(anotherStr.endsWith('Programmer.', 16));// true
// console.log(anotherStr.endsWith('Programmer')); //false

// console.log(String.fromCharCode(189, 66, 67, 68));
// console.log(String.fromCodePoint(205, 66, 67, 68));

// console.log(`The first name ${str.substring(0, 6)}${str.includes('Suraj') ? 'is' : 'is not'} present in the given sentence`);
// const str = "To be, or not to be, that is the question.";

// console.log(str.includes("to be")); // true
// console.log(str.includes("question")); // true
// console.log(str.includes("nonexistent")); // false
// console.log(str.includes("To be", 0)); // True
// console.log(str.includes("To be", 1)); // false
// console.log(str.includes("TO BE")); // false
// console.log(str.includes(" ")); // true

// let str = "I am Suraj Is Suraj"
// let searchKey = "Suraj"
// console.log(str.lastIndexOf(searchKey, 5));

// let str = "Suraj";
// console.log(str.padEnd(6, '*'));

// let accounNumber = "8956237411245";
// let last4Digit = accounNumber.slice(-4)

// let hiddenAc = last4Digit.padStart(accounNumber.length, '*')
// console.log(hiddenAc);

// let mood = 'happy!'
// console.log(`I feel ${mood.repeat(3)}`);