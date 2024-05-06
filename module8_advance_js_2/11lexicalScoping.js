// word "lexical" or "lexer"  mean compile time so scope resoulation on compile time can be called lexical scoping

var teacher = "sanket"; // blong to global scope

function ask(teacher, question) {
  // belong to scope
  console.log(teacher, question);
}

function fun() {
  // global scope
  var teacher = "pulkit";
  ask("why?"); // ask funcation called
}

fun();
