/**
 * 191. Number of 1 Bits
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        n &= n - 1;
        count++;
    }
    return count;
};
