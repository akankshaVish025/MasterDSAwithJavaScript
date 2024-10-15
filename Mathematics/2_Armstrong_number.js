/*
02. Armstrong number
An Armstrong number (also known as a Narcissistic number) is a number that is equal to 
the sum of its own digits each raised to the power of the number of digits in the number.
EXAMPLE 1: Let's take 153 as an example:
•	It has 3 digits, so each digit is raised to the power of 3 (the number of digits).
Calculation:
o	1³ = 1
o	5³ = 125
o	3³ = 27
Sum: 1 + 125 + 27 = 153
Since the sum equals the original number (153), 153 is an Armstrong number.
EXAMPLE 2 : For a 4-digit number, let's check 9474:
•	It has 4 digits, so we raise each digit to the power of 4.
Calculation:
o	9⁴ = 6561
o	4⁴ = 256
o	7⁴ = 2401
o	4⁴ = 256
Sum: 6561 + 256 + 2401 + 256 = 9474
Since the sum equals the original number, 9474 is also an Armstrong number.
*/

// code:
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length;

    while(temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

let result = isArmstrong(153);
console.log(result, "result") // true

// Time Complexity: O(d), where d is the number of digits in the number.
// Explanation: The loop runs d times, once for each digit.