// promise
// early days when promise was not introduced then developer love to use bluebird and Q library

// how to create promise(one way to create promise)
// Promise is object. So, when you created any instance of object, you have to use new keyword to create.
// Promise takes two parameter(resole, reject)
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB call, cryptography, networkcall
    setTimeout(() => {
        // console.log('task completed');
        // if we want to run the then methoud then we have to pass the resolve method.
        resolve();
    }, 1000);
})

// then method takes automatically an argument which is a resolveMethod.
promiseOne.then(() => {
    // console.log('promise completed');
});


// another way to create promise (without storing in variable)

new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('task 2');
        resolve();
    }, 1000);
}).then(() => {
    // console.log('task2 resolved');
})

// third promise
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('task threee');
        resolve({ username: "suraj", email: "suraj@gmail.com" });
    }, 1000);
})
// whatever parameter we pass in the resolve method it will automatically pass to the then method
promiseThree.then((user) => {
    // console.log(user.username);
    // console.log(user.email);
})



// fouth promise  with reject keyword
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "suraj", email: 'suraj@gmail.com' });
        } else {
            reject('ERROR!, Something went wrong');
        }
    }, 1000);
})
promiseFour.then((user) => {
    // console.log(user);
}).catch((err) => {
    // console.log(err);
})



// callback hell and chaining of then method
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;
        if (!err) {
            resolve([1, 2, 3]);
        } else {
            reject('ERROR!, Something went wrong');
        }
    }, 1000);
})

//if we want to return any thing the we have to use chain method example is given below.
promiseFive.then((arr) => {
    // console.log(arr);
    return arr[1];
}).then((arr2) => {
    // console.log(arr2);
}).catch((err) => {
    // console.log(err);
}).finally(() => {
    // Finally method is always execute no matter promise is resolved or rejected
    // console.log('The promise is either resolved or rejected');
})



// promise using async await

// we can use both async await or then and catch. It depend on what our usecase is.
const promiseSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;
        if (!err) {
            resolve("resolved")
        } else {
            reject('ERRor! Something went wrong')
        }
    }, 1000);
})

async function consumedPromiseSix() {
    try {
        // const response = await promiseSix;
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

consumedPromiseSix();



// basic example of fetch using async await

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('E: ' + error);
//     }
// }   

// getAllUser();


// basic example of fetch using then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data[0])
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('Finally always execut either promise resolved or rejected ');
})