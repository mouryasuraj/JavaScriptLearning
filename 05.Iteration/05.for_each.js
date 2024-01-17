// for each loop

const coding = ['js', 'java', 'python'
]

// Normal function in forEach as a callback function
// coding.forEach( function(val){
//     console.log(val);
// } )

// arrow funciton in forEach as a callback function
// coding.forEach( (item) =>{
//     console.log(item);
// } )



// Here, we pass a function printMe() as a parameter in forEach loop
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)


//We can pass 3 parameters in callback fucntions of forEach that is values, index and its array
// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })


// Iteration on array which have multiple objects using forEach
const myCoding = [
    {
        languageName:'javascipt',
        languageFileName:'.js'
    },
    {
        languageName:'java',
        languageFileName:'.java'
    },
    {
        languageName:'python',
        languageFileName:'.py'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName);
})