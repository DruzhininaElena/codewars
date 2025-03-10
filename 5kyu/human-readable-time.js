// ❓ Description:
//
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.

// ✔ Solution:

function humanReadable (seconds) {

    function templateOfUnits(unit) {
        return unit > 9 ? unit : `0${unit.toString()}`
    }

    let HH = Math.floor(seconds / 3600)
    let MM = Math.floor(seconds / 60 % 60)
    let SS = seconds % 60

    return `${templateOfUnits(HH)}:${templateOfUnits(MM)}:${templateOfUnits(SS)}`
}

