/*
ChatGPT Link - https://chatgpt.com/c/69521247-1ad0-8321-9bef-2c222f814011


Null Comparison

| Expression   | Why             | Result  |
| ------------ | --------------- | ------- |
| `null > 0`   | `0 > 0`         | ❌ false |
| `null === 0` | Different types | ❌ false |
| `null >= 0`  | `0 >= 0`        | ✅ true  |



// Memory Management
1. (Stack)Primitive data types(Deep Copies):
number
string
boolean
null
undefined
symbol
bigint
ex: let a = 10;
    let b = 30;
    b = 40;
    so, a and b have different variable and they don't share memory. changing b does not affect a. This is called deep copy.

2. (Heap) Non-Primitice data types(Shallow copies):
Objects {}
Arrays []
Functions
Date, Map, Set, etc.
Ex: 
    let obj1 = {
        name:"suraj",
        age:{
            value:45
        }
    }
    let obj2 = obj1
    obj2.name = "swati"
    console.log(obj1.name) // swati  --> Obj1 and Obj2 are point to same memory. Changing one will affect the other

3. structuredClone() method is used to deep copy of the original
ex: let obj1 = {
        name:"suraj",
        age:{
            value:45
        }
    }
    let obj2 = structuredClone(obj1)
    So, now ob1 and obj2 are pointing two different memory location, changing one does not affect other.


4. Difference between at and charAt string method
| Feature         | `charAt()`      | `at()`              |
| --------------- | --------------- | ------------------- |
| ES Version      | Old (ES3)       | ES2022              |
| Negative index  | ❌ Not supported | ✅ Supported         |
| Out of range    | Returns `""`    | Returns `undefined` |
| Works on arrays | ❌ No            | ✅ Yes               |
| Readability     | Medium          | Better              |
| Recommended     | ❌ Legacy        | ✅ Modern            |
1. charAt() is an old method that does not support negative indexing
2. at() is an new method that support negative indexing and we use this method in string and arrays


Difference 
| Feature          | `fromCharCode()`  | `fromCodePoint()`        |
| ---------------- | ----------------- | ------------------------ |
| Unicode handling | UTF-16 code units | Full Unicode code points |
| Emoji support    | ❌ Broken          | ✅ Correct                |
| Max value        | `0xFFFF` (65535)  | `0x10FFFF`               |
| ES Version       | Old (ES1)         | ES6                      |
| Surrogate pairs  | ❌ Manual          | ✅ Automatic              |
| Recommended      | ❌ Legacy          | ✅ Modern                 |


Questions:
    1. Why "😀".length === 2?
    --> Because emojis uses surrogate pair (UTF-16)
    2. Why String.fromCharCode(128512) fails?
    --> Because fromCharCode is old and it have a limited range, instead use fromCodePoint which have ability to accept longer range
    3. Difference between slice() and substring()?
    --> slice accepts negative value and it is the modern and recomended to use but substring does not contain negative value and its old
    4. Why strings are immutable?
    --> string are immutable, it return a new value, not modifying the original one


NUmbers
1. What is toPrecision method?
--> toPrecision method is used to return a number with fixed length, if the passed arguemnt is less than the number then the return number will be in exponancail if same then return the same number by fixing the round off
    ex:1. num = 100.45
        toPrecision(3) will be 100
        2. num = 101.56
        toPrecision(3) will be 102
    GPT - toPrecision() returns a number as a string with a specified total number of significant digits.
It may return the result in normal or exponential notation, depending on the value and the precision.

*/