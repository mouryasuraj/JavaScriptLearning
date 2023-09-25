// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);


const obj = {
    name: 'Suraj',
    id: 12,
    email: 'suraj@123',
    showMe:function(){
        console.log('Hello');
    }
}

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
Object.defineProperty(obj, 'name', {
    writable:false,
    enumerable:false,
    configurable:false,
})

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));


for (const [key, value] of Object.entries(obj)) {
    if(typeof value !== 'function'){
        console.log(key , value);
    }
}