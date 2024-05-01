// abstract equality operator vs strict equailty oprator

// == vs ===

// fact 01 both  checks types
// abstract equality operator "==" -->
// if both side of types are same it'll refrence to strict equality operator ===
//LIKE
// lets check about primitive values
console.log(22 == 22);
console.log(22 === 22);
//or
console.log(false == false);
console.log(false === false);
//or
console.log("hello" == "hello");
console.log("hello" === "hello");
// or
console.log(NaN == NaN);
console.log(NaN === NaN);
// or
console.log(null == null);
console.log(null === null);
// or
console.log(undefined == undefined);
console.log(undefined === undefined);

// lets check non primitives

let obj1 = { x: 10 };
let obj2 = { x: 20 };
console.log(obj1 == obj2);
console.log(obj1 === obj2);

// hence proved == & === to checks types
// rule#2 , 3 if x null && y is undefined || x is undefind && y is null  return true
console.log("startrs here ===============================================");

console.log(null == undefined);
console.log(undefined == null);

// rule#4&5 if x or y is number and string string will be coerced to number

console.log(22 == "22");
console.log("22" == 22);

// rule#6&7 if x or y is boolean first boolean will be converted ToNumber then next process happen

console.log(false == "0");
/*
steps false ---> number ---> 0 
      "0" ---> number --->0
      hence 0==0 ---> strict equility operater 
      there ---> 0===0 --->true 

*/

console.log("0" == false);

// rule #8 &9 if
// x or y is string number symbol (...Note bool will be converted to number acc to law 6&7 )and x or y is object

const obj = {
  name: " waqas ",
  valueOf() {
    return "22";
  },
};

console.log("here it goes ");
console.log("22" == obj);

// rule 10 if all above dosent met the requirment rertutn false

console.log(undefined == obj);
console.log(null == obj);
