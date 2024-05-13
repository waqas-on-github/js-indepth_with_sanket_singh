console.log("hello world");
for (let i = 0; i < 3; i++) {
  setTimeout(function exec1() {
    console.log("timer ended exec1---" + i);
    sleep(i);
    setTimeout(function exec2() {
      console.log("timer ended exec2----" + i);
    }, 10);
  }, 0);
}
for (let i = 0; i < 100000; i++) {
  // some tas
}

console.log("hello world agin");

function sleep(x) {
  console.log("started loop---" + x);
  for (let i = 0; i < 100000; i++) {
    //some task
  }
  console.log("ended loop----" + x);
}

// will be adde to v8 visulizer for fun tommorow

