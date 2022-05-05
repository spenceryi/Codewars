/*
Highest Scoring Word by PG1

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    // Split input string into array.
    const input = x.split(' ');
    
    return input.reduce((highest, current) => {
        // Return current word only if the current word has a higher score.
        // This handles the scenario where two words have the same score.
        return getScore(highest) < getScore(current) ? current : highest;
    }, '');
  }
  
  function getScore(word) {
    // Split word into individual letters and use reduce to calculate the sum of each letter.
    const score = word.split('').reduce((sum, letter) => {
        // Read ASCII code of each letter and subtract the offset to get the score.
        return sum + letter.charCodeAt(0) - 96;
    }, 0);
    
    return score;
  }