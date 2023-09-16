// javascript :
//      1.Synchronous    
//      2.Single threaded
// The above features are default behaviour of javascript


/* 
Execution context   note:each operation waits for the last one to complete before execution
    --->Execute one line of code at a time
    -
    ---->console.log()==>1
    -
    ---->console.log()==>2
    -
    - call stack          memory heap
    -

*/


// blocking code vs non-blocking code

// blocking code: Block the flow of program  ---> Read File Sync
// non-blocking code: Doesn't block the flow of program  ---> Read File Async


// 
console.log(1);
setTimeout(()=>{
    console.log(3);
},0);
console.log(2);