// var is function scope and globle scope variable it dont care about block scope and module scope

var x = 10; // ---->  globlely declared variable
if (x === 10) {
  var x = x + 2; // ---> its avaliable in block
  console.log(x);
}

console.log(x); // ---> and also outside of block so if we declare variable with var keyword if will be avaliable globally if we declare outside of funcations/modules


// so var is globle scoped variable 
// what realy globle scope means 

// let is block scope and var is block scoped variable so here we are declaring both of them globally but what really here means in block scope we can access varaibles before its declararion like 

console.log(xa);
var xa=22
console.log(xb); // whaile let is "block scoped" variable so we can not access before its declaration 
let xb=23

