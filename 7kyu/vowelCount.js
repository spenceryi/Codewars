/*
Vowel Count by jayeshcp

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Use reduce to calculate the sum of each occurrence of a vowel.
    return str.split('').reduce((count, letter) => {
        if (vowels.includes(letter)) {
            // Increment sum if the letter is a vowel.
            return count + 1;
        }
        return count;
    }, 0);
}