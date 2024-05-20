// custom itrator implementation

function fetchNextElement (array) {
    let idx =0 

    function next () {
        if(idx ===array.length) {
            return undefined
        }
        const nextElement = array[idx]
        idx ++ 
        return nextElement
    }

    return {next}
}



const autoFetcher =fetchNextElement([1,2,3,444,55,666,9 ])

console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());






