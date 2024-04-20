// problem  --> we all know about triangles but this time lets do something intresting
// .. given three ints  a,b,c  check if we can form a triangle with the size of the triangle having
// length a,b,c
var a = 2;
var b = 2;
var c = 6;
if (a + b > c && a + c > b && b + c > a) {
  console.log("yes");
} else {
  console.log("no");
}
