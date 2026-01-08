/**
 * 67. Add Binary
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = '';

    while (i >= 0 || j >= 0 || carry) {
        const sum = (i >= 0 ? a[i--] - '0' : 0) + (j >= 0 ? b[j--] - '0' : 0) + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return result;
};
