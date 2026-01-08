/**
 * 201. Bitwise AND of Numbers Range
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let shift = 0;
    while (left < right) {
        left >>= 1;
        right >>= 1;
        shift++;
    }
    return left << shift;
};
