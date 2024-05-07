function fun() {
  // --> fun --> globle scope
  var x = 10; // ---> x- scope of "fun"

  function gun() {
    // ---> "gun" ---> scope of "fun"
    var y = 20; // y --> scope of "gun"
    console.log(y); // 20 from scope of gun
    console.log(x); // 10 from scope of "fun"
  }
  console.log(x); // 10 from scope of fun
  // console.log(y); // refrence error cuz---> we are trying to access "y" in scope of "fun" where it dont exists and even we check above scope "Globle scope" there also "y" is not available
  gun();
}

fun();
