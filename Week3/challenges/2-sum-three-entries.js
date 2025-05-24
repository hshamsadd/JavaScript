/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the three numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
let result;

// Write your code here
const sortedList = [...list].sort((a,b) => a - b)
for(let i = 0; i < sortedList.length - 2; i++){
    const first = sortedList[i];
    let left = i + 1
    let right = sortedList.length - 1
    while (left < right) {
        const sum = first + sortedList[left] + sortedList[right];
        if (sum === 2020) {
            result = first * sortedList[left] * sortedList[right];
            i = sortedList.length;
            break;
    } else if (sum < 2020) {
    left++;
} else {
    right--;
}
}
}
console.log(result);
// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);
