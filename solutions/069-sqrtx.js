/**
 * 69. Sqrt(x)
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let result = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid <= x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
};
