// word "lexical" or "lexer"  mean compile time so scope resoulation on compile time can be called lexical scoping


var teacher = "sanket"; // blong to global scope
function ask(question) {
  // belong to scope
  console.log(question, teacher);
}

function fun() {
  // global scope
  var teacher = "pulkit";
  ask("why?"); // ask funcation called
}

fun();

