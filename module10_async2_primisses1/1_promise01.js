const fs = require("node:fs");
// first of all why promisses ?
// basicaly promises are solution for problems with callback
// what are problems with callbacks
// two main problams
// --->1 inversion of controle
//--->2 callback hell --->code readibility problem

//so whats inversion of controle
// inversion of controle is problem of having no controle of your own funcation  or giving controle of your funcation to someone else or your OR funcation excaution is dependent on others

// so main problem with callbacks ..... INVERSION OF CONTROL .....
function doTask(fn, x) {
  // whole mplementation was done by team A
  return fn(x * x);
}

// funcation consumed by Team B
doTask(function excu(num) {
  console.log("wo num is " + num);
}, 20);
// so team B dont know exactaly how Team A implemented funcation and if both team are'nt synced to each other itll cause lot of problems

/*
 promise are readibity enhancer
 in javascript promises are special type of object that get returned immediatly when we "CALL THEM"
 promises act as a placeholer to for data whill come in later/future like async fetch call
 in these promise objects we can attach the funcatinality we want to excute when future task is compelted
*/
//creation of promise is sync in nature

// promise can have one state out of these three
/* ----> pending -->its default it means work in progress
   -----> fullfilled  --> it means task done 
   -----> rejected  --> it means promise rejcected 

   */

// promise have another property value which is base on  return of reslove callback
//untill promise dont resolved itll be remain undefined

// promises are syncronus  in natute
function createPromiseWithLoop() {
  return new Promise(function excu(reslove, reject) {
    for (let i = 0; i < 1000000000; i++) {}
    const random = Math.floor(Math.random() * 10);
    if (random % 2 === 0) {
      reslove(random);
    } else {
      reject(random);
    }
  });
}

let y = createPromiseWithLoop();
console.log(y);

 // promise will run any aysnc code like in normal js and delegate async task to crosponding runtime
 function createPromiseWithsetTime() {
   return new Promise(function excu(reslove, reject) {
     const random = Math.floor(Math.random() * 10);
     setTimeout(() => {
       if (random % 2 === 0) {
         reslove(random);
       } else {
         reject(random);
       }
     }, 3000);
   });
 }

const z = createPromiseWithsetTime();
z.then(
  function onFullfilled() {
    console.log("promise fullfilled");
  },
  function onRejected() {
    console.log("promise rejected ");
  }
);
