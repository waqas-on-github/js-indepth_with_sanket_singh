// const do not allow reassigment like let or var

let x = 10;
x = 12;

/// but with const its not allowed

const y = 22;
// y = 88;

// also const dont allow unassigned declaration

// const z ;

// TDZ in const so const liek let have TDZ

function fun() {
  // console.log(x);
  const x = 20;
}
fun();

//object/arrays  in can can be updated but can not be reassigned

const myarr = [1, 2, 3, 4];
myarr.push("h");
console.log(myarr);

const myobj = {
  name: "waqas",
};

myobj.age = 28;

console.log(myobj);
