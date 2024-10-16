/*
01. Checking for prime number

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
In other words, a prime number is only divisible by 1 and the number itself.                                                              */

// JS code:
function isPrime(n) {
    if (n <=1) return false;
    
    for(let i = 2; i*i <= n; i++) {
        if(n % i === 0) return false;
    }
    return true; 
}

let result = isPrime(25);
console.log("isPrime: ", result);

// Time Complexity: O(√n)
// Explanation: The loop only runs up to the square root of n, making the algorithm efficient for large numbers.
