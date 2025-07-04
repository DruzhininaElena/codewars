// ❓ Description:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
//     solution('abc', 'bc') // returns true
//     solution('abc', 'd') // returns false

// ✅ Solution:

function solution(str, ending){
    if (!ending) return true
    return ending === str.slice(-ending.length)

//     return str.endsWith(ending);
}

console.log(solution('abc', 'bc'))
console.log(solution('abc', 'd'))
console.log(solution('abc', ''))
