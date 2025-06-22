// ❓ Description:
// It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed. The arrays may be of unequal lengths, in which case you will have to expand the shorter one in-place.
//
// # before
// my_array = ['a', 'b', 'c']
// other_array = [1, 2, 3]
//
// exchange_arrays(my_array, other_array)
//
// # after
// my_array == [3, 2, 1]
// other_array == ['c', 'b', 'a']

// ✅ Solution:

function exchangeWith(a, b) {

    const lengthA = a.length
    const lengthB = b.length

    const temp = [...a]
    b.forEach((el, i) => {
        a[i] = el
    })
    temp.forEach((el, i) => {
        b[i] = el
    })

    if (lengthA > lengthB) {
        a.reverse().splice(0, lengthA-lengthB)
        b.reverse()
    } else {
        a.reverse()
        b.reverse().splice(0, lengthB-lengthA)
    }

    // a.splice(0, a.length, ...b.reverse());
    // b.splice(0, b.length, ...c.reverse());

}

exchangeWith([ 2, 60, 50, 75, 15, 6, 75, 38 ], [ 6, 75, 38 ])