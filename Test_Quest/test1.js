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

//optimal solution :
