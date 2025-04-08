// ❓ Description:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// ✔ Solution:

function solution(str){
    if (!str) return []
    const arr = str.match(/.{1,2}/g)
    return str.length % 2 ? arr.slice(0, arr.length - 1).concat([`${arr[arr.length-1]}_`]) : arr
}

console.log(solution('skdhksj'))