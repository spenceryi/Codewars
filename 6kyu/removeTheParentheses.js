/*
Remove the parentheses by topping

In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"

Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.

*/
function removeParentheses(s){
    const letters = s.split('');
    let removing = false;
    let remainingClosingParentheses = 0;

    // Loop through each letter in the string.
    for (let i = 0; i < letters.length; i++) {
        // If an opening parenthese is detected, remove letters until matching closing parenthese is detected.
        // If another opening parenthese is detected while removing, extend the end condition appropriately.
        // i.e. continue entil all closing parentheses are removed.
        if (letters[i] === '(') {
            removing = true;
            remainingClosingParentheses++;
        }

        if (removing && remainingClosingParentheses > 0) {
            if (letters[i] === ')') {
                remainingClosingParentheses--;
            }
            letters.splice(i, 1);
            i--;

            if (remainingClosingParentheses === 0) {
                removing = false;
            }
        }
    }

    return letters.join('');
}