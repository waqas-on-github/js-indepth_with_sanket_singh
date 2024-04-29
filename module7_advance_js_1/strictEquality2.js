// 'same value non number comparision in strict equality operation '

// asserts (considiration x is not number and y has same type as x )
//undefiend
// rule #1 if type of x is undefined return true

console.log(undefined === undefined);
//null
// rule #2 if type of x is null retun true

console.log(null === null);

//strings
// rule #3 if type are string then
// ------->if x and y have same length and same sequaance of character return true othetwise false

console.log("hello" === "hello"); // true

console.log("hello" === "olleh"); // false

//boolean
// #4 if type of x and y are bollen then acc boolean logic

console.log(false === false);
console.log(true === true);
console.log(false === true);
console.log(true === false);
//symbol
//#5 if x and y are same symbol value return true otherwise false

// objects
//if x and y are same object value return true otherwise false
let obj1 = { x: 1 };
let obj2 = { x: 1 };
let obj3 = { x: 2 };

console.log(obj1 === obj2); // will retun false cuze they have different memory-location(refrence)
console.log(obj1 === obj3); // will return false

console.log(obj1 === obj1); // return true cuze have same memory-location(reffrence) and same value
// console.log({ x: 22 } === { x: 22 }); // js do  not compare objects by value but by refrences and both of then will be created by new object
