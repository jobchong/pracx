/**
 * 202. Happy Number
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = sumSquares(n);
    }
    return n === 1;
};

function sumSquares(num) {
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
