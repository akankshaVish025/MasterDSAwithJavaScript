// A triangle pattern:
  
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        console.log('* '.repeat(i)); // * with or without space is okay
    }
}

printPattern(5);

/**
Output:
* 
* * 
* * *
* * * *
* * * * *
*/

// Time Complexity: O(n^2)
// Explanation: The outer loop runs n times, and the inner operation (printing stars) runs proportionally to the current line number.