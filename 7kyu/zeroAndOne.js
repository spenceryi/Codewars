/*
Simple Fun #154: Zero And One by myjinxin2015

You have a string that consists of zeroes and ones. Now choose any two adjacent positions in the string: if one of them is 0, and the other one is 1, remove these two digits from the string.

Return the length of the resulting (smallest) string that you can get after applying this operation multiple times?

Note: after each operation, the remaining digits are separated by spaces and thus not adjacent anymore - see the examples below.

Examples
For "01010" the result should be 1:

"01010"  -->  "  010"  -->  "    0"
For "110100" the result should be 2:

"110100"  -->  "1  100"  -->  "1    0"
Input/Output
[input] string s
The initial string.

[output] an integer
The minimum length of the string that may remain after applying the described operations as many times as possible.
*/

function zeroAndOne(s) {
    // Split string into an array.
    const chars = s.split('');

    // Loop through array examining each character.
    chars.forEach((numString, i) => {
        // If current character is an empty space, skip.
        // If current character is the last item from the array, skip.
        // If current character and the next character adds up to 1, replace the two characters with empty space.
        if (numString !== ' ' && (chars.length !== i + 1) && (+numString + +chars[i+1]) === 1) {
            chars[i] = ' ';
            chars[i+1] = ' ';
        }
    });

    // Finally filter out all empty spaces and return length.
    return chars.filter(char => char !== ' ').length;
}