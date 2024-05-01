let x = -0;
console.log(x === 0); // this should be false actuly it is but its giving true

console.log(Object.is(x, 0)); // its alos checking equality is -0===0 its giving false so its giving false which is expected

console.log(Object.is(x, -0));

// lets write a custom funcation to check any number is negative or not if positive return 1 if negative return -1

function checkSign(number) {
  console.log(number);
  console.log(Object.is(number));
}

checkSign(-10);
