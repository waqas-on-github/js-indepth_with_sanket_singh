// check is number is primae

let modval = 0;
function checkPrime(x) {
  for (let i = 2; i < x - 1; i++) {
    if (x % i === 0) {
      return `${x} is not prime number`;
    }
  }

  return `${x} is a prime number`;
}

const isprime = checkPrime(12);
console.log(isprime);
