"use strict";

// strict mode put some  rectrictions in javasecript like
// preventing informal variable declaration

//like ...
function fun() {
  var x = 19;
  b = 19; // this will throw error in "strict mode"
  return x;
}

fun();

// like preventing funcation declaration in blocks

{
  function x() {
    return 0;
  }
}

x();
