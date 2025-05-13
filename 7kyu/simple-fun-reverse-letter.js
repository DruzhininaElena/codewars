// ❓ Description:
// Given a string str, reverse it and omit all non-alphabetic characters.
//
//     Example
// For str = "krishan", the output should be "nahsirk".
//
//     For str = "ultr53o?n", the output should be "nortlu".

// ✔ Solution:

function reverseLetter(str) {
    return str.split('').filter(el => /^[a-zA-Z]+$/.test(el)).reverse().join('')
}

console.log(reverseLetter('hi!'))