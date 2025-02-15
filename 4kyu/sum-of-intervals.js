// ❓ Description:
// Write a function called sumIntervals/sum_intervals that accepts an array of intervals,
// and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
//
//  Intervals
// Intervals are represented by a pair of integers in the form of an array.
// The first value of the interval will always be less than the second value.
// Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// ✔ Solution:

function sumIntervals(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);
    let result = 0;
    let min = intervals[0][0];
    let max = intervals[0][1];

    for (let interval of intervals) {
        result += max - min;
        min = Math.max(max, interval[0]);
        max = Math.max(max, interval[1]);
    }

    return result + max - min;

}

