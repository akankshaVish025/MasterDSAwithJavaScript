//Write a function that takes n number of arrays of integers and returns an array of distinct integers i.e. the integers should appear only once among the input arrays. Example: input: [1,2,3],[2,3,4],[3,4,5], output:[1,5]. Note: Number of arrays can be n. The function should work when inputs are increased or decreased.

// my solution
let num = [[1,2,3],[2,3,4],[3,4,5],[2, 4, 7]]
function checkUnique(num) {
    let newArr = num.flat();
    console.log(newArr,"Arr")
    let finArr = {};
    // let count = 1;
    for(let i=0; i < newArr.length; i++) {
        if(!finArr.hasOwnProperty(newArr[i])) {
            console.log(newArr[i])
            finArr[newArr[i]] = 1;
        } else {
            finArr[newArr[i]] += 1;
        }
    }
    let distArr = Object.keys(finArr).filter(key => finArr[key] === 1).map(Number);
    return distArr;
}
console.log(checkUnique(num));

// Testcase:
// Subtract the Product and Sum of Digits of an Integer
/* 
Example 1: 

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
*/

// code:
let subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    while(n > 0) {
        let digit = n % 10;
        product *= digit;
        sum += digit;
        n = Math.floor(n/10);
    }
    let result = product - sum;
    return result;
};

console.log(subtractProductAndSum(4421)) // 21

// Time Complexity: O(log10(n))
// Space Complexity: O(1)

// Reverse String:
function FirstReverse(str) { 

// code goes here  
let reversedStr = "";
for(let i = str.length -1; i >= 0; i--) {
    reversedStr += str[i];
}
return reversedStr;
}
    
// keep this function call here 
console.log(FirstReverse("I Love Code")); // edoC evoL I

// Time Complexity: O(n)
// Space Complexity: O(n) 

// Print Longest word

function LongestWord(sen) { 

// code goes here  
let word = sen.replace(/[^a-zA-Z0-9 ]/g, '');
let newArr = word.split(' ')
let newObj = ""
for (let i=0; i < newArr.length; i++) {
    if(newArr[i].length > newObj.length) {
    newObj = newArr[i];
    }
}
return newObj; 
}
    
console.log(LongestWord("fun&!! time"));

/* 
Input: "I love dogs"
Output: love

Input: "fun&!! time"
Output: time
*/
