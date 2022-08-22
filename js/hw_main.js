// console.log('Hello there')

//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/


let exerciseOneArr = [1, 2, 3, 5, 6, 7]

// need a for loop; for num, check if prev_num == num -1;
// start at index 1, not index 0

// ASK ABOUT RETURN STMT, ASK ABOUT NaN how to account for that for the first index 0 in for loop...
for (let i in exerciseOneArr){
    if (exerciseOneArr[i] - exerciseOneArr[i-1] > 1){
        console.log(i);
    }
    // console.log(i, exerciseOneArr[i] - exerciseOneArr[i-1]);
};

// console.log(exerciseOneArr.length)


//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/
console.log('EXERCISE 2 ---------------')

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 
var total = 0;
for (i = 0; i < numbers1.length; i++){
    if (numbers1[i] > 0){
        total += numbers1[i]
    }
}
console.log(total)


let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 
var total = 0;
for (i = 0; i < numbers2.length; i++){
    if (numbers2[i] > 0){
        total += numbers2[i]
    }
}
console.log(total)