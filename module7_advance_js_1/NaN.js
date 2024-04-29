console.log(Number("123"));
console.log(Number("1hgj"));
console.log(Number(0xa));

// how to check value is NaN or not
// way 1

console.log(NaN === NaN); // this will fail  will give false

// way 2
console.log(isNaN(NaN)); // this will check but

console.log(isNaN("hello")); // this  will do coercion so it also will be true

// way 3 final one which dont do coercion

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("ha"));

// experiments

console.log(NaN !== NaN); // find a way where it fails
let x = NaN;
let y = NaN;
console.log("--------------------------- from here ");
console.log(x !== x);
console.log(x !== y);
console.log(x !== NaN);
console.log(x !== "sanket");
console.log(x !== -0);

console.log("--------------------------- after change  ");
x = "hola";
console.log(x !== x);
console.log(x !== y);
console.log(x !== NaN);
console.log(x !== "sanket");
console.log(x !== -0);
