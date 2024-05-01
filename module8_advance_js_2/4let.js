// let can dedclare blockscope and globle variables  variable declared inside {}  is called block scoped variable

let x = 10; // ---> this variable is available globally

if (true) {
  let x = 11;

  console.log(x); // different then above "x"
}

console.log(x); // globle "x"
