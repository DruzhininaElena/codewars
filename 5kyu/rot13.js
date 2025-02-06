// ❓ Description:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters
// after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
//Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// ✔ Solution:

function rot13(message){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let alphabetToLowerCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let result = message.split('').map((symbol) => {
        function findRot13Letter(alph) {
            let rot13LetterIndex = alph.indexOf(symbol) + 13 > 25 ? alph.indexOf(symbol) - 13 : alph.indexOf(symbol) + 13
            return alph[rot13LetterIndex]
        }

        if (alphabet.some(el => el === symbol)) return findRot13Letter(alphabet)
        if (alphabetToLowerCase.some(el => el === symbol)) return findRot13Letter(alphabetToLowerCase)
        else return symbol

    })

    return result.join('')
}

