// let can dedclare blockscope and globle variables  variable declared inside {}  is called block scoped variable

let x = 10; // ---> this variable is available globally

if (true) {
  let x = 11;

  console.log(x); // different then above "x"
}

console.log(x); // globle "x"


// while let has no sence of funcation scope but it has sence of block scope braces of funcaton are also block like ...

function gun() {
  console.log(y);
  let y = 20;
  console.log(y);
}
  