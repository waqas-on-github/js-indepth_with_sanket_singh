// generateor are one step up for itrators for doning declarative programming 
// and generators excution is not continouse we can break 

function* fetchNextElement () {
    console.log("im  inside  the generator funcation");
    yield "wow";  // yield is kindof return but not exactly return keyword it dont 
                 // end funcation excution but it stop funcation excution which is 
                 // resumeable 
   yield 1 
   console.log("somewhere in middle");
   
   return 22 // retun will  behave like last yeild for funcation 


}


const iter = fetchNextElement()
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


