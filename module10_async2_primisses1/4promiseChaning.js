function download() {
  return new Promise(function excu(resolve) {
    setTimeout(() => {
      console.log("complating downloading in 5s");
      resolve("ABCDF");
    }, 5000);
  });
}

let x = download();
x.then(function fullfill(value) {
  console.log("content downloaded is " + value);
  return "New Promise string ";
})
  .then(function fullfill(value) {
    console.log(value);
    return "new2 Promise string ";
  })
  .then((val) => {
    console.log(val);
  });

// we can chain promises eache promise fullfill handler returned value will be recived by its crossponding then funcation
