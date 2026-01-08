/**
 * 70. Climbing Stairs
 *
 * DO NOT look at this until you've thoroughly attempted the problem!
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }
    let prev1 = 2;
    let prev2 = 1;
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
};
