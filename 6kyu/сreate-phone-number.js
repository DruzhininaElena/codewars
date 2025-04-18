// ❓ Description:
// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
//
//     Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//
//     Don't forget the space after the closing parentheses!

// ✔ Solution:

function createPhoneNumber(numbers) {
    numbers.splice(0, 6, '(', numbers[0], numbers[1], numbers[2], ') ', numbers[3], numbers[4], numbers[5], '-')
    return numbers.join('')
}

function createPhoneNumber2(numbers) {
    numbers = numbers.join('');
    return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))