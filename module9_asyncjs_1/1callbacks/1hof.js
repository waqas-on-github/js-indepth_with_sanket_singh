// funcation that take another funcation as argument

function f(x, fn) {
  console.log(x);
  fn();
}

f(22, function hofCallback() {
  console.log("im called funcation expression");
});
