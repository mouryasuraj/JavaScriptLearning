/* 
link: https://www.freecodecamp.org/news/how-javascript-works-behind-the-scenes/
Global Execution Context [Global Environment]
Function Execution Context
Eval Execution Context




How Javascript works?
--> Everything in JavaScript happens inside an "Global Execution Context". this keyword is refer to Global Execution Context

Execution context has two component
1. Memory component[Variable Environment]
--> This is the place where all variables and functions are stored as a key:value pairs eg: {key:value, a:10}

2.Code component[Thread of Execution]
--> This is the place where code is executed one line at a time

Summary:
JavaScript is a synchronous single-threaded language.
Single threaded means that JavaScript can execute once command at a time.
Synchronous single-threaded means that JavaScript can execute once command at a time in a specific order.
*/




/*  
link:https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/#:~:text=When%20the%20JavaScript%20engine%20scans,for%20the%20variables%20and%20functions.


 How Javascript engine is Execute code with the help of call stack ?


Execution 

Everthing Happens in Global Exection Context, So first It will create Global Exection Context. In Global Exectuon Context Two phase are there: 
1.Memory Creation Phase 
2. Code Execution Phase

Global Exection Context

1.Memory Creation Phase: In this phase javascript runs through the program and allocate memory to all the variables and functions

// Code for examples
1.var n=2;
2.function sqaure(num){
3.    let ans= num * num;
      return ans;
4.}
5.var sqaure2 = sqaure(2);
6.var sqaure4 = sqaure(4);


Lets take an example of above code
1.n:undefined    //In memeory creation phase it will allocate memory and assigned undefined to variables
2.sqaure:{...}  //In the case of functions it literally stores whole code or function definition.
5.sqaure2:undefined
6.sqaure4:undefined



2.Code Exection Phase:After memory creation phase, it will runs once again thorugh whole js program line by line  and execute the code now.

now, value of n=2, It will replaced the value of undefined to 2
1.n:2
then it will move to line 5 that is sqaure2. because nothing is there to execute from line 2 to line 4.
sqaure2:sqaure(2) //here function sqaure(2) is invoked
Here, Interesting things happen that if function is invoked then javascript will again create  execution context for function in Code executin phase and again it will go through memmory and code execution process

2.                    1.Memory Phase for 
                    1.function sqaure(num){
                    2.    let ans = return num * num
                    3.     return ans;
                    4.}
                    num: undefined    //it allocates memory for parameters also
                    ans:undefined

                    2.Code execution Phase

                    num:2  //Undefined will be replaced by 2. Because in function sqaure(num) num is a parameter and sqaure(n) 1.n is an argument where function invoked and the value of n = 2 which is defined in the program

                    2.ans = num * num ///It will execute in code execution phase and replce the value of undefined with value of ans
                    ans:4

                    3.return ans   //return means that you work is done with this function. Now return the control of the program, to the place where this function was invoked
                    return 4;
    

// Now, value of ans:4 return back to line no 5. that is square2:undefined and undefined will be replace by 4
Note: After returning the value the whole execution context for that function will be deleted immediately.
5.square2:4
then it will move to next line which is line no 6

6. sqaure4:sqaure(4) //NOw again here function sqaure(4) is invoked.Again JavaScript create global execution context for function in Code executin phase and again it will go through memmory creation and code execution phase.

ans = num * num  //Here argument is passed 4, so we can directly take argument num = 4
ans: 4 * 4  
ans:16
return 16
sqaure4:16

Now, nothing is remaining to execute. So javascript will delete the Global execuion context


Stack Manage the Creation, deletion and control of execution context
It has its own call stack

Evertime in our call stack we have global execution context in bottom of the stack



Call stack is also known as 
0. Execution Context Stack
1.Program Stack
2.COntrol Stack
3.Runtime Stack
4.Machine Stack
*/
