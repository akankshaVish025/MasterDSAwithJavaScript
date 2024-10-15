/*
01. Fibonacci series
The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, 
starting from 0 and 1. The first few numbers in the Fibonacci sequence are:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

Formula:

Fibonacci(0) = 0
Fibonacci(1) = 1
Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)   (for n ≥ 2)                                       */

// JS Code:
function fibonacci(n) {
    let fib = [0, 1];     // As fib[0]=0, fib[1]=1

    for(let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n];
}

const result = fibonacci(10);
console.log("result: ", result);         // 55

// Time Complexity: O(n)
// Explanation: The loop runs n times to compute the Fibonacci numbers.

// USING RECURSION:

function fib(n) {
    if(n<=1) {
        return n;
    }
    return fib(n-1) + fib(n-1);
}

let output = fib(7);
console.log("fibonacci: ", output);       // 64



