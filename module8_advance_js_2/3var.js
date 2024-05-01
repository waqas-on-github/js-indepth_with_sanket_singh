// var is function scope and globle scope variable it dont care about block scope and module scope

var x = 10; // ---->  globlely declared variable
if (x === 10) {
  var x = x + 2; // ---> its avaliable in block
  console.log(x);
}

console.log(x); // ---> and also outside of block so if we declare variable with var keyword if will be avaliable globally if we declare outside of funcations/modules
