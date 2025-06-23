// ❓ Description:
// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".
//
//     Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.
//
//     Some examples:
//
//     There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

// ✅ Solution:

function anagramCounter (wordsArray) {
    const sortedWords = wordsArray.map(w => w.split('').sort().join(''))
    let itemsCount ={}
    sortedWords.forEach(w=>{
        if (!itemsCount[w]) {
            itemsCount[w] = 1
        } else {
            itemsCount[w] +=1
        }
    })
    let res = 0
    Object.values(itemsCount).forEach(n => {
        if (n > 1) {
            res += n * (n - 1) / 2
        }

    })
    return res;
}

console.log(anagramCounter(["dell", "ledl", "abc", "cba", "bca", "bac"]))