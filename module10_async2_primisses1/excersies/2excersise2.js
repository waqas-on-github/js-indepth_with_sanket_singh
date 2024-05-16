console.log("start of the file ");

setTimeout(() => {
  console.log("timer 1 done ");
}, 0);

for (let i = 0; i < 100000; i++) {}

let x = Promise.resolve("sanket's promise");
x.then(function processPromise(value) {
  console.log("who's promise", value);
});

setTimeout(() => {
  console.log("timer 2 done ");
}, 0);

console.log("end of the file");

/* 

1--"start of the file printed"
2-- settimeout 1 added excutes its callback funcation and added it on callback qeue 
3-- for loop blocked the main threas 
3-- promise created and  resolved immidaitly and its value added into "x"
4--x.then  added "processPromise" funcation into micro task qeue 
5-- settimeout 2 added excutes its callback funcation and added it on callback qeue
6--"end of the file printed"
'callstack is empty and  all globle code is also completed so event loop will run funcation added in 
microTask qeue '
7--"whos promise , sankets promise  " printed
8-- "timer 1 done" printed 
9--"time 2 done" printed
*/
