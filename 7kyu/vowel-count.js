// ❓ Description:
// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

// ✔ Solution:

function getCount(str) {
    return str.split('').reduce((acc, w) => {
        if (['a', 'e', 'i', 'o', 'u'].includes(w)) {
            acc = acc + 1
        }
        return acc
    }, 0)
}

console.log(getCount('hello'))