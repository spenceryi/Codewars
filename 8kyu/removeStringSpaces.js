/*
Remove String Spaces by PG1

Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(str) {
    // Split string using space and join using empty string which removes all spaces.
    return str.split(' ').join('');
}