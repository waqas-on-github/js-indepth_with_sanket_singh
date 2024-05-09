console.log("hello world");
setTimeout(function exec() {
  console.log("timer ended");
}, 0);

for (let i = 0; i < 1000000000; i++) {
  // some task
}
console.log("hello world again ");

/* 
hello world
//some delay
hello world again 
timer ended 
*/

// reason javascript prefer core javascript and settimeout funcation will be resolved later
// so how it works javascript do not block main thread and exec callabck first added in callback qeue
// and then event loop will wait untill call stack to empty
