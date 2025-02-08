// ❓ Description:
// Define a function that takes in two non-negative integers a and b
// and returns the last decimal digit of a**b. Note that a and b may be very large!
//     For example, the last decimal digit of 9**7 is 9, since 9** 7 = 4782969. The last decimal digit of
// (2**200)**2**300, which has over 10**92 decimal digits, is 6. Also, please take 0**0 to be 1.
//
// You may assume that the input will always be valid.

// ✔ Solution:

function lastDigit(n, m) {
    if (m === 0n) return 1n;

    const exp = (m - 1n) % 4n + 1n;
    return n ** exp % 10n;
}




