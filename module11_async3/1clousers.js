function process() {
  let i = 0;
  function innerProcess() {
    i += 1;
    return i;
  }
  return innerProcess;
}

const obj = { x: process() };
obj.x() ; 
obj.x()
obj.x()
obj.x()
obj.x()
obj.x()

console.log(obj);

//then inner process will always remember/store its enclosing and crosponding variables 
// because of clouser

function process2 () {
  let i =0;
  function innerProcess1 () {
    i++
    return i
  }

  function innerProcess2 () {
    i++
    return i
  }
  return {
    innerProcess1 , innerProcess2
  }
}

const objx =process2()
console.log(objx);
console.log(objx.innerProcess1());
console.log(objx.innerProcess2());
console.log(objx.innerProcess1());

// its also proved that crosponding variables in funcation sharing with other all funcaion 
// will be accesed on by same memory location 