console.log("hello");

setTimeout(() => {
  // this pice of code is not part of javascript and its provided by runtime so
  //this will be run async way
  console.log("async code completed");
}, 5000);

console.log("hola");

// so hello and hola will be printed before compeltion of settimeout cuz of async nature of js
