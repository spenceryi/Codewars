/*
Count of positives / sum of negatives by Dentzil

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

function countPositivesSumNegatives(input) {
    // Create a result array.
    const result = [0, 0];

    if (Array.isArray(input) && input.length > 0) {
        input.forEach(num => {
        if (num > 0) {
            // Increment the counter if the number is positive.
            result[0]++;
        } else if (num < 0) {
            // Add the number to the sum if the number is negative.
            result[1] += num;
        }
        // Neither positive or negative is ignored i.e. 0.
        });
        
        return result;
    } else {
        // input is either empty or not an array. Return an empty array.
        return [];
    }
}