// ❓ Description:
// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter
// and returning a string containing the Roman Numeral representation of that integer.
//
// Modern Roman numerals are written by expressing each digit separately starting with the
// leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// ✔ Solution:


function solution(number){
    const  roman = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}

    let result = '';
    while (number > 0) {
        for (let el in roman) {
            if (roman[el]<=number) {
                result += el;
                number-=roman[el];
                break;}
        }
    }
    return result;
}

console.log('result:', solution(523))
