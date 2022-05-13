/*
Separating Strings by K-Calderon-ASC

Create a function that takes a string and separates it into a sequence of letters.

The array will be formatted as so:

[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.

Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)

Examples:

sepStr("Just Live Life Man")
// => [['J','L','L','M'],
// => ['u','i','i','a'],
// => ['s','v','f','n'],
// => ['t','e','e','']]);

sepStr("The Mitochondria is the powerhouse of the cell")
// => [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
// => [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
// => [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
// => [ '', 'o', '', '', 'e', '', '', 'l' ],
// => [ '', 'c', '', '', 'r', '', '', '' ],
// => [ '', 'h', '', '', 'h', '', '', '' ],
// => [ '', 'o', '', '', 'o', '', '', '' ],
// => [ '', 'n', '', '', 'u', '', '', '' ],
// => [ '', 'd', '', '', 's', '', '', '' ],
// => [ '', 'r', '', '', 'e', '', '', '' ],
// => [ '', 'i', '', '', '', '', '', '' ],
// => [ '', 'a', '', '', '', '', '', '' ]]

*/


function sepStr(str) {
    // Split sentence into an array.
    const words = str.split(' ');
    // Count letters in the longest word.
    const longestWordCount = words.reduce((longest, current) => current.length > longest.length ? current : longest, '').length;
    // Initiate the 2d array using longestWordCount.
    const result = [...Array(longestWordCount).keys()].map(_ => []);

    // Process each word
    words.forEach(word => {
        // Go through each letter in the word using longestWordCount.
        for (let i = 0; i < longestWordCount; i++) {
            const letter = word[i];

            // If letter exists, add it to the result, add empty string otherwise.
            if (letter) {
                result[i].push(letter);
            } else {
                result[i].push('');
            }
        }
    });

    return result;
}