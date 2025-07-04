// ❓ Description:
// The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,
//
//     hammingWeight(10) // 1010  => 2
// hammingWeight(21) // 10101 => 3

// ✅ Solution:



function hammingWeight(x){

    function decimalToBinary(decimal) {
        if (decimal === 0) return "0";

        let binary = '';
        let num = decimal;

        while (num > 0) {
            binary = (num % 2) + binary;
            num = Math.floor(num / 2);
        }

        return binary;
    }

    return decimalToBinary(x).split('').filter(n => n === '1').length
}

console.log(hammingWeight(21))