var teacher = "sanket";

function fun() {
  var teacher = "punkit";
  common = "js";
  console.log(teacher);
}

function gun() {
  var student = "sarathak";
  console.log(student);
}

// console.log(common) ; ----> here we cannot access variable cuz its not declared globlly yet
fun(); //  punkit // when we call funcation "fun" value of declared variable got assigned and if there is informal variable value assignement the variable is got declared and value assigned "globelly"  these varailes are autoglobles
console.log(common); // like we can log value of "common" afte funcation "fun" call
gun(); // "sarathak"
console.log(teacher); // sanket

// whats scope---> represents visibility
// whats mean by visibility
//visibility means visibility of variables/funcation

//...... EVERYTHING INSIDE YOUR CODE WILL BE USED ONE OR OTHER WAY.........
//#1 ----> either it will be getting some value assigned to it
//#2 ----> or some value will be retrived
