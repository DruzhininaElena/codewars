// ❓ Description:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
//
//     Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
//
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// ✔ Solution:

function toCamelCase(str){
    return str.split('_').map(el => el.split('-')).join().split(',').map((w, i) => {
        return i !== 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w
    }).join('')
}

console.log(toCamelCase( 'the_Pippi-is-Omoshiroi'))