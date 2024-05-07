var teacher = " sankate";

function fun() {
  console.log(teacher);
  var teacher = "pulkit"; // teacher "will be everywhere" inside funcation "fun"
  let content = "js"; // content will be availabe post decalration "block scope"
  if (content == "js") {
    let hours = "120+";
    console.log(hours, content);
  }
  console.log(teacher, content);
}

fun();
console.log(teacher);
// console.log(content);


//TDZ(temporal dead zone)  blocked scope variable can not be accesed before its declaration called tdz