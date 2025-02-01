// Description:
// Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.
//
// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.
//
//     For example:
//
//     toLeetSpeak("LEET") returns "1337"

// Solution:
function toLeetSpeak(str) {
    const alphabet = {
        A: '@',
        B: '8',
        C: '(',
        D: 'D',
        E: '3',
        F: 'F',
        G: '6',
        H: '#',
        I: '!',
        J: 'J',
        K: 'K',
        L: '1',
        M: 'M',
        N: 'N',
        O: '0',
        P: 'P',
        Q: 'Q',
        R: 'R',
        S: '$',
        T: '7',
        U: 'U',
        V: 'V',
        W: 'W',
        X: 'X',
        Y: 'Y',
        Z: '2'
    }
    return str.split('').map(char => alphabet[char] || char).join('');
}



