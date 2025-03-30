// ❓ Description:
// We are given two arrays of integers A and B and we have to output a sorted array with the integers that fulfill the following constraints:
//
//     they are present in both ones
//
// they occur more than once in A and more than once in B
//
// their values are within a given range (inclusive)
//
// they are odd or even according as it is requested
//
// Example
// Given two arrays, a range, and a wanted parity:
//
//     arrA = [1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3]
// arrB = [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0]
// rng = [-4, 4] # is the range of the integers from -4 to 4 (inclusive)
// wanted = "odd"
// Process to obtain the result:
//
//     0, 1, 2, 3, 7, are the numbers present in arrA and arrB
// 1, 2, 3, 7,  occur twice or more in arrA and arrB
// 1, 2, 3,  are in the range [-4, 4]
// 1, 3, are odd
// output = [1, 3]

// ✔ Solution:

function findArr(arrA, arrB, rng, wanted) {

    function getFilteredArray(arr) {
        const filteredArr = arr.filter(el => el >= rng[0] && el <= rng[1])
        const countedNumbers = filteredArr.reduce((acc, el) => {
            acc[el] ? acc[el] += 1 : acc[el] = 1
            return acc
        }, {})
        return filteredArr.filter(el => countedNumbers[el] > 1).reduce((acc, el) => {
            if (!acc.includes(el)) acc.push(el)
            return acc
        }, [])
    }

    const resArrA = getFilteredArray(arrA).sort((a, b) => a - b)
    const resArrB = getFilteredArray(arrB).sort((a, b) => a - b)

    return (wanted === 'odd') ? resArrA.filter(el => resArrB.includes(el) && el % 2) : resArrA.filter(el => resArrB.includes(el) && !(el % 2))
}

console.log(findArr([1, -2, 7, 2, 1, 3, 7, 1, 0, 2, 3], [2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0], [-4, 4], 'odd'))