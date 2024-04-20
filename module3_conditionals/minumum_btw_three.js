// problem  find minimum value among three integers like --> x=10 , y=50 . z=1 ---> ans = 1

var x = 1;
var y = 2;
var z = 6;

if (x < y && x < z) {
  console.log(x);
} else if (y < x && y < z) {
  console.log(y);
} else {
  console.log(z);
}
