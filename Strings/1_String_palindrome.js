/*
01. String palindrome
A palindrome number is a number that remains the same when its digits are reversed. 
In other words, it reads the same backward as forward.

For example: 121 and 1331 are palindrome because reversing their digits gives 121 and 1331, which is the same as the original number.

Characteristics:
A single-digit number (like 7) is always a palindrome.
Negative numbers are typically not considered palindromes because of the minus sign (e.g., -121 reversed becomes 121-).
Palindrome numbers can have an even or odd number of digits, as long as the reversed sequence matches the original number.                                      */

// JS code (String):
function isPalindrome(str) {
    let reverseStr = str.split("").reverse().join("");
    return reverseStr === str;
}

let result = isPalindrome("madam");
console.log("isPalindrome: ", result);

// Time Complexity: O(n)
// Explanation: Reversing a string and checking for equality both take linear time based on the length of the string.

// EX.2

let str = 'A man, a plan, a canal: Panama'

function isPalindrome(str) {
    let newStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();    // amanaplanacanalpanama
    let reverse = newStr.split('').reverse().join('');    // amanaplanacanalpanama
    return reverse === newStr;    // true
}   

console.log(isPalindrome('hello'))
console.log(isPalindrome(str))