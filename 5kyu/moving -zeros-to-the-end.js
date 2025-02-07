// ❓ Description:
// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// ✔ Solution:

function moveZeros(arr) {
    return arr.filter(function(el) {return el !== 0}).concat(arr.filter(function(el) {return el === 0;}))
}

