// ❓ Description:
// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

// ✅ Solution:

function XO(str) {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

console.log(XO("ooxx"))
console.log(XO("xooxx"))