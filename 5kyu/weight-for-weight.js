// ❓ Description:
// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
//
//     I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
//
//     For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
//
// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
//
//     Example:
//     "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:
//
//     "100 180 90 56 65 74 68 86 99"

// ✅ Solution:

function orderWeight(string) {
    if (!string.trim()) return string;

    return string
        .split(' ')
        .sort((a, b) => {
            const weightA = a.split('').reduce((sum, digit) => sum + +digit, 0);
            const weightB = b.split('').reduce((sum, digit) => sum + +digit, 0);

            if (weightA === weightB) {
                return a.localeCompare(b);
            }
            return weightA - weightB;
        })
        .join(' ');
}

console.log(orderWeight("103 123 4444 99 2000"))
