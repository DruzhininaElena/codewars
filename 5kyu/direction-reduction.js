// ❓ Description:
// Write a function dirReduc which will take an array of strings and returns an array of strings
// with the needless directions removed (W<->E or S<->N side by side).

// ✔ Solution:

function dirReduc(arr){

    const pat = /(NORTHSOUTH|SOUTHNORTH|EASTWEST|WESTEAST)/
    let way = arr.join('');
    while( pat.test(way) ) way = way.replace(pat,'');
    return way.match(/(NORTH|SOUTH|EAST|WEST)/g)||[]

}

