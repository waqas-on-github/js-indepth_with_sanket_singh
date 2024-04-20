const obj = {
  toString() {
    return {};
  },
};

console.log(obj.toString());
console.log(typeof obj.valueOf());

let objx = {};

// console.log(objx.valueOf().toString()); //---> [object object]

// let try to convert this object int number;

console.log(Number(objx)); //--> it will give us NAN cuz string [object object] can not be converted into number

// so if we try to

console.log(10 - objx); //--> ToNumber abstract op try to convert this obj to number so in order to
// do this it need to call Toprimitive abstract method  toprimitive will check hint type here which is
// intented to number so it will run valueOf() which will retutn whole object then it will run
// tostrig() method which will return string representantion of object so we get string [object object]
// so hence 10- [object object] gonna be NaN

let objy = { age: 22 };
console.log(objy.valueOf().toString()); //enev if we have values inside object we they'll be converted to strings via tostring() method so we are gonna get same results as above

// untill --> we override valueof() method like
let objz = {
  age: 88,
  valueOf() {
    return 22;
  },
};

console.log(objz.valueOf().toString());

console.log(10 - objz); // this will work abd behave like number

let objzz = {
  toString() {
    return "22";
  },
};

console.log(objzz.valueOf().toString());

console.log(10 - objzz);

console.log(typeof obj.valueOf().toString());
console.log(10 - obj);
