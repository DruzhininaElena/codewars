// ❓ Description:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
//     Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// ✔ Solution:

function duplicateEncode(word){
    const countedLetters =  word.toLowerCase().split('').reduce((acc, el) => {
        acc[el] ? acc[el]+=1 : acc[el] = 1
        return acc},
        {});

    return  word.toLowerCase().split('').map((el) => {
        return countedLetters[el] > 1 ? ')' : '('
    }).join('')

}

console.log(duplicateEncode('(( @'))