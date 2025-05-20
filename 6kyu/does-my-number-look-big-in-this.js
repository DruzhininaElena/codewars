// ❓ description:

// a narcissistic number (or armstrong number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. in this kata, we will restrict ourselves to decimal (base 10).
//
// for example, take 153 (3 digits), which is narcissistic:
//
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// the challenge:
//
//     your code must return true or false (not 'true' and 'false') depending upon whether the given number is a narcissistic number in base 10.

// ✔ solution:

function narcissistic(value) {
    return value.toString()
        .split('')
        .map((el, _, arr) => (+el) ** arr.length)
        .reduce((a, b) => a + b)
        === value
}

console.log(narcissistic(153))