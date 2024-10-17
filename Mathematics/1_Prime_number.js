/*
01. Checking for prime number

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
In other words, a prime number is only divisible by 1 and the number itself.                                                              */

// JS code:
function isPrime(n) {
    if(n <= 1) return false;
    
    for(let i=2; i <= Math.sqrt(n); i++) {
        if(n%i === 0) return false;
    }
    return true;
}

let result = isPrime(31);
console.log("isPrime: ", result);

/****  IMP***
Question:
"Why do we only check factors up to the square root of a number to determine if it's prime?"

Answer:
"We check up to the square root because if a number has a factor larger than its square root, 
it must also have a smaller one. If we find no factors by the square root, the number is prime."

i.e
"When we check if a number is prime, we’re looking for two numbers that multiply to give the original number. 
If both factors were larger than the square root, their product would exceed the original number.

So, if a number has any factor larger than its square root, there must also be a corresponding factor smaller than the square root. 
That’s why we only need to check up to the square root—if we don’t find any factors by then, the number is prime."
*/

// OR

function checkPrime(n) {
    if (n <=1) return false;
    
    for(let i = 2; i*i <= n; i++) {
        if(n % i === 0) return false;
    }
    return true; 
}

let res = checkPrime(25);
console.log("checkPrime: ", res);

// Time Complexity: O(√n)
// Explanation: The loop only runs up to the square root of n, making the algorithm efficient for large numbers.
