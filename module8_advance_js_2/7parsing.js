// how javascript program excutes
//----> basically in two phases
//            ---> parsing
//            ---> excution

// whats parsing
// reading code line by line and asigning declared variable to their memory space in their regarding scope
// so what will happen blow code during parsing

var teacher = "sanket"; //#1 bucket in memory to varaible "teacher" assigned (but not value "sanket")just memory space in its regarding space

function fun() {
  //#2 bucket in memory to variable "fun" assigned
  var teacher = "punkit"; //#2.1 variable "teacher" inside scope of "fun" declared
  console.log(teacher);
}

function gun() {
  //#3 bucket in memory to variable "fun" assigned
  var student = "sarathak"; //#2.1 variable "student" inside scope of "gun" declared
  console.log(student);
}

fun(); // #4 when funcation "fun" called value of declared variables assigned
gun(); // "sarathak"
console.log(teacher); // sanket
