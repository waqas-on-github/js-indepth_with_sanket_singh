/* 
1--- > inversion of controle 
2---> callback hell // cahin of nested callback 

*/

// so main problem with callbacks ..... INVERSION OF CONTROL .....
function doTask(fn, x) {
  // whole mplementation was done by team A
  return fn(x * x);
}

// funcation consumed by Team B
doTask(function excu(num) {
  console.log("wo num is " + num);
}, 20);
// so team B dont know exactaly how Team A implemented funcation and if both team are'nt synced to each other itll cause lot of problems
