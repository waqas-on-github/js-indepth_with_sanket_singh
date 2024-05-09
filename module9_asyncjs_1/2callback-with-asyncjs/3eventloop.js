function timeConsumingByLoop() {
  console.log("loop starts at time consuming task");
  for (let i = 0; i < 1000000000; i++) {
    // some task
  }
  console.log("loop ends time consuming task");
}

function timeConsumingByRuntimeFeature0() {
  console.log("starting timer of feature0 ");
  setTimeout(function exec1() {
    console.log("ended the timer of feature0");
    console.log("loop starts inside  feature0 exce1");
    for (let i = 0; i < 10000000000; i++) {
      // some task
    }
    console.log("loop ends inside exec1");
  }, 5000);
}

function timeConsumingByRuntimeFeature1() {
  console.log("starting timer of feature1");
  setTimeout(function exce2() {
    console.log("ended timer of feature1");
  }, 0);
}

function timeConsumingByRuntimeFeature2() {
  console.log("starting timer of feature2");
  setTimeout(function exce3() {
    console.log("ended timer of feature2");
  }, 200);
}

console.log("Hi"); // printed "hi"
timeConsumingByLoop(); // call of "timeConsumingByLoop" and js thread of excuation waits for to complete this funcation cuz its using native js examascript standerd js which is always sync js so after completion of this
timeConsumingByRuntimeFeature0(); // call of "timeConsumingByRuntimeFeature0" which containts "settimeout" which is not ecmascript standerd js its feature provided by "run time" so js put this in event qeue
timeConsumingByRuntimeFeature1(); //call of "timeConsumingByRuntimeFeature1" which containts "settimeout" which is not ecmascript standerd js its feature provided by "run time" so js put this in event qeue
timeConsumingByRuntimeFeature2(); //call of "timeConsumingByRuntimeFeature2" which containts "settimeout" which is not ecmascript standerd js its feature provided by "run time" so js put this in event qeue
timeConsumingByLoop(); // call of "timeConsumingByLoop" and js thread of excuation waits for to complete this funcation cuz its using native js examascript standerd js which is always sync js so after completion of this
console.log("by");

// excution pattern
/* 
1---> @1ms"Hi" printed 
2---> "timeConsumingByLoop" called and excuted and blocked the main thread cuz of for loop so printed 
@2ms->"loop starts at time consuming task"
@1000ms loop compelted so ptints ->"loop ends time consuming task"
3---> @10001ms "timeConsumingByRuntimeFeature0" called 
@10002ms ->"starting timer of feature0"
@10003ms -> js relizes their is run time feature call "setTimeOut" so its started in run time background  with 5s time to compelte "
@10004ms -> "timeConsumingByRuntimeFeature1" called which also call run time feature "setTimeOut" so its started excuting in background "
@10005ms -> js come back to "globle code excution" (excuation of code line by line ) but "timeConsumingByRuntimeFeature1" is compelted so its added to "callback qeue "
@10006ms ->"timeConsumingByRuntimeFeature2" caled wit 200ms time to complete  which has also  run time provide feature "setTimeOut" so its also started running/excuting in backgroud
@10007-> "timeConsumingByLoop" again called and blocke the main thread of excution of 10s so
during this time above async task are completed but main thread is busy running main funcation inside callstack so above of "async funcation added in callback qeue" so after callstack get empty (by the way event loop is always running infinintly and checking callstack to empty when callstack get empty its pick qeued funcation from callback qeue and add its into callstack one by one accordingly)
 
*/
