console.log(15 + 13); // super simple arthimitic stuff
//.
//.
//.
// what if one  of the oprend is not a number
// coercison in addition
let operation = "16" + 55; //here js coerce 55 into string and concatenate with string 15
console.log(typeof operation);

console.log(5 + true); // here booleans will be treated as 0 or 1 so ans will be 6
console.log(5 + false); // ans ---> 5+0 = 5

console.log(6 + undefined); // ---> this will give back  as NAN

console.log(8 + null); // --->  null will be falsy so value will be zero 8+0

console.log("hello" + false); // false is gonna be converted into strings
console.log("11" - "844"); // if inside string is number it will  to convert it into number
// if its truthy value itll be converted to number and if its string of alphabats  like "hh"
// which can not be converted to number it will show us NAN

// same for division and multiplication
console.log("22" * true);
console.log("22" / "10");
// .........abstract operations ...............

// type casting(type convertion ) opeations happen internely and automatically in js but as devs we need to know about it to
// understand internal working of js

//ToNumber operation converts every datatype into number

console.log(Number(undefined));
