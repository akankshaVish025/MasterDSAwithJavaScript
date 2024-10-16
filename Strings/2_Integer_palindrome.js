/*
02. Integer palindrome
A palindrome number is a number that remains the same when its digits are reversed. 
In other words, it reads the same backward as forward.

For example: 121 and 1331 are palindrome because reversing their digits gives 121 and 1331, 
which is the same as the original number.

Characteristics:
A single-digit number (like 7) is always a palindrome.
Negative numbers are typically not considered palindromes because of the minus sign (e.g., -121 reversed becomes 121-).
Palindrome numbers can have an even or odd number of digits, as long as the reversed sequence matches the original number.                                      */

// JS code (Integer):
function isIntegerPalindrome(num) {
    let reversed = parseInt(num.toString().split('').reverse().join(''));
    return num === reversed;
}

console.log(isIntegerPalindrome(121));  // Output: true

// Time Complexity: O(d), where d is the number of digits in the integer.
// Explanation: The integer is converted to a string, reversed, and compared, all operations being linear in terms of the number of digits.