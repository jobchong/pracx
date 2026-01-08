/**
 * 172. Factorial Trailing Zeroes
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
};
