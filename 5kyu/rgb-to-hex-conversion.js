// ❓ Description:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal
// representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
//
//     Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
//
// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// ✔ Solution:

const rgb = (r, g, b) => [r, g, b]
    .map(n => {
        const hex = n.toString(16)
        if (n < 0) return '00'
        if (n > 255) return 'FF'
        return hex.length === 1 ? `0${hex}` : hex
    })
    .join('')
    .toUpperCase()


console.log(rgb(255, 12, 32))