// ❓ Description:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// ✅ Solution:

function scramble(str1, str2) {
    const countStr1 = {};
    const countStr2 = {};

    for (const char of str1) {
        countStr1[char] = (countStr1[char] || 0) + 1;
    }

    for (const char of str2) {
        countStr2[char] = (countStr2[char] || 0) + 1;
    }

    for (const char in countStr2) {
        if (!countStr1[char] || countStr1[char] < countStr2[char]) {
            return false;
        }
    }

    return true;
}

console.log(scramble('cedewaraaossoqqyt', 'codewars'))

