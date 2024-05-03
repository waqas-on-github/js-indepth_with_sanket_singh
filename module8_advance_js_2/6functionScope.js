// whats funcation scope
// --> any variable declared inside funcation
// body

// var keywoed has sence of funcation scope

function fun() {
  console.log(x); //
  var x = 10;
  console.log(x);
}

fun();
// console.log(x);

// while let has no sence of funcation scope but it has sence of block scope braces of funcaton are also block like ...

function gun() {
  console.log(y);
  let y = 20;
  console.log(y);
}
// console.log(y);
