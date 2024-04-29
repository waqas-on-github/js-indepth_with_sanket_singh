//Toboolean is another abstract operation
// where  +0 , -0, false, NaN, undefiend , null,"" are falsy others are truthy values
// if block will convert condation into boolean
if (null) {
  console.log("value is truthy");
} else {
  console.log("value is falsy");
}

// other way
console.log(!0);
console.log(!false);
console.log(!NaN);
console.log(!undefined);
console.log(!"");
// check for truthy
console.log(!-29);

console.log(!"false"); // false 
/* how  string "false"  is a truthy value so  so negation of truthy gonna be false */