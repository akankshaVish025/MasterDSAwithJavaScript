/**
02. Remove Duplicate elements from array:

To remove repeated elements from an array in JavaScript without using built-in methods like Set or filter(), 
we can iterate through the array and store each unique element in a new array.                                                              */

// Code
function removeDuplicates(arr) {
    let uniqueArray = [];           // Array to store unique elements
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;        // A flag to track if the element is a duplicate
        for (j = 0; j < uniqueArray.length; j++) {         // Loop through uniqueArray to check for duplicates
            if (arr[i] === uniqueArray[j]) {           // If element is found in uniqueArray
                isDuplicate = true;         // Mark as duplicate
                break;              // Exit the inner loop, no need to check further
            }
        }

        if(!isDuplicate) {        // If no duplicate is found
            uniqueArray.push(arr[i]);       // Add the element to uniqueArray
        }
    }

    return uniqueArray;     // Return the array with only unique elements
}

let result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log("Result:" , result);

// Time Complexity: O(n^2) in the worst case (due to the nested loops).
// Space Complexity: O(n) (for storing unique elements).

// OR

// Code using built in object and spread operator(...)
function removeDuplicate(arr) {
    let mySet = new Set(arr);
    let uniqeArr = [...mySet];
    return uniqeArr;

    // OR
    // return [... new Set(arr)];
}

let res = removeDuplicate([5, 4, 7, 5, 3, 7, 4, 9]);
console.log("Res: ", res);

/** Code Breakdown:

1. Set in JavaScript:
A Set is a built-in object in JavaScript that only stores unique values. When you create a Set from an array, 
it automatically removes any duplicate elements.                                                                                    

Example:                                                                                                                                            */
let mySet = new Set([1, 2, 2, 3, 4, 4]);
console.log(mySet); // Output: Set(4) {1, 2, 3, 4}

/*
2. Spread Operator (...):
The spread operator (...) allows us to take an iterable (like an array or set) and expand it into individual elements.
By using ... inside an array literal ([...]), we can convert the Set (which stores unique elements) back into an array.

Example:                                                                                                                                          */
let uniqueArray = [...mySet];
console.log(uniqueArray); // Output: [1, 2, 3, 4]


// Time Complexity: O(n)
// Explanation: The Set automatically removes duplicates, and converting it back to an array takes linear time.