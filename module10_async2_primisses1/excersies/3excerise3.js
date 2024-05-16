function blocking_for_loop() {
  for (let i = 0; i < 100000; i++) {}
}

console.log("start of the file ");

setTimeout(() => {
  console.log("timer 1 done ");
}, 0);

blocking_for_loop();

let x = Promise.resolve("sanket's promise1");
x.then(function processPromise(value) {
  console.log("who's promise", value);
  blocking_for_loop();
});

let y = Promise.resolve("sanket's promise2");
y.then(function processPromise(value) {
  console.log("who's promise", value);

  setTimeout(() => {
    console.log("okey done");
  }, 0);
});

let z = Promise.resolve("sanket's promise3");
z.then(function processPromise(value) {
  console.log("who's promise", value);
});

setTimeout(() => {
  console.log("timer 2 done ");
}, 0);

console.log("end of the file ");

/*
1-- p(start of th file)
2-- settimeout excuted and added its funcation in callback qeue 
3-- main thread block due to for loop 
4--promise created and resolved immidatly and stored its result in "x"

5--x.then called and got value form resolved handler and added it in microtask qeue 

6-- promise created and resolved immidatly and stored its result in "y"

7--y.then called and got value form resolved handler  and added it inot micro tack qeue 

8-- promise created and resolved immidatly and stored its result in "z"

9--z.then called and got value from resolve handler and added "processpromise" in micro task qeue

 10-- settime out 2 added to calback qeue 

 11--p("end of the file")
 12-- event loop checks all global code is finished and ncalstack is empty so its excutes firts promise funcation and got blocked main thread for while due to for loop and thne printed "who's promise", sankate promise 1 "
 13--promise 2 excuted and printed "", sankate promise 2" and added one more stetime out into callback qeue
 14-- andothe promise resolved and printed "sankates promise3"
 15-- microtask is empty now call back que funcation started excting accordingly  like 
 "time 1 done" 
 "timer 2 done "
 "okey done "
*/
