const arr = [1,2,3,4,4,555,677,88]

const itrator = arr[Symbol.iterator]()
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());
console.log(itrator.next());

