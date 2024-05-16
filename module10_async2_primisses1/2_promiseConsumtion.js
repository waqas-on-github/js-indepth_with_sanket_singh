function createPromiseWithsetTime() {
  console.log("entring in excuter in promise constructor ");
  return new Promise(function excu(reslove, reject) {
    const random = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (random % 2 === 0) {
        reslove(random);
      } else {
        reject(random);
      }
    }, 3000);
    console.log("exiting from excuter in promiese constructr ");
  });
}

// promise consumtion phase in then we can have to provide two funcation first one for fulfillment and second one for rejection phase what value we pass in resolve callback value will be accesed in fulfill funcation params & what value passes in reject will be accesed in reject funcation params
console.log("starting....");
const p = createPromiseWithsetTime();
console.log("we are now waiting for the promise to complete");
console.log("currently my promise object is like ...." + p);

p.then(
  function onFullfill(value) {
    console.log(" inside  fullfill handler  with value " + value);
    console.log("prmise after fulfillment" + p);
  },
  function onRejected(value) {
    console.log("inside  rejection handler  with value " + value);
    console.log("promise after rejection is " + p);
  }
);

console.log(p);

// A BIT OF THEORY
/* 
when we create a promise its add three things 

        --->promise state ---> [pending | fulfilled  | rejected]
        --->primise value ---> [undefined(default) |[ resolved| reject] returned value ]
        --->promise two arrays 
                  --->[] for onfulfill handlers 
                  --->[] for onrejected handlrs 
               
when we consume a promise it'll do few things 
#1st --> .then will "REGISTER" handlers to crosponding array
#2nd --> when promise state changes the handler will be delegate to microtask qeue 
#3rd --> after excution of all global/blocking  code funcations added by promise will be add to callstak one by one  
    
*/


/*                .......... KEY POINTS TO REMMEMBER ..............

#1 all promise excuted sync way if there is any async taks itll be delegated to run time like normal js
#2 utill promise state changes from pending -->[fulfilled |rejected] value of variable we have 
   stored promise return value will promisate e st
#3 afetr .then handler will be add to array returned by promise call  
#4 after promise state change crosponding handler will be add to microtask qeue 
#5 even if  promise is operforming sync task  they'll be added to microtask qeue 
#6  microtask qeue will be prefferd on callback qeue 

*/