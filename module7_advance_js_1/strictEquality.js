// strict equality also check s types if type are differnt  it will not do corcion but retun false immidatly like

console.log(false === 0); // ---> false
//but if we do in abstrct equality itll corerc data types and then reffer to strict equality opeatior like

console.log(false == "0"); // ---> true

/*
steps false ---> number ---> 0 
      "0" ---> number --->0
      hence 0==0 ---> strict equility operater 
      there ---> 0===0 --->true 
*/

// let explore Rules

// rule #1 if types of x or y are different like
console.log(false === 0); // ---> false

// rule #2 if type of x is number

// rule #2.1&2.2 if x or y are NaN return false

console.log(NaN === 10);
console.log(10 === NaN);
console.log(NaN === NaN);

// rule #2.3  types are same and values are equal itll return true

console.log(33 === 33);
console.log(false === false);

// rule # 2.4 & 2.5 if x or y are +- 0 return true

console.log(0 === -0); //---> true
console.log(-0 === 0); //---> true

//-----------------THIS WAS FOR NUMBER LET CHECH FOR OTHER DATA TYPES in
strictEquality2.js;
