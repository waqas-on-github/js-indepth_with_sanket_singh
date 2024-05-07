function fun() {
  //normal funcation declaration
  console.log("hi1");
}
// funcation expression all blew
const f = function gun() {
  console.log("hi2");
};

const h = function () {
  console.log("hi3");
};

(function x() {
  console.log("hi4");
});

(function () {
  console.log("hi5");
});

const x = () => {
  console.log("hi5");
};

// IIFE
(function () {
  console.log("im iife");
})();
