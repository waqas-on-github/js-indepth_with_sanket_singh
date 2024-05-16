function fetchData(url) {
  return new Promise((reslove, reject) => {
    console.log("starting download data from ", url);
    setTimeout(() => {
      let data = "dummy data";
      console.log("download completed");
      reslove;
    }, 7000);
  });
}

console.log("start");
let promiseobj = fetchData("xyz.com");
promiseobj.then(function onfullfill(value) {
  console.log("value is", value);
});

console.log("end ....");

/*
#1 logged --> "start"
#2 fetchData --> called  -->console.log("starting download data from ", url);
#3 logged  ---> "end ...."
#4 added settimeout to runtime 
  after 7s 
#5 logged --> "download completed" 
#6 resolved (data) ->called and promise fulfilled 
#7 resolved addd to microtask qeue 
#8  onfulfill excuted and logged "value is "dummy Data 

*/
