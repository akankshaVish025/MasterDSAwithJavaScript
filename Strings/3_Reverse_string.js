/*
03. String Reversal: 
Reordering the characters of a string such that the last character becomes the first and the first becomes the last.

Example:

Original: "hello"
Reversed: "olleh"

*/

// code
function reverseString(str) {
    return str.split('').reverse().join('');
}

let result = reverseString("Akanksha");
console.log(result, "result");

// JS code without using built-in JS methods:
function reverseStr(str) {
    let reversed = "";

    // Loop through the string from the last character to the first
    for(let i = str.length - 1; i >= 0; i--) {
        // console.log(str[i])
        reversed += str[i];  // Append each character in reverse order
    }
    return reversed;
}

let res = reverseStr("Kanishka");
console.log(res, "res");

// Time Complexity: O(n)
// Space Complexity: O(n)
// Explanation: The split, reverse, and join operations all take linear time based on the length of the string.
