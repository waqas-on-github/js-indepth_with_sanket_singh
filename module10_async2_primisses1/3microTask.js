//non async promise
function createPromise() {
  return new Promise((resolve, reject) => {
    console.log("resolving the promise ");
    resolve("done");
  });
}
//creating sync funcation
setTimeout(() => {
  console.log("timer completed");
}, 0);
console.log("before promise call ");
// promise consumtion
let p = createPromise();

p.then(
  function onfulfilled(value) {
    console.log("we flfilled with value 1", value);
  },
  function onrejcted() {}
);
p.then(
  function onfulfilled(value) {
    console.log("we flfilled with value 2 ", value);
  },
  function onrejcted() {}
);
p.then(
  function onfulfilled(value) {
    console.log("we flfilled with value 3", value);
  },
  function onrejcted() {}
);

//time taking sync task
console.log("starting long for loop ");
for (let i = 0; i < 1000000000; i++) {}
console.log("ending  long for loop ");

console.log("ending ....");

/* 
 ............ THEORY TIME ................
 #lets discuss excution flow of above code  
   --> #1st promise funcaion declared 
   --> #2nd settimeout funcation excuted and added his excuter funcation in callback qeue 
   --> #3rd createPromise funcation called 
           
              #3.1 -->cuz its sync and very less time comsuming promise its resolved instently
              #3.2 --> returnd 3 things 
                       #3.2.1 --> promise state --> fulfilled
                       #3.2.2 --> promise value ---> value returned by resolve which is ("done") 
                       #3.2.3 --> prmise returnd two arrays[] for handlers onfulfill onreject

    -->#4th p.then registerd handlers to promise arrays which is in fullfilled state 
           ( BIG NOTE  untill promise state changes(form pending to [fulfilled | rejected]) handler aren't gonnad added to microtask qeue)  here promise is fulfilled so itll addd onfullfill funcations in microtask qeue 

    -->#5 logged "starting long for loop"
    -->#6  run for loop 
               --> console.log("starting long for loop ");
               --> some compution .....
               --> console.log("ending  long for loop ");

    -->#7  console.log("ending ....");
    -->#8 after excuton of all globle code js will start excuting funcation in microtask qeue 
            added by p.then 
    --> #9 after this funcation added in callback qeue on start will be excuted 

*/
