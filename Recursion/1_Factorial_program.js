/*
01. Factorial Number
A factorial (denoted by n!) is the product of all positive integers less than or equal to a given positive integer n. 
In simpler terms, it multiplies a number by all the whole numbers below it, down to 1.
Formula for Factorial:
n!=n×(n−1)×(n−2)×⋯×3×2×1

Example:
5! (read as "5 factorial") is: 5!=5×4×3×2×1=120
3! is: 3!=3×2×1=6

Factorial of 0:
By definition, the factorial of 0 is 1:
0!=1

*/

//code:
// Using recursion
function factorial(n) {
    if(n === 0 || n === 1) {     // As 0! = 1 and 1! = 1
        return 1;
    }
    return n * factorial(n-1);
}   

console.log(factorial(10));

// Time Complexity: O(n)
// Explanation: The function calls itself recursively n times.