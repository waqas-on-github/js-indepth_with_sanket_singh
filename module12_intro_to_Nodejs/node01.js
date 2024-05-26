// whats node js? 
// node js is event driven sinlgle threaded non blocking io runtime 

//whats event driven?
// whats single thread vs multi thread?
// whats non blocking i/o?


// whats even  i/o is 
  // i/o(input /output) is basically any intrection  outside of cpu & memory
  // like reading or write into file system 
  //intrecting wiht networks  

//whats blocking io 
  // in blocking for every i/o base operation we need one thread  and when 
  // external operation/intrecion is beaing done  like getting data
  // from external resourse the 
  // "thread" will be put on sleep state and looses access to cpu which 
  //  is not good and even worse if  we have one core cpu 
  //on i/o ready thread will be  in "runnable/awaked" state  

//  whats non blocking i/o 
// in non blocking io system we only use one thread 
// when blocking i/o operation occers its registers in os kernel qeue and when i/o heavy 
//operation done via event loop it get informed 
// so main thread always available 

//non blocking i/o in context of node.js

/*

node js is single thread event driven non blocking io run time 
so in node js run time  thres is v8 engine , libuv(non blocking "c/c++" io library , binding libs  ) which have implementation of 
non blocking i/o 

in simple terms v8 engine consists event loop which is alway running and checking and 
i/o based task it takes i/o based task delegate it to runtime which even delegate it to 
kernel queue  when taks done event loop also register callback to microtask qeue and on 
completion of task event loop checks if main js call stack dont have any code to run it
add microtask qeue callback funcations to main  call stack and excutes it ; 

*/


