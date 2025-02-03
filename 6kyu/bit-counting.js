// ❓ Description:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in
// the binary representation of that number. You can guarantee that input is non-negative.
//
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// ✔ Solutions:



function getCountBits1 (n) {
    let countBits = 0;
    for (let i = 0; n > 0; i++) {
        if (n % 2 === 1) countBits++
        n = Math.floor(n / 2)
    }
    return countBits
}

function getCountBits2 (n) {
    return n.toString(2).split('0').join('').length;
}


