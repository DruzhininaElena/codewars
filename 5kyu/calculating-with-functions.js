// ❓ Description:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:
//     There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

// ✔ Solution:

function calculate([secondNum, operator ], firstNum) {
    if (operator  === 'plus') return firstNum + secondNum
    if (operator  === 'minus') return firstNum - secondNum
    if (operator  === 'times') return firstNum * secondNum
    if (operator  === 'dividedBy') return Math.floor( firstNum / secondNum)
}

function zero(arr) {
    return arguments.length === 0 ? 0 : calculate(arr, 0)
}

function one(arr) {
    return arguments.length === 0 ? 1 : calculate(arr, 1)

}

function two(arr) {
    return arguments.length === 0 ? 2 : calculate(arr, 2)
}

function three(arr) {
    return arguments.length === 0 ? 3 : calculate(arr, 3)
}

function four(arr) {
    return arguments.length === 0 ? 4 : calculate(arr, 4)
}

function five(arr) {
    return arguments.length === 0 ? 5 : calculate(arr, 5)
}

function six(arr) {
    return arguments.length === 0 ? 6 : calculate(arr, 6)
}

function seven(arr) {
    return arguments.length === 0 ? 7 : calculate(arr, 7)
}

function eight(arr) {
    return arguments.length === 0 ? 8 : calculate(arr, 8)
}

function nine(arr) {
    return arguments.length === 0 ? 9 : calculate(arr, 9)
}

function plus(num) {
    return [num, 'plus']
}

function minus(num) {
    return [num, 'minus']
}

function times(num) {
    return [num, 'times']
}

function dividedBy(num) {
    return [num, 'dividedBy']
}

