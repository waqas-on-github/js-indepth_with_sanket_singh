console.log("hello world");
for (let i = 0; i < 3; i++) {
  setTimeout(function exec() {
    console.log("timer ended");
  }, 10);
}
for (let i = 0; i < 1000000000; i++) {
  // some tas
}

console.log("hello world agin");
